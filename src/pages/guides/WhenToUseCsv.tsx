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
  HelpCircle,
  ArrowRight,
  FileSpreadsheet,
  Layers,
  ArrowRightLeft,
  AlertTriangle,
} from 'lucide-react';

export const WhenToUseCsv: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="When Should You Use CSV? A Simple Guide | TABLABLE"
        description="Not sure when to use CSV? Learn what CSV is good for, when it makes sense, and when another format like Excel is a better choice."
        canonicalPath="/guides/when-to-use-csv"
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
            When Should You Use CSV?
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
              4 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            When Should You Use CSV?
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            CSV isn't built for pretty reports or fancy colors. It was built for one specific purpose: moving data between different tools without friction. Here is how to know when it is the exact right tool for your table.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section: Opening Real Problem */}
          <section className="flex flex-col gap-4">
            <p>
              You have a table sitting in front of you with two thousand rows of data. A teammate or a client sends you a quick message:
            </p>

            <div className="p-4 bg-[#FAF8F5] border-2 border-black font-sans text-sm sm:text-base border-l-4 border-l-black">
              <p className="font-bold text-black italic">
                "Can you export that customer list and send it over so I can import it into our system?"
              </p>
            </div>

            <p>
              You open the export menu. You see standard options like Excel (<code className="font-mono text-sm bg-white border border-black px-1">.xlsx</code>), PDF, and then there is <strong>CSV</strong>.
            </p>

            <p>
              If you have ever wondered why anyone would choose a plain, unstyled CSV file over a full-featured spreadsheet, you are not alone. CSV files don't look impressive on screen. But behind the scenes, they are the quiet workhorse of the digital world.
            </p>
          </section>

          {/* Section 1: CSV in One Minute */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                CSV in One Minute
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-800">
              Imagine taking an Excel spreadsheet, stripping away all the cell colors, bold text, formulas, borders, and extra buttons, and keeping only the raw text and numbers. That is a CSV file.
            </p>

            <p className="text-sm text-gray-700">
              CSV stands for <strong>Comma-Separated Values</strong>. It is a plain text file that follows two simple rules:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-gray-800">
              <li>Every line in the file represents a <strong>row</strong>.</li>
              <li>Every comma on that line separates a <strong>column</strong>.</li>
            </ul>

            <div className="border-2 border-black bg-black text-white p-4 font-mono text-xs sm:text-sm">
              <span className="text-[#FFDE00] text-xs font-bold block mb-1.5 uppercase tracking-wider">
                A 3-row CSV file in raw text:
              </span>
              <pre className="text-gray-100 overflow-x-auto">
{`Name,Age,City
Ahmed,23,Casablanca
Sara,21,Rabat`}
              </pre>
            </div>

            <p className="text-sm text-gray-700">
              That's it. Line 1 has the headers separated by commas. Line 2 has Ahmed's record. Line 3 has Sara's record. Nothing hidden, no software licensing required, no complex file structure.
            </p>
          </section>

          {/* Section 2: When CSV Is a Great Choice */}
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 stroke-[2.5] text-black" />
              When CSV Is a Great Choice
            </h2>

            <p className="text-gray-800">
              You should reach for CSV in four clear situations:
            </p>

            <div className="space-y-4">
              {/* Situation 1 */}
              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-lg font-black uppercase text-black mb-1.5 flex items-center gap-2">
                  <ArrowRightLeft className="w-4 h-4 stroke-[3]" />
                  1. Moving data between two different programs
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Software programs often disagree on how to read complicated files. But almost every database, CRM, email marketing tool, and accounting software knows how to read plain comma-separated text. CSV is the universal middleman that lets different tools talk to each other without errors.
                </p>
              </div>

              {/* Situation 2 */}
              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-lg font-black uppercase text-black mb-1.5 flex items-center gap-2">
                  <Layers className="w-4 h-4 stroke-[3]" />
                  2. Working with large lists of simple data
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Because CSV files don't store styling rules or visual layouts, their file size is tiny. A list of 50,000 products or customer transactions that might freeze or lag in a heavy spreadsheet application will open quickly and cleanly as a CSV.
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {['Product Inventories', 'Contact Lists', 'Student Records', 'Survey Responses', 'Bank Transactions'].map((tag) => (
                    <span key={tag} className="text-xs font-mono font-bold bg-[#FAF8F5] border border-black px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Situation 3 */}
              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-lg font-black uppercase text-black mb-1.5 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 stroke-[3]" />
                  3. Sending raw data to someone who will process it
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  If someone asks you for "the raw data," they don't want your custom fonts, colored header rows, or hidden columns. They want clean numbers and text they can immediately plug into their own scripts or charts. CSV gives them exactly that.
                </p>
              </div>

              {/* Situation 4 */}
              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-lg font-black uppercase text-black mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                  4. Backing up tabular records for the future
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Proprietary software formats change every few years. Old files sometimes become hard to open in new versions of software. But plain text never goes obsolete. A CSV file created today will still be readable fifty years from now on any computer.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: When CSV Is a Bad Choice */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <XCircle className="w-6 h-6 stroke-[2.5] text-black" />
              When CSV Is a Bad Choice
            </h2>

            <p className="text-gray-800">
              CSV is great at being simple, but that simplicity has real limits. Avoid CSV when:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAF8F5] border-2 border-black">
                <h3 className="text-base font-black text-black mb-1">
                  You need formulas and automatic math
                </h3>
                <p className="text-sm text-gray-700">
                  CSV cannot store formulas. If you write <code className="font-mono text-xs bg-white px-1 border border-black">=SUM(A1:A10)</code>, CSV will either save the formula as literal text or save only the resulting number. The interactive math is lost.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black">
                <h3 className="text-base font-black text-black mb-1">
                  You care about colors and visual styling
                </h3>
                <p className="text-sm text-gray-700">
                  There is no way to make text bold, highlight rows in yellow, or set custom column widths in CSV. If visual polish matters, use a styled table or spreadsheet format.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black">
                <h3 className="text-base font-black text-black mb-1">
                  Your table has merged cells or multiple sections
                </h3>
                <p className="text-sm text-gray-700">
                  CSV only understands a flat grid: one set of columns and one set of rows. It cannot handle merged headers, multi-tier headers, or stacked sub-tables.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black">
                <h3 className="text-base font-black text-black mb-1">
                  You need multiple sheets in one file
                </h3>
                <p className="text-sm text-gray-700">
                  An Excel workbook can hold 10 different tabs. A CSV file can only ever hold a single table.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: CSV vs Excel - The Real Difference */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              CSV vs Excel: The Decision Table
            </h2>
            <p className="text-gray-800">
              Here is the fastest way to decide between the two:
            </p>

            <div className="border-2 sm:border-[3px] border-black bg-white overflow-x-auto shadow-[4px_4px_0px_0px_#000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black text-black">
                    <th className="p-3 font-black border-r-2 border-black">What you want to do</th>
                    <th className="p-3 font-black">Better choice</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-medium">
                  <tr>
                    <td className="p-3 border-r-2 border-black">Move data from your database into an email tool</td>
                    <td className="p-3 font-black bg-[#FAF8F5]">CSV</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black">Build a monthly budget with automatic tax formulas</td>
                    <td className="p-3 font-black bg-[#FAF8F5]">Excel</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black">Export 20,000 product SKU records to upload to Shopify</td>
                    <td className="p-3 font-black bg-[#FAF8F5]">CSV</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black">Create a styled financial presentation for your boss</td>
                    <td className="p-3 font-black bg-[#FAF8F5]">Excel</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black">Archive simple survey results that anyone can read in 10 years</td>
                    <td className="p-3 font-black bg-[#FAF8F5]">CSV</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#FFDE00] border-2 border-black font-bold text-black text-sm sm:text-base">
              <strong>The bottom line:</strong> Excel is a workspace where you build and calculate. CSV is a cardboard box built to carry data from place to place.
            </div>
          </section>

          {/* Section 5: A CSV File Can Look Ugly — That's Fine */}
          <section className="p-6 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              A CSV File Looks Ugly In Text Editors — That's Fine
            </h2>
            <p className="text-sm sm:text-base text-gray-800">
              If you double-click a CSV file and your computer opens it in Notepad or TextEdit, it will look like a wall of comma-filled text.
            </p>
            <p className="text-sm text-gray-700">
              Don't worry — it isn't broken. That raw simplicity is what makes it so fast and universal. As soon as you drag that exact same file into Excel, Google Sheets, or TABLABLE, the columns snap neatly into place.
            </p>
          </section>

          {/* Section 6: One CSV Problem You Should Know */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 stroke-[2.5] text-black" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                One CSV Quirk You Should Know: Commas in Values
              </h2>
            </div>

            <p className="text-gray-800">
              What happens if the data inside a cell already contains a comma?
            </p>

            <p className="text-sm text-gray-700">
              For example, imagine a contact list where someone's name is written as <strong>Smith, John</strong>:
            </p>

            <div className="border-2 border-black bg-[#FAF8F5] p-4 font-mono text-xs sm:text-sm">
              <p className="font-sans font-bold text-black mb-1">Without quotes (broken):</p>
              <code className="text-red-700 block mb-3">
                Smith, John,Casablanca
              </code>
              <span className="text-xs font-sans text-gray-600 block mb-2">
                A computer reading this would see <strong>three</strong> columns (Smith | John | Casablanca) instead of two.
              </span>

              <p className="font-sans font-bold text-black mb-1">With quotation marks (correct):</p>
              <code className="text-green-800 font-bold block">
                "Smith, John",Casablanca
              </code>
              <span className="text-xs font-sans text-gray-600 block mt-1">
                The quotes tell the software: "treat everything between these quotes as a single value."
              </span>
            </div>

            <p className="text-sm text-gray-700">
              Good table generators handle this quoting automatically so your columns never get misaligned.
            </p>
          </section>

          {/* Section 7: Quick Decision Guide */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Should I Use CSV? Quick Checklist
            </h2>

            <div className="space-y-2 text-sm sm:text-base font-bold text-gray-900">
              <p className="flex items-center gap-2">
                <span className="text-black bg-[#FFDE00] px-1.5 py-0.5 border border-black font-mono text-xs">YES</span>
                When you need to import or export raw data between applications.
              </p>
              <p className="flex items-center gap-2">
                <span className="text-black bg-[#FFDE00] px-1.5 py-0.5 border border-black font-mono text-xs">YES</span>
                When file size and speed matter for large lists of records.
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white bg-black px-1.5 py-0.5 border border-black font-mono text-xs">NO</span>
                When you need live math formulas or automatic calculations.
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white bg-black px-1.5 py-0.5 border border-black font-mono text-xs">NO</span>
                When you need colors, borders, or merged header cells.
              </p>
            </div>
          </section>

          {/* Section 8: TABLABLE Connection */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Edit and Export Clean CSV Tables Online
              </h3>
              <p className="text-sm font-medium text-gray-700">
                If you have messy table data that needs cleaning, sorting, or reordering before exporting it as a pristine CSV file, TABLABLE does it directly in your browser with zero login required.
              </p>
            </div>

            <BrutalButton
              id="guide-when-to-use-csv-cta"
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
                  Can I open a CSV file in Excel?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes, Excel opens CSV files directly and organizes the comma-separated data into columns. If you make edits and save it as a CSV again, just remember that any colors or formulas you added will not be saved.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Does CSV keep formatting like bold text or cell colors?
                </h3>
                <p className="text-sm text-gray-700">
                  No. CSV stores only plain text and numbers. It has no mechanism for colors, fonts, bold styling, or cell borders.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Is CSV better than Excel?
                </h3>
                <p className="text-sm text-gray-700">
                  Neither is better overall; they do different jobs. Excel is superior for calculations, formatting, and analyzing data. CSV is superior for transferring raw data quickly between different apps and databases.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can CSV contain commas inside cell values?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes, as long as the cell value is enclosed in quotation marks (for example, <code className="font-mono text-xs bg-[#FAF8F5] px-1 border border-black">"Doe, Jane",30</code>). Software reading the CSV will recognize it as a single cell.
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

            <Link
              href="/guides/when-to-use-html-tables"
              className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
            >
              Next: When Should You Use HTML Tables?
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
