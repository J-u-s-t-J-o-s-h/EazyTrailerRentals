'use client';

import { Search, Phone, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: '1',
        title: 'Choose Trailer',
        description: 'Browse our inventory and find the perfect trailer for your job',
        icon: Search,
    },
    {
        number: '2',
        title: 'Call or Text',
        description: 'Check availability and get an instant quote',
        icon: Phone,
    },
    {
        number: '3',
        title: 'Pickup',
        description: 'Schedule your pickup time and hit the road',
        icon: CalendarCheck,
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-transparent py-16 md:py-24 border-y border-neutral-800 relative overflow-hidden">
            {/* Global Honeycomb Background */}
            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,0,0,0.08),transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-3">
                        How It <span className="text-red-500">Works</span>
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Three simple steps to get your trailer rental
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className="group relative"
                                >
                                    {/* Card */}
                                    <div className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1">
                                        {/* Number Badge */}
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <div className="bg-red-500 text-white font-display font-bold text-2xl md:text-3xl w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-4 border-black shadow-lg">
                                                {step.number}
                                            </div>
                                        </div>

                                        {/* Icon */}
                                        <div className="flex justify-center mb-6 mt-4">
                                            <div className="bg-red-500/20 border-2 border-red-500/30 rounded-lg p-4 group-hover:bg-red-500/30 group-hover:border-red-500/50 transition-all duration-300">
                                                <Icon className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-white font-display font-bold text-xl md:text-2xl uppercase tracking-wide mb-3 text-center">
                                            {step.title}
                                        </h3>
                                        <p className="text-neutral-300 text-base md:text-lg text-center leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Connector Line (Desktop only) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-red-500/50 to-transparent transform -translate-y-1/2 z-0"></div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
