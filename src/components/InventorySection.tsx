'use client';

import { Check, AlertCircle, Phone, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PHONE_TEL, PHONE_SMS } from '@/lib/constants';

const inventory = [
    {
        id: '14ft',
        title: "14ft Utility Trailer",
        specs: ["Single Axle", "3,500lb Capacity", "Ratchet Straps Included", "Lightweight"],
        price: "Call for Rate",
        image: "/14ft-trailer.jpeg",
        featured: false,
        category: "Utility"
    },
    {
        id: '18ft',
        title: "18ft Car Hauler",
        specs: ["Dual Axle", "7,000lb Capacity", "13k lb Winch", "Straps Included"],
        price: "Call for Rate",
        image: "/18ft-trailer.jpeg",
        featured: true,
        category: "Car Hauler"
    },
    {
        id: '20ft',
        title: "20ft Equipment Trailer",
        specs: ["Dual Axle", "10,000lb Capacity", "12k lb Winch", "Straps Included"],
        price: "Call for Rate",
        image: "/20ft-trailer.jpeg",
        featured: false,
        category: "Equipment"
    }
];

export default function InventorySection() {
    return (
        <section className="bg-transparent py-20 md:py-28 relative overflow-hidden" id="inventory">
            {/* Global Honeycomb Background */}
            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,0,0,0.1),transparent_65%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-4">
                        Live <span className="text-yellow-500">Inventory</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <AlertCircle className="w-5 h-5 text-yellow-500" />
                        <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm">
                            Same Day Rental Available
                        </span>
                    </div>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Top-tier trailers maintained to the highest standards. Ready for your job today.
                    </p>
                </motion.div>

                {/* Inventory Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {inventory.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className={`flex flex-col h-full bg-neutral-900/80 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${item.featured
                                ? 'border-yellow-500 shadow-lg shadow-yellow-500/20 hover:shadow-xl hover:shadow-yellow-500/30'
                                : 'border-neutral-800 hover:border-yellow-500/50'
                                } hover:-translate-y-1`}>

                                {/* Featured Badge */}
                                {item.featured && (
                                    <div className="absolute top-4 right-4 z-20 bg-red-500 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-lg shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                {/* Image */}
                                <div className="relative aspect-[4/3] bg-neutral-800 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Title */}
                                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-tight">
                                        {item.title}
                                    </h3>

                                    {/* Specs Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {item.specs.map((spec, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <Check className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-neutral-300 text-sm leading-tight">{spec}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6 pb-6 border-b border-neutral-800">
                                        <span className="text-yellow-500 font-bold text-xl">
                                            {item.price}
                                        </span>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                        <a
                                            href={PHONE_TEL}
                                            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold uppercase tracking-wide text-sm transition-all ${item.featured
                                                ? 'bg-red-500 text-white hover:bg-red-400 hover:scale-105'
                                                : 'bg-neutral-800 text-white hover:bg-neutral-700'
                                                }`}
                                        >
                                            <Phone className="w-4 h-4" />
                                            Call Now
                                        </a>
                                        <a
                                            href={PHONE_SMS}
                                            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold uppercase tracking-wide text-sm bg-black/60 border-2 border-yellow-500/50 text-white hover:border-yellow-500 hover:bg-black/80 transition-all"
                                        >
                                            <MessageSquare className="w-4 h-4" />
                                            Text
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
