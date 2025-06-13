'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Stethoscope, Syringe, Heart, Radio } from 'lucide-react';
import Image from 'next/image';

const HealthStackedBarChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(102, 244, 225, 0.2)" />
                <XAxis type="number" stroke="#8892B0" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="#8892B0" fontSize={12} width={80}/>
                <Tooltip contentStyle={{ backgroundColor: '#0D1A26', border: '1px solid #1A344D' }}/>
                <Legend />
                <Bar dataKey="stunting" stackId="a" fill="#66F4E1" name="Stunting" />
                <Bar dataKey="wasting" stackId="a" fill="#7DFDFE" name="Wasting" />
                <Bar dataKey="underweight" stackId="a" fill="#8892B0" name="Underweight" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default function HealthPage() {
    const nutritionData = [
        { name: 'Osun', stunting: 16.5, wasting: 10.1, underweight: 15 },
        { name: 'National', stunting: 37, wasting: 7, underweight: 22 },
    ];
    
    return (
        <>
            <section id="header">
                <h1 className="text-4xl font-bold text-brand-light-gray mb-2">Health & Well-Being</h1>
                <p className="text-lg text-brand-gray">A comprehensive look at child and adolescent health, nutrition, and healthcare systems in Osun State.</p>
            </section>

            <section id="child-health">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">2.1 Child Health & Nutrition</h2>
                <p className="text-brand-gray mb-6">Osun shows better nutritional outcomes than the national average, but stunting and wasting remain key concerns. Malaria positivity rate stands at 36.8% among young children.</p>
                <div className="hud-bg hud-border p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-brand-light-gray mb-2">Malnutrition Rates: Osun vs. National (%)</h3>
                    <div style={{width: '100%', height: '300px'}}>
                       <HealthStackedBarChart data={nutritionData} />
                    </div>
                </div>
            </section>

            <section id="healthcare-access">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">2.3 Healthcare Access & Facilities</h2>
                <p className="text-brand-gray mb-6">With 762 Primary Health Care (PHC) facilities, access is widespread. However, disparities in staffing and equipment persist, particularly in rural LGAs.</p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="hud-bg hud-border p-6 rounded-lg">
                        <Stethoscope className="w-10 h-10 mx-auto text-brand-cyan mb-3"/>
                        <p className="font-bold text-2xl text-white">762</p>
                        <p className="text-sm text-brand-gray">Primary Health Centers</p>
                    </div>
                    <div className="hud-bg hud-border p-6 rounded-lg">
                        <Syringe className="w-10 h-10 mx-auto text-brand-cyan mb-3"/>
                        <p className="font-bold text-2xl text-white">92%</p>
                        <p className="text-sm text-brand-gray">Basic Vaccination Coverage</p>
                    </div>
                    <div className="hud-bg hud-border p-6 rounded-lg">
                        <Heart className="w-10 h-10 mx-auto text-brand-cyan mb-3"/>
                        <p className="font-bold text-xl text-white">OHIS</p>
                        <p className="text-sm text-brand-gray">State Health Insurance Scheme</p>
                    </div>
                </div>
                <div className="mt-6 hud-bg hud-border p-6 rounded-lg">
                    <h4 className="font-bold text-brand-light-gray mb-2">OHIS Enrollment Widget</h4>
                    <p className="text-sm text-brand-gray mb-4">The Osun Health Insurance Scheme provides affordable healthcare. Sign up online to protect your family.</p>
                    <button className="bg-brand-teal text-brand-dark font-bold py-2 px-4 rounded hover:bg-brand-cyan transition-colors">
                        Enroll in OHIS Now
                    </button>
                </div>
            </section>
            
            <section id="interventions">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">2.4 Programs & Interventions</h2>
                <p className="text-brand-gray mb-6">Collaborations with UNICEF, USAID, and others bolster public health initiatives, from immunization drives to adolescent-friendly health services.</p>
                 <div className="relative h-64 rounded-lg overflow-hidden hud-border">
                    <Image src="https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=1770&auto=format&fit=crop" alt="Healthcare worker with a laptop" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                        <Radio className="w-12 h-12 text-brand-teal mb-4"/>
                        <h4 className="text-xl font-bold text-white">Community Radio &quot;Youth Voice&quot;</h4>
                        <p className="text-white/80 max-w-lg">Embedded podcasts and resource hubs provide crucial SRH and mental health information directly to adolescents.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
