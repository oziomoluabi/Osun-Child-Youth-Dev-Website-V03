import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const allNews = [
    { tag: 'Policy Update', title: 'Osun State Jumps to 7th in National NECO Rankings', date: 'March 2024', summary: 'A remarkable improvement from 33rd position is attributed to recent educational reforms...', href: '#neco-ranking-2024' },
    { tag: 'Program Launch', title: 'Osun UpSkill Program Targets 50,000 Youths for Digital Literacy', date: 'February 2024', summary: 'A new initiative aims to bridge the digital divide by training young entrepreneurs in ICT...', href: '#upskill-launch' },
    { tag: 'Success Story', title: 'O-MEALS Credited with Reducing Out-of-School Figures to 100,000', date: 'February 2025', summary: 'The homegrown school feeding program continues to be a major driver for school enrollment...', href: '#o-meals-impact' },
    { tag: 'Health', title: 'State Launches Renewed Campaign Against Malaria', date: 'January 2024', summary: 'In collaboration with CRS, the Ministry of Health is distributing nets and promoting preventive measures...', href: '#malaria-campaign' },
    { tag: 'Civic Engagement', title: 'Imole Youth Corps Application Portal Opens', date: 'December 2023', summary: 'Thousands of youths are expected to apply for the new civic engagement program...', href: '#imole-corps' },
    { tag: 'Child Protection', title: 'New Family Courts Inaugurated in Ilesa and Ede', date: 'November 2023', summary: 'To expedite justice for children and families, two new family courts have been commissioned...', href: '#family-courts' },
];


export default function NewsAndEventsPage() {
    return (
        <div className="section-container section-padding">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-brand-light-gray mb-4">News & Events</h1>
                <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                    Stay updated with the latest program launches, policy changes, success stories, and upcoming events.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <h2 className="text-2xl font-bold text-brand-teal font-mono">Recent Articles</h2>
                    {allNews.map((newsItem, index) => (
                        <div key={index} id={newsItem.href.substring(1)} className="hud-bg hud-border p-6 rounded-lg transition-all hover:shadow-lg hover:shadow-brand-teal/10">
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm mb-2">
                                <span className="font-mono text-brand-cyan flex items-center gap-1.5"><Tag size={14}/>{newsItem.tag}</span>
                                <span className="text-brand-gray flex items-center gap-1.5"><Calendar size={14}/>{newsItem.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-brand-light-gray mb-2">{newsItem.title}</h3>
                            <p className="text-brand-gray text-sm mb-4">{newsItem.summary}</p>
                            <Link href={newsItem.href} className="text-brand-teal hover:underline text-sm font-semibold flex items-center">
                                Read More <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
                
                <aside className="lg:sticky top-24 self-start">
                    <div className="hud-bg hud-border rounded-lg p-6">
                        <h3 className="font-mono text-lg text-brand-teal mb-4">Event Calendar</h3>
                         <div className="space-y-4">
                            <div className="border-l-2 border-brand-cyan pl-3">
                                <p className="font-bold text-brand-light-gray text-sm">Youth Economic Summit</p>
                                <p className="text-xs text-brand-gray">June 15, 2024 | Aurora Event Center, Osogbo</p>
                            </div>
                             <div className="border-l-2 border-brand-teal/50 pl-3">
                                <p className="font-bold text-brand-light-gray text-sm">Quarterly Health Partners Meeting</p>
                                <p className="text-xs text-brand-gray">July 5, 2024 | Virtual</p>
                            </div>
                             <div className="border-l-2 border-brand-teal/50 pl-3">
                                <p className="font-bold text-brand-light-gray text-sm">Education Stakeholders Forum</p>
                                <p className="text-xs text-brand-gray">July 22, 2024 | Ministry of Education Hall</p>
                            </div>
                        </div>
                         <button className="mt-6 w-full bg-brand-light-blue text-brand-teal text-sm font-semibold py-2 rounded hover:bg-brand-teal hover:text-brand-dark transition-colors">
                            View All Events
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
