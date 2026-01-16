'use client';

import Script from 'next/script';
import { motion } from 'framer-motion';

export function Testimonials() {
    return (
        <section className="relative w-full overflow-hidden bg-evergreen py-24 md:py-32">
            {/* Background Atmosphere - Bevarar en subtil bakgrundsatmosfär för djup */}
            <div className="absolute inset-0 pointer-events-none hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] translate-y-1/2" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="h-[1px] w-12 bg-gold-400/30" />
                        <span className="text-sm font-medium tracking-[0.3em] uppercase text-gold-400">Recensioner</span>
                        <div className="h-[1px] w-12 bg-gold-400/30" />
                    </motion.div>

                    {/* Rubrik */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl mb-6"
                    >
                        Våra Kunder <span className="text-gold-400 italic">Berättar</span>
                    </motion.h2>

                    {/* Brödtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-xl text-lg text-white/80 font-light mb-8"
                    >
                        Vi strävar alltid efter att överträffa förväntningar. Se vad våra kunder säger om sin doftupplevelse.
                    </motion.p>

                    {/* Trustpilot Länk (Ingen box, inga stjärnor) */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* TrustBox script */}
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
                                className="inline-flex items-center text-white border-b border-white/30 pb-0.5 hover:text-gold-400 hover:border-gold-400 transition-all duration-300 font-light tracking-wide"
                            >
                                Läs våra omdömen på Trustpilot
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
