import Link from 'next/link';
import { BookOpen, HeartPulse, Briefcase, Shield, Users } from 'lucide-react';

const dimensionLinks = [
    { name: 'Education', href: '/education', icon: BookOpen },
    { name: 'Health & Well-Being', href: '/health', icon: HeartPulse },
    { name: 'Employment & Skills', href: '/employment-skills', icon: Briefcase },
    { name: 'Child Protection', href: '/child-protection', icon: Shield },
    { name: 'Civic Engagement', href: '/civic-engagement', icon: Users },
];

export default function DimensionLayout({ children }) {
  return (
    <div className="section-container section-padding">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <aside className="lg:col-span-3 lg:sticky top-24 self-start mb-12 lg:mb-0">
          <div className="hud-bg hud-border rounded-lg p-4">
            <h3 className="font-mono text-brand-teal p-2 mb-2">Analysis Dimensions</h3>
            <nav className="flex flex-col space-y-1">
              {dimensionLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 p-2 rounded-md text-brand-gray hover:bg-brand-light-blue hover:text-brand-light-gray transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        
        <div className="lg:col-span-9">
          <div className="space-y-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
