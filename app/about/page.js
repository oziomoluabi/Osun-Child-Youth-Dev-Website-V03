import Image from 'next/image';
import { Target, BarChartHorizontal, Users, Handshake } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="section-container section-padding">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-brand-light-gray mb-4">About the Osun Insights Platform</h1>
                <p className="text-lg text-brand-gray max-w-3xl mx-auto">
                    We are dedicated to providing transparent, data-driven, and actionable insights into child and youth development across Osun State.
                </p>
            </div>

            <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
                <div className="relative w-full aspect-video rounded-lg hud-border overflow-hidden">
                    <Image 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1770&auto=format&fit=crop" 
                        alt="Team collaborating on data analysis" 
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <Target className="w-8 h-8 text-brand-teal mt-1 flex-shrink-0"/>
                        <div>
                            <h2 className="text-xl font-bold text-brand-light-gray">Our Mission</h2>
                            <p className="text-brand-gray">To aggregate, analyze, and visualize data on key development indicators, empowering policymakers, NGOs, researchers, and the public to make informed decisions that foster equitable growth for all children and youth in Osun.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <BarChartHorizontal className="w-8 h-8 text-brand-teal mt-1 flex-shrink-0"/>
                        <div>
                            <h2 className="text-xl font-bold text-brand-light-gray">Methodology</h2>
                            <p className="text-brand-gray">Our platform synthesizes data from national surveys (NBS, MICS), government reports, academic research, and partner organizations. We focus on trend analysis and comparative metrics to provide a holistic view.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <h2 className="text-3xl font-bold text-center text-brand-light-gray mb-12">Our Team & Funders</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="hud-bg hud-border p-6 rounded-lg text-center">
                        <Users className="w-12 h-12 mx-auto text-brand-cyan mb-4"/>
                        <h3 className="text-lg font-bold text-brand-light-gray">Core Team</h3>
                        <p className="text-sm text-brand-gray">A blend of data scientists, policy analysts, and software developers passionate about social impact.</p>
                    </div>
                    <div className="hud-bg hud-border p-6 rounded-lg text-center">
                        <Handshake className="w-12 h-12 mx-auto text-brand-cyan mb-4"/>
                        <h3 className="text-lg font-bold text-brand-light-gray">Partners & Funders</h3>
                        <p className="text-sm text-brand-gray">Supported by a coalition of international development partners and local philanthropic organizations.</p>
                    </div>
                    <div className="hud-bg hud-border p-6 rounded-lg text-center flex flex-col justify-center items-center gap-4">
                        <Image src="https://placehold.co/120x60/0D1A26/66F4E1.svg?text=UNICEF" width={120} height={60} alt="UNICEF Logo" className="opacity-70"/>
                        <Image src="https://placehold.co/120x60/0D1A26/66F4E1.svg?text=WORLD+BANK" width={120} height={60} alt="World Bank Logo" className="opacity-70"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
