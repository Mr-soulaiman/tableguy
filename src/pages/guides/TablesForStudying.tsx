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
  GraduationCap,
  BookOpen,
  CheckSquare,
  Sparkles,
  HelpCircle,
  Brain,
  History,
  Calculator,
  Languages,
} from 'lucide-react';

export const TablesForStudying: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How Tables Can Help You Study | TABLEGUY"
        description="Learn practical ways to use study tables for revision, definitions, vocabulary, formulas, and history. Avoid dense paragraphs and retain information faster."
        canonicalPath="/guides/tables-for-studying"
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
            How Tables Can Help You Study
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="pink" size="md">
              TABLES IN EVERYDAY LIFE
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How Tables Can Help You Study
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Staring at 12 pages of unbroken handwritten or typed lecture notes the night before an exam is overwhelming. Turning those notes into concise, side-by-side study tables forces your brain to organize concepts and makes revision 10 times easier.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The Student Note Dilemma */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <GraduationCap className="w-6 h-6 stroke-[2.5]" />
              The Note-Review Trap
            </h2>

            <p>
              Picture this: You have an exam in 48 hours. You open your notebook or Google Docs file, and you see page after page of notes: definitions, dates, formulas, exceptions, and professor tangents all mingled together.
            </p>

            <p>
              You highlight some lines with yellow marker, but when you quiz yourself, you realize you are just passively re-reading the words without truly understanding how the ideas connect.
            </p>

            <p>
              When you organize notes into a table, something powerful happens: you stop passively scanning and start actively sorting. You have to decide what matters, what category it belongs to, and how it compares to the concept next to it.
            </p>
          </section>

          {/* Section 2: 5 Practical Types of Study Tables */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              5 Practical Study Tables You Can Use Today
            </h2>

            {/* Table Type 1: Comparison Table */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 stroke-[2.5] text-purple-700" />
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black">
                  1. The Concept Comparison Table
                </h3>
              </div>
              <p className="text-sm text-gray-700">
                Ideal for exams that ask you to <em>"compare and contrast"</em> two similar concepts (like mitosis vs meiosis, or capitalism vs socialism).
              </p>

              <div className="overflow-x-auto border-2 border-black">
                <table className="w-full text-xs sm:text-sm text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black">
                      <th className="p-2 border-r-2 border-black font-black">Concept</th>
                      <th className="p-2 border-r-2 border-black font-black">Core Definition</th>
                      <th className="p-2 border-r-2 border-black font-black">Real Example</th>
                      <th className="p-2 font-black">Key Difference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black font-medium">
                    <tr>
                      <td className="p-2 border-r-2 border-black font-bold">Speed</td>
                      <td className="p-2 border-r-2 border-black">Rate of distance traveled (scalar)</td>
                      <td className="p-2 border-r-2 border-black">60 mph</td>
                      <td className="p-2 text-gray-700">Has magnitude only (no direction)</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r-2 border-black font-bold">Velocity</td>
                      <td className="p-2 border-r-2 border-black">Speed with a specified direction (vector)</td>
                      <td className="p-2 border-r-2 border-black">60 mph North</td>
                      <td className="p-2 text-gray-700">Changes if the direction turns</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table Type 2: Vocabulary Table */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Languages className="w-5 h-5 stroke-[2.5] text-blue-700" />
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black">
                  2. The Vocabulary &amp; Language Table
                </h3>
              </div>
              <p className="text-sm text-gray-700">
                Instead of loose index cards that get lost, a table lets you review words with their part of speech and an example sentence.
              </p>

              <div className="overflow-x-auto border-2 border-black">
                <table className="w-full text-xs sm:text-sm text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black">
                      <th className="p-2 border-r-2 border-black font-black">Word (Spanish)</th>
                      <th className="p-2 border-r-2 border-black font-black">English Meaning</th>
                      <th className="p-2 font-black">Example Sentence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black font-medium">
                    <tr>
                      <td className="p-2 border-r-2 border-black font-bold">Desarrollar</td>
                      <td className="p-2 border-r-2 border-black">To develop / expand</td>
                      <td className="p-2 italic text-gray-700">Vamos a desarrollar una nueva app.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r-2 border-black font-bold">Imprescindible</td>
                      <td className="p-2 border-r-2 border-black">Essential / indispensable</td>
                      <td className="p-2 italic text-gray-700">El agua es imprescindible para la vida.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table Type 3: Revision Tracker Table */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-5 h-5 stroke-[2.5] text-green-700" />
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black">
                  3. The Revision Traffic-Light Tracker
                </h3>
              </div>
              <p className="text-sm text-gray-700">
                Track what you actually know versus where you are guessing. This prevents wasting hours reviewing topics you already mastered.
              </p>

              <div className="overflow-x-auto border-2 border-black">
                <table className="w-full text-xs sm:text-sm text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black">
                      <th className="p-2 border-r-2 border-black font-black">Exam Chapter / Topic</th>
                      <th className="p-2 border-r-2 border-black font-black">Confidence Level</th>
                      <th className="p-2 font-black">Immediate Next Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black font-medium">
                    <tr>
                      <td className="p-2 border-r-2 border-black font-bold">Cell Respiration</td>
                      <td className="p-2 border-r-2 border-black font-bold text-green-700">Solid (90%)</td>
                      <td className="p-2 text-gray-700">Quick 5-min review Friday</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r-2 border-black font-bold">Krebs Cycle Enzymes</td>
                      <td className="p-2 border-r-2 border-black font-bold text-red-600">Weak (40%)</td>
                      <td className="p-2 text-gray-700">Re-watch lecture video &amp; draw diagram</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table Type 4: Formula Sheet Table */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 stroke-[2.5] text-amber-700" />
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black">
                  4. The Formula Reference Table
                </h3>
              </div>
              <p className="text-sm text-gray-700">
                Don't just memorize symbols. Include when to apply the formula so you recognize problem patterns on test day.
              </p>

              <div className="overflow-x-auto border-2 border-black">
                <table className="w-full text-xs sm:text-sm text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black">
                      <th className="p-2 border-r-2 border-black font-black">Formula</th>
                      <th className="p-2 border-r-2 border-black font-black">Meaning</th>
                      <th className="p-2 border-r-2 border-black font-black">When to Use</th>
                      <th className="p-2 font-black">Common Trap</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black font-medium">
                    <tr>
                      <td className="p-2 border-r-2 border-black font-mono font-bold">F = m · a</td>
                      <td className="p-2 border-r-2 border-black">Force = mass × accel</td>
                      <td className="p-2 border-r-2 border-black">Net force problems</td>
                      <td className="p-2 text-red-700">Forgetting mass must be in kg (not grams)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table Type 5: History & Science Event Table */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 stroke-[2.5] text-stone-800" />
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black">
                  5. The History / Science Timeline Table
                </h3>
              </div>
              <p className="text-sm text-gray-700">
                Structure historical events by Cause and Result rather than just an isolated date.
              </p>

              <div className="overflow-x-auto border-2 border-black">
                <table className="w-full text-xs sm:text-sm text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black">
                      <th className="p-2 border-r-2 border-black font-black">Date</th>
                      <th className="p-2 border-r-2 border-black font-black">Key Event</th>
                      <th className="p-2 border-r-2 border-black font-black">Primary Cause</th>
                      <th className="p-2 font-black">Lasting Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black font-medium">
                    <tr>
                      <td className="p-2 border-r-2 border-black font-mono font-bold">1789</td>
                      <td className="p-2 border-r-2 border-black font-bold">French Revolution</td>
                      <td className="p-2 border-r-2 border-black">Economic crisis &amp; estate inequality</td>
                      <td className="p-2 text-gray-700">Abolition of feudal privileges across Europe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 3: Why Side-by-Side Works */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Why Side-by-Side Comparison Aids Memory
            </h2>

            <p className="text-gray-800">
              When ideas sit side by side in a grid, your visual memory can lock onto position. You remember that <em>"the second row was vector because of direction"</em> or <em>"the right column listed the unit trap in kilograms."</em>
            </p>

            <p className="text-gray-800">
              More importantly, building the table forces <strong>active retrieval</strong>. You can cover up columns with a sheet of paper or your hand and quiz yourself: <em>"Looking at this formula, what was the 'When to Use' rule?"</em>
            </p>
          </section>

          {/* Section 4: What NOT to Do */}
          <section className="p-6 bg-red-50 border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 stroke-[2.5] text-red-600" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                Study Table Mistakes to Avoid
              </h2>
            </div>

            <ul className="space-y-2 text-sm text-gray-800 list-disc pl-5">
              <li><strong>Do not copy entire textbook paragraphs:</strong> If a cell has 6 lines of text, you are just copying a book, not organizing notes. Summarize down to 5 to 10 words.</li>
              <li><strong>Do not make enormous 20-column spreadsheets:</strong> A study table with more than 4 or 5 columns becomes impossible to review quickly on paper or on a phone.</li>
              <li><strong>Do not color-code everything:</strong> If every single word has a different pastel background, your eyes get dizzy. Use subtle bolding instead.</li>
              <li><strong>Do not turn every note into a table:</strong> Narrative arguments, poetry analysis, and long essays are better studied as outlines. Reserve tables for comparable facts and rules.</li>
              <li><strong>Don't replace understanding with memorizing:</strong> A table organizes information, but you still have to practice solving problems and explaining concepts out loud.</li>
            </ul>
          </section>

          {/* Section 5: The 5-Step Method */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <BookOpen className="w-6 h-6 stroke-[2.5] text-black" />
              The 5-Step Study Table Method
            </h2>

            <ol className="text-sm sm:text-base text-gray-900 space-y-2.5 font-bold list-decimal pl-5">
              <li><strong>Choose one focused topic:</strong> Don't try to fit the entire biology course in one grid. Pick "Respiration" or "Cell Division".</li>
              <li><strong>Identify 3 to 5 useful categories:</strong> E.g. Name, Definition, Example, Key Difference.</li>
              <li><strong>Fill the table with short, punchy facts:</strong> Rely on keywords and short bullet fragments rather than complete sentences.</li>
              <li><strong>Test yourself actively:</strong> Cover a column with your palm and see if you can recite the missing cells.</li>
              <li><strong>Update it as you learn:</strong> Add new traps or test mistakes to the rightmost column as you do practice exams.</li>
            </ol>
          </section>

          {/* Section 6: Using TABLEGUY */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLEGUY
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Build Clean Study Sheets in Minutes
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Need to create a quick comparison table or formula sheet for your revision binder? Use TABLEGUY to type, sort, align, and format your study data visually, then print it directly or export it to Markdown, HTML, or PDF.
              </p>
            </div>

            <BrutalButton
              id="guide-study-tables-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 7: FAQ */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Are digital study tables better than handwritten ones?
                </h3>
                <p className="text-sm text-gray-700">
                  Both have benefits. Hand-drawing a table helps visual memory, while digital tables in tools like TABLEGUY or Notion allow you to edit, re-sort rows, add extra columns later, and print clean copies.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How many rows should a study table have?
                </h3>
                <p className="text-sm text-gray-700">
                  Aim for 5 to 12 rows per table. If a table reaches 30 rows, it feels like an endless directory again. Split wide topics into smaller topic-specific sub-tables.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I use tables for humanities and history subjects?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes! Tables are exceptional for comparing historical treaties, contrasting philosophical theories, or tracking literary themes and quotes across different novels.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I use a study table for active self-testing?
                </h3>
                <p className="text-sm text-gray-700">
                  Print the table or display it on a tablet, cover the definition or answer columns with a piece of paper, and write your answers on scratch paper before checking. This is far more effective than re-reading notes.
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
