import { Star, Facebook } from 'lucide-react';

const reviews = [
    {
        name: "James D.",
        role: "Local Business Owner",
        content: "Erick made the rental process incredibly easy. The 20ft equipment trailer was in perfect condition and handled my skid steer with no issues. Highly recommend!",
        stars: 5,
    },
    {
        name: "Sarah M.",
        role: "Homeowner",
        content: "Needed a utility trailer last minute for a weekend cleanup. fast response, great price, and super friendly service. Will definitely rent again.",
        stars: 5,
    },
    {
        name: "Mike T.",
        role: "Contractor",
        content: "Best trailer rental in the CSRA. Equipment is always well-maintained and the 7-day rates are unbeatable. Good honest people to do business with.",
        stars: 5,
    }
];

export default function TestimonialsSection() {
    return (
        <section className="bg-neutral-900 py-20 border-t border-neutral-800" id="reviews">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex text-gold-500">
                            <Star className="fill-current w-6 h-6" />
                            <Star className="fill-current w-6 h-6" />
                            <Star className="fill-current w-6 h-6" />
                            <Star className="fill-current w-6 h-6" />
                            <Star className="fill-current w-6 h-6" />
                        </div>
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase tracking-wide">
                        Trusted by the <span className="text-gold-500">CSRA</span>
                    </h2>
                    <p className="text-neutral-400 mt-4 text-lg">
                        See why our neighbors rate us 5 Stars on Google and Facebook.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-black/50 border border-neutral-800 p-8 rounded-xl relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Star className="w-24 h-24 text-gold-500 fill-current" />
                            </div>
                            <div className="flex gap-1 text-gold-500 mb-4">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-neutral-300 italic mb-6 leading-relaxed relative z-10">
                                "{review.content}"
                            </p>
                            <div>
                                <h4 className="font-display text-white font-bold uppercase tracking-wide">{review.name}</h4>
                                <p className="text-neutral-500 text-sm">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <a
                        href="#"
                        className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 py-4 rounded font-bold transition-all hover:-translate-y-1 shadow-lg shadow-blue-900/20"
                    >
                        <Facebook className="w-6 h-6 fill-current" />
                        Join us on Facebook
                    </a>

                    <div className="flex items-center gap-4 bg-white px-8 py-3 rounded text-black font-bold">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
                        <div className="flex flex-col text-xs leading-none">
                            <span>5.0 Customer Rating</span>
                            <span className="text-neutral-500 font-normal mt-1">Based on Google Reviews</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
