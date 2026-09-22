import React from 'react';
import { useRouter, Link } from '../router';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalButton } from '../components/BrutalButton';
import { BrutalBadge } from '../components/BrutalBadge';
import { SEO } from '../components/SEO';
import { getGuideBySlug } from '../data/guides';
import { NotFoundPage } from './NotFoundPage';
import { CsvVsExcelVsHtmlVsMarkdown } from './guides/CsvVsExcelVsHtmlVsMarkdown';
import { WhenToUseCsv } from './guides/WhenToUseCsv';
import { WhenToUseHtmlTables } from './guides/WhenToUseHtmlTables';
import { TurnMessyListIntoCleanTable } from './guides/TurnMessyListIntoCleanTable';
import { MakeTableFromExcelGoogleSheets } from './guides/MakeTableFromExcelGoogleSheets';
import { CompareProductsWithTable } from './guides/CompareProductsWithTable';
import { WhenToUseMarkdownTables } from './guides/WhenToUseMarkdownTables';
import { TablesVsLists } from './guides/TablesVsLists';
import { HowToMakePrintableChecklist } from './guides/HowToMakePrintableChecklist';
import { HowToMakeReadableTable } from './guides/HowToMakeReadableTable';
import { TablesForStudying } from './guides/TablesForStudying';
import { BudgetWithATable } from './guides/BudgetWithATable';
import { CommonTableMistakes } from './guides/CommonTableMistakes';
import { OrganizeInformationWithTable } from './guides/OrganizeInformationWithTable';
import { OrganizeProjectWithTable } from './guides/OrganizeProjectWithTable';
import { OrganizeStudyNotesWithTable } from './guides/OrganizeStudyNotesWithTable';
import { CreateScheduleWithTable } from './guides/CreateScheduleWithTable';
import { TurnListOfDataIntoTable } from './guides/TurnListOfDataIntoTable';
import { HowToMakeUsefulComparisonTable } from './guides/HowToMakeUsefulComparisonTable';
import { CreateTableForWebsite } from './guides/CreateTableForWebsite';
import { HowToCleanUpTable } from './guides/HowToCleanUpTable';
import { HowToMakeTableMobileFriendly } from './guides/HowToMakeTableMobileFriendly';
import { SimpleInventoryTable } from './guides/SimpleInventoryTable';
import { HowToConvertCsvToHtml } from './guides/HowToConvertCsvToHtml';
import { HowToConvertCsvToMarkdown } from './guides/HowToConvertCsvToMarkdown';
import { HowToMakeTableInGoogleDocs } from './guides/HowToMakeTableInGoogleDocs';
import { HowToConvertExcelToHtml } from './guides/HowToConvertExcelToHtml';
import {
  ArrowLeft,
  ChevronRight,
  Clock,
  Table as TableIcon,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

interface GuideArticlePageProps {
  slug: string;
}

export const GuideArticlePage: React.FC<GuideArticlePageProps> = ({ slug }) => {
  const { navigate } = useRouter();

  // Fully written guides
  if (slug === 'csv-vs-excel-vs-html-vs-markdown') {
    return <CsvVsExcelVsHtmlVsMarkdown />;
  }

  if (slug === 'when-to-use-csv') {
    return <WhenToUseCsv />;
  }

  if (slug === 'when-to-use-html-tables') {
    return <WhenToUseHtmlTables />;
  }

  if (slug === 'turn-messy-list-into-clean-table') {
    return <TurnMessyListIntoCleanTable />;
  }

  if (slug === 'make-table-from-excel-google-sheets') {
    return <MakeTableFromExcelGoogleSheets />;
  }

  if (slug === 'compare-products-with-table') {
    return <CompareProductsWithTable />;
  }

  if (slug === 'when-to-use-markdown-tables') {
    return <WhenToUseMarkdownTables />;
  }

  if (slug === 'tables-vs-lists') {
    return <TablesVsLists />;
  }

  if (slug === 'how-to-make-a-printable-checklist') {
    return <HowToMakePrintableChecklist />;
  }

  if (slug === 'how-to-make-readable-table') {
    return <HowToMakeReadableTable />;
  }

  if (slug === 'tables-for-studying') {
    return <TablesForStudying />;
  }

  if (slug === 'budget-with-a-table') {
    return <BudgetWithATable />;
  }

  if (slug === 'common-table-mistakes') {
    return <CommonTableMistakes />;
  }

  if (slug === 'organize-information-with-table') {
    return <OrganizeInformationWithTable />;
  }

  if (slug === 'organize-project-with-table') {
    return <OrganizeProjectWithTable />;
  }

  if (slug === 'organize-study-notes-with-table') {
    return <OrganizeStudyNotesWithTable />;
  }

  if (slug === 'create-schedule-with-table') {
    return <CreateScheduleWithTable />;
  }

  if (slug === 'turn-list-of-data-into-table') {
    return <TurnListOfDataIntoTable />;
  }

  if (slug === 'how-to-make-useful-comparison-table') {
    return <HowToMakeUsefulComparisonTable />;
  }

  if (slug === 'create-table-for-website') {
    return <CreateTableForWebsite />;
  }

  if (slug === 'how-to-clean-up-a-table') {
    return <HowToCleanUpTable />;
  }

  if (slug === 'how-to-make-a-table-mobile-friendly') {
    return <HowToMakeTableMobileFriendly />;
  }

  if (slug === 'simple-inventory-table') {
    return <SimpleInventoryTable />;
  }

  if (slug === 'how-to-convert-csv-to-html') {
    return <HowToConvertCsvToHtml />;
  }

  if (slug === 'how-to-convert-csv-to-markdown') {
    return <HowToConvertCsvToMarkdown />;
  }

  if (slug === 'how-to-make-a-table-in-google-docs') {
    return <HowToMakeTableInGoogleDocs />;
  }

  if (slug === 'how-to-convert-excel-to-html') {
    return <HowToConvertExcelToHtml />;
  }

  const guide = getGuideBySlug(slug);

  if (!guide) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEO
        title={guide.seoTitle}
        description={guide.seoDescription}
        canonicalPath={`/guides/${guide.slug}`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-14 flex flex-col gap-8 sm:gap-10">
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
            {guide.title}
          </span>
        </nav>

        {/* Article Header Card */}
        <div className="border-b-2 sm:border-b-[3px] border-black pb-6 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <BrutalBadge variant="yellow" size="md">
              {guide.category}
            </BrutalBadge>
            {guide.readingTime && (
              <span className="text-xs font-mono font-bold text-gray-600 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
                {guide.readingTime}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
            {guide.title}
          </h1>

          <p className="text-base sm:text-xl font-medium text-gray-800 leading-relaxed">
            {guide.intro || guide.description}
          </p>
        </div>

        {/* Main Article Content Container */}
        <BrutalCard shadow="lg" className="p-6 sm:p-10 bg-white flex flex-col gap-8 text-black">
          {/* Summary / Core Concepts Overview */}
          {guide.summaryPoints && guide.summaryPoints.length > 0 && (
            <div className="p-5 bg-[#FAF8F5] border-2 border-black flex flex-col gap-3.5">
              <span className="text-xs font-mono font-black uppercase tracking-wider text-black flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 stroke-[2.5]" />
                Key Concepts &amp; Highlights
              </span>
              <ul className="space-y-2.5">
                {guide.summaryPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-black stroke-[3] shrink-0 mt-1" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Explanations & Practical Advice */}
          <div className="prose prose-neutral max-w-none flex flex-col gap-6 text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
            <section className="flex flex-col gap-3">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                Overview &amp; Practical Context
              </h2>
              <p>
                {guide.description} When working with tabular data, structured presentation prevents misunderstandings and accelerates analysis across documentation, spreadsheets, and web presentations.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                How to Apply This With TABLABLE
              </h2>
              <p>
                TABLABLE makes it seamless to implement these principles directly. You can create custom tables, edit cells with responsive auto-resizing, apply formatting and styling, merge headers or rows, and immediately export your finished output in HTML, Markdown, CSV, Plain Text, or PDF format.
              </p>
            </section>
          </div>

          {/* In-Article CTA to TABLABLE */}
          <div className="mt-4 p-6 bg-[#FFFDF0] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono font-black uppercase text-gray-600">
                TRY TABLABLE
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                Ready to create your own table?
              </h3>
              <p className="text-sm font-medium text-gray-700">
                Use the free online table editor to create, format, and export tables in seconds.
              </p>
            </div>

            <BrutalButton
              id="article-open-generator-btn"
              variant="primary"
              size="md"
              onClick={() => navigate('/table-generator')}
              className="shrink-0"
            >
              <TableIcon className="w-4 h-4 stroke-[2.5] mr-1.5" />
              <span>Open Table Generator</span>
            </BrutalButton>
          </div>
        </BrutalCard>

        {/* Back Link */}
        <div className="pt-2">
          <BrutalButton
            id="article-back-to-guides-btn"
            variant="secondary"
            size="sm"
            onClick={() => navigate('/guides')}
          >
            <ArrowLeft className="w-4 h-4 stroke-[3] mr-1.5" />
            <span>Back to Guides</span>
          </BrutalButton>
        </div>
      </div>
    </>
  );
};
