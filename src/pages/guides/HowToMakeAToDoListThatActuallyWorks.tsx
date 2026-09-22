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
  AlertCircle,
  Calendar,
  Sparkles,
  ListTodo,
} from 'lucide-react';

export const HowToMakeAToDoListThatActuallyWorks: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Make a To-Do List That Actually Works | TABLABLE"
        description="Learn how to make a simple to-do list you can actually finish, with practical tips for choosing tasks, setting priorities, and keeping your list realistic."
        canonicalPath="/guides/how-to-make-a-to-do-list-that-actually-works"
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
            To-Do List That Actually Works
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
            How to Make a To-Do List That Actually Works
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Most to-do lists fail before lunchtime. You write down twenty tasks, get through three, and spend the rest of the afternoon feeling behind. Here is how to build a realistic list you can actually finish.
          </p>
        </header>

        {/* Summary Takeaway Box */}
        <BrutalCard shadow="md" className="p-5 sm:p-6 bg-[#FAF8F5] border-2 sm:border-[3px] border-black">
          <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wider text-black mb-3">
            <CheckSquare className="w-4 h-4 stroke-[3]" />
            <span>Key Takeaways</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-bold text-gray-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Limit daily core tasks to 3 items. Everything else is secondary.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Replace vague goals with concrete physical actions you can picture.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Attach times only to real appointments, not arbitrary tasks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Keep your active list visible on paper or a single clean card.</span>
            </li>
          </ul>
        </BrutalCard>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              1. Why Huge To-Do Lists Become Useless
            </h2>
            <p>
              When people sit down to make a to-do list, they usually write down every single obligation, chore, and long-term project sitting in their mind. By item twelve, the list is no longer a plan for today. It has turned into a guilt document.
            </p>
            <p>
              A list with twenty items creates two predictable reactions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
              <li>
                <strong>Analysis paralysis:</strong> You look at the page, see twenty demands on your time, and do not know where to begin. You end up scrolling on your phone instead.
              </li>
              <li>
                <strong>Productive procrastination:</strong> You pick the three easiest, least important chores (like organizing desktop files or checking tracking numbers) just to cross something off, while your real priorities sit untouched.
              </li>
            </ul>
            <p>
              A useful to-do list is not a wishlist. It is a narrow contract with yourself for what you can realistically complete before you go to bed.
            </p>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              2. How Many Tasks Belong on a Daily List?
            </h2>
            <p>
              Three. At most, three core tasks.
            </p>
            <p>
              If you finish three meaningful tasks in a day, that day was productive. When people try to schedule eight major priorities, none of them get the focus they require, and an unexpected interruption ruins the entire schedule.
            </p>
            <p>
              Group your daily obligations into two distinct buckets:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <div className="flex items-center gap-2 font-black text-sm uppercase text-black mb-2">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  <span>Must Do (Top 3)</span>
                </div>
                <p className="text-sm text-gray-700">
                  Non-negotiable outcomes. If your house caught on fire at 5:00 PM, getting these three done means the day was still a success.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <div className="flex items-center gap-2 font-black text-sm uppercase text-gray-700 mb-2">
                  <ListTodo className="w-4 h-4 stroke-[2.5]" />
                  <span>Nice to Do (If Time Allows)</span>
                </div>
                <p className="text-sm text-gray-700">
                  Smaller errands, quick administrative chores, or non-urgent replies. You only touch these once your top three are finished.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              3. Vague Tasks vs. Specific Actions
            </h2>
            <p>
              The fastest way to procrastinate on a task is to write it down as a broad, blurry topic. When you read a vague item, your brain has to work out what the first physical step is before you can start.
            </p>

            {/* Comparison Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
              <div className="p-4 bg-[#FFF5F5] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <div className="flex items-center gap-1.5 font-black text-red-600 uppercase text-xs tracking-wider mb-2">
                  <XCircle className="w-4 h-4 stroke-[2.5]" />
                  <span>Bad List (Vague &amp; Heavy)</span>
                </div>
                <ul className="space-y-1.5 font-mono text-xs sm:text-sm text-gray-800">
                  <li>• Study</li>
                  <li>• Work on project</li>
                  <li>• Clean</li>
                  <li>• Do stuff</li>
                </ul>
              </div>

              <div className="p-4 bg-[#F2FBF4] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <div className="flex items-center gap-1.5 font-black text-green-700 uppercase text-xs tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  <span>Better List (Clear &amp; Actionable)</span>
                </div>
                <ul className="space-y-1.5 font-mono text-xs sm:text-sm text-gray-900 font-bold">
                  <li>• Review algebra exercises 1–10</li>
                  <li>• Write the introduction of the project</li>
                  <li>• Clean the desk</li>
                  <li>• Send the project email</li>
                </ul>
              </div>
            </div>

            <p>
              Why is the second version so much easier to act on?
            </p>
            <p>
              Because there is zero confusion about what "done" looks like. You do not have to wonder what "Study" means or when you are allowed to stop. You sit down, open exercises 1 through 10, solve them, and draw a line through the task.
            </p>
          </section>

          {/* Section 4 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              4. Breaking Down Big Scary Tasks
            </h2>
            <p>
              If a task has been sitting on your list for three days untouched, it is probably not a single task. It is a multi-step project disguised as a task.
            </p>
            <p>
              Take something like <em>"Write research report"</em>. Nobody sits down and simply "writes a report." That item contains five different steps: finding sources, reading two articles, making an outline, writing a rough draft, and editing.
            </p>
            <p>
              Cut the scary task into the smallest physical first action:
            </p>
            <div className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] text-sm">
              <p className="font-bold text-black mb-2">Don't write:</p>
              <p className="font-mono text-xs sm:text-sm text-red-600 mb-3">□ Redesign portfolio website</p>
              <p className="font-bold text-black mb-2">Write the next immediate step:</p>
              <p className="font-mono text-xs sm:text-sm text-green-700 font-bold">□ Sketch 3 layout ideas on a sheet of paper</p>
            </div>
            <p>
              Once you finish the sketch, momentum takes over. You can write the next small action on tomorrow's list.
            </p>
          </section>

          {/* Section 5 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              5. When to Add Times (And When to Avoid Them)
            </h2>
            <p>
              A common trap is trying to schedule every task to an exact hour: <em>"09:00 Read, 10:00 Write, 11:00 Email, 12:00 Lunch."</em>
            </p>
            <p>
              This is brittle. The minute your 10:00 AM writing session runs 20 minutes long or a phone call comes in, the entire schedule breaks down. You spend the rest of the day recalculating times in your head.
            </p>
            <p>
              Follow a simple rule: <strong>Only add times to events that involve other people or hard deadlines.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-base text-gray-800">
              <li><strong>Needs a time:</strong> 14:00 Dentist appointment, 16:30 Team standup call.</li>
              <li><strong>Does NOT need a time:</strong> Review chapter 3, draft introduction, wash dishes.</li>
            </ul>
            <p>
              Let flexible tasks stay flexible. Work on them during your open focus blocks between fixed appointments.
            </p>
          </section>

          {/* Section 6 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              6. Leave Empty Space for the Real World
            </h2>
            <p>
              Nobody has eight continuous hours of uninterrupted focus in a day. Wi-Fi drops, a package arrives at the door, an email requires an immediate answer, or your energy dips after lunch.
            </p>
            <p>
              If your list requires 100% of your available hours to finish, you are guaranteeing failure before the day begins.
            </p>
            <p>
              Plan roughly 60% of your day. Leave the remaining 40% empty as a buffer. If nothing goes wrong, you finish early and get to relax. If emergencies crop up, your core priorities still get completed.
            </p>
          </section>

          {/* Section 7 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              7. What to Do With Unfinished Tasks
            </h2>
            <p>
              At the end of the day, having one or two items left over is normal. The mistake is mindlessly copying them to tomorrow's list day after day until you have a stale list of chores you resent.
            </p>
            <p>
              Run every leftover task through this quick test:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-base text-gray-800">
              <li>
                <strong>Does this still matter tomorrow?</strong> If yes, make it one of your three priority items for tomorrow morning.
              </li>
              <li>
                <strong>Can I drop it entirely?</strong> If a task has been postponed for four days and nothing bad happened, it probably wasn't important. Cross it off and let it go.
              </li>
              <li>
                <strong>Is it too big?</strong> If you avoided it all day because it felt overwhelming, shrink it into a 15-minute action before copying it over.
              </li>
            </ol>
          </section>

          {/* Section 8: 5-minute routine */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              8. Your 5-Minute Morning To-Do List
            </h2>
            <p>
              You don't need a complicated journaling system. Every morning, take five minutes with a sheet of paper or a quick checklist maker:
            </p>

            <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">1</span>
                <p className="text-sm text-gray-800">
                  <strong>Minute 1: Brain Dump.</strong> Jot down everything currently bouncing around in your head onto scratch paper. Don't worry about order or neatness.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">2</span>
                <p className="text-sm text-gray-800">
                  <strong>Minute 2: Pick 3 Core Tasks.</strong> Look at the dump and circle the three things that actually matter today.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">3</span>
                <p className="text-sm text-gray-800">
                  <strong>Minute 3: Rewrite as Actions.</strong> Turn each of the three into a specific physical action starting with a clear verb (e.g. <em>"Email Sarah about invoice"</em> instead of <em>"Invoicing"</em>).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">4</span>
                <p className="text-sm text-gray-800">
                  <strong>Minute 4: Add Real Times.</strong> Note any fixed appointments or hard deadlines. Leave the rest untimed.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDE00] border border-black font-black text-xs flex items-center justify-center shrink-0">5</span>
                <p className="text-sm text-gray-800">
                  <strong>Minute 5: Put It in Front of You.</strong> Place the checklist on your physical desk. Close unnecessary tabs and get to work on item one.
                </p>
              </div>
            </div>
          </section>

          {/* Ready to use example */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              A Ready-to-Use Checklist Example
            </h2>
            <p>
              Here is what a complete, balanced day looks like in practice. Notice how simple and uncluttered it is:
            </p>

            <div className="p-5 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-900 shadow-[3px_3px_0px_0px_#000] space-y-2">
              <p className="font-bold text-black border-b border-black pb-1 mb-2 font-sans uppercase text-xs tracking-wider">
                TODAY'S CHECKLIST
              </p>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black inline-block" />
                <span>Review algebra exercises 1–10</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black inline-block" />
                <span>Write 2-paragraph introduction for history project</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black inline-block" />
                <span>14:30 — Dentist appointment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black inline-block" />
                <span>Send project feedback email to team</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black inline-block" />
                <span>Grocery shopping (milk, eggs, fruit)</span>
              </div>
            </div>

            <p className="text-sm text-gray-700 mt-2">
              If you want to turn a simple list like this into a neat printable sheet you can keep on your desk, you can use the{' '}
              <Link href="/to-do-list" className="font-black text-black underline hover:bg-[#FFDE00]">
                Tablable To-Do List Maker
              </Link>
              . Just type your tasks separated by commas, preview the list, and download an A4 PDF checklist in a couple of seconds.
            </p>
          </section>

          {/* Tool CTA Box */}
          <BrutalCard shadow="lg" className="p-6 sm:p-8 bg-[#FFDE00] border-2 sm:border-[3px] border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                Make your checklist now
              </h3>
              <p className="text-sm sm:text-base font-bold text-black">
                Type your tasks, add times if needed, and print a clean daily checklist for your desk.
              </p>
            </div>
            <BrutalButton
              id="guide-open-todo-btn"
              variant="secondary"
              size="md"
              onClick={() => navigate('/to-do-list')}
              className="shrink-0 bg-white"
            >
              <span>OPEN TO-DO LIST MAKER →</span>
            </BrutalButton>
          </BrutalCard>

          {/* Navigation & Related Guides */}
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
                href="/guides/daily-to-do-list-how-to-plan-your-day"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Next: Daily To-Do List: How to Plan Your Day
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
