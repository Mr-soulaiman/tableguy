import React from 'react';
import { useRouter, Link } from '../../router';
import { BrutalButton } from '../../components/BrutalButton';
import { BrutalBadge } from '../../components/BrutalBadge';
import { SEO } from '../../components/SEO';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Clock,
  Table as TableIcon,
  CheckCircle2,
  FileCode,
  Sparkles,
  AlertTriangle,
  Code2,
  Check,
  FileSpreadsheet,
  Globe,
  HelpCircle,
  Layers,
  Palette,
  Calculator,
  Laptop,
  CheckSquare,
} from 'lucide-react';

export const HowToConvertExcelToHtml: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Convert Excel to HTML | TABLEGUY"
        description="Learn how to convert Excel spreadsheet data into an HTML table for a website. Includes examples, conversion methods, formatting tips, and common problems."
        canonicalPath="/guides/how-to-convert-excel-to-html"
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
            How to Convert Excel to HTML
          </span>
        </nav>

        {/* Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="yellow" size="md">
              TABLE FORMATS
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              7 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How to Convert Excel to HTML
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            You have a perfectly good table in Excel, but now you need that information on a website. Here is how to move your spreadsheet data into clean, accessible HTML without bloated tags or broken layouts.
          </p>
        </header>

        {/* Main Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: Opening */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6 stroke-[2.5]" />
              From Desktop Spreadsheet to Live Webpage
            </h2>

            <p>
              You have a perfectly good table in Excel, but now you need that information on a website.
            </p>

            <p>
              It might be an updated price list for your online store, a comparison chart of service plans, an event schedule, or technical specifications for a product manual. In Microsoft Excel, the table looks tidy and organized. But web browsers cannot read a binary <code className="font-mono text-xs bg-gray-100 px-1 border">.xlsx</code> file directly inside a webpage layout.
            </p>

            <p>
              The basic difference comes down to the intended purpose of each tool:
            </p>

            <ul className="space-y-2 text-sm sm:text-base text-gray-800 list-disc pl-5">
              <li>
                <strong>Excel is built for working with data.</strong> It calculates formulas, executes pivot tables, handles financial modeling, and lets you manipulate thousands of numbers in a personal desktop workspace.
              </li>
              <li>
                <strong>HTML is what websites use to display structured content.</strong> Web browsers use HTML tags like <code className="font-mono text-xs">&lt;table&gt;</code>, <code className="font-mono text-xs">&lt;tr&gt;</code>, and <code className="font-mono text-xs">&lt;td&gt;</code> to render legible rows and columns that search engines can index, screen readers can announce, and phones can display responsively.
              </li>
            </ul>

            <p>
              When you want to display an Excel spreadsheet online, your goal is almost never to duplicate Excel's entire software interface. Your real goal is to take the <em>clean underlying tabular data</em> and present it cleanly as an HTML table.
            </p>
          </section>

          {/* Section 2: Excel vs HTML */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Layers className="w-5 h-5 stroke-[2.5]" />
              Excel vs. HTML: What Each Format Does Best
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Understanding where Excel stops and HTML starts will save you from trying to rebuild a full spreadsheet engine on your website:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#FAF8F5] border border-black flex flex-col gap-2">
                <strong className="text-black font-bold uppercase text-sm flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4 text-green-700" />
                  Microsoft Excel (.xlsx)
                </strong>
                <ul className="space-y-1.5 text-gray-700 list-disc pl-4">
                  <li>Active formula calculations (<code className="font-mono text-xs">=SUM()</code>, <code className="font-mono text-xs">=VLOOKUP()</code>).</li>
                  <li>Multi-tab workbooks and complex cell references.</li>
                  <li>Heavy formatting tied to desktop printing settings.</li>
                  <li>Requires spreadsheet software or an installed viewer app to open.</li>
                </ul>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-black flex flex-col gap-2">
                <strong className="text-black font-bold uppercase text-sm flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-blue-700" />
                  HTML Tables (&lt;table&gt;)
                </strong>
                <ul className="space-y-1.5 text-gray-700 list-disc pl-4">
                  <li>Displays static calculated results instantly to any visitor.</li>
                  <li>Native to all web browsers, tablets, and mobile smartphones.</li>
                  <li>Controlled by your site's global CSS styling rules.</li>
                  <li>Search-engine indexable (SEO) and accessible for assistive tech.</li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-gray-600">
              For a wider view of tabular file types, read our breakdown of{' '}
              <Link href="/guides/csv-vs-excel-vs-html-vs-markdown" className="underline font-bold text-black hover:text-gray-800">
                CSV vs Excel vs HTML vs Markdown
              </Link>.
            </p>
          </section>

          {/* Section 3: Simple Example */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Code2 className="w-6 h-6 stroke-[2.5]" />
              A Concrete Example: Spreadsheet vs. HTML
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Imagine you have this small inventory sheet in Excel:
            </p>

            {/* Excel Representation */}
            <div className="border-2 border-black bg-white shadow-[3px_3px_0px_0px_#000] overflow-hidden">
              <div className="bg-[#107C41] text-white p-2.5 font-mono text-xs font-bold flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4" />
                  Excel View: Products.xlsx
                </span>
                <span>Sheet1</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-300 font-mono text-xs text-gray-500">
                      <th className="p-2 border-r border-gray-300 w-10 text-center">#</th>
                      <th className="p-2 border-r border-gray-300">A</th>
                      <th className="p-2 border-r border-gray-300">B</th>
                      <th className="p-2">C</th>
                    </tr>
                    <tr className="bg-gray-200 border-b-2 border-black font-black text-black">
                      <th className="p-2 border-r border-gray-300 text-center font-mono text-xs text-gray-500">1</th>
                      <th className="p-2 border-r border-gray-300">Product</th>
                      <th className="p-2 border-r border-gray-300 text-right">Price</th>
                      <th className="p-2 text-right">Stock</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-medium">
                    <tr>
                      <td className="p-2 border-r border-gray-300 text-center font-mono text-xs text-gray-400 bg-gray-50">2</td>
                      <td className="p-2 border-r border-gray-300 font-bold">Laptop</td>
                      <td className="p-2 border-r border-gray-300 text-right font-mono">$800</td>
                      <td className="p-2 text-right font-mono">12</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-gray-300 text-center font-mono text-xs text-gray-400 bg-gray-50">3</td>
                      <td className="p-2 border-r border-gray-300 font-bold">Mouse</td>
                      <td className="p-2 border-r border-gray-300 text-right font-mono">$20</td>
                      <td className="p-2 text-right font-mono">45</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-gray-300 text-center font-mono text-xs text-gray-400 bg-gray-50">4</td>
                      <td className="p-2 border-r border-gray-300 font-bold">Keyboard</td>
                      <td className="p-2 border-r border-gray-300 text-right font-mono">$50</td>
                      <td className="p-2 text-right font-mono">18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              To put this exact information on a website, you translate those spreadsheet cells into standard HTML table elements:
            </p>

            {/* Equivalent HTML */}
            <div className="border-2 border-black bg-[#FAF8F5] p-3.5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between font-mono text-xs font-bold text-gray-700 uppercase">
                <span>Clean HTML Table Markup</span>
                <span>Semantic &amp; Portable</span>
              </div>
              <pre className="p-3 bg-white border border-black font-mono text-xs sm:text-sm text-black overflow-x-auto">
{`<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>$800</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td>$20</td>
      <td>45</td>
    </tr>
    <tr>
      <td>Keyboard</td>
      <td>$50</td>
      <td>18</td>
    </tr>
  </tbody>
</table>`}
              </pre>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              When added to your website and styled with a simple stylesheet, that HTML renders cleanly on screen:
            </p>

            {/* Web Output Preview */}
            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-2.5 bg-[#FAF8F5] border-b-2 border-black font-black text-xs uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-green-800">
                  <CheckCircle2 className="w-4 h-4 text-green-700 stroke-[2.5]" />
                  Rendered Web Output
                </span>
                <span className="font-mono text-xs text-gray-600">3 Products</span>
              </div>
              <div className="p-4 overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[360px]">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black">
                      <th className="p-2.5 font-black border-r border-black">Product</th>
                      <th className="p-2.5 font-black border-r border-black text-right">Price</th>
                      <th className="p-2.5 font-black text-right">Stock</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Laptop</td>
                      <td className="p-2.5 border-r border-black text-right font-mono">$800</td>
                      <td className="p-2.5 text-right font-mono">12</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Mouse</td>
                      <td className="p-2.5 border-r border-black text-right font-mono">$20</td>
                      <td className="p-2.5 text-right font-mono">45</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Keyboard</td>
                      <td className="p-2.5 border-r border-black text-right font-mono">$50</td>
                      <td className="p-2.5 text-right font-mono">18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 4: Why Convert Excel to HTML? */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Laptop className="w-6 h-6 stroke-[2.5]" />
              Why Convert Excel to HTML?
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Why not just attach the Excel file and tell site visitors to download it? Because forcing visitors to download a spreadsheet creates friction. People on smartphones might not have an Excel viewer installed, and downloading files interrupts reading.
            </p>

            <p className="text-sm sm:text-base text-gray-800">
              Converting Excel records into HTML tables is ideal for:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Publishing Product Catalogs</strong>
                <p className="text-gray-700">Display item models, dimensions, compatibility lists, and available variations directly on product pages.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Putting a Price List on a Website</strong>
                <p className="text-gray-700">Present tiered pricing, service packages, and hourly rates clearly without making potential clients hunt through a PDF.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Displaying Technical Specifications</strong>
                <p className="text-gray-700">Compare hardware specs, voltage requirements, or software system prerequisites side-by-side.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Publishing Schedules and Agendas</strong>
                <p className="text-gray-700">Display conference talk tracks, webinar timetables, sports fixtures, or company holiday calendars.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Knowledge Base Documentation</strong>
                <p className="text-gray-700">Provide reference lists of HTTP status codes, keyboard shortcuts, or company policy limits in your help center.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Public Summaries and Reports</strong>
                <p className="text-gray-700">Share quarterly earnings highlights, nonprofit donor acknowledgments, or benchmark comparisons with stakeholders.</p>
              </div>
            </div>
          </section>

          {/* Section 5: Different Ways to Convert */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <FileCode className="w-6 h-6 stroke-[2.5]" />
              Four Ways to Convert Excel to HTML
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Depending on the size of your spreadsheet and your technical comfort, there are four primary methods to accomplish the transition:
            </p>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Method 1 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black font-black uppercase text-sm sm:text-base block mb-1">
                  1. Writing the HTML Manually in a Code Editor
                </strong>
                <p className="text-gray-700 mb-2">
                  You open your code editor, create a <code className="font-mono text-xs bg-gray-100 px-1 border">&lt;table&gt;</code>, and manually type every row and cell tag while looking at your Excel window.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-green-50 border border-green-300 text-green-950">
                    <strong>Advantage:</strong> 100% control over every tag, class, and attribute.
                  </div>
                  <div className="p-2 bg-red-50 border border-red-300 text-red-950">
                    <strong>Disadvantage:</strong> Slow, tedious, and error-prone. A 40-row spreadsheet requires typing hundreds of tags manually.
                  </div>
                </div>
              </div>

              {/* Method 2 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black font-black uppercase text-sm sm:text-base block mb-1">
                  2. Using Excel's "Save As Web Page (.htm)" Feature
                </strong>
                <p className="text-gray-700 mb-2">
                  In Microsoft Excel, you go to <em>File &rarr; Save As &rarr; Web Page (*.htm, *.html)</em>. Excel saves an HTML file on your computer.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-green-50 border border-green-300 text-green-950">
                    <strong>Advantage:</strong> Works natively right inside Excel without using external websites or tools.
                  </div>
                  <div className="p-2 bg-amber-50 border border-amber-300 text-amber-950">
                    <strong>Disadvantage:</strong> Excel exports notoriously messy code. It adds thousands of lines of obsolete Office XML tags, legacy inline styles, and proprietary Microsoft comments that bloat your page and fight with your website's CSS.
                  </div>
                </div>
              </div>

              {/* Method 3 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black font-black uppercase text-sm sm:text-base block mb-1">
                  3. Exporting to CSV and Using an Automated Script
                </strong>
                <p className="text-gray-700 mb-2">
                  You save the Excel worksheet as a comma-separated file (<code className="font-mono text-xs bg-gray-100 px-1 border">.csv</code>) and run a Python script, bash command, or regex replacement to wrap items in HTML tags.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-green-50 border border-green-300 text-green-950">
                    <strong>Advantage:</strong> Great for automated developer pipelines or repeating batch conversions daily.
                  </div>
                  <div className="p-2 bg-red-50 border border-red-300 text-red-950">
                    <strong>Disadvantage:</strong> Requires programming skills. Simple scripts easily break when cells contain commas, quotes, or line breaks. Learn more in our guide on{' '}
                    <Link href="/guides/how-to-convert-csv-to-html" className="underline font-bold text-black hover:text-gray-800">
                      how to convert CSV to HTML
                    </Link>.
                  </div>
                </div>
              </div>

              {/* Method 4 */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black font-black uppercase text-sm sm:text-base block mb-1">
                  4. Copying Data into a Visual Table Generator (Recommended)
                </strong>
                <p className="text-gray-700 mb-2">
                  You highlight your cells in Excel, press <kbd className="font-mono text-xs bg-gray-100 px-1 border">Ctrl+C</kbd> / <kbd className="font-mono text-xs bg-gray-100 px-1 border">Cmd+C</kbd>, paste them directly into a table builder, inspect the live visual grid, and click one button to copy clean HTML.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-green-50 border border-green-300 text-green-950">
                    <strong>Advantage:</strong> Fast, produces clean semantic HTML without proprietary bloat, handles tabs/commas automatically, and lets you verify column headers visually before publishing.
                  </div>
                  <div className="p-2 bg-gray-50 border border-gray-300 text-gray-700">
                    <strong>Disadvantage:</strong> Best suited for individual tables rather than automated pipelines processing hundreds of files per hour.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: What Happens to Excel Formatting? */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Palette className="w-5 h-5 stroke-[2.5]" />
              What Happens to Excel Formatting?
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              One of the most common surprises when converting spreadsheets is realizing that <strong>converting the data is not the same as converting the entire visual design</strong>.
            </p>

            <p className="text-sm sm:text-base text-gray-800">
              Here is what happens to specific Excel features when moving into HTML:
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-gray-800">
              <div className="p-3 bg-white border border-black">
                <strong className="text-black font-bold block mb-0.5">Cell Values</strong>
                <p className="text-gray-700">
                  Text, numbers, and dates convert easily. However, currency symbols and decimal places should be checked to make sure they did not lose their trailing zeros (e.g. <code className="font-mono text-xs">$20.00</code> turning into <code className="font-mono text-xs">20</code>).
                </p>
              </div>

              <div className="p-3 bg-white border border-black">
                <strong className="text-black font-bold block mb-0.5">Headers</strong>
                <p className="text-gray-700">
                  Excel does not formally mark row 1 as a semantic header tag. In HTML, your top row should be placed inside <code className="font-mono text-xs">&lt;thead&gt;</code> and use <code className="font-mono text-xs">&lt;th&gt;</code> tags rather than plain <code className="font-mono text-xs">&lt;td&gt;</code> cells.
                </p>
              </div>

              <div className="p-3 bg-white border border-black">
                <strong className="text-black font-bold block mb-0.5">Colors and Font Styling</strong>
                <p className="text-gray-700">
                  Bright fill colors, custom Calibri fonts, and cell backgrounds rarely translate directly—and that is usually a good thing! On a website, your table should inherit your site’s typography and color scheme through CSS rather than looking like an isolated piece of software dropped into a page.
                </p>
              </div>

              <div className="p-3 bg-white border border-black">
                <strong className="text-black font-bold block mb-0.5">Formulas</strong>
                <p className="text-gray-700">
                  Formulas do not run in static HTML tables. When you copy data from Excel, you are copying the <em>calculated resulting value</em>, not the live formula. If your underlying data changes in Excel, you will need to re-export the updated values.
                </p>
              </div>

              <div className="p-3 bg-white border border-black">
                <strong className="text-black font-bold block mb-0.5">Merged Cells (Colspan / Rowspan)</strong>
                <p className="text-gray-700">
                  Merged cells are common in Excel spreadsheets, but they can be tricky on the web. They require complex <code className="font-mono text-xs">colspan</code> or <code className="font-mono text-xs">rowspan</code> attributes and often cause responsive mobile layouts to break. Wherever possible, unmerge cells and keep column structures regular before exporting.
                </p>
              </div>

              <div className="p-3 bg-white border border-black">
                <strong className="text-black font-bold block mb-0.5">Column Widths</strong>
                <p className="text-gray-700">
                  Fixed pixel column widths from desktop Excel do not fit well on varying screen sizes (from 390px iPhones to 2560px monitors). Modern HTML tables work best when column widths are flexible or managed via CSS percentage rules.
                </p>
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-black text-xs text-amber-950 font-medium mt-1">
              <strong>Key Takeaway:</strong> A simple, clean HTML table styled by your website's CSS is dramatically easier to maintain and far more responsive than trying to force an entire spreadsheet's visual styling onto a webpage.
            </div>
          </section>

          {/* Section 7: Things to Check After Conversion */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <CheckSquare className="w-5 h-5 stroke-[2.5]" />
              Checklist: 7 Things to Verify After Converting
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Before you hit publish on your CMS or commit your code, run through this quick quality checklist:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-2.5">
                <Check className="w-4 h-4 text-green-700 stroke-[3] shrink-0 mt-0.5" />
                <div>
                  <strong>1. Headers are semantic:</strong> Make sure column titles use <code className="font-mono text-xs">&lt;th&gt;</code> tags rather than regular bolded cells.
                </div>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-2.5">
                <Check className="w-4 h-4 text-green-700 stroke-[3] shrink-0 mt-0.5" />
                <div>
                  <strong>2. Row and column counts match:</strong> Confirm that no stray commas or empty cells caused a row to shift sideways or drop its final value.
                </div>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-2.5">
                <Check className="w-4 h-4 text-green-700 stroke-[3] shrink-0 mt-0.5" />
                <div>
                  <strong>3. Numbers look correct:</strong> Verify that decimal points, currency marks ($ / € / £), and percentages were preserved properly. Check our guide on{' '}
                  <Link href="/guides/how-to-make-readable-table" className="underline font-bold text-black hover:text-gray-700">
                    how to make a readable table
                  </Link>{' '}
                  for alignment rules.
                </div>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-2.5">
                <Check className="w-4 h-4 text-green-700 stroke-[3] shrink-0 mt-0.5" />
                <div>
                  <strong>4. Special characters display properly:</strong> Ensure ampersands (<code className="font-mono text-xs">&amp;</code>), angle brackets (<code className="font-mono text-xs">&lt;</code>, <code className="font-mono text-xs">&gt;</code>), and quotation marks are properly escaped as HTML entities so they do not break markup.
                </div>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-2.5">
                <Check className="w-4 h-4 text-green-700 stroke-[3] shrink-0 mt-0.5" />
                <div>
                  <strong>5. Long text wraps gracefully:</strong> Verify that cells with lengthy descriptions do not stretch the table past the edge of the screen or get awkwardly clipped.
                </div>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-2.5">
                <Check className="w-4 h-4 text-green-700 stroke-[3] shrink-0 mt-0.5" />
                <div>
                  <strong>6. Table is responsive on mobile:</strong> Wrap your <code className="font-mono text-xs">&lt;table&gt;</code> in a container with horizontal scroll (<code className="font-mono text-xs">overflow-x: auto</code>) so mobile visitors can swipe smoothly. Learn how in our guide on{' '}
                  <Link href="/guides/how-to-make-a-table-mobile-friendly" className="underline font-bold text-black hover:text-gray-700">
                    making tables mobile-friendly
                  </Link>.
                </div>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-2.5">
                <Check className="w-4 h-4 text-green-700 stroke-[3] shrink-0 mt-0.5" />
                <div>
                  <strong>7. Clean structural tags:</strong> Verify that every opening <code className="font-mono text-xs">&lt;tr&gt;</code>, <code className="font-mono text-xs">&lt;td&gt;</code>, and <code className="font-mono text-xs">&lt;th&gt;</code> tag has a matching closing tag.
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Excel -> HTML Workflow */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Sparkles className="w-6 h-6 stroke-[2.5]" />
              The Practical 6-Step Workflow
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Here is the standard workflow web producers and developers follow when moving tables from Excel to a live site:
            </p>

            {/* Workflow Diagram / Steps */}
            <div className="border-2 border-black bg-[#FAF8F5] p-4 flex flex-col gap-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold text-black">
                <span className="px-2 py-0.5 bg-[#FFDE00] border border-black">EXCEL</span>
                <span>&rarr;</span>
                <span className="px-2 py-0.5 bg-white border border-black">CLEAN DATA</span>
                <span>&rarr;</span>
                <span className="px-2 py-0.5 bg-[#FFDE00] border border-black">CONVERT</span>
                <span>&rarr;</span>
                <span className="px-2 py-0.5 bg-white border border-black">CHECK</span>
                <span>&rarr;</span>
                <span className="px-2 py-0.5 bg-[#FFDE00] border border-black">COPY HTML</span>
                <span>&rarr;</span>
                <span className="px-2 py-0.5 bg-green-200 border border-black">PASTE IN SITE</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-white border border-black flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">1</span>
                <span><strong>Select your table in Excel:</strong> Highlight only the rows and columns you actually want on the webpage (excluding internal calculation scratchpads or raw database keys).</span>
              </div>

              <div className="p-3 bg-white border border-black flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">2</span>
                <span><strong>Clean the data:</strong> Unmerge any merged headers, remove empty trailing rows, and verify column spelling. Follow our{' '}
                  <Link href="/guides/how-to-clean-up-a-table" className="underline font-bold text-black hover:text-gray-700">
                    table cleanup guide
                  </Link>{' '}
                  for best practices.</span>
              </div>

              <div className="p-3 bg-white border border-black flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">3</span>
                <span><strong>Copy and paste into converter:</strong> Copy the selected cells (<kbd className="font-mono text-xs bg-gray-100 px-1 border">Ctrl+C</kbd>) and paste them into a table builder or generator.</span>
              </div>

              <div className="p-3 bg-white border border-black flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">4</span>
                <span><strong>Review in interactive preview:</strong> Set numeric columns to right-aligned, ensure headers are detected, and review the visual layout.</span>
              </div>

              <div className="p-3 bg-white border border-black flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">5</span>
                <span><strong>Export clean HTML:</strong> Click the HTML export button and copy the generated markup to your clipboard.</span>
              </div>

              <div className="p-3 bg-white border border-black flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">6</span>
                <span><strong>Paste into your CMS:</strong> Paste the HTML into your WordPress Custom HTML block, Webflow embed, Ghost editor, or static template.</span>
              </div>
            </div>
          </section>

          {/* Section 9: TABLEGUY Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLEGUY
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Paste Spreadsheet Cells, Export Clean HTML
              </h3>
              <p className="text-sm font-medium text-gray-700">
                When you need to turn Excel data into an HTML table without digging through bloated export code or typing tags manually, TABLEGUY gives you a fast, lightweight visual workbench. Paste cells directly from Excel, clean up columns, set alignments, and copy ready-to-use HTML table code in seconds.
              </p>
            </div>

            <BrutalButton
              id="guide-excel-to-html-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 10: 4 Useful FAQs */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can Excel be converted to HTML?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. Because both Excel and HTML structure information into rectangular rows and columns, spreadsheet data can be converted into standard <code className="font-mono text-xs bg-gray-100 p-0.5 border">&lt;table&gt;</code>, <code className="font-mono text-xs bg-gray-100 p-0.5 border">&lt;tr&gt;</code>, and <code className="font-mono text-xs bg-gray-100 p-0.5 border">&lt;td&gt;</code> tags either by copying and pasting into a table generator, saving as an HTML webpage from Excel, or using an online converter.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I turn an Excel table into HTML?
                </h3>
                <p className="text-sm text-gray-700">
                  The cleanest and fastest way is to highlight the table cells in Excel, copy them (<kbd className="font-mono text-xs bg-gray-100 px-1 border">Ctrl+C</kbd>), paste them into a tool like TABLEGUY, inspect the preview to ensure column headers are set, and click Export HTML. You can then paste that markup directly into your website's CMS or template.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Does Excel formatting convert to HTML?
                </h3>
                <p className="text-sm text-gray-700">
                  The data values, numbers, and basic row/column structure convert easily, but complex Excel formatting—like proprietary cell colors, custom fonts, conditional formatting, and live formulas—does not convert directly into clean HTML. Instead, modern websites use CSS styles to ensure tables look cohesive with the rest of the site design.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I put an Excel table on a website?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes, absolutely. By converting the spreadsheet data into an HTML table, you can embed it into any CMS (like WordPress, Ghost, or Webflow) or static site framework. It will load instantly for visitors on mobile devices and computers without requiring anyone to download a file. Learn more about website table design in our guide on{' '}
                  <Link href="/guides/when-to-use-html-tables" className="underline font-bold text-black hover:text-gray-700">
                    when should you use HTML tables
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
                href="/guides/how-to-convert-csv-to-html"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Also check: How to Convert CSV to HTML
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
