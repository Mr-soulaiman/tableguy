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
  ArrowRight,
  Printer,
  FileText,
  Sparkles,
  HelpCircle,
  ListTodo,
} from 'lucide-react';

export const PrintableToDoListHowToMakeOneForFree: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="Printable To-Do List: How to Make One for Free | TABLABLE"
        description="Learn how to make a simple printable to-do list for free, organize your tasks clearly, and turn it into a clean PDF you can print or keep on your device."
        canonicalPath="/guides/printable-to-do-list-how-to-make-one-for-free"
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
            Printable To-Do List: How to Make One for Free
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
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            Printable To-Do List: How to Make One for Free
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            You have a list of things to do, but you don't want another tab open on your phone. You want something you can print, put on your desk, and check off with a real pen. Here is how to create a clean printable to-do list without paying for fancy planner templates or downloading bloated software.
          </p>
        </header>

        {/* Summary Takeaway Box */}
        <BrutalCard shadow="md" className="p-5 sm:p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black">
          <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wider text-black mb-3">
            <Printer className="w-4 h-4 stroke-[3]" />
            <span>Key Takeaways</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-bold text-gray-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>A physical page eliminates digital notifications and stays in view.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Turn vague concepts into clear actions before printing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Avoid decorative clutter: wide margins and clear checkboxes matter most.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Only add times to tasks that have genuine appointments or deadlines.</span>
            </li>
          </ul>
        </BrutalCard>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              When a Printable List Is Most Useful
            </h2>
            <p>
              Digital task managers are convenient for storing reference notes, but when it is time to actually work, phones and browsers fight against your attention. Every time you unlock your screen to check a task, you risk getting pulled into text messages, social feeds, or unread emails.
            </p>
            <p>
              A printed paper checklist sits quietly on your desk. It does not ping, notify, or demand a battery recharge. Printable lists are especially effective for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-sm font-bold text-gray-800">
              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FFDE00] border border-black shrink-0" />
                <span>Studying &amp; exam revision blocks</span>
              </div>
              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FFDE00] border border-black shrink-0" />
                <span>Deep cleaning and house chores</span>
              </div>
              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FFDE00] border border-black shrink-0" />
                <span>Grocery runs &amp; hardware store shopping</span>
              </div>
              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FFDE00] border border-black shrink-0" />
                <span>Packing for weekend trips and flights</span>
              </div>
              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FFDE00] border border-black shrink-0" />
                <span>Moving house and packing boxes</span>
              </div>
              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FFDE00] border border-black shrink-0" />
                <span>Daily focused work routines</span>
              </div>
            </div>
            <p>
              In all of these situations, you want your hands free and your eyes on the physical environment, not staring down at glass.
            </p>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              How to Make a Printable To-Do List
            </h2>
            <p>
              Before sending anything to your printer, follow these five steps to ensure your sheet is realistic and actionable:
            </p>

            <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">1</span>
                <div>
                  <p className="text-sm font-bold text-black">Step 1: Write down every task</p>
                  <p className="text-sm text-gray-700">Dump everything from your head onto a quick scratchpad so nothing gets forgotten.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">2</span>
                <div>
                  <p className="text-sm font-bold text-black">Step 2: Remove tasks that don't actually need to happen</p>
                  <p className="text-sm text-gray-700">Be ruthless. If an item does not have a real consequence if delayed until next week, cross it off before you print.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">3</span>
                <div>
                  <p className="text-sm font-bold text-black">Step 3: Rewrite vague tasks as clear actions</p>
                  <p className="text-sm text-gray-700">A vague entry creates hesitation when you look at the printed page.</p>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 bg-red-50 border border-red-300 text-red-800">
                      <strong>BAD:</strong> "Project"
                    </div>
                    <div className="p-2 bg-green-50 border border-green-300 text-green-900 font-bold">
                      <strong>BETTER:</strong> "Write the introduction for the project"
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">4</span>
                <div>
                  <p className="text-sm font-bold text-black">Step 4: Put the most important tasks first</p>
                  <p className="text-sm text-gray-700">Position your two or three essential anchors at the top so your eyes hit them immediately when you sit down at your workspace.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">5</span>
                <div>
                  <p className="text-sm font-bold text-black">Step 5: Add times only when useful</p>
                  <p className="text-sm text-gray-700">Not every task needs an hour attached to it. Adding artificial times makes your sheet brittle. Only assign times to real commitments:</p>
                  <div className="mt-2 p-3 bg-[#FAF8F5] border border-black/20 font-mono text-xs text-gray-800 space-y-1">
                    <p>□ 09:00 — Submit assignment (Hard deadline)</p>
                    <p>□ 11:30 — Call dentist (Appointment)</p>
                    <p>□ Buy groceries (Flexible time)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              What Should a Good Printable To-Do List Contain?
            </h2>
            <p>
              Many downloadable templates online look visually impressive on Pinterest but fail when you actually try to write on them. A functional printable checklist needs to prioritize readability and pen space over graphics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <h3 className="font-black text-sm uppercase text-black mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5] text-green-700" />
                  <span>Essential Elements</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-800">
                  <li>• <strong>Prominent checkbox:</strong> Big enough to mark firmly with a ballpoint pen.</li>
                  <li>• <strong>Short, clear task text:</strong> Large enough to read from arm's length.</li>
                  <li>• <strong>Optional time badge:</strong> Keeps fixed commitments clear without micro-scheduling.</li>
                  <li>• <strong>Date label:</strong> Grounds the sheet in today's context.</li>
                  <li>• <strong>Blank margin or writing space:</strong> Lets you jot quick phone numbers or sudden notes.</li>
                </ul>
              </div>

              <div className="p-5 bg-[#FFF5F5] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <h3 className="font-black text-sm uppercase text-red-700 mb-2.5 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 stroke-[2.5] text-red-600" />
                  <span>What to Avoid</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-800">
                  <li>• <strong>Decorative illustrations:</strong> Wastes ink and crowds out handwriting space.</li>
                  <li>• <strong>Tiny font sizes:</strong> Hard to read without picking up the paper.</li>
                  <li>• <strong>Thirty unnecessary categories:</strong> Causes decision fatigue before you start.</li>
                  <li>• <strong>Heavy background fills:</strong> Bleeds through ordinary printer paper.</li>
                  <li>• <strong>Over-complicated time wheels:</strong> Rigid scheduling that breaks within an hour.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Example of a Simple Printable To-Do List
            </h2>
            <p>
              Here is what a clean, realistic printable list looks like in practice. Notice how balanced and straightforward the day is:
            </p>

            <div className="p-5 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-900 shadow-[3px_3px_0px_0px_#000] space-y-3 max-w-lg">
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <span className="font-black font-sans uppercase text-sm tracking-wider">MONDAY CHECKLIST</span>
                <span className="text-xs text-gray-600 font-sans">October 14</span>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 border-2 border-black inline-block shrink-0" />
                  <span className="font-bold text-black">08:30 — Review math exercises</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 border-2 border-black inline-block shrink-0" />
                  <span className="font-bold text-black">10:00 — Write project introduction</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 border-2 border-black inline-block shrink-0" />
                  <span>Buy groceries</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 border-2 border-black inline-block shrink-0" />
                  <span>Reply to emails</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 border-2 border-black inline-block shrink-0" />
                  <span>Clean desk</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 border-2 border-black inline-block shrink-0" />
                  <span>18:00 — Workout</span>
                </div>
              </div>
            </div>

            <p>
              Why is this layout so practical?
            </p>
            <p>
              Because it can be understood in three seconds. There is no guesswork about where the day starts (the 08:30 math review), what the core output is (the project introduction), and what flexible chores can be slotted into spare moments.
            </p>
          </section>

          {/* Section 5: Simple not complicated */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Printable Doesn't Have to Mean Complicated
            </h2>
            <p>
              Many people spend an entire Sunday afternoon browsing designer stationery websites, customizing thirty color swatches, and drawing elaborate weekly habit grids that they abandon by Tuesday.
            </p>
            <p>
              A to-do list is not art; it is a tool. The only metric that matters is whether it helped you remember and complete your work today. A plain black-and-white checklist printed on everyday paper will always beat a complex planner system that requires twenty minutes of setup.
            </p>
          </section>

          {/* Section 6: Make one in seconds */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Make a Printable To-Do List in Seconds
            </h2>
            <p>
              If you want to turn a quick list of tasks into a clean, printable PDF without opening design programs or messing with table formatting in Word, you can use the free{' '}
              <Link href="/to-do-list" className="font-black text-black underline hover:bg-[#FFDE00]">
                Tablable To-Do List Maker
              </Link>
              .
            </p>
            <p>
              The workflow takes under fifteen seconds:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-base text-gray-800">
              <li>Type or paste your tasks separated by commas (optionally including times).</li>
              <li>Add an optional title or date header.</li>
              <li>Preview the live checklist format.</li>
              <li>Click <strong>Download PDF</strong> to save a clean, high-contrast A4 checklist.</li>
            </ol>

            <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3 my-2">
              <span className="text-xs font-mono font-bold uppercase text-gray-500">Example Input:</span>
              <div className="p-3 bg-[#FAF8F5] border border-black font-mono text-xs sm:text-sm text-gray-800">
                Study math, buy groceries, call mom, finish project
              </div>
              <span className="text-xs font-mono font-bold uppercase text-gray-500 mt-1">Generated Output Checklist:</span>
              <div className="p-4 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-900 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                  <span>Study math</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                  <span>Buy groceries</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                  <span>Call mom</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                  <span>Finish project</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-700">
              There is no sign-up required, no account creation, and no watermark on the PDF. You can print it directly from your browser dialog or save the file to your device.
            </p>
          </section>

          {/* Tool CTA Box */}
          <BrutalCard shadow="lg" className="p-6 sm:p-8 bg-[#FFDE00] border-2 sm:border-[3px] border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                Make your printable checklist
              </h3>
              <p className="text-sm sm:text-base font-bold text-black">
                Type your tasks, preview your layout, and download a free printable PDF in seconds.
              </p>
            </div>
            <BrutalButton
              id="printable-guide-open-todo-btn"
              variant="secondary"
              size="md"
              onClick={() => navigate('/to-do-list')}
              className="shrink-0 bg-white"
            >
              <span>MAKE A TO-DO LIST →</span>
            </BrutalButton>
          </BrutalCard>

          {/* Navigation & Related Guides */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-2 border-black">
            <BrutalButton
              id="printable-guide-back-to-guides-btn"
              variant="secondary"
              size="sm"
              onClick={() => navigate('/guides')}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
              <span>Back to Guides</span>
            </BrutalButton>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/guides/how-to-make-a-to-do-list-that-actually-works"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Make a To-Do List That Actually Works
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
