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
  Boxes,
  Home,
  Store,
  ArrowRight,
  Package,
  Layers,
  Check,
  RotateCcw,
  Tag,
  AlertCircle,
} from 'lucide-react';

export const SimpleInventoryTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Create a Simple Inventory Table | TABLABLE"
        description="Learn how to create a simple inventory table for your home, business, workshop, office, or supplies. Includes useful columns and practical examples."
        canonicalPath="/guides/simple-inventory-table"
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
            How to Create a Simple Inventory Table
          </span>
        </nav>

        {/* Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="green" size="md">
              TABLES IN EVERYDAY LIFE
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              6 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How to Create a Simple Inventory Table
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Whether you run a growing boutique store, organize a garage workshop, or just want to know where your spare cables and winter gear live, you don't need expensive enterprise software. A straightforward inventory table gives you total clarity in minutes.
          </p>
        </header>

        {/* Main Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The "Where Did I Put That?" Problem */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Boxes className="w-6 h-6 stroke-[2.5]" />
              The "Where Is That Item?" Problem
            </h2>

            <p>
              It starts with small annoyances. You buy a replacement HDMI cable at the store, only to discover three working ones buried in a plastic bin when you get home. Or you run a small online shop, promise a customer their order will ship by 4 PM, and then realize your physical stock shelf is completely empty.
            </p>

            <p>
              When physical items are scattered across cupboards, storage closets, workshop bins, or warehouse racks, relying on memory fails.
            </p>

            <p>
              Software vendors will try to sell you monthly subscriptions for heavy barcode scanners and enterprise warehouse suites. But for 90% of small teams and households, all you actually need is a clean, visible table.
            </p>
          </section>

          {/* Section 2: What Is an Inventory Table? */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Package className="w-5 h-5 stroke-[2.5]" />
              What Is an Inventory Table?
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Strip away the corporate jargon: <strong>an inventory table is simply a structured list of physical things you own, paired with useful details about each item</strong>.
            </p>

            <p className="text-gray-800 text-sm sm:text-base">
              Every row represents one specific item or product. Every column answers one specific practical question: What is it? How many do we have? Where is it sitting right now? What condition is it in?
            </p>
          </section>

          {/* Section 3: Which Columns Should You Use? */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Tag className="w-6 h-6 stroke-[2.5]" />
              Which Columns Should You Use?
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              You should never blindly include every column you can think of. Pick only what actually helps you manage your physical space:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">Item Name</strong>
                <p className="text-gray-700">The clear, everyday title of the item (e.g. <em>20W USB-C Charger</em>, not <em>Unit 3B</em>).</p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">Category</strong>
                <p className="text-gray-700">High-level group for filtering (e.g. <em>Electronics</em>, <em>Tools</em>, <em>Apparel</em>, <em>Packaging</em>).</p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">Quantity (Qty)</strong>
                <p className="text-gray-700">The exact count on hand. Numbers should always be right-aligned for rapid visual tallying.</p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">Location</strong>
                <p className="text-gray-700">Specific shelf, room, or bin (e.g. <em>Bin 4 - Attic</em> or <em>Shelf B - Top</em>). Be specific enough that anyone could walk over and find it.</p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">Status / Condition</strong>
                <p className="text-gray-700">Current readiness: <em>In Stock</em>, <em>Low Stock</em>, <em>Needs Repair</em>, or <em>Retired</em>.</p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">Price / Value (Optional)</strong>
                <p className="text-gray-700">Unit cost or selling price. Great for insurance lists or retail stock monitoring.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Home & Personal Inventory Example */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 stroke-[2.5]" />
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                Example 1: Home &amp; Storage Inventory
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              For tools, spare electronics, camping gear, or seasonal clothing stored in boxes, a simple 5-column layout eliminates duplicate buying and lost items:
            </p>

            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-xs sm:text-sm uppercase flex items-center justify-between">
                <span>Personal Household &amp; Workshop Tracker</span>
                <span className="font-mono text-xs text-gray-600">5 Columns</span>
              </div>
              <div className="p-4 bg-white overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black font-black">
                      <th className="p-2.5 border-r border-black">Item</th>
                      <th className="p-2.5 border-r border-black">Category</th>
                      <th className="p-2.5 border-r border-black text-right">Qty</th>
                      <th className="p-2.5 border-r border-black">Location</th>
                      <th className="p-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Desk Lamp</td>
                      <td className="p-2.5 border-r border-black">Electronics</td>
                      <td className="p-2.5 border-r border-black text-right font-mono font-bold">2</td>
                      <td className="p-2.5 border-r border-black">Bedroom Closet</td>
                      <td className="p-2.5 text-green-700 font-bold">Good</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Extension Cable (5m)</td>
                      <td className="p-2.5 border-r border-black">Electronics</td>
                      <td className="p-2.5 border-r border-black text-right font-mono font-bold">3</td>
                      <td className="p-2.5 border-r border-black">Garage Shelf 2</td>
                      <td className="p-2.5 text-green-700 font-bold">Good</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Paint Brushes Set</td>
                      <td className="p-2.5 border-r border-black">Tools</td>
                      <td className="p-2.5 border-r border-black text-right font-mono font-bold">5</td>
                      <td className="p-2.5 border-r border-black">Basement Bin A</td>
                      <td className="p-2.5 text-green-700 font-bold">Good</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Cordless Drill</td>
                      <td className="p-2.5 border-r border-black">Tools</td>
                      <td className="p-2.5 border-r border-black text-right font-mono font-bold">1</td>
                      <td className="p-2.5 border-r border-black">Workbench</td>
                      <td className="p-2.5 text-amber-600 font-bold">Needs Charge</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700">
              Notice how easily someone can scan the "Location" column. If someone asks "Do we have extra paint brushes?", the answer takes 3 seconds to find.
            </p>
          </section>

          {/* Section 5: Small Business Example */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <div className="flex items-center gap-2">
              <Store className="w-6 h-6 stroke-[2.5]" />
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                Example 2: Small Business Stock Table
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              For an artisan maker, online seller, or small storefront, inventory tracking directly protects your cash flow and delivery promises:
            </p>

            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-xs sm:text-sm uppercase flex items-center justify-between">
                <span>E-Commerce Product Stock List</span>
                <span className="font-mono text-xs text-gray-600">6 Columns</span>
              </div>
              <div className="p-4 bg-white overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black font-black">
                      <th className="p-2.5 border-r border-black">Product</th>
                      <th className="p-2.5 border-r border-black">SKU</th>
                      <th className="p-2.5 border-r border-black text-right">In Stock</th>
                      <th className="p-2.5 border-r border-black text-right">Unit Price</th>
                      <th className="p-2.5 border-r border-black">Reorder Level</th>
                      <th className="p-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Linen Tote Bag</td>
                      <td className="p-2.5 border-r border-black font-mono text-xs">BAG-LIN-01</td>
                      <td className="p-2.5 border-r border-black text-right font-mono font-bold">42</td>
                      <td className="p-2.5 border-r border-black text-right font-mono">$18.00</td>
                      <td className="p-2.5 border-r border-black font-mono text-xs">15 units</td>
                      <td className="p-2.5 text-green-700 font-bold">Healthy</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Ceramic Mug (Matte)</td>
                      <td className="p-2.5 border-r border-black font-mono text-xs">MUG-CER-04</td>
                      <td className="p-2.5 border-r border-black text-right font-mono font-bold">6</td>
                      <td className="p-2.5 border-r border-black text-right font-mono">$24.00</td>
                      <td className="p-2.5 border-r border-black font-mono text-xs">10 units</td>
                      <td className="p-2.5 text-amber-700 font-bold">Low Stock</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Notebook A5 Kraft</td>
                      <td className="p-2.5 border-r border-black font-mono text-xs">NTB-KRF-02</td>
                      <td className="p-2.5 border-r border-black text-right font-mono font-bold">0</td>
                      <td className="p-2.5 border-r border-black text-right font-mono">$12.00</td>
                      <td className="p-2.5 border-r border-black font-mono text-xs">20 units</td>
                      <td className="p-2.5 text-red-700 font-bold">Out of Stock</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700">
              The "Reorder Level" column tells you immediately when it is time to order more from suppliers before you run completely dry.
            </p>
          </section>

          {/* Section 6: Don't Track Too Much */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertCircle className="w-5 h-5 stroke-[2.5] text-amber-600" />
              The #1 Trap: Tracking Too Much Information
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              The fastest way an inventory system dies is when maintaining it becomes a chore.
            </p>

            <p className="text-sm sm:text-base text-gray-800">
              People often start with great enthusiasm and add 18 columns: Supplier Phone, Weight in Grams, Exact Shelf Coordinate, Warranty Expiration Date, Serial Number, Box Color, Last Modified Timestamp...
            </p>

            <p className="text-sm sm:text-base text-gray-800">
              Within two weeks, no one has the patience to fill in all 18 fields, so updates stop completely. Once updates stop, the table falls out of date, and everyone stops trusting it.
            </p>

            <p className="text-sm font-bold text-black">
              Start with just 4 to 5 essential columns. You can always add an extra column next month if you genuinely miss having that data.
            </p>
          </section>

          {/* Section 7: Keep Inventory Updated */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <RotateCcw className="w-6 h-6 stroke-[2.5]" />
              Five Simple Habits to Keep Your Table Accurate
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              An inventory table is only as valuable as its accuracy. Build these quick habits:
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-gray-800">
              <div className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Update quantities immediately:</strong> When you sell, consume, or break an item, change the number right then. Don't tell yourself "I'll update it this Friday."</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Delete or archive retired items:</strong> If you threw away that broken lamp, don't leave it on row 14 with a quantity of zero forever. Clear it out.</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Stick to consistent naming:</strong> If you call something "USB-C Cable" in row 2, don't write "Type C Wire" in row 9. Consistent names keep searches quick.</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-black flex items-start gap-2">
                <Check className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <span><strong>Do a monthly quick audit:</strong> Pick one storage shelf per month and verify the counts in 5 minutes.</span>
              </div>
            </div>
          </section>

          {/* Section 8: Inventory Table vs Spreadsheet */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Table vs. Spreadsheet: What's the Difference?
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              People often confuse tables with spreadsheets. A <strong>table</strong> is the visual, structured relationship between headers, rows, and columns. A <strong>spreadsheet</strong> (like Google Sheets or Microsoft Excel) is just software where tables can live and perform formula math.
            </p>

            <p className="text-sm sm:text-base text-gray-800">
              You can build an inventory table in a printed notebook, on a laminated sheet taped to a workshop shelf, in a Markdown document, on a website, or inside a spreadsheet. The format doesn't matter nearly as much as the clarity of your rows. Read our guide on{' '}
              <Link href="/guides/csv-vs-excel-vs-html-vs-markdown" className="underline font-bold text-black hover:text-gray-700">
                CSV vs Excel vs HTML vs Markdown
              </Link>{' '}
              to pick the right storage home.
            </p>
          </section>

          {/* Section 9: Final Takeaway */}
          <section className="p-5 bg-white border-2 border-black">
            <h3 className="text-lg font-black uppercase tracking-tight text-black mb-1">
              The Final Takeaway
            </h3>
            <p className="text-sm sm:text-base text-gray-800 italic">
              "You do not need a complicated, expensive inventory system if all you need is a clear answer to three basic questions: What do I have, how much is left, and where is it sitting right now?"
            </p>
          </section>

          {/* Section 10: TABLABLE Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Design Your Custom Inventory Table in Seconds
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Set up your item names, categories, right-aligned quantities, and custom statuses in TABLABLE. Once your grid is ready, export clean Markdown, HTML, or printable PDFs with zero hassle.
              </p>
            </div>

            <BrutalButton
              id="guide-inventory-table-cta"
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
                  What should an inventory table include?
                </h3>
                <p className="text-sm text-gray-700">
                  At minimum, an effective inventory table should have four columns: Item Name, Category, Quantity (In Stock), and Location. You can add a Status or Price column if you need to track financial value or reordering.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I make a simple inventory list?
                </h3>
                <p className="text-sm text-gray-700">
                  Start by walking through your space with a notepad or tablet. List each item on a new row, record the quantity in front of you, and note exactly where it is kept. Don't worry about barcodes or complex formulas on day one.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How often should inventory be updated?
                </h3>
                <p className="text-sm text-gray-700">
                  Quantities should be updated the moment an item is consumed, sold, or moved to a new shelf. Doing quick real-time adjustments avoids massive, painful end-of-quarter stock audits.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I use a table for home inventory?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes, tables are the gold standard for home inventory. They are ideal for tracking tools in a garage, seasonal decor in an attic, pantry essentials, or valuables for home insurance policies. Check out our guide on{' '}
                  <Link href="/guides/organize-project-with-table" className="underline font-bold text-black hover:text-gray-700">
                    how to organize a project with a table
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
                href="/guides/budget-with-a-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Organize Your Budget With a Table
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
