import { Truck, Hammer, CalendarRange } from 'lucide-react';

const services = [
    {
        title: "Utility Trailers",
        desc: "Perfect for moves, yard cleanups, and general hauling to the dump or new home.",
        icon: Truck
    },
    {
        title: "Equipment Trailers",
        desc: "Built tough for heavier loads, machinery, and job-site requirements.",
        icon: Hammer
    },
    {
        title: "Short-Term Rentals",
        desc: "Daily and weekly rates available. Get exactly what you need, only when you need it.",
        icon: CalendarRange
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-black py-20">
            <div className="container mx-auto px-4">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-16 uppercase tracking-wider">
                    Our <span className="text-gold-500">Fleet</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-neutral-900 border border-neutral-800 p-8 rounded-lg hover:border-gold-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] flex flex-col items-start"
                        >
                            <div className="bg-neutral-950 p-4 rounded-lg text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                                <service.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white mb-4 uppercase">
                                {service.title}
                            </h3>
                            <p className="font-body text-neutral-400 text-lg leading-relaxed mb-8 flex-grow">
                                {service.desc}
                            </p>
                            <a href="tel:7066194246" className="font-display font-medium text-gold-500 tracking-wide group-hover:text-white transition-colors flex items-center gap-2">
                                RESERVE NOW &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
