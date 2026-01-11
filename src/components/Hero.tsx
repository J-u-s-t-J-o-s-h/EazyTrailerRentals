'use client';

import Image from 'next/image';
import { Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PHONE_TEL, PHONE_SMS, PHONE_DISPLAY } from '@/lib/constants';

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
            {/* Background Animation with subtle zoom - Removed to use Global Background */}
            <div className="absolute inset-0 z-0">
                {/* Global Honeycomb shines through */}
            </div>

            {/* Background Overlays - Subtle Gradient for Text Readability */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 lg:pt-0 lg:pb-8 flex flex-col items-center text-center max-w-5xl">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative mt-4 md:mt-8 lg:mt-12 mb-2 md:mb-0 lg:-mb-2 max-w-[220px] md:max-w-[380px] lg:max-w-[500px] w-full"
                >
                    <Image
                        src="/eazytrailer.svg"
                        alt="Eazy Trailer Rentals"
                        width={1200}
                        height={600}
                        className="w-full h-auto logo-glow-animated"
                        priority
                    />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-2 leading-none drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]"
                >
                    Eazy <span className="text-stroke-red">Trailer</span> Rentals
                </motion.h1>

                {/* Subheadline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-yellow-500 font-display font-bold text-2xl md:text-3xl lg:text-3xl uppercase tracking-[0.1em] mb-6 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                >
                    Simple. Fast. Local.
                </motion.div>

                {/* Primary CTA Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl mb-6"
                >
                    {/* Call Now - Primary */}
                    <a
                        href={PHONE_TEL}
                        className="group relative w-full sm:flex-1 bg-red-500 hover:bg-red-400 text-white font-display font-bold text-lg md:text-xl py-4 px-8 rounded-lg hover:scale-105 transition-all transform flex items-center justify-center gap-3 shadow-lg shadow-red-500/30 min-h-[56px] overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                        <Phone className="w-5 h-5 md:w-6 md:h-6 fill-current relative z-10" />
                        <span className="relative z-10">Call Now</span>
                        <span className="hidden sm:inline relative z-10">({PHONE_DISPLAY})</span>
                    </a>

                    {/* Text Now - Secondary */}
                    <a
                        href={PHONE_SMS}
                        className="group relative w-full sm:flex-1 bg-black/60 hover:bg-black/80 border-2 border-red-500 hover:border-red-400 text-white font-display font-bold text-lg md:text-xl py-4 px-8 rounded-lg hover:scale-105 transition-all transform flex items-center justify-center gap-3 min-h-[56px] overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                        <MessageSquare className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
                        <span className="relative z-10">Text Now</span>
                    </a>
                </motion.div>

                {/* Secondary CTA Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mb-8"
                >
                    <a
                        href="#inventory"
                        className="text-white hover:text-yellow-500 font-display font-medium text-base md:text-lg uppercase tracking-wide transition-colors border-b border-yellow-500/50 hover:border-yellow-500 pb-1"
                    >
                        View Inventory
                    </a>
                </motion.div>
            </div>

            {/* Feature Strip at Bottom - Desktop Only */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 z-[5] bg-black/55 backdrop-blur-md border-t border-white/8">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base">
                        <div className="flex items-center gap-2 text-white/90">
                            <CheckCircle className="w-4 h-4 text-yellow-500" />
                            <span className="font-medium">24/7 by Appointment</span>
                        </div>
                        <div className="hidden md:block w-px h-4 bg-white/10" />
                        <div className="flex items-center gap-2 text-white/90">
                            <CheckCircle className="w-4 h-4 text-yellow-500" />
                            <span className="font-medium">Fast Pickup in CSRA</span>
                        </div>
                        <div className="hidden md:block w-px h-4 bg-white/10" />
                        <div className="flex items-center gap-2 text-white/90">
                            <CheckCircle className="w-4 h-4 text-yellow-500" />
                            <span className="font-medium">Car Hauler w/ Winch + Utility Trailers</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky CTA Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-black/95 backdrop-blur-lg border-t border-white/10 p-3 flex gap-3 shadow-lg">
                <a
                    href={PHONE_TEL}
                    className="flex-1 bg-red-500 hover:bg-red-400 text-white font-display font-bold text-base py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 min-h-[48px]"
                >
                    <Phone className="w-5 h-5 fill-current" />
                    <span>Call</span>
                </a>
                <a
                    href={PHONE_SMS}
                    className="flex-1 bg-black/60 border-2 border-red-500 text-white font-display font-bold text-base py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 min-h-[48px]"
                >
                    <MessageSquare className="w-5 h-5" />
                    <span>Text</span>
                </a>
            </div>
        </section>
    );
}
