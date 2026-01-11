'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { PHONE_TEL, PHONE_SMS, PHONE_DISPLAY } from '@/lib/constants';

export default function CallToAction() {
    return (
        <section className="bg-transparent border-t border-neutral-800 py-20 md:py-28 text-center relative overflow-hidden">
            {/* Global Honeycomb Background */}
            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,0,0,0.1),transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-tight">
                        Need a Trailer <span className="text-yellow-500">Today?</span>
                    </h2>
                    <p className="font-body text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                        Proudly serving the CSRA with dependable trailer rentals
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                        <a
                            href={PHONE_TEL}
                            className="group relative w-full sm:flex-1 inline-flex items-center justify-center gap-3 bg-red-500 hover:bg-red-400 text-white font-display font-bold py-5 px-8 rounded-lg text-xl md:text-2xl transition-all transform hover:scale-105 shadow-lg shadow-red-500/30 min-h-[64px] overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                            <Phone className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
                            <span className="relative z-10">{PHONE_DISPLAY}</span>
                        </a>
                        <a
                            href={PHONE_SMS}
                            className="group relative w-full sm:flex-1 inline-flex items-center justify-center gap-3 bg-black/60 hover:bg-black/80 border-2 border-red-500 hover:border-red-400 text-white font-display font-bold py-5 px-8 rounded-lg text-xl md:text-2xl transition-all transform hover:scale-105 min-h-[64px] overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                            <MessageSquare className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
                            <span className="relative z-10">Text Us</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
