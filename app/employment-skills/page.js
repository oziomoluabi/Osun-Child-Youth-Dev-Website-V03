import Image from 'next/image';

const programs = [
    { name: "O-YES", status: "Replaced", description: "Flagship volunteer scheme, engaged thousands in public works." },
    { name: "Imole Youth Corps", status: "Active", description: "The new flagship focusing on community service and skills." },
    { name: "Osun UpSkill", status: "Active", description: "Trains 50,000 in digital literacy and business development." },
    { name: "N-Power (Federal)", status: "Active", description: "Federal program offering temporary placements for graduates." },
];

export default function EmploymentSkillsPage() {
    return (
        <>
            <section id="header">
                <h1 className="text-4xl font-bold text-brand-light-gray mb-2">Employment & Skills</h1>
                <p className="text-lg text-brand-gray">Analyzing the youth unemployment landscape and the programs designed to create economic opportunities.</p>
            </section>

            <section id="unemployment-landscape">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">3.1 Youth Unemployment Landscape</h2>
                <p className="text-brand-gray mb-6">Osun boasts a low overall unemployment rate of 11.7% (Q4 2020), the lowest in the Southwest. However, national youth unemployment remains high, and informal employment is prevalent.</p>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="hud-bg hud-border p-6 rounded-lg text-center">
                        <p className="font-mono text-brand-gray text-sm">Osun State Rate (Q4 2020)</p>
                        <p className="text-6xl font-bold text-brand-teal">11.7%</p>
                    </div>
                    <div className="hud-bg hud-border p-6 rounded-lg text-center">
                        <p className="font-mono text-brand-gray text-sm">National Youth Rate (15-34, Q4 2020)</p>
                        <p className="text-6xl font-bold text-brand-light-gray">42.5%</p>
                    </div>
                </div>
                 <div className="mt-6 relative h-64 rounded-lg overflow-hidden hud-border">
                    <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1770&auto=format&fit=crop" alt="Young entrepreneur working" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-white mb-2">Lived Stories: Young Entrepreneurs</h4>
                            <p className="text-white/80 max-w-md">Short video profiles showcase the resilience and innovation of young business owners in Osun&apos;s informal sector.</p>
                            <button className="mt-4 bg-brand-teal text-brand-dark font-bold py-2 px-4 rounded hover:bg-brand-cyan transition-colors">Watch Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills-programs">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">3.2 Skills Development Programs</h2>
                <p className="text-brand-gray mb-6">A multi-faceted approach combines state and federal initiatives to equip youth with relevant skills for the modern economy.</p>
                <div className="space-y-4">
                    {programs.map(program => (
                        <div key={program.name} className="hud-bg hud-border p-4 rounded-lg flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-brand-light-gray">{program.name}</h4>
                                <p className="text-sm text-brand-gray">{program.description}</p>
                            </div>
                            <span className={`text-xs font-mono px-2 py-1 rounded-full ${program.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                                {program.status}
                            </span>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-6">
                    <a href="#" className="font-semibold text-brand-teal hover:underline">Apply for active programs &rarr;</a>
                </div>
            </section>
        </>
    );
}
