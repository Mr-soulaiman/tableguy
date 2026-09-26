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

export const HowToCountWordsInAText: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="How to Count Words in a Text: A Simple Guide | TABLABLE"
        description="Learn how to count words in a text, understand word-count rules, and check your text instantly with a free online word counter."
        canonicalPath="/guides/how-to-count-words-in-a-text"
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
            How to Count Words in a Text
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
            How to Count Words in a Text: A Simple Guide
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Whether you are finishing a school assignment, writing an application form with a strict limit, or editing an article, knowing your exact word count saves time and guesswork. Here is how word counting actually works and how to check any text in seconds.
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
              <span>A word is any continuous group of characters separated by spaces or line breaks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Multiple spaces and blank lines are ignored so they never inflate your count.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Hyphenated words and contractions like "don't" or "well-known" usually count as one word.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Paste or type into an online word counter to check words, characters, and sentences live.</span>
            </li>
          </ul>
        </BrutalCard>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              What Is a Word Count?
            </h2>
            <p>
              At its simplest, a <strong>word count</strong> is the total number of individual words in a piece of writing. In almost all digital editors and online tools, a word is defined by a straightforward rule: any sequence of characters separated by whitespace (spaces, tabs, or line breaks).
            </p>
            <p>
              Take this short sentence as an example:
            </p>
            <div className="p-4 bg-white border-2 border-black font-mono text-sm text-gray-900 shadow-[3px_3px_0px_0px_#000]">
              Please send the final report by Friday afternoon.
            </div>
            <p>
              Count the items separated by spaces and you get <strong>8 words</strong>. Even though the last word ("afternoon.") has a period attached to it, the period is part of that token and does not count as a separate word.
            </p>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Simple Ways to Count Words in Any Text
            </h2>
            <p>
              Depending on where your text lives, you have three practical ways to check its length:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold uppercase bg-[#FFDE00] border border-black px-2 py-0.5 inline-block mb-2">
                  METHOD 1
                </span>
                <h3 className="font-black text-lg text-black mb-1">Online Word Counter</h3>
                <p className="text-sm text-gray-700">
                  Copy your text from an email, PDF, webpage, or notes app and paste it into a browser tool like the{' '}
                  <Link href="/word-counter" className="underline font-bold text-black hover:text-gray-700">
                    TABLABLE Word Counter
                  </Link>
                  . You see the word, character, sentence, and paragraph counts immediately without creating a file.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold uppercase bg-white border border-black px-2 py-0.5 inline-block mb-2">
                  METHOD 2
                </span>
                <h3 className="font-black text-lg text-black mb-1">Word Processors</h3>
                <p className="text-sm text-gray-700">
                  If you are already writing inside Microsoft Word or Google Docs, check the bottom status bar or press <code className="font-mono text-xs bg-gray-100 px-1 border">Ctrl+Shift+C</code> (<code className="font-mono text-xs bg-gray-100 px-1 border">Cmd+Shift+C</code> on Mac) to view document statistics.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold uppercase bg-white border border-black px-2 py-0.5 inline-block mb-2">
                  METHOD 3
                </span>
                <h3 className="font-black text-lg text-black mb-1">Highlighting a Section</h3>
                <p className="text-sm text-gray-700">
                  When you only need the length of a single paragraph or abstract—not the title page or bibliography—select just that section and paste it into a clean counter.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              How Spaces, Punctuation, Numbers, and Line Breaks Are Handled
            </h2>
            <p>
              People often wonder why two tools occasionally differ by a word or two, or how edge cases like numbers and symbols are counted. Here is how standard word counters treat everyday text elements:
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="font-black text-lg text-black mb-1">
                  1. Spaces and Multiple Spaces
                </h3>
                <p className="text-sm sm:text-base text-gray-800">
                  Spaces act as dividers between words. Whether you put one space or five accidental spaces between two words, a good word counter treats them as a single boundary. Empty spaces by themselves are never counted as words.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="font-black text-lg text-black mb-1">
                  2. Punctuation, Contractions, and Hyphens
                </h3>
                <p className="text-sm sm:text-base text-gray-800">
                  Standard punctuation attached to a word (commas, periods, question marks) stays grouped with that word. Contractions like <em>don't</em>, <em>it's</em>, and <em>we're</em> count as <strong>1 word</strong> because there is no space inside them. Similarly, hyphenated words like <em>check-in</em> or <em>long-term</em> count as <strong>1 word</strong> when written without spaces.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="font-black text-lg text-black mb-1">
                  3. Numbers, Dates, and Prices
                </h3>
                <p className="text-sm sm:text-base text-gray-800">
                  Any standalone number separated by spaces counts as one word. For example, in <em>"We ordered 25 boxes on May 14 for $120"</em>, the numbers <code className="font-mono text-xs bg-gray-100 px-1 border">25</code>, <code className="font-mono text-xs bg-gray-100 px-1 border">14</code>, and <code className="font-mono text-xs bg-gray-100 px-1 border">$120</code> each count as 1 word, bringing the total sentence to 9 words.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="font-black text-lg text-black mb-1">
                  4. Line Breaks and Paragraphs
                </h3>
                <p className="text-sm sm:text-base text-gray-800">
                  Pressing Enter starts a new line and separates the last word of one line from the first word of the next. Blank lines between paragraphs do not add to the word count, and paragraphs are only counted from non-empty blocks of text.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Practical Examples of Word Counting
            </h2>
            <p>
              Let's look at three real-world snippets to see how word count, character count, and sentence count behave side by side:
            </p>

            <div className="space-y-4 my-1">
              <div className="p-5 bg-[#FAF8F5] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <p className="text-xs font-mono font-black uppercase text-gray-600 mb-2">
                  EXAMPLE A: SHORT EMAIL REPLY
                </p>
                <p className="font-mono text-sm bg-white p-3 border border-black mb-3">
                  Thanks for sending the updated schedule! I'll review pages 4–10 tonight and share my notes tomorrow morning.
                </p>
                <p className="text-xs sm:text-sm font-bold text-gray-800">
                  Result: <strong>17 words</strong> · <strong>108 characters</strong> (92 without spaces) · <strong>2 sentences</strong>
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Notice that <em>"I'll"</em> and <em>"4–10"</em> each count as 1 word because neither contains a space.
                </p>
              </div>

              <div className="p-5 bg-[#FAF8F5] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <p className="text-xs font-mono font-black uppercase text-gray-600 mb-2">
                  EXAMPLE B: MULTI-LINE NOTES
                </p>
                <div className="font-mono text-sm bg-white p-3 border border-black mb-3 whitespace-pre-line">
                  {"Project update:\n\nDraft introduction is finished.\nNext step: verify the comparison table."}
                </div>
                <p className="text-xs sm:text-sm font-bold text-gray-800">
                  Result: <strong>12 words</strong> · <strong>3 paragraphs</strong>
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Even with an empty line in the middle, only the actual words and non-empty text blocks are counted.
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-800">
              If you also need to know whether a platform measures letters instead of words, read our guide on{' '}
              <Link href="/guides/word-count-vs-character-count" className="underline font-bold text-black hover:text-gray-700">
                word count vs. character count
              </Link>
              .
            </p>
          </section>

          {/* Section 5 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              When Counting Words Is Actually Useful
            </h2>
            <p>
              You don't need to obsess over word counts for every casual message, but checking your count makes a real difference in several everyday situations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
              <li>
                <strong>School and university assignments:</strong> Essays, lab reports, and research abstracts almost always specify a target range (see our guide on{' '}
                <Link href="/guides/how-many-words-should-an-essay-be" className="underline font-bold text-black hover:text-gray-700">
                  how many words an essay should be
                </Link>
                ).
              </li>
              <li>
                <strong>Scholarship, grant, and job applications:</strong> Online portals frequently cut off responses that exceed 250 or 500 words. Drafting in a counter first prevents losing half of your final paragraph when pasting into a web form.
              </li>
              <li>
                <strong>Presentations and speeches:</strong> Most people speak at roughly 130 to 150 words per minute, and read silently at around 200 words per minute. Checking your word count tells you right away if a script is too long for a 3-minute slot.
              </li>
              <li>
                <strong>Freelance writing and translations:</strong> Articles, copywriting briefs, and translation jobs are often scoped and billed by word count.
              </li>
            </ul>
          </section>

          {/* Section 6: Demonstrating Tablable Word Counter */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Check Your Text in Seconds with the TABLABLE Word Counter
            </h2>
            <p>
              If you want a fast, distraction-free place to check your writing, you can use the free{' '}
              <Link href="/word-counter" className="underline font-bold text-black hover:text-gray-700">
                TABLABLE Word Counter
              </Link>
              .
            </p>
            <p>
              There are no accounts, popups, or settings to configure. As soon as you type or paste your text into the box, it calculates six live metrics at the top of the screen:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-base text-gray-800">
              <li><strong>Words:</strong> Total words separated by whitespace.</li>
              <li><strong>Characters:</strong> Every character in your text, including spaces.</li>
              <li><strong>No Spaces:</strong> Character count excluding spaces and line breaks.</li>
              <li><strong>Sentences:</strong> Sentences ending in periods, exclamation marks, or question marks.</li>
              <li><strong>Paragraphs:</strong> Non-empty text blocks separated by line breaks.</li>
              <li><strong>Reading Time:</strong> Estimated time to read based on 200 words per minute.</li>
            </ul>
            <p>
              Everything runs locally inside your browser, so your drafts stay completely private on your device. Once you finish editing, click <strong>Copy Text</strong> to take your cleaned-up writing wherever it needs to go.
            </p>
          </section>

          {/* Tool CTA Box */}
          <BrutalCard shadow="lg" className="p-6 sm:p-8 bg-[#FFDE00] border-2 sm:border-[3px] border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-black">
                <Type className="w-4 h-4 stroke-[2.5]" />
                <span>Free Browser Tool</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                Count your words instantly
              </h3>
              <p className="text-sm sm:text-base font-bold text-black">
                Paste or type your text to see live word, character, sentence, and paragraph counts.
              </p>
            </div>
            <BrutalButton
              id="guide-count-words-open-tool-btn"
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
              id="guide-count-words-back-btn"
              variant="secondary"
              size="sm"
              onClick={() => navigate('/guides')}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
              <span>Back to Guides</span>
            </BrutalButton>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/guides/word-count-vs-character-count"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Next: Word Count vs. Character Count
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
