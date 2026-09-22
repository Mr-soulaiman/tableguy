import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../router';
import { ArrowRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu whenever path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5] border-b-2 sm:border-b-[3px] border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center focus:outline-none shrink-0"
          title="TABLABLE — Make a table. Get it out."
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="/tablable-logo.png"
            alt="TABLABLE"
            className="h-8 sm:h-10 md:h-14 w-auto max-w-[150px] sm:max-w-[200px] md:max-w-[240px] object-contain group-hover:opacity-95 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation & Actions (md and up) */}
        <nav className="hidden md:flex items-center gap-2.5 lg:gap-3" aria-label="Desktop Navigation">
          <Link
            href="/"
            className={`px-3 py-2 text-xs sm:text-sm font-bold border-2 border-black transition-all whitespace-nowrap ${
              currentPath === '/'
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                : 'bg-white text-black hover:bg-[#F3F0E6] shadow-[2px_2px_0px_0px_#000]'
            }`}
          >
            Home
          </Link>

          <Link
            href="/table-generator"
            className={`px-3.5 py-2 text-xs sm:text-sm font-black border-2 lg:border-[3px] border-black flex items-center gap-1.5 transition-all whitespace-nowrap ${
              currentPath === '/table-generator'
                ? 'bg-[#FFDE00] text-black shadow-[3px_3px_0px_0px_#000] translate-x-[1px] translate-y-[1px]'
                : 'bg-[#FFDE00] text-black hover:bg-[#FFE633] shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000]'
            }`}
          >
            <span>Table Generator</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </Link>

          <Link
            href="/to-do-list"
            className={`px-3.5 py-2 text-xs sm:text-sm font-black border-2 lg:border-[3px] border-black flex items-center gap-1.5 transition-all whitespace-nowrap ${
              currentPath === '/to-do-list'
                ? 'bg-[#FFDE00] text-black shadow-[3px_3px_0px_0px_#000] translate-x-[1px] translate-y-[1px]'
                : 'bg-[#FFDE00] text-black hover:bg-[#FFE633] shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000]'
            }`}
          >
            <span>To-Do List</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </Link>

          <Link
            href="/guides"
            className={`px-3 py-2 text-xs sm:text-sm font-bold border-2 border-black transition-all whitespace-nowrap ${
              currentPath.startsWith('/guides')
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                : 'bg-white text-black hover:bg-[#F3F0E6] shadow-[2px_2px_0px_0px_#000]'
            }`}
          >
            Guides
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button (below md) */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            id="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="px-3 py-1.5 bg-[#FFDE00] text-black border-2 border-black font-black text-xs uppercase shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center gap-1.5 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <>
                <X className="w-4 h-4 stroke-[3]" />
                <span>Close</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4 stroke-[3]" />
                <span>Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#FAF8F5] border-t-2 border-black px-4 py-4 shadow-[0_4px_0_0_#000]"
        >
          <div className="flex flex-col gap-2.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full py-2.5 px-3.5 text-sm font-bold border-2 border-black flex items-center justify-between transition-all ${
                currentPath === '/'
                  ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                  : 'bg-white text-black hover:bg-[#F3F0E6] shadow-[2px_2px_0px_0px_#000]'
              }`}
            >
              <span>Home</span>
            </Link>

            <Link
              href="/table-generator"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full py-2.5 px-3.5 text-sm font-black border-2 border-black flex items-center justify-between transition-all ${
                currentPath === '/table-generator'
                  ? 'bg-[#FFDE00] text-black shadow-[3px_3px_0px_0px_#000]'
                  : 'bg-[#FFDE00] text-black hover:bg-[#FFE633] shadow-[3px_3px_0px_0px_#000]'
              }`}
            >
              <span>Table Generator</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>

            <Link
              href="/to-do-list"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full py-2.5 px-3.5 text-sm font-black border-2 border-black flex items-center justify-between transition-all ${
                currentPath === '/to-do-list'
                  ? 'bg-[#FFDE00] text-black shadow-[3px_3px_0px_0px_#000]'
                  : 'bg-[#FFDE00] text-black hover:bg-[#FFE633] shadow-[3px_3px_0px_0px_#000]'
              }`}
            >
              <span>To-Do List</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>

            <Link
              href="/guides"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full py-2.5 px-3.5 text-sm font-bold border-2 border-black flex items-center justify-between transition-all ${
                currentPath.startsWith('/guides')
                  ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                  : 'bg-white text-black hover:bg-[#F3F0E6] shadow-[2px_2px_0px_0px_#000]'
              }`}
            >
              <span>Guides &amp; Tutorials</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

