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
  List,
  Columns,
  CheckSquare,
  HelpCircle,
  Sparkles,
  Layers,
  Calendar,
  ShoppingCart,
  ListTodo,
} from 'lucide-react';

export const TablesVsLists: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="Tables vs Lists: When Should You Use Each? | TABLABLE"
        description="Learn when a table is better than a list and when a simple list is actually the better choice. Real examples, comparison rules, and practical advice."
        canonicalPath="/guides/tables-vs-lists"
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
            Tables vs Lists: When Should You Use Each?
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
            Tables vs Lists: When Should You Use Each?
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            We have all done it: we start writing notes as a neat bulleted list, and 15 lines later it has turned into a tangled mess of repeated words, prices, and notes. Here is how to know instantly whether your information belongs in a table or a list.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: Relatable Starting Example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <List className="w-6 h-6 stroke-[2.5]" />
              The Creeping Bulleted List Problem
            </h2>

            <p>
              Picture this: You are planning a small weekend get-together with friends. You open your notes app and type out a quick list:
            </p>

            <div className="p-4 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-800 shadow-[3px_3px_0px_0px_#000]">
              <p>• Pizza (large) – $24 – Ordered by Mark – Arriving 6:30 PM</p>
              <p>• Drinks – $15 – Bought by Sarah – Already in the fridge</p>
              <p>• Board games – $0 – Brought by Alex – Needs 4 players</p>
              <p>• Dessert (ice cream) – $11 – Bought by Elena – Keep frozen</p>
            </div>

            <p>
              At first glance, it works. But now try answering these two questions quickly: <em>How much total money is being spent?</em> and <em>Who is responsible for what?</em>
            </p>

            <p>
              Your eyes have to jump around, skip words, search for dollar signs, and mentally filter out notes about fridges and board games. You find yourself re-reading every line just to grab one single piece of data.
            </p>

            <p>
              That is the exact moment a list stops working and a table becomes necessary.
            </p>
          </section>

          {/* Section 2: What Lists Are Great At */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                When a List Is Actually the Best Choice
              </h2>
            </div>

            <p className="text-gray-800">
              Lists are fast, natural, and low-friction. They are unmatched when your information is <strong>one-dimensional</strong> or follows a single sequence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1">Step-by-step instructions</strong>
                <span className="text-gray-700">Cooking recipes, assembly steps, or onboarding guides where order matters (1, 2, 3).</span>
              </div>
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1">Simple grocery shopping</strong>
                <span className="text-gray-700">Milk, eggs, bread, coffee. No comparing, no shared attributes, just items to cross off.</span>
              </div>
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1">Brain dumps &amp; quick ideas</strong>
                <span className="text-gray-700">Jotting down 5 book recommendations or quick thoughts without worrying about columns.</span>
              </div>
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1">Single-attribute checklists</strong>
                <span className="text-gray-700">A packing list for a trip or daily chores where each entry only has a name and a checkbox.</span>
              </div>
            </div>
          </section>

          {/* Section 3: What Tables Are Great At */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Columns className="w-6 h-6 stroke-[2.5]" />
              When a Table Beats a List Every Single Time
            </h2>

            <p className="text-gray-800">
              A table shines when each item you are looking at shares the <strong>same set of categories</strong> and you need to compare those categories side by side.
            </p>

            <p className="text-gray-800">
              Tables are built for:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm font-bold">
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                💰 Prices &amp; Budgets
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                🗓️ Schedules &amp; Shifts
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                📱 Product Specs
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                📊 Student Grades
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                📋 Project Tasks
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                ✈️ Travel Options
              </div>
            </div>

            <p className="text-sm text-gray-700">
              In a table, your eyes can scan <em>down</em> a single column to compare just one attribute (like price or deadline) without having to read a word of anything else.
            </p>
          </section>

          {/* Section 4: Before and After Examples */}
          <section className="flex flex-col gap-6 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              4 Real Before &amp; After Examples
            </h2>

            {/* Example 1: Shopping & Expenses */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase text-gray-500">Example 1: Party Supplies &amp; Cost</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-red-50 border border-black">
                  <strong className="text-red-700 block mb-2 font-black uppercase">Before: Messy List</strong>
                  <ul className="space-y-1 text-gray-800">
                    <li>• Pizza: $24, ordered by Mark</li>
                    <li>• Drinks: $15, bought by Sarah</li>
                    <li>• Ice Cream: $11, bought by Elena</li>
                    <li>• Board Games: $0, brought by Alex</li>
                  </ul>
                  <p className="text-xs text-red-600 mt-2 font-semibold">Tiring to sum prices or compare contributors.</p>
                </div>

                <div className="p-3.5 bg-green-50 border border-black">
                  <strong className="text-green-800 block mb-2 font-black uppercase">After: Clean Table</strong>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b-2 border-black font-black bg-white">
                          <th className="p-1.5 border-r border-black">Item</th>
                          <th className="p-1.5 border-r border-black">Person</th>
                          <th className="p-1.5 text-right">Cost</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black">
                        <tr><td className="p-1.5 border-r border-black font-bold">Pizza</td><td className="p-1.5 border-r border-black">Mark</td><td className="p-1.5 text-right font-mono">$24</td></tr>
                        <tr><td className="p-1.5 border-r border-black font-bold">Drinks</td><td className="p-1.5 border-r border-black">Sarah</td><td className="p-1.5 text-right font-mono">$15</td></tr>
                        <tr><td className="p-1.5 border-r border-black font-bold">Ice Cream</td><td className="p-1.5 border-r border-black">Elena</td><td className="p-1.5 text-right font-mono">$11</td></tr>
                        <tr><td className="p-1.5 border-r border-black font-bold">Games</td><td className="p-1.5 border-r border-black">Alex</td><td className="p-1.5 text-right font-mono">$0</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-green-700 mt-2 font-semibold">Numbers align vertically; people are instantly scannable.</p>
                </div>
              </div>
            </div>

            {/* Example 2: Weekly Schedule */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase text-gray-500">Example 2: Weekly Gym &amp; Study Schedule</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-red-50 border border-black">
                  <strong className="text-red-700 block mb-2 font-black uppercase">Before: Paragraph Bullets</strong>
                  <p className="text-gray-800 text-xs">
                    On Monday I do Upper Body workout at 7 AM and 2 hours of Math at 6 PM. Wednesday is Cardio at 8 AM and History study at 5 PM. Friday is Leg Day at 7 AM with no evening study.
                  </p>
                </div>

                <div className="p-3.5 bg-green-50 border border-black">
                  <strong className="text-green-800 block mb-2 font-black uppercase">After: Weekly Matrix</strong>
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b-2 border-black font-black bg-white">
                        <th className="p-1.5 border-r border-black">Day</th>
                        <th className="p-1.5 border-r border-black">Morning (Fitness)</th>
                        <th className="p-1.5">Evening (Study)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black">
                      <tr><td className="p-1.5 border-r border-black font-bold">Mon</td><td className="p-1.5 border-r border-black">Upper Body (7 AM)</td><td className="p-1.5">Math (6 PM)</td></tr>
                      <tr><td className="p-1.5 border-r border-black font-bold">Wed</td><td className="p-1.5 border-r border-black">Cardio (8 AM)</td><td className="p-1.5">History (5 PM)</td></tr>
                      <tr><td className="p-1.5 border-r border-black font-bold">Fri</td><td className="p-1.5 border-r border-black">Legs (7 AM)</td><td className="p-1.5 text-gray-400">Rest</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Example 3: Product Comparison */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase text-gray-500">Example 3: Choosing Software Plans</span>
              <p className="text-sm text-gray-700">
                Comparing three software subscription plans in a bulleted list forces the reader to read 15 separate lines to compare storage space. A table lines up the plans in 3 columns, making the differences obvious in two seconds. (See our detailed guide on{' '}
                <Link href="/guides/compare-products-with-table" className="underline font-bold text-black hover:text-gray-700">
                  how to compare products with a table
                </Link>
                ).
              </p>
            </div>

            {/* Example 4: Project Tasks */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase text-gray-500">Example 4: Work Task List</span>
              <p className="text-sm text-gray-700">
                A personal to-do list for today only needs a simple checklist. But as soon as a project has <em>assignees</em>, <em>due dates</em>, and <em>status tags</em>, a table with columns for <code>Task</code>, <code>Owner</code>, <code>Due</code>, and <code>Status</code> prevents dropped balls immediately.
              </p>
            </div>
          </section>

          {/* Section 5: The Golden Decision Rule */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              The Simple Decision Rule
            </h2>

            <blockquote className="p-4 bg-[#FFDE00] border-2 border-black font-bold text-black text-base sm:text-lg leading-snug">
              “If you are comparing things across the same categories, use a table. If you are simply listing items or giving sequential steps, use a list.”
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-blue-50 border border-black">
                <strong className="text-blue-900 block font-black uppercase mb-1">Pick a List when:</strong>
                <ul className="space-y-1 text-gray-800">
                  <li>• Items only have 1 or 2 attributes (e.g. name + checkbox)</li>
                  <li>• Things happen in a fixed chronological order</li>
                  <li>• You are writing notes quickly on your phone</li>
                  <li>• You don't need to sort or compare side by side</li>
                </ul>
              </div>

              <div className="p-3.5 bg-amber-50 border border-black">
                <strong className="text-amber-900 block font-black uppercase mb-1">Pick a Table when:</strong>
                <ul className="space-y-1 text-gray-800">
                  <li>• Each item shares 3 or more repeatable traits (price, size, owner)</li>
                  <li>• Readers need to compare numbers or trade-offs</li>
                  <li>• You want to spot missing or incomplete information</li>
                  <li>• You need to export to CSV, Markdown, or a spreadsheet</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Not Everything Needs to Be a Table */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Remember: Don't Force Everything Into a Table
            </h2>

            <p className="text-gray-800">
              Tables are powerful, but "table overkill" is real. If you put 3 grocery items into a 5-column table with borders and headers, you have spent more time formatting than shopping.
            </p>

            <p className="text-gray-800">
              Keep it simple: use the simplest format that does the job. If three bullet points explain your idea clearly, let them remain bullet points. Upgrade to a table only when side-by-side clarity pays off.
            </p>
          </section>

          {/* Section 7: Using TABLABLE */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Ready to Turn That List Into a Table?
              </h3>
              <p className="text-sm font-medium text-gray-700">
                If your notes or lists have outgrown simple bullets, paste or type them into TABLABLE. You can set column headers, adjust alignments, color-code important cells, and download clean HTML, Markdown, or CSV in seconds.
              </p>
            </div>

            <BrutalButton
              id="guide-tables-vs-lists-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 8: Quick Checklist */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <CheckSquare className="w-6 h-6 stroke-[2.5] text-black" />
              Your 10-Second Format Checklist
            </h2>

            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Do items share the same 3+ categories? → <strong>Table</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Are people comparing numbers, prices, or dates? → <strong>Table</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Is this a step-by-step chronological procedure? → <strong>Numbered List</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Is each item just a short thought or name? → <strong>Bulleted List</strong></span>
              </li>
            </ul>
          </section>

          {/* Section 9: FAQ */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can a list be converted into a table easily?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. If your list items follow a repeating pattern (like <em>"Item - Price - Notes"</em>), you can separate them by tabs or commas and paste them into a table generator to build columns instantly. Check our step-by-step guide on{' '}
                  <Link href="/guides/turn-messy-list-into-clean-table" className="underline font-bold text-black hover:text-gray-700">
                    turning a messy list into a clean table
                  </Link>.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Are tables harder to read on mobile phones than lists?
                </h3>
                <p className="text-sm text-gray-700">
                  Wide tables with 7+ columns can be awkward on small smartphone screens because of horizontal scrolling. If your audience is mainly mobile, keep tables down to 3 or 4 columns, or stick to a clean list.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  When is a numbered list better than a table?
                </h3>
                <p className="text-sm text-gray-700">
                  Whenever instructions must be executed in order, such as a recipe, software installation guide, or troubleshooting checklist. A table adds unnecessary structure to steps that are purely sequential.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How many columns make a table worth building?
                </h3>
                <p className="text-sm text-gray-700">
                  Usually 3 or more columns. If your data only has two columns (like <em>Word</em> and <em>Definition</em>), a two-column table works nicely, but a simple bolded bullet list often works just as well.
                </p>
              </div>
            </div>
          </section>

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
                href="/guides/how-to-make-readable-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Make a Table Easy to Read
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
