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
  AlertTriangle,
  Languages,
  Calculator,
  History,
  Check,
  FileText,
} from 'lucide-react';

export const OrganizeStudyNotesWithTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Organize Your Study Notes With a Table | TABLEGUY"
        description="Learn how to turn long study notes, formulas, vocabulary, and history dates into clean revision tables. Practical steps, examples, and study templates."
        canonicalPath="/guides/organize-study-notes-with-table"
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
            How to Organize Your Study Notes With a Table
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
            How to Organize Your Study Notes With a Table
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            You have pages of lecture notes, definitions, formulas, dates, and examples, but reviewing everything before an exam takes forever. Here is how a simple table turns scattered notes into a clear revision sheet you can scan in minutes.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The Student Problem */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <GraduationCap className="w-6 h-6 stroke-[2.5]" />
              The Note-Reviewing Fatigue
            </h2>

            <p>
              It is two days before an exam. You open your binder or note app, and you are staring at 14 pages of dense paragraphs.
            </p>

            <p>
              Somewhere on page 3 is the difference between velocity and acceleration. On page 7 is a formula for kinetic energy with two side notes scribbled in the margin. On page 11 is an example the teacher wrote on the whiteboard.
            </p>

            <p>
              To review one concept, you have to read through sentences, bullet points, and old reminders. Your eyes get tired, you lose focus, and you spend most of your revision time just locating facts rather than understanding them.
            </p>

            <p>
              Tables don't magically make you smarter, but they do make information significantly easier to scan, compare, and review. When related facts sit in structured columns, you can test yourself without getting lost in walls of prose.
            </p>
          </section>

          {/* Section 2: Concrete Core Example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              A Practical Study Table Example
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Look at how clean a physics revision topic becomes when you strip away the conversational padding:
            </p>

            {/* Brutalist Concept Table */}
            <div className="border-2 border-black bg-white overflow-x-auto shadow-[4px_4px_0px_0px_#000]">
              <table className="w-full text-left text-sm border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-3 font-black border-r-2 border-black">Concept</th>
                    <th className="p-3 font-black border-r-2 border-black">Meaning</th>
                    <th className="p-3 font-black border-r-2 border-black">Example</th>
                    <th className="p-3 font-black">What to Remember</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-medium">
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold bg-[#FAF8F5]">Force</td>
                    <td className="p-3 border-r-2 border-black">A push or pull on an object</td>
                    <td className="p-3 border-r-2 border-black">Pushing a heavy box</td>
                    <td className="p-3 font-bold text-blue-900">Direction matters (vector)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold bg-[#FAF8F5]">Velocity</td>
                    <td className="p-3 border-r-2 border-black">Speed in a specific direction</td>
                    <td className="p-3 border-r-2 border-black">Car driving 60 km/h North</td>
                    <td className="p-3 font-bold text-blue-900">Changing direction changes velocity</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold bg-[#FAF8F5]">Acceleration</td>
                    <td className="p-3 border-r-2 border-black">Rate of change of velocity</td>
                    <td className="p-3 border-r-2 border-black">Car speeding up from stoplight</td>
                    <td className="p-3 font-bold text-blue-900">Can be speeding up or slowing down</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-700">
              Notice how easy this is to quiz yourself with: cover the last three columns with a piece of paper, read the word <strong>Force</strong>, and see if you can explain the meaning, example, and key rule aloud.
            </p>
          </section>

          {/* Section 3: 4 Different Study Table Formats */}
          <section className="flex flex-col gap-6 pt-4 border-t-2 border-black">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-1">
                4 Useful Study Table Formats
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Different subjects require different columns. Here are four practical layouts you can adapt:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Format 1: Vocabulary */}
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
                <div className="flex items-center gap-2 font-black uppercase text-sm text-black">
                  <Languages className="w-4 h-4 stroke-[2.5]" />
                  1. Vocabulary &amp; Language
                </div>
                <div className="border border-black overflow-x-auto text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#FFDE00] border-b border-black font-black">
                      <tr>
                        <th className="p-2 border-r border-black">Word</th>
                        <th className="p-2 border-r border-black">Meaning</th>
                        <th className="p-2">Example Sentence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-black font-medium">
                      <tr>
                        <td className="p-2 border-r border-black font-bold">Ephemeral</td>
                        <td className="p-2 border-r border-black">Lasting a very short time</td>
                        <td className="p-2 italic">Fame can be ephemeral.</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-r border-black font-bold">Pragmatic</td>
                        <td className="p-2 border-r border-black">Dealing with things realistically</td>
                        <td className="p-2 italic">She took a pragmatic approach.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-600">
                  <strong>When to use:</strong> Foreign language classes, SAT/GRE prep, or new scientific terminology.
                </p>
              </div>

              {/* Format 2: Formulas */}
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
                <div className="flex items-center gap-2 font-black uppercase text-sm text-black">
                  <Calculator className="w-4 h-4 stroke-[2.5]" />
                  2. Formulas &amp; Math / Science
                </div>
                <div className="border border-black overflow-x-auto text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#FFDE00] border-b border-black font-black">
                      <tr>
                        <th className="p-2 border-r border-black">Formula</th>
                        <th className="p-2 border-r border-black">Meaning</th>
                        <th className="p-2 border-r border-black">When to Use</th>
                        <th className="p-2">Units</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-black font-medium">
                      <tr>
                        <td className="p-2 border-r border-black font-mono font-bold">F = m × a</td>
                        <td className="p-2 border-r border-black">Force = mass × accel</td>
                        <td className="p-2 border-r border-black">Finding force on moving mass</td>
                        <td className="p-2 font-mono">Newtons (N)</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-r border-black font-mono font-bold">V = I × R</td>
                        <td className="p-2 border-r border-black">Ohm's Law: Voltage</td>
                        <td className="p-2 border-r border-black">Simple electric circuits</td>
                        <td className="p-2 font-mono">Volts (V)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-600">
                  <strong>When to use:</strong> Physics, chemistry, algebra, and finance when memorizing equations.
                </p>
              </div>

              {/* Format 3: Revision Tracker */}
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
                <div className="flex items-center gap-2 font-black uppercase text-sm text-black">
                  <CheckSquare className="w-4 h-4 stroke-[2.5]" />
                  3. Confidence / Revision Tracker
                </div>
                <div className="border border-black overflow-x-auto text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#FFDE00] border-b border-black font-black">
                      <tr>
                        <th className="p-2 border-r border-black">Topic</th>
                        <th className="p-2 border-r border-black">I Understand</th>
                        <th className="p-2">Need to Review</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-black font-medium">
                      <tr>
                        <td className="p-2 border-r border-black font-bold">Cell Mitosis</td>
                        <td className="p-2 border-r border-black text-green-700 font-bold">✓ Clear (90%)</td>
                        <td className="p-2 text-gray-500">None</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-r border-black font-bold">Photosynthesis Light Cycle</td>
                        <td className="p-2 border-r border-black text-gray-500">Partial</td>
                        <td className="p-2 text-red-700 font-bold">Review ATP synthesis step</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-600">
                  <strong>When to use:</strong> During exam week to pinpoint your weakest areas so you don't waste time studying what you already know.
                </p>
              </div>

              {/* Format 4: History & Dates */}
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
                <div className="flex items-center gap-2 font-black uppercase text-sm text-black">
                  <History className="w-4 h-4 stroke-[2.5]" />
                  4. History &amp; Chronology
                </div>
                <div className="border border-black overflow-x-auto text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#FFDE00] border-b border-black font-black">
                      <tr>
                        <th className="p-2 border-r border-black">Date</th>
                        <th className="p-2 border-r border-black">Event</th>
                        <th className="p-2 border-r border-black">Cause</th>
                        <th className="p-2">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-black font-medium">
                      <tr>
                        <td className="p-2 border-r border-black font-mono">1789</td>
                        <td className="p-2 border-r border-black font-bold">French Revolution</td>
                        <td className="p-2 border-r border-black">Financial debt, food shortages</td>
                        <td className="p-2">Fall of monarchy, republic declared</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-r border-black font-mono">1945</td>
                        <td className="p-2 border-r border-black font-bold">End of WWII</td>
                        <td className="p-2 border-r border-black">Allied offensive campaigns</td>
                        <td className="p-2">Creation of United Nations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-600">
                  <strong>When to use:</strong> History, law, or political science when events are tied to causes and outcomes.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Realistic Before vs After */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Before vs. After: Biology Notes
            </h2>

            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-4 bg-red-50 border-b-2 border-black text-xs sm:text-sm space-y-1 font-sans">
                <span className="font-bold text-red-900 uppercase block mb-1">
                  Before: Raw Paragraph From Lecture
                </span>
                <p className="text-gray-800 leading-relaxed">
                  "The heart has four chambers. The right atrium receives deoxygenated blood from the body tissues through the superior and inferior vena cava. Then the right ventricle pumps that deoxygenated blood into the lungs for oxygen. The left atrium gets oxygenated blood back from the lungs through the pulmonary veins, and the left ventricle pumps that oxygen-rich blood out to the rest of the entire body through the aorta."
                </p>
              </div>

              <div className="p-4 bg-white overflow-x-auto">
                <span className="font-bold text-green-900 uppercase text-xs block mb-2">
                  After: Clean Study Table
                </span>
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b border-black">
                      <th className="p-2.5 font-black border-r border-black">Chamber</th>
                      <th className="p-2.5 font-black border-r border-black">Blood Type</th>
                      <th className="p-2.5 font-black border-r border-black">Receives From</th>
                      <th className="p-2.5 font-black">Pumps To</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Right Atrium</td>
                      <td className="p-2.5 border-r border-black text-blue-700">Deoxygenated</td>
                      <td className="p-2.5 border-r border-black">Body tissues</td>
                      <td className="p-2.5">Right Ventricle</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Right Ventricle</td>
                      <td className="p-2.5 border-r border-black text-blue-700">Deoxygenated</td>
                      <td className="p-2.5 border-r border-black">Right Atrium</td>
                      <td className="p-2.5">Lungs (via pulmonary artery)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Left Atrium</td>
                      <td className="p-2.5 border-r border-black text-red-700 font-bold">Oxygenated</td>
                      <td className="p-2.5 border-r border-black">Lungs (pulmonary veins)</td>
                      <td className="p-2.5">Left Ventricle</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Left Ventricle</td>
                      <td className="p-2.5 border-r border-black text-red-700 font-bold">Oxygenated</td>
                      <td className="p-2.5 border-r border-black">Left Atrium</td>
                      <td className="p-2.5 font-bold">Entire body (via aorta)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-gray-600">
              The paragraph takes 20 seconds of careful reading. The table takes 3 seconds to scan, and the differences between left and right chambers are immediately visible.
            </p>
          </section>

          {/* Section 5: How Students Can Build a Study Table (5 Steps) */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                How to Build a Study Table in 5 Steps
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">1. Choose ONE topic at a time</strong>
                <span className="text-gray-700">Don't try to cram an entire semester into a single table. Pick one chapter or concept cluster (e.g., <em>Cell Mitosis Stages</em> or <em>French Irregular Verbs</em>).</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">2. Pick 3 to 5 useful categories</strong>
                <span className="text-gray-700">Decide what you need to know for each item: Concept, Meaning, Example, and Key Exception. Sticking to 3–5 columns keeps it scannable.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">3. Write short, concise phrases</strong>
                <span className="text-gray-700">Do not paste entire sentences. Use abbreviations, short bullet points, and fragments that jog your memory quickly.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">4. Remove unnecessary details</strong>
                <span className="text-gray-700">Cut conversational filler from your professor's slides (e.g. <em>"As we saw in last week's experiment..."</em>). Only keep the factual core.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">5. Review and update it as you learn</strong>
                <span className="text-gray-700">Once you understand an item completely, highlight it green or add a checkmark so you can focus your remaining revision time on what is still difficult.</span>
              </div>
            </div>
          </section>

          {/* Section 6: What NOT to Do */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 stroke-[2.5] text-amber-600" />
              What NOT to Do With Study Tables
            </h2>

            <div className="space-y-3 text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">1. Don't copy entire textbook paragraphs into cells</strong>
                <p className="text-gray-700">
                  If a cell contains 40 words, it defeats the entire purpose of a table. Force yourself to summarize the idea in 5 to 10 words. The act of summarizing is where the learning happens.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">2. Don't create a table with 20 columns</strong>
                <p className="text-gray-700">
                  A table that stretches off the edge of your paper or screen is too overwhelming to review. Keep it between 3 and 5 columns.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">3. Don't paint everything in different rainbow colors</strong>
                <p className="text-gray-700">
                  Using 7 neon highlighter colors turns your study sheet into visual noise. Use at most one accent color for terms you still struggle with.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">4. Don't turn every single note into a table</strong>
                <p className="text-gray-700">
                  Stories, long philosophical arguments, or simple 3-item lists don't belong in tables. Save tables for concepts that have repeating categories and need side-by-side comparison.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">5. Don't use table formatting as an excuse to avoid understanding</strong>
                <p className="text-gray-700">
                  Making a beautiful table can give you a false sense of accomplishment. Formatting a table is not studying; reading it, explaining it out loud, and testing yourself is studying.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Short Revision Checklist */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Check className="w-6 h-6 stroke-[3] text-black" />
              Quick Revision Checklist
            </h2>

            <p className="text-sm text-gray-700">
              Before you use your table for exam prep, verify:
            </p>

            <ul className="space-y-2 text-sm sm:text-base font-bold text-gray-900">
              <li className="flex items-start gap-2.5 p-2 bg-white border border-black">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <span>Can you cover the right side of the table and recall the facts from memory?</span>
              </li>
              <li className="flex items-start gap-2.5 p-2 bg-white border border-black">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <span>Are all entries short enough to read in 2 seconds?</span>
              </li>
              <li className="flex items-start gap-2.5 p-2 bg-white border border-black">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <span>Does the table focus on one coherent topic rather than random facts?</span>
              </li>
              <li className="flex items-start gap-2.5 p-2 bg-white border border-black">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <span>Have you highlighted the 2 or 3 items that you consistently forget?</span>
              </li>
            </ul>
          </section>

          {/* Section 8: TABLEGUY Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLEGUY
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Make Your Study Sheet in Seconds
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Need to create a quick revision sheet or flashcard table? Build it in TABLEGUY, style your columns, and download clean Markdown for your notes app or a crisp printable PDF.
              </p>
            </div>

            <BrutalButton
              id="guide-study-notes-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 9: FAQ */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Do study tables work better than flashcards?
                </h3>
                <p className="text-sm text-gray-700">
                  They serve different purposes. Flashcards are great for isolated terms (one question on front, one answer on back). Tables are better when you need to compare similar concepts side-by-side (like 4 different heart chambers or 3 economic theories).
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Should I print my study table or keep it digital?
                </h3>
                <p className="text-sm text-gray-700">
                  Many students find printing a physical copy helps with focus because there are no screen notifications. You can also fold the paper horizontally or vertically to test your memory.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How many rows should a study table have?
                </h3>
                <p className="text-sm text-gray-700">
                  Between 5 and 15 rows per sheet is best. If a table has 40 rows, split it into two sub-topics (e.g. <em>Bacterial Infections</em> vs <em>Viral Infections</em>) so it feels manageable.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What if a concept has a very long explanation?
                </h3>
                <p className="text-sm text-gray-700">
                  Don't paste the whole explanation into the cell. Write a 4-word summary and note the textbook page number next to it so you can look up details if needed. For more tips on layout, see our guide on{' '}
                  <Link href="/guides/how-to-make-readable-table" className="underline font-bold text-black hover:text-gray-700">
                    how to make a table easy to read
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Related Real Guides & Navigation */}
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
                href="/guides/organize-project-with-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Organize a Project With a Table
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
