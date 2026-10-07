export type ColumnAlignment = 'left' | 'center' | 'right';
export type TitlePosition = 'top' | 'bottom';

export interface CellFormat {
  bold?: boolean;
  italic?: boolean;
}

export interface MergeCell {
  row: number;
  col: number;
  rowspan: number;
  colspan: number;
}

export interface TableItem {
  id: string;
  name: string;
  title?: string;
  titlePosition?: TitlePosition;
  headers: string[];
  rows: string[][];
  cellColors: string[][];
  headerColors: string[];
  cellFormats?: CellFormat[][];
  headerFormats?: CellFormat[];
  columnAlignments?: ColumnAlignment[];
  merges?: MergeCell[];
  signatureEnabled?: boolean;
  signatureName?: string;
}

export interface ParsedTable {
  headers: string[];
  rows: string[][];
  name?: string;
}

export interface TodoTask {
  id: string;
  text: string;
  time: string;
  completed: boolean;
}
