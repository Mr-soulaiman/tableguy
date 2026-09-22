import React from 'react';
import { useRouter, Link } from '../../router';
import { BrutalCard } from '../../components/BrutalCard';
import { BrutalButton } from '../../components/BrutalButton';
import { BrutalBadge } from '../../components/BrutalBadge';
import { SEO } from '../../components/SEO';
import {
  ArrowLeft,
  ChevronRight,
  Clock,
  CheckSquare,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Printer,
  Table as TableIcon,
  Sparkles,
} from 'lucide-react';

export const HowToMakePrintableChecklist: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Make a Printable Checklist That Works | TABLABLE"
        description="Learn how to turn scattered tasks into a clean, printable daily checklist. Practical tips for task grouping, time estimates, and paper checklists."
        canonicalPath="/guides/how-to-make-a-printable-checklist"
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-14 flex flex-col gap-8 sm:gap-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-600 flex-wrap">
          <Link href="/" className="hover:text-black hover:underline">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5] text-gray-400" />
          <Link href="/guides" className="hover:text-black hover:underline">
            Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5] text-gray-400" />
          <span className="text-black font-extrabold truncate max-w-[240px] sm:max-w-md">
            How to Make a Printable Checklist
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="yellow" size="md">
              TO-DO LISTS
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              4 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How to Make a Printable Checklist That Works
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Digital task apps notify you constantly, tempt you to open social media, and get cluttered with hundreds of stale tasks. A physical printable checklist sits on your desk, stays visible, and gives you one clear mission: get things done.
          </p>
        </header>

        {/* Summary Takeaway Box */}
        <BrutalCard shadow="md" className="p-5 sm:p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black">
          <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wider text-black mb-3">
            <CheckSquare className="w-4 h-4 stroke-[3]" />
            <span>Key Takeaways</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-bold text-gray-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Limit daily must-do tasks to 3–5 items to avoid decision fatigue.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Attach target times (e.g. 18:00 or 2 PM) to structure your day naturally.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Keep notes separate: use checklists for actions and tables for data.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Cross items off with a physical pen to build tangible momentum.</span>
            </li>
          </ul>
        </BrutalCard>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              1. The Problem With Endless Digital Lists
            </h2>
            <p>
              When a to-do list lives inside a smartphone or browser tab, it competes with dozens of notifications, chat pings, and tempting distractions. More critically, digital lists make it too easy to add 40 tasks you will never do.
            </p>
            <p>
              A printed paper checklist has physical boundaries. You have one page in front of you. When you complete an item, you cross it off with an actual pen — triggering a tactile sense of closure that no phone vibration can replace.
            </p>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              2. The Rule of 3–5 Core Daily Tasks
            </h2>
            <p>
              Productivity researchers and high-output teams consistently agree on one fundamental principle: you cannot accomplish 20 major things in a single workday.
            </p>
            <div className="p-4 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-800 shadow-[3px_3px_0px_0px_#000]">
              <p className="font-bold text-black mb-1">BAD LIST (Overwhelmed):</p>
              <p>Answer all 84 emails, redesign whole homepage, fix 12 bugs, study 4 chapters, run 10k, organize basement, write blog post...</p>
              <p className="font-bold text-black mt-3 mb-1">GOOD LIST (Actionable):</p>
              <p>1. Finish project proposal (9:00 AM)</p>
              <p>2. Review client feedback (11:30 AM)</p>
              <p>3. Buy groceries at 18:00</p>
              <p>4. Study math chapter 4</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              3. When to Use a Checklist vs. a Table
            </h2>
            <p>
              Not all information belongs in a checklist. If each task has multiple distinct attributes — such as an assigned owner, budget estimate, status column, and department — a checklist becomes cluttered.
            </p>
            <p>
              For multi-column data, switch to our{' '}
              <Link href="/table-generator" className="font-bold text-black underline hover:text-[#FFDE00]">
                Table Generator
              </Link>{' '}
              to keep columns aligned. For personal daily priorities and sequential errands, use the{' '}
              <Link href="/to-do-list" className="font-bold text-black underline hover:text-[#FFDE00]">
                To-Do List Maker
              </Link>.
            </p>
          </section>

          {/* Section 4 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              4. Generate &amp; Print Your Checklist in Seconds
            </h2>
            <p>
              TABLABLE makes creating a daily checklist effortless:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-base sm:text-lg">
              <li>Open the <Link href="/to-do-list" className="font-bold text-black underline">To-Do List Maker</Link>.</li>
              <li>Type your tasks separated by commas (e.g. <em>Finish report at 10 AM, Team sync at 14:00, Buy groceries, Gym</em>).</li>
              <li>TABLABLE automatically detects times, formats clean checkboxes, and provides an instant preview.</li>
              <li>Click <strong>Download PDF</strong> to get a high-resolution, printer-ready A4 checklist.</li>
            </ol>
          </section>

          {/* FAQ Section */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <HelpCircle className="w-6 h-6 stroke-[2.5]" />
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What should I do with tasks I don't finish today?
                </h3>
                <p className="text-sm text-gray-700">
                  At the end of your day, look at any unchecked boxes. If the task is still essential, roll it over to tomorrow's fresh printable checklist. If it hasn't mattered all day, consider eliminating it altogether.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I include times for some tasks and leave others open?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes! TABLABLE's smart parser automatically identifies times (e.g. <em>at 18:00</em>, <em>6 PM</em>, <em>14:30</em>) and attaches clean time badges, while keeping time-free tasks simple and flexible.
                </p>
              </div>
            </div>
          </section>

          {/* Tool CTA Box */}
          <BrutalCard shadow="lg" className="p-6 sm:p-8 bg-[#FFDE00] border-2 sm:border-[3px] border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                Ready to create your checklist?
              </h3>
              <p className="text-sm sm:text-base font-bold text-black">
                Open TABLABLE's free To-Do List Maker and download your printable PDF in 10 seconds.
              </p>
            </div>
            <BrutalButton
              id="guide-open-todo-btn"
              variant="secondary"
              size="md"
              onClick={() => navigate('/to-do-list')}
              className="shrink-0 bg-white"
            >
              <span>MAKE A TO-DO LIST →</span>
            </BrutalButton>
          </BrutalCard>

          {/* Navigation & Next Guide */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-2 border-black">
            <BrutalButton
              id="guide-back-to-guides-btn"
              variant="secondary"
              size="sm"
              onClick={() => navigate('/guides')}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
              <span>Back to Guides</span>
            </BrutalButton>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/guides/tables-vs-lists"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: Tables vs Lists: When Should You Use Each?
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
