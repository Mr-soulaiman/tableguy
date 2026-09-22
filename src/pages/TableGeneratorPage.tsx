import React, { useState } from 'react';
import { useRouter, Link } from '../router';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalButton } from '../components/BrutalButton';
import { BrutalBadge } from '../components/BrutalBadge';
import { TableEditor } from '../components/TableEditor';
import { SEO } from '../components/SEO';
import {
  Table,
  ArrowLeft,
  Wand2,
  Plus,
} from 'lucide-react';
import { parseMultiTableData } from '../utils/tableParser';
import { TableItem } from '../types';

const DEFAULT_TABLE: TableItem = {
  id: 'tbl-default',
  name: 'Table 1',
  headers: ['Name', 'Subject', 'Grade'],
  rows: [
    ['Ahmed', 'Mathematics', '18'],
    ['Sara', 'Physics', '19'],
    ['Youssef', 'English', '16'],
  ],
  cellColors: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  headerColors: ['', '', ''],
  cellFormats: [
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}],
  ],
  headerFormats: [{}, {}, {}],
  signatureEnabled: false,
  signatureName: '',
};

export const TableGeneratorPage: React.FC = () => {
  const { navigate } = useRouter();

  // Tables state: list of TableItem
  const [tables, setTables] = useState<TableItem[]>([DEFAULT_TABLE]);

  // Paste area state
  const [pasteText, setPasteText] = useState<string>('');
  const [pasteError, setPasteError] = useState<string | null>(null);

  // Turn pasted data into tables (Magic Table)
  const handleTurnIntoTable = () => {
    if (!pasteText.trim()) {
      setPasteError('Add some data first.');
      return;
    }

    const parsedTables = parseMultiTableData(pasteText);
    if (!parsedTables || parsedTables.length === 0) {
      setPasteError("We couldn't find a table in that data.");
      return;
    }

    const newTables: TableItem[] = parsedTables.map((pt, idx) => ({
      id: `tbl-${Date.now()}-${idx}`,
      name: `Table ${idx + 1}`,
      headers: pt.headers,
      rows: pt.rows,
      cellColors: pt.rows.map(row => row.map(() => '')),
      headerColors: pt.headers.map(() => ''),
      cellFormats: pt.rows.map(row => row.map(() => ({}))),
      headerFormats: pt.headers.map(() => ({})),
      signatureEnabled: false,
      signatureName: '',
    }));

    setTables(newTables);
    setPasteError(null);
  };

  // Update specific table
  const handleUpdateTable = (index: number, updated: TableItem) => {
    setTables(prev => {
      const next = [...prev];
      next[index] = updated;
      return next;
    });
  };

  // Delete specific table when multiple exist
  const handleDeleteTable = (index: number) => {
    setTables(prev => {
      if (prev.length <= 1) return prev;
      return prev.filter((_, idx) => idx !== index);
    });
  };

  // Reset to original example table
  const handleResetToExample = () => {
    setTables([{ ...DEFAULT_TABLE, id: `tbl-${Date.now()}` }]);
    setPasteText('');
    setPasteError(null);
  };

  // Add a new empty table
  const handleAddEmptyTable = () => {
    const newIndex = tables.length + 1;
    const newTable: TableItem = {
      id: `tbl-${Date.now()}`,
      name: `Table ${newIndex}`,
      headers: ['Column 1', 'Column 2', 'Column 3'],
      rows: [
        ['', '', ''],
        ['', '', ''],
      ],
      cellColors: [
        ['', '', ''],
        ['', '', ''],
      ],
      headerColors: ['', '', ''],
      cellFormats: [
        [{}, {}, {}],
        [{}, {}, {}],
      ],
      headerFormats: [{}, {}, {}],
      signatureEnabled: false,
      signatureName: '',
    };
    setTables(prev => [...prev, newTable]);
  };

  return (
    <>
      <SEO
        title="Free Table Generator — Create Tables Online | TABLABLE"
        description="Create tables online for free. Paste or enter your data, edit cells, merge cells, format tables, and export your finished table."
        canonicalPath="/table-generator"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-8">
        {/* Top Header */}
        <div className="border-b-2 sm:border-b-[3px] border-black pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-black hover:underline mb-3"
            >
              <ArrowLeft className="w-4 h-4 stroke-[3]" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#FFDE00] border-2 sm:border-[3px] border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black">
                <Table className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
                Free Table Generator
              </h1>
            </div>
            <p className="text-base sm:text-lg font-medium text-gray-800 max-w-2xl leading-relaxed">
              Use this free online table generator to create a table, edit table rows and columns, merge cells, and export directly as an HTML table, Markdown table, CSV table, or PDF.
            </p>
            <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700">
              Need a simple checklist instead?{' '}
              <Link href="/to-do-list" className="font-black text-black underline hover:text-[#FFDE00] transition-colors">
                Try the To-Do List Maker →
              </Link>
            </p>
          </div>

          {tables.length > 1 && (
            <div className="flex items-center gap-2">
              <BrutalBadge variant="yellow" size="md">
                {tables.length} Tables Detected
              </BrutalBadge>
            </div>
          )}
        </div>

      {/* SECTION 1: MAGIC TABLE / PASTE DATA */}
      <section id="section-paste-data" aria-label="Paste data section">
        <BrutalCard shadow="md" className="p-5 sm:p-7 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight flex items-center gap-2 text-black">
              <Wand2 className="w-5 h-5 stroke-[2.5]" />
              Magic Table
            </h2>
            <span className="text-xs sm:text-sm font-bold text-gray-700">
              Paste your data and we'll turn it into clean tables.
            </span>
          </div>

          <textarea
            id="paste-data-input"
            rows={4}
            value={pasteText}
            onChange={e => {
              setPasteText(e.target.value);
              if (pasteError) setPasteError(null);
            }}
            placeholder="Paste rows from Excel, Google Sheets, CSV, or plain text..."
            className="w-full p-3 sm:p-4 text-sm sm:text-base font-mono bg-[#FAF8F5] border-2 sm:border-[3px] border-black shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:bg-white placeholder:text-gray-500 resize-y"
          />

          {pasteError && (
            <p className="mt-2 text-xs sm:text-sm font-bold text-red-600">
              {pasteError}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <BrutalButton
              id="turn-into-table-btn"
              variant="primary"
              size="md"
              onClick={handleTurnIntoTable}
              className="flex items-center gap-2"
            >
              <Wand2 className="w-4 h-4 stroke-[2.5]" />
              <span>Turn into table</span>
            </BrutalButton>

            <span className="text-xs font-semibold text-gray-600">
              Example format: <code className="bg-[#FAF8F5] px-1 py-0.5 border border-black font-mono">Ahmed, Mathematics, 18</code>
            </span>
          </div>
        </BrutalCard>
      </section>

      {/* Multiple tables notification if > 1 */}
      {tables.length > 1 && (
        <div className="flex items-center justify-between bg-[#FFDE00] border-2 sm:border-[3px] border-black p-3.5 sm:p-4 shadow-[3px_3px_0px_0px_#000]">
          <div className="flex items-center gap-2 font-black text-xs sm:text-sm text-black">
            <Wand2 className="w-4 h-4 stroke-[3]" />
            <span>{tables.length} separate tables detected and generated below. Each table can be edited and exported independently.</span>
          </div>
          <button
            type="button"
            onClick={handleResetToExample}
            className="text-xs font-black underline hover:text-gray-900 cursor-pointer whitespace-nowrap ml-2"
          >
            Reset to single table
          </button>
        </div>
      )}

      {/* SECTION 2: EDITABLE TABLES */}
      <section id="section-table-editors" aria-label="Table editor section" className="flex flex-col gap-8">
        {tables.map((table, index) => (
          <TableEditor
            key={table.id}
            table={table}
            tableIndex={index}
            totalTables={tables.length}
            allTables={tables}
            onUpdateTable={updated => handleUpdateTable(index, updated)}
            onDeleteTable={tables.length > 1 ? () => handleDeleteTable(index) : undefined}
            onResetToExample={tables.length === 1 ? handleResetToExample : undefined}
          />
        ))}

        {/* Option to add an additional table */}
        {tables.length > 1 && (
          <div className="flex justify-center pt-2">
            <BrutalButton
              id="add-another-table-btn"
              variant="secondary"
              size="md"
              onClick={handleAddEmptyTable}
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>+ Add another table</span>
            </BrutalButton>
          </div>
        )}

        {/* Subtle cross-link to To-Do List Maker */}
        <div className="mt-4 p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm font-medium text-gray-800">
          <span>Need a simple checklist instead of a table?</span>
          <Link
            href="/to-do-list"
            className="font-black text-black underline hover:text-[#FFDE00] transition-colors whitespace-nowrap"
          >
            Try the To-Do List Maker →
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};
