import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';

// Client component for charts to avoid hydration errors
const ClientChart = ({ data, type }) => {
  'use client';
  if (type === 'line') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(102, 244, 225, 0.2)" />
          <XAxis dataKey="name" stroke="#8892B0" fontSize={12} />
          <YAxis stroke="#8892B0" fontSize={12} />
          <Tooltip contentStyle={{ backgroundColor: '#0D1A26', border: '1px solid #1A344D' }} />
          <Legend />
          <Line type="monotone" dataKey="Male" stroke="#7DFDFE" name="Male Rate" />
          <Line type="monotone" dataKey="Female" stroke="#66F4E1" name="Female Rate" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  return null;
};

export default function EducationPage() {
    const outOfSchoolData = [
        { name: '2020', Male: 16.2, Female: 12.8 },
        { name: '2021', Male: 14.88, Female: 11.5 },
        { name: '2022', Male: 13.5, Female: 11.0 },
        { name: '2023', Male: 12.0, Female: 10.2 },
        { name: '2024', Male: 11.0, Female: 9.5 },
    ];

    const performanceData = [
       { name: '2018', WAEC: 45, NECO: 42 },
       { name: '2020', WAEC: 52, NECO: 49 },
       { name: '2022', WAEC: 60, NECO: 55 },
       { name: '2024', WAEC: 72, NECO: 71 },
    ];
    
    return (
        <>
            <section id="header">
                <h1 className="text-4xl font-bold text-brand-light-gray mb-2">Education</h1>
                <p className="text-lg text-brand-gray">Examining the state of learning from primary schools to tertiary institutions.</p>
            </section>

            <section id="access-enrollment">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">1.1 Access & Enrollment</h2>
                <p className="text-brand-gray mb-6">Despite significant progress, Osun still faces challenges with out-of-school children, though rates have been declining due to targeted interventions like O-MEALS.</p>
                <div className="hud-bg hud-border p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-brand-light-gray mb-2">Out-of-School Rate Over Time (by Gender)</h3>
                    <div style={{width: '100%', height: '300px'}}>
                        <ClientChart data={outOfSchoolData} type="line" />
                    </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="hud-bg hud-border p-6 rounded-lg">
                        <h4 className="font-bold text-brand-light-gray mb-2">Case Study Spotlight</h4>
                        <p className="text-sm text-brand-gray">The O-MEALS program led to a 25% enrollment increase in its initial phase, significantly cutting dropout rates, especially in rural areas like Ife East.</p>
                    </div>
                    <div className="hud-bg hud-border p-6 rounded-lg flex flex-col justify-center">
                        <h4 className="font-bold text-brand-light-gray mb-2">Data Resources</h4>
                        <button className="flex items-center justify-center gap-2 text-sm font-semibold bg-brand-light-blue text-brand-teal p-2 rounded hover:bg-brand-teal hover:text-brand-dark transition-colors">
                            <Download size={16}/> Download Enrollment Data (CSV)
                        </button>
                    </div>
                </div>
            </section>
            
            <section id="quality-literacy">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">1.2 Quality & Literacy</h2>
                <p className="text-brand-gray mb-6">Challenges in quality include a projected shortfall of 11,000 teachers and overcrowded classrooms, often exceeding the 40-student national recommendation.</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="hud-bg hud-border p-6 rounded-lg">
                        <h4 className="font-bold text-brand-light-gray mb-2">Pupil-Teacher Ratios</h4>
                        <p className="text-brand-gray text-sm">Some schools report ratios as high as 69:5, posing significant challenges to effective teaching and learning.</p>
                        <div className="w-full bg-brand-light-blue rounded-full h-2.5 mt-4">
                          <div className="bg-red-500 h-2.5 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <p className="text-xs font-mono text-right mt-1 text-red-400">High Disparity</p>
                    </div>
                    <div className="relative h-48 md:h-auto rounded-lg overflow-hidden hud-border">
                        <Image src="https://images.unsplash.com/photo-1543196614-e046c7d3d82e?q=80&w=1770&auto=format&fit=crop" alt="Students in a classroom" layout="fill" objectFit="cover" />
                        <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                            <p className="text-white font-bold text-sm">Photo: Modern learning environments are a key focus for improvement.</p>
                        </div>
                    </div>
                </div>
            </section>

             <section id="academic-performance">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">1.3 Academic Performance Trends</h2>
                <p className="text-brand-gray mb-6">Osun has shown remarkable improvement in national exams, climbing from 33rd to 7th in NECO SSCE rankings by 2024.</p>
                <div className="hud-bg hud-border p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-brand-light-gray mb-2">WAEC vs. NECO Pass Rates (5 credits incl. Math/Eng)</h3>
                    {/* Placeholder for dual-axis chart. Using a BarChart for representation. */}
                    <div style={{width: '100%', height: '300px'}}>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(102, 244, 225, 0.2)" />
                                <XAxis dataKey="name" stroke="#8892B0" fontSize={12} />
                                <YAxis stroke="#8892B0" fontSize={12} />
                                <Tooltip contentStyle={{ backgroundColor: '#0D1A26', border: '1px solid #1A344D' }} />
                                <Legend />
                                <Bar dataKey="WAEC" fill="#66F4E1" name="WAEC Pass %" />
                                <Bar dataKey="NECO" fill="#7DFDFE" name="NECO Pass %" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>

        </>
    );
}
