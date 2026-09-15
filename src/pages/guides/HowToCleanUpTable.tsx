import React from 'react';
import { useRouter, Link } from '../../router';
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
  Sparkles,
  AlertTriangle,
  FileCheck,
  Eye,
  Check,
  Brush,
  Filter,
} from 'lucide-react';

export const HowToCleanUpTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Clean Up a Table Before Sharing It | TABLEGUY"
        description="Learn how to clean up a messy table before sharing it. Fix inconsistent data, duplicate rows, confusing headers, spacing, formatting, and more."
        canonicalPath="/guides/how-to-clean-up-a-table"
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
            How to Clean Up a Table Before Sharing It
          </span>
        </nav>

        {/* Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="blue" size="md">
              TIPS &amp; HOW-TO
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How to Clean Up a Table Before Sharing It
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            You spent hours collecting data into a grid. But right before attaching it to an email or pasting it into a team update, you realize it looks chaotic. Here is a practical checklist to clean up sloppy rows, standardize formatting, and make your table immediately trustworthy.
          </p>
        </header>

        {/* Main Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The Relatable Messy Table Situation */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Brush className="w-6 h-6 stroke-[2.5]" />
              The Pre-Share Panic
            </h2>

            <p>
              It happens to everyone. You pull together a spreadsheet from multiple sources, customer sign-ups, or meeting notes. The data is all there, but when you zoom out to look at the whole sheet, it feels unpolished:
            </p>

            <ul className="space-y-2 text-sm sm:text-base text-gray-800 list-disc pl-5">
              <li>Some names are in ALL CAPS, some are all lowercase, and some are Title Case.</li>
              <li>Random empty cells make readers wonder if data was lost or forgotten.</li>
              <li>Column names like <code className="font-mono text-xs bg-gray-100 px-1 border">col_3_final_rev2</code> make no sense to anyone else.</li>
              <li>Duplicate rows show the same person registered twice.</li>
              <li>Dates are written in three different ways (<code className="font-mono text-xs bg-gray-100 px-1 border">10/12/26</code>, <code className="font-mono text-xs bg-gray-100 px-1 border">Oct 12</code>, and <code className="font-mono text-xs bg-gray-100 px-1 border">2026-10-12</code>).</li>
              <li>Phone numbers have random spaces, dashes, or missing country codes.</li>
            </ul>

            <p>
              When people receive a messy table, their subconscious reaction is skepticism. If the formatting is sloppy, they wonder if the numbers themselves are inaccurate.
            </p>

            <p>
              The good news is that a table does not need elaborate graphic design to look completely professional. It does not need pastel rainbow rows or custom badges. <strong>What it needs is consistency.</strong>
            </p>
          </section>

          {/* Section 2: The Quick Table Cleanup Checklist */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                The Quick Table Cleanup Checklist
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              Run through these ten checks before hitting send. Each one takes under a minute:
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm sm:text-base">1. Give columns clear, human names</strong>
                <p className="text-gray-700">
                  Replace shorthand abbreviations and database jargon. Change <code className="font-mono text-xs bg-white px-1 border">qty_recvd</code> to <code className="font-mono text-xs bg-white px-1 border">Quantity Received</code>, and <code className="font-mono text-xs bg-white px-1 border">stat_cd</code> to <code className="font-mono text-xs bg-white px-1 border">Status</code>. A stranger should understand every header instantly.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm sm:text-base">2. Remove unnecessary columns</strong>
                <p className="text-gray-700">
                  Did you export an internal database ID (<code className="font-mono text-xs bg-white px-1 border">usr_88291a</code>) or a timestamp column that your client will never read? Delete it. Every extra column dilutes the reader's attention.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm sm:text-base">3. Remove duplicate rows</strong>
                <p className="text-gray-700">
                  Double-check whether someone submitted a form twice or if your copy-paste accidentally duplicated five lines. Duplicates skew totals and look careless.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm sm:text-base">4. Fix inconsistent capitalization</strong>
                <p className="text-gray-700">
                  Pick a single casing rule per column. Proper names, cities, and categories should use Title Case (<code className="font-mono text-xs bg-white px-1 border">Casablanca</code>, not <code className="font-mono text-xs bg-white px-1 border">casablanca</code> or <code className="font-mono text-xs bg-white px-1 border">CASABLANCA</code>).
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm sm:text-base">5. Keep dates in one standard format</strong>
                <p className="text-gray-700">
                  Standardize dates throughout the entire column. Either use ISO format (<code className="font-mono text-xs bg-white px-1 border">2026-10-12</code>) or a written month format (<code className="font-mono text-xs bg-white px-1 border">12 Oct 2026</code>) so day and month cannot be confused.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm sm:text-base">6. Keep numbers and currency consistent</strong>
                <p className="text-gray-700">
                  If one price is written as <code className="font-mono text-xs bg-white px-1 border">$12.50</code>, don't write the next as <code className="font-mono text-xs bg-white px-1 border">12.5</code> or <code className="font-mono text-xs bg-white px-1 border">12 dollars</code>. Keep decimal places identical and right-align all numeric columns.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm sm:text-base">7. Remove accidental leading and trailing spaces</strong>
                <p className="text-gray-700">
                  Copying text often brings hidden spacebars at the beginning or end of cells (e.g. <code className="font-mono text-xs bg-white px-1 border">" Ahmed"</code>). These create jagged left alignment. Trim them out.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm sm:text-base">8. Fill or explain empty cells</strong>
                <p className="text-gray-700">
                  An empty white square is ambiguous. Does it mean zero? Not applicable? Forgotten? Write an intentional placeholder like <code className="font-mono text-xs bg-white px-1 border">—</code>, <code className="font-mono text-xs bg-white px-1 border">N/A</code>, or <code className="font-mono text-xs bg-white px-1 border">None</code>.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm sm:text-base">9. Check spelling in categories and names</strong>
                <p className="text-gray-700">
                  If you have a category column, ensure you haven't typed both <code className="font-mono text-xs bg-white px-1 border">Electronics</code> and <code className="font-mono text-xs bg-white px-1 border">Electrnoics</code>. Typos prevent anyone from filtering accurately later.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm sm:text-base">10. Keep similar information together (Logical sort)</strong>
                <p className="text-gray-700">
                  Before sharing, sort the table intentionally: alphabetically by name, chronologically by date, or hierarchically by category. Never leave it in random insertion order.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Before vs After Example */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Sparkles className="w-6 h-6 stroke-[2.5]" />
              Real Example: Messy vs. Cleaned
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Here is a raw registration list collected from an online form:
            </p>

            {/* Messy Table */}
            <div className="border-2 border-red-600 bg-red-50/40 p-4 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 font-black uppercase text-xs text-red-800">
                <XCircle className="w-4 h-4 text-red-600 stroke-[2.5]" />
                Before: Inconsistent, Duplicated &amp; Sloppy
              </div>

              <div className="border border-red-300 bg-white overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse min-w-[460px]">
                  <thead className="bg-red-100 border-b border-red-300 font-mono text-gray-700">
                    <tr>
                      <th className="p-2 border-r border-red-200">name</th>
                      <th className="p-2 border-r border-red-200">AGE</th>
                      <th className="p-2 border-r border-red-200">city</th>
                      <th className="p-2">phone</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-red-100 text-gray-800 font-mono">
                    <tr>
                      <td className="p-2 border-r border-red-200">ahmed</td>
                      <td className="p-2 border-r border-red-200">22</td>
                      <td className="p-2 border-r border-red-200">casablanca</td>
                      <td className="p-2">0612345678</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="p-2 border-r border-red-200">Ahmed</td>
                      <td className="p-2 border-r border-red-200">22</td>
                      <td className="p-2 border-r border-red-200">Casablanca</td>
                      <td className="p-2">0612345678</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-red-200">Sara</td>
                      <td className="p-2 border-r border-red-200">19</td>
                      <td className="p-2 border-r border-red-200">rabat</td>
                      <td className="p-2">06 98 76 54 32</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-red-200">Youssef B.</td>
                      <td className="p-2 border-r border-red-200"></td>
                      <td className="p-2 border-r border-red-200">Marrakech</td>
                      <td className="p-2">+212600112233</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-red-800">
                Notice the issues: Ahmed is submitted twice; "name" and "city" headers are lowercase while "AGE" is uppercase; Youssef's age is an ambiguous blank hole; and phone numbers use three different spacing formats.
              </p>
            </div>

            {/* Clean Table */}
            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-sm uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-green-800">
                  <CheckCircle2 className="w-4 h-4 text-green-700 stroke-[2.5]" />
                  After: Standardized, Deduplicated &amp; Clean
                </span>
                <span className="text-xs font-mono font-bold text-gray-600">Clean 4 Columns</span>
              </div>

              <div className="p-4 bg-white overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[460px]">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black">
                      <th className="p-2.5 font-black border-r border-black">Full Name</th>
                      <th className="p-2.5 font-black border-r border-black text-right">Age</th>
                      <th className="p-2.5 font-black border-r border-black">City</th>
                      <th className="p-2.5 font-black">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Ahmed Alami</td>
                      <td className="p-2.5 border-r border-black text-right font-mono">22</td>
                      <td className="p-2.5 border-r border-black">Casablanca</td>
                      <td className="p-2.5 font-mono">06 12 34 56 78</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Sara Bennani</td>
                      <td className="p-2.5 border-r border-black text-right font-mono">19</td>
                      <td className="p-2.5 border-r border-black">Rabat</td>
                      <td className="p-2.5 font-mono">06 98 76 54 32</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Youssef B.</td>
                      <td className="p-2.5 border-r border-black text-right font-mono text-gray-400">—</td>
                      <td className="p-2.5 border-r border-black">Marrakech</td>
                      <td className="p-2.5 font-mono">06 00 11 22 33</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F5] border border-black text-xs sm:text-sm text-gray-800 space-y-1">
              <strong className="block text-black font-bold mb-1">What was fixed:</strong>
              <p>• The duplicate row for Ahmed was deleted.</p>
              <p>• Headers were standardized to Title Case (<code className="font-mono text-xs">Full Name</code>, <code className="font-mono text-xs">Age</code>, <code className="font-mono text-xs">City</code>, <code className="font-mono text-xs">Phone Number</code>).</p>
              <p>• City names were capitalized consistently.</p>
              <p>• Phone numbers were standardized into uniform groups (<code className="font-mono text-xs">06 XX XX XX XX</code>).</p>
              <p>• The missing age for Youssef was marked with a clear em-dash (<code className="font-mono text-xs">—</code>) rather than a blank gap.</p>
              <p>• Ages were right-aligned to match numeric reading conventions.</p>
            </div>
          </section>

          {/* Section 4: Don't Over-Format */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 stroke-[2.5] text-amber-600" />
              Don't Over-Format: Less Is More
            </h2>

            <p>
              When people realize their table looks plain, the common instinct is to start adding decoration: coloring every column a different pastel shade, making three different fonts bold, adding dotted gradient shadows, or alternating striped rows with bright neon bars.
            </p>

            <p>
              Resist this temptation. <strong>Over-formatting makes tables harder to read, not easier.</strong>
            </p>

            <p>
              When every cell is calling for attention with color and bold text, nothing stands out. Visual noise exhausts the reader's eyes.
            </p>

            <div className="p-4 bg-white border-2 border-black">
              <strong className="text-black font-bold block mb-1">The Golden Rule of Table Formatting:</strong>
              <p className="text-gray-700 text-sm">
                Formatting must have a purpose. Use bolding exclusively for column headers and summary totals. Use color exclusively to signal critical status (like green for "Completed" or red for "Past Due"). If an element doesn't help the reader understand the data faster, remove it.
              </p>
            </div>
          </section>

          {/* Section 5: Check From the Reader's Point of View */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Eye className="w-5 h-5 stroke-[2.5]" />
              Check the Table From the Reader's Point of View
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              You already know what the data means because you created it. But your reader is seeing it for the first time with fresh eyes. Step back and ask yourself these five questions:
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-gray-800">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Can they understand the headers immediately?</strong> Or will they have to message you asking what "Code_X" stands for?</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Can they scan the rows quickly?</strong> Are items aligned cleanly so eyes can jump straight down a column?</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Are similar values written the exact same way?</strong> Or did you write "Yes" on row 1 and "True" on row 4?</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Is anything unnecessary?</strong> If you delete column 5, will anyone miss it? If not, delete it.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Can they find the key takeaway in under 10 seconds?</strong> If it's a financial report, is the Total easily spotted at the bottom?</span>
              </div>
            </div>
          </section>

          {/* Section 6: Before You Send It - 30-Second Checklist */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <FileCheck className="w-5 h-5 stroke-[2.5]" />
              The 30-Second Pre-Send Checklist
            </h2>

            <p className="text-sm text-gray-700">
              Right before attaching the file or pasting the table into your document:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3 bg-[#FAF8F5] border border-black flex items-center gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0" />
                <span>No blank holes (all empty cells have <code className="font-mono text-xs">—</code> or <code className="font-mono text-xs">N/A</code>)</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-black flex items-center gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0" />
                <span>Headers are capitalized and in bold</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-black flex items-center gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0" />
                <span>Numbers and prices are aligned to the right</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-black flex items-center gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0" />
                <span>Text and names are aligned to the left</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-black flex items-center gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0" />
                <span>Zero duplicate rows</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-black flex items-center gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0" />
                <span>The table is sorted logically</span>
              </div>
            </div>
          </section>

          {/* Section 7: TABLEGUY Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLEGUY
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Paste Your Raw Data and Export a Clean Table
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Have a messy text dump or unformatted spreadsheet rows? Paste it directly into TABLEGUY to adjust columns, set right/left alignments, and export clean Markdown, HTML, or PDF in seconds.
              </p>
            </div>

            <BrutalButton
              id="guide-clean-up-table-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 8: 4 Useful FAQs */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I make a messy table easier to read?
                </h3>
                <p className="text-sm text-gray-700">
                  Focus on three fixes: standardize your capitalization, right-align all numeric columns, and delete any columns that don't directly serve your reader's goal. Consistency and white space improve readability faster than color or fonts.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Should I remove empty cells?
                </h3>
                <p className="text-sm text-gray-700">
                  Don't leave cells blank because readers can't tell if the data was forgotten or intentionally absent. Replace blank cells with an intentional marker such as <code className="font-mono text-xs bg-gray-100 p-0.5 border">—</code>, <code className="font-mono text-xs bg-gray-100 p-0.5 border">N/A</code>, or <code className="font-mono text-xs bg-gray-100 p-0.5 border">None</code>.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Should every column use the same format?
                </h3>
                <p className="text-sm text-gray-700">
                  Formatting should be uniform <em>within each column</em> (every date formatted identically, every number showing two decimals). Across different columns, however, formats naturally vary: text aligns left, numbers align right, and short codes or icons center.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How many columns should a table have?
                </h3>
                <p className="text-sm text-gray-700">
                  For documents and web pages, 4 to 7 columns is usually the sweet spot. Once a table exceeds 8 columns, readers struggle to track rows horizontally, and viewing it on mobile screens becomes frustrating. Learn more in our guide on{' '}
                  <Link href="/guides/how-to-make-readable-table" className="underline font-bold text-black hover:text-gray-700">
                    how to make a table easy to read
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Navigation */}
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
                href="/guides/turn-messy-list-into-clean-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Turn a Messy List Into a Clean Table
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
