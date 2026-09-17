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
  FileCode,
  FileSpreadsheet,
  Check,
  AlertTriangle,
  Code2,
  HelpCircle,
  Terminal,
  FileText,
} from 'lucide-react';

export const WhenToUseMarkdownTables: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="When Should You Use Markdown Tables? | TABLABLE"
        description="Learn when Markdown tables are useful, when to avoid them, and how to create simple readable tables for documentation, GitHub, notes, and more."
        canonicalPath="/guides/when-to-use-markdown-tables"
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
            When Should You Use Markdown Tables?
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="cyan" size="md">
              TABLE FORMATS
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              4 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            When Should You Use Markdown Tables?
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Markdown tables give you a clean, lightweight way to show structured data inside notes, README files, and documentation without writing messy code. Here is when they shine, when they fall short, and how to build one that looks great.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: Start With a Real Situation */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <FileCode className="w-6 h-6 stroke-[2.5]" />
              The Note-Taker's Dilemma
            </h2>

            <p>
              Imagine you are drafting a project README on GitHub, writing notes in Notion or Obsidian, or writing a technical user guide for your team.
            </p>

            <p>
              You need to present a handful of items side by side: maybe API parameters, keyboard shortcuts, team member roles, or plan tiers. You could write a bulleted list, but readers would have to scan line by line to compare attributes. A spreadsheet file would require an extra download, and raw HTML code would look like a jungle of tags inside your clean text editor.
            </p>

            <p>
              This is where <strong>Markdown tables</strong> fit in. They allow you to draw a structured table using plain keyboard characters that remain completely readable as plain text, yet instantly transform into a styled table whenever your document is previewed.
            </p>
          </section>

          {/* Section 2: What Is a Markdown Table? */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                What Is a Markdown Table?
              </h2>
            </div>

            <p className="text-gray-800 text-sm sm:text-base">
              Markdown is a simple way of formatting plain text using everyday symbols. A Markdown table uses vertical pipes (<code className="font-mono bg-gray-100 px-1 border border-black text-xs font-bold">|</code>) to separate columns and a row of hyphens (<code className="font-mono bg-gray-100 px-1 border border-black text-xs font-bold">---</code>) to separate the header row from the content.
            </p>

            <p className="text-gray-800 text-sm sm:text-base font-bold">
              Here is what raw Markdown table text looks like:
            </p>

            <div className="p-4 bg-gray-900 text-yellow-400 font-mono text-xs sm:text-sm border-2 border-black overflow-x-auto shadow-[2px_2px_0px_0px_#000]">
              <pre className="whitespace-pre">
{`| Name    | Subject | Grade |
|---------|---------|------:|
| Ahmed   | Math    |    15 |
| Sara    | Physics |    17 |
| Youssef | Math    |    12 |`}
              </pre>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-gray-800">
              <p>
                • <strong>The pipes (<code className="font-mono text-xs font-bold">|</code>)</strong> mark where one column ends and the next begins.
              </p>
              <p>
                • <strong>The second line (<code className="font-mono text-xs font-bold">|---|---|---:|</code>)</strong> is mandatory. It tells the reader that the first line is a header. The colon on the right (<code className="font-mono text-xs font-bold">---:</code>) tells it to right-align the numbers in that column.
              </p>
            </div>

            <p className="text-gray-800 text-sm font-bold mt-2">
              When rendered on a screen, that simple text automatically becomes:
            </p>

            {/* Visual Rendered Example */}
            <div className="border-2 border-black bg-white overflow-x-auto shadow-[2px_2px_0px_0px_#000]">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-2.5 font-black border-r-2 border-black">Name</th>
                    <th className="p-2.5 font-black border-r-2 border-black">Subject</th>
                    <th className="p-2.5 font-black text-right">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-medium">
                  <tr>
                    <td className="p-2.5 border-r-2 border-black font-bold">Ahmed</td>
                    <td className="p-2.5 border-r-2 border-black">Math</td>
                    <td className="p-2.5 font-mono text-right">15</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border-r-2 border-black font-bold">Sara</td>
                    <td className="p-2.5 border-r-2 border-black">Physics</td>
                    <td className="p-2.5 font-mono text-right">17</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border-r-2 border-black font-bold">Youssef</td>
                    <td className="p-2.5 border-r-2 border-black">Math</td>
                    <td className="p-2.5 font-mono text-right">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: When Markdown Tables Are a Great Choice */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 stroke-[2.5] text-green-700" />
              When Markdown Tables Are a Great Choice
            </h2>

            <p className="text-gray-800">
              Markdown tables are built for speed and plain-text convenience. They are the ideal tool in these common scenarios:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1 text-base">GitHub READMEs &amp; Repos</strong>
                <p className="text-gray-700">Perfect for listing project contributors, command flags, configuration settings, or browser compatibility grids.</p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1 text-base">Software Documentation</strong>
                <p className="text-gray-700">Documenting API parameters, endpoints, expected return status codes, and environment variables.</p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1 text-base">Notes Apps (Notion, Obsidian)</strong>
                <p className="text-gray-700">Quick personal notes, meeting attendee logs, workout splits, or study outlines that you want to read anywhere.</p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1 text-base">Quick Specification Grids</strong>
                <p className="text-gray-700">Comparing 3 to 4 items across simple columns like Price, Size, RAM, or Warranty without opening a spreadsheet.</p>
              </div>
            </div>
          </section>

          {/* Section 4: When Markdown Tables Are NOT the Best Choice */}
          <section className="p-6 bg-red-50 border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 stroke-[2.5] text-red-600" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                When You Should NOT Use Markdown Tables
              </h2>
            </div>

            <p className="text-gray-800 text-sm sm:text-base">
              Markdown was deliberately designed to be simple. That simplicity means it lacks advanced features. Avoid Markdown tables when you need:
            </p>

            <ul className="space-y-2 text-sm text-gray-800 list-disc pl-5">
              <li><strong>Merged cells:</strong> Markdown does not support spanning cells across multiple columns (<code className="font-mono text-xs">colspan</code>) or rows (<code className="font-mono text-xs">rowspan</code>). If your table has grouped sub-headers, you need an{' '}
                <Link href="/guides/when-to-use-html-tables" className="underline font-bold text-black hover:text-gray-700">
                  HTML table
                </Link>.</li>
              <li><strong>Very large datasets:</strong> Reading or editing a 50-row by 12-column table in plain text is a nightmare of text wrapping. Use CSV or Excel instead.</li>
              <li><strong>Formulas and math:</strong> Markdown cannot calculate sums, averages, or totals. It is purely static text.</li>
              <li><strong>Custom cell styling:</strong> You cannot easily set individual cell background colors, custom borders, or font sizes in standard Markdown.</li>
            </ul>
          </section>

          {/* Section 5: Markdown vs HTML */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Code2 className="w-6 h-6 stroke-[2.5]" />
              Markdown vs. HTML Tables: What's the Difference?
            </h2>

            <p className="text-gray-800">
              Both formats display tables on digital screens, but they prioritize opposite things:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <strong className="text-black font-black uppercase text-sm block mb-1">Markdown Table</strong>
                <p className="text-gray-700 mb-2">
                  Built for human readability in plain text. Minimal syntax, fast typing, perfect for documentation.
                </p>
                <div className="bg-gray-100 p-2 border border-black font-mono text-xs">
                  | Item | Price |<br />
                  |---|---:|<br />
                  | Coffee | $3.50 |
                </div>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <strong className="text-black font-black uppercase text-sm block mb-1">HTML Table</strong>
                <p className="text-gray-700 mb-2">
                  Built for total visual control on websites. Supports CSS styling, merged cells, and accessible aria attributes.
                </p>
                <div className="bg-gray-100 p-2 border border-black font-mono text-xs overflow-x-auto">
                  &lt;table&gt;&lt;tr&gt;&lt;th&gt;Item&lt;/th&gt;&lt;/tr&gt;...&lt;/table&gt;
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-700">
              Rule of thumb: If you are writing a document or note, use <strong>Markdown</strong>. If you are building a custom webpage layout or need merged cells, use <strong>HTML</strong>.
            </p>
          </section>

          {/* Section 6: Markdown vs CSV */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Markdown vs. CSV: Different Tools for Different Jobs
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              It's common to confuse CSV and Markdown because both are plain-text formats. But their purposes are completely different:
            </p>

            <div className="p-4 bg-[#FAF8F5] border border-black text-sm text-gray-800 space-y-2">
              <p>
                • <strong>CSV (Comma-Separated Values)</strong> is designed for <em>computers to move and store data</em>. Software like Excel, Python, or SQL databases import CSVs in milliseconds. (See our guide on{' '}
                <Link href="/guides/when-to-use-csv" className="underline font-bold text-black hover:text-gray-700">
                  when should you use CSV
                </Link>
                ).
              </p>
              <p>
                • <strong>Markdown tables</strong> are designed for <em>humans to read directly while editing text</em>.
              </p>
            </div>

            <p className="text-xs text-gray-600 italic">
              Analogy: CSV is like packing boxes for a moving truck (compact, efficient for machines). A Markdown table is a neatly arranged bookshelf for someone to look at.
            </p>
          </section>

          {/* Section 7: How to Make a Good Markdown Table */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              How to Write a Great Markdown Table
            </h2>

            <p className="text-gray-800">
              Follow these simple practical habits to keep your Markdown tables clean and easy to maintain:
            </p>

            <div className="space-y-3 text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">1. Keep column names short (1 to 2 words)</strong>
                <p className="text-gray-700">Long headers force plain-text lines to wrap awkwardly in code editors. Use <code className="font-mono text-xs">Cost</code> instead of <code className="font-mono text-xs">Total Estimated Cost Per User Per Month</code>.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">2. Keep cell contents concise</strong>
                <p className="text-gray-700">Never drop a full paragraph into a Markdown cell. If a detail requires three sentences of explanation, put a small note below the table.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">3. Align numbers to the right</strong>
                <p className="text-gray-700">Add a colon on the right side of the separator line (<code className="font-mono text-xs">---:</code>) for numeric columns. It lines up decimals and digit counts naturally.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">4. Limit tables to 3 to 6 columns</strong>
                <p className="text-gray-700">Anything wider than 6 columns will cause severe horizontal scrolling on mobile devices and narrow GitHub previews.</p>
              </div>
            </div>
          </section>

          {/* Section 8: Common Markdown Table Mistakes */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 stroke-[2.5] text-amber-600" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                Common Markdown Table Mistakes
              </h2>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-gray-800">
              <div className="p-3 bg-white border border-black">
                <strong className="text-red-700 font-black block">Mistake: Forgetting the separator row</strong>
                <span>If you don't include the line with hyphens (<code className="font-mono text-xs">|---|---|</code>) directly below the header, Markdown won't recognize it as a table and will render as raw text with vertical bars.</span>
              </div>

              <div className="p-3 bg-white border border-black">
                <strong className="text-red-700 font-black block">Mistake: Inconsistent pipe counts</strong>
                <span>Every row should have the same number of pipes. If row 1 has 3 columns and row 2 has 4, the parser gets confused and rows will shift.</span>
              </div>

              <div className="p-3 bg-white border border-black">
                <strong className="text-red-700 font-black block">Mistake: Putting line breaks inside a cell</strong>
                <span>Standard Markdown tables cannot have raw multi-line enters inside a single cell. Doing so breaks the table structure immediately.</span>
              </div>
            </div>
          </section>

          {/* Section 9: A Simple Rule to Remember */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 stroke-[3] text-black" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                A Simple Rule to Remember
              </h2>
            </div>

            <blockquote className="p-4 bg-[#FFDE00] border-2 border-black font-bold text-black text-base sm:text-lg">
              “Markdown is great when you want a table that is simple, portable, and readable as plain text.”
            </blockquote>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono font-bold text-center">
              <div className="p-2.5 bg-[#FAF8F5] border border-black">
                <span className="block text-black">Markdown</span>
                <span className="text-gray-600 font-normal">Notes &amp; Docs</span>
              </div>
              <div className="p-2.5 bg-[#FAF8F5] border border-black">
                <span className="block text-black">CSV</span>
                <span className="text-gray-600 font-normal">Data Transfer</span>
              </div>
              <div className="p-2.5 bg-[#FAF8F5] border border-black">
                <span className="block text-black">HTML</span>
                <span className="text-gray-600 font-normal">Websites &amp; CSS</span>
              </div>
              <div className="p-2.5 bg-[#FAF8F5] border border-black">
                <span className="block text-black">Sheets / Excel</span>
                <span className="text-gray-600 font-normal">Formulas &amp; Math</span>
              </div>
            </div>
          </section>

          {/* Section 10: Using TABLABLE */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Build Tables Visually, Export to Markdown
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Want to build the table visually instead of typing all those <code className="font-mono text-xs font-bold">|</code> characters? In TABLABLE, you can edit cells, add rows and columns, set alignments, and export clean Markdown with one click.
              </p>
            </div>

            <BrutalButton
              id="guide-markdown-tables-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Try TABLABLE</span>
            </BrutalButton>
          </section>

          {/* Section 11: FAQ */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What is a Markdown table used for?
                </h3>
                <p className="text-sm text-gray-700">
                  Markdown tables are primarily used in README files, GitHub repositories, software documentation, and note-taking apps like Notion and Obsidian to display simple comparisons and parameters cleanly in plain text.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can Markdown tables contain numbers?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes, absolutely. You can include numbers, decimals, currencies, and percentages. You can also align number columns to the right by placing a colon on the right side of the separator line (<code className="font-mono text-xs">---:</code>).
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can Markdown tables be used on GitHub?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. GitHub Flavored Markdown (GFM) has full native support for tables in README files, issue tickets, PR descriptions, and repository wikis.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I convert a table to Markdown?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. You can paste spreadsheet cells or CSV data directly into TABLABLE and export them instantly as clean Markdown syntax ready to paste into GitHub, Obsidian, or documentation.
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
                href="/guides/when-to-use-html-tables"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: When Should You Use HTML Tables?
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
