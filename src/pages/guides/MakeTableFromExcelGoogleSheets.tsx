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
  FileSpreadsheet,
  Copy,
  Scissors,
  HelpCircle,
  AlertTriangle,
  Sparkles,
  Layers,
  Check,
} from 'lucide-react';

export const MakeTableFromExcelGoogleSheets: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Make a Table From Excel or Google Sheets | TABLABLE"
        description="Learn how to turn Excel or Google Sheets data into a clean, ready-to-share table without rebuilding from scratch. Step-by-step tips, troubleshooting, and best practices."
        canonicalPath="/guides/make-table-from-excel-google-sheets"
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
            How to Make a Table From Excel or Google Sheets
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="yellow" size="md">
              TIPS &amp; HOW-TO
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How to Make a Table From Excel or Google Sheets
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            You already have your information neatly typed into Excel or Google Sheets. But when you only need a clean table to paste into a document, website, message, README, or another tool, you don't need to rebuild it from scratch. Here is how to turn spreadsheet rows into a sharp, shareable table in seconds.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The Real Situation */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6 stroke-[2.5]" />
              The Starting Situation
            </h2>

            <p>
              Imagine this everyday scenario: You have an Excel workbook or Google Sheet holding product inventory, client contacts, or sales numbers.
            </p>

            <p>
              Now someone asks you for a quick summary. You need to put a 4-row pricing list into an email, add a deliverables table into a GitHub README, or paste a quick schedule into a team chat.
            </p>

            <p>
              You could re-type all the numbers into a new document. You could take a blurry screenshot that nobody can copy text from. Or you could copy the raw cells, paste them into TABLABLE, and get a crisp, clean table formatted in seconds.
            </p>

            <p>
              You don't need to rebuild the information from scratch. You just need to know how spreadsheet copying actually works.
            </p>
          </section>

          {/* Section 2: A Simple Example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              A Simple Example
            </h2>

            <p className="text-gray-800">
              Suppose you have an internal sales inventory sheet. You just want to share a 4-row summary:
            </p>

            <div className="border-2 border-black bg-white overflow-x-auto shadow-[3px_3px_0px_0px_#000]">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-3 font-black border-r-2 border-black">Name</th>
                    <th className="p-3 font-black border-r-2 border-black">Product</th>
                    <th className="p-3 font-black border-r-2 border-black text-right">Price</th>
                    <th className="p-3 font-black text-right">Stock</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-medium">
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Ahmed</td>
                    <td className="p-3 border-r-2 border-black">Laptop</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono">$6,500</td>
                    <td className="p-3 text-right font-mono">4</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Sara</td>
                    <td className="p-3 border-r-2 border-black">Mouse</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono">$120</td>
                    <td className="p-3 text-right font-mono">18</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Youssef</td>
                    <td className="p-3 border-r-2 border-black">Keyboard</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono">$250</td>
                    <td className="p-3 text-right font-mono">7</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-700">
              Four clean columns. No grid clutter, no confusing spreadsheet formulas, and no software license required for anyone viewing it.
            </p>
          </section>

          {/* Section 3: The 7-Step Process */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                How to Turn Spreadsheet Cells into a Clean Table (7 Steps)
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">1. Select the useful cells</strong>
                <span className="text-gray-700">In Excel or Google Sheets, click and drag to highlight only the specific rows and columns you want. Always include the top header row.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">2. Copy them to your clipboard</strong>
                <span className="text-gray-700">Press <kbd className="font-mono text-xs bg-gray-100 border border-black px-1.5 py-0.5">Ctrl + C</kbd> (or <kbd className="font-mono text-xs bg-gray-100 border border-black px-1.5 py-0.5">Cmd + C</kbd> on Mac).</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">3. Paste them into TABLABLE</strong>
                <span className="text-gray-700">Open the editor and paste (<kbd className="font-mono text-xs bg-gray-100 border border-black px-1.5 py-0.5">Ctrl + V</kbd>). When spreadsheets copy data, they put invisible tab characters between columns. TABLABLE automatically reads those tabs to create columns.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">4. Check the rows and columns</strong>
                <span className="text-gray-700">Make sure every cell landed in the right column and that headers didn't accidentally drop into the data rows.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">5. Fix formatting or mistakes</strong>
                <span className="text-gray-700">Right-align numbers and currencies, remove trailing spaces, and unify date styles.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">6. Add or remove information if necessary</strong>
                <span className="text-gray-700">Delete internal notes or add a helpful summary row at the bottom.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">7. Copy or export the finished table</strong>
                <span className="text-gray-700">Export as clean semantic HTML for websites, Markdown for GitHub or Notion, CSV for other apps, or download as a PDF.</span>
              </div>
            </div>

            <div className="p-4 bg-[#FFDE00] border-2 border-black font-medium text-xs sm:text-sm text-black">
              <strong>Understanding Spreadsheet Copying:</strong> When you copy cells in Excel or Google Sheets, the operating system stores the text with <em>tabs</em> between cells on each line. This is completely normal and standard across all operating systems.
            </div>
          </section>

          {/* Section 4: Troubleshooting: Why Did Everything End Up in One Column? */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 stroke-[2.5] text-amber-600" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                Troubleshooting: "Why Did Everything End Up in One Column?"
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              This is the most common hiccup when copying from spreadsheets. You paste your data, and instead of 4 neat columns, all values are stacked on top of each other in a single vertical column.
            </p>

            <div className="space-y-3 text-sm">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1">Possible Cause 1: You copied from the formula bar instead of the grid</strong>
                <p className="text-gray-700">
                  If you double-clicked a cell and highlighted text inside the top formula input bar, you copied plain text without cell boundaries. <strong>Fix:</strong> Click the cell box itself (or drag across the grid) so the full cell container is highlighted before copying.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1">Possible Cause 2: Copied as formatted rich text through an intermediary</strong>
                <p className="text-gray-700">
                  If you copied from Sheets into a chat app, then copied from the chat app into your table generator, the chat app may have replaced tabs with spaces. <strong>Fix:</strong> Copy directly from Excel or Sheets straight into TABLABLE.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1">Possible Cause 3: Merged header cells</strong>
                <p className="text-gray-700">
                  Spreadsheets with large merged title bars often scramble tab delimiters across rows. <strong>Fix:</strong> Select only the actual data rows without the decorative banner rows above them.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Other Spreadsheet Data Quicks */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              6 Common Spreadsheet Data Quirk to Clean Up
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1 font-bold">1. Empty cells</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Spreadsheet cells left blank look like accidental omissions. Add a dash (<code className="font-mono text-xs">-</code>) or <code className="font-mono text-xs">N/A</code> so readers know the value was intentionally empty.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1 font-bold">2. Extra trailing spaces</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Manual typing in spreadsheets leaves unseen spaces after words. Backspace them out or trim them so your text aligns flush to the cell borders.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1 font-bold">3. Inconsistent dates</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Excel often mixes formats like <code className="font-mono text-xs">10/12/2026</code>, <code className="font-mono text-xs">Oct 12</code>, and <code className="font-mono text-xs">2026-10-12</code> in the same column. Pick one standard format and stick to it.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1 font-bold">4. Inconsistent units</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Don't mix <code className="font-mono text-xs">$50</code>, <code className="font-mono text-xs">50 USD</code>, and <code className="font-mono text-xs">50.00</code>. Standardize the column so numbers align cleanly.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1 font-bold">5. Unnecessary columns</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Cut backend columns like internal database IDs, secret keys, or timestamps that normal readers don't need to see.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1 font-bold">6. Very large spreadsheets</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Don't paste 5,000 rows into a document. Filter your spreadsheet first to grab the top 10 or 20 summary rows that actually matter to your audience.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Don't Copy the Entire Spreadsheet */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Scissors className="w-6 h-6 stroke-[2.5]" />
              Don't Copy the Entire Spreadsheet
            </h2>

            <p className="text-gray-800">
              The biggest visual mistake when making tables from spreadsheets is copying 10 columns simply because they exist in the workbook.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 border-2 border-black">
                <span className="text-xs font-black uppercase text-red-900 block mb-1">
                  Spreadsheet has 10 bloated columns:
                </span>
                <ul className="text-xs font-mono text-gray-700 space-y-0.5 list-disc pl-4">
                  <li>Row_ID (e.g. #9021)</li>
                  <li>Customer_Name</li>
                  <li>Billing_Street</li>
                  <li>Billing_Zip</li>
                  <li>Phone_Number</li>
                  <li>Internal_Agent_Notes</li>
                  <li>Product_SKU</li>
                  <li>Order_Item</li>
                  <li>Final_Total</li>
                  <li>Shipping_Status</li>
                </ul>
                <p className="text-xs text-red-700 mt-2 font-medium">
                  Pastes as an unreadable, squished mess on phones and PDFs.
                </p>
              </div>

              <div className="p-4 bg-green-50 border-2 border-black">
                <span className="text-xs font-black uppercase text-green-900 block mb-1">
                  Final table only needs 4 columns:
                </span>
                <div className="mt-2 p-2.5 bg-white border border-black font-mono text-xs">
                  <div className="font-bold border-b border-black pb-1 mb-1">
                    Customer | Product | Total | Status
                  </div>
                  <div>Sarah C. | Laptop | $6,500 | Shipped</div>
                  <div>Ahmed M. | Mouse | $120 | Processing</div>
                </div>
                <p className="text-xs text-green-900 font-medium mt-3">
                  Four columns tell the entire story clearly, fitting comfortably on mobile screens and in email bodies.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Excel/Sheets vs TABLABLE */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Excel / Google Sheets vs. TABLABLE: When to Use Each
            </h2>

            <p className="text-gray-800">
              TABLABLE is not trying to replace Excel or Google Sheets. They are built for fundamentally different tasks:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <strong className="text-black text-base block mb-2 font-black uppercase">
                  Excel &amp; Google Sheets are for:
                </strong>
                <ul className="space-y-1.5 text-gray-800 list-disc pl-5 text-xs sm:text-sm">
                  <li><strong>Complex calculations</strong> and financial formulas (<code className="font-mono text-xs">=VLOOKUP</code>, <code className="font-mono text-xs">=SUMIFS</code>).</li>
                  <li><strong>Large datasets</strong> with thousands of records.</li>
                  <li><strong>In-depth analysis</strong>, pivot tables, and charting.</li>
                  <li><strong>Ongoing spreadsheet work</strong> and raw data storage.</li>
                </ul>
              </div>

              <div className="p-4 bg-[#FFFDF0] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <strong className="text-black text-base block mb-2 font-black uppercase">
                  TABLABLE is for:
                </strong>
                <ul className="space-y-1.5 text-gray-800 list-disc pl-5 text-xs sm:text-sm">
                  <li><strong>Quick table creation</strong> and visual editing in seconds.</li>
                  <li><strong>Clean presentation</strong> without spreadsheet toolbars or clutter.</li>
                  <li><strong>Instant formatting</strong> (bolding headers, color badges, alignment).</li>
                  <li><strong>Copying and pasting</strong> clean tabular text.</li>
                  <li><strong>Exporting</strong> to semantic HTML, Markdown, CSV, or PDF in one click.</li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-gray-600 italic">
              Keep doing your data crunching in Excel or Sheets. When it's time to share the result in a clean, human-friendly format, paste it into TABLABLE.
            </p>
          </section>

          {/* Section 8: TABLABLE Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Paste Spreadsheet Cells and Format in Seconds
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Already have data in Excel or Google Sheets? Copy your cells and paste them straight into TABLABLE. Add or remove columns, adjust alignments, and export clean HTML, Markdown, CSV, or PDF with one click.
              </p>
            </div>

            <BrutalButton
              id="guide-excel-to-table-cta"
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
                  Can I copy an Excel table straight into TABLABLE?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. Highlight your cells in Excel, press <kbd className="font-mono text-xs bg-gray-100 px-1 border border-black">Ctrl+C</kbd>, and paste directly into TABLABLE. It automatically recognizes the tab delimiters and populates the grid.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I copy a Google Sheets table into TABLABLE?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. Google Sheets copies cells as tab-separated values automatically. You can paste them straight into TABLABLE without saving or converting any files first.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Why does my pasted spreadsheet data sometimes appear in one column?
                </h3>
                <p className="text-sm text-gray-700">
                  This happens if you copied text from inside the top formula edit bar instead of selecting the actual grid cells, or if you pasted through a chat app that stripped the tab characters. Make sure you select the cells directly on the spreadsheet canvas.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I export my finished table as Markdown or HTML?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. Once you've cleaned and organized your table in TABLABLE, you can export it with a single click as clean HTML (ready for websites or blogs), Markdown (for GitHub READMEs and Notion), CSV, or PDF.
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
                href="/guides/turn-messy-list-into-clean-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: Turn a Messy List Into a Clean Table
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
