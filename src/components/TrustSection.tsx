import { MapPin, DollarSign, Clock, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

const benefits = [
    {
        icon: MapPin,
        title: "Locally Owned",
        desc: "Proudly serving our neighbors in the CSRA."
    },
    {
        icon: DollarSign,
        title: "Straightforward Pricing",
        desc: "No hidden fees or surprises. Just honest rates."
    },
    {
        icon: Clock,
        title: "Flexible Schedule",
        desc: "Easy pickup & drop-off times that work for you."
    },
    {
        icon: ShieldCheck,
        title: "Reliable Equipment",
        desc: "Well-maintained trailers ready to get the job done."
    },
];

export default function TrustSection() {
    return (
        <section className="bg-neutral-900 py-16 md:py-20 border-b border-neutral-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="bg-neutral-800 p-4 rounded-full mb-4 border border-gold-500/20 text-gold-500 hover:scale-110 transition-transform duration-300">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="font-display text-xl font-bold text-white mb-2 uppercase tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="font-body text-neutral-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
