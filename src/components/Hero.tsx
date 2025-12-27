import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/eazytrailerrentals.jpg"
                    alt="Eazy Trailer Rentals Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay with slight gradient for readability */}
                <div className="absolute inset-0 bg-black/80 md:bg-black/70 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">

                {/* Logo Area */}
                <div className="mb-8 w-64 md:w-96 animate-fade-in-down">
                    <Image
                        src="/eazytrailer.svg"
                        alt="Eazy Trailer Rentals"
                        width={600}
                        height={300}
                        className="w-full h-auto drop-shadow-2xl"
                        priority
                    />
                </div>

                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-white mb-4 leading-tight">
                    Reliable Trailer Rentals <br />
                    <span className="text-gold-500">Simple. Fast. Local.</span>
                </h1>

                <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                    Proudly serving the CSRA with dependable trailer rentals for work, moves, and equipment hauling.
                </p>

                {/* CTA Actions */}
                <div className="flex flex-col items-center gap-4 w-full max-w-md">
                    <a
                        href="tel:7066194246"
                        className="w-full bg-gold-500 hover:bg-gold-400 text-black font-display font-bold text-xl py-4 px-8 rounded hover:scale-105 transition-all transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                    >
                        GET A TRAILER TODAY
                    </a>

                    <a
                        href="tel:7066194246"
                        className="text-white hover:text-gold-400 font-bold text-xl flex items-center gap-2 transition-colors py-2"
                    >
                        <Phone className="w-5 h-5 fill-current" />
                        Call or Text: 706-619-4246
                    </a>
                </div>
            </div>
        </section>
    );
}
