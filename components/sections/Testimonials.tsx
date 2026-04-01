'use client';

import { useState, useEffect, useCallback } from 'react';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from 'lib/utils';

const REVIEWS = [
    {
        name: 'Abdirahmaan Mustafa',
        location: 'SE',
        date: '26 feb. 2026',
        rating: 5,
        title: 'Mycket bra parfymolja',
        text: 'Mycket bra parfymolja! Doften är stark men ändå mjuk och behaglig. Den luktar gott hela dagen och man behöver bara lite. Den känns lyxig och jag har fått många komplimanger. Jag är väldigt nöjd och kommer köpa den igen.',
        verified: true
    },
    {
        name: 'PyroKing',
        location: 'SE',
        date: '25 feb. 2026',
        rating: 5,
        title: 'Oud maracuja och blonde amber WOW!!!',
        text: 'Köpte oud maracuja och blonde amber. Och kan ej beskriva hur gott de luktar och hur länge de faktisk höll. Blev överraskad av komplimangerna jag fick och hur starkt det faktiskt var. Otroligt bra pris på dessa högkvalite oljorna.',
        verified: true
    },
    {
        name: 'Hussein Abraha',
        location: 'SE',
        date: '12 feb. 2026',
        rating: 5,
        title: 'Baccarat som sitter extremt länge på...',
        text: 'Baccarat som sitter extremt länge på huden. Doften är varm, lyxig och intensiv utan att bli överväldigande. Jag använder den dagligen! Är också VÄLDIGT nöjd med Layton samt Naxos‼️',
        verified: true
    },
    {
        name: 'Odette',
        location: 'SE',
        date: '11 feb. 2026',
        rating: 5,
        title: 'Jättenöjd',
        text: 'Köpte en doftolja (baccarat) och känner mig jättenöjd, håller tillomed längre än originalparfymen! Bra service',
        verified: true
    },
    {
        name: 'Marcus S.',
        location: 'SE',
        date: '2 mars 2026',
        rating: 5,
        title: 'Fantastisk hållbarhet',
        text: 'Har testat många kopior men Lescent spelar i en helt egen liga. Oljan gör att man doftar precis lagom men hela dagen. Roller-flaskan är sjukt smidig att ha med i fickan.',
        verified: true
    }
];

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
    return (
        <div className="relative flex flex-col h-[340px] p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all duration-700">
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-8 text-gold-400/10">
                <Quote size={40} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={14} 
                        className="fill-gold-400 text-gold-400" 
                    />
                ))}
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-3 overflow-hidden">
                <h3 className="text-white font-medium text-lg tracking-tight">
                    {review.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed italic line-clamp-6 text-sm md:text-base">
                    "{review.text}"
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-6 mt-4 border-t border-white/5">
                <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">{review.name}</span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-white/40 text-[10px] uppercase tracking-widest">{review.date}</span>
                    </div>
                </div>
                {review.verified && (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gold-400/10 border border-gold-400/20">
                        <CheckCircle2 size={10} className="text-gold-400" />
                        <span className="text-[9px] text-gold-400 font-medium uppercase tracking-wider">Verifierad</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, []);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [isPaused, next]);

    return (
        <section className="relative w-full overflow-hidden bg-evergreen py-24 md:py-32">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold-400 opacity-[0.03] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-400 opacity-[0.03] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="h-[1px] w-8 bg-gold-400/40" />
                        <span className="text-sm font-bold tracking-[0.4em] uppercase text-gold-400">Recensioner</span>
                        <div className="h-[1px] w-8 bg-gold-400/40" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl font-medium leading-tight text-white md:text-6xl mb-6"
                    >
                        Röster från <span className="text-gold-400 italic">vår community</span>
                    </motion.h2>
                </div>

                <div 
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="relative max-w-4xl mx-auto"
                >
                    <div className="overflow-hidden px-4 md:px-12">
                        <motion.div 
                            className="flex"
                            animate={{ x: `-${currentIndex * 100}%` }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        >
                            {REVIEWS.map((review, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                                    <ReviewCard review={review} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons - Minimalist */}
                    <button 
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 text-white/40 hover:text-white transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 text-white/40 hover:text-white transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {REVIEWS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={cn(
                                    "h-1.5 transition-all duration-500 rounded-full",
                                    i === currentIndex ? "w-8 bg-gold-400" : "w-1.5 bg-white/20 hover:bg-white/40"
                                )}
                            />
                        ))}
                    </div>
                </div>

                {/* Trustpilot Branding */}
                <div className="mt-24 flex flex-col items-center pt-12 border-t border-white/5">
                    <Script
                        type="text/javascript"
                        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                        strategy="lazyOnload"
                    />

                    <div
                        className="trustpilot-widget"
                        data-locale="sv-SE"
                        data-template-id="56278e9abfbbba0bdcd568bc"
                        data-businessunit-id="696a6129315f0ee5d622decc"
                        data-style-height="52px"
                        data-style-width="100%"
                        data-token="9159b257-4615-4410-9ef4-c1fc618a3f8e"
                    >
                        <a
                            href="https://se.trustpilot.com/review/lescent.se"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center text-white/40 hover:text-gold-400 transition-all duration-300 font-light tracking-wide text-xs group"
                        >
                            <span className="mr-2 italic">Se 100+ omdömen på</span>
                            <span className="font-medium text-white group-hover:text-gold-400">Trustpilot</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
