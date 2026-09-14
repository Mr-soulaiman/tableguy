/**
 * Utility functions to detect separators and parse text into structured table data.
 * Supports detecting multiple independent data blocks with different separators.
 */

import { ParsedTable } from '../types';

export type Separator = '\t' | ',' | ';' | '|' | 'spaces';

export interface LineDetectionResult {
  separator: Separator | null;
  cells: string[];
  isMarkdownDivider: boolean;
}

export interface DetectedLine {
  raw: string;
  trimmed: string;
  hadBlankBefore: boolean;
  isMarkdownDivider: boolean;
  separator: Separator | null;
  cells: string[];
  colCount: number;
}

/**
 * Parse a CSV line with quote-handling.
 */
export function parseCsvLine(line: string, separator: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === separator && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * Parse a line for candidate separator and extract cells.
 */
export function parseLineWithSeparator(trimmed: string, sep: Separator): string[] {
  if (sep === '\t') {
    return trimmed.split('\t').map(c => c.trim());
  }
  if (sep === '|') {
    let s = trimmed;
    if (s.startsWith('|')) s = s.slice(1);
    if (s.endsWith('|')) s = s.slice(0, -1);
    return s.split('|').map(c => c.trim());
  }
  if (sep === 'spaces') {
    return trimmed.split(/\s{2,}/).map(c => c.trim());
  }
  return parseCsvLine(trimmed, sep);
}

/**
 * Detect the separator used in an individual line by evaluating candidate separators.
 * Chooses the separator that produces the most plausible number of columns (> 1).
 */
export function detectLineSeparator(trimmed: string): LineDetectionResult {
  if (!trimmed) {
    return { separator: null, cells: [], isMarkdownDivider: false };
  }

  // Check if markdown divider line (e.g. |---|---| or :---:|---:)
  if (/^[|\s:-]+$/.test(trimmed) && trimmed.includes('|') && trimmed.includes('-')) {
    return { separator: '|', cells: [], isMarkdownDivider: true };
  }

  const candidates: { sep: Separator; cells: string[] }[] = [];

  // 1. Tab \t
  if (trimmed.includes('\t')) {
    const tabCells = parseLineWithSeparator(trimmed, '\t');
    if (tabCells.length > 1) {
      candidates.push({ sep: '\t', cells: tabCells });
    }
  }

  // 2. Pipe |
  if (trimmed.includes('|')) {
    const pipeCells = parseLineWithSeparator(trimmed, '|');
    if (pipeCells.length > 1) {
      candidates.push({ sep: '|', cells: pipeCells });
    }
  }

  // 3. Comma ,
  if (trimmed.includes(',')) {
    const commaCells = parseLineWithSeparator(trimmed, ',');
    if (commaCells.length > 1) {
      candidates.push({ sep: ',', cells: commaCells });
    }
  }

  // 4. Semicolon ;
  if (trimmed.includes(';')) {
    const semiCells = parseLineWithSeparator(trimmed, ';');
    if (semiCells.length > 1) {
      candidates.push({ sep: ';', cells: semiCells });
    }
  }

  // 5. Fallback: 2+ spaces if no standard separator matched
  if (candidates.length === 0 && /\s{2,}/.test(trimmed)) {
    const spaceCells = parseLineWithSeparator(trimmed, 'spaces');
    if (spaceCells.length > 1) {
      candidates.push({ sep: 'spaces', cells: spaceCells });
    }
  }

  if (candidates.length === 0) {
    return { separator: null, cells: [trimmed], isMarkdownDivider: false };
  }

  // Sort candidates by plausible column count. If tied, use priority: \t > | > , > ; > spaces
  const priorityOrder: Record<Separator, number> = {
    '\t': 5,
    '|': 4,
    ',': 3,
    ';': 2,
    'spaces': 1,
  };

  candidates.sort((a, b) => {
    if (b.cells.length !== a.cells.length) {
      return b.cells.length - a.cells.length;
    }
    return priorityOrder[b.sep] - priorityOrder[a.sep];
  });

  return {
    separator: candidates[0].sep,
    cells: candidates[0].cells,
    isMarkdownDivider: false,
  };
}

/**
 * Backward-compatible helper to get line separator.
 */
export function getLineSeparator(line: string): Separator | null {
  const res = detectLineSeparator(line.trim());
  return res.separator;
}

/**
 * Detect the dominant separator in a collection of lines.
 */
export function detectSeparator(text: string): Separator {
  const lines = text
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0 && !/^[|\s:-]+$/.test(l));

  if (lines.length === 0) return ',';

  const sepCounts: Record<Separator, number> = {
    '\t': 0,
    '|': 0,
    ',': 0,
    ';': 0,
    'spaces': 0,
  };

  for (const line of lines) {
    const res = detectLineSeparator(line);
    if (res.separator) {
      sepCounts[res.separator]++;
    }
  }

  let bestSep: Separator = ',';
  let maxCount = -1;
  const candidates: Separator[] = ['\t', '|', ',', ';'];

  for (const sep of candidates) {
    if (sepCounts[sep] > maxCount) {
      maxCount = sepCounts[sep];
      bestSep = sep;
    }
  }

  return maxCount > 0 ? bestSep : ',';
}

/**
 * Parse a raw line with a given separator.
 */
export function parseRawLine(line: string, separator: Separator): string[] {
  return parseLineWithSeparator(line.trim(), separator);
}

/**
 * Group intermediate lines into table blocks.
 */
interface TableBlock {
  lines: DetectedLine[];
  separator: Separator | null;
  hasMarkdownDivider: boolean;
  markdownHeaderRowIndex: number;
}

/**
 * Detect separate data blocks from input text and parse each into its own table.
 *
 * Algorithm:
 * Step 1: Split into lines and ignore empty lines, noting blank line breaks.
 * Step 2: Detect the separator of EACH line individually.
 * Step 3: Group compatible lines into separate tables.
 * Step 4: Output clean table structures preserving all data rows.
 */
export function parseMultiTableData(text: string): ParsedTable[] {
  const rawLines = text.split(/\r?\n/);

  // Step 1: Filter empty lines, but record if a line had blank line(s) before it
  const lineInfos: DetectedLine[] = [];
  let pendingBlank = false;

  for (let i = 0; i < rawLines.length; i++) {
    const trimmed = rawLines[i].trim();
    if (trimmed === '') {
      if (lineInfos.length > 0) {
        pendingBlank = true;
      }
      continue;
    }

    const { separator, cells, isMarkdownDivider } = detectLineSeparator(trimmed);
    lineInfos.push({
      raw: rawLines[i],
      trimmed,
      hadBlankBefore: pendingBlank,
      isMarkdownDivider,
      separator,
      cells,
      colCount: cells.length,
    });
    pendingBlank = false;
  }

  if (lineInfos.length === 0) {
    return [];
  }

  // Detect if text is globally double-spaced (i.e. user intentionally had blank line between every row)
  const isGloballyDoubleSpaced =
    lineInfos.length > 1 &&
    lineInfos.slice(1).every(l => l.hadBlankBefore);

  // Step 2 & 3: Group compatible lines into table blocks
  const blocks: TableBlock[] = [];
  let currentBlock: TableBlock | null = null;

  for (let i = 0; i < lineInfos.length; i++) {
    const line = lineInfos[i];

    if (!currentBlock) {
      currentBlock = {
        lines: [line],
        separator: line.separator,
        hasMarkdownDivider: line.isMarkdownDivider,
        markdownHeaderRowIndex: -1,
      };
      continue;
    }

    // Markdown divider row check
    if (line.isMarkdownDivider) {
      if (currentBlock.separator === '|' || currentBlock.separator === null) {
        currentBlock.separator = '|';
        currentBlock.hasMarkdownDivider = true;
        currentBlock.markdownHeaderRowIndex = currentBlock.lines.length - 1;
        continue;
      }
    }

    let startNewBlock = false;

    // Condition 1: Separator changed (e.g. from comma to tab, or from tab to comma)
    if (
      line.separator !== null &&
      currentBlock.separator !== null &&
      line.separator !== currentBlock.separator
    ) {
      startNewBlock = true;
    }

    // Condition 2: Blank line separation (when not double-spaced rows)
    if (!startNewBlock && line.hadBlankBefore && !isGloballyDoubleSpaced) {
      const dataLineCount = currentBlock.lines.filter(l => !l.isMarkdownDivider).length;
      if (dataLineCount >= 1) {
        startNewBlock = true;
      }
    }

    // Condition 3: Significant column count change without blank line
    if (!startNewBlock && line.separator === currentBlock.separator && line.separator !== null) {
      const prevDataLines = currentBlock.lines.filter(l => !l.isMarkdownDivider);
      if (prevDataLines.length > 0) {
        const prevCols = prevDataLines[prevDataLines.length - 1].colCount;
        if (prevCols > 1 && line.colCount > 1 && Math.abs(line.colCount - prevCols) >= 2) {
          startNewBlock = true;
        }
      }
    }

    if (startNewBlock) {
      blocks.push(currentBlock);
      currentBlock = {
        lines: [line],
        separator: line.separator,
        hasMarkdownDivider: line.isMarkdownDivider,
        markdownHeaderRowIndex: -1,
      };
    } else {
      currentBlock.lines.push(line);
      if (currentBlock.separator === null && line.separator !== null) {
        currentBlock.separator = line.separator;
      }
    }
  }

  if (currentBlock && currentBlock.lines.length > 0) {
    blocks.push(currentBlock);
  }

  // Step 4: Convert each block into a ParsedTable
  const parsedTables: ParsedTable[] = [];

  for (let bIdx = 0; bIdx < blocks.length; bIdx++) {
    const block = blocks[bIdx];
    const dataLines = block.lines.filter(l => !l.isMarkdownDivider);
    if (dataLines.length === 0) continue;

    const rawRows = dataLines.map(l => l.cells);
    const maxCols = Math.max(...rawRows.map(r => r.length), 1);

    // Normalize all rows to maxCols
    const normalizedRows = rawRows.map(row => {
      const padded = [...row];
      while (padded.length < maxCols) {
        padded.push('');
      }
      return padded;
    });

    let headers: string[];
    let rows: string[][];

    if (block.hasMarkdownDivider && block.markdownHeaderRowIndex >= 0) {
      // Markdown table with explicit divider row (|---|---|)
      const headerRow = normalizedRows[block.markdownHeaderRowIndex];
      headers = headerRow.map((h, i) => h.trim() || `Column ${i + 1}`);
      rows = normalizedRows.filter((_, idx) => idx !== block.markdownHeaderRowIndex);
      if (rows.length === 0) {
        rows = [Array(maxCols).fill('')];
      }
    } else {
      // Standard CSV / TSV / plain text: keep all pasted lines in rows
      // so no user data is swallowed into column headers
      headers = Array.from({ length: maxCols }, (_, i) => `Column ${i + 1}`);
      rows = normalizedRows;
    }

    parsedTables.push({
      name: `Table ${parsedTables.length + 1}`,
      headers,
      rows,
    });
  }

  return parsedTables;
}

/**
 * Backward compatibility: parses data and returns the first table.
 */
export function parseTableData(text: string): ParsedTable | null {
  const tables = parseMultiTableData(text);
  return tables.length > 0 ? tables[0] : null;
}

