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

export const WordCountVsCharacterCount: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="Word Count vs. Character Count: What's the Difference? | TABLABLE"
        description="Learn the difference between word count and character count, including spaces, with simple examples and a free online word counter."
        canonicalPath="/guides/word-count-vs-character-count"
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
            Word Count vs. Character Count
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
            Word Count vs. Character Count: What's the Difference?
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
            Some forms ask for a 500-word essay. Others stop you from typing after 280 characters. While both measure the length of your text, they count completely different things. Here is how word count and character count work—and why spaces matter.
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
              <span>Word count measures whole words separated by spaces; character count measures every single letter, number, symbol, and space.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Strict web forms and social media limits almost always count characters including spaces.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Two sentences with the exact same word count can have very different character counts depending on word length.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5" />
              <span>Use a live word counter to track words, total characters, and characters without spaces simultaneously.</span>
            </li>
          </ul>
        </BrutalCard>

        {/* Main Content Body */}
        <div className="flex flex-col gap-10 text-black leading-relaxed font-medium text-base sm:text-lg">
          {/* Section 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              The Core Difference Explained Simply
            </h2>
            <p>
              The easiest way to understand the difference is to look at what you are actually counting:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold uppercase bg-[#FFDE00] border border-black px-2 py-0.5 inline-block mb-2">
                  WORD COUNT
                </span>
                <h3 className="font-black text-lg text-black mb-1">Counts complete words</h3>
                <p className="text-sm text-gray-700">
                  Measures how many groups of letters or numbers are separated by spaces. Whether a word has 2 letters (<em>"to"</em>) or 12 letters (<em>"organization"</em>), it still counts as <strong>1 word</strong>.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <span className="text-xs font-mono font-bold uppercase bg-white border border-black px-2 py-0.5 inline-block mb-2">
                  CHARACTER COUNT
                </span>
                <h3 className="font-black text-lg text-black mb-1">Counts individual keystrokes</h3>
                <p className="text-sm text-gray-700">
                  Measures every single letter, digit, punctuation mark, and space in the text. A 12-letter word takes up six times as many characters as a 2-letter word.
                </p>
              </div>
            </div>

            <p>
              Let's test this on a simple 4-word phrase:
            </p>
            <div className="p-4 bg-white border-2 border-black font-mono text-sm text-gray-900 shadow-[3px_3px_0px_0px_#000]">
              Keep your tables simple.
            </div>
            <ul className="list-disc pl-6 space-y-1.5 text-base text-gray-800">
              <li><strong>Word count:</strong> 4 words (<em>Keep</em>, <em>your</em>, <em>tables</em>, <em>simple.</em>)</li>
              <li><strong>Character count (with spaces):</strong> 24 characters (20 letters + 1 period + 3 spaces)</li>
              <li><strong>Character count (without spaces):</strong> 21 characters (20 letters + 1 period)</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Characters With Spaces vs. Without Spaces
            </h2>
            <p>
              When you paste text into the{' '}
              <Link href="/word-counter" className="underline font-bold text-black hover:text-gray-700">
                TABLABLE Word Counter
              </Link>
              , you will see two separate character numbers: <strong>Characters</strong> and <strong>No Spaces</strong>. Why do both exist?
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="font-black text-lg text-black mb-1">
                  Characters (Including Spaces)
                </h3>
                <p className="text-sm sm:text-base text-gray-800">
                  To a computer database or input field, a space is a character just like the letter <code className="font-mono text-xs bg-gray-100 px-1 border">A</code> or a question mark. Whenever an online application form, social media bio, SMS message, or meta description says <em>"Maximum 160 characters,"</em> it almost always means <strong>characters including spaces</strong>.
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <h3 className="font-black text-lg text-black mb-1">
                  Characters Excluding Spaces ("No Spaces")
                </h3>
                <p className="text-sm sm:text-base text-gray-800">
                  This count strips out all spaces, tabs, and line breaks so you only see the actual visible letters, numbers, and punctuation marks. Some translation agencies, academic assignments, and publishing workflows use characters without spaces so writers aren't penalized or rewarded for formatting and spacing choices.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Concrete Examples */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Why Same Word Count Doesn't Mean Same Character Count
            </h2>
            <p>
              Because word count ignores how long each individual word is, two sentences with the exact same number of words can take up very different amounts of space on a screen.
            </p>
            <p>
              Compare these two 6-word sentences:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-4 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <p className="text-xs font-mono font-black uppercase text-gray-600 mb-2">
                  SENTENCE 1 (SHORT WORDS)
                </p>
                <p className="font-mono text-sm bg-white p-3 border border-black mb-3">
                  We can go to the park.
                </p>
                <ul className="text-xs sm:text-sm font-bold text-gray-800 space-y-1">
                  <li>Words: <strong>6</strong></li>
                  <li>Characters (with spaces): <strong>22</strong></li>
                  <li>Characters (no spaces): <strong>17</strong></li>
                </ul>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <p className="text-xs font-mono font-black uppercase text-gray-600 mb-2">
                  SENTENCE 2 (LONGER WORDS)
                </p>
                <p className="font-mono text-sm bg-white p-3 border border-black mb-3">
                  Careful organization prevents unnecessary misunderstandings tomorrow.
                </p>
                <ul className="text-xs sm:text-sm font-bold text-gray-800 space-y-1">
                  <li>Words: <strong>6</strong></li>
                  <li>Characters (with spaces): <strong>73</strong></li>
                  <li>Characters (no spaces): <strong>68</strong></li>
                </ul>
              </div>
            </div>

            <p>
              Both examples are exactly <strong>6 words long</strong>, yet the second sentence uses more than three times as many characters. If you are trying to fit text into a narrow table column or a strict character-limited form, swapping long multi-syllable words for shorter equivalents saves dozens of characters without losing meaning.
            </p>
          </section>

          {/* Section 4: Comparison Table */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Comparison Table: Word Count vs. Character Count
            </h2>
            <p>
              Here is a quick side-by-side reference showing how the three measurements compare and when each one is used:
            </p>

            <div className="overflow-x-auto border-2 border-black shadow-[4px_4px_0px_0px_#000] bg-white my-2">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FFDE00] border-b-2 border-black font-black uppercase text-black">
                    <th className="p-3 sm:p-4 border-r-2 border-black">Measurement</th>
                    <th className="p-3 sm:p-4 border-r-2 border-black">What It Counts</th>
                    <th className="p-3 sm:p-4 border-r-2 border-black">Includes Spaces?</th>
                    <th className="p-3 sm:p-4">Where It Matters Most</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black font-medium text-gray-900">
                  <tr>
                    <td className="p-3 sm:p-4 border-r-2 border-black font-black text-black">
                      Word Count
                    </td>
                    <td className="p-3 sm:p-4 border-r-2 border-black">
                      Words separated by spaces or line breaks
                    </td>
                    <td className="p-3 sm:p-4 border-r-2 border-black">
                      No (spaces only separate words)
                    </td>
                    <td className="p-3 sm:p-4">
                      Essays, articles, blog posts, books, speeches, and reading time estimates
                    </td>
                  </tr>
                  <tr className="bg-[#FAF8F5]">
                    <td className="p-3 sm:p-4 border-r-2 border-black font-black text-black">
                      Characters (With Spaces)
                    </td>
                    <td className="p-3 sm:p-4 border-r-2 border-black">
                      Every letter, number, punctuation mark, and space
                    </td>
                    <td className="p-3 sm:p-4 border-r-2 border-black">
                      Yes
                    </td>
                    <td className="p-3 sm:p-4">
                      Social media posts, web form fields, SMS messages, page titles, and meta descriptions
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 border-r-2 border-black font-black text-black">
                      Characters (No Spaces)
                    </td>
                    <td className="p-3 sm:p-4 border-r-2 border-black">
                      Only visible letters, numbers, and punctuation
                    </td>
                    <td className="p-3 sm:p-4 border-r-2 border-black">
                      No
                    </td>
                    <td className="p-3 sm:p-4">
                      Translation billing, certain academic portals, and character-density checks
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: When Each Measurement Matters */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              When Should You Watch Word Count vs. Character Count?
            </h2>
            <p>
              In everyday work, the rule of thumb is simple:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
              <li>
                <strong>Watch word count when depth and reading time matter:</strong> Teachers, editors, and clients use word limits (such as a 1,000-word essay or a 600-word report) because word count reflects how much detail and argument you can cover. To learn more about how words are separated and counted, read our guide on{' '}
                <Link href="/guides/how-to-count-words-in-a-text" className="underline font-bold text-black hover:text-gray-700">
                  how to count words in a text
                </Link>
                .
              </li>
              <li>
                <strong>Watch character count when visual space or database fields are fixed:</strong> A social media bio, a mobile table header, an email subject line, or a university application portal box has a physical width or database limit. Even if your word count looks low, a few long words can push you past a hard character cap.
              </li>
            </ul>
          </section>

          {/* Section 6: Demonstrating Tablable Word Counter */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Check Both Counts Simultaneously with TABLABLE
            </h2>
            <p>
              Instead of guessing whether a form measures words or characters—or manually subtracting spaces—you can check every metric at once in the free{' '}
              <Link href="/word-counter" className="underline font-bold text-black hover:text-gray-700">
                TABLABLE Word Counter
              </Link>
              .
            </p>
            <p>
              Paste your paragraph into the text box and look at the first three cards at the top:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-1">
              <div className="p-4 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <div className="text-[11px] font-black uppercase text-black/80">Words</div>
                <div className="text-2xl font-black font-mono text-black">4</div>
                <div className="text-xs font-bold text-black/80 mt-1">Whole words</div>
              </div>
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <div className="text-[11px] font-black uppercase text-gray-600">Characters</div>
                <div className="text-2xl font-black font-mono text-black">24</div>
                <div className="text-xs font-bold text-gray-600 mt-1">Including spaces</div>
              </div>
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <div className="text-[11px] font-black uppercase text-gray-600">No Spaces</div>
                <div className="text-2xl font-black font-mono text-black">21</div>
                <div className="text-xs font-bold text-gray-600 mt-1">Excluding spaces</div>
              </div>
            </div>
            <p>
              As you trim or rewrite sentences inside the box, all three numbers update on every keystroke so you can hit your exact target before copying the text back to your document or form.
            </p>
          </section>

          {/* Tool CTA Box */}
          <BrutalCard shadow="lg" className="p-6 sm:p-8 bg-[#FFDE00] border-2 sm:border-[3px] border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-black">
                <Type className="w-4 h-4 stroke-[2.5]" />
                <span>Free Online Tool</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                Check words and characters now
              </h3>
              <p className="text-sm sm:text-base font-bold text-black">
                See live word count, characters with spaces, and characters without spaces in one view.
              </p>
            </div>
            <BrutalButton
              id="guide-word-vs-char-open-tool-btn"
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
              id="guide-word-vs-char-back-btn"
              variant="secondary"
              size="sm"
              onClick={() => navigate('/guides')}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
              <span>Back to Guides</span>
            </BrutalButton>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/guides/how-many-words-should-an-essay-be"
                className="text-xs sm:text-sm font-black text-black hover:underline flex items-center gap-1"
              >
                Next: How Many Words Should an Essay Be?
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
