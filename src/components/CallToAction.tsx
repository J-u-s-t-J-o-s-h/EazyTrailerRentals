import { Phone } from 'lucide-react';

export default function CallToAction() {
    return (
        <section className="bg-neutral-900 border-t border-neutral-800 py-20 md:py-32 text-center">
            <div className="container mx-auto px-4">
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 uppercase">
                    Need a Trailer <span className="text-gold-500">Today?</span>
                </h2>
                <p className="font-body text-xl md:text-2xl text-neutral-400 mb-12 tracking-widest uppercase">
                    Proudly Serving the CSRA
                </p>

                <a
                    href="tel:7066194246"
                    className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-display font-bold py-6 px-12 rounded hover:rounded-xl text-2xl md:text-3xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(245,158,11,0.4)]"
                >
                    <Phone className="w-8 h-8 md:w-10 md:h-10" />
                    706-619-4246
                </a>
            </div>
        </section>
    );
}
