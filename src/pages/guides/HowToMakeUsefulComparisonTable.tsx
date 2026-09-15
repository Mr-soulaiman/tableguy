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
  Scale,
  AlertTriangle,
  Laptop,
  Check,
  Smartphone,
  Building,
  Wrench,
  HelpCircle,
} from 'lucide-react';

export const HowToMakeUsefulComparisonTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Make a Comparison Table That Actually Helps | TABLEGUY"
        description="Learn how to build comparison tables that clarify decisions instead of overwhelming readers. Practical methods, laptop examples, templates, and key rules."
        canonicalPath="/guides/how-to-make-useful-comparison-table"
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
            How to Make a Comparison Table That Actually Helps
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
            How to Make a Comparison Table That Actually Helps
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Most comparison tables don't help people decide. They dump thirty obscure technical specifications into a massive grid and leave the reader more exhausted than when they started. Here is how to design comparison tables that genuinely clarify choices.
          </p>
        </header>

        {/* Main Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The Problem with Specification Dumps */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 stroke-[2.5] text-red-600" />
              The Specification Dump Trap
            </h2>

            <p>
              We have all seen product comparison pages that look like an engineering spreadsheet from 1998.
            </p>

            <p>
              You want to buy a lightweight laptop for university or remote work. You click "Compare Models", and you are hit with a grid of 24 rows: <em>PCIe Gen 4.0 x4 vs Gen 3.0 x2 lanes, LPDDR5 6400MHz vs LPDDR5X 7500MHz, TPM 2.0 revision chips, 300-nit vs 350-nit 62.5% sRGB panels, and exact millimeter chassis dimensions</em>.
            </p>

            <p>
              Does any of this help you know if the laptop will fit comfortably in your backpack and last through an afternoon of classes? Not at all.
            </p>

            <p>
              A huge comparison table gives the illusion of being comprehensive, but in reality, it induces decision paralysis. When everything is listed with equal visual weight, the reader cannot tell which differences actually matter.
            </p>
          </section>

          {/* Section 2: BAD Example vs BETTER Example */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Scale className="w-6 h-6 stroke-[2.5]" />
              A Tale of Two Tables: Comparing 3 Laptops
            </h2>

            {/* Bad Table Example */}
            <div className="border-2 border-red-600 bg-red-50/50 p-4 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 font-black uppercase text-xs text-red-800">
                <XCircle className="w-4 h-4 text-red-600" />
                The Bad Version: Bloated Specification Overload
              </div>
              <p className="text-xs text-red-900">
                Notice how many obscure rows add zero value for someone who just needs a dependable daily machine:
              </p>

              <div className="border border-red-300 bg-white overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead className="bg-red-100 border-b border-red-300 font-bold">
                    <tr>
                      <th className="p-2 border-r border-red-200">Specification</th>
                      <th className="p-2 border-r border-red-200">ApexBook 14</th>
                      <th className="p-2 border-r border-red-200">SwiftAir X</th>
                      <th className="p-2">ProBook Elite</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-red-100 text-gray-700">
                    <tr>
                      <td className="p-2 font-mono text-gray-500 border-r border-red-200">Bluetooth Version</td>
                      <td className="p-2 border-r border-red-200">v5.3 Low Energy</td>
                      <td className="p-2 border-r border-red-200">v5.2 Dual Stream</td>
                      <td className="p-2">v5.3 EDR capable</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-mono text-gray-500 border-r border-red-200">Audio Codec</td>
                      <td className="p-2 border-r border-red-200">Realtek ALC3287</td>
                      <td className="p-2 border-r border-red-200">Synaptics CX11880</td>
                      <td className="p-2">Realtek ALC3287</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-mono text-gray-500 border-r border-red-200">PCIe Lane Bus</td>
                      <td className="p-2 border-r border-red-200">NVMe M.2 2280 4x</td>
                      <td className="p-2 border-r border-red-200">NVMe M.2 2242 4x</td>
                      <td className="p-2">NVMe M.2 2280 4x</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-mono text-gray-500 border-r border-red-200">Chassis Screws</td>
                      <td className="p-2 border-r border-red-200">Torx T5 (x8)</td>
                      <td className="p-2 border-r border-red-200">Torx T5 (x6)</td>
                      <td className="p-2">Phillips #00 (x10)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-red-700 italic">
                Unless you are a repair technician ordering replacement screws, this information actively gets in the way of making a purchasing decision.
              </p>
            </div>

            {/* Better Table Example */}
            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-sm uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-green-800">
                  <CheckCircle2 className="w-4 h-4 text-green-700 stroke-[2.5]" />
                  The Better Version: Focused on Decision Drivers
                </span>
                <span className="text-xs font-mono font-bold text-gray-600">6 Useful Columns</span>
              </div>

              <div className="p-4 bg-white overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black">
                      <th className="p-2.5 font-black border-r border-black">Model</th>
                      <th className="p-2.5 font-black border-r border-black text-right">Price</th>
                      <th className="p-2.5 font-black border-r border-black">Battery Life</th>
                      <th className="p-2.5 font-black border-r border-black">Weight</th>
                      <th className="p-2.5 font-black border-r border-black">RAM / Storage</th>
                      <th className="p-2.5 font-black">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">ApexBook 14</td>
                      <td className="p-2.5 border-r border-black text-right font-mono font-bold">$699</td>
                      <td className="p-2.5 border-r border-black">9 hours</td>
                      <td className="p-2.5 border-r border-black">1.5 kg</td>
                      <td className="p-2.5 border-r border-black">16 GB / 512 GB</td>
                      <td className="p-2.5 text-gray-800">Budget students</td>
                    </tr>
                    <tr className="bg-yellow-50/50">
                      <td className="p-2.5 border-r border-black font-bold">SwiftAir X</td>
                      <td className="p-2.5 border-r border-black text-right font-mono font-bold">$949</td>
                      <td className="p-2.5 border-r border-black font-bold text-green-800">14 hours</td>
                      <td className="p-2.5 border-r border-black font-bold text-green-800">1.1 kg</td>
                      <td className="p-2.5 border-r border-black">16 GB / 512 GB</td>
                      <td className="p-2.5 font-bold text-black">Frequent travelers</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">ProBook Elite</td>
                      <td className="p-2.5 border-r border-black text-right font-mono font-bold">$1,299</td>
                      <td className="p-2.5 border-r border-black">11 hours</td>
                      <td className="p-2.5 border-r border-black">1.8 kg</td>
                      <td className="p-2.5 border-r border-black">32 GB / 1 TB</td>
                      <td className="p-2.5 text-gray-800">Heavy video editing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm text-gray-700">
              In 5 seconds, a student sees that the ApexBook is the most affordable, a frequent traveler spots the SwiftAir X for battery and low weight, and a creator realizes the ProBook Elite has double the RAM. That is what an effective comparison table does.
            </p>
          </section>

          {/* Section 3: The 7-Step Method */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                The 7 Rules for Building Useful Comparison Tables
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">1. Decide what decision the reader is trying to make</strong>
                <span className="text-gray-700">Before adding a column, ask: <em>"Will this help someone choose between Option A and Option B?"</em> If the answer is "probably not", leave it out.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">2. Pick only the features that actually affect that decision</strong>
                <span className="text-gray-700">If all three products have Bluetooth 5.3 and Wi-Fi 6, you don't need a row for Wi-Fi. It's a tie. Mention it in a quick sentence outside the table or omit it.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">3. Use exactly the same attributes for every option</strong>
                <span className="text-gray-700">Never write battery life in "hours" for Option A and "milliamp hours (mAh)" for Option B. Readers cannot easily convert units in their head while scanning.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">4. Keep units and wording consistent</strong>
                <span className="text-gray-700">Decide on your vocabulary: use either <code className="font-mono text-xs bg-white px-1 border">Included / Not included</code> or <code className="font-mono text-xs bg-white px-1 border">Yes / No</code> across the entire grid. Don't mix "Free", "Supported", "✓", and "Available".</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">5. Put the most important information first</strong>
                <span className="text-gray-700">Price and primary use case should appear immediately after the item name. Don't bury the price at column 9 on the far right edge.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">6. Keep explanations short</strong>
                <span className="text-gray-700">Cells should contain numbers, tags, or 2-to-4 word phrases. If a cell requires two paragraphs to explain an edge case, use a footnote link instead.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">7. Highlight differences without turning the table into a rainbow</strong>
                <span className="text-gray-700">Highlight at most one winning feature or recommended row with a subtle tint. If every cell is colored purple, orange, green, and blue, the highlights lose all meaning.</span>
              </div>
            </div>
          </section>

          {/* Section 4: Columns Depend on the Decision Domain */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              The Right Columns Depend on the Real Decision
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              A good comparison table adjusts its columns to what the buyer or reader genuinely prioritizes:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs sm:text-sm">
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Smartphone className="w-4 h-4 stroke-[2.5]" />
                  Choosing a Phone
                </div>
                <ul className="text-gray-700 space-y-1 list-disc pl-4">
                  <li><strong>Price</strong></li>
                  <li><strong>Battery life</strong> (hours of screen time)</li>
                  <li><strong>Storage</strong> (128GB vs 256GB)</li>
                  <li><strong>Camera quality</strong> (zoom/night mode)</li>
                  <li><strong>Screen size &amp; weight</strong></li>
                </ul>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Building className="w-4 h-4 stroke-[2.5]" />
                  Choosing a Hotel
                </div>
                <ul className="text-gray-700 space-y-1 list-disc pl-4">
                  <li><strong>Price per night</strong></li>
                  <li><strong>Distance to city center</strong></li>
                  <li><strong>Guest rating</strong> (e.g. 8.7/10)</li>
                  <li><strong>Room type</strong> (King bed / Twin)</li>
                  <li><strong>Included features</strong> (Free breakfast, Wi-Fi)</li>
                </ul>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Wrench className="w-4 h-4 stroke-[2.5]" />
                  Choosing a Power Tool
                </div>
                <ul className="text-gray-700 space-y-1 list-disc pl-4">
                  <li><strong>Price</strong></li>
                  <li><strong>Power / Voltage</strong> (18V vs 20V Max)</li>
                  <li><strong>Weight &amp; ergonomics</strong></li>
                  <li><strong>Battery platform compatibility</strong></li>
                  <li><strong>Intended use</strong> (DIY vs Jobsite)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Don't Let the Table Make the Decision For You */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Don't Let the Table Make the Decision for You
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              A table cannot tell a person what to value. It simply organizes the objective facts so the person can apply their own priorities.
            </p>

            <p className="text-sm sm:text-base text-gray-800">
              For example, one buyer might gladly pay an extra $300 to save 400 grams of backpack weight, while another buyer on a tight budget wants the cheapest option that turns on.
            </p>

            <p className="text-sm text-gray-700 italic">
              Avoid artificially declaring one product as the "Absolute Best for Everyone". Instead, label them by user type: <em>"Best for Travel"</em>, <em>"Best Value"</em>, or <em>"Best for High Performance"</em>.
            </p>
          </section>

          {/* Section 6: Common Comparison Mistakes */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 stroke-[2.5] text-amber-600" />
              Common Comparison Table Mistakes
            </h2>

            <div className="space-y-3 text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">1. Listing features where every single option is identical</strong>
                <p className="text-gray-700">
                  If all 4 software tiers include "SSL Encryption", having that row doesn't help anyone choose between Tier 1 and Tier 2. It wastes vertical space.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">2. Inconsistent checkmarks and crosses</strong>
                <p className="text-gray-700">
                  Using a green checkmark for "No hidden fees" and a red cross for "Free cancellation included" confuses readers because colors and checkmarks contradict each other.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">3. Comparing options with completely different categories</strong>
                <p className="text-gray-700">
                  Don't put a $250 smartphone in the same comparison table with a $1,500 flagship unless the specific goal is demonstrating budget compromises.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">4. Tables too wide for mobile screens</strong>
                <p className="text-gray-700">
                  Putting 8 products side-by-side means users have to scroll horizontally back and forth 15 times to understand one row. Limit comparisons to 3 or 4 choices at a time.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Reusable Comparison Template */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Reusable Comparison Table Template
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Copy this basic Markdown comparison layout into your notes or paste it into TABLEGUY to customize columns, highlight best choices, and export:
            </p>

            <div className="p-4 bg-gray-900 text-white font-mono text-xs sm:text-sm border-2 border-black overflow-x-auto shadow-[3px_3px_0px_0px_#000]">
              <pre className="whitespace-pre">
{`| Option    | Price   | Primary Benefit    | Key Limit        | Best For       |
|-----------|---------|--------------------|------------------|----------------|
| Option A  | $49     | Lowest price       | 5 GB storage     | Beginners      |
| Option B  | $89     | Balanced features  | 50 GB storage    | Most users     |
| Option C  | $149    | Unlimited capacity | Higher cost      | Power users    |`}
              </pre>
            </div>
          </section>

          {/* Section 8: TABLEGUY Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLEGUY
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Build a Clean Comparison Table in Seconds
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Need to compare software plans, products, or service tiers? Use TABLEGUY to structure your columns, add clean highlight tags, and export HTML, Markdown, or PDF with no design hassle.
              </p>
            </div>

            <BrutalButton
              id="guide-comparison-table-cta"
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
                  How many options should I compare in a single table?
                </h3>
                <p className="text-sm text-gray-700">
                  Three or four options is the sweet spot. When you compare seven products simultaneously, cognitive load spikes and the table overflows on smartphone displays.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Should options be columns or rows?
                </h3>
                <p className="text-sm text-gray-700">
                  For consumer websites comparing 3 products or pricing tiers, putting products as columns and features as rows is standard. If you have 15 items with only 4 attributes, putting products as rows is much easier to scroll through.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Are checkmarks and crosses better than text?
                </h3>
                <p className="text-sm text-gray-700">
                  Simple checkmarks are great for binary features (e.g. "Free shipping"). But for nuance (e.g. "Up to 5 users"), concise text is far more accurate than an oversimplified checkmark.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How can I make my comparison table easy to read on mobile?
                </h3>
                <p className="text-sm text-gray-700">
                  Keep column headers short, limit the number of columns to 5 or fewer, and ensure the table container supports smooth horizontal swiping. Read our full guide on{' '}
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
                href="/guides/turn-list-of-data-into-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Turn a List of Data Into a Table
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
