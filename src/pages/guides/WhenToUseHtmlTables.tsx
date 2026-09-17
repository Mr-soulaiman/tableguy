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
  Globe,
  Layout,
  Smartphone,
  Sparkles,
  Eye,
  Store,
  Box,
} from 'lucide-react';

export const WhenToUseHtmlTables: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="When Should You Use HTML Tables? A Simple Guide | TABLABLE"
        description="Learn when HTML tables are useful, when to use them on a website, and when another format is a better choice."
        canonicalPath="/guides/when-to-use-html-tables"
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
            When Should You Use HTML Tables?
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
            When Should You Use HTML Tables?
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            If you want people to view, compare, and understand structured data directly on a webpage, HTML tables are how you do it. Here is when they make total sense, and when you should avoid them.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section: Opening Hook */}
          <section className="flex flex-col gap-4">
            <p>
              Imagine you have a list of service prices, weekly gym classes, or product specifications, and you want to put it on your website.
            </p>
            <p>
              You could write everything out as regular paragraphs:
            </p>

            <div className="p-4 bg-[#FAF8F5] border-2 border-black font-sans text-sm sm:text-base border-l-4 border-l-black">
              <p className="text-gray-700 italic">
                "Our Basic Plan costs $10 per month and gives you 5GB storage. Our Pro Plan is $25 per month with 50GB storage. Meanwhile, the Enterprise Plan is $60 per month with unlimited storage and 24/7 phone support..."
              </p>
            </div>

            <p>
              After about three sentences of reading that, your visitor's eyes start working overtime. Finding the price of the Pro Plan requires skimming back and forth through a paragraph.
            </p>
            <p>
              This is exactly why HTML tables exist: to let people compare related pieces of information side by side in seconds.
            </p>
          </section>

          {/* Section 1: What an HTML Table Actually Does */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                What an HTML Table Actually Does
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-800">
              An HTML table tells a web browser one simple thing: <em>"These pieces of information belong together in rows and columns."</em>
            </p>

            {/* Visual Mini Table */}
            <div className="border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000]">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-2.5 font-black border-r-2 border-black">Product</th>
                    <th className="p-2.5 font-black border-r-2 border-black">Price</th>
                    <th className="p-2.5 font-black">Stock</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-medium">
                  <tr>
                    <td className="p-2.5 border-r-2 border-black">Mouse</td>
                    <td className="p-2.5 border-r-2 border-black font-mono">$20</td>
                    <td className="p-2.5">15 in stock</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border-r-2 border-black">Keyboard</td>
                    <td className="p-2.5 border-r-2 border-black font-mono">$45</td>
                    <td className="p-2.5">8 in stock</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-700">
              To make that appear on a webpage, HTML uses just four basic building blocks:
            </p>

            <div className="border-2 border-black bg-black text-white p-4 font-mono text-xs sm:text-sm overflow-x-auto">
{`<table>
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Mouse</td>
    <td>$20</td>
  </tr>
</table>`}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              <div className="p-2 bg-[#FAF8F5] border border-black">
                <strong>&lt;table&gt;</strong>
                <span className="block text-gray-600 font-sans mt-0.5">The container</span>
              </div>
              <div className="p-2 bg-[#FAF8F5] border border-black">
                <strong>&lt;tr&gt;</strong>
                <span className="block text-gray-600 font-sans mt-0.5">A table row</span>
              </div>
              <div className="p-2 bg-[#FAF8F5] border border-black">
                <strong>&lt;th&gt;</strong>
                <span className="block text-gray-600 font-sans mt-0.5">A header cell</span>
              </div>
              <div className="p-2 bg-[#FAF8F5] border border-black">
                <strong>&lt;td&gt;</strong>
                <span className="block text-gray-600 font-sans mt-0.5">A data cell</span>
              </div>
            </div>
          </section>

          {/* Section 2: When HTML Tables Are Great */}
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 stroke-[2.5] text-black" />
              When HTML Tables Are Great
            </h2>

            <p className="text-gray-800">
              HTML tables shine whenever a visitor needs to scan multiple items and compare their details quickly:
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-lg font-black uppercase text-black mb-1.5">
                  1. Pricing Plans and Menus
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Whether comparing software tiers (Free vs. Pro vs. Enterprise) or listing lunch specials with portion sizes and prices, visitors want to see features and prices aligned in clean vertical columns.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-lg font-black uppercase text-black mb-1.5">
                  2. Product Feature Comparisons
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Comparing two smartphones? A table showing Battery Life, Screen Size, Camera Resolution, and Storage side-by-side lets shoppers make a decision in seconds without reading 1,000 words of prose.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-lg font-black uppercase text-black mb-1.5">
                  3. Schedules and Timetables
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Conference agendas, weekly school timetables, fitness class calendars, and train schedules rely entirely on the intersection of days (columns) and times (rows).
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-lg font-black uppercase text-black mb-1.5">
                  4. Scores, Results, and Rankings
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Exam grades, sports league standings, contest leaderboards, and sales summaries look natural and authoritative when laid out with bold headers and sorted ranks.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: When You Should NOT Use a Table */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <XCircle className="w-6 h-6 stroke-[2.5] text-black" />
              When You Should NOT Use an HTML Table
            </h2>

            <p className="text-gray-800">
              Tables are for <strong>data</strong>, not for page decoration. Avoid tables in these situations:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAF8F5] border-2 border-black">
                <h3 className="text-base font-black text-black mb-1">
                  Building your website's layout
                </h3>
                <p className="text-sm text-gray-700">
                  Decades ago, web designers used tables to position sidebars and headers. Today, that breaks mobile screens and accessibility tools. Use CSS Grid or Flexbox for layout instead.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black">
                <h3 className="text-base font-black text-black mb-1">
                  Long paragraphs of text
                </h3>
                <p className="text-sm text-gray-700">
                  If your cell contains three sentences or a full paragraph, a table feels cramped and clunky. Regular headings and paragraphs work much better for reading flow.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black">
                <h3 className="text-base font-black text-black mb-1">
                  Arranging photo galleries
                </h3>
                <p className="text-sm text-gray-700">
                  Putting pictures into table cells makes them rigid and hard to adapt to phone screens. Use a modern image grid instead.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black">
                <h3 className="text-base font-black text-black mb-1">
                  Simple numbered lists
                </h3>
                <p className="text-sm text-gray-700">
                  If you only have one piece of info per item (e.g. "Step 1: Download", "Step 2: Install"), a standard bulleted or numbered list is much cleaner.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FFDE00] border-2 border-black font-bold text-black text-sm sm:text-base">
              <strong>The Golden Rule:</strong> If you are comparing multiple related pieces of data, use a table. If you are structuring the page or writing a story, use normal text and layout tools.
            </div>
          </section>

          {/* Section 4: HTML Table vs CSV */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              HTML Table vs CSV: The Shop Window Analogy
            </h2>

            <p className="text-gray-800">
              People often ask whether they should use CSV or HTML. Think of it like this:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-2 font-black uppercase text-sm">
                  <Box className="w-4 h-4 stroke-[3]" />
                  CSV is the Shipping Box
                </div>
                <p className="text-sm text-gray-700">
                  Built to carry raw data safely between programs. Nobody expects the shipping box to look gorgeous; it just needs to protect the data.
                </p>
                <div className="p-2 bg-black text-[#FFDE00] font-mono text-xs overflow-x-auto mt-2">
                  Item,Price,Stock<br />
                  Mouse,20,15
                </div>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-2 font-black uppercase text-sm">
                  <Store className="w-4 h-4 stroke-[3]" />
                  HTML is the Shop Window
                </div>
                <p className="text-sm text-gray-700">
                  Built for human eyes. It has colors, clear borders, highlighted headers, and clickable links so visitors can browse comfortably.
                </p>
                <div className="p-2 bg-[#FAF8F5] border border-black font-sans text-xs mt-2 font-bold">
                  Mouse — $20 (15 in stock) [Add to Cart]
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: HTML vs Markdown */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              HTML Table vs Markdown: When Does It Matter?
            </h2>

            <p className="text-gray-800">
              Markdown tables (using pipes like <code className="font-mono text-sm bg-white border border-black px-1">| Product | Price |</code>) are great when you are typing documentation in GitHub, writing a quick blog draft, or taking notes in Obsidian.
            </p>
            <p className="text-sm text-gray-700">
              HTML tables give you ultimate control when you need custom styling:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-800">
              <li>Merging two columns across a header (<code className="font-mono text-xs">colspan="2"</code>).</li>
              <li>Adding clickable buttons, badges, or icons directly inside cells.</li>
              <li>Applying custom background colors, borders, and hover effects.</li>
            </ul>
          </section>

          {/* Section 6: Making Good HTML Tables (Bad vs Better) */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Design Tips: A Good Table Is More Than Grid Lines
            </h2>

            <p className="text-gray-800">
              A bad table is hard to read. A great table can be understood at a glance.
            </p>

            <div className="space-y-4">
              {/* Bad Example */}
              <div className="border-2 border-black bg-white overflow-hidden shadow-[2px_2px_0px_0px_#000]">
                <div className="p-2 bg-red-100 border-b-2 border-black text-xs font-black uppercase text-red-900 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 stroke-[3]" />
                  Messy: Overloaded Headers &amp; Verbose Cells
                </div>
                <div className="p-3 overflow-x-auto text-xs font-medium">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100 border-b border-black text-left">
                        <th className="p-2 border-r border-black">Product Name and Full Description</th>
                        <th className="p-2 border-r border-black">Price Including All Taxes and Fees</th>
                        <th className="p-2">Availability Status in Warehouse</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border-r border-black">Pro Wireless Ergonomic Mouse with 6 buttons</td>
                        <td className="p-2 border-r border-black">$29.99 USD per unit</td>
                        <td className="p-2">Currently 14 units available in stock</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Better Example */}
              <div className="border-2 border-black bg-white overflow-hidden shadow-[2px_2px_0px_0px_#000]">
                <div className="p-2 bg-green-100 border-b-2 border-black text-xs font-black uppercase text-green-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                  Clean: Short Headers &amp; Scannable Values
                </div>
                <div className="p-3 overflow-x-auto text-xs font-medium">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#FFDE00] border-b-2 border-black text-left">
                        <th className="p-2 font-black border-r-2 border-black">Product</th>
                        <th className="p-2 font-black border-r-2 border-black">Price</th>
                        <th className="p-2 font-black">Stock</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-black">
                      <tr>
                        <td className="p-2 border-r-2 border-black font-bold">Ergonomic Mouse</td>
                        <td className="p-2 border-r-2 border-black font-mono">$29.99</td>
                        <td className="p-2 font-bold text-green-700">14 in stock</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 mt-2">
              <li>Keep column headings down to 1–3 words.</li>
              <li>Right-align numbers and currency so decimals line up naturally.</li>
              <li>Don't cram 15 columns into a space where 5 or 6 tell the whole story.</li>
            </ul>
          </section>

          {/* Section 7: Mobile Considerations */}
          <section className="p-6 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 stroke-[2.5]" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                Keep Mobile Users in Mind
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-800">
              A wide table that looks great on a desktop monitor can turn into microscopic, unreadable text on a phone screen.
            </p>
            <p className="text-sm text-gray-700">
              The simplest fix is horizontal scrolling: wrap your table in a container with <code className="font-mono text-xs bg-[#FAF8F5] px-1 border border-black">overflow-x: auto</code>. That way, mobile readers can swipe smoothly across columns without the text collapsing into a broken mess.
            </p>
          </section>

          {/* Section 8: Quick Decision Checklist */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Quick Decision: Which Format Do You Need?
            </h2>

            <div className="space-y-2.5 text-sm sm:text-base font-bold text-gray-900">
              <div className="p-3 bg-white border border-black flex items-center justify-between flex-wrap gap-2">
                <span>"I want visitors to see and compare data on my website."</span>
                <span className="bg-[#FFDE00] px-2 py-0.5 border border-black text-black font-mono text-xs uppercase font-black">
                  Use HTML
                </span>
              </div>
              <div className="p-3 bg-white border border-black flex items-center justify-between flex-wrap gap-2">
                <span>"I want to transfer raw table data to another app."</span>
                <span className="bg-[#FFDE00] px-2 py-0.5 border border-black text-black font-mono text-xs uppercase font-black">
                  Use CSV
                </span>
              </div>
              <div className="p-3 bg-white border border-black flex items-center justify-between flex-wrap gap-2">
                <span>"I am writing plain text notes or a GitHub README."</span>
                <span className="bg-[#FFDE00] px-2 py-0.5 border border-black text-black font-mono text-xs uppercase font-black">
                  Use Markdown
                </span>
              </div>
              <div className="p-3 bg-white border border-black flex items-center justify-between flex-wrap gap-2">
                <span>"I need formulas, tax math, and multi-tab workbooks."</span>
                <span className="bg-[#FFDE00] px-2 py-0.5 border border-black text-black font-mono text-xs uppercase font-black">
                  Use Excel
                </span>
              </div>
            </div>
          </section>

          {/* Section 9: TABLABLE Connection */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Generate Clean HTML Tables Without Writing Code
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Writing <code className="font-mono text-xs">&lt;tr&gt;</code> and <code className="font-mono text-xs">&lt;td&gt;</code> tags by hand is tedious and error-prone. TABLABLE lets you build your table visually and copy clean, semantic HTML in one click.
              </p>
            </div>

            <BrutalButton
              id="guide-when-to-use-html-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 10: FAQ */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I put an HTML table on any website?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. Every modern website, blog, and CMS (including WordPress, Webflow, Shopify, and custom sites) supports standard HTML tables.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Is HTML better than CSV?
                </h3>
                <p className="text-sm text-gray-700">
                  For showing data on a webpage to human visitors, yes. For transferring raw data to another program or database, CSV is much better.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can HTML tables have custom colors and styles?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes! With CSS, you can customize header colors, alternating row zebra striping, borders, typography, and button links inside table cells.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Are HTML tables good on mobile phones?
                </h3>
                <p className="text-sm text-gray-700">
                  Tables with 2 to 4 columns look great on phones. For wider tables, making the container horizontally scrollable ensures all data remains legible without breaking the page layout.
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
              href="/guides/turn-messy-list-into-clean-table"
              className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
            >
              Next Guide: How to Turn a Messy List Into a Clean Table
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
