import React, { useState } from 'react';
import { useRouter } from '../router';
import { BrutalButton } from '../components/BrutalButton';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalBadge } from '../components/BrutalBadge';
import {
  ArrowRight,
  ClipboardPaste,
  SlidersHorizontal,
  Copy,
  Check,
  Download,
} from 'lucide-react';
import { TableItem } from '../types';
import {
  tableToHtml,
  tableToMarkdown,
  tableToCsv,
  tableToPlainText,
  copyTextToClipboard,
  downloadFile,
  generateFullHtmlDocument,
  generateFullMarkdown,
  generateFullCsv,
  generateFullPlainText,
  downloadPdf,
} from '../utils/tableExport';

const DEMO_TABLE: TableItem = {
  id: 'homepage-demo-table',
  name: 'Students & Tasks',
  headers: ['Name', 'Role / Task', 'Status', 'Action'],
  rows: [
    ['Ahmed', 'Mathematics Notes', 'Grade 18', 'Ready'],
    ['Sara', 'Physics Lab Data', 'Grade 19', 'Ready'],
    ['Youssef', 'English Literature', 'Grade 16', 'Ready'],
  ],
  cellColors: [
    ['', '', '', ''],
    ['', '', '#FFDE00', ''],
    ['', '', '', ''],
  ],
  headerColors: ['#FFDE00', '#FFDE00', '#FFDE00', '#FFDE00'],
  cellFormats: [
    [{ bold: true }, {}, {}, {}],
    [{ bold: true }, {}, {}, {}],
    [{ bold: true }, {}, {}, {}],
  ],
  headerFormats: [{ bold: true }, { bold: true }, { bold: true }, { bold: true }],
  signatureEnabled: false,
  signatureName: '',
};

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  // Notification states for live demo copying and downloading
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [downloadedFormat, setDownloadedFormat] = useState<string | null>(null);

  const handleCopy = async (format: 'HTML' | 'Markdown' | 'CSV' | 'Plain Text') => {
    let content = '';
    if (format === 'HTML') {
      content = tableToHtml(
        DEMO_TABLE.headers,
        DEMO_TABLE.rows,
        DEMO_TABLE.cellColors,
        DEMO_TABLE.headerColors,
        DEMO_TABLE.cellFormats,
        DEMO_TABLE.headerFormats,
        { enabled: false, name: '' }
      );
    } else if (format === 'Markdown') {
      content = tableToMarkdown(
        DEMO_TABLE.headers,
        DEMO_TABLE.rows,
        DEMO_TABLE.cellFormats,
        DEMO_TABLE.headerFormats,
        { enabled: false, name: '' }
      );
    } else if (format === 'CSV') {
      content = tableToCsv(DEMO_TABLE.headers, DEMO_TABLE.rows);
    } else if (format === 'Plain Text') {
      content = tableToPlainText(DEMO_TABLE.headers, DEMO_TABLE.rows, {
        enabled: false,
        name: '',
      });
    }

    const success = await copyTextToClipboard(content);
    if (success) {
      setCopiedFormat(format);
      setTimeout(() => setCopiedFormat(null), 2500);
    }
  };

  const handleDownload = (format: 'HTML' | 'Markdown' | 'CSV' | 'TXT' | 'PDF') => {
    if (format === 'HTML') {
      const content = generateFullHtmlDocument([DEMO_TABLE]);
      downloadFile('table.html', content, 'text/html');
    } else if (format === 'Markdown') {
      const content = generateFullMarkdown([DEMO_TABLE]);
      downloadFile('table.md', content, 'text/markdown');
    } else if (format === 'CSV') {
      const content = generateFullCsv([DEMO_TABLE]);
      downloadFile('table.csv', content, 'text/csv');
    } else if (format === 'TXT') {
      const content = generateFullPlainText([DEMO_TABLE]);
      downloadFile('table.txt', content, 'text/plain');
    } else if (format === 'PDF') {
      downloadPdf([DEMO_TABLE], 'table.pdf');
    }

    setDownloadedFormat(format);
    setTimeout(() => setDownloadedFormat(null), 2500);
  };

  return (
    <div className="flex flex-col gap-12 sm:gap-20 py-8 sm:py-16">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Column: Headline & CTA */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              <BrutalBadge variant="yellow" size="md">
                Free Web Utility
              </BrutalBadge>
              <BrutalBadge variant="white" size="md">
                No Sign-up Required
              </BrutalBadge>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-black leading-none uppercase mb-4">
              TABLEGUY
            </h1>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-6">
              Make a table. Get it out.
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
              Create clean tables in seconds. Paste your data, edit it, and copy it wherever you need it.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <BrutalButton
                id="hero-create-table-btn"
                variant="primary"
                size="lg"
                onClick={() => navigate('/table-generator')}
                className="group"
              >
                <span>Create a table</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] ml-2 group-hover:translate-x-1 transition-transform" />
              </BrutalButton>

              <BrutalButton
                id="hero-learn-more-btn"
                variant="secondary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                How it works
              </BrutalButton>
            </div>
          </div>

          {/* Right Column: Mascot Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg flex items-center justify-center">
            <img
              src="/tableguy-mascot.png"
              alt="TABLEGUY Mascot"
              className="w-full h-auto object-contain select-none max-h-[360px] sm:max-h-[440px] lg:max-h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* Visual Product Demo Showcase (Neo-Brutalist Visual Concept) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <BrutalCard shadow="lg" className="p-4 sm:p-8 bg-white overflow-hidden">
          {/* Mock Window Topbar */}
          <div className="flex flex-wrap items-center justify-between border-b-2 sm:border-b-[3px] border-black pb-4 mb-6 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-black inline-block"></span>
              <span className="w-3.5 h-3.5 bg-[#FFDE00] border border-black inline-block"></span>
              <span className="w-3.5 h-3.5 bg-white border border-black inline-block"></span>
            </div>
            <span className="font-mono text-xs font-black px-2.5 py-1 bg-[#FAF8F5] border-2 border-black">
              PREVIEW ONLY — NOT AN EDITOR
            </span>
          </div>

          {/* Sample Neo-Brutalist Table Presentation */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border-2 border-black font-sans text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#FFDE00] border-b-2 border-black text-black">
                  <th className="p-2.5 sm:p-3.5 font-black border-r-2 border-black uppercase">Name</th>
                  <th className="p-2.5 sm:p-3.5 font-black border-r-2 border-black uppercase">Role / Task</th>
                  <th className="p-2.5 sm:p-3.5 font-black border-r-2 border-black uppercase">Status</th>
                  <th className="p-2.5 sm:p-3.5 font-black uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black bg-white font-medium">
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-2.5 sm:p-3.5 font-bold border-r-2 border-black">Ahmed</td>
                  <td className="p-2.5 sm:p-3.5 border-r-2 border-black">Mathematics Notes</td>
                  <td className="p-2.5 sm:p-3.5 border-r-2 border-black">
                    <span className="px-2 py-0.5 bg-black text-white text-[11px] font-bold">Grade 18</span>
                  </td>
                  <td className="p-2.5 sm:p-3.5 font-mono text-xs">Ready</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-2.5 sm:p-3.5 font-bold border-r-2 border-black">Sara</td>
                  <td className="p-2.5 sm:p-3.5 border-r-2 border-black">Physics Lab Data</td>
                  <td className="p-2.5 sm:p-3.5 border-r-2 border-black">
                    <span className="px-2 py-0.5 bg-[#FFDE00] text-black border border-black text-[11px] font-bold">Grade 19</span>
                  </td>
                  <td className="p-2.5 sm:p-3.5 font-mono text-xs">Ready</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="p-2.5 sm:p-3.5 font-bold border-r-2 border-black">Youssef</td>
                  <td className="p-2.5 sm:p-3.5 border-r-2 border-black">English Literature</td>
                  <td className="p-2.5 sm:p-3.5 border-r-2 border-black">
                    <span className="px-2 py-0.5 bg-black text-white text-[11px] font-bold">Grade 16</span>
                  </td>
                  <td className="p-2.5 sm:p-3.5 font-mono text-xs">Ready</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Output / Export Section */}
          <div className="mt-6 pt-5 border-t-2 sm:border-t-[3px] border-black flex flex-col gap-4">
            {(copiedFormat || downloadedFormat) && (
              <div className="flex items-center">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FFDE00] border-2 border-black font-black text-xs text-black animate-pulse">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  {copiedFormat ? `Copied ${copiedFormat}!` : `Downloaded ${downloadedFormat}!`}
                </span>
              </div>
            )}

            {/* Copy Subsection */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                Copy
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                <BrutalButton
                  id="home-copy-html-btn"
                  variant="secondary"
                  size="sm"
                  onClick={() => handleCopy('HTML')}
                  className="flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                >
                  <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Copy HTML</span>
                </BrutalButton>
                <BrutalButton
                  id="home-copy-md-btn"
                  variant="secondary"
                  size="sm"
                  onClick={() => handleCopy('Markdown')}
                  className="flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                >
                  <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Copy Markdown</span>
                </BrutalButton>
                <BrutalButton
                  id="home-copy-csv-btn"
                  variant="secondary"
                  size="sm"
                  onClick={() => handleCopy('CSV')}
                  className="flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                >
                  <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Copy CSV</span>
                </BrutalButton>
                <BrutalButton
                  id="home-copy-txt-btn"
                  variant="secondary"
                  size="sm"
                  onClick={() => handleCopy('Plain Text')}
                  className="flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                >
                  <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Copy Plain Text</span>
                </BrutalButton>
              </div>
            </div>

            {/* Download Subsection */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                Download
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
                <BrutalButton
                  id="home-download-html-btn"
                  variant="secondary"
                  size="sm"
                  onClick={() => handleDownload('HTML')}
                  className="flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Download HTML</span>
                </BrutalButton>
                <BrutalButton
                  id="home-download-md-btn"
                  variant="secondary"
                  size="sm"
                  onClick={() => handleDownload('Markdown')}
                  className="flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Download Markdown</span>
                </BrutalButton>
                <BrutalButton
                  id="home-download-csv-btn"
                  variant="secondary"
                  size="sm"
                  onClick={() => handleDownload('CSV')}
                  className="flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Download CSV</span>
                </BrutalButton>
                <BrutalButton
                  id="home-download-txt-btn"
                  variant="secondary"
                  size="sm"
                  onClick={() => handleDownload('TXT')}
                  className="flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Download TXT</span>
                </BrutalButton>
                <BrutalButton
                  id="home-download-pdf-btn"
                  variant="primary"
                  size="sm"
                  onClick={() => handleDownload('PDF')}
                  className="flex items-center justify-center gap-1.5 text-xs sm:text-sm col-span-2 sm:col-span-1 font-black"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Download PDF</span>
                </BrutalButton>
              </div>
            </div>
          </div>
        </BrutalCard>
      </section>

      {/* 3-Step Simple Explanation */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-4 sm:px-6 w-full scroll-mt-24">
        <div className="mb-8">
          <BrutalBadge variant="white" size="sm" className="mb-2">
            SIMPLE WORKFLOW
          </BrutalBadge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            How TABLEGUY works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <BrutalCard shadow="md" className="p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-black text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                <ClipboardPaste className="w-5 h-5 stroke-[2.5]" />
                Paste or enter
              </h3>
              <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                Paste raw comma-separated, tabbed, or messy lines into the editor. Or start typing directly into fresh cells.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-black/10 font-mono text-xs font-bold text-gray-600">
              CSV • TSV • Plain text
            </div>
          </BrutalCard>

          {/* Step 2 */}
          <BrutalCard shadow="md" className="p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-black text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 stroke-[2.5]" />
                Clean it up
              </h3>
              <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                Add or remove rows and columns with clear buttons. Edit cells visually with no complicated spreadsheet formulas.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-black/10 font-mono text-xs font-bold text-gray-600">
              Visual editing • No formulas
            </div>
          </BrutalCard>

          {/* Step 3 */}
          <BrutalCard shadow="md" className="p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#FFDE00] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-black text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                <Copy className="w-5 h-5 stroke-[2.5]" />
                Copy the table
              </h3>
              <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                Get your table out in any format you need: HTML code, clean Markdown, standard CSV, or neat plain text.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-black/10 font-mono text-xs font-bold text-gray-600">
              HTML • Markdown • CSV • Text
            </div>
          </BrutalCard>
        </div>
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
            <span>Create a table</span>
            <ArrowRight className="w-5 h-5 stroke-[3] ml-2" />
          </BrutalButton>
        </BrutalCard>
      </section>
    </div>
  );
};
