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
  CheckSquare,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sun,
  AlertTriangle,
  Layers,
  Coffee,
} from 'lucide-react';

export const DailyToDoListHowToPlanYourDay: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="Daily To-Do List: How to Plan Your Day | TABLABLE"
        description="Build a realistic daily to-do list with simple steps for choosing priorities, organizing your time, and avoiding an overloaded schedule."
        canonicalPath="/guides/daily-to-do-list-how-to-plan-your-day"
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
            Daily To-Do List: Plan Your Day
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="yellow" size="md">
              TO-DO LISTS
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            Daily To-Do List: How to Plan Your Day
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            It is 8:30 in the morning. You have a cup of coffee, fourteen different tasks buzzing around your head, and no clear idea what to start with. Here is a simple, no-nonsense system to turn that morning clutter into a calm, focused plan.
          </p>
        </header>

        {/* Summary Takeaway Box */}
        <BrutalCard shadow="md" className="p-5 sm:p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black">
          <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wider text-black mb-3">
            <Coffee className="w-4 h-4 stroke-[3]" />
            <span>Key Takeaways</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-bold text-gray-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Empty your head completely before attempting to prioritize anything.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Lock in 3 primary tasks as your anchors for the morning and afternoon.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Never schedule more than 60% of your waking hours. Leave real buffer.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Batch minor administrative chores into a single 30-minute block.</span>
            </li>
          </ul>
        </BrutalCard>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              1. The Morning Brain Dump: Clear the Mental Cache
            </h2>
            <p>
              Your brain is fantastic at having ideas and terrible at storing them. Trying to hold fourteen obligations in your head while deciding what to do first creates low-grade panic before you have even typed a word.
            </p>
            <p>
              Do not try to make a neat, prioritized list right away. Grab scratch paper or an empty text box and dump everything out:
            </p>
            <div className="p-4 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-800 shadow-[3px_3px_0px_0px_#000]">
              <p className="font-sans font-bold text-black mb-2 uppercase text-xs tracking-wider">Scratchpad dump:</p>
              <p>Email professor, buy eggs, review physics formula sheet, finish slide 4, return library book, check car tire pressure, clean desk, dentist next week, message Sarah, water plant, finish report intro...</p>
            </div>
            <p>
              The moment these tasks are on paper, your brain stops screaming about forgetting them. Now you can think clearly.
            </p>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              2. Choose the 3 Anchor Tasks
            </h2>
            <p>
              Look at your messy dump. If you could only complete three things today and everything else had to wait until tomorrow, which three would make today a genuine win?
            </p>
            <p>
              These are your <strong>anchor tasks</strong>. They are usually the tasks that require deep concentration or carry real deadlines:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-base text-gray-800">
              <li><strong>Anchor 1 (Morning focus):</strong> Review physics formula sheet (exercises 1–12).</li>
              <li><strong>Anchor 2 (Midday focus):</strong> Draft slide 4 and slide 5 for team project.</li>
              <li><strong>Anchor 3 (Afternoon focus):</strong> Write and submit report introduction.</li>
            </ul>
            <p>
              Put these at the top of your list. When you sit down to work, you ignore everything else until anchor number one has a thick line drawn through it.
            </p>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              3. Batch Smaller Tasks Around Your Anchors
            </h2>
            <p>
              Errands and small administrative chores (answering three emails, checking a tracking number, watering the plants) do not deserve their own separate entries throughout your day.
            </p>
            <p>
              When you scatter five-minute chores across six hours, you constantly interrupt your focus. Instead, cluster them into one afternoon "admin block":
            </p>
            <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] text-sm">
              <p className="font-bold text-black mb-1">Batch block (16:00 – 16:30):</p>
              <p className="text-gray-700">Reply to professor, message Sarah, pay internet bill, file receipts.</p>
            </div>
            <p>
              Knock them all out in twenty minutes when your mental energy is lower, and keep your morning clear for deep thinking.
            </p>
          </section>

          {/* Section 4: Realistic Example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              4. A Realistic Day vs. Scheduling Every Minute
            </h2>
            <p>
              A realistic daily plan is structured into daylight chunks (Morning, Afternoon, Evening) rather than micro-scheduled 15-minute slots:
            </p>

            {/* Good Example Box */}
            <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-4">
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <span className="font-black text-sm uppercase text-black">REALISTIC DAILY PLAN</span>
                <span className="text-xs font-mono font-bold bg-[#FFDE00] border border-black px-2 py-0.5">FLEXIBLE &amp; RESILIENT</span>
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm text-gray-800">
                <div>
                  <p className="font-sans font-bold text-black uppercase text-xs tracking-wider mb-1">MORNING</p>
                  <p className="text-black font-semibold">08:30 — Review math exercises (Anchor 1)</p>
                  <p className="text-black font-semibold">10:00 — Work on project introduction (Anchor 2)</p>
                </div>

                <div>
                  <p className="font-sans font-bold text-black uppercase text-xs tracking-wider mb-1">AFTERNOON</p>
                  <p className="text-gray-700">14:00 — Grocery shopping &amp; post office</p>
                  <p className="text-gray-700">16:00 — Reply to emails &amp; admin chores</p>
                </div>

                <div>
                  <p className="font-sans font-bold text-black uppercase text-xs tracking-wider mb-1">EVENING</p>
                  <p className="text-gray-700">18:30 — 30-minute workout &amp; walk</p>
                </div>
              </div>
            </div>

            <p>
              Notice why this structure holds up when real life happens:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-base text-gray-800">
              <li>There is an unassigned hour between 11:30 and 13:00 for lunch, a break, or tasks running over.</li>
              <li>Times are anchors for major transitions, not handcuffs. If the math review runs until 09:45, your afternoon does not collapse.</li>
              <li>Hard physical actions are balanced with lighter operational chores.</li>
            </ul>
          </section>

          {/* Section 5: Overloaded Day Example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              5. An Example of an Overloaded Day
            </h2>
            <p>
              To understand why days fall apart, look at what an over-scheduled list looks like:
            </p>

            <div className="p-5 bg-[#FFF5F5] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-center gap-2 font-black text-xs text-red-600 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 stroke-[2.5]" />
                <span>The Overloaded Schedule (Destined to Fail)</span>
              </div>
              <ul className="space-y-1 font-mono text-xs sm:text-sm text-gray-800">
                <li>07:00 — 07:30: Run 5 miles</li>
                <li>07:30 — 08:00: Read 20 pages of textbook</li>
                <li>08:00 — 09:00: Answer all emails</li>
                <li>09:00 — 10:30: Write chapter 2 draft</li>
                <li>10:30 — 11:30: Complete biology lab report</li>
                <li>11:30 — 12:00: Clean kitchen &amp; prep meals</li>
                <li>12:00 — 12:30: Eat lunch</li>
                <li>12:30 — 14:00: Code website homepage</li>
                <li>14:00 — 15:30: Study history exam</li>
                <li>15:30 — 17:00: Call bank &amp; organize tax documents</li>
              </ul>
            </div>

            <p>
              What is wrong with this schedule?
            </p>
            <p>
              Everything. It assumes you are a robotic machine. There is zero time for traffic, tired eyes, heating up food, a slow internet connection, or having a five-minute conversation.
            </p>
            <p>
              By 10:45 AM, chapter 2 has taken longer than expected, the biology lab report is delayed, and you are already two hours behind schedule. You abandon the list and feel like you wasted the day.
            </p>
          </section>

          {/* Section 6: When life derails */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              6. What to Do When the Day Goes Sideways
            </h2>
            <p>
              Some days just break. Your car battery dies, a family member needs help, or you wake up with a crushing headache.
            </p>
            <p>
              When your day gets derailed, do not try to squeeze eight hours of work into the remaining two hours of daylight. Take two minutes to reset:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-base text-gray-800">
              <li>
                <strong>Drop everything except ONE thing.</strong> Ask yourself: <em>"If I can only protect one single task today before resting, which one is it?"</em>
              </li>
              <li>
                <strong>Cross off the rest without guilt.</strong> Visually crossing off non-essentials frees your mental bandwidth.
              </li>
              <li>
                <strong>Do that one thing, then stop.</strong> Surviving a derailed day with your single top priority intact is a massive win.
              </li>
            </ol>
          </section>

          {/* Section 7: Moving unfinished tasks */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              7. Moving Leftovers to Tomorrow (Without the Snowball)
            </h2>
            <p>
              If you have three unfinished tasks at 6:00 PM, resist the temptation to immediately tack them onto tomorrow's plan. If tomorrow already had four tasks, adding three more guarantees another overloaded day.
            </p>
            <p>
              Instead, make a deliberate choice:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-base text-gray-800">
              <li>If yesterday's unfinished task is critical, it replaces one of tomorrow's planned anchors.</li>
              <li>If it isn't urgent, move it to a weekly holding list or a scratch note.</li>
              <li>Never let your daily list grow larger than five total checkboxes.</li>
            </ul>
          </section>

          {/* Printable Daily Checklist Example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Printable Daily Checklist Format
            </h2>
            <p>
              A physical sheet sitting next to your keyboard keeps your attention anchored where it belongs. Here is a clean, simple layout you can print every morning:
            </p>

            <div className="p-5 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-900 shadow-[3px_3px_0px_0px_#000] space-y-3">
              <div className="flex items-center justify-between border-b border-black pb-2">
                <span className="font-sans font-bold uppercase text-xs tracking-wider">DAILY CHECKLIST</span>
                <span className="text-xs text-gray-600 font-sans">Date: ____________</span>
              </div>

              <div className="space-y-1.5">
                <p className="font-sans font-bold text-xs uppercase text-gray-600 mb-1">ANCHORS (TOP 3)</p>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span className="font-bold">Review math exercises 1–10 (at 08:30)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span className="font-bold">Draft project introduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span className="font-bold">Team feedback call at 16:30</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-black/20">
                <p className="font-sans font-bold text-xs uppercase text-gray-600 mb-1">SUPPORTING TASKS</p>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span>Grocery shopping (fruit, oats, milk)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span>Reply to professor's email</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-700 mt-2">
              You can generate and print this exact layout in seconds using the{' '}
              <Link href="/to-do-list" className="font-black text-black underline hover:bg-[#FFDE00]">
                Tablable To-Do List Maker
              </Link>
              . Type your daily items separated by commas, add times if you have appointments, and print a clean A4 PDF to keep your desk organized.
            </p>
          </section>

          {/* Tool CTA Box */}
          <BrutalCard shadow="lg" className="p-6 sm:p-8 bg-[#FFDE00] border-2 sm:border-[3px] border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                Plan today's tasks
              </h3>
              <p className="text-sm sm:text-base font-bold text-black">
                Create a clean printable daily checklist in 10 seconds. Free, simple, no signup.
              </p>
            </div>
            <BrutalButton
              id="daily-guide-open-todo-btn"
              variant="secondary"
              size="md"
              onClick={() => navigate('/to-do-list')}
              className="shrink-0 bg-white"
            >
              <span>MAKE TODAY'S LIST →</span>
            </BrutalButton>
          </BrutalCard>

          {/* Navigation & Related Guides */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-2 border-black">
            <BrutalButton
              id="daily-guide-back-to-guides-btn"
              variant="secondary"
              size="sm"
              onClick={() => navigate('/guides')}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
              <span>Back to Guides</span>
            </BrutalButton>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/guides/weekly-to-do-list-how-to-plan-your-week"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Next: Weekly To-Do List: How to Plan Your Week
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
