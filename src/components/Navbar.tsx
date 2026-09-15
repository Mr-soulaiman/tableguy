import React from 'react';
import { useRouter, Link } from '../router';
import { ArrowRight } from 'lucide-react';
import { BrutalButton } from './BrutalButton';

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5] border-b-2 sm:border-b-[3px] border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center focus:outline-none"
          title="TABLEGUY — Make a table. Get it out."
        >
          <img
            src="/tableguy-logo.png"
            alt="TABLEGUY"
            className="h-10 sm:h-12 md:h-14 w-auto max-w-[190px] sm:max-w-[240px] object-contain group-hover:opacity-95 transition-opacity"
          />
        </Link>

        {/* Navigation & Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-bold border-2 border-black transition-all ${
              currentPath === '/'
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                : 'bg-white text-black hover:bg-[#F3F0E6] shadow-[2px_2px_0px_0px_#000]'
            }`}
          >
            Home
          </Link>

          <Link
            href="/table-generator"
            className={`px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-black border-2 sm:border-[3px] border-black flex items-center gap-1.5 transition-all ${
              currentPath === '/table-generator'
                ? 'bg-[#FFDE00] text-black shadow-[3px_3px_0px_0px_#000] translate-x-[1px] translate-y-[1px]'
                : 'bg-[#FFDE00] text-black hover:bg-[#FFE633] shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000]'
            }`}
          >
            <span>Table Generator</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
          </Link>

          <Link
            href="/guides"
            className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-bold border-2 border-black transition-all ${
              currentPath.startsWith('/guides')
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                : 'bg-white text-black hover:bg-[#F3F0E6] shadow-[2px_2px_0px_0px_#000]'
            }`}
          >
            Guides
          </Link>
        </div>
      </div>
    </header>
  );
};
