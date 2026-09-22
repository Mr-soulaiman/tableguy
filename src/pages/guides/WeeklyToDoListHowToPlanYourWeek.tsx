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
  CalendarDays,
  Target,
  Clock3,
} from 'lucide-react';

export const WeeklyToDoListHowToPlanYourWeek: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="Weekly To-Do List: How to Plan Your Week | TABLABLE"
        description="Learn how to make a weekly to-do list that keeps important tasks visible without turning your week into an impossible schedule."
        canonicalPath="/guides/weekly-to-do-list-how-to-plan-your-week"
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
            Weekly To-Do List: Plan Your Week
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
            Weekly To-Do List: How to Plan Your Week
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Planning a week does not mean scheduling what you will be doing at 2:15 PM on Thursday. A weekly to-do list should give you perspective on what matters over the next seven days without turning your life into a rigid calendar grid.
          </p>
        </header>

        {/* Summary Takeaway Box */}
        <BrutalCard shadow="md" className="p-5 sm:p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black">
          <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wider text-black mb-3">
            <CalendarDays className="w-4 h-4 stroke-[3]" />
            <span>Key Takeaways</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-bold text-gray-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>A weekly list is a menu of outcomes, not a rigid minute-by-minute schedule.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Sort obligations into Must Happen, Should Happen, and If There's Time.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Avoid dumping 80% of your weekly obligations onto Monday morning.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Review on Friday afternoon to intentionally close or prune unfinished tasks.</span>
            </li>
          </ul>
        </BrutalCard>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              1. Why Your Weekly List Should Not Be a Giant Daily Schedule
            </h2>
            <p>
              When people attempt weekly planning, they usually make one common mistake: they draw five columns labeled Monday through Friday, and try to assign every task to a specific day seven days in advance.
            </p>
            <p>
              Here is what happens in reality:
            </p>
            <p>
              On Tuesday at 11:00 AM, a professor schedules an impromptu quiz, a client requests a sudden revision, or you get stuck waiting in line at the bank. Tuesday's planned tasks spill over into Wednesday. Now Wednesday is doubly overloaded. By Thursday afternoon, your entire weekly plan is a messy graveyard of crossed-out arrows and guilt.
            </p>
            <div className="p-4 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-800 shadow-[3px_3px_0px_0px_#000]">
              <p className="font-sans font-bold text-black mb-1">THE DIFFERENCE:</p>
              <p>• <strong>Your Calendar</strong> is for fixed commitments with specific times (dentist, classes, team calls).</p>
              <p>• <strong>Your Weekly List</strong> is a master pool of outcomes you pull from each morning.</p>
            </div>
            <p>
              Keeping them separate preserves your flexibility while keeping major deadlines front and center.
            </p>
          </section>

          {/* Section 2: Step-by-Step system */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              2. The 4-Step Weekly Setup
            </h2>
            <p>
              Set aside 15 minutes on Sunday evening or Monday morning to organize your week:
            </p>

            <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">1</span>
                <div>
                  <p className="text-sm font-bold text-black">Step 1: Gather Hard Deadlines</p>
                  <p className="text-sm text-gray-700">Check your email, syllabus, or project board. What has a hard, non-negotiable deadline this week? Note the exact day and time.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">2</span>
                <div>
                  <p className="text-sm font-bold text-black">Step 2: Identify Fixed Calendar Events</p>
                  <p className="text-sm text-gray-700">Mark doctors appointments, live classes, interviews, and team syncs. These tell you how many actual working hours you have available each day.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">3</span>
                <div>
                  <p className="text-sm font-bold text-black">Step 3: Choose 3–5 Weekly "Big Rocks"</p>
                  <p className="text-sm text-gray-700">What are the 3 to 5 substantial milestones that, if completed by Friday, make the week an undeniable win?</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">4</span>
                <div>
                  <p className="text-sm font-bold text-black">Step 4: Create a "Later" Holding Area</p>
                  <p className="text-sm text-gray-700">Any chore that would be nice to do but has no urgency belongs in a separate holding zone so it doesn't distract you during active work hours.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Concrete Example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              3. A Real Example: Organizing a Weekly Task Pool
            </h2>
            <p>
              Imagine you sit down on Monday morning with this raw jumble of seven tasks for a student or freelance worker:
            </p>

            <div className="p-4 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-800 shadow-[3px_3px_0px_0px_#000]">
              <p className="font-sans font-bold text-black mb-2 uppercase text-xs tracking-wider">Raw brain dump for the week:</p>
              <ul className="space-y-1">
                <li>□ Finish math assignment</li>
                <li>□ Write project introduction</li>
                <li>□ Buy groceries</li>
                <li>□ Send email to professor</li>
                <li>□ Clean room</li>
                <li>□ Work on website</li>
                <li>□ Go to appointment</li>
              </ul>
            </div>

            <p>
              Instead of assigning them to arbitrary days, organize them into three clear tiers of urgency:
            </p>

            {/* Organized Tiers */}
            <div className="flex flex-col gap-3 my-2">
              <div className="p-4 bg-[#FFF8EE] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-black text-sm uppercase text-black">TIER 1: MUST HAPPEN (Hard Deadlines)</span>
                  <span className="text-[11px] font-mono font-bold bg-[#FFDE00] border border-black px-2 py-0.5">CRITICAL</span>
                </div>
                <ul className="space-y-1.5 font-mono text-xs sm:text-sm text-gray-900 font-bold">
                  <li>• Finish math assignment (Due Thursday 17:00)</li>
                  <li>• Doctor appointment (Wednesday 14:30)</li>
                  <li>• Send email to professor regarding grade query</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2 font-sans font-normal">
                  <strong>Why:</strong> The assignment has a strict deadline, the appointment is on someone else's calendar, and the email blocks future progress.
                </p>
              </div>

              <div className="p-4 bg-[#F4F9FF] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-black text-sm uppercase text-black">TIER 2: SHOULD HAPPEN (Important Progress)</span>
                  <span className="text-[11px] font-mono font-bold bg-white border border-black px-2 py-0.5">HIGH VALUE</span>
                </div>
                <ul className="space-y-1.5 font-mono text-xs sm:text-sm text-gray-900 font-bold">
                  <li>• Write draft introduction for history project</li>
                  <li>• Grocery shopping (restock staples for the week)</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2 font-sans font-normal">
                  <strong>Why:</strong> The project isn't due this week, but writing the draft now prevents an all-nighter next week. Groceries keep you nourished and focused.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-black text-sm uppercase text-gray-700">TIER 3: IF THERE'S TIME (Low Pressure)</span>
                  <span className="text-[11px] font-mono font-bold bg-white border border-black px-2 py-0.5 text-gray-600">BONUS</span>
                </div>
                <ul className="space-y-1.5 font-mono text-xs sm:text-sm text-gray-700">
                  <li>• Clean and vacuum desk &amp; room</li>
                  <li>• Work on personal website portfolio styling</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2 font-sans font-normal">
                  <strong>Why:</strong> Great things to accomplish on a quiet Friday afternoon, but delaying them by four days harms nobody.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Avoid the Monday trap */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              4. Beware the "Monday Trap"
            </h2>
            <p>
              When people feel anxious about their week, their natural instinct is to try to finish half of it on Monday.
            </p>
            <p>
              By Monday at 3:00 PM, you have completed two tasks, you are exhausted, and you feel like you have failed before the week has even started.
            </p>
            <p>
              Instead, <strong>spread large tasks across several days</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-base text-gray-800">
              <li><strong>Tuesday:</strong> Find 3 sources and outline the math assignment.</li>
              <li><strong>Wednesday:</strong> Solve problems 1 through 8.</li>
              <li><strong>Thursday:</strong> Solve the final two problems, review, and submit.</li>
            </ul>
            <p>
              Breaking big commitments into steady 45-minute daily sessions produces far higher quality work than rushing through them in one chaotic marathon.
            </p>
          </section>

          {/* Section 5: The Friday Review */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              5. The Friday Afternoon Reset
            </h2>
            <p>
              Never let a week end without closing the loop. On Friday afternoon, spend five minutes looking over your weekly checklist:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
              <li>
                <strong>Celebrate crossed-off items.</strong> Visually acknowledging what you finished builds genuine confidence and calms the feeling of constant hustle.
              </li>
              <li>
                <strong>Triage unfinished tasks with intent.</strong> If an item didn't get done, ask why. Did you lack time, or did you realize it didn't really matter? If it still matters, move it intentionally to next week's pool. If it doesn't, cross it off and delete it completely.
              </li>
            </ul>
            <p>
              Closing out the week gives you psychological permission to actually rest over the weekend without lingering anxiety.
            </p>
          </section>

          {/* Ready to print section */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Printable Weekly Checklist Format
            </h2>
            <p>
              Having a physical weekly sheet pinned near your desk or folded in your notebook keeps your broader priorities in plain sight while you tackle individual days.
            </p>

            <div className="p-5 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-900 shadow-[3px_3px_0px_0px_#000] space-y-3">
              <div className="flex items-center justify-between border-b border-black pb-2">
                <span className="font-sans font-bold uppercase text-xs tracking-wider">WEEKLY PRIORITIES</span>
                <span className="text-xs text-gray-600 font-sans">Week of: ____________</span>
              </div>

              <div className="space-y-1.5">
                <p className="font-sans font-bold text-xs uppercase text-gray-600 mb-1">MUST HAPPEN (DEADLINES)</p>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span className="font-bold">Math assignment due Thursday at 17:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span className="font-bold">Dentist appointment Wednesday at 14:30</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span className="font-bold">Send project proposal email to professor</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-black/20">
                <p className="font-sans font-bold text-xs uppercase text-gray-600 mb-1">IMPORTANT PROGRESS</p>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span>Draft history project introduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span>Grocery shopping (weekly restock)</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-black/20">
                <p className="font-sans font-bold text-xs uppercase text-gray-600 mb-1">IF THERE'S TIME</p>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span>Clean and organize desk setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black inline-block" />
                  <span>Update portfolio project screenshots</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-700 mt-2">
              You can quickly format and print this weekly checklist using the{' '}
              <Link href="/to-do-list" className="font-black text-black underline hover:bg-[#FFDE00]">
                Tablable To-Do List Maker
              </Link>
              . Enter your tasks separated by commas, add times to appointments or deadlines, and download an A4 PDF checklist ready for your bulletin board.
            </p>
          </section>

          {/* Tool CTA Box */}
          <BrutalCard shadow="lg" className="p-6 sm:p-8 bg-[#FFDE00] border-2 sm:border-[3px] border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                Plan this week's priorities
              </h3>
              <p className="text-sm sm:text-base font-bold text-black">
                Turn your weekly obligations into a clean, printable A4 checklist with one click.
              </p>
            </div>
            <BrutalButton
              id="weekly-guide-open-todo-btn"
              variant="secondary"
              size="md"
              onClick={() => navigate('/to-do-list')}
              className="shrink-0 bg-white"
            >
              <span>CREATE WEEKLY CHECKLIST →</span>
            </BrutalButton>
          </BrutalCard>

          {/* Navigation & Related Guides */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-2 border-black">
            <BrutalButton
              id="weekly-guide-back-to-guides-btn"
              variant="secondary"
              size="sm"
              onClick={() => navigate('/guides')}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
              <span>Back to Guides</span>
            </BrutalButton>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/guides/how-to-make-a-to-do-list-that-actually-works"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Make a To-Do List That Actually Works
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
