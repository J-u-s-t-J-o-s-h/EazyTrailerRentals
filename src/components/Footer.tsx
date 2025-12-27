export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-neutral-900">
            <div className="container mx-auto px-4 flex flex-col items-center gap-6">
                <div className="text-center">
                    <h3 className="font-display font-bold text-2xl text-white tracking-widest mb-2">EAZY TRAILER RENTALS</h3>
                    <p className="font-body text-neutral-500 uppercase tracking-wide text-sm">Proudly serving the CSRA</p>
                </div>

                <a href="tel:7066194246" className="font-body text-lg text-neutral-400 hover:text-gold-500 transition-colors">
                    706-619-4246
                </a>

                <div className="mt-8 pt-8 border-t border-neutral-900 w-full max-w-xs text-center">
                    <p className="text-neutral-700 text-xs uppercase tracking-widest font-medium">
                        Website draft by Iron Eagle Studio
                    </p>
                </div>
            </div>
        </footer>
    );
}
