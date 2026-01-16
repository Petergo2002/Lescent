'use client';

import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-eggshell pt-28 px-4 pb-4 md:pt-32 md:px-8 md:pb-8">
            {/* 
              Desktop Layout: Split Screen (Left Content, Right Image)
              Mobile Layout: Full Screen Image Background with Overlay
            */}
            <div className="flex h-full w-full flex-col md:flex-row rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10 relative">

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
                        className="max-w-2xl flex flex-col items-center justify-between h-full py-12 md:py-0 md:h-auto md:justify-start md:items-start"
                    >
                        {/* Mobile Top Content: Tagline + Title */}
                        <div className="flex flex-col items-center md:items-start w-full mt-12 md:mt-0">
                            {/* Tagline - Hidden on Mobile */}
                            <span className="hidden md:block mb-6 text-sm font-extrabold tracking-[0.3em] text-gold-400 uppercase">
                                Premium Collection
                            </span>

                            {/* Main Title - Adjusted for Mobile */}
                            <h1 className="font-sans font-black tracking-tighter text-4xl leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] drop-shadow-lg md:drop-shadow-none md:mb-8">
                                Upptäck doften av <br className="hidden md:block" />
                                <span className="relative inline-block mt-1 text-white md:text-gold-400 md:inline md:mt-0">
                                    ren elegans
                                    {/* Custom Handwritten "Swoosh" Underline */}
                                    <svg
                                        className="absolute -bottom-4 -left-[5%] w-[110%] h-auto text-white md:text-gold-400"
                                        viewBox="0 0 200 20"
                                        preserveAspectRatio="none"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 12 C 50 22 130 22 200 5"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            className="opacity-90"
                                        />
                                    </svg>
                                </span>
                            </h1>
                        </div>

                        {/* Mobile Bottom Content: Description + Button */}
                        <div className="flex flex-col items-center md:items-start w-full mb-8 md:mb-0">
                            {/* Description - Visible on Mobile now, but simplified */}
                            <p className="mb-8 text-sm md:text-base font-medium md:font-light leading-relaxed tracking-wide text-gray-100/90 md:text-gray-200 md:text-lg lg:text-xl max-w-[280px] md:max-w-lg drop-shadow-md md:drop-shadow-none text-center md:text-left">
                                Exklusiva oljebaserade parfymer skapade för att lämna ett bestående intryck.
                                <span className="hidden md:inline"> Upplev en värld av sofistikerade dofter som definierar din personlighet.</span>
                            </p>

                            {/* CTA Button */}
                            <Button
                                size="lg"
                                className="group relative h-14 md:h-16 w-auto min-w-[200px] md:w-auto overflow-hidden rounded-full md:rounded-none border-0 md:border-2 border-gold-400 bg-white/10 backdrop-blur-md md:backdrop-blur-none md:bg-transparent px-10 md:px-14 text-sm md:text-base font-bold tracking-[0.2em] text-white transition-all hover:bg-gold-400 hover:text-black shadow-[0_0_20px_rgba(0,0,0,0.5)] md:shadow-none"
                                asChild
                            >
                                <Link href="/products">
                                    <span className="relative z-10">UPPTÄCK NU</span>
                                </Link>
                            </Button>
                        </div>
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
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                    />
                    {/* Mobile Gradient Overlay - Stronger at bottom for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-evergreen/40 via-transparent to-evergreen/80 md:hidden" />

                    {/* Desktop Gradient Overlay - Subtle vignette for better transition */}
                    <div className="hidden absolute inset-0 bg-gradient-to-r from-evergreen via-transparent to-transparent md:block opacity-50" />
                </div>
            </div>
        </section>
    );
}
