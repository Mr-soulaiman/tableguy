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
  Calendar,
  Clock3,
  CheckSquare,
  AlertTriangle,
  Layers,
  Sparkles,
  BookOpen,
  Briefcase,
  Sun,
  Coffee,
  Check,
} from 'lucide-react';

export const CreateScheduleWithTable: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Create a Simple Schedule With a Table | TABLABLE"
        description="Learn how to turn busy days, study routines, and work tasks into a clean schedule table. Practical templates, examples, and rules for realistic planning."
        canonicalPath="/guides/create-schedule-with-table"
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
            How to Create a Simple Schedule With a Table
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
            How to Create a Simple Schedule With a Table
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Your week contains classes, work shifts, doctor appointments, gym workouts, errands, and chores, and you keep forgetting what happens when. Here is how a simple schedule table gives you an instant overview of your week without over-complicating your life.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1: The Relatable Situation */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <Calendar className="w-6 h-6 stroke-[2.5]" />
              The Mental Schedule Overload
            </h2>

            <p>
              It is Sunday evening, and you are trying to remember what your week looks like.
            </p>

            <p>
              On Tuesday, you have a dentist appointment, but was it at 2:00 PM or 3:30 PM? On Wednesday, you have a team project meeting right around the time you planned to hit the gym. On Thursday, there is an assignment due at midnight that you haven't started.
            </p>

            <p>
              When your schedule lives only as scattered calendar notifications and mental notes, you are constantly anxious that you are forgetting something. You check your phone ten times a day just to see what comes next.
            </p>

            <p>
              A table turns that chaotic mental list into a clean visual grid. Because days of the week and time blocks repeat naturally, putting them in a table makes your entire week visible at a single glance.
            </p>
          </section>

          {/* Section 2: Basic Example & Why It Works */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              The Basic Schedule Table
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              You don't need to account for every second. Look at how clear a 3-block daily schedule looks:
            </p>

            {/* Brutalist Schedule Table */}
            <div className="border-2 border-black bg-white overflow-x-auto shadow-[4px_4px_0px_0px_#000]">
              <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-3 font-black border-r-2 border-black">Day</th>
                    <th className="p-3 font-black border-r-2 border-black">Morning</th>
                    <th className="p-3 font-black border-r-2 border-black">Afternoon</th>
                    <th className="p-3 font-black">Evening</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-black font-medium">
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold bg-[#FAF8F5]">Monday</td>
                    <td className="p-3 border-r-2 border-black">School / Classes</td>
                    <td className="p-3 border-r-2 border-black">Homework &amp; Study</td>
                    <td className="p-3 text-green-800 font-bold">Free time</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold bg-[#FAF8F5]">Tuesday</td>
                    <td className="p-3 border-r-2 border-black">School / Classes</td>
                    <td className="p-3 border-r-2 border-black font-bold text-blue-900">Gym workout</td>
                    <td className="p-3">Study / Reading</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold bg-[#FAF8F5]">Wednesday</td>
                    <td className="p-3 border-r-2 border-black">School / Classes</td>
                    <td className="p-3 border-r-2 border-black">Project meeting</td>
                    <td className="p-3 text-green-800 font-bold">Free time</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold bg-[#FAF8F5]">Thursday</td>
                    <td className="p-3 border-r-2 border-black">School / Classes</td>
                    <td className="p-3 border-r-2 border-black">Homework</td>
                    <td className="p-3">Dentist appt (6 PM)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r-2 border-black font-bold bg-[#FAF8F5]">Friday</td>
                    <td className="p-3 border-r-2 border-black">School / Classes</td>
                    <td className="p-3 border-r-2 border-black font-bold text-blue-900">Gym workout</td>
                    <td className="p-3 text-purple-800 font-bold">Movie night</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-700">
              <strong>Why this works so well:</strong> Morning, Afternoon, and Evening repeat every single day. By turning those time periods into columns, you can scan horizontally to see your day, or scan vertically to see how balanced your evenings are across the whole week.
            </p>
          </section>

          {/* Section 3: Other Schedule Formats */}
          <section className="flex flex-col gap-6 pt-4 border-t-2 border-black">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-1">
                3 Other Useful Schedule Formats
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Depending on what you are organizing, choose the layout that fits your situation:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs sm:text-sm">
              {/* Format 1: Weekly Routine */}
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-2.5">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Clock3 className="w-4 h-4 stroke-[2.5]" />
                  1. Weekly Activity Schedule
                </div>
                <div className="p-2.5 bg-gray-900 text-white font-mono text-xs overflow-x-auto">
                  <div className="text-yellow-400 font-bold border-b border-gray-700 pb-1 mb-1">
                    Day | Time | Activity | Location
                  </div>
                  <div>Mon | 9:00 AM | Team Standup | Zoom</div>
                  <div>Tue | 5:30 PM | Soccer Practice | Park</div>
                  <div>Thu | 2:00 PM | Office Hours | Hall B</div>
                </div>
                <p className="text-gray-700 text-xs">
                  <strong>Best for:</strong> People with varied appointments across different locations throughout the week.
                </p>
              </div>

              {/* Format 2: Study Plan */}
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-2.5">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <BookOpen className="w-4 h-4 stroke-[2.5]" />
                  2. Dedicated Study Schedule
                </div>
                <div className="p-2.5 bg-gray-900 text-white font-mono text-xs overflow-x-auto">
                  <div className="text-yellow-400 font-bold border-b border-gray-700 pb-1 mb-1">
                    Day | Subject | Topic | Duration
                  </div>
                  <div>Mon | Math | Derivatives | 1.5 hrs</div>
                  <div>Tue | History | Cold War Notes | 1 hr</div>
                  <div>Wed | Physics | Newton's Laws | 2 hrs</div>
                </div>
                <p className="text-gray-700 text-xs">
                  <strong>Best for:</strong> Exam preparation when you need to balance multiple courses without burning out.
                </p>
              </div>

              {/* Format 3: Work Task Schedule */}
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-2.5">
                <div className="flex items-center gap-1.5 font-black uppercase text-sm text-black">
                  <Briefcase className="w-4 h-4 stroke-[2.5]" />
                  3. Work Task Schedule
                </div>
                <div className="p-2.5 bg-gray-900 text-white font-mono text-xs overflow-x-auto">
                  <div className="text-yellow-400 font-bold border-b border-gray-700 pb-1 mb-1">
                    Task | Day | Priority | Status
                  </div>
                  <div>Client report | Mon | High | Done</div>
                  <div>Inventory audit | Wed | Medium | In Progress</div>
                  <div>Quarterly review | Fri | High | Pending</div>
                </div>
                <p className="text-gray-700 text-xs">
                  <strong>Best for:</strong> Freelancers and office workers who organize work by weekday deliverables.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Practical Rules for Schedules */}
          <section className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFDE00] border border-black inline-block"></span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                5 Practical Rules for Realistic Schedules
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">1. Don't schedule every single minute</strong>
                <span className="text-gray-700">Writing <em>"8:00–8:15 eat breakfast, 8:15–8:30 brush teeth and pack bag"</em> is a recipe for failure. Real life has traffic, delayed calls, and interruptions. Block out broad chunks of time (like 2-hour windows) instead of micro-minutes.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">2. Keep activity names short</strong>
                <span className="text-gray-700">Use 2–3 words: <code className="font-mono text-xs bg-white px-1 border">Gym (Legs)</code>, <code className="font-mono text-xs bg-white px-1 border">History Paper</code>, or <code className="font-mono text-xs bg-white px-1 border">Team Lunch</code>. Long explanations squeeze table cells.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">3. Use consistent time formats</strong>
                <span className="text-gray-700">Don't mix <code className="font-mono text-xs bg-white px-1 border">2 PM</code>, <code className="font-mono text-xs bg-white px-1 border">14:00</code>, and <code className="font-mono text-xs bg-white px-1 border">half past two</code> in the same table. Pick one standard format so you can scan times instantly.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">4. Leave intentional room for changes (buffer blocks)</strong>
                <span className="text-gray-700">Schedule at least one or two empty "Catch-up" blocks during the week. When an appointment runs long, your entire schedule won't collapse.</span>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-black">
                <strong className="text-black block mb-1 font-bold">5. Don't create unnecessary columns</strong>
                <span className="text-gray-700">You don't need columns for <em>Weather Forecast, Mood, Outfit Choice, and Energy Level</em>. Keep it down to 3–5 columns that actually guide what you need to do.</span>
              </div>
            </div>
          </section>

          {/* Section 5: Table vs Calendar */}
          <section className="p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              When Is a Table Better Than a Digital Calendar?
            </h2>

            <p className="text-sm sm:text-base text-gray-800">
              Many people wonder why anyone would use a table when Google Calendar or Apple Calendar exists on their phone. They serve completely different roles:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white border-2 border-black">
                <strong className="text-black text-base block mb-2 font-black uppercase">
                  A table schedule is better for:
                </strong>
                <ul className="text-gray-700 space-y-1.5 list-disc pl-5 text-xs sm:text-sm">
                  <li><strong>A weekly routine overview:</strong> Seeing the general rhythm of your week (e.g. gym days vs study days).</li>
                  <li><strong>Printable plans:</strong> Taping a routine to your desk, fridge, or notebook cover.</li>
                  <li><strong>Habit and course planning:</strong> Mapping out a semester or workout rotation before the month begins.</li>
                  <li><strong>Distraction-free review:</strong> No notification chimes, battery drain, or app popups.</li>
                </ul>
              </div>

              <div className="p-4 bg-white border-2 border-black">
                <strong className="text-black text-base block mb-2 font-black uppercase">
                  A digital calendar is better for:
                </strong>
                <ul className="text-gray-700 space-y-1.5 list-disc pl-5 text-xs sm:text-sm">
                  <li><strong>Exact appointments:</strong> Doctor visits at 3:15 PM with automated push notifications.</li>
                  <li><strong>Meeting invites:</strong> Sending and accepting Google Meet or Zoom invites with colleagues.</li>
                  <li><strong>Location alerts:</strong> Getting driving time alerts based on current live traffic.</li>
                  <li><strong>Frequent daily changes:</strong> Dragging a meeting when a client reschedules at the last minute.</li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-gray-600 italic">
              The best workflow is often both: use a digital calendar for specific time-sensitive appointments, and keep a simple printable table for your weekly study or workout rhythm.
            </p>
          </section>

          {/* Section 6: Common Scheduling Mistakes */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 stroke-[2.5] text-amber-600" />
              Common Schedule Mistakes to Avoid
            </h2>

            <div className="space-y-3 text-sm">
              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">1. Trying to schedule every single minute (Micromanaging)</strong>
                <p className="text-gray-700">
                  When you plan every 15-minute slot, a 10-minute delay ruins the entire afternoon. Plan 2-hour blocks instead.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">2. Unclear time ranges</strong>
                <p className="text-gray-700">
                  Writing <em>"Morning"</em> without knowing if that means 8 AM or 11 AM leads to procrastination. Define broad anchors (e.g. Morning = 9:00 AM – 12:00 PM).
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">3. Stuffing too much information into one cell</strong>
                <p className="text-gray-700">
                  If Tuesday afternoon contains 5 different chores, create individual rows or summarize it as <em>"Errands"</em> and keep the detailed grocery checklist on a piece of scratch paper.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">4. Zero flexibility</strong>
                <p className="text-gray-700">
                  A schedule that operates at 100% capacity will break the moment something unexpected happens. Always leave blank pockets for rest and catching up.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-black">
                <strong className="text-black block mb-1">5. Making the table too wide</strong>
                <p className="text-gray-700">
                  If your table has 10 columns across the screen, it becomes unreadable on a smartphone or standard A4 printer paper. Stick to 4 to 6 columns.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Reusable Schedule Template */}
          <section className="flex flex-col gap-4 pt-4 border-t-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Reusable Weekly Schedule Template
            </h2>

            <p className="text-gray-800 text-sm sm:text-base">
              Copy this clean Markdown schedule directly into your planner, or paste it into TABLABLE to customize hours, add colors, and export to PDF:
            </p>

            <div className="p-4 bg-gray-900 text-white font-mono text-xs sm:text-sm border-2 border-black overflow-x-auto shadow-[3px_3px_0px_0px_#000]">
              <pre className="whitespace-pre">
{`| Day       | Morning (9am–12pm) | Afternoon (1pm–5pm) | Evening (6pm–9pm) |
|-----------|--------------------|---------------------|-------------------|
| Monday    | Focus Work / Study | Meetings & Tasks    | Workout / Rest    |
| Tuesday   | Focus Work / Study | Project Deep Work   | Reading           |
| Wednesday | Focus Work / Study | Errands & Admin     | Social / Free     |
| Thursday  | Focus Work / Study | Review & Planning   | Hobby / Rest      |
| Friday    | Quick Catch-up     | Weekly Wrap-up      | Dinner Out        |
| Weekend   | Rest / Exercise    | Family & Chores     | Free Time         |`}
              </pre>
            </div>
          </section>

          {/* Section 8: TABLABLE Single Natural CTA */}
          <section className="p-6 sm:p-8 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 max-w-xl">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                Design Your Weekly Schedule Table
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Want a clean weekly schedule you can keep on your desktop or print out for your wall? Build it in TABLABLE, style your time blocks, and export to clean HTML, Markdown, or PDF in seconds.
              </p>
            </div>

            <BrutalButton
              id="guide-create-schedule-cta"
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
                  How many columns should a weekly schedule table have?
                </h3>
                <p className="text-sm text-gray-700">
                  Four columns is usually the cleanest layout: Day, Morning, Afternoon, and Evening. If you prefer listing days across the top, limit yourself to 5 workdays or 7 full days with short 1-word entries.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  What should I do when my schedule gets disrupted?
                </h3>
                <p className="text-sm text-gray-700">
                  Don't abandon the schedule. Treat it as a guideline rather than an unbreakable law. Use your built-in buffer blocks or shift that task to the next day's afternoon block.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Is it better to print a schedule or keep it on my phone?
                </h3>
                <p className="text-sm text-gray-700">
                  Many people find physical printable schedules taped near their monitor or study desk work best because you can see your week without opening an app or getting distracted by social media notifications.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="text-base font-black text-black mb-1.5">
                  Can I use a schedule table for budgeting my time like money?
                </h3>
                <p className="text-sm text-gray-700">
                  Yes. Just as a budget table compares planned vs actual spending, a schedule table can compare your planned focus blocks with what you actually accomplished. Check out our guide on{' '}
                  <Link href="/guides/budget-with-a-table" className="underline font-bold text-black hover:text-gray-700">
                    how to organize your budget with a table
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
                href="/guides/organize-study-notes-with-table"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: Organize Your Study Notes With a Table
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
