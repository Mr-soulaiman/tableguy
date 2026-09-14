import { MergeCell } from '../types';

export interface MergedCellInfo {
  isMaster: boolean;
  isCovered: boolean;
  masterRow: number;
  masterCol: number;
  rowspan: number;
  colspan: number;
  mergeRecord?: MergeCell;
}

/**
 * Given the table dimensions and merges array, returns a 2D matrix
 * where each cell [r][c] has its merge info (master, covered, rowspan, colspan).
 */
export function getMergeMatrix(
  rowCount: number,
  colCount: number,
  merges: MergeCell[] = []
): MergedCellInfo[][] {
  const matrix: MergedCellInfo[][] = [];

  for (let r = 0; r < rowCount; r++) {
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
    matrix.push(rowInfo);
  }

  for (const m of merges) {
    if (
      m.row < 0 ||
      m.col < 0 ||
      m.row >= rowCount ||
      m.col >= colCount ||
      m.rowspan <= 0 ||
      m.colspan <= 0
    ) {
      continue;
    }

    const endRow = Math.min(rowCount, m.row + m.rowspan);
    const endCol = Math.min(colCount, m.col + m.colspan);
    const actualRowspan = endRow - m.row;
    const actualColspan = endCol - m.col;

    if (actualRowspan <= 1 && actualColspan <= 1) {
      continue;
    }

    for (let r = m.row; r < endRow; r++) {
      for (let c = m.col; c < endCol; c++) {
        if (r === m.row && c === m.col) {
          matrix[r][c] = {
            isMaster: true,
            isCovered: false,
            masterRow: m.row,
            masterCol: m.col,
            rowspan: actualRowspan,
            colspan: actualColspan,
            mergeRecord: m,
          };
        } else {
          matrix[r][c] = {
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

  return matrix;
}

/**
 * Find the merge record that governs the cell at (r, c), whether it is master or covered.
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
    if (m.row >= rowCount || m.col >= colCount) continue;
    const maxRowspan = rowCount - m.row;
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
      // Shift up
      updated.push({
        ...m,
        row: startRow - 1,
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
