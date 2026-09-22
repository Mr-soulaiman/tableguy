import React, { useState, useRef } from 'react';
import { SEO } from '../components/SEO';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalButton } from '../components/BrutalButton';
import { BrutalBadge } from '../components/BrutalBadge';
import { TodoListPreview } from '../components/TodoListPreview';
import { parseTodoListInput, formatDisplayDate } from '../utils/todoParser';
import { TodoTask } from '../types';
import { Link, useRouter } from '../router';
import {
  CheckSquare,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  Printer,
  FileText,
  Table as TableIcon,
  HelpCircle,
  ShieldCheck,
  Zap,
  BookOpen,
} from 'lucide-react';

const DEFAULT_SAMPLE_INPUT =
  'Study math at 18:00, Buy groceries at 19:30, Call mom at 6 PM, Finish project, Clean room';

export const TodoListPage: React.FC = () => {
  const { navigate } = useRouter();
  const [rawInput, setRawInput] = useState<string>(DEFAULT_SAMPLE_INPUT);
  const [dateInput, setDateInput] = useState<string>(() => {
    // Default to today formatted nicely
    const today = new Date();
    return today
      .toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
      .toUpperCase();
  });
  const [listTitle, setListTitle] = useState<string>('MY TO-DO LIST');
  const [tasks, setTasks] = useState<TodoTask[]>(() => parseTodoListInput(DEFAULT_SAMPLE_INPUT));
  const [hasGenerated, setHasGenerated] = useState<boolean>(true);

  const previewSectionRef = useRef<HTMLDivElement>(null);
  const editorSectionRef = useRef<HTMLDivElement>(null);

  const handleMakeTodoList = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const parsed = parseTodoListInput(rawInput);
    setTasks(parsed);
    setHasGenerated(true);

    // Smooth scroll down to preview
    setTimeout(() => {
      previewSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleEditRawInput = () => {
    editorSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="To-Do List Maker — Free Printable Checklist PDF | Tablable"
        description="Create a simple to-do list from your tasks and download a clean printable PDF checklist. Free, simple, and no sign-up required."
        canonicalPath="/to-do-list"
      />

      <div className="flex flex-col gap-12 sm:gap-16 py-8 sm:py-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <BrutalBadge variant="yellow" size="md">
              Printable Checklist Generator
            </BrutalBadge>
            <BrutalBadge variant="white" size="md">
              100% Free &amp; Private
            </BrutalBadge>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-black tracking-tight uppercase leading-[1.08] mb-6">
            Make a To-Do List. Get It Done.
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed max-w-2xl mx-auto">
            Turn a simple list of tasks into a clean, printable checklist. Add your tasks, organize them, and download a beautiful PDF.
          </p>

          <div className="mt-4 text-xs sm:text-sm font-medium text-gray-700">
            Need to organize data instead?{' '}
            <Link
              href="/table-generator"
              className="font-black text-black underline hover:text-[#FFDE00] transition-colors"
            >
              Try the Table Generator →
            </Link>
          </div>
        </section>

        {/* Input & Generator Form Section */}
        <section
          ref={editorSectionRef}
          className="max-w-4xl mx-auto px-4 sm:px-6 w-full"
        >
          <BrutalCard shadow="lg" className="p-6 sm:p-10 bg-white">
            <form onSubmit={handleMakeTodoList} className="flex flex-col gap-6">
              {/* Textarea for tasks */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="todo-raw-input"
                  className="text-base sm:text-lg font-black uppercase text-black"
                >
                  WHAT DO YOU NEED TO GET DONE?
                </label>

                <textarea
                  id="todo-raw-input"
                  value={rawInput}
                  onChange={(e) => setRawInput(e.target.value)}
                  placeholder="Study math, buy groceries, call mom, finish project"
                  rows={4}
                  className="w-full p-4 text-base sm:text-lg font-bold border-2 sm:border-[3px] border-black bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-0 shadow-[3px_3px_0px_0px_#000] resize-y placeholder:text-gray-400 font-sans"
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-semibold text-gray-600">
                  <p>
                    <strong>Help:</strong> Separate each task with a comma.
                  </p>
                  <p className="text-gray-500">
                    Example: <em>Study math, buy groceries, call mom, finish project</em>
                  </p>
                </div>
              </div>

              {/* Date & Title Settings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t-2 border-black/10">
                {/* Optional Date Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="todo-date-input"
                    className="text-xs sm:text-sm font-black uppercase text-black"
                  >
                    DATE (OPTIONAL)
                  </label>

                  <div className="relative">
                    <input
                      id="todo-date-input"
                      type="text"
                      value={dateInput}
                      onChange={(e) => setDateInput(e.target.value)}
                      placeholder="e.g. MONDAY, SEPTEMBER 22"
                      className="w-full px-3.5 py-2.5 text-sm font-bold border-2 border-black bg-[#FAF8F5] focus:bg-white focus:outline-none shadow-[2px_2px_0px_0px_#000]"
                    />
                  </div>
                </div>

                {/* Optional Title Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="todo-title-input"
                    className="text-xs sm:text-sm font-black uppercase text-black"
                  >
                    LIST TITLE
                  </label>
                  <input
                    id="todo-title-input"
                    type="text"
                    value={listTitle}
                    onChange={(e) => setListTitle(e.target.value)}
                    placeholder="MY TO-DO LIST"
                    className="w-full px-3.5 py-2.5 text-sm font-bold border-2 border-black bg-[#FAF8F5] focus:bg-white focus:outline-none shadow-[2px_2px_0px_0px_#000]"
                  />
                </div>
              </div>

              {/* Time Detection Info Note */}
              <div className="p-3 bg-[#FAF8F5] border-2 border-black/40 flex items-start gap-2.5 text-xs text-gray-700">
                <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <p>
                  <strong>Optional Time Detection:</strong> Add times directly in tasks (e.g.{' '}
                  <code>Study math at 18:00</code>, <code>Call mom at 6 PM</code>, or{' '}
                  <code>18:00-19:30 Workout</code>) and they will be neatly aligned in their own column.
                </p>
              </div>

              {/* Large Primary Action Button */}
              <BrutalButton
                id="make-my-todo-list-btn"
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                className="text-base sm:text-xl font-black py-4 uppercase shadow-[5px_5px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000]"
              >
                <span>MAKE MY TO-DO LIST</span>
                <ArrowRight className="w-6 h-6 ml-2 stroke-[3]" />
              </BrutalButton>
            </form>
          </BrutalCard>
        </section>

        {/* Live Preview Section */}
        {hasGenerated && (
          <section
            ref={previewSectionRef}
            className="max-w-4xl mx-auto px-4 sm:px-6 w-full"
          >
            <div className="mb-4 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">
                Live Interactive Preview
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-black tracking-tight">
                Your Printable Checklist
              </h2>
            </div>

            <TodoListPreview
              tasks={tasks}
              date={dateInput}
              listTitle={listTitle}
              onUpdateTasks={setTasks}
              onEditRawInput={handleEditRawInput}
            />
          </section>
        )}

        {/* Feature / Benefits Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BrutalCard shadow="sm" className="p-6 bg-white">
              <div className="w-10 h-10 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black uppercase text-black mb-2">
                Designed for A4 Print
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                Downloads a crisp vector PDF sized perfectly for standard A4 paper, with balanced margins and bold brutalist lines.
              </p>
            </BrutalCard>

            <BrutalCard shadow="sm" className="p-6 bg-white">
              <div className="w-10 h-10 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black uppercase text-black mb-2">
                Automatic Time Column
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                Include times like <em>18:00</em> or <em>6 PM</em> in your task text. The generator separates and aligns them automatically.
              </p>
            </BrutalCard>

            <BrutalCard shadow="sm" className="p-6 bg-white">
              <div className="w-10 h-10 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black uppercase text-black mb-2">
                100% Client-Side
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                No database, no accounts, and no AI tracking. Your tasks remain entirely private in your web browser.
              </p>
            </BrutalCard>
          </div>
        </section>

        {/* Helpful Guides & Table Generator Cross-Links */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <BrutalCard
              shadow="md"
              className="p-6 sm:p-8 bg-white flex flex-col justify-between gap-4"
            >
              <div>
                <span className="text-xs font-black uppercase bg-[#FFDE00] px-2 py-0.5 border border-black inline-block mb-3">
                  Online Tool
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-black mb-2">
                  Need a Full Table?
                </h3>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  Design complex spreadsheets, paste Excel or CSV data, color cells, and export to HTML, Markdown, CSV, and PDF with our free Table Generator.
                </p>
              </div>
              <div>
                <Link
                  href="/table-generator"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-black bg-[#FFDE00] hover:bg-[#FFE633] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <TableIcon className="w-4 h-4 stroke-[2.5]" />
                  <span>Open Table Generator →</span>
                </Link>
              </div>
            </BrutalCard>

            <BrutalCard
              shadow="md"
              className="p-6 sm:p-8 bg-white flex flex-col justify-between gap-4"
            >
              <div>
                <span className="text-xs font-black uppercase bg-black text-white px-2 py-0.5 border border-black inline-block mb-3">
                  Guides &amp; Articles
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-black mb-2">
                  Tables vs. Lists
                </h3>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  Wondering when to use a checklist and when to switch to a structured table? Read our practical guide on choosing the best format for your notes.
                </p>
              </div>
              <div>
                <Link
                  href="/guides/tables-vs-lists"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-black bg-white hover:bg-[#F3F0E6] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <BookOpen className="w-4 h-4 stroke-[2.5]" />
                  <span>Read Tables vs. Lists →</span>
                </Link>
              </div>
            </BrutalCard>
          </div>
        </section>

        {/* Direct Link to Home */}
        <div className="text-center text-sm font-bold text-gray-600">
          <Link href="/" className="hover:text-black underline underline-offset-4">
            ← Back to TABLABLE Home
          </Link>
        </div>
      </div>
    </>
  );
};
