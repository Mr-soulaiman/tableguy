import React from 'react';
import { useRouter } from '../router';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalButton } from '../components/BrutalButton';
import { SEO } from '../components/SEO';
import { ArrowLeft, Table as TableIcon, BookOpen, CheckSquare } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEO
        title="404 — Table Not Found | TABLABLE"
        description="The page you're looking for doesn't exist."
        noindex={true}
      />

      <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col items-center text-center">
        <BrutalCard shadow="lg" className="p-8 sm:p-12 bg-white w-full flex flex-col items-center gap-6">
          <div className="inline-block px-4 py-1.5 bg-[#FFDE00] border-2 sm:border-[3px] border-black font-black text-3xl sm:text-4xl text-black shadow-[3px_3px_0px_0px_#000]">
            404
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
              Table not found.
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray-700">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full pt-4 border-t-2 border-black flex-wrap">
            <BrutalButton
              id="not-found-back-home-btn"
              variant="secondary"
              size="md"
              className="w-full sm:w-auto"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
              <span>Back to Home</span>
            </BrutalButton>

            <BrutalButton
              id="not-found-open-generator-btn"
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
              onClick={() => navigate('/table-generator')}
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Table Generator</span>
            </BrutalButton>

            <BrutalButton
              id="not-found-open-todo-btn"
              variant="secondary"
              size="md"
              className="w-full sm:w-auto"
              onClick={() => navigate('/to-do-list')}
            >
              <CheckSquare className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>To-Do List</span>
            </BrutalButton>

            <BrutalButton
              id="not-found-browse-guides-btn"
              variant="secondary"
              size="md"
              className="w-full sm:w-auto"
              onClick={() => navigate('/guides')}
            >
              <BookOpen className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Browse Guides</span>
            </BrutalButton>
          </div>
        </BrutalCard>
      </div>
    </>
  );
};
