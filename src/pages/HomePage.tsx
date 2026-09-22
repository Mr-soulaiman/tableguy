import React from 'react';
import { useRouter, Link } from '../router';
import { BrutalButton } from '../components/BrutalButton';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalBadge } from '../components/BrutalBadge';
import { SEO } from '../components/SEO';
import {
  ArrowRight,
  ClipboardPaste,
  SlidersHorizontal,
  Copy,
  Info,
  BookOpen,
  CheckSquare,
  Table as TableIcon,
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
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Column: Headline & CTA */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
                <BrutalBadge variant="yellow" size="md">
                  Two Free Online Tools
                </BrutalBadge>
                <BrutalBadge variant="white" size="md">
                  No Sign-up Required
                </BrutalBadge>
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase mb-3">
                TABLABLE
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-black tracking-tight mb-6 leading-tight">
                Make a table. Get it out.
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
                Turn simple information into clean, useful tables and printable checklists. Free, fast in your browser, and private.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
                <BrutalButton
                  id="hero-create-table-btn"
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/table-generator')}
                  className="group"
                >
                  <span>Open Table Generator</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] ml-2 group-hover:translate-x-1 transition-transform" />
                </BrutalButton>

                <BrutalButton
                  id="hero-create-todo-btn"
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/to-do-list')}
                  className="group"
                >
                  <span>To-Do List Maker</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] ml-2 group-hover:translate-x-1 transition-transform" />
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

        {/* WHAT DO YOU NEED TO MAKE? Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black">
              WHAT DO YOU NEED TO MAKE?
            </h2>
            <p className="text-sm sm:text-base font-bold text-gray-700 mt-2">
              Choose your tool and get straight to work. No accounts or waiting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* CARD 1: TABLE GENERATOR */}
            <BrutalCard
              shadow="lg"
              className="p-6 sm:p-8 bg-white flex flex-col justify-between border-2 sm:border-[3px] border-black"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-black uppercase tracking-widest bg-black text-white px-2.5 py-1">
                    Tool 01
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-600">
                    HTML • Markdown • CSV • PDF
                  </span>
                </div>

                <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black mb-4 text-black">
                  <TableIcon className="w-6 h-6 stroke-[2.5]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black mb-2">
                  TABLE GENERATOR
                </h3>

                <p className="text-base sm:text-lg font-bold text-black mb-3">
                  Turn messy data into a clean table.
                </p>

                <p className="text-sm font-medium text-gray-700 leading-relaxed mb-6">
                  Paste your data, edit it, format it, merge cells, and export it.
                </p>
              </div>

              <div>
                <Link
                  href="/table-generator"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-black bg-[#FFDE00] hover:bg-[#FFE633] text-black border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] transition-all"
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
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-black uppercase tracking-widest bg-[#FFDE00] text-black border border-black px-2.5 py-1 font-black">
                    Tool 02
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-600">
                    Printable A4 PDF Checklist
                  </span>
                </div>

                <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black mb-4 text-black">
                  <CheckSquare className="w-6 h-6 stroke-[2.5]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black mb-2">
                  TO-DO LIST MAKER
                </h3>

                <p className="text-base sm:text-lg font-bold text-black mb-3">
                  Turn a simple list of tasks into a clean printable checklist.
                </p>

                <p className="text-sm font-medium text-gray-700 leading-relaxed mb-6">
                  Enter tasks separated by commas and download a beautiful PDF.
                </p>
              </div>

              <div>
                <Link
                  href="/to-do-list"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-black bg-[#FFDE00] hover:bg-[#FFE633] text-black border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] transition-all"
                >
                  <span>MAKE A TO-DO LIST →</span>
                </Link>
              </div>
            </BrutalCard>
          </div>
        </section>

        {/* 3-Step Simple Explanation */}
        <section id="how-it-works" className="max-w-5xl mx-auto px-4 sm:px-6 w-full scroll-mt-24">
          <div className="mb-8">
            <BrutalBadge variant="white" size="sm" className="mb-2">
              SIMPLE WORKFLOW
            </BrutalBadge>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-black">
              How TABLABLE works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <BrutalCard shadow="md" className="p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-black text-xl mb-4 text-black">
                  1
                </div>
                <h3 className="text-xl font-black mb-2 flex items-center gap-2 text-black">
                  <ClipboardPaste className="w-5 h-5 stroke-[2.5]" />
                  Paste or enter data
                </h3>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                  Paste raw comma-separated, tab-delimited, or messy lines into the online table generator. Or start typing directly into fresh cells.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t-2 border-black/10 font-mono text-xs font-bold text-gray-600">
                CSV • TSV • Plain text
              </div>
            </BrutalCard>

            {/* Step 2 */}
            <BrutalCard shadow="md" className="p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-black text-xl mb-4 text-black">
                  2
                </div>
                <h3 className="text-xl font-black mb-2 flex items-center gap-2 text-black">
                  <SlidersHorizontal className="w-5 h-5 stroke-[2.5]" />
                  Edit &amp; format tables
                </h3>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                  Add rows and columns, merge cells, color cells, and format text with ease. Edit tables visually without complex formulas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t-2 border-black/10 font-mono text-xs font-bold text-gray-600">
                Visual editing • Merge cells • Colors
              </div>
            </BrutalCard>

            {/* Step 3 */}
            <BrutalCard shadow="md" className="p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-black text-xl mb-4 text-black">
                  3
                </div>
                <h3 className="text-xl font-black mb-2 flex items-center gap-2 text-black">
                  <Copy className="w-5 h-5 stroke-[2.5]" />
                  Export tables
                </h3>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                  Export tables to HTML tables, Markdown tables, CSV tables, plain text, or downloadable PDF documents instantly.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t-2 border-black/10 font-mono text-xs font-bold text-gray-600">
                HTML • Markdown • CSV • PDF
              </div>
            </BrutalCard>
          </div>
        </section>

        {/* Natural Guides & Resources Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <BrutalCard shadow="md" className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-black">
                <BookOpen className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-black mb-1">
                  Learn more in our Guides
                </h2>
                <p className="text-sm font-medium text-gray-700 max-w-xl">
                  Practical guides on choosing table formats (CSV, HTML, Markdown), organizing data, and designing clear, readable tables.
                </p>
              </div>
            </div>
            <Link
              href="/guides"
              className="px-4 py-2.5 text-xs sm:text-sm font-black bg-white hover:bg-[#FFDE00] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all whitespace-nowrap shrink-0"
            >
              Explore Guides →
            </Link>
          </BrutalCard>
        </section>

        {/* Natural About & Internal Link Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <BrutalCard shadow="md" className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-black">
                <Info className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-black mb-1">
                  Simple Online Table Tools
                </h2>
                <p className="text-sm font-medium text-gray-700 max-w-xl">
                  Learn more about the philosophy behind TABLABLE and how we keep table creation free, private, and local in your browser.
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="px-4 py-2.5 text-xs sm:text-sm font-black bg-white hover:bg-[#FFDE00] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all whitespace-nowrap shrink-0"
            >
              Read About TABLABLE →
            </Link>
          </BrutalCard>
        </section>

        {/* Bottom CTA Block */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <BrutalCard
            shadow="lg"
            className="p-8 sm:p-12 bg-[#FFDE00] text-center flex flex-col items-center justify-center gap-4"
          >
            <span className="font-black text-xs sm:text-sm tracking-widest uppercase bg-black text-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              Ready to start?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight uppercase">
              Make your table now
            </h2>
            <p className="text-base sm:text-lg font-bold text-black/80 max-w-lg mb-2">
              No signup. No tracking. Free forever in your browser.
            </p>
            <BrutalButton
              id="bottom-create-table-btn"
              variant="black"
              size="lg"
              onClick={() => navigate('/table-generator')}
            >
              <span>Open Table Generator</span>
              <ArrowRight className="w-5 h-5 stroke-[3] ml-2" />
            </BrutalButton>
          </BrutalCard>
        </section>
      </div>
    </>
  );
};

