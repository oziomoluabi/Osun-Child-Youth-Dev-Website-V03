import Link from 'next/link';
import { ArrowRight, BookOpen, Briefcase, HeartPulse, Shield, Users, TrendingDown } from 'lucide-react';
import Card from '@/components/ui/Card';
import { keyDimensions, latestNews } from '@/lib/data';
import InteractiveMap from '@/components/ui/InteractiveMap';
import StatWidget from '@/components/ui/StatWidget';

export default function HomePage() {
  const dashboardStats = [
    { id: 'oos', title: 'Out-of-School Children', value: '100,000', change: '▼ Feb 2025', sparklineData: [{value:30}, {value:25}, {value:28}, {value:20}, {value:22}, {value:15}] },
    { id: 'unemp', title: 'Youth Unemployment Rate', value: '11.7', unit: '%', change: 'Lowest in SW', sparklineData: [{value:18}, {value:19}, {value:15}, {value:16}, {value:12}, {value:11.7}] },
    { id: 'literacy', title: 'Adolescent Literacy', value: '89', unit: '%', change: 'Above National Avg', sparklineData: [{value:85}, {value:86}, {value:85}, {value:88}, {value:89}, {value:89}] },
    { id: 'phc', title: 'PHC Coverage', value: '95', unit: '%', change: 'High Accessibility', sparklineData: [{value:88}, {value:90}, {value:92}, {value:91}, {value:94}, {value:95}] },
  ];

  const dashboardIcons = {
    oos: <TrendingDown className="w-5 h-5 text-brand-gray" />,
    unemp: <Briefcase className="w-5 h-5 text-brand-gray" />,
    literacy: <BookOpen className="w-5 h-5 text-brand-gray" />,
    phc: <HeartPulse className="w-5 h-5 text-brand-gray" />,
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="section-container section-padding pt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-light-gray mb-4 text-balance">
              Nurturing Tomorrow: Data-Driven Development
            </h1>
            <p className="font-mono text-brand-cyan mb-6">
              Osun Child & Youth Development Insights
            </p>
            <p className="text-lg text-brand-gray max-w-xl mx-auto lg:mx-0 mb-8 text-balance">
              Real-time analysis and in-depth reporting on the key dimensions shaping the future for children and youth across Osun State.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#dashboard" className="bg-brand-teal text-brand-dark font-bold py-3 px-6 rounded hover:bg-brand-cyan transition-colors flex items-center justify-center">
                Explore the Data <ArrowRight className="ml-2 w-5 h-5"/>
              </Link>
              <Link href="/data-downloads" className="bg-transparent border border-brand-teal text-brand-teal font-bold py-3 px-6 rounded hover:bg-brand-teal hover:text-brand-dark transition-colors flex items-center justify-center">
                Download Full Report
              </Link>
            </div>
          </div>
          <div className="relative">
            <InteractiveMap />
          </div>
        </div>
      </section>

      {/* Data Dashboard Teaser */}
      <section id="dashboard" className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardStats.map((stat) => (
            <StatWidget key={stat.id} {...stat}>
              {dashboardIcons[stat.id]}
            </StatWidget>
          ))}
        </div>
      </section>
      
      {/* Key Dimensions Section */}
      <section className="section-container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light-gray">Overview of Key Dimensions</h2>
            <p className="text-lg text-brand-gray mt-2 max-w-2xl mx-auto">Click a card to dive deeper into each critical area of development.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {keyDimensions.map((dim) => (
            <Card
              key={dim.title}
              icon={dim.icon}
              title={dim.title}
              stat={dim.stat}
              description={dim.description}
              href={dim.href}
            />
          ))}
        </div>
      </section>

      {/* Latest News & Highlights */}
      <section className="section-container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light-gray">Latest News & Highlights</h2>
            <p className="text-lg text-brand-gray mt-2">Success stories, program launches, and policy updates.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((newsItem, index) => (
                <div key={index} className="hud-bg hud-border p-6 rounded-lg flex flex-col">
                    <p className="font-mono text-sm text-brand-cyan mb-2">{newsItem.tag}</p>
                    <h3 className="text-xl font-bold text-brand-light-gray mb-3 flex-grow">{newsItem.title}</h3>
                    <p className="text-brand-gray text-sm mb-4">{newsItem.summary}</p>
                    <Link href={newsItem.href} className="text-brand-teal hover:underline text-sm font-semibold mt-auto flex items-center">
                        Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <Link href="/news-events" className="bg-transparent border border-brand-teal text-brand-teal font-bold py-3 px-6 rounded hover:bg-brand-teal hover:text-brand-dark transition-colors">
                See All News & Events
            </Link>
        </div>
      </section>
    </div>
  );
}
