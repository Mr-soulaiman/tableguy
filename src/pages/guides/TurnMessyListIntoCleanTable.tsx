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
  Sparkles,
  Columns,
  Split,
  AlertTriangle,
  ClipboardList,
  Check,
  CheckSquare,
  HelpCircle,
  Receipt,
  ShoppingCart,
  GraduationCap,
  ListTodo,
} from 'lucide-react';

export const TurnMessyListIntoCleanTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Turn a Messy List Into a Clean Table | TABLABLE"
        description="Learn how to turn messy lists, copied notes, mixed-up data, and unorganized text into clean, scannable tables with a simple 7-step practical process."
        canonicalPath="/guides/turn-messy-list-into-clean-table"
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
            How to Turn a Messy List Into a Clean Table
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="yellow" size="md">
              TIPS &amp; HOW-TO
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How to Turn a Messy List Into a Clean Table
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            When someone sends you copied notes, pasted chat logs, or unorganized text, the information itself isn't broken — it's just stuck in a messy format. Here is a step-by-step practical process to clean it up and turn it into a table anyone can scan in seconds.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: Realistic Messy Example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <GraduationCap className="w-6 h-6 stroke-[2.5]" />
              The Messy List Reality
            </h2>

            <p>
              Someone sends you a quick message or drops notes into an email that look like this:
            </p>

            <div className="p-4 bg-[#FAF8F5] border-2 border-black font-mono text-sm sm:text-base border-l-4 border-l-black space-y-1">
              <div>Ahmed - Math - 15</div>
              <div>Sara, Physics, 17</div>
              <div>Youssef&nbsp;&nbsp;&nbsp;&nbsp;Math&nbsp;&nbsp;&nbsp;&nbsp;12</div>
              <div>Nadia - Physics - 16</div>
            </div>

            <p>
              All the facts are there. You know who the students are, what subjects they took, and what scores they got. But notice how annoying this is to read:
            </p>

            <ul className="space-y-1 text-sm sm:text-base list-disc pl-5 text-gray-800">
              <li>Line 1 uses hyphens (<code className="font-mono text-xs bg-gray-100 px-1 border border-black">-</code>).</li>
              <li>Line 2 uses commas (<code className="font-mono text-xs bg-gray-100 px-1 border border-black">,</code>).</li>
              <li>Line 3 uses huge inconsistent spaces or tabs.</li>
              <li>Line 4 goes back to hyphens with uneven spacing.</li>
            </ul>

            <p>
              If your teacher or manager asks, <em>"Who had the highest grade in Physics?"</em>, you have to read every single line, hold the names in your head, and mentally filter out Math.
            </p>

            <p>
              The information is useful, but the format makes it annoying to read or compare. A clean table solves this immediately.
            </p>
          </section>

          {/* Section 2: The 7-Step Process */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                The 7-Step Practical Process
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              Whenever you encounter a scrambled list of information, run through these seven clear steps:
            </p>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">1. Find the information that repeats</strong>
                <span className="text-gray-700">Look across every line. Does every item share a name, a subject, a price, a date, or a status? Those repeated traits are what make a table possible.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">2. Turn those repeated categories into column names</strong>
                <span className="text-gray-700">Write down short, punchy 1–2 word headers for your top row: <code className="font-mono text-xs bg-white px-1 border">Student</code>, <code className="font-mono text-xs bg-white px-1 border">Subject</code>, and <code className="font-mono text-xs bg-white px-1 border">Grade</code>.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">3. Put one item on each row</strong>
                <span className="text-gray-700">Every single person, task, product, or expense belongs on its own distinct horizontal line. Never bundle two items onto the same row.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">4. Separate information that has been stuck together</strong>
                <span className="text-gray-700">If someone wrote <code className="font-mono text-xs bg-white px-1 border">"Keyboard ($45, out of stock)"</code>, split that cell apart into Item, Price, and Stock Status.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">5. Remove unnecessary information</strong>
                <span className="text-gray-700">Cut conversational filler words like "total cost", "as discussed on phone", or redundant labels like writing "Name:" on every row.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">6. Make formats consistent</strong>
                <span className="text-gray-700">Unify currencies (<code className="font-mono text-xs bg-white px-1 border">$15.00</code> vs <code className="font-mono text-xs bg-white px-1 border">$15</code>), date styles, and capitalize proper names neatly.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">7. Check the finished table</strong>
                <span className="text-gray-700">Do numbers right-align? Are there any blank gaps where a dash (<code className="font-mono text-xs bg-white px-1 border">-</code>) belongs? Can a reader grasp the table in 3 seconds?</span>
              </div>
            </div>
          </section>

          {/* Section 3: "How do I know what my columns should be?" */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Columns className="w-6 h-6 stroke-[2.5]" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                How Do I Know What My Columns Should Be?
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              People often freeze at this step. They wonder: <em>"Should I make 8 columns or 3 columns? Does this detail need its own header?"</em>
            </p>

            <div className="p-4 bg-[#FFDE00] border-2 border-black font-black text-black text-base sm:text-lg">
              The Simple Rule: If the same kind of information appears repeatedly, it probably deserves its own column.
            </div>

            <p className="text-sm text-gray-700">
              If every single line in your raw notes mentions who did something, that is an <strong>Owner</strong> column. If every line has a dollar sign, that is a <strong>Price</strong> column. If every item has a date or deadline, that is a <strong>Due Date</strong> column.
            </p>

            <p className="text-sm text-gray-700">
              On the other hand, if a detail only applies to one single item (for example, "Sarah's laptop has a scratch on the lid"), do <em>not</em> make a "Laptop Scratches" column for the whole table. Put that one-off note in parentheses inside the item name or in a short note below the table.
            </p>
          </section>

          {/* Section 4: 4 Concrete Cleaned-Up Examples */}
          <section className="flex flex-col gap-6 pt-4 border-t-2 border-black">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-1">
                4 Concrete Before &amp; After Examples
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Here is how the 7-step process works across student grades, shopping and products, team tasks, and everyday expenses.
              </p>
            </div>

            {/* Example 1: Student Grades */}
            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-sm uppercase flex items-center gap-2">
                <GraduationCap className="w-4 h-4 stroke-[2.5]" />
                Example 1: Student Grades
              </div>

              <div className="p-4 bg-red-50/80 border-b-2 border-black font-mono text-xs sm:text-sm space-y-1">
                <span className="font-sans font-black text-red-900 uppercase text-xs block mb-1">Before: Messy mixed-delimiter text</span>
                <div>Ahmed - Math - 15</div>
                <div>Sara, Physics, 17</div>
                <div>Youssef&nbsp;&nbsp;&nbsp;&nbsp;Math&nbsp;&nbsp;&nbsp;&nbsp;12</div>
                <div>Nadia - Physics - 16</div>
              </div>

              <div className="p-4 bg-white">
                <span className="font-sans font-black text-green-900 uppercase text-xs block mb-2">After: Clean Table</span>
                <div className="border border-black overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#FFDE00] border-b border-black">
                        <th className="p-2.5 font-black border-r border-black">Student Name</th>
                        <th className="p-2.5 font-black border-r border-black">Subject</th>
                        <th className="p-2.5 font-black text-right">Grade (out of 20)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-black font-medium">
                      <tr>
                        <td className="p-2.5 border-r border-black font-bold">Ahmed</td>
                        <td className="p-2.5 border-r border-black">Math</td>
                        <td className="p-2.5 text-right font-mono">15</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 border-r border-black font-bold">Sara</td>
                        <td className="p-2.5 border-r border-black">Physics</td>
                        <td className="p-2.5 text-right font-mono font-bold text-green-800">17</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 border-r border-black font-bold">Youssef</td>
                        <td className="p-2.5 border-r border-black">Math</td>
                        <td className="p-2.5 text-right font-mono">12</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 border-r border-black font-bold">Nadia</td>
                        <td className="p-2.5 border-r border-black">Physics</td>
                        <td className="p-2.5 text-right font-mono">16</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-green-800 font-medium mt-2">
                  Now anyone can instantly see the highest physics score (Sara, 17) and compare grades without squinting.
                </p>
              </div>
            </div>

            {/* Example 2: Shopping / Product Information */}
            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-sm uppercase flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 stroke-[2.5]" />
                Example 2: Shopping / Product Stock
              </div>

              <div className="p-4 bg-red-50/80 border-b-2 border-black font-mono text-xs sm:text-sm space-y-1">
                <span className="font-sans font-black text-red-900 uppercase text-xs block mb-1">Before: Copied supplier notes</span>
                <div>Wireless Mouse (black) / $25 / in stock (14 units)</div>
                <div>Mechanical Keyboard - $85 - low stock 2 left</div>
                <div>USB-C Hub: $40, backorder arriving next week</div>
              </div>

              <div className="p-4 bg-white">
                <span className="font-sans font-black text-green-900 uppercase text-xs block mb-2">After: Clean Product Table</span>
                <div className="border border-black overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#FFDE00] border-b border-black">
                        <th className="p-2.5 font-black border-r border-black">Product</th>
                        <th className="p-2.5 font-black border-r border-black text-right">Price</th>
                        <th className="p-2.5 font-black border-r border-black">Stock Status</th>
                        <th className="p-2.5 font-black text-right">Quantity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-black font-medium">
                      <tr>
                        <td className="p-2.5 border-r border-black font-bold">Wireless Mouse (Black)</td>
                        <td className="p-2.5 border-r border-black text-right font-mono">$25.00</td>
                        <td className="p-2.5 border-r border-black"><span className="px-1.5 py-0.5 bg-green-100 border border-black text-green-900 text-xs font-bold">In Stock</span></td>
                        <td className="p-2.5 text-right font-mono">14</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 border-r border-black font-bold">Mechanical Keyboard</td>
                        <td className="p-2.5 border-r border-black text-right font-mono">$85.00</td>
                        <td className="p-2.5 border-r border-black"><span className="px-1.5 py-0.5 bg-amber-100 border border-black text-amber-900 text-xs font-bold">Low Stock</span></td>
                        <td className="p-2.5 text-right font-mono">2</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 border-r border-black font-bold">USB-C Hub</td>
                        <td className="p-2.5 border-r border-black text-right font-mono">$40.00</td>
                        <td className="p-2.5 border-r border-black"><span className="px-1.5 py-0.5 bg-red-100 border border-black text-red-900 text-xs font-bold">Backorder</span></td>
                        <td className="p-2.5 text-right font-mono text-gray-500">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Example 3: Tasks and Responsibilities */}
            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-sm uppercase flex items-center gap-2">
                <ListTodo className="w-4 h-4 stroke-[2.5]" />
                Example 3: Project Tasks
              </div>

              <div className="p-4 bg-red-50/80 border-b-2 border-black font-mono text-xs sm:text-sm space-y-1">
                <span className="font-sans font-black text-red-900 uppercase text-xs block mb-1">Before: Scrambled Slack bullet points</span>
                <div>- Maya: update signup form validation, due Thursday, priority urgent</div>
                <div>- Leo - write API documentation by Friday - normal priority (not started)</div>
                <div>- Sami: database indexing (done, finished Tuesday)</div>
              </div>

              <div className="p-4 bg-white">
                <span className="font-sans font-black text-green-900 uppercase text-xs block mb-2">After: Clean Task Table</span>
                <div className="border border-black overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#FFDE00] border-b border-black">
                        <th className="p-2.5 font-black border-r border-black">Task</th>
                        <th className="p-2.5 font-black border-r border-black">Assignee</th>
                        <th className="p-2.5 font-black border-r border-black">Due Date</th>
                        <th className="p-2.5 font-black border-r border-black">Priority</th>
                        <th className="p-2.5 font-black">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-black font-medium">
                      <tr>
                        <td className="p-2.5 border-r border-black font-bold">Signup form validation</td>
                        <td className="p-2.5 border-r border-black">Maya</td>
                        <td className="p-2.5 border-r border-black">Thursday</td>
                        <td className="p-2.5 border-r border-black"><span className="px-1.5 py-0.5 bg-red-100 border border-black text-red-800 text-xs font-bold">Urgent</span></td>
                        <td className="p-2.5 text-amber-700 font-bold">In Progress</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 border-r-2 border-black font-bold">Write API documentation</td>
                        <td className="p-2.5 border-r border-black">Leo</td>
                        <td className="p-2.5 border-r border-black">Friday</td>
                        <td className="p-2.5 border-r border-black"><span className="px-1.5 py-0.5 bg-gray-100 border border-black text-gray-700 text-xs font-bold">Normal</span></td>
                        <td className="p-2.5 text-gray-500">Not Started</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 border-r-2 border-black font-bold">Database indexing</td>
                        <td className="p-2.5 border-r border-black">Sami</td>
                        <td className="p-2.5 border-r border-black">Tuesday</td>
                        <td className="p-2.5 border-r border-black"><span className="px-1.5 py-0.5 bg-gray-100 border border-black text-gray-700 text-xs font-bold">Normal</span></td>
                        <td className="p-2.5 text-green-700 font-bold">Done</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Example 4: Expenses */}
            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-sm uppercase flex items-center gap-2">
                <Receipt className="w-4 h-4 stroke-[2.5]" />
                Example 4: Team Expenses
              </div>

              <div className="p-4 bg-red-50/80 border-b-2 border-black font-mono text-xs sm:text-sm space-y-1">
                <span className="font-sans font-black text-red-900 uppercase text-xs block mb-1">Before: Scattered text receipts</span>
                <div>March 2 - Domain renewal $14 (Cloudflare) paid by Tariq</div>
                <div>March 5: Team lunch $62 (Bistro) Tariq paid cash</div>
                <div>Zoom monthly subscription 15 bucks paid by Nora on March 8</div>
              </div>

              <div className="p-4 bg-white">
                <span className="font-sans font-black text-green-900 uppercase text-xs block mb-2">After: Clean Expense Table</span>
                <div className="border border-black overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#FFDE00] border-b border-black">
                        <th className="p-2.5 font-black border-r border-black">Date</th>
                        <th className="p-2.5 font-black border-r border-black">Description</th>
                        <th className="p-2.5 font-black border-r border-black">Paid By</th>
                        <th className="p-2.5 font-black text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-black font-medium">
                      <tr>
                        <td className="p-2.5 border-r border-black font-mono text-xs">Mar 02</td>
                        <td className="p-2.5 border-r border-black font-bold">Domain renewal (Cloudflare)</td>
                        <td className="p-2.5 border-r border-black">Tariq</td>
                        <td className="p-2.5 text-right font-mono">$14.00</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 border-r border-black font-mono text-xs">Mar 05</td>
                        <td className="p-2.5 border-r border-black font-bold">Team lunch (Bistro)</td>
                        <td className="p-2.5 border-r border-black">Tariq</td>
                        <td className="p-2.5 text-right font-mono">$62.00</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 border-r border-black font-mono text-xs">Mar 08</td>
                        <td className="p-2.5 border-r border-black font-bold">Zoom monthly subscription</td>
                        <td className="p-2.5 border-r border-black">Nora</td>
                        <td className="p-2.5 text-right font-mono">$15.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Common Problems & How to Fix Them */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 stroke-[2.5] text-amber-600" />
              Common Problems When Cleaning Data
            </h2>

            <p className="text-gray-800">
              When cleaning up messy lists, you will almost always run into these six stubborn snags:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1">1. Commas mixed with tabs or dashes</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  <strong>The fix:</strong> Standardize on one delimiter first. If you plan to paste the data into a spreadsheet or table editor, convert all hyphens and extra spaces to tabs or commas.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1">2. Missing values</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  <strong>The fix:</strong> Never leave a cell completely empty if it causes readers to wonder whether data went missing. Fill it with a neat placeholder like <code className="font-mono text-xs bg-gray-100 px-1 border">-</code> or <code className="font-mono text-xs bg-gray-100 px-1 border">N/A</code>.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1">3. Inconsistent spacing</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  <strong>The fix:</strong> Trim leading and trailing spaces. Two spaces before a name makes left-aligned text look crooked and disorderly.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1">4. Several pieces of info in one cell</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  <strong>The fix:</strong> If a cell contains a name, phone number, and city, split them into separate columns. Tables work best when each cell answers exactly one question.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1">5. Duplicate entries</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  <strong>The fix:</strong> Check for accidental double-pastes. If two rows have the same item, verify whether they should be combined into a single row with an updated quantity.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <strong className="text-black block mb-1">6. Extremely long rows</strong>
                <p className="text-gray-700 text-xs leading-relaxed">
                  <strong>The fix:</strong> If a row spans 10 columns across the screen, ask if all 10 are necessary. Strip internal or secondary details to keep the table scannable.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Short Checklist */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <CheckSquare className="w-6 h-6 stroke-[2.5]" />
              Quick 5-Point Table Checklist
            </h2>

            <p className="text-sm text-gray-700">
              Before you share your newly built table, run through this quick checklist:
            </p>

            <ul className="space-y-2 text-sm sm:text-base font-bold text-gray-900">
              <li className="flex items-start gap-2.5 p-2 bg-white border border-black">
                <Check className="w-5 h-5 text-green-700 shrink-0 mt-0.5 stroke-[3]" />
                <span>Does every column have a short, obvious header name?</span>
              </li>
              <li className="flex items-start gap-2.5 p-2 bg-white border border-black">
                <Check className="w-5 h-5 text-green-700 shrink-0 mt-0.5 stroke-[3]" />
                <span>Is each distinct item on its own separate row?</span>
              </li>
              <li className="flex items-start gap-2.5 p-2 bg-white border border-black">
                <Check className="w-5 h-5 text-green-700 shrink-0 mt-0.5 stroke-[3]" />
                <span>Are numbers and currencies aligned to the right?</span>
              </li>
              <li className="flex items-start gap-2.5 p-2 bg-white border border-black">
                <Check className="w-5 h-5 text-green-700 shrink-0 mt-0.5 stroke-[3]" />
                <span>Did you remove duplicate rows and unnecessary conversational words?</span>
              </li>
              <li className="flex items-start gap-2.5 p-2 bg-white border border-black">
                <Check className="w-5 h-5 text-green-700 shrink-0 mt-0.5 stroke-[3]" />
                <span>Can someone understand what the table says in 3 seconds without explanations?</span>
              </li>
            </ul>
          </section>

          {/* Section 7: Try TABLABLE (Single Natural CTA) */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Paste and Format Your Messy List
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Have a messy list sitting in your notes or messages? Paste it into TABLABLE to split columns, reorder headers, format cell alignments, and export clean HTML, Markdown, CSV, or PDF in seconds.
              </p>
            </div>

            <BrutalButton
              id="guide-messy-list-cta"
              variant="primary"
              size="lg"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </section>

          {/* Section 8: FAQ */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I decide what belongs in a column versus a row?
                </h3>
                <p className="text-sm text-gray-700">
                  Put individual entities (each student, task, or product) on horizontal <strong>rows</strong>. Put the shared categories (name, price, date, status) in the <strong>columns</strong> at the top.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What if some lines have missing details?
                </h3>
                <p className="text-sm text-gray-700">
                  Don't delete the row unless the item itself is irrelevant. Instead, place a simple dash (<code className="font-mono text-xs bg-gray-100 px-1 border">-</code>) or <code className="font-mono text-xs bg-gray-100 px-1 border">N/A</code> in the missing cell so the table structure stays balanced.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How do I handle text with mixed commas, tabs, and hyphens?
                </h3>
                <p className="text-sm text-gray-700">
                  Before generating the table, replace inconsistent separators with a single standard symbol like a comma or tab. Or paste your raw lines into a visual editor and adjust cells directly.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  When is a simple bulleted list better than a table?
                </h3>
                <p className="text-sm text-gray-700">
                  If your items only have one piece of information (like a 4-item grocery list) or represent sequential step-by-step instructions, a bulleted or numbered list is much simpler to read than an empty table. Check out our guide on{' '}
                  <Link href="/guides/tables-vs-lists" className="underline font-bold text-black hover:text-gray-700">
                    tables vs lists
                  </Link>{' '}
                  for more examples.
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
                Next Guide: How to Make a Table From Excel or Google Sheets
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
