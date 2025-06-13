'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Target, Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 hud-bg hud-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-brand-teal hover:text-brand-cyan transition-colors">
            <Target className="w-8 h-8 animate-pulse-glow" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-brand-light-gray">OSUN INSIGHTS</span>
              <span className="text-xs font-mono leading-tight">Child & Youth Development</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-brand-gray hover:text-brand-teal transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-gray hover:text-brand-teal"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden hud-bg absolute top-20 left-0 w-full hud-border border-t-0">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-brand-gray hover:text-brand-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
