'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { label: 'Inventory', href: '#inventory' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'Book Now', href: '#reservation' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                {/* Logo */}
                <Link
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="relative w-32 h-12 md:w-40 md:h-16 block hover:opacity-80 transition-opacity"
                >
                    <Image
                        src="/eazytrailer.svg"
                        alt="Eazy Trailer Rentals"
                        fill
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-neutral-300 hover:text-gold-500 font-display font-medium tracking-wide uppercase transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="tel:7066194246"
                        className="bg-gold-500 hover:bg-gold-400 text-black font-bold py-2 px-6 rounded flex items-center gap-2 transition-transform hover:scale-105"
                    >
                        <Phone size={18} className="fill-current" />
                        706-619-4246
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-gold-500 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-neutral-800 absolute w-full left-0 animate-fade-in-down shadow-2xl">
                    <div className="flex flex-col p-6 gap-6 items-center">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-xl font-display font-bold text-white uppercase tracking-wider hover:text-gold-500"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="w-full h-px bg-neutral-800 my-2" />
                        <a
                            href="tel:7066194246"
                            className="text-gold-500 font-bold text-2xl flex items-center gap-2"
                        >
                            <Phone size={24} className="fill-current" />
                            706-619-4246
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
