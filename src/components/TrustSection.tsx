'use client';

import { motion } from 'framer-motion';

export default function TrustSection() {
    return (
        <section className="bg-transparent py-20 md:py-28 border-b border-neutral-800 relative overflow-hidden">
            {/* Global Honeycomb Background */}
            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,0,0,0.06),transparent_70%)]" />

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
                            We're Your <span className="text-yellow-500">Neighbors</span>
                        </h2>
                    </motion.div>

                    {/* Main Content - More Narrative Style */}
                    <div className="space-y-8 md:space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-black/40 border-l-4 border-red-500 pl-6 md:pl-8 py-6 md:py-8"
                        >
                            <h3 className="text-white font-display font-bold text-xl md:text-2xl uppercase mb-3">
                                Local, Not Corporate
                            </h3>
                            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                                We're based right here in the CSRA, serving Augusta, Evans, Martinez, Grovetown, and the surrounding areas. When you call, you're talking to someone who actually owns the business, not a call center. We know the area, we know what works, and we're here to help.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-black/40 border-l-4 border-yellow-500 pl-6 md:pl-8 py-6 md:py-8"
                        >
                            <h3 className="text-white font-display font-bold text-xl md:text-2xl uppercase mb-3">
                                No Surprises, Just Straight Talk
                            </h3>
                            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                                What you see is what you get. We'll tell you the rate upfront, no hidden fees, no last-minute charges, no fine print nonsense. Just honest pricing for a good trailer that's ready to work.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-black/40 border-l-4 border-red-500 pl-6 md:pl-8 py-6 md:py-8"
                        >
                            <h3 className="text-white font-display font-bold text-xl md:text-2xl uppercase mb-3">
                                We Work Around Your Schedule
                            </h3>
                            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                                Need a trailer Saturday morning? No problem. Working late and need to drop it off after hours? We'll figure it out. We're available 24/7 by appointment because we know your job doesn't always fit into business hours.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-black/40 border-l-4 border-yellow-500 pl-6 md:pl-8 py-6 md:py-8"
                        >
                            <h3 className="text-white font-display font-bold text-xl md:text-2xl uppercase mb-3">
                                Trailers That Actually Work
                            </h3>
                            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                                We keep our trailers in good shape. Regular maintenance, working lights, solid hitches, the basics that matter. When you rent from us, you're getting equipment that's ready to do the job, not something that's going to give you headaches on the road.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
