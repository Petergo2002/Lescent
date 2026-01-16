'use client';

import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-evergreen">
            {/* 
              Desktop Layout: Split Screen (Left Content, Right Image)
              Mobile Layout: Full Screen Image Background with Overlay
            */}
            <div className="flex h-full w-full flex-col md:flex-row">

                {/* 
                  LEFT SIDE (Desktop) / OVERLAY CONTENT (Mobile)
                  - On Desktop: Takes up 50% width, solid background
                  - On Mobile: Takes up full width, transparent background (overlaying image)
                */}
                <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 text-center md:w-1/2 md:items-start md:bg-evergreen md:pl-16 md:pr-8 md:text-left lg:pl-24">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        {/* Tagline */}
                        <span className="mb-6 block text-sm font-extrabold tracking-[0.3em] text-gold-400 uppercase">
                            Premium Collection
                        </span>

                        {/* Main Title - BOLDER and BIGGER */}
                        <h1 className="mb-8 font-serif text-5xl font-bold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] drop-shadow-lg md:drop-shadow-none">
                            Upptäck doften av <br className="hidden md:block" />
                            <span className="italic text-gold-400 font-serif">ren elegans</span>
                        </h1>

                        {/* Description */}
                        <p className="mb-12 text-base font-light leading-relaxed tracking-wide text-gray-200 md:text-lg lg:text-xl max-w-lg drop-shadow-md md:drop-shadow-none">
                            Exklusiva oljebaserade parfymer skapade för att lämna ett bestående intryck. Upplev en värld av sofistikerade dofter som definierar din personlighet.
                        </p>

                        {/* CTA Button */}
                        <Button
                            size="lg"
                            className="group relative h-16 w-full md:w-auto overflow-hidden rounded-none border-2 border-gold-400 bg-transparent px-14 text-base font-bold tracking-[0.2em] text-white transition-all hover:bg-gold-400 hover:text-black shadow-[0_0_20px_rgba(0,0,0,0.5)] md:shadow-none"
                            asChild
                        >
                            <Link href="/products">
                                <span className="relative z-10">UPPTÄCK NU</span>
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* 
                  RIGHT SIDE (Desktop) / BACKGROUND (Mobile)
                  - On Desktop: Takes up 50% width, displays image full height
                  - On Mobile: Absolute positioned covering entire screen
                */}
                <div className="absolute inset-0 z-0 h-full w-full md:relative md:w-1/2 md:inset-auto">
                    <Image
                        src="/realhero.png"
                        alt="Lescent Premium Oil Perfume"
                        fill
                        className="object-cover object-center"
                        priority
                        unoptimized
                    />
                    {/* Mobile Gradient Overlay - Only visible on Mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-evergreen/90 via-evergreen/50 to-evergreen/30 md:hidden" />

                    {/* Desktop Gradient Overlay - Subtle vignette for better transition */}
                    <div className="hidden absolute inset-0 bg-gradient-to-r from-evergreen via-transparent to-transparent md:block opacity-50" />
                </div>
            </div>
        </section>
    );
}
