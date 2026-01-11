'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { PHONE_TEL, PHONE_DISPLAY } from '@/lib/constants';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Add scroll effect after 20px
            setScrolled(scrollPosition > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            setIsOpen(false); // Close mobile menu if open
            
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);
            
            if (element) {
                const navbarHeight = 100; // Navbar height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                });
            }
        }
    };

    const menuItems = [
        { label: 'Inventory', href: '#inventory' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Book Now', href: '#reservation' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-black/95 backdrop-blur-xl border-b border-white/15 shadow-lg shadow-black/50 py-2' 
                : 'bg-transparent border-b border-transparent py-3'
        }`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`relative block hover:opacity-80 transition-all duration-300 flex-shrink-0 ${
                        scrolled 
                            ? 'w-36 h-12 md:w-48 md:h-16 lg:w-56 lg:h-20' 
                            : 'w-40 h-14 md:w-52 md:h-20 lg:w-64 lg:h-24'
                    }`}
                >
                    <Image
                        src="/eazytrailer.svg"
                        alt="Eazy Trailer Rentals"
                        fill
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1 lg:gap-2 flex-1 justify-end">
                    {/* Nav Links */}
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleAnchorClick(e, item.href)}
                            className={`relative px-3 lg:px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-200 rounded-md ${
                                item.label === 'Book Now'
                                    ? 'text-white bg-white/10 hover:bg-red-500 border border-white/20 hover:border-red-500'
                                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    
                    {/* Divider */}
                    <div className="w-px h-6 bg-white/20 mx-2 lg:mx-3" />
                    
                    {/* Phone CTA */}
                    <a
                        href={PHONE_TEL}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 lg:px-5 rounded-md transition-all duration-200 text-sm"
                    >
                        <Phone size={16} className="fill-current" />
                        <span>{PHONE_DISPLAY}</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-yellow-500 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    {/* Menu */}
                    <div className="md:hidden bg-neutral-950 border-t border-neutral-800 absolute w-full left-0 top-full z-50 shadow-2xl">
                        <div className="flex flex-col p-4 gap-1">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => {
                                        handleAnchorClick(e, item.href);
                                        setIsOpen(false);
                                    }}
                                    className={`text-lg font-medium uppercase tracking-wide py-3 px-4 rounded-lg transition-all duration-200 ${
                                        item.label === 'Book Now'
                                            ? 'text-white bg-red-600 hover:bg-red-500 text-center mt-2'
                                            : 'text-neutral-200 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="h-px bg-neutral-800 my-3" />
                            <a
                                href={PHONE_TEL}
                                className="flex items-center justify-center gap-3 text-white font-semibold text-xl py-3 px-4 bg-neutral-900 rounded-lg border border-neutral-800"
                            >
                                <Phone size={20} className="text-red-500 fill-current" />
                                {PHONE_DISPLAY}
                            </a>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
}
