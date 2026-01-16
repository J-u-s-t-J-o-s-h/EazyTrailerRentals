'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { PHONE_TEL, PHONE_SMS, PHONE_DISPLAY } from '@/lib/constants';

export default function HowItWorks() {
    return (
        <section className="bg-transparent py-16 md:py-24 border-y border-neutral-800 relative overflow-hidden">
            {/* Global Honeycomb Background */}
            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,0,0,0.08),transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-4">
                            Getting Your Trailer is <span className="text-red-500">Simple</span>
                        </h2>
                    </motion.div>

                    {/* Main Content Flow */}
                    <div className="space-y-8 md:space-y-12">
                        {/* Step 1 - Browse */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row items-start gap-6 md:gap-8"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500/20 border-2 border-red-500/50 rounded-lg flex items-center justify-center">
                                    <span className="text-red-500 font-display font-bold text-2xl md:text-3xl">1</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-display font-bold text-xl md:text-2xl uppercase mb-2">
                                    Browse Our Trailers
                                </h3>
                                <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
                                    Check out our <a href="#inventory" className="text-red-500 hover:text-red-400 underline">trailer inventory above</a>. We've got car haulers with winches, utility trailers for general hauling, and everything in between. All our trailers are well-maintained and ready to work.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 2 - Contact */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col md:flex-row items-start gap-6 md:gap-8"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500/20 border-2 border-red-500/50 rounded-lg flex items-center justify-center">
                                    <span className="text-red-500 font-display font-bold text-2xl md:text-3xl">2</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-display font-bold text-xl md:text-2xl uppercase mb-2">
                                    Give Us a Call or Text
                                </h3>
                                <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
                                    Shoot us a text or give us a call at <a href={PHONE_TEL} className="text-red-500 hover:text-red-400 font-bold">{PHONE_DISPLAY}</a>. We'll check availability, answer any questions, and get you a quote right away. No complicated forms or waiting around.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                    <a
                                        href={PHONE_TEL}
                                        className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-400 text-white font-display font-bold px-6 py-3 rounded-lg transition-all"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call {PHONE_DISPLAY}
                                    </a>
                                    <a
                                        href={PHONE_SMS}
                                        className="inline-flex items-center justify-center gap-2 bg-black/60 border-2 border-red-500 hover:border-red-400 text-white font-display font-bold px-6 py-3 rounded-lg transition-all"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        Text Us
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 3 - Pickup */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col md:flex-row items-start gap-6 md:gap-8"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500/20 border-2 border-red-500/50 rounded-lg flex items-center justify-center">
                                    <span className="text-red-500 font-display font-bold text-2xl md:text-3xl">3</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-display font-bold text-xl md:text-2xl uppercase mb-2">
                                    Pick It Up & Get to Work
                                </h3>
                                <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
                                    We'll set up a pickup time that works for you. Bring your driver's license, proof of insurance, and a vehicle with proper towing capacity (see <a href="#requirements" className="text-red-500 hover:text-red-400 underline">requirements above</a>). We'll have you sign a quick rental contract, then you're all set. Hook it up and you're good to go. When you're done, just bring it back. That's it, no hassle, no runaround.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
