'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { PHONE_TEL, PHONE_DISPLAY } from '@/lib/constants';

const faqs = [
    {
        question: "What do I need to rent a trailer?",
        answer: "You'll need a valid driver's license, a vehicle with a proper hitch and towing capacity, and a refundable security deposit. We'll verify your hitch setup at pickup to ensure safe towing."
    },
    {
        question: "How do I reserve a trailer?",
        answer: "Simply call or text us at (706) 619-4246. We're available 24/7 by appointment. Let us know when you need it and we'll confirm availability and schedule your pickup time."
    },
    {
        question: "What are your rental rates?",
        answer: "Our rates are straightforward with no hidden fees. Pricing depends on the trailer type and rental duration. Call or text us for a quick quote - we'll give you an honest price upfront."
    },
    {
        question: "Do you offer same-day rentals?",
        answer: "Yes! Subject to availability, we can accommodate same-day rentals. Give us a call and we'll do our best to get you on the road as quickly as possible."
    },
    {
        question: "What's your service area?",
        answer: "We proudly serve the entire CSRA (Central Savannah River Area), including Augusta, Evans, Martinez, Grovetown, and surrounding communities."
    },
    {
        question: "What happens if the trailer is damaged?",
        answer: "Minor wear and tear is expected. For any significant damage, we'll assess the situation fairly. We recommend taking photos before and after your rental for your protection."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-transparent py-16 md:py-24 relative overflow-hidden">
            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,0,0,0.06),transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-3">
                        Frequently Asked <span className="text-red-500">Questions</span>
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Got questions? We've got answers.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                className={`w-full text-left bg-neutral-900/80 backdrop-blur-sm border rounded-lg p-5 transition-all duration-300 group ${
                                    openIndex === index 
                                        ? 'border-red-500/50 shadow-lg shadow-red-500/10' 
                                        : 'border-neutral-800 hover:border-neutral-700'
                                }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="font-display font-semibold text-lg text-white group-hover:text-red-500 transition-colors">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-neutral-400 transition-transform duration-300 flex-shrink-0 ${
                                            openIndex === index ? 'rotate-180 text-red-500' : ''
                                        }`}
                                    />
                                </div>
                                
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            id={`faq-answer-${index}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-neutral-300 mt-4 pt-4 border-t border-neutral-800 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-10"
                >
                    <p className="text-neutral-400 mb-4">Still have questions?</p>
                    <a
                        href={PHONE_TEL}
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/20"
                    >
                        Call Us: {PHONE_DISPLAY}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
