import { TodoTask } from '../types';

let nextId = 1;
export function generateTaskId(): string {
  return `task-${Date.now()}-${nextId++}`;
}

/**
 * Extracts optional time and clean task text from a single task string.
 * Supports:
 * - "at 18:00", "at 6 PM", "at 6:30 am", etc. at the end or middle
 * - "18:00-19:30 Study math", "18:00 Study math", "6 PM Call mom" at the start
 * - "Study math at 18:00-19:30"
 * If uncertain, preserves the entire text.
 */
export function parseSingleTask(rawTask: string): { time: string; text: string } {
  const trimmed = rawTask.trim();
  if (!trimmed) {
    return { time: '', text: '' };
  }

  // 1. Time range at the start: e.g. "18:00-19:30 Study math" or "6 PM - 7:30 PM Meeting"
  const startRangeMatch = trimmed.match(
    /^(\d{1,2}(?::\d{2})?\s*(?:am|pm|AM|PM)?\s*[-–—]\s*\d{1,2}(?::\d{2})?\s*(?:am|pm|AM|PM)?)\s+(.+)$/i
  );
  if (startRangeMatch) {
    return {
      time: startRangeMatch[1].trim(),
      text: startRangeMatch[2].trim(),
    };
  }

  // 2. Single time at the start: e.g. "18:00 Study math" or "6 PM Call mom" or "6:30 AM Wake up"
  const startTimeMatch = trimmed.match(
    /^((?:[01]?\d|2[0-3]):[0-5]\d|\d{1,2}(?::[0-5]\d)?\s*(?:am|pm|AM|PM))\s+(.+)$/i
  );
  if (startTimeMatch) {
    return {
      time: startTimeMatch[1].trim(),
      text: startTimeMatch[2].trim(),
    };
  }

  // 3. "at <time range>" at the end: e.g. "Study math at 18:00-19:30"
  const endAtRangeMatch = trimmed.match(
    /^(.*?)\s+at\s+(\d{1,2}(?::\d{2})?\s*(?:am|pm|AM|PM)?\s*[-–—]\s*\d{1,2}(?::\d{2})?\s*(?:am|pm|AM|PM)?)$/i
  );
  if (endAtRangeMatch) {
    return {
      time: endAtRangeMatch[2].trim(),
      text: endAtRangeMatch[1].trim(),
    };
  }

  // 4. "at <time>" at the end: e.g. "Study math at 18:00", "Buy groceries at 19:30", "Call mom at 6 PM"
  const endAtTimeMatch = trimmed.match(
    /^(.*?)\s+at\s+((?:[01]?\d|2[0-3]):[0-5]\d(?:\s*(?:am|pm|AM|PM))?|\d{1,2}(?::[0-5]\d)?\s*(?:am|pm|AM|PM))$/i
  );
  if (endAtTimeMatch) {
    return {
      time: endAtTimeMatch[2].trim(),
      text: endAtTimeMatch[1].trim(),
    };
  }

  // Fallback: no recognizable time; full string is preserved as task text
  return {
    time: '',
    text: trimmed,
  };
}

/**
 * Parses comma-separated user input into an array of TodoTask items.
 * Trims whitespace and ignores empty entries.
 */
export function parseTodoListInput(input: string): TodoTask[] {
  if (!input || !input.trim()) {
    return [];
  }

  // Split by commas, also handling potential newline separators cleanly
  const rawParts = input.split(/,|\n/);
  const tasks: TodoTask[] = [];

  for (const part of rawParts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    const { time, text } = parseSingleTask(trimmed);
    if (!text && !time) continue;

    tasks.push({
      id: generateTaskId(),
      text: text || trimmed,
      time: time || '',
      completed: false,
    });
  }

  return tasks;
}

/**
 * Formats a date string (ISO or custom text) into a clean, display-ready uppercase date.
 */
export function formatDisplayDate(dateInput: string): string {
  const trimmed = dateInput.trim();
  if (!trimmed) return '';

  // If input matches YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    try {
      const [year, month, day] = trimmed.split('-').map(Number);
      const d = new Date(year, month - 1, day);
      if (!isNaN(d.getTime())) {
        return d
          .toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })
          .toUpperCase();
      }
    } catch {
      // fallback to original string
    }
  }

  return trimmed.toUpperCase();
}
