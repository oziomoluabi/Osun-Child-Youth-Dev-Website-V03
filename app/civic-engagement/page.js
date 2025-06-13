import { UserCheck, Landmark, Vote, Mic, Handshake } from 'lucide-react';
import Image from 'next/image';

const programs = [
    { name: "Imole Youth Corps", description: "Volunteer portal for community service projects." },
    { name: "Osun Youth Ambassadors", description: "Peer education on social issues and leadership." },
    { name: "NYCN / NYP", description: "Official councils representing youth voices in policy." },
];

export default function CivicEngagementPage() {
    return (
        <>
            <section id="header">
                <h1 className="text-4xl font-bold text-brand-light-gray mb-2">Youth Participation & Civic Engagement</h1>
                <p className="text-lg text-brand-gray">Exploring how Osun&apos;s youth are shaping their communities and influencing policy through active participation.</p>
            </section>

            <section id="demographics-inclusion">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">5.1 Demographics & Political Inclusion</h2>
                <p className="text-brand-gray mb-6">With a significant &quot;youth bulge&quot;, young people are a powerful demographic. The &quot;Not Too Young To Run&quot; Act has paved the way for more youth in elective office, increasing their representation in governance.</p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="hud-bg hud-border p-6 rounded-lg">
                        <p className="font-bold text-4xl text-white">~55%</p>
                        <p className="text-sm text-brand-gray">Population under 30</p>
                    </div>
                     <div className="hud-bg hud-border p-6 rounded-lg">
                        <UserCheck className="w-10 h-10 mx-auto text-brand-cyan mb-2"/>
                        <p className="font-bold text-xl text-white">&quot;Not Too Young To Run&quot;</p>
                        <p className="text-sm text-brand-gray">Impact Dashboard</p>
                    </div>
                    <div className="hud-bg hud-border p-6 rounded-lg">
                        <Vote className="w-10 h-10 mx-auto text-brand-cyan mb-2"/>
                        <p className="font-bold text-2xl text-white">Increased</p>
                        <p className="text-sm text-brand-gray">Youth Voter Turnout</p>
                    </div>
                </div>
            </section>

            <section id="organizations-councils">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">5.2 Youth Organizations & Councils</h2>
                <p className="text-brand-gray mb-6">Formal structures like the National Youth Council of Nigeria (NYCN) and the Nigerian Youth Parliament (NYP) provide platforms for advocacy and engagement.</p>
                <div className="relative hud-bg hud-border p-6 rounded-lg">
                    <Landmark className="absolute top-4 right-4 w-16 h-16 text-brand-light-blue"/>
                    <h4 className="font-bold text-brand-light-gray mb-2">Interactive Org Chart</h4>
                    <p className="text-sm text-brand-gray max-w-lg">Visualizing the connections between the NYCN, state-level youth parliaments, and local community youth groups, showcasing the flow of advocacy and representation.</p>
                    <button className="mt-4 text-sm font-semibold bg-brand-light-blue text-brand-teal p-2 rounded">Explore Connections</button>
                </div>
            </section>

            <section id="engagement-programs">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">5.3 Civic Engagement Programs</h2>
                <p className="text-brand-gray mb-6">The state supports various volunteer programs that channel youth energy into productive community service and development projects.</p>
                <div className="relative h-80 w-full hud-border rounded-lg overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1664&auto=format&fit=crop" fill className="object-cover" alt="Youth volunteers in a meeting"/>
                    <div className="absolute inset-0 bg-black/70 p-8 flex flex-col justify-end">
                        <h4 className="font-bold text-2xl text-white mb-2">Volunteer Portal</h4>
                        <p className="text-white/80 mb-4 max-w-md">Sign up for Imole Corps, Osun Youth Ambassadors, and other community service projects. View photo and video walls of ongoing activities.</p>
                        <div className="flex gap-4">
                        {programs.map(p => (
                            <button key={p.name} className="bg-white/10 text-white backdrop-blur-sm border border-white/20 font-semibold py-2 px-4 rounded text-sm hover:bg-white/20 transition-colors">{p.name}</button>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="policy-influence">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">5.5 Policy Influence</h2>
                <p className="text-brand-gray mb-6">The Osun Youth Policy (2020) provides a roadmap for engagement. The government actively seeks youth input on draft policies through consultations and digital feedback forms.</p>
                 <div className="hud-bg hud-border p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <Mic className="w-16 h-16 text-brand-teal"/>
                        <div className="flex-grow">
                            <h4 className="font-bold text-lg text-brand-light-gray">&quot;Have Your Say&quot; on Draft Policies</h4>
                            <p className="text-sm text-brand-gray mt-1">An open feedback form allows young citizens to contribute directly to the development of new policies affecting them, ensuring their voices are heard in the legislative process.</p>
                        </div>
                        <button className="bg-brand-teal text-brand-dark font-bold py-2 px-6 rounded-lg whitespace-nowrap">Submit Feedback</button>
                    </div>
                </div>
            </section>
        </>
    );
}
