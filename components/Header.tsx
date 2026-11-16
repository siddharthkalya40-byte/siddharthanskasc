import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenAdmissions: (defaultProgramme?: string) => void;
}

const NAV_LINKS = [
  { label: 'Academics', href: '#academics' },
  { label: 'About', href: '#leadership' },
  { label: 'Placements', href: '#placements' },
  { label: 'Research', href: '#research' },
  { label: 'Campus', href: '#campus' },
];

export function Header({ onOpenAdmissions }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E4DED3]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          className="font-serif text-xl font-semibold tracking-tight text-[#14326B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14326B]"
        >
          Sree Krishna
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A4640]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#14326B] hover:underline underline-offset-4 decoration-[#14326B]/50 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14326B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenAdmissions()}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#14326B] rounded-lg hover:bg-[#0E244F] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14326B]"
          >
            Apply Now
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#1A1917] hover:bg-[#EFEBE3] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E4DED3] bg-[#FAF8F5] px-6 py-4 space-y-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-[#1A1917] hover:text-[#14326B] border-b border-[#EFEBE3] last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenAdmissions();
              }}
              className="w-full py-3 px-4 text-sm font-medium text-white bg-[#14326B] rounded-lg hover:bg-[#0E244F] transition-colors cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
