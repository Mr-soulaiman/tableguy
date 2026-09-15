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
  Table as TableIcon,
  CheckCircle2,
  XCircle,
  ArrowRight,
  LayoutGrid,
  CheckSquare,
  HelpCircle,
  Sparkles,
  Plane,
  FolderKanban,
  Check,
  AlertTriangle,
} from 'lucide-react';

export const OrganizeInformationWithTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Organize Information With a Table | TABLEGUY"
        description="Learn a simple, step-by-step process to turn scattered notes, trip details, tasks, and project ideas into clean, scannable tables that anyone can understand."
        canonicalPath="/guides/organize-information-with-table"
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
            How to Organize Information With a Table
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="yellow" size="md">
              TABLE BASICS
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How to Organize Information With a Table
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Information rarely arrives neatly organized. It comes in messy text messages, scattered sticky notes, bookmark folders, and email threads. Here is a simple, repeatable 6-step framework to turn chaotic information into a crystal-clear table.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: Relatable Problem */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <LayoutGrid className="w-6 h-6 stroke-[2.5]" />
              The Information Scatter Trap
            </h2>

            <p>
              Imagine you are planning a 4-day road trip with friends. Information is arriving from everywhere: Mark texts a link to an Airbnb cabin in WhatsApp; Sarah emails flight times; you have prices saved in your Apple Notes; and Elena mentions restaurant reservations in a group chat.
            </p>

            <p>
              When someone asks, <em>"Wait, who is paying for the car rental and what day do we arrive?"</em>, nobody knows without scrolling through 200 unread messages.
            </p>

            <p>
              This is where a table saves the day. A table transforms scattered facts into a single, shared view where anyone can answer any question in two seconds.
            </p>
          </section>

          {/* Section 2: The 6-Step Method */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              The 6-Step Table-Building Process
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block font-bold mb-1">Step 1: Decide what you are trying to organize</strong>
                <span className="text-gray-700">Are you tracking tasks, comparing hotels, logging personal expenses, or summarizing study notes? Knowing the exact goal prevents adding useless data.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block font-bold mb-1">Step 2: Find the pieces of information that repeat</strong>
                <span className="text-gray-700">Look across your raw notes. Does every item have a <em>Price</em>? A <em>Date</em>? A <em>Person responsible</em>? An <em>Address</em>? These recurring traits are the DNA of your table.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block font-bold mb-1">Step 3: Turn those repeated categories into columns</strong>
                <span className="text-gray-700">Write down 3 to 5 short column headers: <code className="font-mono text-xs bg-gray-100 px-1 border">Item</code>, <code className="font-mono text-xs bg-gray-100 px-1 border">Date</code>, <code className="font-mono text-xs bg-gray-100 px-1 border">Cost</code>, <code className="font-mono text-xs bg-gray-100 px-1 border">Owner</code>.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block font-bold mb-1">Step 4: Put each distinct item on its own row</strong>
                <span className="text-gray-700">One row = one entity. Don't mix multiple days or items on the same horizontal line.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block font-bold mb-1">Step 5: Remove information that doesn't help</strong>
                <span className="text-gray-700">Be ruthless. If every single item shares the exact same attribute, delete the column and mention it in a short note above the table.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block font-bold mb-1">Step 6: Make the final table easy to scan</strong>
                <span className="text-gray-700">Align numbers to the right, align words to the left, and use bold styling only for header rows or key takeaways.</span>
              </div>
            </div>
          </section>

          {/* Section 3: Before & After Examples */}
          <section className="flex flex-col gap-6 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              2 Real Before &amp; After Examples
            </h2>

            {/* Example 1: Trip Itinerary & Bookings */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Plane className="w-5 h-5 stroke-[2.5]" />
                <span className="text-xs font-mono font-bold uppercase text-gray-500">Example 1: Trip Logistics &amp; Bookings</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-red-50 border border-black">
                  <strong className="text-red-800 block mb-2 font-black uppercase">Before: Scattered Text Message</strong>
                  <p className="text-gray-800 text-xs leading-relaxed">
                    "Hey guys, so the Airbnb is booked for Oct 12-15 ($340 total, Sarah paid). Car rental is Enterprise from the airport ($120, Mark is paying). Train tickets are $45 each from station."
                  </p>
                  <p className="text-xs text-red-600 mt-2 font-medium">Takes multiple readings to tally expenses or check dates.</p>
                </div>

                <div className="p-3.5 bg-green-50 border border-black">
                  <strong className="text-green-900 block mb-2 font-black uppercase">After: Organized Trip Table</strong>
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b-2 border-black font-black bg-white">
                        <th className="p-1.5 border-r border-black">Booking</th>
                        <th className="p-1.5 border-r border-black">Dates</th>
                        <th className="p-1.5 border-r border-black">Paid By</th>
                        <th className="p-1.5 text-right">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black">
                      <tr><td className="p-1.5 border-r border-black font-bold">Airbnb Cabin</td><td className="p-1.5 border-r border-black">Oct 12–15</td><td className="p-1.5 border-r border-black">Sarah</td><td className="p-1.5 text-right font-mono">$340</td></tr>
                      <tr><td className="p-1.5 border-r border-black font-bold">Car Rental</td><td className="p-1.5 border-r border-black">Oct 12–15</td><td className="p-1.5 border-r border-black">Mark</td><td className="p-1.5 text-right font-mono">$120</td></tr>
                      <tr><td className="p-1.5 border-r border-black font-bold">Train Tickets</td><td className="p-1.5 border-r border-black">Oct 12</td><td className="p-1.5 border-r border-black">Elena</td><td className="p-1.5 text-right font-mono">$45</td></tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-green-700 mt-2 font-medium">Anyone in the group can scan costs and owners in 2 seconds.</p>
                </div>
              </div>
            </div>

            {/* Example 2: Team Project Tasks */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <FolderKanban className="w-5 h-5 stroke-[2.5]" />
                <span className="text-xs font-mono font-bold uppercase text-gray-500">Example 2: Simple Project Deliverables</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-red-50 border border-black">
                  <strong className="text-red-800 block mb-2 font-black uppercase">Before: Run-on Meeting Notes</strong>
                  <p className="text-gray-800 text-xs leading-relaxed">
                    Dave is handling the landing page design draft by Thursday. Sarah is drafting legal privacy copy by Friday morning. Alex needs to finish database migrations by Wednesday noon.
                  </p>
                </div>

                <div className="p-3.5 bg-green-50 border border-black">
                  <strong className="text-green-900 block mb-2 font-black uppercase">After: Team Task Table</strong>
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b-2 border-black font-black bg-white">
                        <th className="p-1.5 border-r border-black">Task</th>
                        <th className="p-1.5 border-r border-black">Owner</th>
                        <th className="p-1.5 border-r border-black">Due</th>
                        <th className="p-1.5 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black">
                      <tr><td className="p-1.5 border-r border-black font-bold">Database Setup</td><td className="p-1.5 border-r border-black">Alex</td><td className="p-1.5 border-r border-black">Wed 12 PM</td><td className="p-1.5 text-center text-green-700 font-bold">Done</td></tr>
                      <tr><td className="p-1.5 border-r border-black font-bold">Landing Page</td><td className="p-1.5 border-r border-black">Dave</td><td className="p-1.5 border-r border-black">Thu 5 PM</td><td className="p-1.5 text-center text-amber-700 font-bold">In Progress</td></tr>
                      <tr><td className="p-1.5 border-r border-black font-bold">Privacy Policy</td><td className="p-1.5 border-r border-black">Sarah</td><td className="p-1.5 border-r border-black">Fri 10 AM</td><td className="p-1.5 text-center text-gray-500">Not Started</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: What Tables Excel At vs When to Avoid */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Where Tables Excel (And When NOT to Use Them)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black uppercase text-sm block mb-1">Great for Tables:</strong>
                <ul className="space-y-1 text-gray-800 list-disc pl-5">
                  <li>Side-by-side product comparisons</li>
                  <li>Monthly budget tracking</li>
                  <li>Project tasks with deadlines and owners</li>
                  <li>Study vocabulary, formulas, and definitions</li>
                  <li>Schedules, shifts, and class timetables</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-red-900 uppercase text-sm block mb-1">Bad for Tables:</strong>
                <ul className="space-y-1 text-gray-800 list-disc pl-5">
                  <li>Long stories or narrative explanations</li>
                  <li>Sequential instructions or cooking recipes</li>
                  <li>Ideas without repeating comparable attributes</li>
                  <li>Single-attribute checklists (use a list instead)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Using TABLEGUY */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLEGUY
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Turn Scattered Notes Into a Clean Table
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Ready to organize your project, trip, or notes? With TABLEGUY, you can paste raw data or build your table visually from scratch. Add rows, adjust column alignments, style status tags, and export directly to clean HTML, Markdown, or CSV.
              </p>
            </div>

            <BrutalButton
              id="guide-organize-info-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 6: FAQ */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I decide what goes in rows versus columns?
                </h3>
                <p className="text-sm text-gray-700">
                  A simple rule: Put each individual item (the person, product, or task) on its own <strong>row</strong>. Put the shared categories (price, date, status) in the <strong>columns</strong> at the top.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I convert an existing document or email into a table?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. Extract the repeating facts (like item names and prices) into rows, separate them with commas or tabs, and paste them into TABLEGUY. See our guide on{' '}
                  <Link href="/guides/turn-messy-list-into-clean-table" className="underline font-bold text-black hover:text-gray-700">
                    turning a messy list into a clean table
                  </Link>.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What is the best way to sort rows in a table?
                </h3>
                <p className="text-sm text-gray-700">
                  Sort rows by whatever matters most to the reader: chronologically for dates, highest-to-lowest for prices, or by urgency for task deadlines.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How many categories should I include in a table?
                </h3>
                <p className="text-sm text-gray-700">
                  Between 3 and 6 columns is the sweet spot. Anything under 3 could probably be a simple list, and anything over 6 will look cluttered on mobile devices.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation & Back to Guides */}
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
                href="/guides/budget-with-a-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Organize Your Budget With a Table
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
