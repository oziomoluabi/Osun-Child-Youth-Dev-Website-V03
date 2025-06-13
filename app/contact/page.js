import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="section-container section-padding">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-brand-light-gray mb-4">Get In Touch</h1>
                <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                    We welcome collaboration, feedback, and inquiries. Reach out to us through the appropriate channels below.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <Mail className="w-8 h-8 text-brand-teal mt-1"/>
                        <div>
                            <h3 className="font-bold text-lg text-brand-light-gray">General Inquiries</h3>
                            <p className="text-brand-gray">For general questions about the platform or data.</p>
                            <a href="mailto:info@osuninsights.dev" className="text-brand-cyan hover:underline">info@osuninsights.dev</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="w-8 h-8 text-brand-teal mt-1"/>
                        <div>
                            <h3 className="font-bold text-lg text-brand-light-gray">Partnerships & Media</h3>
                            <p className="text-brand-gray">For collaboration or media-related requests.</p>
                            <a href="tel:+234000000000" className="text-brand-cyan hover:underline">+234 (0) 000 000 000</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="w-8 h-8 text-brand-teal mt-1"/>
                        <div>
                            <h3 className="font-bold text-lg text-brand-light-gray">Office Address</h3>
                            <p className="text-brand-gray">Osun State Secretariat, Abere, Osogbo, Nigeria.</p>
                        </div>
                    </div>
                </div>

                <div className="hud-bg hud-border p-8 rounded-lg">
                    <h2 className="text-2xl font-bold text-brand-light-gray mb-6">Send Us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-mono text-brand-gray mb-1">Full Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-brand-light-blue p-2 text-brand-light-gray hud-border rounded focus:outline-none focus:ring-1 focus:ring-brand-teal"/>
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-mono text-brand-gray mb-1">Email Address</label>
                            <input type="email" id="email" name="email" className="w-full bg-brand-light-blue p-2 text-brand-light-gray hud-border rounded focus:outline-none focus:ring-1 focus:ring-brand-teal"/>
                        </div>
                         <div>
                            <label htmlFor="department" className="block text-sm font-mono text-brand-gray mb-1">Department</label>
                            <select id="department" name="department" className="w-full bg-brand-light-blue p-2 text-brand-light-gray hud-border rounded focus:outline-none focus:ring-1 focus:ring-brand-teal">
                                <option>General Inquiry</option>
                                <option>Data & Research</option>
                                <option>Partnerships</option>
                                <option>Technical Support</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-mono text-brand-gray mb-1">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full bg-brand-light-blue p-2 text-brand-light-gray hud-border rounded focus:outline-none focus:ring-1 focus:ring-brand-teal"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-teal text-brand-dark font-bold py-3 rounded hover:bg-brand-cyan transition-colors flex items-center justify-center gap-2">
                           Send Message <Send className="w-5 h-5"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
