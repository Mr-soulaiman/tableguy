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
  Globe,
  Code2,
  FileCode,
  Smartphone,
  Check,
  AlertTriangle,
  HelpCircle,
  FileSpreadsheet,
} from 'lucide-react';

export const CreateTableForWebsite: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Create a Table for a Website | TABLEGUY"
        description="Learn how to build clean, responsive HTML tables for websites. Practical code examples, when to use tables, HTML vs Markdown vs CSV, and accessibility tips."
        canonicalPath="/guides/create-table-for-website"
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
            How to Create a Table for a Website
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
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How to Create a Table for a Website
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            You have pricing plans, event schedules, sports fixtures, or product specifications that need to live on a webpage. Here is how web tables work, how HTML table tags fit together, and how to keep tables readable on mobile devices.
          </p>
        </header>

        {/* Main Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: Realistic Situation */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Globe className="w-6 h-6 stroke-[2.5]" />
              Putting Structured Information on the Web
            </h2>

            <p>
              It happens to almost everyone building or updating a website.
            </p>

            <p>
              You have a list of services with pricing tiers, a conference speaker schedule, or a comparison between two subscription options. You want website visitors to read and understand this information quickly, without wading through endless paragraphs of prose.
            </p>

            <p>
              If you try to write this out as plain bullet points or space-aligned text, it falls apart. On mobile devices, lines wrap awkwardly, numbers no longer align, and readers lose track of which label belongs to which number.
            </p>

            <p>
              That is why HTML provides native table elements. When used for the right kind of content, an HTML table is one of the most accessible and effective tools on the entire internet.
            </p>
          </section>

          {/* Section 2: When to Use vs When NOT to Use */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              When Does a Website Table Make Sense?
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Tables have a very specific job on the web. Here is how to know when to use them and when to avoid them:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-green-50 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <strong className="text-green-900 text-sm sm:text-base block mb-2 font-black uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-700" />
                  Great Use Cases For Tables
                </strong>
                <ul className="text-gray-800 space-y-1.5 list-disc pl-5">
                  <li><strong>Product prices and fee structures</strong></li>
                  <li><strong>Hardware and product specifications</strong></li>
                  <li><strong>Conference and class schedules</strong></li>
                  <li><strong>Sports standings and race results</strong></li>
                  <li><strong>Tiered plan comparisons (Basic vs Pro)</strong></li>
                  <li><strong>Structured reference lookups (e.g. shipping rates)</strong></li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <strong className="text-red-900 text-sm sm:text-base block mb-2 font-black uppercase flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-red-600" />
                  When NOT to Use a Table
                </strong>
                <ul className="text-gray-800 space-y-1.5 list-disc pl-5">
                  <li><strong>Normal paragraphs of text:</strong> Use standard paragraph tags instead.</li>
                  <li><strong>Overall page layout:</strong> Decades ago, websites used tables for layouts. Modern sites use CSS Flexbox and Grid.</li>
                  <li><strong>Decorative photo galleries:</strong> Use responsive CSS image grids.</li>
                  <li><strong>Long storytelling or case studies:</strong> Prose needs linear reading space, not cell grids.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Simple HTML Table Example */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 stroke-[2.5]" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                A Simple HTML Table Example
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              HTML tables are built like LEGO blocks. Here is the simplest possible example:
            </p>

            <div className="p-4 bg-gray-900 text-white font-mono text-xs sm:text-sm border-2 border-black overflow-x-auto shadow-[3px_3px_0px_0px_#000]">
              <pre className="whitespace-pre">
{`<table>
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$700</td>
  </tr>
  <tr>
    <td>Keyboard</td>
    <td>$65</td>
  </tr>
</table>`}
              </pre>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              When the browser renders that code, it translates into this:
            </p>

            {/* Live rendered example */}
            <div className="border-2 border-black bg-white overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-2.5 font-black border-r-2 border-black">Product</th>
                    <th className="p-2.5 font-black">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-medium">
                  <tr>
                    <td className="p-2.5 border-r-2 border-black font-bold">Laptop</td>
                    <td className="p-2.5 font-mono">$700</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border-r-2 border-black font-bold">Keyboard</td>
                    <td className="p-2.5 font-mono">$65</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Beginner-Friendly HTML Tag Explanation */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Understanding the Core HTML Tags
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              You only need to understand four basic tags to write or edit any HTML table:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black font-mono text-sm block mb-1">
                  &lt;table&gt; ... &lt;/table&gt;
                </strong>
                <p className="text-gray-700">
                  The outer container that tells the browser: <em>"Everything inside this box is structured tabular data."</em>
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black font-mono text-sm block mb-1">
                  &lt;tr&gt; ... &lt;/tr&gt; (Table Row)
                </strong>
                <p className="text-gray-700">
                  Creates a horizontal row. Every item inside a <code className="font-mono text-xs bg-gray-100 px-1 border">&lt;tr&gt;</code> sits side-by-side on the same line.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black font-mono text-sm block mb-1">
                  &lt;th&gt; ... &lt;/th&gt; (Table Header)
                </strong>
                <p className="text-gray-700">
                  Defines a header cell. Browsers display <code className="font-mono text-xs bg-gray-100 px-1 border">&lt;th&gt;</code> text in <strong>bold</strong> by default. Crucially, screen readers use <code className="font-mono text-xs bg-gray-100 px-1 border">&lt;th&gt;</code> to read column titles to visually impaired users.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black font-mono text-sm block mb-1">
                  &lt;td&gt; ... &lt;/td&gt; (Table Data)
                </strong>
                <p className="text-gray-700">
                  Defines a standard data cell. This holds your numbers, text, status badges, or links.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Practical Website Considerations */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Practical Website Considerations
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Publishing a table on a live website is different from printing a paper sheet. Keep these web-specific rules in mind:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-gray-800">
              <li className="flex items-start gap-2.5">
                <Smartphone className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black">Handle Mobile Screens Gracefully:</strong>
                  <span>Wrap your <code className="font-mono text-xs bg-white px-1 border">&lt;table&gt;</code> in a wrapper with horizontal scrolling (e.g. <code className="font-mono text-xs bg-white px-1 border">overflow-x: auto</code>). This lets mobile users swipe cleanly through wide tables without breaking the rest of your website layout.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black">Don't Put Entire Paragraphs Into Cells:</strong>
                  <span>Cells that contain 50 words wrap into tall, awkward towers on smaller screens. Summarize thoughts into 3 to 6 words.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black">Limit Column Counts:</strong>
                  <span>Tables with 4 to 6 columns look gorgeous on both desktop and mobile. Tables with 12 columns become unreadable on anything smaller than a 27-inch desktop monitor.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black">Accessibility (A11y):</strong>
                  <span>Always use proper semantic tags (<code className="font-mono text-xs bg-white px-1 border">&lt;th&gt;</code> for headings and <code className="font-mono text-xs bg-white px-1 border">&lt;td&gt;</code> for data). This allows screen readers to announce: <em>"Price: $700"</em> instead of just reading disjointed numbers with no context.</span>
                </div>
              </li>
            </ul>
          </section>

          {/* Section 6: HTML vs Markdown vs CSV */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              HTML vs. Markdown vs. CSV: What's the Difference?
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              People often ask which format they should choose. It depends entirely on where your table is going to live:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs sm:text-sm">
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Globe className="w-4 h-4 stroke-[2.5]" />
                  HTML Table
                </div>
                <p className="text-gray-700">
                  <strong>The Web Native:</strong> Directly built into the code of websites, blogs, and custom apps. Supports custom colors, CSS borders, tooltips, buttons, and links.
                </p>
                <span className="font-mono text-xs text-blue-800 font-bold mt-auto">Use for: Live websites &amp; landing pages</span>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <FileCode className="w-4 h-4 stroke-[2.5]" />
                  Markdown Table
                </div>
                <p className="text-gray-700">
                  <strong>The Plain Text Favorite:</strong> Uses pipe characters (<code className="font-mono text-xs bg-gray-100 px-0.5">|</code>) and hyphens. Extremely easy to read in notes apps like Obsidian, Notion, or GitHub documentation.
                </p>
                <span className="font-mono text-xs text-purple-800 font-bold mt-auto">Use for: GitHub READMEs &amp; note apps</span>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <FileSpreadsheet className="w-4 h-4 stroke-[2.5]" />
                  CSV File
                </div>
                <p className="text-gray-700">
                  <strong>The Data Transport:</strong> Plain text separated by commas. No formatting, no fonts, no colors — just pure raw data ready to be imported into Excel or an SQL database.
                </p>
                <span className="font-mono text-xs text-amber-800 font-bold mt-auto">Use for: Data exports &amp; spreadsheets</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700">
              When your goal is to have a styled table render beautifully for human visitors inside a webpage, <strong>HTML</strong> is the standard format to use.
            </p>
          </section>

          {/* Section 7: TABLEGUY Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLEGUY
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Generate Clean HTML Table Code Visually
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Don't waste time typing out repetitive <code className="font-mono text-xs bg-white px-1 border">&lt;tr&gt;</code> and <code className="font-mono text-xs bg-white px-1 border">&lt;td&gt;</code> tags by hand. Build your table in TABLEGUY visually and export production-ready HTML with a single click.
              </p>
            </div>

            <BrutalButton
              id="guide-website-table-cta"
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
                  How do I make my HTML table responsive on mobile?
                </h3>
                <p className="text-sm text-gray-700">
                  The simplest approach is wrapping the table in a container with <code className="font-mono text-xs bg-gray-100 p-0.5 border">overflow-x: auto</code>. This enables smooth horizontal scrolling on mobile touchscreens without breaking your site's page margins.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I style HTML tables with CSS?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes! You can add borders, background colors, zebra stripes, padding, and font sizes using regular CSS or utility frameworks like Tailwind CSS.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Why should I use &lt;th&gt; instead of just bolding a &lt;td&gt;?
                </h3>
                <p className="text-sm text-gray-700">
                  While <code className="font-mono text-xs bg-gray-100 p-0.5 border">&lt;th&gt;</code> looks bold visually, its real power is accessibility. Screen readers recognize it as a column header and announce it when users navigate through data cells below.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I convert an Excel spreadsheet into website HTML?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. Simply copy the cells from Excel or Google Sheets, paste them into TABLEGUY, and copy the generated HTML code directly into your WordPress post, Webflow page, or HTML file.
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
                href="/guides/how-to-make-useful-comparison-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Make a Useful Comparison Table
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
