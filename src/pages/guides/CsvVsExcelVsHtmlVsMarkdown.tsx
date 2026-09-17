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
  HelpCircle,
  Sparkles,
  ArrowRight,
  Check,
  FileSpreadsheet,
  FileCode2,
  FileText,
  Layers,
} from 'lucide-react';

export const CsvVsExcelVsHtmlVsMarkdown: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="CSV vs Excel vs HTML vs Markdown: What's the Difference? | TABLABLE"
        description="CSV, Excel, HTML and Markdown all handle tables differently. Here's what each one is good for, with simple examples to help you choose the right format."
        canonicalPath="/guides/csv-vs-excel-vs-html-vs-markdown"
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
            CSV vs Excel vs HTML vs Markdown
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="yellow" size="md">
              TABLE FORMATS
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            CSV vs Excel vs HTML vs Markdown: What's the Difference?
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            CSV, Excel, HTML, and Markdown all handle tables differently. Here is what each format actually does, what it is good for, and how to pick the right one without overthinking it.
          </p>
        </header>

        {/* Article Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section: Opening Hook */}
          <section className="flex flex-col gap-4">
            <p>
              Picture this: you just built a table. Maybe it is a product inventory, a student grade list, or a monthly budget. You hit export, and suddenly you are staring at a dropdown menu:
            </p>
            <div className="p-4 sm:p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] font-mono text-sm sm:text-base flex flex-wrap gap-2.5 items-center justify-around">
              <span className="px-2.5 py-1 bg-[#FAF8F5] border border-black font-bold">.csv</span>
              <span className="px-2.5 py-1 bg-[#FAF8F5] border border-black font-bold">.xlsx (Excel)</span>
              <span className="px-2.5 py-1 bg-[#FAF8F5] border border-black font-bold">&lt;table&gt; (HTML)</span>
              <span className="px-2.5 py-1 bg-[#FAF8F5] border border-black font-bold">| table | (Markdown)</span>
            </div>
            <p>
              Which one should you pick? Are these just four fancy names for the exact same thing?
            </p>
            <p>
              Not quite. While all four store rows and columns, they were invented for completely different jobs. Picking the wrong format can mean lost formulas, messy unreadable text, or a file the other person can't even open.
            </p>
          </section>

          {/* Section: Main Idea */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Sparkles className="w-5 h-5 stroke-[2.5]" />
              The Core Concept
            </h2>
            <p className="text-base sm:text-lg font-medium text-gray-800">
              Here is the cleanest way to understand the difference in four lines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="block text-black font-black uppercase text-sm mb-1">1. Excel (.xlsx)</strong>
                <span className="text-sm text-gray-700">A workspace where you calculate, filter, and work on data.</span>
              </div>
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="block text-black font-black uppercase text-sm mb-1">2. CSV (.csv)</strong>
                <span className="text-sm text-gray-700">Raw data stripped of design, built to move between programs.</span>
              </div>
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="block text-black font-black uppercase text-sm mb-1">3. HTML (&lt;table&gt;)</strong>
                <span className="text-sm text-gray-700">Web code made for browsers to display and style on a page.</span>
              </div>
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="block text-black font-black uppercase text-sm mb-1">4. Markdown (| --- |)</strong>
                <span className="text-sm text-gray-700">Plain text pipes that stay readable inside documents and notes.</span>
              </div>
            </div>
          </section>

          {/* Section 1: Excel */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-sm">
                1
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                Excel: The Spreadsheet You Work In
              </h2>
            </div>

            <p>
              Excel (along with Google Sheets and Apple Numbers) is a full spreadsheet program. When you save an Excel file (<code className="bg-[#FAF8F5] px-1.5 py-0.5 border border-black font-mono text-sm">.xlsx</code>), you are not just saving values. You are saving formulas, calculations, dropdowns, colors, fonts, and multiple tabs.
            </p>

            <p>
              Excel is best when the table is an active workspace:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              <li>You need automatic totals (<code className="font-mono text-sm font-bold">=SUM(B2:B10)</code>).</li>
              <li>You want to sort by price or filter by category with a click.</li>
              <li>You have multiple connected sheets inside one workbook.</li>
            </ul>

            {/* Visual Example: Excel */}
            <div className="my-2 border-2 border-black bg-white overflow-x-auto shadow-[3px_3px_0px_0px_#000]">
              <div className="bg-[#FAF8F5] px-3 py-1.5 border-b-2 border-black text-xs font-mono font-bold flex items-center justify-between">
                <span>Excel Spreadsheet Example</span>
                <span className="text-gray-500">Formulas Active</span>
              </div>
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-2.5 font-black border-r-2 border-black">Product</th>
                    <th className="p-2.5 font-black border-r-2 border-black">Price</th>
                    <th className="p-2.5 font-black border-r-2 border-black">Quantity</th>
                    <th className="p-2.5 font-black">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-mono">
                  <tr>
                    <td className="p-2.5 border-r-2 border-black font-sans font-medium">Mouse</td>
                    <td className="p-2.5 border-r-2 border-black">$20</td>
                    <td className="p-2.5 border-r-2 border-black">5</td>
                    <td className="p-2.5 font-bold">$100</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border-r-2 border-black font-sans font-medium">Keyboard</td>
                    <td className="p-2.5 border-r-2 border-black">$45</td>
                    <td className="p-2.5 border-r-2 border-black">2</td>
                    <td className="p-2.5 font-bold">$90</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-700 italic">
              <strong>When it is overkill:</strong> If you just need to send a simple 5-row table to a colleague or paste it into a report, sending a heavy <code className="font-mono text-xs">.xlsx</code> attachment is often unnecessary.
            </p>
          </section>

          {/* Section 2: CSV */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-sm">
                2
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                CSV: Simple Data for Moving Between Programs
              </h2>
            </div>

            <p>
              CSV stands for <em>Comma-Separated Values</em>. If Excel is a fully decorated office, CSV is a table stripped down to its underwear.
            </p>

            <p>
              There are no colors, no bold fonts, no merged cells, and no formulas. It is just plain text where commas separate the columns and line breaks separate the rows.
            </p>

            {/* Raw vs Rendered Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
              <div className="border-2 border-black bg-black text-white p-4 shadow-[3px_3px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold text-[#FFDE00] uppercase block mb-2">
                  What a .csv file actually looks like:
                </span>
                <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-gray-200">
{`Name,Age,City
Ahmed,23,Casablanca
Sara,21,Rabat`}
                </pre>
              </div>

              <div className="border-2 border-black bg-white p-4 shadow-[3px_3px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold text-gray-600 uppercase block mb-2">
                  How software displays that CSV:
                </span>
                <table className="w-full text-left text-xs sm:text-sm border-collapse border border-black">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-black">
                      <th className="p-1.5 font-black border-r border-black">Name</th>
                      <th className="p-1.5 font-black border-r border-black">Age</th>
                      <th className="p-1.5 font-black">City</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black font-medium">
                    <tr>
                      <td className="p-1.5 border-r border-black">Ahmed</td>
                      <td className="p-1.5 border-r border-black">23</td>
                      <td className="p-1.5">Casablanca</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 border-r border-black">Sara</td>
                      <td className="p-1.5 border-r border-black">21</td>
                      <td className="p-1.5">Rabat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              Because CSV is so simple, nearly every app in the world can read it. When you export contacts from your phone, download bank transactions, or upload subscriber lists to an email service, you almost always use CSV.
            </p>

            <div className="p-4 bg-white border-2 border-black">
              <h3 className="text-sm font-black uppercase text-black mb-1.5 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 stroke-[2.5]" />
                What if your data has commas in it?
              </h3>
              <p className="text-sm text-gray-700">
                If someone's name is <code className="bg-[#FAF8F5] px-1 py-0.5 border border-black font-mono">Smith, John</code>, a comma could accidentally split the name into two columns. Standard CSV handles this by wrapping the value in quotation marks:
              </p>
              <div className="mt-2 p-2 bg-[#FAF8F5] border border-black font-mono text-xs text-black">
                "Smith, John",25,Casablanca
              </div>
            </div>
          </section>

          {/* Section 3: HTML */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-sm">
                3
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                HTML: Tables for Web Pages
              </h2>
            </div>

            <p>
              If you want a table to appear on a website or blog post, HTML is the language web browsers understand.
            </p>

            <p>
              An HTML table uses tags like <code className="bg-[#FAF8F5] px-1.5 py-0.5 border border-black font-mono text-sm">&lt;table&gt;</code>, <code className="bg-[#FAF8F5] px-1.5 py-0.5 border border-black font-mono text-sm">&lt;tr&gt;</code> (table row), <code className="bg-[#FAF8F5] px-1.5 py-0.5 border border-black font-mono text-sm">&lt;th&gt;</code> (header cell), and <code className="bg-[#FAF8F5] px-1.5 py-0.5 border border-black font-mono text-sm">&lt;td&gt;</code> (data cell).
            </p>

            {/* Visual Example: HTML code vs Rendered */}
            <div className="border-2 border-black bg-white overflow-hidden shadow-[3px_3px_0px_0px_#000]">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black text-xs font-mono font-black uppercase">
                HTML Code Snippet
              </div>
              <div className="p-4 bg-black text-gray-200 font-mono text-xs sm:text-sm overflow-x-auto">
{`<table>
  <thead>
    <tr>
      <th>Plan</th>
      <th>Monthly Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Basic</td>
      <td>Free</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>$12</td>
    </tr>
  </tbody>
</table>`}
              </div>
            </div>

            <p>
              With HTML, you can style borders, change background colors with CSS, merge cells across multiple columns (<code className="font-mono text-sm">colspan</code>), and add clickable links or buttons inside cells.
            </p>
          </section>

          {/* Section 4: Markdown */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-sm">
                4
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                Markdown: Simple Tables in Plain Text
              </h2>
            </div>

            <p>
              Markdown tables are built using vertical pipes (<code className="bg-[#FAF8F5] px-1.5 py-0.5 border border-black font-mono text-sm">|</code>) and hyphens (<code className="bg-[#FAF8F5] px-1.5 py-0.5 border border-black font-mono text-sm">-</code>).
            </p>

            <p>
              The brilliance of Markdown is readability. Even before a browser or app turns it into a graphic, you can read it clearly in any plain text editor or note app:
            </p>

            {/* Markdown Code */}
            <div className="border-2 border-black bg-black text-white p-4 shadow-[3px_3px_0px_0px_#000]">
              <span className="text-xs font-mono font-bold text-[#FFDE00] uppercase block mb-2">
                Markdown syntax:
              </span>
              <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-gray-200">
{`| Student | Subject     | Score |
| :------ | :---------- | ----: |
| Ahmed   | Mathematics |    18 |
| Sara    | Physics     |    19 |`}
              </pre>
            </div>

            <p>
              Markdown tables are popular on GitHub, in software README files, in note-taking apps like Notion and Obsidian, and in static documentation.
            </p>
          </section>

          {/* Section 5: Quick Comparison Table */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Quick Comparison at a Glance
            </h2>
            <p className="text-gray-800">
              Here is how all four compare across everyday criteria:
            </p>

            <div className="border-2 sm:border-[3px] border-black bg-white overflow-x-auto shadow-[4px_4px_0px_0px_#000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-3 font-black border-r-2 border-black">Format</th>
                    <th className="p-3 font-black border-r-2 border-black">Best for</th>
                    <th className="p-3 font-black border-r-2 border-black">Looks good raw?</th>
                    <th className="p-3 font-black border-r-2 border-black">Easy to edit?</th>
                    <th className="p-3 font-black">Moving data</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-medium">
                  <tr>
                    <td className="p-3 font-black border-r-2 border-black bg-[#FAF8F5]">Excel (.xlsx)</td>
                    <td className="p-3 border-r-2 border-black">Calculations &amp; active sheets</td>
                    <td className="p-3 border-r-2 border-black">No (binary file)</td>
                    <td className="p-3 border-r-2 border-black">Yes (in Excel/Sheets)</td>
                    <td className="p-3">Good for spreadsheets</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-black border-r-2 border-black bg-[#FAF8F5]">CSV (.csv)</td>
                    <td className="p-3 border-r-2 border-black">Exporting &amp; transferring data</td>
                    <td className="p-3 border-r-2 border-black">Plain text with commas</td>
                    <td className="p-3 border-r-2 border-black">Easy in spreadsheet apps</td>
                    <td className="p-3 font-bold text-black">Best in the world</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-black border-r-2 border-black bg-[#FAF8F5]">HTML (&lt;table&gt;)</td>
                    <td className="p-3 border-r-2 border-black">Publishing on websites</td>
                    <td className="p-3 border-r-2 border-black">Needs a browser</td>
                    <td className="p-3 border-r-2 border-black">Hard by hand</td>
                    <td className="p-3">Good for web rendering</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-black border-r-2 border-black bg-[#FAF8F5]">Markdown</td>
                    <td className="p-3 border-r-2 border-black">Notes, docs &amp; READMEs</td>
                    <td className="p-3 border-r-2 border-black font-bold">Yes, very clean</td>
                    <td className="p-3 border-r-2 border-black">Easy in text editors</td>
                    <td className="p-3">Great for text documents</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Real-Life Examples ("Which one should I use?") */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Which One Should I Use?
            </h2>
            <p className="text-gray-800">
              Whenever you are unsure, find your exact situation below:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <p className="text-sm font-bold text-gray-600 mb-1">
                  "I have a list of products and want to send it to another app or database."
                </p>
                <span className="inline-block font-black text-sm text-black bg-[#FFDE00] px-2 py-0.5 border border-black">
                  → Use CSV
                </span>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <p className="text-sm font-bold text-gray-600 mb-1">
                  "I need formulas, totals, and calculations that update automatically."
                </p>
                <span className="inline-block font-black text-sm text-black bg-[#FFDE00] px-2 py-0.5 border border-black">
                  → Use Excel
                </span>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <p className="text-sm font-bold text-gray-600 mb-1">
                  "I want to embed a styled table directly onto my website or blog."
                </p>
                <span className="inline-block font-black text-sm text-black bg-[#FFDE00] px-2 py-0.5 border border-black">
                  → Use HTML
                </span>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <p className="text-sm font-bold text-gray-600 mb-1">
                  "I am writing a GitHub README, note in Obsidian, or technical doc."
                </p>
                <span className="inline-block font-black text-sm text-black bg-[#FFDE00] px-2 py-0.5 border border-black">
                  → Use Markdown
                </span>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <p className="text-sm font-bold text-gray-600 mb-1">
                  "I just need to move raw data around without formatting getting in the way."
                </p>
                <span className="inline-block font-black text-sm text-black bg-[#FFDE00] px-2 py-0.5 border border-black">
                  → Use CSV
                </span>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <p className="text-sm font-bold text-gray-600 mb-1">
                  "I want to keep working with the data visually over time."
                </p>
                <span className="inline-block font-black text-sm text-black bg-[#FFDE00] px-2 py-0.5 border border-black">
                  → Use Excel
                </span>
              </div>
            </div>
          </section>

          {/* Section 7: The Easy Rule */}
          <section className="p-6 bg-[#FFDE00] border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              If You Only Remember One Thing...
            </h2>
            <div className="space-y-2 text-base sm:text-lg font-bold text-black">
              <p>• <strong>Excel:</strong> Work with the data.</p>
              <p>• <strong>CSV:</strong> Move the data.</p>
              <p>• <strong>HTML:</strong> Show the data on a website.</p>
              <p>• <strong>Markdown:</strong> Write the data in simple text.</p>
            </div>
          </section>

          {/* Section 8: TABLABLE Connection */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Convert and Clean Your Tables in Seconds
              </h3>
              <p className="text-sm font-medium text-gray-700">
                If your table is sitting somewhere looking messy and you just want to clean it up and get it into the format you need, that's exactly what TABLABLE is made for. Paste raw text, style cells, merge headers, and export to Markdown, HTML, CSV, or PDF instantly.
              </p>
            </div>

            <BrutalButton
              id="guide-open-generator-cta"
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
                  Is CSV the same as Excel?
                </h3>
                <p className="text-sm text-gray-700">
                  No. Excel is a full application that saves styles, formulas, and multiple sheets in a <code className="font-mono text-xs">.xlsx</code> format. CSV is just a plain text file with numbers and letters separated by commas.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I open a CSV file in Excel?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes! Excel opens CSV files effortlessly and automatically places each comma-separated value into its own column. Just remember that if you add colors or formulas and save as CSV again, those colors and formulas will disappear.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Should I use HTML or Markdown for a website?
                </h3>
                <p className="text-sm text-gray-700">
                  If you are writing a simple blog post or documentation in a Markdown-compatible CMS (like Ghost, Hugo, or Astro), Markdown is much faster to write. If you need custom borders, merged cells, or specific column styling, HTML is the better choice.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Which format is best for sharing raw table data?
                </h3>
                <p className="text-sm text-gray-700">
                  CSV is the universal standard for sharing raw data. Anyone on Windows, Mac, Linux, iOS, or Android can open it without needing paid software.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Back to Guides Navigation */}
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

            <Link
              href="/guides/when-to-use-csv"
              className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
            >
              Next Guide: When Should You Use CSV?
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
