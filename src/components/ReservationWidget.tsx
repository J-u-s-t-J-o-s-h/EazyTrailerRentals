'use client';

import { useState } from 'react';
import { Calendar, CheckCircle, Search, Truck } from 'lucide-react';
import { PHONE_DISPLAY } from '@/lib/constants';

export default function ReservationWidget() {
    const [step, setStep] = useState<'search' | 'loading' | 'results' | 'booked'>('search');
    const [selectedType, setSelectedType] = useState('car-hauler');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('loading');
        // Simulate API call
        setTimeout(() => {
            setStep('results');
        }, 1500);
    };

    const handleBook = () => {
        setStep('booked');
    };

    return (
        <section className="bg-transparent border-y border-neutral-800 py-16 relative overflow-hidden" id="reservation">
            {/* Global Honeycomb Background */}
            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,0,0,0.08),transparent_65%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 shadow-2xl relative overflow-hidden">
                    {/* Decorative Red Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

                    <div className="text-center mb-8">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-2">
                            Check <span className="text-yellow-500">Availability</span>
                        </h2>
                        <p className="text-neutral-400 mt-2 text-base md:text-lg">Find the right trailer for your dates.</p>
                    </div>

                    {step === 'search' && (
                        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-neutral-300 uppercase tracking-wider">Trailer Type</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:border-red-500 focus:outline-none appearance-none"
                                        value={selectedType}
                                        onChange={(e) => setSelectedType(e.target.value)}
                                    >
                                        <option value="car-hauler">Car Hauler (20')</option>
                                        <option value="utility">Utility Trailer (12')</option>
                                        <option value="dump">Dump Trailer (14')</option>
                                        <option value="equipment">Equipment Trailer (14k)</option>
                                    </select>
                                    <Truck className="absolute right-3 top-3 text-red-500 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-neutral-300 uppercase tracking-wider">Pick-up Date</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 rounded focus:border-red-500 focus:outline-none invert-calendar"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 justify-end">
                                <button
                                    type="submit"
                                    className="w-full bg-red-500 hover:bg-red-400 text-white font-display font-bold p-3 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                                >
                                    <Search className="w-5 h-5" />
                                    CHECK RATES
                                </button>
                            </div>
                        </form>
                    )}

                    {step === 'loading' && (
                        <div className="flex flex-col items-center justify-center py-12 animate-pulse">
                            <div className="w-12 h-12 border-4 border-neutral-800 border-t-red-500 rounded-full animate-spin mb-4" />
                            <p className="text-neutral-400 uppercase tracking-widest text-sm">Checking Inventory...</p>
                        </div>
                    )}

                    {step === 'results' && (
                        <div className="animate-fade-in text-center py-6">
                            <div className="bg-green-900/20 border border-green-500/20 p-6 rounded-lg mb-6 max-w-lg mx-auto">
                                <div className="flex items-center justify-center gap-3 text-green-500 mb-2">
                                    <CheckCircle className="w-6 h-6" />
                                    <span className="font-bold text-lg uppercase">It's Available!</span>
                                </div>
                                <p className="text-neutral-300">
                                    Great news! We have a <span className="text-white font-bold">{selectedType.replace('-', ' ')}</span> available for your selected dates.
                                </p>
                                <p className="text-red-500 font-display text-2xl font-bold mt-4">$85.00 <span className="text-sm text-neutral-500 font-sans font-normal">/ day</span></p>
                            </div>

                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={() => setStep('search')}
                                    className="text-neutral-400 hover:text-white underline decoration-neutral-700 hover:decoration-white transition-all text-sm"
                                >
                                    Search Different Dates
                                </button>
                                <button
                                    onClick={handleBook}
                                    className="bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all hover:scale-105"
                                >
                                    COMPLETE RESERVATION
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 'booked' && (
                        <div className="animate-fade-in text-center py-8">
                            <h3 className="font-display text-red-500 text-4xl mb-4">SUCCESS!</h3>
                            <p className="text-white text-lg mb-6">Your reservation request has been started.</p>
                            <p className="text-neutral-400 max-w-md mx-auto mb-8">
                                Erick from Eazy Trailer Rentals will contact you shortly at {PHONE_DISPLAY} to confirm details and arrange pickup.
                            </p>
                            <button
                                onClick={() => setStep('search')}
                                className="text-neutral-500 hover:text-white font-medium text-sm border border-neutral-800 hover:border-white px-6 py-2 rounded transition-colors"
                            >
                                Start New Search
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
