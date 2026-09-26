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
  Smartphone,
  Monitor,
  MoveHorizontal,
  Scissors,
  Check,
  WrapText,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';

export const HowToMakeTableMobileFriendly: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Make a Table Mobile-Friendly | TABLABLE"
        description="Learn how to make tables easier to read on phones. Practical tips for shorter text, fewer columns, responsive layouts, wrapping, and wide tables."
        canonicalPath="/guides/how-to-make-a-table-mobile-friendly"
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
            How to Make a Table Mobile-Friendly
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
            How to Make a Table Mobile-Friendly
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            A table looks immaculate on your wide 27-inch desktop monitor. Then you open the same link on your phone, and half the table disappears off into the void. Here is why wide tables struggle on smartphones and how to keep them genuinely readable.
          </p>
        </header>

        {/* Main Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The Screen Width Problem */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Smartphone className="w-6 h-6 stroke-[2.5]" />
              The Screen Width Reality Check
            </h2>

            <p>
              When you design a table on a laptop, you have 1,400 pixels of horizontal room to stretch out. You can easily add eight columns, generous margins, long product names, and full explanatory sentences.
            </p>

            <p>
              Then someone opens that table on an iPhone or Android phone held vertically. They only have about 360 to 400 pixels of width.
            </p>

            <p>
              Suddenly, one of two bad things happens: either the table is brutally shrunk down until the letters look like ants, or columns 5 through 8 are chopped off past the right edge of the screen with no indication that more data even exists.
            </p>

            <p>
              Making tables mobile-friendly is not about complicated programming hacks. It is about understanding how humans read on narrow glass screens.
            </p>
          </section>

          {/* Section 2: Why Tables Are Hard on Phones */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Why Tables Struggle on Small Screens
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Tables are naturally two-dimensional grids, but smartphones are narrow vertical scrolls. Here is what causes the friction:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">1. Too many side-by-side columns</strong>
                <p className="text-gray-700">
                  Fitting 7 columns across 380px gives each column barely 50px. That is only enough space for 4 or 5 characters before words are forced to break.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">2. Rambling cell text</strong>
                <p className="text-gray-700">
                  When a cell contains 30 words, it forces the entire row to stretch down into an awkward vertical tower that takes two full thumb-scrolls to get past.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">3. Fixed pixel widths</strong>
                <p className="text-gray-700">
                  Setting a table to <code className="font-mono text-xs bg-white px-1 border">width: 900px</code> forces the page itself to zoom out or overflow horizontally, ruining the layout for the entire website.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">4. Invisible overflow</strong>
                <p className="text-gray-700">
                  If there is no scrollbar or visual indicator, mobile readers will never know columns 6, 7, and 8 exist off-screen.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Keep the Table Simple (Fewer Columns) */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Scissors className="w-6 h-6 stroke-[2.5]" />
              The Most Important Rule: Keep It Simple
            </h2>

            <p>
              Before tweaking CSS or searching for complex JavaScript libraries, start with content pruning. <strong>Reducing unnecessary columns solves 80% of mobile table problems instantly.</strong>
            </p>

            <p>
              Look at this bloated customer order table built on desktop:
            </p>

            {/* Desktop Bloat Example */}
            <div className="border border-gray-300 bg-gray-50 p-3 overflow-x-auto text-xs">
              <div className="font-bold text-gray-500 uppercase text-[11px] mb-1.5">Desktop Version (8 Columns — Too Wide for Phones)</div>
              <table className="w-full text-left border-collapse min-w-[700px] bg-white border border-gray-300">
                <thead className="bg-gray-100 border-b border-gray-300 font-bold">
                  <tr>
                    <th className="p-2 border-r">Order ID</th>
                    <th className="p-2 border-r">Date</th>
                    <th className="p-2 border-r">Customer Name</th>
                    <th className="p-2 border-r">Email Address</th>
                    <th className="p-2 border-r">City</th>
                    <th className="p-2 border-r">Payment Method</th>
                    <th className="p-2 border-r">Total</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-gray-700">
                  <tr>
                    <td className="p-2 border-r font-mono">#4021</td>
                    <td className="p-2 border-r">Oct 12</td>
                    <td className="p-2 border-r font-bold">Omar Idrissi</td>
                    <td className="p-2 border-r text-gray-500">omar@example.com</td>
                    <td className="p-2 border-r">Casablanca</td>
                    <td className="p-2 border-r">Credit Card</td>
                    <td className="p-2 border-r font-mono font-bold">$140</td>
                    <td className="p-2 text-green-700 font-bold">Shipped</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              Does a mobile reader really need to see the customer's email address, payment method, and city right in this quick summary grid?
            </p>

            <p className="text-sm sm:text-base text-gray-800">
              By removing email and payment method, you instantly compress 8 columns down to 5. The table breathes easily and fits on narrow screens without sacrificing the core information:
            </p>

            {/* Streamlined Mobile Version */}
            <div className="border-2 border-black bg-white shadow-[3px_3px_0px_0px_#000] overflow-hidden">
              <div className="p-2.5 bg-[#FFDE00] border-b-2 border-black font-black text-xs uppercase flex items-center justify-between">
                <span>Pruned Version (5 Useful Columns)</span>
                <span className="font-mono text-xs">Mobile Friendly</span>
              </div>
              <div className="p-3 overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-black font-black">
                      <th className="p-2 border-r border-black">Order</th>
                      <th className="p-2 border-r border-black">Customer</th>
                      <th className="p-2 border-r border-black">Date</th>
                      <th className="p-2 border-r border-black text-right">Total</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2 border-r border-black font-mono">#4021</td>
                      <td className="p-2 border-r border-black font-bold">Omar I.</td>
                      <td className="p-2 border-r border-black">Oct 12</td>
                      <td className="p-2 border-r border-black text-right font-mono font-bold">$140</td>
                      <td className="p-2 text-green-700 font-bold">Shipped</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 4: Keep Text Short */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Keep Text Short Where Possible
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              On desktop, wordy sentences fit into wide columns unnoticed. On mobile, long phrases blow up table cell heights. Trim conversational chatter into concise labels:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-white border-2 border-black grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="text-red-700">
                  <strong className="block text-xs uppercase font-black mb-0.5">Too Wordy (Desktop habit):</strong>
                  <span className="bg-red-50 p-1 block border border-red-200">"Customer contacted us and requested that the order be delivered on Tuesday afternoon."</span>
                </div>
                <div className="text-green-800">
                  <strong className="block text-xs uppercase font-black mb-0.5">Clean &amp; Mobile-Optimized:</strong>
                  <span className="bg-green-50 p-1 block border border-green-200 font-bold">"Delivery: Tuesday PM"</span>
                </div>
              </div>

              <div className="p-3.5 bg-white border-2 border-black grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="text-red-700">
                  <strong className="block text-xs uppercase font-black mb-0.5">Too Wordy:</strong>
                  <span className="bg-red-50 p-1 block border border-red-200">"This item is currently out of stock and awaiting shipment from warehouse"</span>
                </div>
                <div className="text-green-800">
                  <strong className="block text-xs uppercase font-black mb-0.5">Clean &amp; Mobile-Optimized:</strong>
                  <span className="bg-green-50 p-1 block border border-green-200 font-bold">"Backordered (Awaiting restock)"</span>
                </div>
              </div>

              <div className="p-3.5 bg-white border-2 border-black grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="text-red-700">
                  <strong className="block text-xs uppercase font-black mb-0.5">Too Wordy:</strong>
                  <span className="bg-red-50 p-1 block border border-red-200">"United States of America"</span>
                </div>
                <div className="text-green-800">
                  <strong className="block text-xs uppercase font-black mb-0.5">Clean &amp; Mobile-Optimized:</strong>
                  <span className="bg-green-50 p-1 block border border-green-200 font-bold">"USA"</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Let Long Text Wrap */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <WrapText className="w-5 h-5 stroke-[2.5]" />
              Let Long Text Wrap (Never Cut It Off Silently)
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              One dangerous mistake web designers make is applying CSS rules like <code className="font-mono text-xs bg-white px-1 border">white-space: nowrap; overflow: hidden; text-overflow: ellipsis;</code> across entire table cells.
            </p>

            <p className="text-sm sm:text-base text-gray-800">
              When you do that, critical values get butchered into meaningless fragments: <code className="font-mono text-xs bg-white px-1 border">"Delivered to Apa..."</code>. Did it mean Apartment 4B or Apartment 12A? Your user has no way of knowing.
            </p>

            <p className="text-sm text-gray-800 font-medium">
              Important information should <strong>never disappear</strong> just because a screen is narrow. Allow text to wrap cleanly onto a second line.
            </p>
          </section>

          {/* Section 6: Horizontal Scrolling Can Be Completely Fine */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <MoveHorizontal className="w-6 h-6 stroke-[2.5]" />
              Horizontal Scrolling Can Be Completely Fine
            </h2>

            <p>
              A common myth is that <em>every single table on earth must squeeze onto a phone screen without scrolling</em>.
            </p>

            <p>
              That is simply not true. Some tables are comprehensive datasets by nature: accounting ledgers, medical trial logs, scientific comparisons, or multi-week sports fixtures. If you squeeze 10 columns into a 360-pixel mobile screen, you end up with 7-point microscopic text that causes eye strain.
            </p>

            <p>
              In these cases, <strong>smooth horizontal scrolling is far better than forced microscopic text</strong>.
            </p>

            <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              <strong className="text-black font-bold block mb-1">How to Do Horizontal Scrolling Right:</strong>
              <ul className="text-gray-700 text-sm space-y-1.5 list-disc pl-5">
                <li>Wrap the table inside a container with <code className="font-mono text-xs bg-gray-100 p-0.5 border">overflow-x: auto</code>.</li>
                <li>Make sure the scrolling stays <em>inside the table container</em>, so the rest of your website page doesn't shift sideways.</li>
                <li>Keep the first column (like the Item or Name) frozen on the left if your tool supports sticky columns, so readers keep their anchor point as they swipe.</li>
              </ul>
            </div>
          </section>

          {/* Section 7: How to Decide Which Columns Deserve Space */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              How to Decide Which Columns Deserve Space
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              When space is at a premium, rank your columns using the <strong>Must-Have vs. Nice-to-Have</strong> test:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-3.5 bg-green-50 border border-black">
                <strong className="text-green-900 block mb-1 font-bold text-sm">Must-Have Columns (Keep These):</strong>
                <ul className="text-gray-800 space-y-1 list-disc pl-4">
                  <li><strong>The Identifier:</strong> Name, Model, or SKU.</li>
                  <li><strong>The Decision Factor:</strong> Price, Date, or Status.</li>
                  <li><strong>The Primary Metric:</strong> Score or Quantity.</li>
                </ul>
              </div>

              <div className="p-3.5 bg-amber-50 border border-black">
                <strong className="text-amber-900 block mb-1 font-bold text-sm">Nice-to-Have Columns (Cut These First):</strong>
                <ul className="text-gray-800 space-y-1 list-disc pl-4">
                  <li>Internal IDs or database GUIDs.</li>
                  <li>Timestamp seconds (e.g. <code className="font-mono text-xs">14:22:19 UTC</code>).</li>
                  <li>Long paragraphs of notes.</li>
                  <li>Attributes where 95% of rows say the exact same thing.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: For Website Tables (Practical Rules) */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Simple Good Practices for Website Tables
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              If you publish tables on WordPress, Webflow, Shopify, or a custom site, remember these four ground rules:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black font-bold block mb-0.5">1. Always set responsive container overflow</strong>
                <p className="text-gray-700">
                  Add <code className="font-mono text-xs bg-gray-100 p-0.5 border">overflow-x: auto; -webkit-overflow-scrolling: touch;</code> to the parent element. This gives mobile users fluid touchscreen swiping.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black font-bold block mb-0.5">2. Maintain readable font sizes (At least 13–14px)</strong>
                <p className="text-gray-700">
                  Never drop body cell text below 13px just to avoid horizontal scrolling. If readers have to pinch-zoom to read the text, the layout has failed.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black font-bold block mb-0.5">3. Generous vertical padding</strong>
                <p className="text-gray-700">
                  Compact horizontal padding (<code className="font-mono text-xs bg-gray-100 p-0.5 border">px-2</code>) saves column width, but keep vertical padding comfortable (<code className="font-mono text-xs bg-gray-100 p-0.5 border">py-3</code>) so human thumbs don't accidentally tap the wrong row or link.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black font-bold block mb-0.5">4. Avoid fixed pixel column widths</strong>
                <p className="text-gray-700">
                  Let the browser allocate width based on cell contents, or use percentage widths with minimum limits (e.g. <code className="font-mono text-xs bg-gray-100 p-0.5 border">min-width: 100px</code>).
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Quick Mobile Table Checklist */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Quick Mobile Table Checklist
            </h2>

            <div className="space-y-2 text-xs sm:text-sm text-gray-800">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span>Did I trim non-essential columns down to 4–6?</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span>Are headers short and concise (1–2 words)?</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span>Is long text allowed to wrap naturally?</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span>Does the table container swipe smoothly on phone screens?</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span>Is the font size large enough to read without pinch-zooming?</span>
              </div>
            </div>
          </section>

          {/* Section 10: TABLABLE Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Build Clean, Mobile-Ready Tables Fast
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Use TABLABLE to prune unnecessary columns, adjust alignment, and export clean HTML and Markdown code with built-in responsive wrappers that look sharp on both phone and desktop screens.
              </p>
            </div>

            <BrutalButton
              id="guide-mobile-friendly-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 11: 4 Useful FAQs */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I make a table fit on mobile without breaking?
                </h3>
                <p className="text-sm text-gray-700">
                  The most reliable approach is to prune columns down to what is strictly necessary (4 to 5 columns), keep text short, and place the table inside an <code className="font-mono text-xs bg-gray-100 p-0.5 border">overflow-x: auto</code> container so any overflow swipes smoothly.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Should I remove columns specifically for mobile?
                </h3>
                <p className="text-sm text-gray-700">
                  If certain columns only provide secondary detail (like timestamp seconds or internal reference numbers), hiding them on small screens or omitting them altogether makes the mobile experience dramatically better.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Is horizontal scrolling bad for tables on mobile?
                </h3>
                <p className="text-sm text-gray-700">
                  No! For dense datasets, horizontal scrolling is widely accepted and preferred over shrinking the font to unreadable sizes. The only mistake is when horizontal scrolling leaks out and shifts the entire webpage layout sideways.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What font size should a mobile table use?
                </h3>
                <p className="text-sm text-gray-700">
                  A body size between 13px and 15px works best for mobile tables. Avoid dropping below 12px, as readers with standard vision will struggle to read numbers clearly. Check our guide on{' '}
                  <Link href="/guides/how-to-make-readable-table" className="underline font-bold text-black hover:text-gray-700">
                    how to make a table easy to read
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
                href="/guides/how-to-clean-up-a-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Clean Up a Table Before Sharing It
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
