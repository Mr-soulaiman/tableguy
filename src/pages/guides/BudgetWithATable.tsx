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
  Wallet,
  PiggyBank,
  CheckSquare,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  DollarSign,
  Calendar,
  Layers,
} from 'lucide-react';

export const BudgetWithATable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Organize Your Budget With a Table | TABLEGUY"
        description="Learn how a simple table makes personal budgeting easy to understand. Compare planned vs actual spending, fixed vs variable costs, and avoid common budgeting traps."
        canonicalPath="/guides/budget-with-a-table"
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
            How to Organize Your Budget With a Table
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
            How to Organize Your Budget With a Table
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Most people don't need complicated accounting software, bank logins, or fancy financial apps to manage money. A clean, simple table gives you total visibility over your spending in less than five minutes a month.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: Relatable Problem */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Wallet className="w-6 h-6 stroke-[2.5]" />
              The "Where Did My Paycheck Go?" Mystery
            </h2>

            <p>
              It happens at the end of every month: you check your bank balance and wonder how that number got so low. You know you paid rent, bought groceries, and paid for gas, but there are dozens of little transactions floating around in receipts, card notifications, and your memory.
            </p>

            <p>
              Trying to do mental math on the fly is stressful. But when you write down your spending in a simple four-column table, the mystery disappears instantly.
            </p>

            {/* Core Example Table */}
            <div className="p-5 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase text-gray-500">
                A Simple Planned vs. Actual Budget Table
              </span>

              <div className="overflow-x-auto border-2 border-black">
                <table className="w-full text-xs sm:text-sm text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black">
                      <th className="p-2.5 border-r-2 border-black font-black">Category</th>
                      <th className="p-2.5 border-r-2 border-black font-black text-right">Planned ($)</th>
                      <th className="p-2.5 border-r-2 border-black font-black text-right">Actual ($)</th>
                      <th className="p-2.5 font-black text-right">Difference ($)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2.5 border-r-2 border-black font-bold">Rent</td>
                      <td className="p-2.5 border-r-2 border-black font-mono text-right">500</td>
                      <td className="p-2.5 border-r-2 border-black font-mono text-right">500</td>
                      <td className="p-2.5 font-mono text-right text-gray-500">0</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r-2 border-black font-bold">Food &amp; Groceries</td>
                      <td className="p-2.5 border-r-2 border-black font-mono text-right">250</td>
                      <td className="p-2.5 border-r-2 border-black font-mono text-right">280</td>
                      <td className="p-2.5 font-mono text-right font-bold text-red-600">-30</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r-2 border-black font-bold">Transport</td>
                      <td className="p-2.5 border-r-2 border-black font-mono text-right">100</td>
                      <td className="p-2.5 border-r-2 border-black font-mono text-right">85</td>
                      <td className="p-2.5 font-mono text-right font-bold text-green-700">+15</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-700">
                In three rows, you see reality clearly: Rent was on point, transport had $15 left over, but food went $30 over budget. No formulas or complex charts required.
              </p>
            </div>
          </section>

          {/* Section 2: Planned vs Actual */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              Why "Planned vs. Actual" Is So Powerful
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              A lot of people create a budget by writing down a wish list of what they <em>hope</em> to spend. That is only half a budget.
            </p>

            <p className="text-gray-800 text-sm sm:text-base">
              The real value comes from the <strong>Actual</strong> and <strong>Difference</strong> columns:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1">A negative difference (-$30)</strong>
                <span className="text-gray-700">Tells you that you overspent in that category. It is a gentle signal to adjust next month or trim another area to balance out.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1">A positive difference (+$15)</strong>
                <span className="text-gray-700">Tells you you came in under budget. That $15 can go straight into emergency savings or fun money.</span>
              </div>
            </div>
          </section>

          {/* Section 3: Fixed vs Variable Expenses */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Layers className="w-6 h-6 stroke-[2.5]" />
              Fixed vs. Variable Expenses
            </h2>

            <p className="text-gray-800">
              When grouping your rows, it helps to understand the two main types of expenses:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black uppercase text-sm block mb-1">Fixed Expenses (Predictable)</strong>
                <p className="text-gray-700 mb-2">
                  Costs that stay almost identical every month: Rent, internet bill, phone subscription, gym membership, insurance.
                </p>
                <span className="text-xs text-blue-700 font-bold">Tip: Easy to budget because Planned and Actual are usually identical.</span>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black uppercase text-sm block mb-1">Variable Expenses (Flexible)</strong>
                <p className="text-gray-700 mb-2">
                  Costs that fluctuate based on choices: Groceries, dining out, coffee runs, entertainment, rideshares, clothing.
                </p>
                <span className="text-xs text-amber-700 font-bold">Tip: This is where most budget leaks happen and where your attention matters.</span>
              </div>
            </div>
          </section>

          {/* Section 4: How to Choose Useful Categories */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              How to Choose Useful Categories (Don't Overcomplicate!)
            </h2>

            <p className="text-gray-800">
              The biggest mistake beginners make is creating 30 micro-categories: <em>"Morning Coffee"</em>, <em>"Afternoon Snack"</em>, <em>"Weekend Boba"</em>, <em>"Grocery Meat"</em>, <em>"Grocery Produce"</em>.
            </p>

            <p className="text-gray-800">
              After two weeks, you will hate logging expenses and abandon your budget completely. Instead, stick to <strong>6 to 8 broad categories</strong>:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono font-bold text-center">
              <div className="p-2.5 bg-white border-2 border-black">🏠 Housing &amp; Bills</div>
              <div className="p-2.5 bg-white border-2 border-black">🛒 Food &amp; Dining</div>
              <div className="p-2.5 bg-white border-2 border-black">🚗 Transportation</div>
              <div className="p-2.5 bg-white border-2 border-black">⚡ Utilities &amp; Phone</div>
              <div className="p-2.5 bg-white border-2 border-black">🎉 Fun &amp; Leisure</div>
              <div className="p-2.5 bg-white border-2 border-black">💊 Health &amp; Personal</div>
              <div className="p-2.5 bg-white border-2 border-black">💳 Debt Repayment</div>
              <div className="p-2.5 bg-white border-2 border-black">💰 Emergency Savings</div>
            </div>
          </section>

          {/* Section 5: A Real Monthly Expense Log Table */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              A Simple Monthly Expense Tracker Table
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              If you want to track daily transactions as you go, use this lightweight 4-column tracker:
            </p>

            <div className="overflow-x-auto border-2 border-black">
              <table className="w-full text-xs sm:text-sm text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-2.5 border-r-2 border-black font-black">Date</th>
                    <th className="p-2.5 border-r-2 border-black font-black">Item / Place</th>
                    <th className="p-2.5 border-r-2 border-black font-black">Category</th>
                    <th className="p-2.5 font-black text-right">Amount ($)</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-medium">
                  <tr>
                    <td className="p-2.5 border-r-2 border-black font-mono">Oct 02</td>
                    <td className="p-2.5 border-r-2 border-black font-bold">Trader Joe's</td>
                    <td className="p-2.5 border-r-2 border-black">Food &amp; Dining</td>
                    <td className="p-2.5 font-mono text-right">64.50</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border-r-2 border-black font-mono">Oct 04</td>
                    <td className="p-2.5 border-r-2 border-black font-bold">Metro Card Refill</td>
                    <td className="p-2.5 border-r-2 border-black">Transport</td>
                    <td className="p-2.5 font-mono text-right">30.00</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border-r-2 border-black font-mono">Oct 07</td>
                    <td className="p-2.5 border-r-2 border-black font-bold">Cinema &amp; Popcorn</td>
                    <td className="p-2.5 border-r-2 border-black">Fun &amp; Leisure</td>
                    <td className="p-2.5 font-mono text-right">22.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-600">
              Notice how all amounts are aligned to the right. This makes scanning for large expenses effortless.
            </p>
          </section>

          {/* Section 6: Important Reality Check */}
          <section className="p-5 bg-amber-50 border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 stroke-[2.5] text-amber-700" />
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black">
                A Reality Check About Tables
              </h2>
            </div>
            <p className="text-sm text-gray-800">
              A table is an organizational tool, not financial magic. It will show you clearly that you spent $90 on takeout, but it won't cook dinner for you. Use the table for honest clarity, review it once every week or two, and adjust your habits based on what the numbers tell you.
            </p>
          </section>

          {/* Section 7: Common Budgeting Table Mistakes */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Common Budget Table Mistakes
            </h2>

            <div className="space-y-3 text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">1. Creating too many micro-categories</strong>
                <p className="text-gray-700">Having 25 categories guarantees you will stop updating the table by day 10. Stick to 6–8 broad buckets.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">2. Center-aligning numbers</strong>
                <p className="text-gray-700">Always align amounts to the right. Centered numbers make $1,200.00 and $12.00 look deceptively similar in width.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">3. Forgetting irregular annual costs</strong>
                <p className="text-gray-700">Car insurance renewals, holiday gifts, or Amazon Prime subscriptions hit once a year. Add a row called <em>"Annual Reserves"</em> and set aside a small fraction each month.</p>
              </div>
            </div>
          </section>

          {/* Section 8: Using TABLEGUY */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLEGUY
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Create a Clean Budget Table in 60 Seconds
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Want to build your personal budget table without wrestling spreadsheet software? With TABLEGUY, you can set your categories, enter planned amounts, right-align figures with one click, and download a crisp PDF or clean HTML to print or keep.
              </p>
            </div>

            <BrutalButton
              id="guide-budget-table-cta"
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
                  How often should I update my budget table?
                </h3>
                <p className="text-sm text-gray-700">
                  Once a week is the sweet spot. Doing it daily feels like a chore, while waiting until the 31st of the month means you might forget what smaller transactions were for.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What if I overspend in one category?
                </h3>
                <p className="text-sm text-gray-700">
                  It happens to everyone. Just look down the <em>Difference</em> column to see where you have a surplus (like unspent transport or entertainment money) and mentally shift funds to cover it.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Should I track cash payments in the table?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes, if cash is a regular part of your spending. Whenever you withdraw cash, you can either log the entire ATM withdrawal as "Cash/Pocket Money" or log individual cash purchases if they are large.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I export my budget table to Excel or CSV later?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. If you build your table in TABLEGUY, you can export it to CSV format anytime, which opens seamlessly in Excel, Google Sheets, or Apple Numbers. Check our guide on{' '}
                  <Link href="/guides/when-to-use-csv" className="underline font-bold text-black hover:text-gray-700">
                    when should you use CSV
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation & Next Guide */}
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
                href="/guides/common-table-mistakes"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: Common Mistakes When Creating Tables
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
