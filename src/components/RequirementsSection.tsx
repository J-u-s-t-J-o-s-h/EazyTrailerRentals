'use client';

import { CheckCircle, FileText, CreditCard, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const requirements = [
    {
        icon: FileText,
        title: "Valid Driver's License",
        description: "A current, valid driver's license is required for all rentals."
    },
    {
        icon: FileText,
        title: "Proof of Insurance",
        description: "You'll need to provide proof of valid auto insurance coverage."
    },
    {
        icon: FileText,
        title: "Sign Rental Contract",
        description: "We'll have you sign a rental agreement at pickup time."
    },
    {
        icon: Car,
        title: "Towing Vehicle",
        description: "A vehicle in good working condition with proper towing capacity and hitch."
    }
];

export default function RequirementsSection() {
    return (
        <section id="requirements" className="bg-transparent py-20 md:py-28 border-y border-neutral-800 relative overflow-hidden">
            {/* Global Honeycomb Background */}
            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,0,0,0.06),transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-4">
                            What You Need to Rent Our <span className="text-red-500">Trailers</span>
                        </h2>
                        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Simple requirements to get you on the road quickly
                        </p>
                    </motion.div>

                    {/* Requirements List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {requirements.map((req, index) => {
                            const Icon = req.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-black/60 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 md:p-8 hover:border-red-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-red-500/20 border-2 border-red-500/50 rounded-lg flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-red-500" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-white font-display font-bold text-xl md:text-2xl uppercase tracking-wide mb-2">
                                                {req.title}
                                            </h3>
                                            <p className="text-neutral-300 text-base leading-relaxed">
                                                {req.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 md:mt-12 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 text-center"
                    >
                        <p className="text-neutral-300 text-base md:text-lg">
                            <span className="text-yellow-500 font-bold">Note:</span> We'll verify your hitch setup and towing capacity at pickup to ensure safe towing.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

