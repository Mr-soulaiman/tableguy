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
  ArrowRight,
  Layers,
  HelpCircle,
  ListTodo,
  Sparkles,
} from 'lucide-react';

export const ToDoListVsChecklist: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="To-Do List vs. Checklist: What's the Difference? | TABLABLE"
        description="To-do lists and checklists look similar, but they are useful for different things. Learn the difference and when to use each one."
        canonicalPath="/guides/to-do-list-vs-checklist"
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
            To-Do List vs. Checklist
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
            To-Do List vs. Checklist: What's the Difference?
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            They both have little boxes you can tick with a pen. They both list items line by line. So what is actually different between a to-do list and a checklist? Understanding the distinction changes how you organize your daily work.
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
              <span>A to-do list decides what to get done; a checklist ensures nothing is missed.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>To-do lists change constantly day to day; checklists are often reusable processes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Complex projects start as a to-do item and expand into a detailed checklist.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Use both together: pick your daily tasks, then run checklists for procedure.</span>
            </li>
          </ul>
        </BrutalCard>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              The Core Difference in Simple Terms
            </h2>
            <p>
              The difference comes down to one core idea:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold uppercase bg-[#FFDE00] border border-black px-2 py-0.5 inline-block mb-2">
                  TO-DO LIST
                </span>
                <h3 className="font-black text-lg text-black mb-1">Things you need or want to do</h3>
                <p className="text-sm text-gray-700">
                  A dynamic, changing list of intentions. You choose these items based on priority, urgency, and available energy today.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold uppercase bg-white border border-black px-2 py-0.5 inline-block mb-2">
                  CHECKLIST
                </span>
                <h3 className="font-black text-lg text-black mb-1">A list to make sure nothing is missed</h3>
                <p className="text-sm text-gray-700">
                  A verification tool for a specific process. The items are predetermined to prevent human error or forgotten steps.
                </p>
              </div>
            </div>

            <p>
              Look at two concrete examples side by side:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-4 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-800 shadow-[2px_2px_0px_0px_#000]">
                <p className="font-sans font-bold text-black mb-2 uppercase text-xs tracking-wider border-b border-black pb-1">
                  EXAMPLE 1: TO-DO LIST
                </p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                    <span>Finish homework</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                    <span>Buy groceries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                    <span>Reply to email</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                    <span>Clean room</span>
                  </div>
                </div>
                <p className="font-sans text-[11px] text-gray-600 mt-3 pt-2 border-t border-black/20">
                  These are individual, unrelated goals you intend to accomplish today.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-800 shadow-[2px_2px_0px_0px_#000]">
                <p className="font-sans font-bold text-black mb-2 uppercase text-xs tracking-wider border-b border-black pb-1">
                  EXAMPLE 2: CHECKLIST (MOVING HOUSE)
                </p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                    <span>Pack clothes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                    <span>Pack kitchen items</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                    <span>Label boxes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                    <span>Disconnect internet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                    <span>Take meter readings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                    <span>Check every room</span>
                  </div>
                </div>
                <p className="font-sans text-[11px] text-gray-600 mt-3 pt-2 border-t border-black/20">
                  This is about making sure an entire procedure is 100% complete without missing a critical step.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Sometimes the Same List Can Be Both
            </h2>
            <p>
              In many real-world scenarios, a list blends elements of both formats. Consider preparing for an overseas trip:
            </p>

            <div className="p-5 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-900 shadow-[3px_3px_0px_0px_#000] max-w-md">
              <p className="font-sans font-bold text-black mb-2 uppercase text-xs tracking-wider border-b border-black pb-1">
                TRIP PREPARATION
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                  <span>Book hotel</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                  <span>Buy train tickets</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                  <span>Pack passport</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                  <span>Charge power bank</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-black inline-block" />
                  <span>Check travel insurance documents</span>
                </div>
              </div>
            </div>

            <p>
              Notice how this works on two levels:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-base text-gray-800">
              <li>It is a <strong>to-do list</strong> because these are active tasks you must complete before leaving your apartment.</li>
              <li>It is a <strong>checklist</strong> because its primary purpose is ensuring you don't arrive at the airport without your passport or boarding pass.</li>
            </ul>
            <p>
              Recognizing this dual nature helps you design your lists with the right amount of detail.
            </p>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              When Should You Use a To-Do List?
            </h2>
            <p>
              Use a to-do list when you are deciding how to allocate your attention and energy over the coming hours. A to-do list answers the question: <em>"What should I work on right now?"</em>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-bold text-gray-800">
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                • Daily study and revision sessions
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                • Weekly school and university assignments
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                • Workplace projects and deliverables
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                • Personal errands and home maintenance
              </div>
            </div>
            <p>
              To-do lists are flexible. If you only get through three of your five items today, you can roll the remaining two over to tomorrow without disaster.
            </p>
          </section>

          {/* Section 4 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              When Should You Use a Checklist?
            </h2>
            <p>
              Use a checklist when forgetting a single step carries consequences, or when an activity follows a repeatable sequence. A checklist answers the question: <em>"Did I remember every critical part of this process?"</em>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-bold text-gray-800">
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                • Packing luggage for a flight
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                • Deep cleaning routines and sanitization
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                • Moving into or handing over an apartment
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                • Opening or closing a store or office
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                • Event planning and catering logistics
              </div>
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                • Software releases and deployment steps
              </div>
            </div>
            <p>
              Pilots and surgeons rely on checklists because skipping a single small detail (like checking fuel valves or sterilizing equipment) can cause catastrophic failure. You don't improvise a checklist on the fly; you follow it systematically.
            </p>
          </section>

          {/* Section 5: Comparison Table */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              To-Do List or Checklist? A Quick Comparison
            </h2>
            <p>
              Here is a quick reference comparing how both formats function:
            </p>

            <div className="overflow-x-auto my-2">
              <table className="w-full border-collapse border-2 border-black text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black">
                    <th className="p-3 font-black uppercase border-r-2 border-black">Feature</th>
                    <th className="p-3 font-black uppercase border-r-2 border-black">To-Do List</th>
                    <th className="p-3 font-black uppercase">Checklist</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black bg-white">
                  <tr>
                    <td className="p-3 font-bold text-black border-r-2 border-black">Main purpose</td>
                    <td className="p-3 text-gray-800 border-r-2 border-black">Decide what needs to get done</td>
                    <td className="p-3 text-gray-800">Make sure nothing is missed</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-black border-r-2 border-black">Typical use</td>
                    <td className="p-3 text-gray-800 border-r-2 border-black">Daily tasks and work goals</td>
                    <td className="p-3 text-gray-800">Repeated procedures and processes</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-black border-r-2 border-black">Tasks change often</td>
                    <td className="p-3 text-gray-800 border-r-2 border-black">Yes, changes every day</td>
                    <td className="p-3 text-gray-800">Rarely, often reused repeatedly</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-black border-r-2 border-black">Order of steps</td>
                    <td className="p-3 text-gray-800 border-r-2 border-black">Flexible, based on preference</td>
                    <td className="p-3 text-gray-800">Often strict and sequential</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-black border-r-2 border-black">Example</td>
                    <td className="p-3 font-mono text-xs border-r-2 border-black">"Finish report"</td>
                    <td className="p-3 font-mono text-xs">"Report submission checklist"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Turning to-do into checklist */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Can You Turn a To-Do List into a Checklist?
            </h2>
            <p>
              Yes. In fact, this is often the secret to conquering overwhelming tasks that keep getting postponed.
            </p>
            <p>
              When a single to-do item feels too big or intimidating to begin, expand that item into a sequential checklist:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-5 bg-[#FAF8F5] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase bg-black text-white px-2 py-0.5 inline-block mb-2">
                    SINGLE TO-DO ITEM
                  </span>
                  <p className="text-base font-black text-black">"Prepare presentation"</p>
                  <p className="text-xs text-gray-600 mt-2">
                    Vague and heavy. It invites procrastination because you don't know which physical step to start with.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold uppercase bg-[#FFDE00] border border-black px-2 py-0.5 inline-block mb-2">
                  CONVERTED STEP CHECKLIST
                </span>
                <div className="space-y-1.5 font-mono text-xs text-gray-900">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-black inline-block" />
                    <span>Choose topic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-black inline-block" />
                    <span>Create outline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-black inline-block" />
                    <span>Make slides</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-black inline-block" />
                    <span>Add images</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-black inline-block" />
                    <span>Check spelling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-black inline-block" />
                    <span>Practice presentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-black inline-block" />
                    <span>Export final file</span>
                  </div>
                </div>
              </div>
            </div>

            <p>
              By converting the single heavy to-do item into a concrete checklist, friction disappears. You can cross off the first two steps in ten minutes.
            </p>
          </section>

          {/* Section 7: Which one should you use? */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Which One Should You Use?
            </h2>
            <p>
              You don't have to choose between them exclusively.
            </p>
            <p>
              Use a <strong>to-do list</strong> in the morning when you sit down with your coffee to decide what you will accomplish today. Limit it to your three core priorities.
            </p>
            <p>
              Use a <strong>checklist</strong> whenever you are executing a specific process—like packing a bag, turning in an assignment, or cleaning your apartment before guests arrive—so you never have to worry about missing an important detail.
            </p>
          </section>

          {/* Section 8: Tablable connection */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Turn Your Tasks into a Clean Checklist
            </h2>
            <p>
              When you have a list of tasks in your head, the easiest way to organize them is to turn them into a clean printable checklist.
            </p>
            <p>
              With the free{' '}
              <Link href="/to-do-list" className="font-black text-black underline hover:bg-[#FFDE00]">
                Tablable To-Do List Maker
              </Link>
              , you can paste comma-separated tasks directly into the editor:
            </p>

            <div className="p-4 bg-white border-2 border-black font-mono text-xs sm:text-sm text-gray-800 shadow-[3px_3px_0px_0px_#000] my-1">
              Study math, buy groceries, call mom, finish project
            </div>

            <p className="text-sm text-gray-700">
              The tool instantly formats them with clean checkboxes, adds time badges for any scheduled appointments, and lets you download a ready-to-print A4 PDF without creating an account.
            </p>
          </section>

          {/* Tool CTA Box */}
          <BrutalCard shadow="lg" className="p-6 sm:p-8 bg-[#FFDE00] border-2 sm:border-[3px] border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                Make your to-do checklist
              </h3>
              <p className="text-sm sm:text-base font-bold text-black">
                Convert your tasks into an easy-to-print checklist and download your PDF in seconds.
              </p>
            </div>
            <BrutalButton
              id="compare-guide-open-todo-btn"
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
              id="compare-guide-back-to-guides-btn"
              variant="secondary"
              size="sm"
              onClick={() => navigate('/guides')}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
              <span>Back to Guides</span>
            </BrutalButton>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/guides/printable-to-do-list-how-to-make-one-for-free"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: Printable To-Do List: How to Make One for Free
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
