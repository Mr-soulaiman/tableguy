import React, { useState, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { BrutalCard } from '../components/BrutalCard';
import { BrutalButton } from '../components/BrutalButton';
import { BrutalBadge } from '../components/BrutalBadge';
import { Link } from '../router';
import {
  Copy,
  Check,
  Trash2,
  Type,
  FileText,
  Clock,
  AlignLeft,
  Hash,
  ShieldCheck,
  Zap,
  Table as TableIcon,
  CheckSquare,
  BookOpen,
} from 'lucide-react';

export interface WordCounterStats {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTimeDisplay: string;
}

export function calculateTextStats(text: string): WordCounterStats {
  if (!text) {
    return {
      words: 0,
      characters: 0,
      charactersNoSpaces: 0,
      sentences: 0,
      paragraphs: 0,
      readingTimeDisplay: '0 min',
    };
  }

  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;

  const trimmed = text.trim();
  if (!trimmed) {
    return {
      words: 0,
      characters,
      charactersNoSpaces: 0,
      sentences: 0,
      paragraphs: 0,
      readingTimeDisplay: '0 min',
    };
  }

  // Normal words separated by whitespace
  const words = trimmed.split(/\s+/).filter(Boolean).length;

  // Sentence counting handling . ! ? punctuation and non-empty text
  const sentences = trimmed
    .split(/[.!?]+/)
    .filter((segment) => segment.trim().length > 0).length;

  // Paragraph counting from non-empty blocks separated by line breaks
  const paragraphs = text
    .split(/\r?\n+/)
    .filter((block) => block.trim().length > 0).length;

  // Estimated reading time (~200 words per minute)
  let readingTimeDisplay = '0 min';
  if (words > 0) {
    const minutes = Math.ceil(words / 200);
    readingTimeDisplay = minutes === 1 ? '1 min' : `${minutes} min`;
  }

  return {
    words,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    readingTimeDisplay,
  };
}

export const WordCounterPage: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const stats = useMemo(() => calculateTextStats(text), [text]);

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClear = () => {
    setText('');
    setCopied(false);
  };

  return (
    <>
      <SEO
        title="Free Word Counter - Count Words & Characters | TABLABLE"
        description="Free online word counter. Count words, characters, sentences, paragraphs, and reading time instantly. Simple, fast, and free."
        canonicalPath="/word-counter"
      />

      <div className="flex flex-col gap-12 sm:gap-16 py-8 sm:py-16">
        {/* Hero / Intro Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <BrutalBadge variant="yellow" size="md">
              Instant Text Analysis
            </BrutalBadge>
            <BrutalBadge variant="white" size="md">
              100% Free &amp; Client-Side
            </BrutalBadge>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-black tracking-tight uppercase leading-[1.08] mb-6">
            Free Word Counter
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed max-w-2xl mx-auto">
            Count words, characters, sentences, paragraphs, and estimated reading time as you type or paste. Everything runs directly in your browser with zero tracking or sign-ups.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-gray-700">
            <span>Need other tools?</span>
            <Link
              href="/table-generator"
              className="font-black text-black underline hover:text-gray-700 transition-colors"
            >
              Table Generator →
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/to-do-list"
              className="font-black text-black underline hover:text-gray-700 transition-colors"
            >
              To-Do List Maker →
            </Link>
          </div>
        </section>

        {/* Main Word Counter Tool Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          {/* Live Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6">
            <BrutalCard shadow="sm" className="p-3.5 sm:p-4 bg-[#FFDE00]">
              <div className="text-[11px] font-black uppercase tracking-wider text-black/80 mb-1">
                Words
              </div>
              <div
                data-testid="stat-words"
                className="text-2xl sm:text-3xl font-black font-mono tabular-nums text-black"
              >
                {stats.words.toLocaleString()}
              </div>
            </BrutalCard>

            <BrutalCard shadow="sm" className="p-3.5 sm:p-4 bg-white">
              <div className="text-[11px] font-black uppercase tracking-wider text-gray-600 mb-1">
                Characters
              </div>
              <div
                data-testid="stat-characters"
                className="text-2xl sm:text-3xl font-black font-mono tabular-nums text-black"
              >
                {stats.characters.toLocaleString()}
              </div>
            </BrutalCard>

            <BrutalCard shadow="sm" className="p-3.5 sm:p-4 bg-white">
              <div className="text-[11px] font-black uppercase tracking-wider text-gray-600 mb-1">
                No Spaces
              </div>
              <div
                data-testid="stat-characters-no-spaces"
                className="text-2xl sm:text-3xl font-black font-mono tabular-nums text-black"
              >
                {stats.charactersNoSpaces.toLocaleString()}
              </div>
            </BrutalCard>

            <BrutalCard shadow="sm" className="p-3.5 sm:p-4 bg-white">
              <div className="text-[11px] font-black uppercase tracking-wider text-gray-600 mb-1">
                Sentences
              </div>
              <div
                data-testid="stat-sentences"
                className="text-2xl sm:text-3xl font-black font-mono tabular-nums text-black"
              >
                {stats.sentences.toLocaleString()}
              </div>
            </BrutalCard>

            <BrutalCard shadow="sm" className="p-3.5 sm:p-4 bg-white">
              <div className="text-[11px] font-black uppercase tracking-wider text-gray-600 mb-1">
                Paragraphs
              </div>
              <div
                data-testid="stat-paragraphs"
                className="text-2xl sm:text-3xl font-black font-mono tabular-nums text-black"
              >
                {stats.paragraphs.toLocaleString()}
              </div>
            </BrutalCard>

            <BrutalCard shadow="sm" className="p-3.5 sm:p-4 bg-white">
              <div className="text-[11px] font-black uppercase tracking-wider text-gray-600 mb-1">
                Reading Time
              </div>
              <div
                data-testid="stat-reading-time"
                className="text-xl sm:text-2xl font-black font-mono tabular-nums text-black pt-0.5"
              >
                {stats.readingTimeDisplay}
              </div>
            </BrutalCard>
          </div>

          {/* Text Input Card */}
          <BrutalCard shadow="lg" className="p-5 sm:p-8 bg-white">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label
                  htmlFor="word-counter-textarea"
                  className="text-sm sm:text-base font-black uppercase text-black flex items-center gap-2"
                >
                  <Type className="w-4 h-4 stroke-[2.5]" />
                  <span>Your Text</span>
                </label>

                <div className="flex items-center gap-2.5">
                  <BrutalButton
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={handleCopy}
                    disabled={!text}
                    className="gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 stroke-[2.5]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 stroke-[2.5]" />
                        <span>Copy Text</span>
                      </>
                    )}
                  </BrutalButton>

                  <BrutalButton
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleClear}
                    disabled={!text}
                    className="gap-1.5 bg-[#FAF8F5] hover:bg-[#F3F0E6]"
                  >
                    <Trash2 className="w-4 h-4 stroke-[2.5]" />
                    <span>Clear</span>
                  </BrutalButton>
                </div>
              </div>

              <textarea
                id="word-counter-textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste or type your text here..."
                rows={12}
                className="w-full p-4 text-base sm:text-lg font-medium border-2 sm:border-[3px] border-black bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-0 shadow-[3px_3px_0px_0px_#000] resize-y placeholder:text-gray-400 font-sans leading-relaxed"
              />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs font-semibold text-gray-600">
                <span>
                  Counts update automatically while typing or pasting.
                </span>
                <span className="font-mono tabular-nums">
                  {stats.words} {stats.words === 1 ? 'word' : 'words'} · {stats.characters}{' '}
                  {stats.characters === 1 ? 'character' : 'characters'} ({stats.charactersNoSpaces} without spaces)
                </span>
              </div>
            </div>
          </BrutalCard>
        </section>

        {/* Practical Features Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BrutalCard shadow="sm" className="p-6 bg-white">
              <div className="w-10 h-10 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center mb-4">
                <Hash className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              <h2 className="text-lg font-black uppercase text-black mb-2">
                Accurate Breakdown
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                See exact word count, total characters, characters excluding spaces, sentences, and paragraphs in real time.
              </p>
            </BrutalCard>

            <BrutalCard shadow="sm" className="p-6 bg-white">
              <div className="w-10 h-10 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              <h2 className="text-lg font-black uppercase text-black mb-2">
                Reading Time Estimate
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                Quickly check how long an article, essay, email, or script takes to read based on a standard 200-words-per-minute pace.
              </p>
            </BrutalCard>

            <BrutalCard shadow="sm" className="p-6 bg-white">
              <div className="w-10 h-10 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              <h2 className="text-lg font-black uppercase text-black mb-2">
                100% Private in Browser
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                Your drafts and notes are never uploaded to a server or stored in a database. Everything stays on your device.
              </p>
            </BrutalCard>
          </div>
        </section>

        {/* Cross-Links to Other Tablable Tools & Guides */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <BrutalCard
              shadow="md"
              className="p-6 bg-white flex flex-col justify-between gap-4"
            >
              <div>
                <span className="text-xs font-black uppercase bg-[#FFDE00] px-2 py-0.5 border border-black inline-block mb-3">
                  Online Tool
                </span>
                <h2 className="text-xl font-black uppercase text-black mb-2">
                  Table Generator
                </h2>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  Turn messy text, CSV, or spreadsheet rows into a clean table and export to HTML, Markdown, CSV, or PDF.
                </p>
              </div>
              <div>
                <Link
                  href="/table-generator"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-black bg-[#FFDE00] hover:bg-[#FFE633] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <TableIcon className="w-4 h-4 stroke-[2.5]" />
                  <span>Open Table Generator →</span>
                </Link>
              </div>
            </BrutalCard>

            <BrutalCard
              shadow="md"
              className="p-6 bg-white flex flex-col justify-between gap-4"
            >
              <div>
                <span className="text-xs font-black uppercase bg-[#FFDE00] px-2 py-0.5 border border-black inline-block mb-3">
                  Online Tool
                </span>
                <h2 className="text-xl font-black uppercase text-black mb-2">
                  To-Do List Maker
                </h2>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  Type your tasks separated by commas and generate a crisp, printable A4 checklist PDF in seconds.
                </p>
              </div>
              <div>
                <Link
                  href="/to-do-list"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-black bg-[#FFDE00] hover:bg-[#FFE633] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <CheckSquare className="w-4 h-4 stroke-[2.5]" />
                  <span>Make a To-Do List →</span>
                </Link>
              </div>
            </BrutalCard>

            <BrutalCard
              shadow="md"
              className="p-6 bg-white flex flex-col justify-between gap-4"
            >
              <div>
                <span className="text-xs font-black uppercase bg-black text-white px-2 py-0.5 border border-black inline-block mb-3">
                  Guides &amp; Articles
                </span>
                <h2 className="text-xl font-black uppercase text-black mb-2">
                  Practical Guides
                </h2>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  Read step-by-step guides on organizing data, formatting tables, and planning tasks clearly.
                </p>
              </div>
              <div>
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-black bg-white hover:bg-[#F3F0E6] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <BookOpen className="w-4 h-4 stroke-[2.5]" />
                  <span>Explore Guides →</span>
                </Link>
              </div>
            </BrutalCard>
          </div>
        </section>

        {/* Direct Link to Home */}
        <div className="text-center text-sm font-bold text-gray-600">
          <Link href="/" className="hover:text-black underline underline-offset-4">
            ← Back to TABLABLE Home
          </Link>
        </div>
      </div>
    </>
  );
};
