'use client';

import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative flex h-screen w-full flex-col items-center justify-between overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero2.png"
                    alt="Lescent Premium Oil Perfume"
                    fill
                    className="object-cover"
                    priority
                    unoptimized // Added to ensure heavy image loads without optimization issues
                    quality={100}
                />
                {/* Gradient overlay: Darker at top for text legibility, subtle at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
            </div>

            {/* Top Content: Text (Top Mid) */}
            <div className="container relative z-10 flex flex-col items-center pt-24 md:pt-40 text-center">
                {/* Simplified Single Line Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl sm:text-5xl md:text-7xl font-medium tracking-wide text-white font-serif drop-shadow-2xl"
                >
                    Upptäck doften av <span className="text-gold-400 italic block sm:inline ml-0 sm:ml-2">ren elegans</span>
                </motion.h1>

                {/* Minimal Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-4 max-w-lg text-sm md:text-base text-white/90 font-light tracking-widest uppercase drop-shadow-md px-4"
                >
                    Exklusiva oljebaserade parfymer
                </motion.p>
            </div>

            {/* Bottom Content: Button (Bottom Mid) */}
            <div className="container relative z-10 flex flex-col items-center pb-24 md:pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Button
                        size="lg"
                        className="h-14 rounded-full bg-white text-evergreen hover:bg-gold-400 hover:text-white px-12 text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)]"
                        asChild
                    >
                        <Link href="/products">
                            Upptäck Nu
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
