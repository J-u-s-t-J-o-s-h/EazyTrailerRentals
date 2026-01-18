'use client';

import { Star, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function TestimonialsSection() {
    // Load Elfsight script
    useEffect(() => {
        // Check if script already exists
        if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://elfsightcdn.com/platform.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup on unmount if needed
        };
    }, []);

    return (
        <section className="bg-transparent py-20 border-t border-neutral-800 relative overflow-hidden" id="reviews">
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
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                        See what our customers are saying about their rental experience
                    </p>
                </motion.div>

                {/* Elfsight Google Reviews Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div 
                        className="elfsight-app-b11fe67f-1a2c-451e-b0fd-c5c5aab6396b" 
                        data-elfsight-app-lazy
                    />
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center justify-center"
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
                </motion.div>

            </div>
        </section>
    );
}
