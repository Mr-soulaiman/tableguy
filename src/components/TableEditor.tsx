import React, { useState, useRef, useEffect } from 'react';
import { BrutalCard } from './BrutalCard';
import { BrutalButton } from './BrutalButton';
import {
  Plus,
  Trash2,
  RotateCcw,
  Eraser,
  Copy,
  Check,
  Code2,
  Hash,
  FileSpreadsheet,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ChevronDown,
  Palette,
  Ban,
  PenLine,
  X,
  Download,
  Table as TableIcon,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowDownAZ,
  ArrowUpZA,
  CopyPlus,
  CopyX,
  MoreHorizontal,
  ArrowUpDown,
  ArrowLeftRight,
  Split,
  Combine,
} from 'lucide-react';
import { TableItem, CellFormat, ColumnAlignment, MergeCell } from '../types';
import {
  getMergeMatrix,
  findMergeAt,
  sanitizeMerges,
  onRowRemovedMerges,
  onColRemovedMerges,
} from '../utils/mergeUtils';
import {
  tableToHtml,
  tableToMarkdown,
  tableToCsv,
  tableToPlainText,
  copyTextToClipboard,
  downloadFile,
  generateFullHtmlDocument,
  generateFullMarkdown,
  generateFullCsv,
  generateFullPlainText,
  downloadPdf,
} from '../utils/tableExport';

const PRESET_COLORS = [
  { name: 'Yellow', hex: '#FFDE00' },
  { name: 'Light Yellow', hex: '#FEF08A' },
  { name: 'Mint Green', hex: '#BBF7D0' },
  { name: 'Sky Blue', hex: '#BAE6FD' },
  { name: 'Soft Coral', hex: '#FECACA' },
  { name: 'Peach', hex: '#FED7AA' },
  { name: 'Lavender', hex: '#E9D5FF' },
  { name: 'Light Gray', hex: '#E5E7EB' },
];

type SelectedCell =
  | { type: 'cell'; rowIndex: number; colIndex: number }
  | { type: 'header'; colIndex: number };

interface AutoResizeCellProps {
  value: string;
  onChange: (val: string) => void;
  onFocus?: () => void;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  id?: string;
}

const AutoResizeCell: React.FC<AutoResizeCellProps> = ({
  value,
  onChange,
  onFocus,
  onClick,
  onKeyDown,
  placeholder,
  className = '',
  style = {},
  id,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      const scrollH = el.scrollHeight;
      el.style.height = `${Math.max(34, scrollH)}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  useEffect(() => {
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, []);

  return (
    <textarea
      ref={textareaRef}
      id={id}
      rows={1}
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onChange={e => {
        onChange(e.target.value);
      }}
      style={{
        resize: 'none',
        overflow: 'hidden',
        ...style,
      }}
      className={`w-full whitespace-pre-wrap break-words leading-relaxed transition-colors ${className}`}
      {...props}
    />
  );
};

interface TableEditorProps {
  table: TableItem;
  tableIndex: number;
  totalTables: number;
  allTables?: TableItem[];
  onUpdateTable: (updated: TableItem) => void;
  onDeleteTable?: () => void;
  onResetToExample?: () => void;
}

export const TableEditor: React.FC<TableEditorProps> = ({
  table,
  tableIndex,
  totalTables,
  allTables,
  onUpdateTable,
  onDeleteTable,
  onResetToExample,
}) => {
  const {
    headers,
    rows,
    cellColors,
    headerColors,
    cellFormats = rows.map(r => r.map(() => ({}))),
    headerFormats = headers.map(() => ({})),
    merges = [],
    signatureEnabled = false,
    signatureName = '',
  } = table;

  // Selected cell & color picker state
  const [selectedCell, setSelectedCell] = useState<SelectedCell | null>(null);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  // Table tools popover menu state ('align' | null)
  const [activeMenu, setActiveMenu] = useState<'align' | null>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);

  // Active target columns for Sort and Align
  const [selectedSortCol, setSelectedSortCol] = useState<number>(0);
  const [selectedAlignCol, setSelectedAlignCol] = useState<number>(-1); // -1 = All columns

  // Copy & Download notification states
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [downloadedFormat, setDownloadedFormat] = useState<string | null>(null);
  const [duplicateNotice, setDuplicateNotice] = useState<string | null>(null);

  // Computed 2D merge matrix
  const mergeMatrix = getMergeMatrix(rows.length, headers.length, merges);

  // Column alignments normalization
  const currentAlignments: ColumnAlignment[] =
    table.columnAlignments && table.columnAlignments.length === headers.length
      ? table.columnAlignments
      : headers.map((_, i) => table.columnAlignments?.[i] || 'left');

  // Currently active column index for column-level tools
  const activeColIdx =
    selectedCell?.colIndex !== undefined
      ? Math.min(Math.max(0, selectedCell.colIndex), headers.length - 1)
      : 0;

  const activeAlign: ColumnAlignment = currentAlignments[activeColIdx] || 'left';

  // Sync selected target columns when activeColIdx changes
  useEffect(() => {
    if (activeColIdx >= 0 && activeColIdx < headers.length) {
      setSelectedSortCol(activeColIdx);
    }
  }, [activeColIdx, headers.length]);

  // Close color picker on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target as Node)) {
        setIsColorPickerOpen(false);
      }
    };
    if (isColorPickerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isColorPickerOpen]);

  // Close tools popover menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toolsMenuRef.current && !toolsMenuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    if (activeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenu]);

  // Current color of selected cell
  const getSelectedColor = (): string => {
    if (!selectedCell) return '';
    if (selectedCell.type === 'header') {
      return headerColors[selectedCell.colIndex] || '';
    }
    return cellColors[selectedCell.rowIndex]?.[selectedCell.colIndex] || '';
  };

  const currentColor = getSelectedColor();

  // Current format (bold/italic) of selected cell
  const getSelectedFormat = (): CellFormat => {
    if (!selectedCell) return {};
    if (selectedCell.type === 'header') {
      return headerFormats[selectedCell.colIndex] || {};
    }
    return cellFormats[selectedCell.rowIndex]?.[selectedCell.colIndex] || {};
  };

  const currentFormat = getSelectedFormat();

  // Toggle Bold on selected cell
  const handleToggleBold = () => {
    if (!selectedCell) {
      setSelectedCell({ type: 'cell', rowIndex: 0, colIndex: 0 });
      return;
    }

    if (selectedCell.type === 'header') {
      const nextHeaderFormats = [...headerFormats];
      const cur = nextHeaderFormats[selectedCell.colIndex] || {};
      nextHeaderFormats[selectedCell.colIndex] = { ...cur, bold: !cur.bold };
      onUpdateTable({ ...table, headerFormats: nextHeaderFormats });
    } else {
      const nextCellFormats = rows.map((r, rIdx) => {
        const rowFormats = cellFormats[rIdx] || [];
        if (rIdx === selectedCell.rowIndex) {
          const newRow = [...rowFormats];
          const cur = newRow[selectedCell.colIndex] || {};
          newRow[selectedCell.colIndex] = { ...cur, bold: !cur.bold };
          return newRow;
        }
        return [...rowFormats];
      });
      onUpdateTable({ ...table, cellFormats: nextCellFormats });
    }
  };

  // Toggle Italic on selected cell
  const handleToggleItalic = () => {
    if (!selectedCell) {
      setSelectedCell({ type: 'cell', rowIndex: 0, colIndex: 0 });
      return;
    }

    if (selectedCell.type === 'header') {
      const nextHeaderFormats = [...headerFormats];
      const cur = nextHeaderFormats[selectedCell.colIndex] || {};
      nextHeaderFormats[selectedCell.colIndex] = { ...cur, italic: !cur.italic };
      onUpdateTable({ ...table, headerFormats: nextHeaderFormats });
    } else {
      const nextCellFormats = rows.map((r, rIdx) => {
        const rowFormats = cellFormats[rIdx] || [];
        if (rIdx === selectedCell.rowIndex) {
          const newRow = [...rowFormats];
          const cur = newRow[selectedCell.colIndex] || {};
          newRow[selectedCell.colIndex] = { ...cur, italic: !cur.italic };
          return newRow;
        }
        return [...rowFormats];
      });
      onUpdateTable({ ...table, cellFormats: nextCellFormats });
    }
  };

  // Apply color to selected cell
  const handleApplyColor = (color: string) => {
    if (!selectedCell) {
      setSelectedCell({ type: 'cell', rowIndex: 0, colIndex: 0 });
      const nextCellColors = cellColors.map(r => [...r]);
      if (!nextCellColors[0]) nextCellColors[0] = [];
      nextCellColors[0][0] = color;
      onUpdateTable({ ...table, cellColors: nextCellColors });
      return;
    }

    if (selectedCell.type === 'header') {
      const nextHeaderColors = [...headerColors];
      nextHeaderColors[selectedCell.colIndex] = color;
      onUpdateTable({ ...table, headerColors: nextHeaderColors });
    } else {
      const nextCellColors = cellColors.map((r, rIdx) => {
        if (rIdx === selectedCell.rowIndex) {
          const newRow = [...r];
          newRow[selectedCell.colIndex] = color;
          return newRow;
        }
        return r;
      });
      onUpdateTable({ ...table, cellColors: nextCellColors });
    }
  };

  // Cell & Header edits
  const handleHeaderChange = (index: number, value: string) => {
    const nextHeaders = [...headers];
    nextHeaders[index] = value;
    onUpdateTable({ ...table, headers: nextHeaders });
  };

  const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
    const nextRows = rows.map((row, rIdx) => {
      if (rIdx === rowIndex) {
        const newRow = [...row];
        newRow[colIndex] = value;
        return newRow;
      }
      return row;
    });
    onUpdateTable({ ...table, rows: nextRows });
  };

  // Merge & Unmerge operations
  const currentSelectedMerge =
    selectedCell && selectedCell.type === 'cell'
      ? findMergeAt(merges, selectedCell.rowIndex, selectedCell.colIndex)
      : undefined;

  const canMergeRight = (() => {
    if (!selectedCell || selectedCell.type !== 'cell') return false;
    const r = selectedCell.rowIndex;
    const c = selectedCell.colIndex;
    const existing = findMergeAt(merges, r, c);
    const rightCol = existing ? existing.col + existing.colspan : c + 1;
    return rightCol < headers.length;
  })();

  const canMergeDown = (() => {
    if (!selectedCell || selectedCell.type !== 'cell') return false;
    const r = selectedCell.rowIndex;
    const c = selectedCell.colIndex;
    const existing = findMergeAt(merges, r, c);
    const downRow = existing ? existing.row + existing.rowspan : r + 1;
    return downRow < rows.length;
  })();

  const handleMergeRight = () => {
    if (!selectedCell || selectedCell.type !== 'cell') return;
    const r = selectedCell.rowIndex;
    const c = selectedCell.colIndex;
    const existing = findMergeAt(merges, r, c);

    const masterR = existing ? existing.row : r;
    const masterC = existing ? existing.col : c;
    const currentCols = existing ? existing.colspan : 1;
    const currentRows = existing ? existing.rowspan : 1;
    const targetCol = masterC + currentCols;

    if (targetCol >= headers.length) return;

    // Collect texts and append if target cell has text
    const nextRows = rows.map(row => [...row]);
    let masterVal = nextRows[masterR][masterC] || '';

    for (let rowOffset = 0; rowOffset < currentRows; rowOffset++) {
      const neighborR = masterR + rowOffset;
      const neighborVal = (nextRows[neighborR][targetCol] || '').trim();
      if (neighborVal) {
        masterVal = masterVal ? `${masterVal} ${neighborVal}` : neighborVal;
        nextRows[neighborR][targetCol] = '';
      }
    }
    nextRows[masterR][masterC] = masterVal;

    // Remove any overlapping merge records
    const filtered = (merges || []).filter(
      m => !(m.row === masterR && m.col === masterC) && !(m.col === targetCol && m.row >= masterR && m.row < masterR + currentRows)
    );

    const newMerge: MergeCell = {
      row: masterR,
      col: masterC,
      rowspan: currentRows,
      colspan: currentCols + 1,
    };

    onUpdateTable({
      ...table,
      rows: nextRows,
      merges: [...filtered, newMerge],
    });

    setSelectedCell({
      type: 'cell',
      rowIndex: masterR,
      colIndex: masterC,
    });
  };

  const handleMergeDown = () => {
    if (!selectedCell || selectedCell.type !== 'cell') return;
    const r = selectedCell.rowIndex;
    const c = selectedCell.colIndex;
    const existing = findMergeAt(merges, r, c);

    const masterR = existing ? existing.row : r;
    const masterC = existing ? existing.col : c;
    const currentCols = existing ? existing.colspan : 1;
    const currentRows = existing ? existing.rowspan : 1;
    const targetRow = masterR + currentRows;

    if (targetRow >= rows.length) return;

    // Collect texts and append if target cell has text
    const nextRows = rows.map(row => [...row]);
    let masterVal = nextRows[masterR][masterC] || '';

    for (let colOffset = 0; colOffset < currentCols; colOffset++) {
      const neighborC = masterC + colOffset;
      const neighborVal = (nextRows[targetRow][neighborC] || '').trim();
      if (neighborVal) {
        masterVal = masterVal ? `${masterVal} ${neighborVal}` : neighborVal;
        nextRows[targetRow][neighborC] = '';
      }
    }
    nextRows[masterR][masterC] = masterVal;

    // Remove any overlapping merge records
    const filtered = (merges || []).filter(
      m => !(m.row === masterR && m.col === masterC) && !(m.row === targetRow && m.col >= masterC && m.col < masterC + currentCols)
    );

    const newMerge: MergeCell = {
      row: masterR,
      col: masterC,
      rowspan: currentRows + 1,
      colspan: currentCols,
    };

    onUpdateTable({
      ...table,
      rows: nextRows,
      merges: [...filtered, newMerge],
    });

    setSelectedCell({
      type: 'cell',
      rowIndex: masterR,
      colIndex: masterC,
    });
  };

  const handleUnmerge = () => {
    if (!selectedCell || selectedCell.type !== 'cell') return;
    const r = selectedCell.rowIndex;
    const c = selectedCell.colIndex;
    const existing = findMergeAt(merges, r, c);
    if (!existing) return;

    const filtered = (merges || []).filter(
      m => !(m.row === existing.row && m.col === existing.col)
    );

    onUpdateTable({
      ...table,
      merges: filtered,
    });

    setSelectedCell({
      type: 'cell',
      rowIndex: existing.row,
      colIndex: existing.col,
    });
  };

  // Add row
  const handleAddRow = () => {
    onUpdateTable({
      ...table,
      rows: [...rows, Array(headers.length).fill('')],
      cellColors: [...cellColors, Array(headers.length).fill('')],
      cellFormats: [
        ...(cellFormats || rows.map(r => r.map(() => ({})))),
        Array(headers.length).fill({}),
      ],
      merges: sanitizeMerges(merges, rows.length + 1, headers.length),
    });
  };

  // Add column
  const handleAddColumn = () => {
    const newColNum = headers.length + 1;
    onUpdateTable({
      ...table,
      headers: [...headers, `Column ${newColNum}`],
      headerColors: [...headerColors, ''],
      headerFormats: [...(headerFormats || headers.map(() => ({}))), {}],
      columnAlignments: [...currentAlignments, 'left'],
      rows: rows.map(r => [...r, '']),
      cellColors: cellColors.map(r => [...r, '']),
      cellFormats: (cellFormats || rows.map(r => r.map(() => ({})))).map(r => [...r, {}]),
      merges: sanitizeMerges(merges, rows.length, headers.length + 1),
    });
  };

  // Remove row
  const handleRemoveRow = (rowIndex: number) => {
    if (rows.length <= 1) {
      onUpdateTable({
        ...table,
        rows: [Array(headers.length).fill('')],
        cellColors: [Array(headers.length).fill('')],
        cellFormats: [Array(headers.length).fill({})],
        merges: [],
      });
      return;
    }

    const updatedMerges = onRowRemovedMerges(merges, rowIndex, rows.length - 1, headers.length);

    onUpdateTable({
      ...table,
      rows: rows.filter((_, idx) => idx !== rowIndex),
      cellColors: cellColors.filter((_, idx) => idx !== rowIndex),
      cellFormats: (cellFormats || rows.map(r => r.map(() => ({})))).filter(
        (_, idx) => idx !== rowIndex
      ),
      merges: updatedMerges,
    });

    if (selectedCell && selectedCell.type === 'cell') {
      if (selectedCell.rowIndex === rowIndex) {
        setSelectedCell({
          type: 'cell',
          rowIndex: Math.max(0, rowIndex - 1),
          colIndex: selectedCell.colIndex,
        });
      } else if (selectedCell.rowIndex > rowIndex) {
        setSelectedCell({
          ...selectedCell,
          rowIndex: selectedCell.rowIndex - 1,
        });
      }
    }
  };

  // Remove column
  const handleRemoveColumn = (colIndex: number) => {
    if (headers.length <= 1) {
      onUpdateTable({
        ...table,
        headers: ['Column 1'],
        headerColors: [''],
        headerFormats: [{}],
        columnAlignments: ['left'],
        rows: rows.map(() => ['']),
        cellColors: cellColors.map(() => ['']),
        cellFormats: rows.map(() => [{}]),
        merges: [],
      });
      return;
    }

    const newAlignments = currentAlignments.filter((_, idx) => idx !== colIndex);
    const updatedMerges = onColRemovedMerges(merges, colIndex, rows.length, headers.length - 1);

    onUpdateTable({
      ...table,
      headers: headers.filter((_, idx) => idx !== colIndex),
      headerColors: headerColors.filter((_, idx) => idx !== colIndex),
      headerFormats: (headerFormats || headers.map(() => ({}))).filter(
        (_, idx) => idx !== colIndex
      ),
      columnAlignments: newAlignments.length > 0 ? newAlignments : ['left'],
      rows: rows.map(r => r.filter((_, idx) => idx !== colIndex)),
      cellColors: cellColors.map(r => r.filter((_, idx) => idx !== colIndex)),
      cellFormats: (cellFormats || rows.map(r => r.map(() => ({})))).map(r =>
        r.filter((_, idx) => idx !== colIndex)
      ),
      merges: updatedMerges,
    });

    if (selectedCell) {
      if (selectedCell.colIndex === colIndex) {
        setSelectedCell({
          ...selectedCell,
          colIndex: Math.max(0, colIndex - 1),
        });
      } else if (selectedCell.colIndex > colIndex) {
        setSelectedCell({
          ...selectedCell,
          colIndex: selectedCell.colIndex - 1,
        });
      }
    }
  };

  // 1. Column Alignment
  const handleSetColumnAlignment = (colIndex: number, align: ColumnAlignment) => {
    if (colIndex === -1) {
      onUpdateTable({
        ...table,
        columnAlignments: headers.map(() => align),
      });
      return;
    }
    const nextAlignments = [...currentAlignments];
    while (nextAlignments.length < headers.length) {
      nextAlignments.push('left');
    }
    nextAlignments[colIndex] = align;
    onUpdateTable({
      ...table,
      columnAlignments: nextAlignments,
    });
  };

  // 2. Sort column (A-Z or Z-A, with natural numeric support)
  const handleSortColumn = (colIndex: number, direction: 'asc' | 'desc') => {
    const safeCol = Math.min(Math.max(0, colIndex), headers.length - 1);

    const compareValues = (valA: string, valB: string, isAsc: boolean) => {
      const a = (valA ?? '').trim();
      const b = (valB ?? '').trim();
      if (a === '' && b !== '') return 1;
      if (b === '' && a !== '') return -1;
      if (a === '' && b === '') return 0;

      const numA = Number(a);
      const numB = Number(b);
      const isNumA = !isNaN(numA) && isFinite(numA);
      const isNumB = !isNaN(numB) && isFinite(numB);

      let cmp = 0;
      if (isNumA && isNumB) {
        cmp = numA - numB;
      } else {
        cmp = a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
      }
      return isAsc ? cmp : -cmp;
    };

    const bundled = rows.map((row, idx) => ({
      row,
      colorRow: cellColors[idx] || Array(headers.length).fill(''),
      formatRow: cellFormats[idx] || Array(headers.length).fill({}),
    }));

    bundled.sort((x, y) => compareValues(x.row[safeCol], y.row[safeCol], direction === 'asc'));

    onUpdateTable({
      ...table,
      rows: bundled.map(b => b.row),
      cellColors: bundled.map(b => b.colorRow),
      cellFormats: bundled.map(b => b.formatRow),
      merges: [], // Merges cleared when rows reordered
    });
  };

  // 3. Move row up / down
  const handleMoveRowUp = (rowIndex: number) => {
    if (rowIndex <= 0) return;
    const target = rowIndex - 1;
    const nextRows = [...rows];
    const nextColors = [...cellColors];
    const nextFormats = [...cellFormats];

    [nextRows[target], nextRows[rowIndex]] = [nextRows[rowIndex], nextRows[target]];
    [nextColors[target], nextColors[rowIndex]] = [nextColors[rowIndex], nextColors[target]];
    [nextFormats[target], nextFormats[rowIndex]] = [nextFormats[rowIndex], nextFormats[target]];

    onUpdateTable({
      ...table,
      rows: nextRows,
      cellColors: nextColors,
      cellFormats: nextFormats,
    });

    if (selectedCell?.type === 'cell' && selectedCell.rowIndex === rowIndex) {
      setSelectedCell({ ...selectedCell, rowIndex: target });
    } else if (selectedCell?.type === 'cell' && selectedCell.rowIndex === target) {
      setSelectedCell({ ...selectedCell, rowIndex });
    }
  };

  const handleMoveRowDown = (rowIndex: number) => {
    if (rowIndex >= rows.length - 1) return;
    const target = rowIndex + 1;
    const nextRows = [...rows];
    const nextColors = [...cellColors];
    const nextFormats = [...cellFormats];

    [nextRows[target], nextRows[rowIndex]] = [nextRows[rowIndex], nextRows[target]];
    [nextColors[target], nextColors[rowIndex]] = [nextColors[rowIndex], nextColors[target]];
    [nextFormats[target], nextFormats[rowIndex]] = [nextFormats[rowIndex], nextFormats[target]];

    onUpdateTable({
      ...table,
      rows: nextRows,
      cellColors: nextColors,
      cellFormats: nextFormats,
    });

    if (selectedCell?.type === 'cell' && selectedCell.rowIndex === rowIndex) {
      setSelectedCell({ ...selectedCell, rowIndex: target });
    } else if (selectedCell?.type === 'cell' && selectedCell.rowIndex === target) {
      setSelectedCell({ ...selectedCell, rowIndex });
    }
  };

  // 4. Move column left / right
  const handleMoveColumnLeft = (colIndex: number) => {
    if (colIndex <= 0) return;
    const target = colIndex - 1;

    const nextHeaders = [...headers];
    [nextHeaders[target], nextHeaders[colIndex]] = [nextHeaders[colIndex], nextHeaders[target]];

    const nextHeaderColors = [...headerColors];
    [nextHeaderColors[target], nextHeaderColors[colIndex]] = [nextHeaderColors[colIndex], nextHeaderColors[target]];

    const nextHeaderFormats = [...headerFormats];
    [nextHeaderFormats[target], nextHeaderFormats[colIndex]] = [nextHeaderFormats[colIndex], nextHeaderFormats[target]];

    const nextAlignments = [...currentAlignments];
    while (nextAlignments.length < headers.length) nextAlignments.push('left');
    [nextAlignments[target], nextAlignments[colIndex]] = [nextAlignments[colIndex], nextAlignments[target]];

    const nextRows = rows.map(r => {
      const rowCopy = [...r];
      [rowCopy[target], rowCopy[colIndex]] = [rowCopy[colIndex], rowCopy[target]];
      return rowCopy;
    });

    const nextColors = cellColors.map(c => {
      const cCopy = [...c];
      [cCopy[target], cCopy[colIndex]] = [cCopy[colIndex], cCopy[target]];
      return cCopy;
    });

    const nextFormats = cellFormats.map(f => {
      const fCopy = [...f];
      [fCopy[target], fCopy[colIndex]] = [fCopy[colIndex], fCopy[target]];
      return fCopy;
    });

    onUpdateTable({
      ...table,
      headers: nextHeaders,
      headerColors: nextHeaderColors,
      headerFormats: nextHeaderFormats,
      columnAlignments: nextAlignments,
      rows: nextRows,
      cellColors: nextColors,
      cellFormats: nextFormats,
    });

    if (selectedCell && selectedCell.colIndex === colIndex) {
      setSelectedCell({ ...selectedCell, colIndex: target });
    } else if (selectedCell && selectedCell.colIndex === target) {
      setSelectedCell({ ...selectedCell, colIndex });
    }
  };

  const handleMoveColumnRight = (colIndex: number) => {
    if (colIndex >= headers.length - 1) return;
    const target = colIndex + 1;

    const nextHeaders = [...headers];
    [nextHeaders[target], nextHeaders[colIndex]] = [nextHeaders[colIndex], nextHeaders[target]];

    const nextHeaderColors = [...headerColors];
    [nextHeaderColors[target], nextHeaderColors[colIndex]] = [nextHeaderColors[colIndex], nextHeaderColors[target]];

    const nextHeaderFormats = [...headerFormats];
    [nextHeaderFormats[target], nextHeaderFormats[colIndex]] = [nextHeaderFormats[colIndex], nextHeaderFormats[target]];

    const nextAlignments = [...currentAlignments];
    while (nextAlignments.length < headers.length) nextAlignments.push('left');
    [nextAlignments[target], nextAlignments[colIndex]] = [nextAlignments[colIndex], nextAlignments[target]];

    const nextRows = rows.map(r => {
      const rowCopy = [...r];
      [rowCopy[target], rowCopy[colIndex]] = [rowCopy[colIndex], rowCopy[target]];
      return rowCopy;
    });

    const nextColors = cellColors.map(c => {
      const cCopy = [...c];
      [cCopy[target], cCopy[colIndex]] = [cCopy[colIndex], cCopy[target]];
      return cCopy;
    });

    const nextFormats = cellFormats.map(f => {
      const fCopy = [...f];
      [fCopy[target], fCopy[colIndex]] = [fCopy[colIndex], fCopy[target]];
      return fCopy;
    });

    onUpdateTable({
      ...table,
      headers: nextHeaders,
      headerColors: nextHeaderColors,
      headerFormats: nextHeaderFormats,
      columnAlignments: nextAlignments,
      rows: nextRows,
      cellColors: nextColors,
      cellFormats: nextFormats,
    });

    if (selectedCell && selectedCell.colIndex === colIndex) {
      setSelectedCell({ ...selectedCell, colIndex: target });
    } else if (selectedCell && selectedCell.colIndex === target) {
      setSelectedCell({ ...selectedCell, colIndex });
    }
  };

  // 5. Duplicate individual row
  const handleDuplicateRow = (rowIndex: number) => {
    const nextRows = [...rows];
    nextRows.splice(rowIndex + 1, 0, [...rows[rowIndex]]);

    const nextColors = [...cellColors];
    nextColors.splice(rowIndex + 1, 0, [...(cellColors[rowIndex] || Array(headers.length).fill(''))]);

    const nextFormats = [...cellFormats];
    const sourceFormat = cellFormats[rowIndex] || Array(headers.length).fill({});
    nextFormats.splice(rowIndex + 1, 0, sourceFormat.map(f => ({ ...f })));

    onUpdateTable({
      ...table,
      rows: nextRows,
      cellColors: nextColors,
      cellFormats: nextFormats,
    });

    setSelectedCell({
      type: 'cell',
      rowIndex: rowIndex + 1,
      colIndex: selectedCell?.colIndex ?? 0,
    });
  };

  // 6. Remove duplicate rows (comparing full row content, preserving formatting of first occurrence)
  const handleRemoveDuplicateRows = () => {
    const seen = new Set<string>();
    const nextRows: string[][] = [];
    const nextColors: string[][] = [];
    const nextFormats: CellFormat[][] = [];
    let removedCount = 0;

    rows.forEach((row, idx) => {
      const rowKey = JSON.stringify(row);
      if (!seen.has(rowKey)) {
        seen.add(rowKey);
        nextRows.push(row);
        nextColors.push(cellColors[idx] || Array(headers.length).fill(''));
        nextFormats.push(cellFormats[idx] || Array(headers.length).fill({}));
      } else {
        removedCount++;
      }
    });

    if (removedCount > 0) {
      onUpdateTable({
        ...table,
        rows: nextRows,
        cellColors: nextColors,
        cellFormats: nextFormats,
        merges: [],
      });
      setDuplicateNotice(`Removed ${removedCount} duplicate row${removedCount > 1 ? 's' : ''}!`);
    } else {
      setDuplicateNotice('No duplicate rows found');
    }

    setTimeout(() => {
      setDuplicateNotice(null);
    }, 3000);
  };

  // Clear table contents, colors, and formatting
  const handleClearTable = () => {
    onUpdateTable({
      ...table,
      headers: headers.map((_, i) => `Column ${i + 1}`),
      headerColors: headers.map(() => ''),
      headerFormats: headers.map(() => ({})),
      columnAlignments: headers.map(() => 'left'),
      rows: rows.map(() => Array(headers.length).fill('')),
      cellColors: rows.map(() => Array(headers.length).fill('')),
      cellFormats: rows.map(() => Array(headers.length).fill({})),
      merges: [],
    });
  };

  // Signature toggle
  const handleToggleSignature = () => {
    onUpdateTable({
      ...table,
      signatureEnabled: !signatureEnabled,
      signatureName: signatureName || (signatureEnabled ? '' : 'John Doe'),
    });
  };

  const handleSignatureNameChange = (val: string) => {
    onUpdateTable({
      ...table,
      signatureName: val,
    });
  };

  // Copy handlers
  const handleCopy = async (format: 'HTML' | 'Markdown' | 'CSV' | 'Plain Text') => {
    let output = '';
    const sigOpts = { enabled: signatureEnabled, name: signatureName };

    if (format === 'HTML') {
      output = tableToHtml(
        headers,
        rows,
        cellColors,
        headerColors,
        cellFormats,
        headerFormats,
        sigOpts,
        currentAlignments,
        merges
      );
    } else if (format === 'Markdown') {
      output = tableToMarkdown(
        headers,
        rows,
        cellFormats,
        headerFormats,
        sigOpts,
        currentAlignments
      );
    } else if (format === 'CSV') {
      output = tableToCsv(headers, rows);
    } else if (format === 'Plain Text') {
      output = tableToPlainText(headers, rows, sigOpts);
    }

    const success = await copyTextToClipboard(output);
    if (success) {
      setCopiedFormat(format);
      setTimeout(() => {
        setCopiedFormat(null);
      }, 2500);
    }
  };

  // Download table as file (HTML, Markdown, CSV, TXT, PDF)
  const handleDownload = (format: 'HTML' | 'Markdown' | 'CSV' | 'TXT' | 'PDF') => {
    // Collect all tables ensuring the current table has its freshest values
    const sourceTables = allTables && allTables.length > 0 ? allTables : [table];
    const targetTables = sourceTables.map((t, idx) => (idx === tableIndex ? table : t));

    if (format === 'HTML') {
      const content = generateFullHtmlDocument(targetTables);
      downloadFile('table.html', content, 'text/html');
    } else if (format === 'Markdown') {
      const content = generateFullMarkdown(targetTables);
      downloadFile('table.md', content, 'text/markdown');
    } else if (format === 'CSV') {
      const content = generateFullCsv(targetTables);
      downloadFile('table.csv', content, 'text/csv');
    } else if (format === 'TXT') {
      const content = generateFullPlainText(targetTables);
      downloadFile('table.txt', content, 'text/plain');
    } else if (format === 'PDF') {
      downloadPdf(targetTables, 'table.pdf');
    }

    setDownloadedFormat(format);
    setTimeout(() => {
      setDownloadedFormat(null);
    }, 2500);
  };

  return (
    <BrutalCard shadow="lg" className="p-4 sm:p-7 bg-white flex flex-col gap-6">
      {/* Table Header / Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 sm:border-b-[3px] border-black pb-4">
        <div className="flex items-center gap-2.5">
          {totalTables > 1 && (
            <div className="w-8 h-8 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black">
              <TableIcon className="w-4 h-4 stroke-[2.5]" />
            </div>
          )}
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
            {totalTables > 1 ? `Table ${tableIndex + 1}` : 'Table Editor'}
          </h3>
        </div>

        {totalTables > 1 && onDeleteTable && (
          <button
            type="button"
            onClick={onDeleteTable}
            title={`Delete Table ${tableIndex + 1}`}
            className="py-1 px-2.5 text-xs font-black text-red-700 hover:text-white bg-white hover:bg-red-600 border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Remove Table</span>
          </button>
        )}
      </div>

      {/* Central Table Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 bg-[#FAF8F5] border-2 sm:border-[3px] border-black p-3 shadow-[3px_3px_0px_0px_#000]">
        {/* TABLE CONTROLS */}
        <div className="flex flex-wrap items-center gap-2">
          <BrutalButton
            id={`add-row-btn-${tableIndex}`}
            variant="primary"
            size="sm"
            onClick={handleAddRow}
            className="flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>+ Add row</span>
          </BrutalButton>

          <BrutalButton
            id={`add-col-btn-${tableIndex}`}
            variant="primary"
            size="sm"
            onClick={handleAddColumn}
            className="flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>+ Add column</span>
          </BrutalButton>

          <BrutalButton
            id={`clear-table-btn-${tableIndex}`}
            variant="secondary"
            size="sm"
            onClick={handleClearTable}
            className="flex items-center gap-1 text-gray-800"
          >
            <Eraser className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Clear table</span>
          </BrutalButton>

          <div className="relative inline-flex items-center">
            <BrutalButton
              id={`remove-duplicates-btn-${tableIndex}`}
              variant="secondary"
              size="sm"
              onClick={handleRemoveDuplicateRows}
              className="flex items-center gap-1.5 text-gray-800"
              title="Scan and remove identical rows across the entire table"
            >
              <CopyX className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Remove duplicate rows</span>
            </BrutalButton>

            {duplicateNotice && (
              <span className="absolute -top-7 left-0 bg-black text-[#FFDE00] font-black text-[11px] px-2 py-0.5 whitespace-nowrap shadow-[2px_2px_0px_0px_#FFDE00] z-30">
                {duplicateNotice}
              </span>
            )}
          </div>
        </div>

        {/* COLUMN ALIGN TOOL */}
        <div className="flex flex-wrap items-center gap-2.5" ref={toolsMenuRef}>
          <div className="relative">
            <BrutalButton
              id={`col-tools-align-btn-${tableIndex}`}
              variant="secondary"
              size="sm"
              onClick={() => setActiveMenu(activeMenu === 'align' ? null : 'align')}
              className={`flex items-center gap-1.5 ${
                activeMenu === 'align' ? 'bg-[#FFDE00] font-black' : ''
              }`}
              title="Set text alignment for columns"
            >
              {activeAlign === 'center' ? (
                <AlignCenter className="w-3.5 h-3.5 stroke-[2.5]" />
              ) : activeAlign === 'right' ? (
                <AlignRight className="w-3.5 h-3.5 stroke-[2.5]" />
              ) : (
                <AlignLeft className="w-3.5 h-3.5 stroke-[2.5]" />
              )}
              <span>Align</span>
              <ChevronDown
                className={`w-3 h-3 stroke-[2.5] transition-transform ${
                  activeMenu === 'align' ? 'rotate-180' : ''
                }`}
              />
            </BrutalButton>

            {/* Align Popover Menu */}
            {activeMenu === 'align' && (
              <div
                id={`align-popover-${tableIndex}`}
                className="absolute right-0 top-full mt-2 z-40 p-3 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] w-64 flex flex-col gap-2.5 font-sans"
              >
                <div className="flex items-center justify-between border-b-2 border-black pb-1.5">
                  <span className="font-black text-xs uppercase tracking-wider text-black flex items-center gap-1.5">
                    <AlignLeft className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Column Alignment</span>
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-mono font-bold uppercase text-gray-600">
                    Apply to:
                  </label>
                  <select
                    value={selectedAlignCol}
                    onChange={e => setSelectedAlignCol(Number(e.target.value))}
                    className="w-full text-xs font-bold border-2 border-black p-1 bg-[#FAF8F5] focus:outline-none focus:bg-white"
                  >
                    <option value={-1}>All Columns</option>
                    {headers.map((hdr, idx) => (
                      <option key={idx} value={idx}>
                        Col {idx + 1}: {hdr || `Column ${idx + 1}`}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      handleSetColumnAlignment(selectedAlignCol, 'left');
                      setActiveMenu(null);
                    }}
                    className={`py-1.5 px-2 text-xs font-black border-2 border-black flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      (selectedAlignCol === -1 ? currentAlignments[0] : currentAlignments[selectedAlignCol]) === 'left'
                        ? 'bg-[#FFDE00] shadow-[2px_2px_0px_0px_#000]'
                        : 'bg-white hover:bg-gray-100 shadow-[1px_1px_0px_0px_#000]'
                    }`}
                  >
                    <AlignLeft className="w-4 h-4 stroke-[2.5]" />
                    <span>Left</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      handleSetColumnAlignment(selectedAlignCol, 'center');
                      setActiveMenu(null);
                    }}
                    className={`py-1.5 px-2 text-xs font-black border-2 border-black flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      (selectedAlignCol === -1 ? currentAlignments[0] : currentAlignments[selectedAlignCol]) === 'center'
                        ? 'bg-[#FFDE00] shadow-[2px_2px_0px_0px_#000]'
                        : 'bg-white hover:bg-gray-100 shadow-[1px_1px_0px_0px_#000]'
                    }`}
                  >
                    <AlignCenter className="w-4 h-4 stroke-[2.5]" />
                    <span>Center</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      handleSetColumnAlignment(selectedAlignCol, 'right');
                      setActiveMenu(null);
                    }}
                    className={`py-1.5 px-2 text-xs font-black border-2 border-black flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      (selectedAlignCol === -1 ? currentAlignments[0] : currentAlignments[selectedAlignCol]) === 'right'
                        ? 'bg-[#FFDE00] shadow-[2px_2px_0px_0px_#000]'
                        : 'bg-white hover:bg-gray-100 shadow-[1px_1px_0px_0px_#000]'
                    }`}
                  >
                    <AlignRight className="w-4 h-4 stroke-[2.5]" />
                    <span>Right</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CELL FORMATTING & MERGING TOOLBAR (Only visible when a cell or header is selected) */}
      {selectedCell && (
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 bg-[#FFFDF0] border-2 border-black p-2 sm:p-2.5 px-3 shadow-[2px_2px_0px_0px_#000]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs font-black text-black uppercase flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#FFDE00] border border-black inline-block"></span>
              <span>
                {selectedCell.type === 'header'
                  ? `Header: ${headers[selectedCell.colIndex] || `Column ${selectedCell.colIndex + 1}`}`
                  : `Row ${selectedCell.rowIndex + 1}, Col ${selectedCell.colIndex + 1}`}
              </span>
            </span>

            <div className="h-4 w-[2px] bg-black/25 hidden sm:block" />

            {/* Bold Button */}
            <button
              id={`format-bold-btn-${tableIndex}`}
              type="button"
              onClick={handleToggleBold}
              title={currentFormat.bold ? 'Remove bold (B)' : 'Make cell bold (B)'}
              aria-label="Toggle Bold"
              aria-pressed={currentFormat.bold ? 'true' : 'false'}
              className={`w-8 h-8 border-2 border-black flex items-center justify-center font-black transition-all cursor-pointer ${
                currentFormat.bold
                  ? 'bg-black text-[#FFDE00] shadow-[2px_2px_0px_0px_#000]'
                  : 'bg-white text-black hover:bg-[#FAF8F5] shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none'
              }`}
            >
              <span className="font-extrabold text-sm">B</span>
            </button>

            {/* Italic Button */}
            <button
              id={`format-italic-btn-${tableIndex}`}
              type="button"
              onClick={handleToggleItalic}
              title={currentFormat.italic ? 'Remove italic (I)' : 'Make cell italic (I)'}
              aria-label="Toggle Italic"
              aria-pressed={currentFormat.italic ? 'true' : 'false'}
              className={`w-8 h-8 border-2 border-black flex items-center justify-center transition-all cursor-pointer ${
                currentFormat.italic
                  ? 'bg-black text-[#FFDE00] shadow-[2px_2px_0px_0px_#000]'
                  : 'bg-white text-black hover:bg-[#FAF8F5] shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none'
              }`}
            >
              <span className="font-serif italic font-bold text-sm">I</span>
            </button>

            {/* Cell Color */}
            <div className="relative" ref={colorPickerRef}>
              <BrutalButton
                id={`cell-color-btn-${tableIndex}`}
                variant="secondary"
                size="sm"
                onClick={() => setIsColorPickerOpen(prev => !prev)}
                className="flex items-center gap-1.5 py-1 px-2.5 text-xs"
                title="Change cell color"
              >
                <span
                  className="w-3.5 h-3.5 border border-black inline-block shadow-[1px_1px_0px_0px_#000]"
                  style={{ backgroundColor: currentColor || '#ffffff' }}
                />
                <span>Cell color</span>
                <ChevronDown
                  className={`w-3 h-3 stroke-[2.5] transition-transform ${
                    isColorPickerOpen ? 'rotate-180' : ''
                  }`}
                />
              </BrutalButton>

              {/* Color Picker Popover */}
              {isColorPickerOpen && (
                <div
                  id={`cell-color-popover-${tableIndex}`}
                  className="absolute left-0 top-full mt-2 z-40 p-3.5 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] w-72 flex flex-col gap-3 font-sans"
                >
                  <div className="flex items-center justify-between border-b-2 border-black pb-2">
                    <div className="flex items-center gap-1.5 font-black text-xs uppercase tracking-wider text-black">
                      <Palette className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Cell Color</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-extrabold uppercase text-gray-700 mb-1.5 tracking-wider">
                      Presets
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {PRESET_COLORS.map(preset => {
                        const isCurrent =
                          currentColor.toLowerCase() === preset.hex.toLowerCase();
                        return (
                          <button
                            key={preset.hex}
                            type="button"
                            onClick={() => handleApplyColor(preset.hex)}
                            title={preset.name}
                            aria-label={`Color preset ${preset.name}`}
                            style={{ backgroundColor: preset.hex }}
                            className={`h-8 w-full border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none transition-all flex items-center justify-center cursor-pointer ${
                              isCurrent ? 'ring-2 ring-black font-black' : ''
                            }`}
                          >
                            {isCurrent && (
                              <Check className="w-4 h-4 stroke-[3] text-black" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-black/20">
                    <div className="text-[11px] font-extrabold uppercase text-gray-700 mb-1.5 flex items-center justify-between">
                      <span>Custom color</span>
                      <span className="font-mono text-[11px] text-gray-600 uppercase font-bold">
                        {currentColor || 'None'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <input
                        id={`native-color-picker-${tableIndex}`}
                        type="color"
                        value={currentColor || '#ffffff'}
                        onChange={e => handleApplyColor(e.target.value)}
                        className="w-10 h-8 p-0.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] cursor-pointer"
                      />
                      <span className="text-xs font-semibold text-gray-700">
                        Click swatch to pick any color
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t-2 border-black">
                    <button
                      id={`reset-cell-color-btn-${tableIndex}`}
                      type="button"
                      onClick={() => handleApplyColor('')}
                      className="w-full py-1.5 px-3 bg-[#FAF8F5] hover:bg-red-50 text-black hover:text-red-700 font-extrabold text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Ban className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>No color (Reset)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* MERGE CELLS CONTROLS (Only for body cells) */}
            {selectedCell.type === 'cell' && (
              <>
                <div className="h-4 w-[2px] bg-black/25 hidden sm:block" />

                {/* Merge Right Button */}
                <BrutalButton
                  id={`merge-right-btn-${tableIndex}`}
                  variant="secondary"
                  size="sm"
                  onClick={handleMergeRight}
                  disabled={!canMergeRight}
                  className="flex items-center gap-1.5 py-1 px-2.5 text-xs disabled:opacity-30 disabled:pointer-events-none"
                  title="Merge right"
                >
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Merge right</span>
                </BrutalButton>

                {/* Merge Down Button */}
                <BrutalButton
                  id={`merge-down-btn-${tableIndex}`}
                  variant="secondary"
                  size="sm"
                  onClick={handleMergeDown}
                  disabled={!canMergeDown}
                  className="flex items-center gap-1.5 py-1 px-2.5 text-xs disabled:opacity-30 disabled:pointer-events-none"
                  title="Merge down"
                >
                  <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Merge down</span>
                </BrutalButton>

                {/* Unmerge Button (shown if cell is part of a merge) */}
                {currentSelectedMerge && (
                  <BrutalButton
                    id={`unmerge-btn-${tableIndex}`}
                    variant="primary"
                    size="sm"
                    onClick={handleUnmerge}
                    className="flex items-center gap-1.5 py-1 px-2.5 text-xs"
                    title="Separate merged cell back into individual cells"
                  >
                    <Split className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Unmerge</span>
                  </BrutalButton>
                )}
              </>
            )}
          </div>

          {/* Deselect button */}
          <button
            type="button"
            onClick={() => setSelectedCell(null)}
            title="Deselect cell"
            className="text-xs font-black text-gray-600 hover:text-black flex items-center gap-1 px-2 py-1 bg-white hover:bg-gray-100 border border-black cursor-pointer shadow-[1px_1px_0px_0px_#000] transition-all"
          >
            <X className="w-3 h-3 stroke-[2.5]" />
            <span className="hidden sm:inline">Deselect</span>
          </button>
        </div>
      )}

      {/* Responsive Table Scroll Area */}
      <div className="overflow-x-auto max-w-full pb-3 border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000]">
        <table className="w-full border-collapse text-left font-sans table-auto">
          <thead>
            {/* Header Inputs Row */}
            <tr className="bg-[#FFDE00] border-b-2 sm:border-b-[3px] border-black">
              <th className="p-2 w-12 text-center border-r-2 border-black font-mono text-xs font-black uppercase text-black align-top">
                HDR
              </th>
              {headers.map((headerVal, colIdx) => {
                const isHeaderSelected =
                  selectedCell?.type === 'header' && selectedCell.colIndex === colIdx;
                const hdrColor = headerColors[colIdx];
                const hdrFormat = headerFormats[colIdx];
                const colAlign = currentAlignments[colIdx] || 'left';
                const alignClass =
                  colAlign === 'right'
                    ? 'text-right'
                    : colAlign === 'center'
                    ? 'text-center'
                    : 'text-left';

                return (
                  <th
                    key={`header-${colIdx}`}
                    style={{ backgroundColor: hdrColor || undefined }}
                    className={`p-1.5 border-r-2 border-black min-w-[130px] sm:min-w-[160px] max-w-[280px] sm:max-w-[380px] lg:max-w-[460px] align-top ${
                      isHeaderSelected && !hdrColor ? 'bg-amber-200' : ''
                    }`}
                  >
                    <div className="flex items-start gap-1">
                      <AutoResizeCell
                        value={headerVal}
                        onFocus={() => setSelectedCell({ type: 'header', colIndex: colIdx })}
                        onClick={() => setSelectedCell({ type: 'header', colIndex: colIdx })}
                        onChange={val => handleHeaderChange(colIdx, val)}
                        placeholder={`Column ${colIdx + 1}`}
                        aria-label={`Header column ${colIdx + 1}`}
                        style={{
                          backgroundColor:
                            hdrColor || (isHeaderSelected ? '#FFFDF0' : '#FFFFFF'),
                        }}
                        className={`w-full min-h-[34px] px-2.5 py-1.5 text-xs sm:text-sm text-black border transition-all ${alignClass} ${
                          hdrFormat?.bold ? 'font-black' : 'font-bold'
                        } ${hdrFormat?.italic ? 'italic font-serif' : ''} ${
                          isHeaderSelected
                            ? 'border-2 border-black ring-2 ring-black shadow-[2px_2px_0px_0px_#000] focus:outline-none'
                            : 'border-black focus:outline-none focus:border-2 focus:border-black'
                        }`}
                      />

                      {/* Header Column Actions: Move Left, Move Right, Delete */}
                      <div className="flex items-center gap-0.5 shrink-0 pt-1">
                        <button
                          type="button"
                          onClick={() => handleMoveColumnLeft(colIdx)}
                          disabled={colIdx === 0}
                          title={`Move column ${colIdx + 1} left`}
                          className="w-6 h-6 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white disabled:opacity-20 disabled:pointer-events-none border border-black shadow-[1px_1px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                        >
                          <ArrowLeft className="w-3 h-3 stroke-[2.5]" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleMoveColumnRight(colIdx)}
                          disabled={colIdx === headers.length - 1}
                          title={`Move column ${colIdx + 1} right`}
                          className="w-6 h-6 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white disabled:opacity-20 disabled:pointer-events-none border border-black shadow-[1px_1px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                        >
                          <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleRemoveColumn(colIdx)}
                          title={`Delete column ${colIdx + 1}`}
                          className="w-6 h-6 flex items-center justify-center text-black bg-white hover:bg-red-100 hover:text-red-700 border border-black shadow-[1px_1px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3 stroke-[2.5]" />
                        </button>
                      </div>
                    </div>
                  </th>
                );
              })}
              <th className="p-2 w-28 sm:w-36 text-center font-mono text-xs font-black uppercase text-black align-top">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y-2 divide-black bg-white">
            {rows.map((row, rowIdx) => (
              <tr
                key={`row-${rowIdx}`}
                className="hover:bg-[#FAF8F5]/80 transition-colors"
              >
                {/* Row Index label */}
                <td className="p-2 w-12 text-center border-r-2 border-black font-mono text-xs font-bold text-gray-500 bg-[#FAF8F5] align-top">
                  {rowIdx + 1}
                </td>

                {/* Editable row cells with ColSpan / RowSpan support */}
                {headers.map((_, colIdx) => {
                  const info = mergeMatrix[rowIdx]?.[colIdx];
                  if (info && info.isCovered) {
                    return null;
                  }

                  const isCellSelected =
                    selectedCell?.type === 'cell' &&
                    selectedCell.rowIndex === rowIdx &&
                    selectedCell.colIndex === colIdx;
                  const cellColor = cellColors[rowIdx]?.[colIdx];
                  const format = cellFormats[rowIdx]?.[colIdx];
                  const colAlign = currentAlignments[colIdx] || 'left';
                  const alignClass =
                    colAlign === 'right'
                      ? 'text-right'
                      : colAlign === 'center'
                      ? 'text-center'
                      : 'text-left';

                  const rowSpanAttr = info && info.isMaster ? info.rowspan : undefined;
                  const colSpanAttr = info && info.isMaster ? info.colspan : undefined;

                  return (
                    <td
                      key={`cell-${rowIdx}-${colIdx}`}
                      rowSpan={rowSpanAttr}
                      colSpan={colSpanAttr}
                      onClick={() =>
                        setSelectedCell({
                          type: 'cell',
                          rowIndex: rowIdx,
                          colIndex: colIdx,
                        })
                      }
                      style={{ backgroundColor: cellColor || undefined }}
                      className={`p-1.5 border-r-2 border-black min-w-[130px] sm:min-w-[160px] max-w-[280px] sm:max-w-[380px] lg:max-w-[460px] align-top ${
                        isCellSelected && !cellColor ? 'bg-amber-50' : ''
                      } ${info && info.isMaster ? 'relative' : ''}`}
                    >
                      <AutoResizeCell
                        value={row[colIdx] ?? ''}
                        onFocus={() =>
                          setSelectedCell({
                            type: 'cell',
                            rowIndex: rowIdx,
                            colIndex: colIdx,
                          })
                        }
                        onClick={() =>
                          setSelectedCell({
                            type: 'cell',
                            rowIndex: rowIdx,
                            colIndex: colIdx,
                          })
                        }
                        onChange={val => handleCellChange(rowIdx, colIdx, val)}
                        placeholder="Empty cell"
                        aria-label={`Cell row ${rowIdx + 1}, column ${colIdx + 1}`}
                        style={{
                          backgroundColor:
                            cellColor || (isCellSelected ? '#FFFDF0' : '#FFFFFF'),
                        }}
                        className={`w-full min-h-[34px] px-2.5 py-1.5 text-xs sm:text-sm text-black border transition-all ${alignClass} ${
                          format?.bold ? 'font-black' : 'font-normal'
                        } ${format?.italic ? 'italic font-serif' : ''} ${
                          isCellSelected
                            ? 'border-2 border-black ring-2 ring-black shadow-[2px_2px_0px_0px_#000] focus:outline-none'
                            : 'border-black focus:outline-none focus:border-2 focus:border-black'
                        }`}
                      />
                    </td>
                  );
                })}

                {/* Row actions: Move Up, Move Down, Duplicate, Delete */}
                <td className="p-1.5 w-28 sm:w-36 text-center align-top">
                  <div className="flex items-center justify-center gap-1 pt-1">
                    <button
                      type="button"
                      onClick={() => handleMoveRowUp(rowIdx)}
                      disabled={rowIdx === 0}
                      title={`Move row ${rowIdx + 1} up`}
                      className="w-7 h-7 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white disabled:opacity-30 disabled:pointer-events-none border border-black shadow-[1px_1px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                    >
                      <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleMoveRowDown(rowIdx)}
                      disabled={rowIdx === rows.length - 1}
                      title={`Move row ${rowIdx + 1} down`}
                      className="w-7 h-7 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white disabled:opacity-30 disabled:pointer-events-none border border-black shadow-[1px_1px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                    >
                      <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDuplicateRow(rowIdx)}
                      title={`Duplicate row ${rowIdx + 1} (create identical copy directly below)`}
                      className="h-7 px-1.5 flex items-center justify-center gap-0.5 text-black bg-white hover:bg-[#FFDE00] border border-black shadow-[1px_1px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer text-xs font-black"
                    >
                      <CopyPlus className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span className="hidden sm:inline text-[10px]">Copy</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRemoveRow(rowIdx)}
                      title={`Remove row ${rowIdx + 1}`}
                      className="w-7 h-7 flex items-center justify-center text-black bg-white hover:bg-red-100 hover:text-red-700 border border-black shadow-[1px_1px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Signature Section beneath the table */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        {!signatureEnabled ? (
          <button
            id={`add-signature-btn-${tableIndex}`}
            type="button"
            onClick={handleToggleSignature}
            className="inline-flex items-center gap-2 py-2 px-3 text-xs sm:text-sm font-black text-black bg-white hover:bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none transition-all cursor-pointer self-start"
          >
            <PenLine className="w-4 h-4 stroke-[2.5]" />
            <span>+ Add signature</span>
          </button>
        ) : (
          <div
            id={`signature-block-${tableIndex}`}
            className="flex flex-wrap items-center gap-3 p-3 bg-[#FAF8F5] border-2 border-black shadow-[3px_3px_0px_0px_#000] w-full sm:w-auto"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-black uppercase text-black">
                Signature:
              </span>
              <input
                type="text"
                value={signatureName}
                onChange={e => handleSignatureNameChange(e.target.value)}
                placeholder="Signer name (e.g. John Doe)"
                aria-label="Signer Name"
                className="px-2.5 py-1 text-xs font-bold border-2 border-black bg-white focus:outline-none focus:ring-1 focus:ring-black min-w-[180px] sm:min-w-[220px]"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleToggleSignature}
                title="Remove signature"
                aria-label="Remove Signature"
                className="p-1 bg-white hover:bg-red-50 text-black hover:text-red-700 border-2 border-black shadow-[1px_1px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
              >
                <X className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Export / Copy Options */}
      <div className="border-t-2 sm:border-t-[3px] border-black pt-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-black">
              Export {totalTables > 1 ? `Table ${tableIndex + 1}` : 'Table'}
            </h4>
          </div>

          {copiedFormat && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] font-black text-xs text-black animate-pulse">
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Copied as {copiedFormat}!</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <BrutalButton
            id={`copy-html-btn-${tableIndex}`}
            variant="secondary"
            size="md"
            onClick={() => handleCopy('HTML')}
            className="flex items-center justify-center gap-2"
          >
            <Code2 className="w-4 h-4 stroke-[2.5]" />
            <span>Copy HTML</span>
          </BrutalButton>

          <BrutalButton
            id={`copy-markdown-btn-${tableIndex}`}
            variant="secondary"
            size="md"
            onClick={() => handleCopy('Markdown')}
            className="flex items-center justify-center gap-2"
          >
            <Hash className="w-4 h-4 stroke-[2.5]" />
            <span>Copy Markdown</span>
          </BrutalButton>

          <BrutalButton
            id={`copy-csv-btn-${tableIndex}`}
            variant="secondary"
            size="md"
            onClick={() => handleCopy('CSV')}
            className="flex items-center justify-center gap-2"
          >
            <FileSpreadsheet className="w-4 h-4 stroke-[2.5]" />
            <span>Copy CSV</span>
          </BrutalButton>

          <BrutalButton
            id={`copy-text-btn-${tableIndex}`}
            variant="secondary"
            size="md"
            onClick={() => handleCopy('Plain Text')}
            className="flex items-center justify-center gap-2"
          >
            <AlignLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Copy Plain Text</span>
          </BrutalButton>
        </div>

        {/* DOWNLOAD Section */}
        <div className="mt-5 pt-4 border-t-2 border-dashed border-black/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <h5 className="text-sm sm:text-base font-black uppercase tracking-tight text-black flex items-center gap-1.5">
                <Download className="w-4 h-4 stroke-[3]" />
                DOWNLOAD
              </h5>
              {totalTables > 1 && (
                <span className="text-[11px] font-bold text-gray-600 bg-[#FAF8F5] px-2 py-0.5 border border-black">
                  Includes all {totalTables} tables
                </span>
              )}
            </div>

            {downloadedFormat && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] font-black text-xs text-black animate-pulse">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Downloaded!</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
            <BrutalButton
              id={`download-html-btn-${tableIndex}`}
              variant="secondary"
              size="md"
              onClick={() => handleDownload('HTML')}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base px-2 sm:px-4"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download HTML</span>
            </BrutalButton>

            <BrutalButton
              id={`download-markdown-btn-${tableIndex}`}
              variant="secondary"
              size="md"
              onClick={() => handleDownload('Markdown')}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base px-2 sm:px-4"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Markdown</span>
            </BrutalButton>

            <BrutalButton
              id={`download-csv-btn-${tableIndex}`}
              variant="secondary"
              size="md"
              onClick={() => handleDownload('CSV')}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base px-2 sm:px-4"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download CSV</span>
            </BrutalButton>

            <BrutalButton
              id={`download-txt-btn-${tableIndex}`}
              variant="secondary"
              size="md"
              onClick={() => handleDownload('TXT')}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base px-2 sm:px-4"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download TXT</span>
            </BrutalButton>

            <BrutalButton
              id={`download-pdf-btn-${tableIndex}`}
              variant="primary"
              size="md"
              onClick={() => handleDownload('PDF')}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base px-2 sm:px-4 col-span-2 sm:col-span-1"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download PDF</span>
            </BrutalButton>
          </div>
        </div>
      </div>
    </BrutalCard>
  );
};
