import { MergeCell } from '../types';

export interface MergedCellInfo {
  isMaster: boolean;
  isCovered: boolean;
  masterRow: number; // -1 for header, 0..rowCount-1 for body rows
  masterCol: number;
  rowspan: number;
  colspan: number;
  mergeRecord?: MergeCell;
}

export interface TableMergeInfo {
  headerMergeInfo: MergedCellInfo[];
  bodyMergeMatrix: MergedCellInfo[][];
}

/**
 * Given the table dimensions and merges array, returns merge info for both
 * the header row (row -1) and all body rows (rows 0 .. rowCount - 1).
 */
export function getTableMergeInfo(
  rowCount: number,
  colCount: number,
  merges: MergeCell[] = []
): TableMergeInfo {
  // We represent rows from -1 (header) to rowCount - 1 (body rows)
  // Index 0 in rawGrid corresponds to row -1, index (r + 1) to body row r.
  const rawGrid: MergedCellInfo[][] = [];

  for (let r = -1; r < rowCount; r++) {
    const rowInfo: MergedCellInfo[] = [];
    for (let c = 0; c < colCount; c++) {
      rowInfo.push({
        isMaster: false,
        isCovered: false,
        masterRow: r,
        masterCol: c,
        rowspan: 1,
        colspan: 1,
      });
    }
    rawGrid.push(rowInfo);
  }

  for (const m of merges) {
    if (
      m.row < -1 ||
      m.col < 0 ||
      m.row >= rowCount ||
      m.col >= colCount ||
      m.rowspan <= 0 ||
      m.colspan <= 0
    ) {
      continue;
    }

    const maxRowspan = m.row === -1 ? 1 : rowCount - m.row;
    const safeRowspan = Math.min(m.rowspan, maxRowspan);
    const endRow = m.row + safeRowspan;
    const endCol = Math.min(colCount, m.col + m.colspan);
    const actualRowspan = endRow - m.row;
    const actualColspan = endCol - m.col;

    if (actualRowspan <= 1 && actualColspan <= 1) {
      continue;
    }

    for (let r = m.row; r < endRow; r++) {
      const gridRowIdx = r + 1;
      if (!rawGrid[gridRowIdx]) continue;

      for (let c = m.col; c < endCol; c++) {
        if (r === m.row && c === m.col) {
          rawGrid[gridRowIdx][c] = {
            isMaster: true,
            isCovered: false,
            masterRow: m.row,
            masterCol: m.col,
            rowspan: actualRowspan,
            colspan: actualColspan,
            mergeRecord: m,
          };
        } else {
          rawGrid[gridRowIdx][c] = {
            isMaster: false,
            isCovered: true,
            masterRow: m.row,
            masterCol: m.col,
            rowspan: actualRowspan,
            colspan: actualColspan,
            mergeRecord: m,
          };
        }
      }
    }
  }

  const headerMergeInfo = rawGrid[0] || [];
  const bodyMergeMatrix = rawGrid.slice(1);

  return {
    headerMergeInfo,
    bodyMergeMatrix,
  };
}

/**
 * Given the table dimensions and merges array, returns a 2D matrix
 * for body cells [r][c] with their merge info.
 */
export function getMergeMatrix(
  rowCount: number,
  colCount: number,
  merges: MergeCell[] = []
): MergedCellInfo[][] {
  return getTableMergeInfo(rowCount, colCount, merges).bodyMergeMatrix;
}

/**
 * Find the merge record that governs the cell at (r, c) (where r = -1 is header, r >= 0 is body),
 * whether it is master or covered.
 */
export function findMergeAt(merges: MergeCell[] = [], row: number, col: number): MergeCell | undefined {
  return merges.find(
    m =>
      row >= m.row &&
      row < m.row + m.rowspan &&
      col >= m.col &&
      col < m.col + m.colspan
  );
}

/**
 * Filter and clip merges when rows or cols are added, deleted, or table resized.
 */
export function sanitizeMerges(
  merges: MergeCell[] = [],
  rowCount: number,
  colCount: number
): MergeCell[] {
  const result: MergeCell[] = [];

  for (const m of merges) {
    if (m.row < -1 || m.col < 0 || m.row >= rowCount || m.col >= colCount) continue;
    const maxRowspan = m.row === -1 ? 1 : rowCount - m.row;
    const maxColspan = colCount - m.col;
    const rowspan = Math.min(m.rowspan, maxRowspan);
    const colspan = Math.min(m.colspan, maxColspan);

    if (rowspan > 1 || colspan > 1) {
      result.push({
        row: m.row,
        col: m.col,
        rowspan,
        colspan,
      });
    }
  }

  return result;
}

/**
 * Handle merges when a row is removed.
 */
export function onRowRemovedMerges(
  merges: MergeCell[] = [],
  removedRowIdx: number,
  newRowCount: number,
  colCount: number
): MergeCell[] {
  const updated: MergeCell[] = [];

  for (const m of merges) {
    const startRow = m.row;
    const endRow = m.row + m.rowspan - 1;

    if (removedRowIdx < startRow) {
      // Shift up (only if startRow >= 0; header row at -1 does not shift)
      updated.push({
        ...m,
        row: startRow > 0 ? startRow - 1 : startRow,
      });
    } else if (removedRowIdx > endRow) {
      // Untouched
      updated.push(m);
    } else {
      // The removed row falls inside this merge block
      const newRowspan = m.rowspan - 1;
      if (newRowspan > 1 || m.colspan > 1) {
        updated.push({
          ...m,
          row: startRow,
          rowspan: newRowspan,
        });
      }
    }
  }

  return sanitizeMerges(updated, newRowCount, colCount);
}

/**
 * Handle merges when a column is removed.
 */
export function onColRemovedMerges(
  merges: MergeCell[] = [],
  removedColIdx: number,
  rowCount: number,
  newColCount: number
): MergeCell[] {
  const updated: MergeCell[] = [];

  for (const m of merges) {
    const startCol = m.col;
    const endCol = m.col + m.colspan - 1;

    if (removedColIdx < startCol) {
      // Shift left
      updated.push({
        ...m,
        col: startCol - 1,
      });
    } else if (removedColIdx > endCol) {
      // Untouched
      updated.push(m);
    } else {
      // The removed column falls inside this merge block
      const newColspan = m.colspan - 1;
      if (newColspan > 1 || m.rowspan > 1) {
        updated.push({
          ...m,
          col: startCol,
          colspan: newColspan,
        });
      }
    }
  }

  return sanitizeMerges(updated, rowCount, newColCount);
}

