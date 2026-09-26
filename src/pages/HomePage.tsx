import React from 'react';
import { useRouter, Link } from '../router';
import { BrutalButton } from '../components/BrutalButton';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalBadge } from '../components/BrutalBadge';
import { SEO } from '../components/SEO';
import {
  ClipboardPaste,
  SlidersHorizontal,
  Copy,
  Info,
  BookOpen,
  CheckSquare,
  Table as TableIcon,
  Type,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="TABLABLE — Free Online Table Generator"
        description="Create, edit, format and export tables online for free. Paste your data, build a clean table, and copy or download it in multiple formats."
        canonicalPath="/"
      />

      <div className="flex flex-col gap-12 sm:gap-20 py-8 sm:py-16">
        {/* 1. Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Column: Headline & CTA */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
                <BrutalBadge variant="yellow" size="md">
                  THREE FREE ONLINE TOOLS
                </BrutalBadge>
              </div>

              <div className="text-2xl sm:text-3xl font-black tracking-tight text-black uppercase mb-2">
                TABLABLE
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-black tracking-tight uppercase mb-6 leading-[1.05]">
                <span className="block">MAKE IT.</span>
                <span className="block">ORGANIZE IT.</span>
                <span className="block">COUNT IT.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
                Simple tools for tables, to-do lists, and text. Free, fast, and private in your browser.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <BrutalButton
                  id="hero-create-table-btn"
                  variant="primary"
                  size="md"
                  onClick={() => navigate('/table-generator')}
                  className="font-black uppercase"
                >
                  <span>MAKE A TABLE →</span>
                </BrutalButton>

                <BrutalButton
                  id="hero-create-todo-btn"
                  variant="secondary"
                  size="md"
                  onClick={() => navigate('/to-do-list')}
                  className="font-black uppercase"
                >
                  <span>MAKE A TO-DO LIST →</span>
                </BrutalButton>

                <BrutalButton
                  id="hero-word-counter-btn"
                  variant="secondary"
                  size="md"
                  onClick={() => navigate('/word-counter')}
                  className="font-black uppercase"
                >
                  <span>COUNT WORDS →</span>
                </BrutalButton>
              </div>
            </div>

            {/* Right Column: Mascot Image */}
            <div className="flex-1 w-full max-w-md lg:max-w-lg flex items-center justify-center">
              <img
                src="/mascot.png"
                alt="TABLABLE mascot"
                className="w-full h-auto object-contain select-none max-h-[360px] sm:max-h-[440px] lg:max-h-[480px]"
              />
            </div>
          </div>
        </section>

        {/* 2. WHAT DO YOU NEED TO MAKE? — 3 tool cards */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black">
              WHAT DO YOU NEED TO MAKE?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* CARD 1: TABLE GENERATOR */}
            <BrutalCard
              shadow="lg"
              className="p-6 sm:p-8 bg-white flex flex-col justify-between border-2 sm:border-[3px] border-black"
            >
              <div>
                <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black mb-5 text-black">
                  <TableIcon className="w-6 h-6 stroke-[2.5]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black mb-3">
                  TABLE GENERATOR
                </h3>

                <p className="text-base sm:text-lg font-bold text-gray-800 leading-relaxed mb-6">
                  Turn messy data into a clean table.
                </p>
              </div>

              <div>
                <Link
                  href="/table-generator"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-black bg-[#FFDE00] hover:bg-[#FFE633] text-black border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] transition-all"
                >
                  <span>MAKE A TABLE →</span>
                </Link>
              </div>
            </BrutalCard>

            {/* CARD 2: TO-DO LIST MAKER */}
            <BrutalCard
              shadow="lg"
              className="p-6 sm:p-8 bg-white flex flex-col justify-between border-2 sm:border-[3px] border-black"
            >
              <div>
                <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black mb-5 text-black">
                  <CheckSquare className="w-6 h-6 stroke-[2.5]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black mb-3">
                  TO-DO LIST MAKER
                </h3>

                <p className="text-base sm:text-lg font-bold text-gray-800 leading-relaxed mb-6">
                  Turn tasks into a clean printable checklist.
                </p>
              </div>

              <div>
                <Link
                  href="/to-do-list"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-black bg-[#FFDE00] hover:bg-[#FFE633] text-black border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] transition-all"
                >
                  <span>MAKE A TO-DO LIST →</span>
                </Link>
              </div>
            </BrutalCard>

            {/* CARD 3: WORD COUNTER */}
            <BrutalCard
              shadow="lg"
              className="p-6 sm:p-8 bg-white flex flex-col justify-between border-2 sm:border-[3px] border-black"
            >
              <div>
                <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black mb-5 text-black">
                  <Type className="w-6 h-6 stroke-[2.5]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black mb-3">
                  WORD COUNTER
                </h3>

                <p className="text-base sm:text-lg font-bold text-gray-800 leading-relaxed mb-6">
                  Count words, characters, sentences, paragraphs, and reading time instantly.
                </p>
              </div>

              <div>
                <Link
                  href="/word-counter"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-black bg-[#FFDE00] hover:bg-[#FFE633] text-black border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] transition-all"
                >
                  <span>OPEN WORD COUNTER →</span>
                </Link>
              </div>
            </BrutalCard>
          </div>
        </section>

        {/* 3. SIMPLE WORKFLOW */}
        <section id="how-it-works" className="max-w-5xl mx-auto px-4 sm:px-6 w-full scroll-mt-24">
          <div className="mb-8">
            <BrutalBadge variant="white" size="sm" className="mb-2">
              SIMPLE WORKFLOW
            </BrutalBadge>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-black">
              HOW TABLABLE WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <BrutalCard shadow="md" className="p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-black text-xl mb-4 text-black">
                  1
                </div>
                <h3 className="text-xl font-black uppercase mb-2 flex items-center gap-2 text-black">
                  <ClipboardPaste className="w-5 h-5 stroke-[2.5]" />
                  CHOOSE A TOOL
                </h3>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                  Pick the tool that matches what you need.
                </p>
              </div>
            </BrutalCard>

            {/* Step 2 */}
            <BrutalCard shadow="md" className="p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-black text-xl mb-4 text-black">
                  2
                </div>
                <h3 className="text-xl font-black uppercase mb-2 flex items-center gap-2 text-black">
                  <SlidersHorizontal className="w-5 h-5 stroke-[2.5]" />
                  DO THE WORK
                </h3>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                  Create your table, organize your tasks, or count your text.
                </p>
              </div>
            </BrutalCard>

            {/* Step 3 */}
            <BrutalCard shadow="md" className="p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-black text-xl mb-4 text-black">
                  3
                </div>
                <h3 className="text-xl font-black uppercase mb-2 flex items-center gap-2 text-black">
                  <Copy className="w-5 h-5 stroke-[2.5]" />
                  GET YOUR RESULT
                </h3>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                  Copy, download, print, or use your result instantly.
                </p>
              </div>
            </BrutalCard>
          </div>
        </section>

        {/* 4. Guides Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <BrutalCard shadow="md" className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-black">
                <BookOpen className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-black mb-1">
                  LEARN MORE IN OUR GUIDES
                </h2>
                <p className="text-sm font-medium text-gray-700 max-w-xl">
                  Practical guides for tables, to-do lists, word counting, and everyday organization.
                </p>
              </div>
            </div>
            <Link
              href="/guides"
              className="px-4 py-2.5 text-xs sm:text-sm font-black uppercase bg-white hover:bg-[#FFDE00] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all whitespace-nowrap shrink-0"
            >
              EXPLORE GUIDES →
            </Link>
          </BrutalCard>
        </section>

        {/* 5. About / Why Tablable Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <BrutalCard shadow="sm" className="p-5 sm:p-6 bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 shrink-0 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-black">
                <Info className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black uppercase text-black mb-1">
                  SIMPLE ONLINE TOOLS
                </h2>
                <p className="text-sm font-medium text-gray-700 max-w-xl">
                  Learn more about Tablable and how our free browser-based tools work.
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="px-4 py-2 text-xs sm:text-sm font-black uppercase bg-white hover:bg-[#FFDE00] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all whitespace-nowrap shrink-0"
            >
              READ ABOUT TABLABLE →
            </Link>
          </BrutalCard>
        </section>

        {/* 6. Final CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <BrutalCard
            shadow="lg"
            className="p-8 sm:p-12 bg-[#FFDE00] text-center flex flex-col items-center justify-center gap-4"
          >
            <span className="font-black text-xs sm:text-sm tracking-widest uppercase bg-black text-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              READY TO START?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight uppercase">
              PICK A TOOL AND START NOW
            </h2>
            <p className="text-base sm:text-lg font-bold text-black/80 max-w-lg mb-2">
              No signup. No tracking. Free forever in your browser.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <BrutalButton
                id="bottom-create-table-btn"
                variant="black"
                size="md"
                onClick={() => navigate('/table-generator')}
                className="font-black uppercase"
              >
                <span>MAKE A TABLE →</span>
              </BrutalButton>
              <BrutalButton
                id="bottom-create-todo-btn"
                variant="secondary"
                size="md"
                onClick={() => navigate('/to-do-list')}
                className="font-black uppercase"
              >
                <span>MAKE A TO-DO LIST →</span>
              </BrutalButton>
              <BrutalButton
                id="bottom-word-counter-btn"
                variant="secondary"
                size="md"
                onClick={() => navigate('/word-counter')}
                className="font-black uppercase"
              >
                <span>COUNT WORDS →</span>
              </BrutalButton>
            </div>
          </BrutalCard>
        </section>
      </div>
    </>
  );
};

