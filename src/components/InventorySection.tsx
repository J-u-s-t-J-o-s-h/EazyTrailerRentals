import { Car, Package, Shovel, Truck, Check, AlertCircle } from 'lucide-react';
import Image from 'next/image';

const inventory = [
    {
        id: '8ft',
        title: "8ft Utility Trailer",
        specs: ["3,700lb Capacity", "Single Axle", "Lightweight", "Open Deck"],
        price: "Call for Rate",
        icon: Package,
        featured: false
    },
    {
        id: '10ft',
        title: "10ft Utility Trailer",
        specs: ["4,500lb Capacity", "Single Axle", "Ramp Gate", "Versatile"],
        price: "Call for Rate",
        icon: Truck,
        featured: true
    },
    {
        id: '18ft',
        title: "18ft Car Hauler",
        specs: ["7,000lb Capacity", "Dual Axle", "Slide-out Ramps", "Brakes"],
        price: "Call for Rate",
        icon: Car,
        featured: false
    },
    {
        id: '20ft',
        title: "20ft Equipment Trailer",
        specs: ["10,000lb Capacity", "Heavy Duty", "Drive-over Fenders", "Winch Ready"],
        price: "Call for Rate",
        icon: Shovel,
        featured: false
    }
];

export default function InventorySection() {
    return (
        <section className="bg-neutral-950 py-24 relative" id="inventory">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-wider leading-none">
                            Live <span className="text-gold-500">Inventory</span>
                        </h2>
                        <div className="flex items-center gap-2 mt-4 text-gold-500 font-bold uppercase tracking-widest text-sm bg-gold-500/10 inline-block px-4 py-2 rounded">
                            <AlertCircle size={18} />
                            Same Day Rental <span className="text-neutral-500 font-medium normal-case tracking-normal">(pending inventory)</span>
                        </div>
                        <p className="text-neutral-500 mt-4 max-w-lg text-lg">
                            Top-tier trailers maintained to the highest standards. Ready for your job today.
                        </p>
                    </div>
                    <a href="#reservation" className="text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors uppercase font-bold tracking-widest text-sm">
                        View All Trailers
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {inventory.map((item) => (
                        <div
                            key={item.id}
                            className={`relative group bg-neutral-900 border ${item.featured ? 'border-gold-500 shadow-[0_0_30px_rgba(245,158,11,0.15)] scale-[1.02]' : 'border-neutral-800'} rounded-xl overflow-hidden hover:border-gold-500/50 transition-all duration-300 flex flex-col`}
                        >
                            {item.featured && (
                                <div className="absolute top-0 right-0 bg-gold-500 text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg z-20">
                                    Most Popular
                                </div>
                            )}

                            <div className="h-48 bg-neutral-800 relative group-hover:bg-neutral-800/80 transition-colors flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-80" />
                                <item.icon className={`w-16 h-16 ${item.featured ? 'text-gold-500' : 'text-neutral-600'} group-hover:scale-110 transition-transform duration-500 relative z-10`} />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-display text-xl font-bold text-white mb-2 uppercase">{item.title}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    {/* If there's a price, show it, else show the text (Call for Rate) */}
                                    {item.price.startsWith('$') ? (
                                        <>
                                            <span className="text-gold-500 font-bold text-2xl">{item.price}</span>
                                            <span className="text-neutral-500 text-sm">/ day</span>
                                        </>
                                    ) : (
                                        <span className="text-gold-500 font-bold text-lg">{item.price}</span>
                                    )}
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {item.specs.map((spec, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-neutral-400">
                                            <Check className="w-4 h-4 text-gold-500/50" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#reservation"
                                    className={`w-full py-3 px-4 rounded text-center font-bold uppercase tracking-wide text-sm transition-colors ${item.featured
                                        ? 'bg-gold-500 text-black hover:bg-gold-400'
                                        : 'bg-neutral-800 text-white hover:bg-neutral-700'
                                        }`}
                                >
                                    Reserve Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
