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
  ArrowRight,
  Type,
} from 'lucide-react';

export const HowManyWordsShouldAnEssayBe: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How Many Words Should an Essay Be? | TABLABLE"
        description="How long should an essay be? Learn how to work with word limits, stay on topic, and check your essay's word count for free."
        canonicalPath="/guides/how-many-words-should-an-essay-be"
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
            How Many Words Should an Essay Be?
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="yellow" size="md">
              WORD COUNTER
            </BrutalBadge>
            <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            How Many Words Should an Essay Be?
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            There is no single word count that applies to every essay. A college application response, a five-paragraph class assignment, and an undergraduate research paper all have different goals. Here is how to understand essay length ranges, hit your target without fluff, and edit cleanly.
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
              <span>Always check your assignment prompt or syllabus first—your instructor's instructions override any general rule.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Word limits indicate how much depth is expected, not just how many pages to fill.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>If your draft is too short, add concrete examples or address a counterargument instead of repeating yourself.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Check your body text separately from your title page and bibliography using an online word counter.</span>
            </li>
          </ul>
        </BrutalCard>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Why Essay Length Always Depends on the Assignment
            </h2>
            <p>
              When someone asks, <em>"How many words should an essay be?"</em>, the honest answer is that it depends entirely on what the essay is for. A teacher, admissions committee, or editor sets a word count to signal the <strong>scope</strong> of the assignment:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-base text-gray-800">
              <li>A <strong>short limit (250–500 words)</strong> asks you to get straight to the point with one focused idea and a brief example.</li>
              <li>A <strong>medium limit (750–1,500 words)</strong> expects a clear thesis supported by several distinct paragraphs and evidence.</li>
              <li>A <strong>longer paper (2,000+ words)</strong> requires background context, multiple sources, and analysis of competing viewpoints.</li>
            </ul>
            <p>
              Before relying on any general estimate, always check your assignment sheet, course syllabus, or application portal instructions. If a prompt gives a specific range—such as <em>"800 to 1,000 words"</em>—staying inside that window is the only rule that counts.
            </p>
          </section>

          {/* Section 2: General Ranges Table */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Common Essay Length Examples (General Reference)
            </h2>
            <p>
              While every school, university, and program sets its own requirements, here are practical examples of common ranges you will often encounter when no exact number is stated:
            </p>

            <div className="overflow-x-auto border-2 border-black shadow-[4px_4px_0px_0px_#000] bg-white my-2">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black font-black uppercase text-black">
                    <th className="p-3 sm:p-4 border-r-2 border-black">Essay / Writing Type</th>
                    <th className="p-3 sm:p-4 border-r-2 border-black">Typical Example Range</th>
                    <th className="p-3 sm:p-4">Usual Structure &amp; Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-medium text-gray-900">
                  <tr>
                    <td className="p-3 sm:p-4 border-r-2 border-black font-black text-black">
                      Short Response / Reflection
                    </td>
                    <td className="p-3 sm:p-4 border-r-2 border-black font-mono font-bold">
                      200 – 400 words
                    </td>
                    <td className="p-3 sm:p-4">
                      1 to 3 paragraphs answering a single reading question or discussion prompt.
                    </td>
                  </tr>
                  <tr className="bg-[#FAF8F5]">
                    <td className="p-3 sm:p-4 border-r-2 border-black font-black text-black">
                      Scholarship or Application Essay
                    </td>
                    <td className="p-3 sm:p-4 border-r-2 border-black font-mono font-bold">
                      250 – 650 words
                    </td>
                    <td className="p-3 sm:p-4">
                      Personal story or focused answer; online forms often enforce a strict maximum cap.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 border-r-2 border-black font-black text-black">
                      Standard Five-Paragraph Essay
                    </td>
                    <td className="p-3 sm:p-4 border-r-2 border-black font-mono font-bold">
                      500 – 800 words
                    </td>
                    <td className="p-3 sm:p-4">
                      Introduction, three supporting body paragraphs, and a concise conclusion.
                    </td>
                  </tr>
                  <tr className="bg-[#FAF8F5]">
                    <td className="p-3 sm:p-4 border-r-2 border-black font-black text-black">
                      Course / Argumentative Essay
                    </td>
                    <td className="p-3 sm:p-4 border-r-2 border-black font-mono font-bold">
                      1,000 – 1,500 words
                    </td>
                    <td className="p-3 sm:p-4">
                      Deeper argument incorporating cited sources, examples, and counterarguments.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 border-r-2 border-black font-black text-black">
                      Extended Research Paper
                    </td>
                    <td className="p-3 sm:p-4 border-r-2 border-black font-mono font-bold">
                      2,000 – 3,500+ words
                    </td>
                    <td className="p-3 sm:p-4">
                      Multi-section analysis with literature review, evidence, and detailed discussion.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs sm:text-sm font-bold text-gray-600">
              Note: These ranges are general examples, not universal rules. When in doubt, ask your teacher or check the assignment rubric.
            </p>
          </section>

          {/* Section 3: Why Padding Doesn't Work */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Why Padding an Essay With Filler Words Backfires
            </h2>
            <p>
              When you are 150 words short of a 1,000-word minimum at midnight, it is tempting to stretch every sentence with long phrases. Instead of writing <em>"because,"</em> you write <em>"due to the fact that."</em> Instead of stating a point once, you repeat it three times in slightly different words.
            </p>
            <p>
              The problem is that teachers and readers spot filler immediately. Wordy phrasing weakens your argument and makes good ideas sound vague:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold uppercase bg-black text-white px-2 py-0.5 inline-block mb-2">
                  PADDED WITH FILLER (26 WORDS)
                </span>
                <p className="text-sm text-gray-800 italic">
                  "In today's modern world of society, it is very important and essential to remember the fact that clear tables help readers understand data much more easily."
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold uppercase bg-[#FFDE00] border border-black text-black px-2 py-0.5 inline-block mb-2">
                  CLEAR + SUBSTANTIVE (26 WORDS)
                </span>
                <p className="text-sm text-gray-900 font-semibold">
                  "Clear tables help readers compare data quickly. For example, aligning prices to the right and keeping column headers short lets anyone scan a budget in seconds."
                </p>
              </div>
            </div>

            <p>
              Notice that both examples are <strong>26 words long</strong>. The first one says almost nothing; the second one reaches the exact same word count by adding a concrete example.
            </p>
          </section>

          {/* Section 4: How to Reach or Trim a Word Limit */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Practical Ways to Hit Your Target Word Count
            </h2>
            <p>
              Whether your draft is coming up short or running way over the limit, you can adjust the length cleanly without hurting the quality of your writing:
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <h3 className="font-black text-lg text-black mb-2">
                  If Your Essay Is Too Short (How to Expand Naturally)
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-gray-800">
                  <li><strong>Add a real-world example:</strong> Follow general claims with a specific case, quote, or scenario that illustrates your point.</li>
                  <li><strong>Explain the "why" behind your evidence:</strong> Don't just drop a quote or statistic and end the paragraph—add two sentences explaining how that evidence supports your thesis.</li>
                  <li><strong>Address a counterargument:</strong> Briefly acknowledge an opposing view and explain why your conclusion still holds up.</li>
                </ul>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <h3 className="font-black text-lg text-black mb-2">
                  If Your Essay Is Too Long (How to Trim Cleanly)
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-gray-800">
                  <li><strong>Cut throat-clearing openings:</strong> Delete phrases like <em>"It is interesting to note that"</em> or <em>"Throughout the course of history"</em> and start with the actual subject.</li>
                  <li><strong>Replace multi-word phrases with single verbs:</strong> Change <em>"make a decision"</em> to <em>"decide"</em>, and <em>"have an impact on"</em> to <em>"affect"</em>.</li>
                  <li><strong>Remove tangential paragraphs:</strong> If a paragraph doesn't directly support your main thesis, cut it or merge its best sentence into another section.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Checking Word Count While Editing */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              How to Check Your Essay's Word Count While Editing
            </h2>
            <p>
              One common mistake when checking essay length in a full document is accidentally counting your title page, headers, footnotes, and bibliography. Most instructors only count the <strong>main body of the essay</strong> (from the first word of your introduction to the last word of your conclusion).
            </p>
            <p>
              To get an accurate count in seconds:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-base text-gray-800">
              <li>Select and copy only the body paragraphs of your essay (excluding the works cited or reference list).</li>
              <li>
                Paste the text into the free{' '}
                <Link href="/word-counter" className="underline font-bold text-black hover:text-gray-700">
                  TABLABLE Word Counter
                </Link>
                .
              </li>
              <li>Check your exact word count, paragraph count, sentence count, and estimated reading time at the top of the page.</li>
              <li>If an online application portal also enforces a character limit, check the <strong>Characters</strong> card right next to the word count (see our guide on{' '}
                <Link href="/guides/word-count-vs-character-count" className="underline font-bold text-black hover:text-gray-700">
                  word count vs. character count
                </Link>{' '}
                or learn more about{' '}
                <Link href="/guides/how-to-count-words-in-a-text" className="underline font-bold text-black hover:text-gray-700">
                  how word counting works
                </Link>
                ).
              </li>
            </ol>
          </section>

          {/* Tool CTA Box */}
          <BrutalCard shadow="lg" className="p-6 sm:p-8 bg-[#FFDE00] border-2 sm:border-[3px] border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-black">
                <Type className="w-4 h-4 stroke-[2.5]" />
                <span>Free Essay Word Counter</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                Check your essay's word count
              </h3>
              <p className="text-sm sm:text-base font-bold text-black">
                Paste your draft to see live words, characters, sentences, paragraphs, and reading time.
              </p>
            </div>
            <BrutalButton
              id="guide-essay-words-open-tool-btn"
              variant="secondary"
              size="md"
              onClick={() => navigate('/word-counter')}
              className="shrink-0 bg-white"
            >
              <span>OPEN WORD COUNTER →</span>
            </BrutalButton>
          </BrutalCard>

          {/* Navigation & Related Guides */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-2 border-black">
            <BrutalButton
              id="guide-essay-words-back-btn"
              variant="secondary"
              size="sm"
              onClick={() => navigate('/guides')}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
              <span>Back to Guides</span>
            </BrutalButton>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/guides/how-to-count-words-in-a-text"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Read: How to Count Words in a Text
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
