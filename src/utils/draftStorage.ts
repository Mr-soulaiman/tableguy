import { TableItem, TodoTask, TitlePosition } from '../types';

export const TABLE_GENERATOR_DRAFT_KEY = 'tablable_table_generator_draft_v1';
export const TODO_LIST_DRAFT_KEY = 'tablable_todo_list_draft_v1';
export const WORD_COUNTER_DRAFT_KEY = 'tablable_word_counter_draft_v1';

export interface TableGeneratorDraft {
  tables: TableItem[];
  pasteText?: string;
  updatedAt: number;
}

export interface TodoListDraft {
  tasks: TodoTask[];
  rawInput: string;
  dateInput: string;
  listTitle: string;
  titlePosition: TitlePosition;
  hasGenerated: boolean;
  updatedAt: number;
}

export interface WordCounterDraft {
  text: string;
  updatedAt: number;
}

/**
 * Check if browser localStorage is available and functional.
 */
function isStorageAvailable(): boolean {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
    return false;
  }
  try {
    const testKey = '__tablable_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// TABLE GENERATOR DRAFT
// ---------------------------------------------------------------------------

export function loadTableDraft(): TableGeneratorDraft | null {
  if (!isStorageAvailable()) return null;
  try {
    const raw = window.localStorage.getItem(TABLE_GENERATOR_DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TableGeneratorDraft;
    if (parsed && Array.isArray(parsed.tables) && parsed.tables.length > 0) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

export function saveTableDraft(data: { tables: TableItem[]; pasteText?: string }): void {
  if (!isStorageAvailable()) return;
  try {
    const draft: TableGeneratorDraft = {
      tables: data.tables,
      pasteText: data.pasteText ?? '',
      updatedAt: Date.now(),
    };
    window.localStorage.setItem(TABLE_GENERATOR_DRAFT_KEY, JSON.stringify(draft));
  } catch {
    // Gracefully ignore storage quota errors in private browsing
  }
}

export function clearTableDraft(): void {
  if (!isStorageAvailable()) return;
  try {
    window.localStorage.removeItem(TABLE_GENERATOR_DRAFT_KEY);
  } catch {
    // Ignore
  }
}

// ---------------------------------------------------------------------------
// TO-DO LIST DRAFT
// ---------------------------------------------------------------------------

export function loadTodoDraft(): TodoListDraft | null {
  if (!isStorageAvailable()) return null;
  try {
    const raw = window.localStorage.getItem(TODO_LIST_DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TodoListDraft;
    if (parsed && typeof parsed === 'object' && Array.isArray(parsed.tasks)) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

export function saveTodoDraft(data: {
  tasks: TodoTask[];
  rawInput: string;
  dateInput: string;
  listTitle: string;
  titlePosition: TitlePosition;
  hasGenerated: boolean;
}): void {
  if (!isStorageAvailable()) return;
  try {
    const draft: TodoListDraft = {
      tasks: data.tasks,
      rawInput: data.rawInput,
      dateInput: data.dateInput,
      listTitle: data.listTitle,
      titlePosition: data.titlePosition,
      hasGenerated: data.hasGenerated,
      updatedAt: Date.now(),
    };
    window.localStorage.setItem(TODO_LIST_DRAFT_KEY, JSON.stringify(draft));
  } catch {
    // Gracefully ignore storage quota errors in private browsing
  }
}

export function clearTodoDraft(): void {
  if (!isStorageAvailable()) return;
  try {
    window.localStorage.removeItem(TODO_LIST_DRAFT_KEY);
  } catch {
    // Ignore
  }
}

// ---------------------------------------------------------------------------
// WORD COUNTER DRAFT
// ---------------------------------------------------------------------------

export function loadWordCounterDraft(): WordCounterDraft | null {
  if (!isStorageAvailable()) return null;
  try {
    const raw = window.localStorage.getItem(WORD_COUNTER_DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as WordCounterDraft;
    if (parsed && typeof parsed.text === 'string') {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

export function saveWordCounterDraft(data: { text: string }): void {
  if (!isStorageAvailable()) return;
  try {
    const draft: WordCounterDraft = {
      text: data.text,
      updatedAt: Date.now(),
    };
    window.localStorage.setItem(WORD_COUNTER_DRAFT_KEY, JSON.stringify(draft));
  } catch {
    // Gracefully ignore storage quota errors in private browsing
  }
}

export function clearWordCounterDraft(): void {
  if (!isStorageAvailable()) return;
  try {
    window.localStorage.removeItem(WORD_COUNTER_DRAFT_KEY);
  } catch {
    // Ignore
  }
}
