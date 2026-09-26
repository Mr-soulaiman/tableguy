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
  FileCode,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Code2,
  Check,
  FileSpreadsheet,
  Layers,
  FileText,
  Github,
  SplitSquareVertical,
} from 'lucide-react';

export const HowToConvertCsvToMarkdown: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Convert CSV to Markdown | TABLABLE"
        description="Learn how to convert CSV or spreadsheet data into a Markdown table for GitHub, documentation, notes, and other Markdown-based content."
        canonicalPath="/guides/how-to-convert-csv-to-markdown"
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
            How to Convert CSV to Markdown
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
              6 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How to Convert CSV to Markdown
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            You copied a CSV or spreadsheet full of data, but what you actually need is a clean Markdown table. Here is how to convert comma-separated values into GitHub-ready pipes and dashes without spending twenty minutes aligning hyphens by hand.
          </p>
        </header>

        {/* Main Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The Practical Situation */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6 stroke-[2.5]" />
              The Copy-Paste Friction
            </h2>

            <p>
              You copied a CSV or spreadsheet full of data, but what you actually need is a clean Markdown table.
            </p>

            <p>
              You might be preparing a <code className="font-mono text-xs bg-gray-100 px-1 border">README.md</code> for an open-source project on GitHub, documenting an API endpoint in your company wiki, writing technical notes in Obsidian, or updating documentation on a static site generator.
            </p>

            <p>
              When you paste raw CSV data into a Markdown file, you just get comma-separated lines. To turn that into a valid Markdown table by hand, you have to carefully insert a vertical pipe (<code className="font-mono text-xs bg-gray-100 px-1 border">|</code>) between every single cell, add a delimiter line of hyphens (<code className="font-mono text-xs bg-gray-100 px-1 border">| --- | --- |</code>) under the headers, and constantly adjust spacing so your editor doesn't look like a scrambled mess.
            </p>

            <p>
              Doing this manually for three rows is mildly annoying. Doing it for twenty rows is torture.
            </p>
          </section>

          {/* Section 2: What Is Markdown? */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <FileText className="w-5 h-5 stroke-[2.5]" />
              What Is a Markdown Table?
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Markdown is a lightweight, plain-text formatting syntax created to be readable as raw text while effortlessly rendering into rich formatting.
            </p>

            <p className="text-sm sm:text-base text-gray-800">
              In Markdown (specifically GitHub Flavored Markdown and CommonMark extensions), tables use vertical pipes to divide columns and a row of hyphens to separate the header row from body records:
            </p>

            <div className="border-2 border-black bg-[#FAF8F5] p-3.5">
              <div className="flex items-center justify-between font-mono text-xs font-bold text-gray-700 uppercase mb-2">
                <span>Markdown Syntax</span>
                <span>Pipes &amp; Hyphens</span>
              </div>
              <pre className="p-3 bg-white border border-black font-mono text-xs sm:text-sm text-black overflow-x-auto">
{`| Name | Score |
| --- | --- |
| Ahmed | 18 |
| Sara | 16 |`}
              </pre>
            </div>

            <p className="text-sm text-gray-700">
              When processed by a Markdown reader (like GitHub, GitLab, Notion, or Reddit), that simple syntax renders cleanly into a styled two-column visual grid:
            </p>

            <div className="border border-black bg-white max-w-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b border-black font-bold">
                    <th className="p-2 border-r border-black">Name</th>
                    <th className="p-2 text-right">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-2 border-r border-black font-bold">Ahmed</td>
                    <td className="p-2 text-right font-mono">18</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-black font-bold">Sara</td>
                    <td className="p-2 text-right font-mono">16</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Why Convert CSV to Markdown? */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Github className="w-6 h-6 stroke-[2.5]" />
              Where Markdown Tables Excel
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Why not just upload the CSV file as an attachment? Because readers don't want to download a file just to see six rows of information. Markdown tables embed information directly into reading flows:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">GitHub &amp; GitLab Readmes</strong>
                <p className="text-gray-700">Display configuration options, CLI commands, benchmark scores, or version compatibility right on your repository's front page.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Developer Documentation</strong>
                <p className="text-gray-700">Platforms like Docusaurus, VitePress, and MkDocs render Markdown tables natively for parameter references and error code indexes.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Personal Knowledge Bases</strong>
                <p className="text-gray-700">Tools like Obsidian, Logseq, and Notion support Markdown tables so your project plans stay 100% portable and future-proof.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Static Site Generators</strong>
                <p className="text-gray-700">Publishing blog posts or technical essays in Hugo, Astro, or Nextra without dealing with raw HTML table tags.</p>
              </div>
            </div>

            <p className="text-xs text-gray-600">
              Interested in knowing when Markdown is ideal versus HTML? Read our guide on{' '}
              <Link href="/guides/when-to-use-markdown-tables" className="underline font-bold text-black hover:text-gray-800">
                when should you use Markdown tables
              </Link>.
            </p>
          </section>

          {/* Section 4: Simple CSV to Markdown Example */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <SplitSquareVertical className="w-6 h-6 stroke-[2.5]" />
              Direct Example: From CSV to Markdown
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Here is standard comma-separated test score data:
            </p>

            <div className="border-2 border-black bg-[#FAF8F5] p-3.5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between font-mono text-xs font-bold text-gray-700 uppercase">
                <span>Raw CSV Source</span>
                <span>Plain text</span>
              </div>
              <pre className="p-3 bg-white border border-black font-mono text-xs sm:text-sm text-black overflow-x-auto">
{`Name,Score
Ahmed,18
Sara,16`}
              </pre>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              When converted to standard Markdown table formatting, each comma is replaced by a pipe delimiter, wrapped with outer pipes, and supplemented with the header separator:
            </p>

            <div className="border-2 border-black bg-[#FAF8F5] p-3.5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between font-mono text-xs font-bold text-gray-700 uppercase">
                <span>Equivalent Markdown Table</span>
                <span>Ready for GitHub</span>
              </div>
              <pre className="p-3 bg-white border border-black font-mono text-xs sm:text-sm text-black overflow-x-auto">
{`| Name  | Score |
| :---- | ----: |
| Ahmed |    18 |
| Sara  |    16 |`}
              </pre>
            </div>

            <div className="p-3.5 bg-yellow-50 border border-black text-xs sm:text-sm text-gray-800">
              <strong className="block text-black font-bold mb-1">Pro Tip on Column Alignment in Markdown:</strong>
              <p>
                Notice the colons in the separator line: <code className="font-mono text-xs bg-white px-1 border">:----</code> left-aligns text, while <code className="font-mono text-xs bg-white px-1 border">----:</code> right-aligns numbers. Using a colon on both sides (<code className="font-mono text-xs bg-white px-1 border">:---:</code>) centers the column.
              </p>
            </div>
          </section>

          {/* Section 5: Common Problems with CSV to Markdown Conversion */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 stroke-[2.5] text-amber-600" />
              Six Common Conversion Traps
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Converting between CSV and Markdown is straightforward until edge cases pop up:
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm">
                  1. The Pipe Collision Hazard (|)
                </strong>
                <p className="text-gray-700">
                  Because Markdown uses the pipe character (<code className="font-mono text-xs bg-white px-1 border">|</code>) to separate columns, if any cell in your spreadsheet contains a pipe (e.g. <code className="font-mono text-xs bg-white px-1 border">"Windows | Mac"</code>), the Markdown parser treats it as an extra column boundary. This shoves subsequent values into an unwanted ghost column.
                </p>
                <p className="text-gray-800 mt-1 font-bold">
                  Fix: You must escape the pipe with a backslash (<code className="font-mono text-xs bg-white px-1 border">\|</code>) or wrap the value in code backticks (<code className="font-mono text-xs bg-white px-1 border">`Windows | Mac`</code>).
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm">
                  2. Commas inside quoted CSV cells
                </strong>
                <p className="text-gray-700">
                  CSV wraps cells with commas in quotes: <code className="font-mono text-xs bg-white px-1 border">"Casablanca, Morocco",22</code>. Naive scripts that simply replace commas with pipes will turn that single city into two columns. A smart converter must parse CSV quotes properly.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm">
                  3. Multi-line text (Line Breaks inside cells)
                </strong>
                <p className="text-gray-700">
                  Markdown tables <strong>cannot contain literal line breaks</strong> within rows. In Markdown, a new line means a new table row. If a cell in your CSV contains a return, it will fracture your table. You must either replace the line break with a space or use an HTML <code className="font-mono text-xs bg-white px-1 border">&lt;br&gt;</code> tag inside the cell.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm">
                  4. Empty cells
                </strong>
                <p className="text-gray-700">
                  If your CSV has missing fields (<code className="font-mono text-xs bg-white px-1 border">Ahmed,,22</code>), the Markdown table must preserve the spacing: <code className="font-mono text-xs bg-white px-1 border">| Ahmed | | 22 |</code> or use an intentional placeholder like <code className="font-mono text-xs bg-white px-1 border">—</code> so column counts match exactly.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold text-sm">
                  5. Missing delimiter row
                </strong>
                <p className="text-gray-700">
                  A Markdown table will completely fail to render unless row 2 consists of dashes (<code className="font-mono text-xs bg-white px-1 border">| --- | --- |</code>). Without that delimiter line, GitHub renders the entire block as plain unstructured text.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: CSV vs Markdown Comparison Table */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Layers className="w-6 h-6 stroke-[2.5]" />
              CSV vs. Markdown at a Glance
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Both are lightweight text formats, but they are built for opposing jobs:
            </p>

            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-xs sm:text-sm uppercase flex items-center justify-between">
                <span>Format Feature Comparison</span>
                <span className="font-mono text-xs text-gray-600">CSV vs MD</span>
              </div>
              <div className="p-4 bg-white overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black font-black">
                      <th className="p-2.5 border-r border-black">Feature</th>
                      <th className="p-2.5 border-r border-black">CSV (Comma-Separated)</th>
                      <th className="p-2.5">Markdown Table</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Primary Purpose</td>
                      <td className="p-2.5 border-r border-black">Machine data transfer &amp; storage</td>
                      <td className="p-2.5">Human reading in docs &amp; notes</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Cell Delimiter</td>
                      <td className="p-2.5 border-r border-black font-mono">, (comma)</td>
                      <td className="p-2.5 font-mono">| (pipe)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Alignment Control</td>
                      <td className="p-2.5 border-r border-black text-gray-500">None (plain text)</td>
                      <td className="p-2.5 font-bold text-green-800">Left, Right, Center (:---:)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Visual Raw Readability</td>
                      <td className="p-2.5 border-r border-black text-gray-600">Low (wall of commas)</td>
                      <td className="p-2.5 font-bold text-green-800">High (aligned columns)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">File Compatibility</td>
                      <td className="p-2.5 border-r border-black">Excel, SQL, Python, R</td>
                      <td className="p-2.5">GitHub, Obsidian, Notion, Static Sites</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 7: Manual vs Automatic Conversion */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Manual Typing vs. Automatic Conversion
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Why shouldn't you just type Markdown tables by hand in VS Code or your text editor?
            </p>

            <p className="text-gray-800 text-sm sm:text-base">
              When a table has 4 columns and 15 rows, manually formatting it requires inserting 60 pipe characters, lining up padding spaces so your eyes can follow the columns, and ensuring no missing separators break the preview.
            </p>

            <p className="text-gray-800 text-sm sm:text-base">
              If you decide to add a new column later, you have to manually edit all 15 rows to add another pipe. Automatic converters eliminate this friction entirely: you paste your spreadsheet, click once, and get perfectly padded Markdown code with colons already positioned for right-aligned numbers.
            </p>
          </section>

          {/* Section 8: Practical 4-Step Workflow */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              The 4-Step Conversion Workflow
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-gray-800">
              <div className="p-3 bg-white border border-black flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">1</span>
                <span><strong>Copy data from spreadsheet:</strong> Highlight your cells in Excel or Google Sheets and copy (<kbd className="font-mono text-xs bg-gray-100 px-1 border">Ctrl+C</kbd> / <kbd className="font-mono text-xs bg-gray-100 px-1 border">Cmd+C</kbd>). This automatically copies tab-delimited or CSV text to your clipboard.</span>
              </div>
              <div className="p-3 bg-white border border-black flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">2</span>
                <span><strong>Paste into TABLABLE:</strong> Paste directly into the table generator import box.</span>
              </div>
              <div className="p-3 bg-white border border-black flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">3</span>
                <span><strong>Set alignments and check headers:</strong> Right-align numeric columns and ensure column headers are clean.</span>
              </div>
              <div className="p-3 bg-white border border-black flex items-center gap-3">
                <span className="w-6 h-6 bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">4</span>
                <span><strong>Copy Markdown:</strong> Click the Markdown export tab and paste straight into your <code className="font-mono text-xs bg-gray-100 px-1 border">README.md</code> or documentation.</span>
              </div>
            </div>
          </section>

          {/* Section 9: TABLABLE Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Turn CSV and Spreadsheets into Markdown Fast
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Stop wrestling with missing pipes and misaligned dashes. Paste your CSV or Excel rows into TABLABLE and get perfectly aligned, GitHub-ready Markdown tables in one click.
              </p>
            </div>

            <BrutalButton
              id="guide-csv-to-md-cta"
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
                  Can CSV be converted to Markdown?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. A CSV's rows map directly to Markdown rows, commas are replaced with pipe characters (<code className="font-mono text-xs bg-gray-100 p-0.5 border">|</code>), and a hyphen delimiter line (<code className="font-mono text-xs bg-gray-100 p-0.5 border">| --- | --- |</code>) is placed below the header row.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I turn CSV into a Markdown table?
                </h3>
                <p className="text-sm text-gray-700">
                  The simplest way is using an online generator like TABLABLE. Paste your raw CSV data, configure left/right alignment, and copy the clean Markdown output. You can also use VS Code extensions like Markdown All in One or Excel to Markdown converters.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can Excel data become Markdown?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. When you copy cells directly from Microsoft Excel or Google Sheets, the clipboard stores tab-separated text. Table generators accept both tab-separated spreadsheet copies and raw comma-separated CSV files equally.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Where can I use Markdown tables?
                </h3>
                <p className="text-sm text-gray-700">
                  Markdown tables are supported on GitHub, GitLab, Notion, Obsidian, Bitbucket, Reddit, Slack, and virtually every modern developer documentation framework (like Docusaurus, Nextra, Hugo, and Astro). Learn more about web tables in our guide on{' '}
                  <Link href="/guides/how-to-convert-csv-to-html" className="underline font-bold text-black hover:text-gray-700">
                    how to convert CSV to HTML
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
                href="/guides/csv-vs-excel-vs-html-vs-markdown"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Next: CSV vs Excel vs HTML vs Markdown
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
