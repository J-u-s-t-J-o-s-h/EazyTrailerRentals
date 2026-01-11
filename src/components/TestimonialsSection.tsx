'use client';

import Image from 'next/image';
import { Star, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
    return (
        <section className="bg-transparent py-20 border-t border-neutral-800 relative overflow-hidden" id="reviews">
            {/* Global Honeycomb Background */}
            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,0,0,0.06),transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex text-yellow-500">
                            <Star className="fill-current w-6 h-6" />
                            <Star className="fill-current w-6 h-6" />
                            <Star className="fill-current w-6 h-6" />
                            <Star className="fill-current w-6 h-6" />
                            <Star className="fill-current w-6 h-6" />
                        </div>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-4">
                        Trusted by the <span className="text-yellow-500">CSRA</span>
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Building our reputation one rental at a time
                    </p>

                    {/* Coming Soon Card */}
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-black/60 backdrop-blur-sm border-2 border-dashed border-yellow-500/30 rounded-xl p-12 md:p-16">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <Star className="w-8 h-8 text-yellow-500 fill-current" />
                            </div>
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-3">
                                Reviews Coming Soon
                            </h3>
                            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-6">
                                We're just getting started! Check back soon to see what our customers are saying about their rental experience.
                            </p>
                            <p className="text-neutral-500 text-sm">
                                In the meantime, call us to hear directly from our satisfied customers in the CSRA.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="https://www.facebook.com/binosmobiledetailing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 py-4 rounded-lg font-bold transition-all hover:-translate-y-1 hover:scale-105 shadow-lg shadow-blue-900/20"
                    >
                        <Facebook className="w-6 h-6 fill-current" />
                        Follow us on Facebook
                    </a>

                    <div className="flex items-center gap-4 bg-white px-8 py-3 rounded-lg text-black font-bold shadow-lg">
                        <Image 
                            src="/google-logo.svg" 
                            alt="Google" 
                            width={74} 
                            height={24} 
                            className="h-6 w-auto" 
                        />
                        <div className="flex flex-col text-xs leading-none">
                            <span>5.0 Customer Rating</span>
                            <span className="text-neutral-500 font-normal mt-1">Based on Google Reviews</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
