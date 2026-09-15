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
  Split,
  AlertTriangle,
  FileSpreadsheet,
  Check,
  HelpCircle,
  FileCode,
} from 'lucide-react';

export const TurnListOfDataIntoTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Turn a List of Data Into a Table | TABLEGUY"
        description="Learn how to turn raw text, comma-separated values, tabs, and copied spreadsheet data into a clean, properly structured table. Practical steps and troubleshooting."
        canonicalPath="/guides/turn-list-of-data-into-table"
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
            How to Turn a List of Data Into a Table
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
            How to Turn a List of Data Into a Table
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Someone emails you a block of text separated by commas or tabs, or you copy an unformatted export from another tool. Here is how to recognize the underlying structure, clean up common separator mistakes, and transform raw rows into a readable table.
          </p>
        </header>

        {/* Main Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The Raw Data Problem */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Split className="w-6 h-6 stroke-[2.5]" />
              The Data Is Already Structured — Just Not Visual Yet
            </h2>

            <p>
              Imagine opening your inbox or a chat message and seeing this dumped in front of you:
            </p>

            <div className="p-4 bg-gray-900 text-yellow-400 font-mono text-xs sm:text-sm border-2 border-black overflow-x-auto shadow-[3px_3px_0px_0px_#000]">
              <pre className="whitespace-pre">
{`Ahmed,Math,15
Sara,Physics,17
Youssef,Math,12
Nadia,Physics,16`}
              </pre>
            </div>

            <p>
              At first glance, it looks like a wall of text. But look closer: this information is not random at all. It already has a strict internal order.
            </p>

            <p>
              Every single line represents one student. The first piece of information is always their name. The second piece is always their subject. The third piece is always their grade score. The commas act as the borders between columns.
            </p>

            <p>
              The data is already structured. It simply lacks visual borders, alignment, and column titles. When you give it those three elements, that exact same block turns into this:
            </p>

            {/* Brutalist Transformed Table */}
            <div className="border-2 border-black bg-white overflow-x-auto shadow-[4px_4px_0px_0px_#000]">
              <table className="w-full text-left text-sm border-collapse min-w-[420px]">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-3 font-black border-r-2 border-black">Name</th>
                    <th className="p-3 font-black border-r-2 border-black">Subject</th>
                    <th className="p-3 font-black text-right">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-medium">
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Ahmed</td>
                    <td className="p-3 border-r-2 border-black">Math</td>
                    <td className="p-3 text-right font-mono font-bold">15</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Sara</td>
                    <td className="p-3 border-r-2 border-black">Physics</td>
                    <td className="p-3 text-right font-mono font-bold">17</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Youssef</td>
                    <td className="p-3 border-r-2 border-black">Math</td>
                    <td className="p-3 text-right font-mono font-bold">12</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Nadia</td>
                    <td className="p-3 border-r-2 border-black">Physics</td>
                    <td className="p-3 text-right font-mono font-bold">16</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-700">
              Instantly, anyone can tell who took Physics, compare Ahmed and Youssef's grades, or calculate the class average.
            </p>
          </section>

          {/* Section 2: The 4 Anatomy Pieces */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              The 4 Anatomy Pieces of Raw Data
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Whenever you receive raw data, break it down into these four elements before you touch any formatting tools:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-base">1. Rows (The Records)</strong>
                <p className="text-gray-700">
                  Each new line represents one individual entity (e.g. one student, one inventory item, or one expense receipt).
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-base">2. Columns (The Attributes)</strong>
                <p className="text-gray-700">
                  The vertical categories shared by every row. In our example: Name, Subject, and Grade.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-base">3. Separators (The Delimiters)</strong>
                <p className="text-gray-700">
                  The character that signals where one column ends and the next begins (such as a comma, tab, or semicolon).
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-base">4. Headers (The Column Titles)</strong>
                <p className="text-gray-700">
                  The label row at the very top that explains what kind of value is stored underneath. Raw data often forgets headers, meaning you need to provide them.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Understanding Different Input Styles & Separators */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Different Input Styles: Why Separators Matter
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              A computer doesn't read words the way human eyes do. To split a line of text into cells, software searches for a specific dividing character known as a <strong>delimiter</strong> or <strong>separator</strong>.
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 bg-white border-2 border-black">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <strong className="text-black font-bold text-sm sm:text-base">Commas (CSV)</strong>
                  <span className="font-mono text-xs bg-yellow-100 border border-black px-1.5 py-0.5">Most common</span>
                </div>
                <code className="font-mono text-xs text-gray-800 bg-[#FAF8F5] p-1.5 border border-gray-300 block mb-1">
                  Apples,Fruit,12,$2.40
                </code>
                <p className="text-gray-700">
                  Comma-Separated Values (CSV) is the universal language of databases. However, if a cell value contains a comma (like an address or descriptive sentence), it must be wrapped in quotes or it will accidentally create an unwanted extra column.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <strong className="text-black font-bold text-sm sm:text-base">Tabs (TSV / Copied Spreadsheet Data)</strong>
                  <span className="font-mono text-xs bg-blue-100 border border-black px-1.5 py-0.5">Copy/Paste friendly</span>
                </div>
                <code className="font-mono text-xs text-gray-800 bg-[#FAF8F5] p-1.5 border border-gray-300 block mb-1">
                  Apples [TAB] Fruit [TAB] 12 [TAB] $2.40
                </code>
                <p className="text-gray-700">
                  Whenever you highlight cells in Excel, Google Sheets, or Apple Numbers and hit <kbd className="bg-gray-100 px-1 border border-black">Ctrl+C</kbd>, the clipboard stores them separated by tab characters. This is the cleanest format because normal text rarely contains literal tabs.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <strong className="text-black font-bold text-sm sm:text-base">Semicolons (;)</strong>
                  <span className="font-mono text-xs bg-purple-100 border border-black px-1.5 py-0.5">European regional standard</span>
                </div>
                <code className="font-mono text-xs text-gray-800 bg-[#FAF8F5] p-1.5 border border-gray-300 block mb-1">
                  Apples;Fruit;12;2,40 €
                </code>
                <p className="text-gray-700">
                  In countries where decimals are written with commas (like 2,40 € instead of $2.40), spreadsheets automatically export CSVs using semicolons to avoid breaking numbers.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <strong className="text-black font-bold text-sm sm:text-base">Spaces or Pipes (|)</strong>
                  <span className="font-mono text-xs bg-gray-100 border border-black px-1.5 py-0.5">Manual logs &amp; Markdown</span>
                </div>
                <code className="font-mono text-xs text-gray-800 bg-[#FAF8F5] p-1.5 border border-gray-300 block mb-1">
                  | Apples | Fruit | 12 | $2.40 |
                </code>
                <p className="text-gray-700">
                  Pipes are typical in Markdown notes. Plain spaces can work for simple lists, but multiple consecutive words (like "Fresh Red Apples") will easily break if space is treated as the column divider.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Practical Examples across Domains */}
          <section className="flex flex-col gap-6 pt-4 border-t-2 border-black">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-1">
                Practical Examples: From Raw Lines to Clean Tables
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Here is how raw input translates across different everyday scenarios:
              </p>
            </div>

            {/* Example 1: Product Inventory */}
            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-sm uppercase">
                Example 1: Product Inventory (Semicolon Input)
              </div>
              <div className="p-3 bg-gray-900 text-gray-200 font-mono text-xs border-b border-black overflow-x-auto">
                <div>SKU-101;Mechanical Keyboard;Electronics;45;$89.99</div>
                <div>SKU-102;Ergonomic Mouse Pad;Accessories;120;$14.50</div>
                <div>SKU-103;USB-C Monitor Cable;Cables;85;$19.00</div>
              </div>
              <div className="p-4 bg-white overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b border-black font-black">
                      <th className="p-2 border-r border-black">SKU</th>
                      <th className="p-2 border-r border-black">Item Name</th>
                      <th className="p-2 border-r border-black">Category</th>
                      <th className="p-2 border-r border-black text-right">Stock</th>
                      <th className="p-2 text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2 border-r border-black font-mono">SKU-101</td>
                      <td className="p-2 border-r border-black font-bold">Mechanical Keyboard</td>
                      <td className="p-2 border-r border-black">Electronics</td>
                      <td className="p-2 border-r border-black text-right font-mono">45</td>
                      <td className="p-2 text-right font-mono font-bold">$89.99</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-black font-mono">SKU-102</td>
                      <td className="p-2 border-r border-black font-bold">Ergonomic Mouse Pad</td>
                      <td className="p-2 border-r border-black">Accessories</td>
                      <td className="p-2 border-r border-black text-right font-mono">120</td>
                      <td className="p-2 text-right font-mono font-bold">$14.50</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-black font-mono">SKU-103</td>
                      <td className="p-2 border-r border-black font-bold">USB-C Monitor Cable</td>
                      <td className="p-2 border-r border-black">Cables</td>
                      <td className="p-2 border-r border-black text-right font-mono">85</td>
                      <td className="p-2 text-right font-mono font-bold">$19.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Example 2: Monthly Expenses */}
            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-sm uppercase">
                Example 2: Monthly Expenses (Tab Input)
              </div>
              <div className="p-3 bg-gray-900 text-gray-200 font-mono text-xs border-b border-black overflow-x-auto">
                <div>Oct 02 [TAB] Office Rent [TAB] Operations [TAB] $1,200.00 [TAB] Paid</div>
                <div>Oct 05 [TAB] Internet Provider [TAB] Utilities [TAB] $85.00 [TAB] Paid</div>
                <div>Oct 12 [TAB] Printing Paper [TAB] Supplies [TAB] $42.50 [TAB] Pending</div>
              </div>
              <div className="p-4 bg-white overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b border-black font-black">
                      <th className="p-2 border-r border-black">Date</th>
                      <th className="p-2 border-r border-black">Expense Item</th>
                      <th className="p-2 border-r border-black">Category</th>
                      <th className="p-2 border-r border-black text-right">Amount</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2 border-r border-black font-mono">Oct 02</td>
                      <td className="p-2 border-r border-black font-bold">Office Rent</td>
                      <td className="p-2 border-r border-black">Operations</td>
                      <td className="p-2 border-r border-black text-right font-mono font-bold">$1,200.00</td>
                      <td className="p-2 text-green-700 font-bold">Paid</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-black font-mono">Oct 05</td>
                      <td className="p-2 border-r border-black font-bold">Internet Provider</td>
                      <td className="p-2 border-r border-black">Utilities</td>
                      <td className="p-2 border-r border-black text-right font-mono font-bold">$85.00</td>
                      <td className="p-2 text-green-700 font-bold">Paid</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-black font-mono">Oct 12</td>
                      <td className="p-2 border-r border-black font-bold">Printing Paper</td>
                      <td className="p-2 border-r border-black">Supplies</td>
                      <td className="p-2 border-r border-black text-right font-mono font-bold">$42.50</td>
                      <td className="p-2 text-amber-700 font-bold">Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 5: Troubleshooting Section */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 stroke-[2.5] text-amber-600" />
              Troubleshooting: What Went Wrong With My Data?
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              When you paste raw data into a table generator or spreadsheet, things occasionally break. Here is how to diagnose and fix the four most frequent errors:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 bg-white border-2 border-black">
                <strong className="text-red-700 font-bold text-sm block mb-1">
                  1. Everything appears squished into one single column
                </strong>
                <p className="text-gray-700 mb-1.5">
                  <strong>The Cause:</strong> The tool is splitting by commas, but your raw text is separated by tabs (or semicolons). Because the tool doesn't see any commas, it treats the entire row as one long word.
                </p>
                <p className="text-gray-800 font-medium">
                  <strong>The Fix:</strong> Change the delimiter setting to Tab or Semicolon, or do a quick Find &amp; Replace in a text editor to convert semicolons to commas.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black">
                <strong className="text-amber-700 font-bold text-sm block mb-1">
                  2. Columns are shifted to the right (Misaligned cells)
                </strong>
                <p className="text-gray-700 mb-1.5">
                  <strong>The Cause:</strong> An accidental extra separator exists in the middle of a row. For instance: <code className="font-mono text-xs bg-gray-100 p-0.5 border">"Ahmed, Math, Advanced, 15"</code> has 3 commas instead of 2. The word "Advanced" pushes "15" into a fourth non-existent column.
                </p>
                <p className="text-gray-800 font-medium">
                  <strong>The Fix:</strong> Wrap the cell text in quotes (<code className="font-mono text-xs bg-gray-100 p-0.5 border">"Math, Advanced"</code>) or remove the inner comma entirely (<code className="font-mono text-xs bg-gray-100 p-0.5 border">Math - Advanced</code>).
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black">
                <strong className="text-blue-700 font-bold text-sm block mb-1">
                  3. Some rows have missing values (Empty trailing cells)
                </strong>
                <p className="text-gray-700 mb-1.5">
                  <strong>The Cause:</strong> A student didn't take the exam, so the line ends early (<code className="font-mono text-xs bg-gray-100 p-0.5 border">Sara,Physics</code> with no grade).
                </p>
                <p className="text-gray-800 font-medium">
                  <strong>The Fix:</strong> Keep the trailing comma (<code className="font-mono text-xs bg-gray-100 p-0.5 border">Sara,Physics,</code>) or write an explicit placeholder like <code className="font-mono text-xs bg-gray-100 p-0.5 border">N/A</code> or <code className="font-mono text-xs bg-gray-100 p-0.5 border">—</code>. This preserves the column count.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black">
                <strong className="text-purple-700 font-bold text-sm block mb-1">
                  4. Inconsistent row lengths across the data
                </strong>
                <p className="text-gray-700 mb-1.5">
                  <strong>The Cause:</strong> You copied text where some rows have three columns and others have four because an extra note was pasted at the end of certain lines.
                </p>
                <p className="text-gray-800 font-medium">
                  <strong>The Fix:</strong> Decide whether that extra note deserves its own dedicated column for everyone, or delete it before generating the table.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: How to Decide What Becomes a Column */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              How to Decide What Becomes a Column
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              When converting unformatted notes into a table, you have to decide what gets its own column and what stays combined. Use this simple test:
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Do people need to sort or filter by it?</strong> If you want to sort by price or filter by department, that attribute <em>must</em> be its own column.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Does every row have one?</strong> If almost every item has a date, category, and status, those make natural columns.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Is it an irregular one-off observation?</strong> If only one student has an explanatory note like <em>"Arrived 15 minutes late due to train strike"</em>, don't create an entire column for it unless you add a general "Notes" column.</span>
              </li>
            </ul>
          </section>

          {/* Section 7: 5-Step Transformation Method */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                The 5-Step Method to Convert Any Data List
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">1. Inspect the raw text for repeating delimiters</strong>
                <span className="text-gray-700">Scan line 1 and line 2. Are values divided by commas, semicolons, or tabs? Confirm that the same separator is used consistently throughout.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">2. Add a clear header row at the top</strong>
                <span className="text-gray-700">If the raw data doesn't have headers, write them as your first line (e.g. <code className="font-mono text-xs bg-white px-1 border">Name,Department,Salary</code>).</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">3. Check for rogue commas inside values</strong>
                <span className="text-gray-700">Look for street addresses or descriptions that contain inner commas. Wrap them in quotation marks so they don't fracture into unwanted extra columns.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">4. Align numbers to the right and text to the left</strong>
                <span className="text-gray-700">Once your table renders, make sure prices, quantities, and dates sit right-aligned so decimal points line up vertically.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">5. Review row counts</strong>
                <span className="text-gray-700">If your text had 20 lines, your table should have 20 data rows. A mismatch immediately flags an accidental line break.</span>
              </div>
            </div>
          </section>

          {/* Section 8: TABLEGUY Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLEGUY
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Paste Your Raw Data and Generate a Table Instantly
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Have a list separated by commas, tabs, or spreadsheet rows? Paste it directly into TABLEGUY to instantly format headers, set column alignments, and export clean HTML, Markdown, or PDF.
              </p>
            </div>

            <BrutalButton
              id="guide-turn-data-list-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 9: 4 Useful FAQs */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How can I tell if my copied data uses spaces or tabs?
                </h3>
                <p className="text-sm text-gray-700">
                  Paste the text into a plain text editor or code editor and turn on "Show Whitespace" (or press your arrow key through the gap). If the cursor jumps across the entire empty gap in a single press, it is a tab character. If it moves one character at a time, it is made of regular spaces.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What if my data has commas inside numbers, like $1,200?
                </h3>
                <p className="text-sm text-gray-700">
                  In CSV files, any cell with a comma must be wrapped in double quotes (e.g. <code className="font-mono text-xs bg-gray-100 p-0.5 border">"$1,200.00"</code>), or you can remove the thousands comma altogether (<code className="font-mono text-xs bg-gray-100 p-0.5 border">$1200.00</code>).
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I convert data separated by dashes or slashes?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. You can use Find &amp; Replace in any standard text editor to replace <code className="font-mono text-xs bg-gray-100 p-0.5 border"> - </code> or <code className="font-mono text-xs bg-gray-100 p-0.5 border"> / </code> with a comma or tab, and then generate your table immediately.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I know whether to use a table or keep it as a bulleted list?
                </h3>
                <p className="text-sm text-gray-700">
                  If every entry has the exact same 2 or more comparable properties (like price, quantity, or status), a table is much faster to read. If each item has unique descriptive sentences with no common attributes, a list is better. Check our detailed guide on{' '}
                  <Link href="/guides/tables-vs-lists" className="underline font-bold text-black hover:text-gray-700">
                    tables vs lists
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
