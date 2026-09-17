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
  SlidersHorizontal,
  Layers,
  HelpCircle,
  Check,
  Smartphone,
  Laptop,
  CheckSquare,
  Sparkles,
  Headphones,
  Car,
  Tv,
  Cloud,
  AlertTriangle,
} from 'lucide-react';

export const CompareProductsWithTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Compare Products Using a Table | TABLABLE"
        description="Learn how to create a simple product comparison table that puts prices, specs, and differences in one place. Avoid tab switching and make clear buying decisions."
        canonicalPath="/guides/compare-products-with-table"
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
            How to Compare Products Using a Table
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="pink" size="md">
              TABLES IN EVERYDAY LIFE
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How to Compare Products Using a Table
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            You are comparing three phones, laptops, or headphones and keep opening different pages because the important information is scattered everywhere. Here is how a simple comparison table puts the important differences in one place so you can decide with confidence.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: Relatable Situation */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Smartphone className="w-6 h-6 stroke-[2.5]" />
              The Tab-Switching Trap
            </h2>

            <p>
              Picture this: You are deciding between three different gadgets. You have six browser tabs open. One retailer lists battery size in hours, another lists it in milliamp-hours (mAh), and the third doesn't mention battery life until page four of the PDF spec sheet.
            </p>

            <p>
              You keep clicking back and forth between tabs trying to remember: <em>"Wait, which one had 256 GB of storage for under $650?"</em>
            </p>

            <p>
              Your brain ends up doing heavy mental acrobatics just to compare three physical items.
            </p>

            <p>
              A table solves this immediately. It lines up the options side-by-side, strips away promotional hype, and reveals the genuine trade-offs between price and performance in seconds.
            </p>
          </section>

          {/* Section 2: Fictional Comparison Example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              A Clean Comparison Example
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Look at how easy decisions become when you put three fictional devices into a table:
            </p>

            {/* Markdown/Brutalist Table */}
            <div className="border-2 border-black bg-white overflow-x-auto shadow-[4px_4px_0px_0px_#000]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-3 font-black border-r-2 border-black">Product</th>
                    <th className="p-3 font-black border-r-2 border-black text-right">Price</th>
                    <th className="p-3 font-black border-r-2 border-black text-right">Battery</th>
                    <th className="p-3 font-black border-r-2 border-black text-right">Storage</th>
                    <th className="p-3 font-black text-right">Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-medium">
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold bg-[#FAF8F5]">Model A</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono font-bold">$600</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono">4,500 mAh</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono">128 GB</td>
                    <td className="p-3 text-right font-mono">190 g</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold bg-[#FAF8F5]">Model B</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono font-bold">$700</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono font-bold text-green-800">5,000 mAh</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono font-bold text-green-800">256 GB</td>
                    <td className="p-3 text-right font-mono">205 g</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold bg-[#FAF8F5]">Model C</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono font-bold text-green-800">$550</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono">4,000 mAh</td>
                    <td className="p-3 border-r-2 border-black text-right font-mono">128 GB</td>
                    <td className="p-3 text-right font-mono font-bold text-blue-800">180 g</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-700">
              In five seconds, the reality is clear: Model C is the cheapest and lightest ($550, 180 g), but has the smallest battery. Model B costs $100 more, but gives you double the storage (256 GB) and the biggest battery. No tab switching needed.
            </p>
          </section>

          {/* Section 3: The 7-Step Method to Build a Useful Comparison Table */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                How to Build a Great Comparison Table (7 Steps)
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">1. Decide what you're comparing</strong>
                <span className="text-gray-700">Narrow down your field to 2 to 4 candidates first. Trying to compare 15 products at once results in an unreadable spreadsheet rather than a clear decision.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">2. Choose the features that actually matter</strong>
                <span className="text-gray-700">Pick the 4 to 6 criteria that directly affect your wallet and your everyday use (e.g. Price, Battery, Weight, Key Feature).</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">3. Use the same features for every product</strong>
                <span className="text-gray-700">Never compare battery life for Product A while listing camera resolution for Product B. Every row must evaluate identical specifications.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">4. Keep units consistent</strong>
                <span className="text-gray-700">Don't mix pounds and kilograms, or hours and mAh. Standardize all numbers into the same measurement unit so they can be compared directly.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">5. Keep descriptions short</strong>
                <span className="text-gray-700">Use short labels like <code className="font-mono text-xs bg-white px-1 border">12 hrs</code> or <code className="font-mono text-xs bg-white px-1 border">Active Noise Canceling</code> instead of two-sentence marketing blurbs.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">6. Don't include every specification you can find</strong>
                <span className="text-gray-700">A table with 6 useful columns is vastly better than one with 25 columns. Cut obscure technical specs like packaging box dimensions or Bluetooth sub-version numbers.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">7. Make the important differences easy to spot</strong>
                <span className="text-gray-700">Use bold text or subtle color badges on the deciding wins (e.g., the lowest price or highest capacity) so the eye lands on them instantly.</span>
              </div>
            </div>
          </section>

          {/* Section 4: What Useful Columns to Use Across Different Products */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-1">
                What Columns Should You Pick? (6 Product Categories)
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Here are practical, field-tested column setups for common buying decisions. Notice how each focuses on decision drivers rather than manual specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs sm:text-sm">
              {/* Phones */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Smartphone className="w-4 h-4 stroke-[2.5]" />
                  Phones
                </div>
                <p className="text-gray-700 text-xs">
                  <strong>Useful columns:</strong> Model, Price, Battery (mAh/hrs), Storage, Screen Size, Camera.
                </p>
                <p className="text-gray-500 text-xs">
                  <em>Skip:</em> Antenna bands, GPU cores, box weight.
                </p>
              </div>

              {/* Laptops */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Laptop className="w-4 h-4 stroke-[2.5]" />
                  Laptops
                </div>
                <p className="text-gray-700 text-xs">
                  <strong>Useful columns:</strong> Model, Price, RAM, Storage (SSD), Weight, Battery Life.
                </p>
                <p className="text-gray-500 text-xs">
                  <em>Skip:</em> Exact trackpad dimensions, thermal paste brand.
                </p>
              </div>

              {/* Headphones */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Headphones className="w-4 h-4 stroke-[2.5]" />
                  Headphones
                </div>
                <p className="text-gray-700 text-xs">
                  <strong>Useful columns:</strong> Model, Price, Battery Life, Noise Canceling (ANC), Weight, Connection.
                </p>
                <p className="text-gray-500 text-xs">
                  <em>Skip:</em> Impedance curve in ohms, diaphragm diameter.
                </p>
              </div>

              {/* Cars */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Car className="w-4 h-4 stroke-[2.5]" />
                  Cars
                </div>
                <p className="text-gray-700 text-xs">
                  <strong>Useful columns:</strong> Make/Model, Price, Fuel Economy / Range, Cargo Space, Warranty.
                </p>
                <p className="text-gray-500 text-xs">
                  <em>Skip:</em> Spark plug model numbers, alternator amperage.
                </p>
              </div>

              {/* Appliances */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Tv className="w-4 h-4 stroke-[2.5]" />
                  Appliances
                </div>
                <p className="text-gray-700 text-xs">
                  <strong>Useful columns:</strong> Brand/Model, Price, Dimensions (W×D×H), Capacity, Noise Level (dB), Energy Rating.
                </p>
                <p className="text-gray-500 text-xs">
                  <em>Skip:</em> Motor patent numbers, factory country codes.
                </p>
              </div>

              {/* Software Plans */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex flex-col gap-2">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Cloud className="w-4 h-4 stroke-[2.5]" />
                  Software Plans
                </div>
                <p className="text-gray-700 text-xs">
                  <strong>Useful columns:</strong> Plan Name, Price/Month, User Seats, Storage Limit, Key Features, Support Level.
                </p>
                <p className="text-gray-500 text-xs">
                  <em>Skip:</em> Encryption cipher names, internal SLA clauses.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: How Many Products Should I Compare? */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              How Many Products Should I Compare?
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              There is no magic number, but comparing a small number at once — typically <strong>3 to 5 products</strong> — is vastly easier to read.
            </p>

            <p className="text-sm text-gray-700">
              When you put 15 products into a table, you lose the ability to compare them at a glance. You end up scrolling horizontally and vertically, which recreates the exact confusion you were trying to escape.
            </p>

            <div className="p-4 bg-white border border-black space-y-2 text-xs sm:text-sm">
              <strong className="text-black block font-bold">What to do if you have 12 products on your list:</strong>
              <p className="text-gray-700">
                1. <strong>Do a quick knockout round:</strong> Eliminate options that don't fit your non-negotiable criteria (e.g. anything over budget, wrong size, or missing a mandatory port).
              </p>
              <p className="text-gray-700">
                2. <strong>Group by tier:</strong> Compare 3 "Budget Picks" in one small table, and 3 "Premium Picks" in another.
              </p>
              <p className="text-gray-700">
                3. <strong>Build a final championship comparison:</strong> Take the winner of each group and put them into a final 3-row head-to-head table.
              </p>
            </div>
          </section>

          {/* Section 6: Comparison Table Mistakes */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 stroke-[2.5] text-amber-600" />
              Comparison Table Mistakes to Avoid
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Watch out for these seven common pitfalls that ruin otherwise good comparison tables:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">1. Comparing different features</strong>
                <span className="text-gray-700">Listing battery life for Product A and screen brightness for Product B. If you can't find a spec for all products, leave a dash (<code className="font-mono text-xs">-</code>).</span>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">2. Inconsistent units</strong>
                <span className="text-gray-700">Mixing <code className="font-mono text-xs">1 TB</code> and <code className="font-mono text-xs">512 GB</code> without standardizing, or mixing currencies (<code className="font-mono text-xs">$</code> vs <code className="font-mono text-xs">€</code>).</span>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">3. Too much text in cells</strong>
                <span className="text-gray-700">Writing multi-sentence paragraphs inside a single table cell. Summarize in 2–3 words and put long explanations in footnotes below.</span>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">4. Too many columns</strong>
                <span className="text-gray-700">Adding 14 columns creates horizontal scrollbars and squishes text awkwardly on mobile screens.</span>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">5. Unclear headings</strong>
                <span className="text-gray-700">Using cryptic acronyms only engineers know. Use plain words like "Battery Life" instead of "Pwr_Cap_Hr".</span>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">6. Confusing colors</strong>
                <span className="text-gray-700">Painting every cell in neon red, yellow, and green. Use color sparingly to mark one winner or one dealbreaker.</span>
              </div>

              <div className="p-3.5 bg-white border-2 border-black sm:col-span-2">
                <strong className="text-black block mb-1">7. Treating every feature as equally important</strong>
                <span className="text-gray-700">Price, safety, and battery life are usually 10x more important than the box color or sticker logo. Put critical criteria in the leftmost columns.</span>
              </div>
            </div>
          </section>

          {/* Section 7: Reusable Comparison Template */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Reusable Comparison Table Template
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Copy this standard template into your notes or markdown editor, then paste it directly into TABLABLE to adjust headers and fill in your options:
            </p>

            <div className="p-4 bg-gray-900 text-white font-mono text-xs sm:text-sm border-2 border-black overflow-x-auto shadow-[3px_3px_0px_0px_#000]">
              <pre className="whitespace-pre">
{`| Product   | Price   | Primary Feature | Secondary Feature | Battery / Lifespan | Winner Takeaway |
|-----------|---------|-----------------|-------------------|--------------------|-----------------|
| Option A  | $99.00  | Spec A          | Value A           | 10 hrs             | Best Value      |
| Option B  | $149.00 | Spec B          | Value B           | 16 hrs             | Top Performance |
| Option C  | $79.00  | Spec C          | Value C           | 8 hrs              | Budget Pick     |`}
              </pre>
            </div>

            <p className="text-xs text-gray-600 italic">
              Tip: Swap out "Primary Feature" with whatever matters most to your decision (RAM, Storage, Capacity, Range, or Noise Canceling).
            </p>
          </section>

          {/* Section 8: Single Natural TABLABLE CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Build Your Product Comparison Table
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Ready to compare your top product contenders? Use TABLABLE to visually build, edit, and style your table. Highlight the winning model, right-align numbers, and export clean HTML, Markdown, or CSV.
              </p>
            </div>

            <BrutalButton
              id="guide-compare-products-cta"
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
                  How many products should I compare in one table?
                </h3>
                <p className="text-sm text-gray-700">
                  Between 3 and 5 products is the ideal range. Comparing fewer than two isn't a comparison, and comparing more than six causes information overload and awkward horizontal scrolling.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How many columns should a comparison table have?
                </h3>
                <p className="text-sm text-gray-700">
                  Aim for 4 to 6 columns: Product Name, Price, and 2 to 4 decisive features. This keeps the table readable on both mobile phones and desktop screens.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What if one product doesn't list a specific spec?
                </h3>
                <p className="text-sm text-gray-700">
                  Don't invent numbers or leave the cell completely empty. Place a neat dash (<code className="font-mono text-xs bg-gray-100 px-1 border">-</code>) or <code className="font-mono text-xs bg-gray-100 px-1 border">Unknown</code> so readers know the information was unavailable.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How can I make differences stand out visually?
                </h3>
                <p className="text-sm text-gray-700">
                  Right-align numerical values, keep units identical across rows, and use bold styling or a light accent tag on the best specification in each column. For formatting advice, check out our guide on{' '}
                  <Link href="/guides/how-to-make-readable-table" className="underline font-bold text-black hover:text-gray-700">
                    how to make a table easy to read
                  </Link>.
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
                href="/guides/make-table-from-excel-google-sheets"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Make a Table From Excel or Google Sheets
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
