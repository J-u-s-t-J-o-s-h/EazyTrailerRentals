import { PHONE_TEL, PHONE_DISPLAY } from '@/lib/constants';

export default function Footer() {
    return (
        <footer className="bg-black py-6 border-t border-neutral-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-lg text-white tracking-wide">EAZY TRAILER RENTALS</span>
                        <span className="text-neutral-600">•</span>
                        <span className="text-neutral-500 text-sm">Proudly serving the CSRA</span>
                    </div>

                    {/* Phone */}
                    <a href={PHONE_TEL} className="font-body text-neutral-400 hover:text-red-500 transition-colors">
                        {PHONE_DISPLAY}
                    </a>
                </div>
                
                {/* Credit */}
                <div className="mt-4 pt-4 border-t border-neutral-900 text-center">
                    <p className="text-neutral-700 text-xs uppercase tracking-wider">
                        Website by Iron Eagle Studio
                    </p>
                </div>
            </div>
        </footer>
    );
}
