import React, { useState } from 'react';
import { TodoTask } from '../types';
import { BrutalButton } from './BrutalButton';
import { BrutalBadge } from './BrutalBadge';
import { downloadTodoPdf, printTodoPdf } from '../utils/todoPdf';
import {
  Download,
  Printer,
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  Edit2,
  Check,
  Calendar,
  Clock,
  Sparkles,
} from 'lucide-react';

interface TodoListPreviewProps {
  tasks: TodoTask[];
  date: string;
  listTitle: string;
  onUpdateTasks: (tasks: TodoTask[]) => void;
  onEditRawInput: () => void;
}

export const TodoListPreview: React.FC<TodoListPreviewProps> = ({
  tasks,
  date,
  listTitle,
  onUpdateTasks,
  onEditRawInput,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [editTime, setEditTime] = useState('');

  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');
  const [isAddingNew, setIsAddingNew] = useState(false);

  const completedCount = tasks.filter((t) => t.completed).length;
  const hasAnyTime = tasks.some((t) => Boolean(t.time && t.time.trim()));

  const handleToggleTask = (id: string) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    onUpdateTasks(updated);
  };

  const handleDeleteTask = (id: string) => {
    const updated = tasks.filter((t) => t.id !== id);
    onUpdateTasks(updated);
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...tasks];
    const temp = updated[index - 1];
    updated[index - 1] = updated[index];
    updated[index] = temp;
    onUpdateTasks(updated);
  };

  const handleMoveDown = (index: number) => {
    if (index === tasks.length - 1) return;
    const updated = [...tasks];
    const temp = updated[index + 1];
    updated[index + 1] = updated[index];
    updated[index] = temp;
    onUpdateTasks(updated);
  };

  const startEditing = (task: TodoTask) => {
    setEditingId(task.id);
    setEditText(task.text);
    setEditTime(task.time || '');
  };

  const saveEditing = (id: string) => {
    if (!editText.trim()) {
      handleDeleteTask(id);
      setEditingId(null);
      return;
    }
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, text: editText.trim(), time: editTime.trim() } : t
    );
    onUpdateTasks(updated);
    setEditingId(null);
  };

  const handleAddNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask: TodoTask = {
      id: `task-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      text: newTaskText.trim(),
      time: newTaskTime.trim(),
      completed: false,
    };

    onUpdateTasks([...tasks, newTask]);
    setNewTaskText('');
    setNewTaskTime('');
    setIsAddingNew(false);
  };

  const handleDownload = () => {
    const safeDate = date ? date.replace(/[^a-zA-Z0-9_-]/g, '_') : 'list';
    downloadTodoPdf(
      {
        title: listTitle || 'MY TO-DO LIST',
        date,
        tasks,
      },
      `todo-${safeDate}.pdf`
    );
  };

  const handlePrint = () => {
    printTodoPdf({
      title: listTitle || 'MY TO-DO LIST',
      date,
      tasks,
    });
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Primary Action Controls Bar */}
      <div className="bg-white border-2 sm:border-[3px] border-black p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000] flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3">
          <BrutalBadge variant="yellow" size="sm">
            Checklist Ready
          </BrutalBadge>
          <span className="text-xs sm:text-sm font-bold text-gray-700">
            {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
            {tasks.length > 0 && ` (${completedCount} done)`}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <BrutalButton
            id="todo-edit-raw-btn"
            variant="secondary"
            size="sm"
            onClick={onEditRawInput}
            title="Edit comma-separated raw list"
          >
            <Edit2 className="w-3.5 h-3.5 mr-1.5 stroke-[2.5]" />
            <span>Edit</span>
          </BrutalButton>

          <BrutalButton
            id="todo-add-task-btn"
            variant="secondary"
            size="sm"
            onClick={() => setIsAddingNew(true)}
          >
            <Plus className="w-4 h-4 mr-1 stroke-[3]" />
            <span>Add Task</span>
          </BrutalButton>

          <BrutalButton
            id="todo-print-btn"
            variant="secondary"
            size="sm"
            onClick={handlePrint}
            title="Print printable checklist"
          >
            <Printer className="w-4 h-4 mr-1.5 stroke-[2.5]" />
            <span>Print</span>
          </BrutalButton>

          <BrutalButton
            id="todo-download-pdf-btn"
            variant="primary"
            size="md"
            onClick={handleDownload}
            className="flex-1 sm:flex-initial"
          >
            <Download className="w-4 h-4 mr-2 stroke-[3]" />
            <span>DOWNLOAD PDF</span>
          </BrutalButton>
        </div>
      </div>

      {/* Printable Neo-Brutalist Sheet Preview Container */}
      <div className="relative mx-auto w-full max-w-3xl">
        <div className="bg-white border-3 sm:border-4 border-black shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] overflow-hidden">
          {/* Header Banner */}
          <div className="bg-[#FFDE00] border-b-3 sm:border-b-4 border-black p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase bg-black text-white px-2 py-0.5 border border-black inline-block mb-1.5 shadow-[1px_1px_0px_0px_#000]">
                Printable Sheet
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-tight leading-none">
                {listTitle || 'MY TO-DO LIST'}
              </h2>
            </div>

            {date && (
              <div className="bg-white border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_0px_#000] self-start sm:self-auto flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                <span className="text-xs sm:text-sm font-black uppercase text-black tracking-wide">
                  {date}
                </span>
              </div>
            )}
          </div>

          {/* Task Items List */}
          <div className="p-4 sm:p-8 divide-y-2 divide-black/10 min-h-[220px]">
            {tasks.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="font-bold text-base mb-2">No tasks in your list yet.</p>
                <BrutalButton
                  id="todo-empty-add-btn"
                  variant="primary"
                  size="sm"
                  onClick={() => setIsAddingNew(true)}
                >
                  <Plus className="w-4 h-4 mr-1 stroke-[3]" /> Add your first task
                </BrutalButton>
              </div>
            ) : (
              tasks.map((task, index) => {
                const isEditing = editingId === task.id;

                return (
                  <div
                    key={task.id}
                    className={`py-3 sm:py-3.5 flex items-start gap-3 sm:gap-4 group transition-colors ${
                      task.completed ? 'bg-black/[0.02]' : 'hover:bg-[#FFDE00]/10'
                    }`}
                  >
                    {/* Neo-brutalist Checkbox */}
                    <button
                      type="button"
                      id={`todo-check-${index}`}
                      onClick={() => handleToggleTask(task.id)}
                      className={`mt-0.5 w-6 h-6 shrink-0 border-2 sm:border-[2.5px] border-black flex items-center justify-center transition-all cursor-pointer ${
                        task.completed
                          ? 'bg-[#FFDE00] shadow-[1px_1px_0px_0px_#000]'
                          : 'bg-white hover:bg-[#F3F0E6] shadow-[2px_2px_0px_0px_#000]'
                      }`}
                      title={task.completed ? 'Mark uncompleted' : 'Mark completed'}
                    >
                      {task.completed && (
                        <Check className="w-4 h-4 text-black stroke-[3.5]" />
                      )}
                    </button>

                    {/* Content / Edit Form */}
                    {isEditing ? (
                      <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        {hasAnyTime && (
                          <input
                            type="text"
                            value={editTime}
                            onChange={(e) => setEditTime(e.target.value)}
                            placeholder="e.g. 18:00"
                            className="w-24 px-2 py-1 text-xs font-bold border-2 border-black bg-white"
                          />
                        )}
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') saveEditing(task.id);
                            if (e.key === 'Escape') setEditingId(null);
                          }}
                          autoFocus
                          className="flex-1 px-2.5 py-1 text-sm font-bold border-2 border-black bg-white"
                        />
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => saveEditing(task.id)}
                            className="px-2.5 py-1 text-xs font-bold bg-black text-white border-2 border-black hover:bg-black/80"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingId(null)}
                            className="px-2 py-1 text-xs font-bold bg-white text-black border-2 border-black hover:bg-gray-100"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex items-start justify-between gap-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1">
                          {/* Time display if time column exists */}
                          {hasAnyTime && (
                            <div className="min-w-[70px] sm:min-w-[90px] shrink-0">
                              {task.time ? (
                                <span className="inline-flex items-center gap-1 font-mono font-black text-xs sm:text-sm px-1.5 py-0.5 bg-black/5 border border-black/30 rounded-none">
                                  <Clock className="w-3 h-3 stroke-[2.5]" />
                                  {task.time}
                                </span>
                              ) : (
                                <span className="text-gray-300 text-xs font-mono">—</span>
                              )}
                            </div>
                          )}

                          {/* Task text */}
                          <span
                            onClick={() => startEditing(task)}
                            className={`text-sm sm:text-base font-bold leading-snug cursor-pointer transition-colors ${
                              task.completed
                                ? 'line-through text-gray-400 font-medium'
                                : 'text-black hover:text-[#000000] group-hover:underline decoration-2'
                            }`}
                            title="Click to edit task"
                          >
                            {task.text}
                          </span>
                        </div>

                        {/* Row control actions: Reorder & Delete */}
                        <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity shrink-0">
                          <button
                            type="button"
                            onClick={() => handleMoveUp(index)}
                            disabled={index === 0}
                            className="p-1 hover:bg-black/10 disabled:opacity-20 cursor-pointer disabled:cursor-not-allowed border border-transparent hover:border-black"
                            title="Move task up"
                          >
                            <ChevronUp className="w-3.5 h-3.5 stroke-[2.5]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleMoveDown(index)}
                            disabled={index === tasks.length - 1}
                            className="p-1 hover:bg-black/10 disabled:opacity-20 cursor-pointer disabled:cursor-not-allowed border border-transparent hover:border-black"
                            title="Move task down"
                          >
                            <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => startEditing(task)}
                            className="p-1 hover:bg-black/10 cursor-pointer border border-transparent hover:border-black"
                            title="Edit task text"
                          >
                            <Edit2 className="w-3 h-3 stroke-[2.5]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteTask(task.id)}
                            className="p-1 text-red-600 hover:bg-red-50 cursor-pointer border border-transparent hover:border-red-600"
                            title="Remove task"
                          >
                            <Trash2 className="w-3.5 h-3.5 stroke-[2.5]" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}

            {/* Inline Add Task Form */}
            {isAddingNew && (
              <form onSubmit={handleAddNewTask} className="py-3 flex flex-col sm:flex-row gap-2 bg-[#FAF8F5] p-3 border-2 border-black mt-2">
                <input
                  type="text"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  placeholder="Task description (e.g. Call dentist at 4 PM)"
                  autoFocus
                  className="flex-1 px-3 py-1.5 text-sm font-bold border-2 border-black bg-white"
                />
                <input
                  type="text"
                  value={newTaskTime}
                  onChange={(e) => setNewTaskTime(e.target.value)}
                  placeholder="Time (optional)"
                  className="w-full sm:w-28 px-3 py-1.5 text-sm font-bold border-2 border-black bg-white"
                />
                <div className="flex items-center gap-2">
                  <BrutalButton id="todo-save-new-task-btn" type="submit" variant="primary" size="sm">
                    Add
                  </BrutalButton>
                  <BrutalButton
                    id="todo-cancel-new-task-btn"
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setIsAddingNew(false);
                      setNewTaskText('');
                      setNewTaskTime('');
                    }}
                  >
                    Cancel
                  </BrutalButton>
                </div>
              </form>
            )}
          </div>

          {/* Footer note in preview */}
          <div className="border-t-2 border-black px-4 sm:px-8 py-3 bg-[#FAF8F5] flex items-center justify-between text-[11px] sm:text-xs font-bold text-gray-600">
            <span>TABLABLE Printable To-Do List</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-black" /> Fits standard A4 paper
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
