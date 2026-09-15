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
  AlertTriangle,
  HelpCircle,
  CheckSquare,
  Smartphone,
  Palette,
  Columns,
  Type,
  FileText,
} from 'lucide-react';

export const CommonTableMistakes: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="Common Mistakes When Creating Tables | TABLEGUY"
        description="Avoid the top 10 common table mistakes including too many columns, unclear headings, mixing formats, and forgetting mobile screens. Simple fixes for every problem."
        canonicalPath="/guides/common-table-mistakes"
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
            Common Mistakes When Creating Tables
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="cyan" size="md">
              TIPS &amp; HOW-TO
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            Common Mistakes When Creating Tables
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Tables are supposed to make messy information effortless to understand. But when a table is built with unclear headings, too many columns, or mismatched alignments, it becomes harder to read than a messy list. Here is how to fix the 10 most common table mistakes.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Opening: The "Technically Correct, Practically Horrible" Table */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 stroke-[2.5] text-amber-600" />
              The Table That Only Its Creator Could Love
            </h2>

            <p>
              We have all received a document with a table that technically contains all the right data, but makes you want to close your laptop.
            </p>

            <p>
              Columns are squeezed so tight that words hyphenate across four vertical lines; column headers are full complete sentences; numbers are centered; and the background looks like a bowl of fruit salad.
            </p>

            <p>
              Making a table clean isn't about graphic design talent. It comes down to dodging a handful of predictable pitfalls.
            </p>
          </section>

          {/* The 10 Mistakes */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              The 10 Most Frequent Table Mistakes &amp; How to Fix Them
            </h2>

            {/* Mistake 1 */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-100 border border-black text-xs font-black text-red-900">MISTAKE 1</span>
                <h3 className="text-lg sm:text-xl font-black text-black">Too Many Columns</h3>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Why it fails:</strong> When you cram 10 or 12 columns onto a standard page or screen, cells get squished to 20 pixels wide, forcing text to wrap awkwardly or scroll forever horizontally.
              </p>
              <div className="p-3 bg-green-50 border border-black text-xs text-green-900">
                <strong>The simple fix:</strong> Cap tables at 4 to 6 columns. Ask yourself: <em>"Does the reader need this column right now to make their decision?"</em> If not, cut it.
              </div>
            </div>

            {/* Mistake 2 */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-100 border border-black text-xs font-black text-red-900">MISTAKE 2</span>
                <h3 className="text-lg sm:text-xl font-black text-black">Unclear Column Names</h3>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Why it fails:</strong> Headers like <em>"INFO"</em>, <em>"DETAILS"</em>, or internal jargon like <em>"SYS_CONF_VAL"</em> force readers to guess what the rows mean.
              </p>
              <div className="p-3 bg-green-50 border border-black text-xs text-green-900">
                <strong>The simple fix:</strong> Use 1 to 2 clear, plain English words: <em>"Status"</em>, <em>"Price"</em>, <em>"Due Date"</em>, <em>"Owner"</em>. Put units in parentheses like <em>"Weight (kg)"</em>.
              </div>
            </div>

            {/* Mistake 3 */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-100 border border-black text-xs font-black text-red-900">MISTAKE 3</span>
                <h3 className="text-lg sm:text-xl font-black text-black">Mixing Different Types of Information in One Column</h3>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Why it fails:</strong> Putting someone's phone number, email address, and job title inside a single column called <em>"Contact"</em> prevents sorting and breaks vertical scanning.
              </p>
              <div className="p-3 bg-green-50 border border-black text-xs text-green-900">
                <strong>The simple fix:</strong> One column = one specific question. Separate <em>"Role"</em> and <em>"Email"</em> into distinct columns, or leave out the email if it isn't strictly necessary.
              </div>
            </div>

            {/* Mistake 4 */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-100 border border-black text-xs font-black text-red-900">MISTAKE 4</span>
                <h3 className="text-lg sm:text-xl font-black text-black">Putting Huge Paragraphs Inside Cells</h3>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Why it fails:</strong> A cell that contains a 4-sentence paragraph balloons the row height, pushing other rows off the screen and ruining the visual rhythm.
              </p>
              <div className="p-3 bg-green-50 border border-black text-xs text-green-900">
                <strong>The simple fix:</strong> Summarize to 3 to 6 key words. If a long backstory is required, place an asterisk (*) and put the full paragraph in a footnote below the table.
              </div>
            </div>

            {/* Mistake 5 */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-100 border border-black text-xs font-black text-red-900">MISTAKE 5</span>
                <h3 className="text-lg sm:text-xl font-black text-black">Inconsistent Numbers, Dates, or Units</h3>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Why it fails:</strong> Row 1 says <em>"$20"</em>, Row 2 says <em>"25 USD"</em>, Row 3 says <em>"€18"</em>. Or mixing <em>"May 4th"</em> with <em>"2026-05-04"</em>. Readers can't compare values quickly.
              </p>
              <div className="p-3 bg-green-50 border border-black text-xs text-green-900">
                <strong>The simple fix:</strong> Pick one format for the entire table. Put the currency symbol or unit in the column header (e.g. <em>Price ($)</em>) and use pure numbers in the cells.
              </div>
            </div>

            {/* Mistake 6 */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-100 border border-black text-xs font-black text-red-900">MISTAKE 6</span>
                <h3 className="text-lg sm:text-xl font-black text-black">Using Too Many Colors</h3>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Why it fails:</strong> Yellow headers, orange alternating rows, bright green text, and purple borders cause cognitive overload. The eye doesn't know where to focus.
              </p>
              <div className="p-3 bg-green-50 border border-black text-xs text-green-900">
                <strong>The simple fix:</strong> Stick to neutral backgrounds with one strong accent color for the header (like TABLEGUY's classic yellow or clean gray) and use color strictly for status tags (green = done, red = overdue).
              </div>
            </div>

            {/* Mistake 7 */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-100 border border-black text-xs font-black text-red-900">MISTAKE 7</span>
                <h3 className="text-lg sm:text-xl font-black text-black">Making Everything Bold</h3>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Why it fails:</strong> If headers, data rows, numbers, and notes are all bolded, nothing has visual priority. It looks heavy and aggressive.
              </p>
              <div className="p-3 bg-green-50 border border-black text-xs text-green-900">
                <strong>The simple fix:</strong> Keep headers bold and body text regular. Only bold the primary item name or the single standout number.
              </div>
            </div>

            {/* Mistake 8 */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-100 border border-black text-xs font-black text-red-900">MISTAKE 8</span>
                <h3 className="text-lg sm:text-xl font-black text-black">Repeating Unnecessary Information in Every Row</h3>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Why it fails:</strong> If every single cell in a 10-row column says <em>"Available in USA"</em>, you are wasting an entire column on identical text.
              </p>
              <div className="p-3 bg-green-50 border border-black text-xs text-green-900">
                <strong>The simple fix:</strong> Delete the column and write a one-line sentence above the table: <em>"All listed plans are available in the USA."</em>
              </div>
            </div>

            {/* Mistake 9 */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-100 border border-black text-xs font-black text-red-900">MISTAKE 9</span>
                <h3 className="text-lg sm:text-xl font-black text-black">Creating a Table When a List Would Be Better</h3>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Why it fails:</strong> If you are simply writing a 3-step recipe or a shopping list with 4 items, putting it into a grid with borders adds friction without providing any comparison benefits. (See our guide on{' '}
                <Link href="/guides/tables-vs-lists" className="underline font-bold text-black hover:text-gray-700">
                  tables vs lists
                </Link>).
              </p>
              <div className="p-3 bg-green-50 border border-black text-xs text-green-900">
                <strong>The simple fix:</strong> If you are not comparing attributes across repeated categories, stick to a bulleted or numbered list.
              </div>
            </div>

            {/* Mistake 10 */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-100 border border-black text-xs font-black text-red-900">MISTAKE 10</span>
                <h3 className="text-lg sm:text-xl font-black text-black">Forgetting About Mobile Screens</h3>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Why it fails:</strong> A wide table that looks fine on a 27-inch desktop monitor will break or clip off the right edge when viewed on a phone.
              </p>
              <div className="p-3 bg-green-50 border border-black text-xs text-green-900">
                <strong>The simple fix:</strong> Check your table on a mobile width or wrap it in a container with <code className="font-mono text-xs bg-gray-100 px-1 border">overflow-x: auto</code> so users can scroll sideways smoothly without breaking the page.
              </div>
            </div>
          </section>

          {/* Section: The "Before You Publish" Checklist */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <CheckSquare className="w-6 h-6 stroke-[2.5] text-black" />
              The "Before You Publish" Table Checklist
            </h2>

            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Are headers short and descriptive (1–2 words)?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Are numbers right-aligned so decimal points line up?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Are there empty cells that should be marked with "-" or "N/A"?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Did I eliminate redundant columns where every row is identical?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-black">[ ]</span>
                <span>Can someone understand the main takeaway in under 5 seconds?</span>
              </li>
            </ul>
          </section>

          {/* Section: Using TABLEGUY */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLEGUY
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Avoid Table Mistakes With TABLEGUY
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Building tables by hand in code or messy software is when formatting errors creep in. TABLEGUY gives you clean visual alignments, automatic mobile-friendly wrappers, easy column deletion, and clean export to HTML, Markdown, or CSV.
              </p>
            </div>

            <BrutalButton
              id="guide-common-mistakes-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section: FAQ */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What is the absolute worst table mistake?
                </h3>
                <p className="text-sm text-gray-700">
                  Unclear column headers combined with inconsistent units. If a reader cannot tell what the numbers represent or what currency is being used, the entire table is useless.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I handle blank cells?
                </h3>
                <p className="text-sm text-gray-700">
                  Never leave a cell completely empty, because readers might assume the data was accidentally left out or corrupted. Use a clean dash (<code className="font-mono text-xs">-</code>) or <code className="font-mono text-xs">N/A</code>.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Is it okay to put links inside a table?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes, but keep link text concise. Instead of pasting an entire 80-character URL like <code className="font-mono text-xs">https://example.com/item?id=94829</code>, use clear descriptive anchor text like <em>"View Specs"</em> or <em>"Download PDF"</em>.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How can I check how my table looks on mobile?
                </h3>
                <p className="text-sm text-gray-700">
                  In your web browser, right-click anywhere, select <strong>Inspect</strong>, and click the phone icon (Device Toolbar) to test your table on narrow smartphone dimensions (375px or 414px width).
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
                href="/guides/organize-information-with-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Organize Information With a Table
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
