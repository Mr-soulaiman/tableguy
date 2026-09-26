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
  Eye,
  Smartphone,
  SlidersHorizontal,
  CheckSquare,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  AlignLeft,
  AlignRight,
} from 'lucide-react';

export const HowToMakeReadableTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Make a Table Easy to Read | TABLABLE"
        description="Learn how to turn a confusing table into one anyone can understand in a few seconds. Clear rules on alignment, headers, cell length, and the 5-second test."
        canonicalPath="/guides/how-to-make-readable-table"
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
            How to Make a Table Easy to Read
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
            How to Make a Table Easy to Read
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            A table should clarify information, not test your reader's patience. If someone has to squint, scroll sideways endlessly, or re-read three times to find a price, the table has failed. Here are practical, real-world rules to make any table clear in seconds.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The Bad Table Problem */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 stroke-[2.5] text-amber-600" />
              The Dreaded "Wall of Data" Table
            </h2>

            <p>
              We have all seen tables that look like a puzzle: eight columns wide, column headings like <em>"REV_STAT_Q3_EST_FINAL"</em>, numbers centered awkwardly, every second row colored purple, and cells stuffed with three paragraphs of text.
            </p>

            <p>
              Instead of helping, a bad table makes readers feel exhausted. The human brain wants to scan: top to bottom, left to right. When formats change from row to row and columns are cluttered, scanning halts.
            </p>

            <div className="p-4 bg-red-50 border-2 border-black">
              <span className="text-xs font-black uppercase text-red-700 block mb-1">
                Before: A Confusing, Cluttered Table
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border border-black text-center bg-white">
                  <thead>
                    <tr className="bg-red-200">
                      <th className="p-1 border border-black">ID #</th>
                      <th className="p-1 border border-black">FULL PRODUCT SPECIFICATION NAME</th>
                      <th className="p-1 border border-black">COST / RETAIL PRICE</th>
                      <th className="p-1 border border-black">INVENTORY STAT</th>
                      <th className="p-1 border border-black">NOTES AND GENERAL OBSERVATIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 border border-black">9482</td>
                      <td className="p-1 border border-black font-bold">Standard Wireless Mechanical Keyboard v2</td>
                      <td className="p-1 border border-black">$79.99</td>
                      <td className="p-1 border border-black text-green-700 font-bold">YES IN STOCK</td>
                      <td className="p-1 border border-black text-left">Customer feedback says keys feel clicky. Cable included in box.</td>
                    </tr>
                    <tr className="bg-yellow-100">
                      <td className="p-1 border border-black">1029</td>
                      <td className="p-1 border border-black font-bold">Mouse</td>
                      <td className="p-1 border border-black">€35 (about $38)</td>
                      <td className="p-1 border border-black text-red-600">low stock only 3 left</td>
                      <td className="p-1 border border-black text-left">Black colorway only available at warehouse.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-red-800 mt-2 font-medium">
                Notice the chaos: giant column titles, mixed currencies, centered numbers that don't line up, and novel-length notes inside cells.
              </p>
            </div>
          </section>

          {/* Section 2: 10 Practical Rules for Readable Tables */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              10 Practical Rules for Clear, Scannable Tables
            </h2>

            <div className="space-y-4 text-sm sm:text-base">
              {/* Rule 1 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black text-lg block mb-1">1. Give columns clear, punchy names</strong>
                <p className="text-gray-700">
                  Use 1 to 2 words per header whenever possible. Write <code className="font-mono text-xs bg-gray-100 px-1 border">Price</code> instead of <code className="font-mono text-xs bg-gray-100 px-1 border">Retail Cost Per Unit Before Tax</code>. If you need to clarify units, put them in parentheses: <code className="font-mono text-xs bg-gray-100 px-1 border">Weight (kg)</code> or <code className="font-mono text-xs bg-gray-100 px-1 border">Price (USD)</code>.
                </p>
              </div>

              {/* Rule 2 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black text-lg block mb-1">2. Keep similar information in the same column</strong>
                <p className="text-gray-700">
                  Every column represents a single question. One column is for the name, one is for price, one is for date. Never merge dates and prices into one multi-purpose "Info" column.
                </p>
              </div>

              {/* Rule 3 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black text-lg block mb-1">3. Keep cell content short</strong>
                <p className="text-gray-700">
                  Tables are for scanning, not long-form reading. If a cell requires more than 4 or 5 words, summarize it or move the explanation to a footnote below the table.
                </p>
              </div>

              {/* Rule 4 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black text-lg block mb-1">4. Use consistent formats for numbers, dates, and prices</strong>
                <p className="text-gray-700">
                  Don't mix <code className="font-mono text-xs">$40</code> with <code className="font-mono text-xs">€35</code>, or <code className="font-mono text-xs">Oct 12</code> with <code className="font-mono text-xs">12/10/2026</code>. Pick one format across all rows so differences stand out instantly.
                </p>
              </div>

              {/* Rule 5 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black text-lg block mb-1">5. Put columns in a logical sequence</strong>
                <p className="text-gray-700">
                  Start with the primary identifier on the far left (e.g. <em>Product Name</em>, <em>Student Name</em>, or <em>Task</em>). Place secondary attributes (like <em>Status</em>, <em>Price</em>, or <em>Date</em>) next to it, and put extra notes on the far right.
                </p>
              </div>

              {/* Rule 6 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black text-lg block mb-1">6. Use alignment appropriately</strong>
                <ul className="space-y-1 text-gray-800 text-sm mt-1 list-disc pl-5">
                  <li><strong>Text columns:</strong> Always align to the <strong>left</strong> (easier to read words).</li>
                  <li><strong>Numeric columns:</strong> Always align to the <strong>right</strong> (so digits and decimal points line up vertically).</li>
                  <li><strong>Short codes or badges:</strong> Center short icons, status tags, or checkmarks.</li>
                </ul>
              </div>

              {/* Rule 7 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black text-lg block mb-1">7. Don't use too many colors</strong>
                <p className="text-gray-700">
                  Color should convey meaning (like green for "Completed" and red for "Overdue"), not act as decoration. If your table has five different row background colors, it becomes visual noise.
                </p>
              </div>

              {/* Rule 8 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black text-lg block mb-1">8. Don't make everything bold</strong>
                <p className="text-gray-700">
                  When everything is bold, nothing stands out. Keep header rows bold and data cells normal. Only bold standout numbers or the winning option in a comparison.
                </p>
              </div>

              {/* Rule 9 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black text-lg block mb-1">9. Eliminate unnecessary columns</strong>
                <p className="text-gray-700">
                  If every single item in your table has the value <code className="font-mono text-xs">"In Stock: Yes"</code>, delete the column and write a one-sentence note above the table: <em>"All listed products are in stock."</em>
                </p>
              </div>

              {/* Rule 10 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black text-lg block mb-1">10. Think about mobile screens</strong>
                <p className="text-gray-700">
                  Most people check reports and tables on their smartphones. Aim for 3 to 5 columns. If you must have 8 columns, make sure the table container supports smooth horizontal scrolling.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Before & After Example */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Before &amp; After: Watch the Transformation
            </h2>

            <p className="text-gray-800">
              Let's clean up the confusing keyboard and mouse table from earlier using our 10 rules:
            </p>

            <div className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-3 font-black border-r-2 border-black">Item</th>
                    <th className="p-3 font-black border-r-2 border-black text-right">Price</th>
                    <th className="p-3 font-black border-r-2 border-black text-center">Status</th>
                    <th className="p-3 font-black">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-medium">
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Mechanical Keyboard</td>
                    <td className="p-3 border-r-2 border-black font-mono text-right">$79.99</td>
                    <td className="p-3 border-r-2 border-black text-center">
                      <span className="px-2 py-0.5 bg-green-100 border border-black text-xs font-bold text-green-900">In Stock</span>
                    </td>
                    <td className="p-3 text-gray-700 text-xs sm:text-sm">Wireless, cable included</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Wireless Mouse</td>
                    <td className="p-3 border-r-2 border-black font-mono text-right">$38.00</td>
                    <td className="p-3 border-r-2 border-black text-center">
                      <span className="px-2 py-0.5 bg-amber-100 border border-black text-xs font-bold text-amber-900">Low Stock (3)</span>
                    </td>
                    <td className="p-3 text-gray-700 text-xs sm:text-sm">Black colorway only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-700">
              ✓ The price column is right-aligned so numbers line up. Headers are short. Status is neatly tagged with subtle color badges. The whole table can be digested in 3 seconds.
            </p>
          </section>

          {/* Section 4: The 5-Second Test */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Eye className="w-6 h-6 stroke-[2.5] text-black" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                The "5-Second Test"
              </h2>
            </div>

            <p className="text-gray-800">
              Whenever you finish creating a table, perform this quick test:
            </p>

            <blockquote className="p-4 bg-[#FAF8F5] border-2 border-black font-bold text-black text-base">
              Show the table to a coworker, friend, or yourself with fresh eyes. Can they tell what the table is about, find the highest/lowest price, and spot the key takeaway in under 5 seconds?
            </blockquote>

            <p className="text-sm text-gray-700">
              If they pause, squint, or have to ask <em>"Wait, what does this column mean?"</em>, your table needs simplifying. Shorten headers, remove redundant columns, or split it into two simpler tables.
            </p>
          </section>

          {/* Section 5: Using TABLABLE */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Make Your Next Table Effortlessly Clean
              </h3>
              <p className="text-sm font-medium text-gray-700">
                TABLABLE gives you complete visual control without messy formulas. Align columns left, center, or right with one click, highlight rows with clean colors, add or delete rows and columns instantly, and export to HTML, Markdown, or PDF.
              </p>
            </div>

            <BrutalButton
              id="guide-readable-table-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 6: Quick Checklist */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <CheckSquare className="w-6 h-6 stroke-[2.5] text-black" />
              Quick Table Readability Checklist
            </h2>

            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Column headers are 1 to 2 words each.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Numbers and prices are right-aligned.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Units (like $, kg, hrs) are consistent in every row.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Cell text is short and concise (no multi-line paragraphs).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Total columns are between 3 and 6 so mobile displays look great.</span>
              </li>
            </ul>
          </section>

          {/* Section 7: FAQ */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Why should numbers always be aligned to the right?
                </h3>
                <p className="text-sm text-gray-700">
                  When numbers are right-aligned, their decimal points, tens, and hundreds align vertically. This allows the human eye to compare magnitudes immediately without calculating digit counts.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How many columns are too many for a table?
                </h3>
                <p className="text-sm text-gray-700">
                  For most websites, reports, and mobile devices, more than 6 or 7 columns will cause horizontal scrolling or compressed text. If you have 10 columns, consider grouping them or splitting them into two smaller tables.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Should I color every alternating row (zebra striping)?
                </h3>
                <p className="text-sm text-gray-700">
                  Zebra striping is helpful for very wide tables with 8+ rows to keep eyes on the right line. But for short, clean tables (under 6 rows), simple thin dividers or white space look cleaner and less cluttered.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What if a table cell needs a long explanation?
                </h3>
                <p className="text-sm text-gray-700">
                  Don't paste a paragraph inside a table cell. Instead, place an asterisk (*) or small number superscript in the cell, and write the full note directly underneath the table.
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
                href="/guides/how-to-clean-up-a-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Clean Up a Table Before Sharing It
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
