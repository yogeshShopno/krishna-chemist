'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, SHOP } from '@/constants/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-brand-primaryBg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo + Name */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 ring-2 ring-transparent group-hover:ring-blue-100">
            <img src="/logo.jpeg" alt="Krishna chemist Logo" width={48} height={48} className="rounded-full object-cover w-full h-full" />
          </div>
          <span className="font-display font-extrabold text-brand-secondary text-xl leading-tight hidden sm:block group-hover:text-brand-primary transition-colors duration-300 tracking-tight">
              Krishna Chemist
            <span className="block text-[0.7rem] font-body font-bold text-brand-textMuted tracking-[0.15em] uppercase mt-0.5 group-hover:text-brand-primaryLight transition-colors duration-300">
           &  Retail Store
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-brand-textMuted hover:text-brand-primary transition-colors duration-150"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Call Now */}
        <a
          href={SHOP.phoneHref}
          className="hidden md:flex items-center gap-2 bg-brand-primary hover:bg-brand-primaryLight text-white text-sm font-semibold rounded-full px-5 py-2 transition-colors duration-200"
        >
          <Phone size={15} /> Call Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-brand-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-brand-primaryBg px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-brand-textDark hover:text-brand-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={SHOP.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 bg-brand-primary text-white text-sm font-semibold rounded-full px-5 py-2"
          >
            <Phone size={15} /> Call Now
          </a>
        </div>
      )}
    </header>
  );
}
