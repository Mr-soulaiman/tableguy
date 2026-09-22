import React, { useState } from 'react';
import { useRouter } from '../router';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalButton } from '../components/BrutalButton';
import { BrutalBadge } from '../components/BrutalBadge';
import { GuideCard } from '../components/GuideCard';
import { SEO } from '../components/SEO';
import { GUIDE_ARTICLES, GUIDE_CATEGORIES } from '../data/guides';
import { ArrowRight, BookOpen, Layers, Table as TableIcon } from 'lucide-react';

export const GuidesPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredArticles = selectedCategory === 'ALL'
    ? GUIDE_ARTICLES
    : GUIDE_ARTICLES.filter(a => a.category === selectedCategory);

  return (
    <>
      <SEO
        title="TABLABLE Guides — Learn About Tables, Formats & Organization"
        description="Learn how to create better tables, choose the right table format, organize information, and use tables effectively with practical guides from TABLABLE."
        canonicalPath="/guides"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col gap-10">
        {/* Header Section */}
        <div className="border-b-2 sm:border-b-[3px] border-black pb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <BrutalBadge variant="yellow" size="md">
              Knowledge Base
            </BrutalBadge>
            <BrutalBadge variant="white" size="md">
              Free Guides
            </BrutalBadge>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mb-3">
            TABLABLE Guides
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-800 max-w-3xl">
            Useful guides for creating, organizing, formatting, and getting more out of tables and printable checklists.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-b-2 border-black pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono font-black uppercase text-gray-600 mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 stroke-[2.5]" />
              Filter:
            </span>
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3 py-1 text-xs font-black uppercase border-2 border-black transition-all cursor-pointer ${
                selectedCategory === 'ALL'
                  ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                  : 'bg-white text-black hover:bg-[#FAF8F5] shadow-[1px_1px_0px_0px_#000]'
              }`}
            >
              All Guides ({GUIDE_ARTICLES.length})
            </button>
            {GUIDE_CATEGORIES.map((cat) => (
              <button
                key={`filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3 py-1 text-xs font-black uppercase border-2 border-black transition-all cursor-pointer ${
                  selectedCategory === cat.name
                    ? 'bg-[#FFDE00] text-black shadow-[2px_2px_0px_0px_#000]'
                    : 'bg-white text-black hover:bg-[#FAF8F5] shadow-[1px_1px_0px_0px_#000]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono font-bold text-gray-600">
            Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'guide' : 'guides'}
          </span>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>

        {/* Bottom Dual Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <BrutalCard shadow="lg" className="p-6 sm:p-8 bg-[#FFDE00] border-2 sm:border-[3px] border-black flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 font-black text-black text-xs uppercase">
                <TableIcon className="w-4 h-4 stroke-[2.5]" />
                <span>Tool 1 • Data &amp; Grids</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                Table Generator
              </h2>
              <p className="text-sm font-bold text-black">
                Paste spreadsheet rows, edit cells, merge headers, and export directly to Markdown, HTML, CSV, or PDF.
              </p>
            </div>

            <BrutalButton
              id="guides-open-table-btn"
              variant="secondary"
              size="md"
              onClick={() => navigate('/table-generator')}
              className="bg-white self-start flex items-center gap-2"
            >
              <span>Open Table Generator</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </BrutalButton>
          </BrutalCard>

          <BrutalCard shadow="lg" className="p-6 sm:p-8 bg-white border-2 sm:border-[3px] border-black flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 font-black text-black text-xs uppercase">
                <BookOpen className="w-4 h-4 stroke-[2.5]" />
                <span>Tool 2 • Printable Checklist</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                To-Do List Maker
              </h2>
              <p className="text-sm font-medium text-gray-700">
                Type comma-separated tasks, auto-detect times, and download a clean, beautiful printable A4 PDF checklist.
              </p>
            </div>

            <BrutalButton
              id="guides-open-todo-btn"
              variant="primary"
              size="md"
              onClick={() => navigate('/to-do-list')}
              className="self-start flex items-center gap-2"
            >
              <span>Make a To-Do List</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </BrutalButton>
          </BrutalCard>
        </div>
      </div>
    </>
  );
};
