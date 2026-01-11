'use client';

import { MapPin, DollarSign, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: MapPin,
        title: "Locally Owned",
        desc: "Proudly serving our neighbors in the CSRA with hometown service you can trust.",
        color: 'red',
    },
    {
        icon: DollarSign,
        title: "Straightforward Pricing",
        desc: "No hidden fees or surprises. Just honest rates that make sense.",
        color: 'yellow',
    },
    {
        icon: Clock,
        title: "Flexible Schedule",
        desc: "Easy pickup & drop-off times that work around your schedule.",
        color: 'red',
    },
    {
        icon: ShieldCheck,
        title: "Reliable Equipment",
        desc: "Well-maintained trailers ready to get the job done right.",
        color: 'yellow',
    },
];

export default function TrustSection() {
    return (
        <section className="bg-transparent py-20 md:py-28 border-b border-neutral-800 relative overflow-hidden">
            {/* Global Honeycomb Background */}
            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,0,0,0.06),transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-3">
                        Why Choose <span className="text-yellow-500">Us</span>
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Trusted trailer rentals built on reliability and service
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {benefits.map((item, index) => {
                        const Icon = item.icon;
                        const isRed = item.color === 'red';
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-black/60 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 md:p-8 h-full hover:border-yellow-500/50 hover:bg-black/80 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 ${isRed
                                        ? 'bg-red-500/20 border-2 border-red-500/30 group-hover:bg-red-500/30 group-hover:border-red-500/50'
                                        : 'bg-yellow-500/20 border-2 border-yellow-500/30 group-hover:bg-yellow-500/30 group-hover:border-yellow-500/50'
                                        } transition-all duration-300`}>
                                        <Icon className={`w-8 h-8 ${isRed ? 'text-red-500' : 'text-yellow-500'}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wide">
                                        {item.title}
                                    </h3>
                                    <p className="font-body text-neutral-300 text-base leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
