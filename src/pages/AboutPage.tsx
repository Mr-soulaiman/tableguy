import React from 'react';
import { useRouter } from '../router';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalButton } from '../components/BrutalButton';
import { BrutalBadge } from '../components/BrutalBadge';
import { SEO } from '../components/SEO';
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  FileCode,
  Table as TableIcon,
  Columns,
  Split,
  Palette,
  ArrowUpDown,
  CopyX,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="About TABLABLE — Simple Online Table Tools"
        description="Learn about TABLABLE, a simple free online tool for creating, editing, formatting and exporting tables."
        canonicalPath="/about"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col gap-8">
        {/* Top Header */}
        <div className="border-b-2 sm:border-b-[3px] border-black pb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <BrutalBadge variant="yellow" size="md">
              About
            </BrutalBadge>
            <BrutalBadge variant="white" size="md">
              Free Web Tool
            </BrutalBadge>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mb-3">
            About TABLABLE
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            A fast, straightforward tool designed to make creating, formatting, and exporting tables quick and simple.
          </p>
        </div>

        {/* Main Content Card */}
        <BrutalCard shadow="lg" className="p-6 sm:p-10 bg-white flex flex-col gap-8">
          {/* Section: What is TABLABLE */}
          <section className="flex flex-col gap-3">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              What is TABLABLE?
            </h2>
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              TABLABLE is a free online tool built to take the friction out of working with tables. Whether you are assembling data for documentation, writing notes in Markdown, preparing an HTML snippet for a website, or formatting a quick CSV or PDF report, TABLABLE gives you an intuitive spreadsheet-style interface directly in your browser.
            </p>
          </section>

          {/* Section: Why it exists */}
          <section className="flex flex-col gap-3">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              Why TABLABLE Exists
            </h2>
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              Formatting tables manually in markup languages like Markdown or HTML is tedious and error-prone. Heavy desktop spreadsheet applications often feel excessive when you just need a clean, structured table ready to copy or download. TABLABLE was built to bridge that gap: a lightweight, responsive utility where you can paste raw data, adjust columns, style cells, and grab your formatted output in seconds without logins or paywalls.
            </p>
          </section>

          {/* Section: What you can do */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              What You Can Do
            </h2>
            <p className="text-base font-medium text-gray-800 leading-relaxed">
              TABLABLE provides a focused set of practical table editing and formatting features:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 bg-[#FAF8F5] border-2 border-black flex flex-col gap-1.5">
                <div className="flex items-center gap-2 font-black text-black">
                  <TableIcon className="w-5 h-5 stroke-[2.5]" />
                  <h3 className="text-base uppercase">Create &amp; Edit Tables</h3>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Add or remove rows and columns, type directly into auto-resizing cells, and edit column header names with ease.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black flex flex-col gap-1.5">
                <div className="flex items-center gap-2 font-black text-black">
                  <Palette className="w-5 h-5 stroke-[2.5]" />
                  <h3 className="text-base uppercase">Format &amp; Color Cells</h3>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Apply bold and italic typography, assign background colors to individual cells or entire headers, and align text left, center, or right.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black flex flex-col gap-1.5">
                <div className="flex items-center gap-2 font-black text-black">
                  <Split className="w-5 h-5 stroke-[2.5]" />
                  <h3 className="text-base uppercase">Merge Cells</h3>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Merge adjacent cells horizontally (colspan) or vertically (rowspan) across headers and data rows, with easy unmerging.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black flex flex-col gap-1.5">
                <div className="flex items-center gap-2 font-black text-black">
                  <ArrowUpDown className="w-5 h-5 stroke-[2.5]" />
                  <h3 className="text-base uppercase">Sort &amp; Reorder</h3>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Sort table data alphabetically or numerically by any column (A-Z or Z-A), and move rows up or down with one click.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black flex flex-col gap-1.5">
                <div className="flex items-center gap-2 font-black text-black">
                  <CopyX className="w-5 h-5 stroke-[2.5]" />
                  <h3 className="text-base uppercase">Remove Duplicates</h3>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Clean up imported or pasted data instantly by scanning and removing identical duplicate rows across the entire table.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-2 border-black flex flex-col gap-1.5">
                <div className="flex items-center gap-2 font-black text-black">
                  <FileCode className="w-5 h-5 stroke-[2.5]" />
                  <h3 className="text-base uppercase">Multiple Export Formats</h3>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Export your finished tables to clean HTML, standard Markdown, CSV, Plain Text ASCII, or formatted PDF documents.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA Box */}
          <div className="pt-6 border-t-2 border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAF8F5] p-5 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
            <div>
              <p className="font-black text-black text-lg">
                Ready to create a table?
              </p>
              <p className="text-sm font-medium text-gray-700">
                Start creating and formatting tables right away—free and with no sign-up.
              </p>
            </div>
            <BrutalButton
              id="about-open-generator-btn"
              variant="primary"
              size="md"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <span>Open Table Generator</span>
              <ArrowRight className="w-4 h-4 stroke-[3] ml-1.5" />
            </BrutalButton>
          </div>
        </BrutalCard>
      </div>
    </>
  );
};
