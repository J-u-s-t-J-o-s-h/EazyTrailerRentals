'use client';

import { useState } from 'react';
import { Calendar, CheckCircle, Search, Truck } from 'lucide-react';

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
        <section className="bg-neutral-900 border-y border-neutral-800 py-16" id="reservation">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-black border border-neutral-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                    {/* Decorative Gold Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

                    <div className="text-center mb-8">
                        <h2 className="font-display text-3xl font-bold text-white uppercase tracking-wide">
                            Check <span className="text-gold-500">Availability</span>
                        </h2>
                        <p className="text-neutral-400 mt-2">Find the right trailer for your dates.</p>
                    </div>

                    {step === 'search' && (
                        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-neutral-300 uppercase tracking-wider">Trailer Type</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-neutral-900 border border-neutral-700 text-white p-3 rounded focus:border-gold-500 focus:outline-none appearance-none"
                                        value={selectedType}
                                        onChange={(e) => setSelectedType(e.target.value)}
                                    >
                                        <option value="car-hauler">Car Hauler (20')</option>
                                        <option value="utility">Utility Trailer (12')</option>
                                        <option value="dump">Dump Trailer (14')</option>
                                        <option value="equipment">Equipment Trailer (14k)</option>
                                    </select>
                                    <Truck className="absolute right-3 top-3 text-gold-500 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-neutral-300 uppercase tracking-wider">Pick-up Date</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        className="w-full bg-neutral-900 border border-neutral-700 text-white p-3 rounded focus:border-gold-500 focus:outline-none invert-calendar"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 justify-end">
                                <button
                                    type="submit"
                                    className="w-full bg-gold-500 hover:bg-gold-400 text-black font-display font-bold p-3 rounded transition-colors flex items-center justify-center gap-2"
                                >
                                    <Search className="w-5 h-5" />
                                    CHECK RATES
                                </button>
                            </div>
                        </form>
                    )}

                    {step === 'loading' && (
                        <div className="flex flex-col items-center justify-center py-12 animate-pulse">
                            <div className="w-12 h-12 border-4 border-neutral-800 border-t-gold-500 rounded-full animate-spin mb-4" />
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
                                <p className="text-gold-500 font-display text-2xl font-bold mt-4">$85.00 <span className="text-sm text-neutral-500 font-sans font-normal">/ day</span></p>
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
                                    className="bg-white hover:bg-neutral-200 text-black font-bold py-3 px-8 rounded shadow-lg transition-transform hover:scale-105"
                                >
                                    COMPLETE RESERVATION
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 'booked' && (
                        <div className="animate-fade-in text-center py-8">
                            <h3 className="font-display text-gold-500 text-4xl mb-4">SUCCESS!</h3>
                            <p className="text-white text-lg mb-6">Your reservation request has been started.</p>
                            <p className="text-neutral-400 max-w-md mx-auto mb-8">
                                Erick from Eazy Trailer Rentals will contact you shortly at 706-619-4246 to confirm details and arrange pickup.
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
