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
  Briefcase,
  CheckSquare,
  AlertTriangle,
  FolderGit2,
  Home,
  GraduationCap,
  Users,
  Layers,
} from 'lucide-react';

export const OrganizeProjectWithTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Organize a Project With a Table | TABLABLE"
        description="Learn how to turn scattered project tasks, owners, and deadlines into a simple project table. Practical steps, examples, and templates for small teams and personal projects."
        canonicalPath="/guides/organize-project-with-table"
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
            How to Organize a Project With a Table
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
            How to Organize a Project With a Table
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            A project has tasks, people, deadlines, and different statuses, but everything is scattered across chat messages, notes apps, and mental reminders. Here is how a simple table turns that confusion into a clean plan anyone can follow.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The Realistic Opening */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Briefcase className="w-6 h-6 stroke-[2.5]" />
              The Scattered Project Reality
            </h2>

            <p>
              It happens with almost every team task, school presentation, or personal goal.
            </p>

            <p>
              Sara promises in a Slack channel that she will finish the mockups by Monday. Ahmed mentions in a meeting that he is drafting the content, but doesn't say when it will be ready. Youssef is supposed to test everything, but nobody knows if he has started yet.
            </p>

            <p>
              The details exist, but they are scattered across four different apps, three direct messages, and people's memories. Within a few days, nobody is sure who is waiting on whom, deadlines start slipping, and you spend half your time just asking: <em>"What's the status of this?"</em>
            </p>

            <p>
              You don't need a heavy enterprise management system with 50 configuration menus to solve this. A simple table brings all of that scattered information onto a single screen where everyone can see reality at a glance.
            </p>
          </section>

          {/* Section 2: Concrete Example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              The Basic Project Table
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Look at how peaceful a project feels when you bring it together like this:
            </p>

            {/* Brutalist Project Table */}
            <div className="border-2 border-black bg-white overflow-x-auto shadow-[4px_4px_0px_0px_#000]">
              <table className="w-full text-left text-sm border-collapse min-w-[520px]">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-3 font-black border-r-2 border-black">Task</th>
                    <th className="p-3 font-black border-r-2 border-black">Person</th>
                    <th className="p-3 font-black border-r-2 border-black">Deadline</th>
                    <th className="p-3 font-black">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-medium">
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Website design</td>
                    <td className="p-3 border-r-2 border-black">Sara</td>
                    <td className="p-3 border-r-2 border-black font-mono">Monday</td>
                    <td className="p-3 font-bold text-green-700">
                      <span className="px-2 py-0.5 bg-green-100 border border-black text-xs uppercase">Done</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Write content</td>
                    <td className="p-3 border-r-2 border-black">Ahmed</td>
                    <td className="p-3 border-r-2 border-black font-mono">Wednesday</td>
                    <td className="p-3 font-bold text-amber-700">
                      <span className="px-2 py-0.5 bg-amber-100 border border-black text-xs uppercase">In progress</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold">Testing</td>
                    <td className="p-3 border-r-2 border-black">Youssef</td>
                    <td className="p-3 border-r-2 border-black font-mono">Friday</td>
                    <td className="p-3 text-gray-500">
                      <span className="px-2 py-0.5 bg-gray-100 border border-black text-xs uppercase">Not started</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-700">
              Notice how much work four columns do:
            </p>

            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-800 list-disc pl-5">
              <li><strong>Task:</strong> Tells you exactly what physical action needs to happen.</li>
              <li><strong>Person:</strong> Gives complete ownership so nobody assumes someone else is doing it.</li>
              <li><strong>Deadline:</strong> Sets a target day so tasks don't drag on forever.</li>
              <li><strong>Status:</strong> Shows current progress without needing to message anyone.</li>
            </ul>
          </section>

          {/* Section 3: 5-Step Process */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                How to Build Your Own Project Table (5 Steps)
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">1. List the tasks first</strong>
                <span className="text-gray-700">Brainstorm everything that needs to be done. Write each task as an action verb and noun (e.g. <em>"Design signup screen"</em> or <em>"Buy paint supplies"</em>).</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">2. Decide who is responsible</strong>
                <span className="text-gray-700">Assign one specific person to each task. When a task has three owners, it usually has zero owners because everyone assumes the other person will finish it.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">3. Add deadlines only when useful</strong>
                <span className="text-gray-700">Don't invent arbitrary times for minor subtasks. Add deadlines for key milestones or dates where other people are waiting on the result.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">4. Add a simple status</strong>
                <span className="text-gray-700">Keep status options down to three basics: <em>Not started</em>, <em>In progress</em>, and <em>Done</em>. You rarely need more than that.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">5. Keep each row focused on one task</strong>
                <span className="text-gray-700">Never bundle multiple chores into one line. If a row says <em>"Interview customers, write report, and print slides"</em>, split it into three separate rows.</span>
              </div>
            </div>
          </section>

          {/* Section 4: Useful Columns & Why Too Many Columns Ruin It */}
          <section className="flex flex-col gap-5 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Useful Columns (And Why Less Is More)
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Depending on what you are building, you can choose from these common column types:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Task &amp; Person</strong>
                <p className="text-gray-700">The core spine of any table. What needs doing, and who owns the outcome.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Deadline &amp; Status</strong>
                <p className="text-gray-700">When the deliverable is expected, and whether work is underway or finished.</p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1 font-bold">Priority &amp; Notes</strong>
                <p className="text-gray-700">Optional tags (High/Normal) and brief reminders like file links or blockers.</p>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border-2 border-black flex flex-col gap-2">
              <div className="flex items-center gap-1.5 font-black uppercase text-xs text-amber-900">
                <AlertTriangle className="w-4 h-4 stroke-[2.5]" />
                The Danger of Too Many Columns
              </div>
              <p className="text-xs sm:text-sm text-gray-800">
                A common trap is creating columns for <em>Estimate Hours, Actual Hours, Sub-Category, Approval Stage, Dependency ID, Created Date, and Last Modified By</em>.
              </p>
              <p className="text-xs sm:text-sm text-gray-800">
                When a table has 12 columns, updating it feels like filling out tax paperwork. People stop maintaining it after three days, and the table quickly dies. A 4-column table that stays up to date is infinitely more valuable than an abandoned 12-column behemoth.
              </p>
            </div>
          </section>

          {/* Section 5: Two Real Examples */}
          <section className="flex flex-col gap-6 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Two Real-World Examples
            </h2>

            {/* Example 1: School/Group Project */}
            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-sm uppercase flex items-center gap-2">
                <GraduationCap className="w-4 h-4 stroke-[2.5]" />
                Example 1: Small Group / School Presentation
              </div>

              <div className="p-4 bg-white overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black">
                      <th className="p-2.5 font-black border-r border-black">Task</th>
                      <th className="p-2.5 font-black border-r border-black">Person</th>
                      <th className="p-2.5 font-black border-r border-black">Deadline</th>
                      <th className="p-2.5 font-black border-r border-black">Status</th>
                      <th className="p-2.5 font-black">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Research clean energy stats</td>
                      <td className="p-2.5 border-r border-black">Nadia</td>
                      <td className="p-2.5 border-r border-black font-mono">Oct 12</td>
                      <td className="p-2.5 border-r border-black font-bold text-green-700">Done</td>
                      <td className="p-2.5 text-gray-600 text-xs">Saved in Google Drive</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Create PowerPoint slides</td>
                      <td className="p-2.5 border-r border-black">Karim</td>
                      <td className="p-2.5 border-r border-black font-mono">Oct 15</td>
                      <td className="p-2.5 border-r border-black text-amber-700 font-bold">In Progress</td>
                      <td className="p-2.5 text-gray-600 text-xs">Waiting for Nadia's charts</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Rehearse speech timing</td>
                      <td className="p-2.5 border-r border-black">Everyone</td>
                      <td className="p-2.5 border-r border-black font-mono">Oct 18</td>
                      <td className="p-2.5 border-r border-black text-gray-500">Not Started</td>
                      <td className="p-2.5 text-gray-600 text-xs">Meet at library room B</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Example 2: Personal / Home Project */}
            <div className="border-2 sm:border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_#000] overflow-hidden">
              <div className="p-3 bg-[#FAF8F5] border-b-2 border-black font-black text-sm uppercase flex items-center gap-2">
                <Home className="w-4 h-4 stroke-[2.5]" />
                Example 2: Personal Home Renovation / Room Redo
              </div>

              <div className="p-4 bg-white overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#FFDE00] border-b-2 border-black">
                      <th className="p-2.5 font-black border-r border-black">Task</th>
                      <th className="p-2.5 font-black border-r border-black">Priority</th>
                      <th className="p-2.5 font-black border-r border-black">Deadline</th>
                      <th className="p-2.5 font-black border-r border-black">Status</th>
                      <th className="p-2.5 font-black text-right">Budget</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-black font-medium">
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Clear out old furniture</td>
                      <td className="p-2.5 border-r border-black"><span className="px-1.5 py-0.5 bg-red-100 border border-black text-xs font-bold">High</span></td>
                      <td className="p-2.5 border-r border-black font-mono">Saturday</td>
                      <td className="p-2.5 border-r border-black font-bold text-green-700">Done</td>
                      <td className="p-2.5 text-right font-mono">$0</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Buy primer and wall paint</td>
                      <td className="p-2.5 border-r border-black"><span className="px-1.5 py-0.5 bg-amber-100 border border-black text-xs font-bold">Normal</span></td>
                      <td className="p-2.5 border-r border-black font-mono">Sunday</td>
                      <td className="p-2.5 border-r border-black text-amber-700 font-bold">In Progress</td>
                      <td className="p-2.5 text-right font-mono">$65</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-black font-bold">Assemble new bookshelf</td>
                      <td className="p-2.5 border-r border-black"><span className="px-1.5 py-0.5 bg-gray-100 border border-black text-xs font-bold">Low</span></td>
                      <td className="p-2.5 border-r border-black font-mono">Next week</td>
                      <td className="p-2.5 border-r border-black text-gray-500">Not Started</td>
                      <td className="p-2.5 text-right font-mono">$110</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 6: Table or Project Management App? */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Table or Dedicated Project Management App?
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              A simple table is wonderful, but it isn't the solution for every kind of project. Here is how to know what to use:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-[#FAF8F5] border-2 border-black">
                <strong className="text-black text-base block mb-1">A simple table is ideal when:</strong>
                <ul className="text-gray-700 space-y-1.5 list-disc pl-5">
                  <li>You have a small team (1 to 5 people).</li>
                  <li>The project runs for a few days or weeks.</li>
                  <li>You have between 5 and 30 total tasks.</li>
                  <li>You want something anyone can open without creating an account or learning software.</li>
                </ul>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black">
                <strong className="text-black text-base block mb-1">You need dedicated project software when:</strong>
                <ul className="text-gray-700 space-y-1.5 list-disc pl-5">
                  <li>You manage 20+ people across multiple departments.</li>
                  <li>You need complex automated reminders, Gantt charts, or bug tracking.</li>
                  <li>Tasks have deep dependencies (Task C cannot start until Tasks A and B are signed off by legal).</li>
                  <li>You need time-tracking and client invoice billing built-in.</li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-gray-600 italic">
              Don't bring a forklift to move a small box. If your project has 15 tasks, a clean table in TABLABLE or a shared doc will be faster, clearer, and more reliable than setting up heavy software.
            </p>
          </section>

          {/* Section 7: Common Mistakes to Avoid */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Common Project Table Mistakes
            </h2>

            <div className="space-y-3 text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">1. Unclear, vague tasks</strong>
                <p className="text-gray-700">
                  Writing <em>"Marketing"</em> or <em>"Website"</em> gives nobody clear guidance. Write concrete actions: <em>"Send email announcement to subscribers"</em> or <em>"Update homepage logo"</em>.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">2. Huge paragraphs stuffed in cells</strong>
                <p className="text-gray-700">
                  Tables break when a single cell contains four sentences of background context. Keep task titles under 8 words. Link to a document or put notes in a dedicated column if necessary.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">3. Too many status options</strong>
                <p className="text-gray-700">
                  Avoid having eight statuses like <em>Pending Review, Blocked, Needs Approval, In QA, Partially Done</em>. Keep it down to: <em>Not Started, In Progress, Blocked, Done</em>.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">4. No clear deadline</strong>
                <p className="text-gray-700">
                  Leaving deadlines blank often means the task gets pushed back indefinitely. Even an estimated week (e.g. <em>"By Friday"</em>) provides momentum.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">5. Mixing several tasks into one row</strong>
                <p className="text-gray-700">
                  If Ahmed has to write three separate blog posts, give each blog post its own row. That way one post can be marked "Done" while the other two remain "In Progress".
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Reusable Project Table Template */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Reusable Project Table Template
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Copy this basic Markdown template directly into your notes, or paste it into TABLABLE to add rows, set colors, and export:
            </p>

            <div className="p-4 bg-gray-900 text-white font-mono text-xs sm:text-sm border-2 border-black overflow-x-auto shadow-[3px_3px_0px_0px_#000]">
              <pre className="whitespace-pre">
{`| Task                   | Owner   | Deadline | Priority | Status      |
|------------------------|---------|----------|----------|-------------|
| Finalize requirements  | Sarah   | Oct 10   | High     | Done        |
| Build prototype draft  | Leo     | Oct 14   | High     | In Progress |
| Collect user feedback  | Maya    | Oct 18   | Normal   | Not Started |
| Present final summary  | Team    | Oct 22   | Normal   | Not Started |`}
              </pre>
            </div>
          </section>

          {/* Section 9: TABLABLE Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Create Your Project Table in Seconds
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Need to share a project plan with your team? Use TABLABLE to add tasks, highlight priorities with color tags, and export clean HTML, Markdown, or PDF with one click.
              </p>
            </div>

            <BrutalButton
              id="guide-organize-project-cta"
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
                  How many columns should a project table have?
                </h3>
                <p className="text-sm text-gray-700">
                  Four or five columns is usually the sweet spot: Task, Person, Deadline, and Status (plus optional Priority or Notes). Keeping it under six columns ensures it stays readable on mobile phones.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can two people be assigned to the same task?
                </h3>
                <p className="text-sm text-gray-700">
                  It's best to assign one primary owner per row. If two people are collaborating, split the task into their specific responsibilities so ownership is unmistakable.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  How often should I update the project table?
                </h3>
                <p className="text-sm text-gray-700">
                  Quick check-ins at the start or end of each workday (or right after team meetings) take less than two minutes and keep everyone aligned.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  When should I switch from a table to project management software?
                </h3>
                <p className="text-sm text-gray-700">
                  When you have dozens of people, automated ticket queues, or complex legal dependencies between departments. For small teams and focused goals, a simple table is faster and easier. Learn more about structure in our guide on{' '}
                  <Link href="/guides/tables-vs-lists" className="underline font-bold text-black hover:text-gray-700">
                    tables vs lists
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
                href="/guides/turn-messy-list-into-clean-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Turn a Messy List Into a Clean Table
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
