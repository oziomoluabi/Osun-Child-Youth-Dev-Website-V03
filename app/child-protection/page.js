import { Gavel, AlertTriangle, LifeBuoy, Users } from 'lucide-react';

export default function ChildProtectionPage() {
    return (
        <>
            <section id="header">
                <h1 className="text-4xl font-bold text-brand-light-gray mb-2">Child Protection & Welfare</h1>
                <p className="text-lg text-brand-gray">Ensuring the safety and rights of every child through legal frameworks, institutional support, and community action.</p>
            </section>

            <section id="legal-framework">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">4.1 Legal Framework & Institutions</h2>
                <p className="text-brand-gray mb-6">Osun is one of 36 states to have domesticated the Child's Right Act (CRA), establishing a strong legal basis for child protection, supported by the Ministry of Women, Children, and Social Affairs.</p>
                <div className="hud-bg hud-border p-6 rounded-lg">
                    <div className="flex items-center gap-4">
                        <Gavel className="w-10 h-10 text-brand-cyan"/>
                        <div>
                            <h4 className="font-bold text-lg text-brand-light-gray">Child's Right Act (CRA)</h4>
                            <p className="text-sm text-brand-gray">Provides a comprehensive framework covering rights to survival, development, protection, and participation.</p>
                        </div>
                    </div>
                     <div className="font-mono text-sm mt-6 space-y-2 text-brand-gray">
                        <p className="flex items-center">&rarr; Domestication in Osun State</p>
                        <p className="flex items-center ml-4">&rarr; Establishment of Family Courts</p>
                        <p className="flex items-center ml-8">&rarr; Mandate for Rehabilitation Services</p>
                        <p className="flex items-center ml-4">&rarr; Collaboration with Child Protection Network (CPN)</p>
                    </div>
                </div>
            </section>

            <section id="prevalence">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">4.2 Child Labor, Abuse & Trafficking</h2>
                <p className="text-brand-gray mb-6">While lower than the national average of 39.2%, child labor persists in Osun, driven by poverty. The state actively combats this through enforcement and collaboration.</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="hud-bg hud-border p-6 rounded-lg">
                        <h4 className="font-bold text-brand-light-gray mb-2 flex items-center gap-2"><AlertTriangle className="text-yellow-400"/>Prevalence Hotspots</h4>
                        <p className="text-sm text-brand-gray">Street hawking is prevalent in urban centers like Osogbo, Ile-Ife, and Ilesa. Government agencies conduct regular raids to rescue children.</p>
                    </div>
                    <div className="hud-bg hud-border p-6 rounded-lg">
                        <h4 className="font-bold text-brand-light-gray mb-2 flex items-center gap-2"><LifeBuoy className="text-blue-400"/>Support Systems</h4>
                        <p className="text-sm text-brand-gray">Hotline links and live chat functionalities are being integrated into state websites to provide anonymous tipping and alert mechanisms.</p>
                        <button className="mt-3 text-sm font-semibold bg-brand-light-blue text-brand-teal p-2 rounded w-full">Report a Case</button>
                    </div>
                </div>
            </section>

            <section id="collaboration">
                <h2 className="text-2xl font-bold text-brand-teal mb-4 font-mono">4.5 Institutional Collaboration</h2>
                <p className="text-brand-gray mb-6">A multi-stakeholder approach involving government agencies, NGOs (UNICEF, Save the Children), and community groups is crucial for effective child protection.</p>
                <div className="hud-bg hud-border p-6 rounded-lg">
                    <Users className="w-12 h-12 text-brand-teal float-right ml-4"/>
                    <h4 className="font-bold text-brand-light-gray mb-2">Partnership Matrix</h4>
                    <ul className="list-disc list-inside text-sm text-brand-gray space-y-1">
                        <li><span className="font-semibold text-brand-light-gray">Government Agencies:</span> Ministry of Women Affairs, Justice, NSCDC.</li>
                        <li><span className="font-semibold text-brand-light-gray">NGOs & INGOs:</span> Provide funding, technical support, and direct intervention.</li>
                        <li><span className="font-semibold text-brand-light-gray">Community/Faith Groups:</span> Drive grassroots advocacy and behavioral change.</li>
                    </ul>
                </div>
            </section>
        </>
    );
}
