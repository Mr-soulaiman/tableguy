import React from 'react';
import { Link } from '../router';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t-2 sm:border-t-[3px] border-black bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b-2 border-black/10">
          <div>
            <Link
              href="/"
              className="inline-block focus:outline-none"
              title="TABLABLE — Free Online Table Generator"
            >
              <img
                src="/tablable-logo.png"
                alt="TABLABLE"
                className="h-9 sm:h-10 w-auto max-w-[180px] object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Link
              href="/"
              className="text-xs sm:text-sm font-bold px-3 py-1 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFDE00] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/table-generator"
              className="text-xs sm:text-sm font-bold px-3 py-1 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFDE00] transition-colors"
            >
              Table Generator
            </Link>
            <Link
              href="/about"
              className="text-xs sm:text-sm font-bold px-3 py-1 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFDE00] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-xs sm:text-sm font-bold px-3 py-1 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFDE00] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/guides"
              className="text-xs sm:text-sm font-bold px-3 py-1 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFDE00] transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs sm:text-sm font-bold px-3 py-1 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFDE00] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs sm:text-sm font-bold px-3 py-1 bg-[#FAF8F5] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFDE00] transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>

        {/* Feature badges & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-semibold text-gray-700">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-black stroke-[2.5]" /> Fast &amp; In-Browser
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-black stroke-[2.5]" /> No Account Required
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-black stroke-[2.5]" /> 100% Free
            </span>
          </div>

          <p className="text-gray-600">
            TABLABLE — Free Online Table Generator.
          </p>
        </div>
      </div>
    </footer>
  );
};

