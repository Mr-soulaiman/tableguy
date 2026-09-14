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
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="About TABLEGUY — Simple Online Table Tools"
        description="Learn about TABLEGUY, a free online tool for creating, editing, formatting and exporting tables in seconds."
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
            About TABLEGUY
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            A fast, straightforward tool built to make table creation and export effortless.
          </p>
        </div>

        {/* Main Content Card */}
        <BrutalCard shadow="lg" className="p-6 sm:p-10 bg-white flex flex-col gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-3">
              What is TABLEGUY?
            </h2>
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              TABLEGUY is a free online tool for creating, editing, formatting, and exporting tables. Whether you are building documentation, preparing spreadsheet data, writing markdown notes, or generating HTML for a website, TABLEGUY helps you assemble clean tables quickly without unnecessary setup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#FAF8F5] border-2 border-black">
              <div className="flex items-center gap-2 mb-2 font-black text-black">
                <Zap className="w-5 h-5 stroke-[2.5]" />
                <h3 className="text-base font-black uppercase">Fast & Local</h3>
              </div>
              <p className="text-sm font-medium text-gray-700">
                All table editing and transformations occur locally inside your browser. No sluggish server roundtrips or mandatory account signups.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] border-2 border-black">
              <div className="flex items-center gap-2 mb-2 font-black text-black">
                <FileCode className="w-5 h-5 stroke-[2.5]" />
                <h3 className="text-base font-black uppercase">Multi-Format Export</h3>
              </div>
              <p className="text-sm font-medium text-gray-700">
                Copy or download your tables in HTML, Markdown, CSV, Plain Text ASCII, and PDF formats with a single click.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] border-2 border-black">
              <div className="flex items-center gap-2 mb-2 font-black text-black">
                <Sparkles className="w-5 h-5 stroke-[2.5]" />
                <h3 className="text-base font-black uppercase">Smart Features</h3>
              </div>
              <p className="text-sm font-medium text-gray-700">
                Includes cell merging (horizontal and vertical), color styling, text formatting (bold and italic), column alignment, and intelligent text wrapping.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] border-2 border-black">
              <div className="flex items-center gap-2 mb-2 font-black text-black">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                <h3 className="text-base font-black uppercase">Private by Design</h3>
              </div>
              <p className="text-sm font-medium text-gray-700">
                Your data stays strictly in your browser. TABLEGUY does not collect, store, or transmit your table content.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-4 pt-6 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-black text-base">
                Ready to make a table?
              </p>
              <p className="text-sm text-gray-600">
                Jump right into the generator without creating an account.
              </p>
            </div>
            <BrutalButton
              id="about-open-generator-btn"
              variant="primary"
              size="md"
              onClick={() => navigate('/table-generator')}
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
