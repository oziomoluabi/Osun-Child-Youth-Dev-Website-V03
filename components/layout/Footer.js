import React from 'react';
import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import { footerLinks } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="relative z-40 hud-bg hud-border border-b-0 mt-24">
      <div className="section-container section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="font-mono text-lg text-brand-teal mb-4">Osun Child & Youth Development Insights</h3>
            <p className="text-sm text-brand-gray mb-6 max-w-sm">
              A data-driven platform providing analysis on key development indicators for a brighter future in Osun State.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-brand-gray hover:text-brand-teal transition-colors"><Twitter /></a>
              <a href="#" aria-label="Facebook" className="text-brand-gray hover:text-brand-teal transition-colors"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="text-brand-gray hover:text-brand-teal transition-colors"><Instagram /></a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-brand-light-gray mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map(link => (
                <li key={link.name}><Link href={link.href} className="text-sm text-brand-gray hover:text-brand-teal transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-brand-light-gray mb-4">Dimensions</h4>
            <ul className="space-y-2">
              {footerLinks.dimensions.map(link => (
                <li key={link.name}><Link href={link.href} className="text-sm text-brand-gray hover:text-brand-teal transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-sm uppercase tracking-wider text-brand-light-gray mb-4">Newsletter</h4>
            <p className="text-sm text-brand-gray mb-4">Get monthly updates and reports.</p>
            <form className="flex">
              <input type="email" placeholder="your.email@osun.dev" className="bg-brand-light-blue w-full text-sm text-brand-light-gray px-3 py-2 border border-brand-teal/20 focus:outline-none focus:ring-1 focus:ring-brand-teal" />
              <button type="submit" className="bg-brand-teal text-brand-dark font-bold px-3 hover:bg-brand-cyan transition-colors" aria-label="Subscribe">&gt;</button>
            </form>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-brand-teal/20 text-center text-sm text-brand-gray">
          <p>&copy; {new Date().getFullYear()} Osun Child & Youth Development Insights. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            {footerLinks.legal.map(link => (
                <Link key={link.name} href={link.href} className="hover:text-brand-teal transition-colors">{link.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
