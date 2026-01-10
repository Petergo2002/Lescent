'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Droplets } from 'lucide-react';
import { Button } from 'components/ui/button';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-24 md:py-40 relative overflow-hidden bg-[#050505] text-white">
            {/* Ambient Background - "Scent Mist" */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.2, 1],
                        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full bg-primary/10 blur-[150px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1.2, 1, 1.2],
                        transition: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }
                    }}
                    className="absolute right-0 bottom-0 h-[800px] w-[800px] rounded-full bg-secondary/20 blur-[150px]"
                />

                {/* Floating "Scent Particles" */}
                {[...Array(5)].map((_, i) => {
                    const width = (i * 15 + 20) % 50 + 20;
                    const height = (i * 25 + 20) % 50 + 20;
                    const left = (i * 37) % 100;
                    const top = (i * 73) % 100;

                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-gold-400/20 blur-md"
                            style={{
                                width,
                                height,
                                left: `${left}%`,
                                top: `${top}%`,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                x: [0, (i % 2 === 0 ? 1 : -1) * 20, 0],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: 10 + i * 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    );
                })}
            </div>

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center space-y-8 max-w-3xl mx-auto mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold-400 tracking-[0.3em] uppercase text-sm font-medium mb-4 block">Vår Filosofi</span>
                        <h2 className="font-serif text-5xl md:text-6xl text-white tracking-tight mb-6">
                            En Resa i <span className="italic text-white/50">Dofter</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                            Från de mest sällsynta oljorna till din signaturdoft. Vi skapar inte bara parfymer, vi skapar minnen som dröjer sig kvar.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Living Line (Desktop) */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block overflow-hidden">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gold-400 via-primary to-gold-400"
                        />
                    </div>

                    <div className="space-y-24 md:space-y-40">
                        {/* Timeline Item 1 - Left Image, Right Text */}
                        <TimelineItem
                            align="left"
                            icon={<Droplets className="w-6 h-6 text-gold-400" />}
                            title="Oljebaserad Perfektion"
                            subtitle="Hantverket"
                            description="Vi tror på renhet. Våra parfymer är 100% oljebaserade för att garantera en doft som stannar kvar på huden hela dagen, utan den skarpa alkoholdoften. En mjukare, djupare upplevelse."
                            imageSrc="/images/oil-perfume-craftsmanship.png"
                        />

                        {/* Timeline Item 2 - Right Image, Left Text */}
                        <TimelineItem
                            align="right"
                            icon={<Star className="w-6 h-6 text-gold-400" />}
                            title="Handplockade Ingredienser"
                            subtitle="Kvalitet"
                            description="Varje droppe är resultatet av noggrant utvalda essenser från världens mest exklusiva hörn. Från Madagaskars vanilj till Grasse-rosor – vi kompromissar aldrig med råvarorna."
                            imageSrc="/images/oil-perfume-ingredients.png"
                        />
                    </div>
                </div>

                {/* Footer Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-24 md:mt-32"
                >
                    <Button
                        size="lg"
                        className="h-16 px-10 rounded-full bg-white text-black hover:bg-gold-400 hover:text-white transition-all duration-300 text-lg font-medium shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,215,0,0.5)] group"
                    >
                        <span>Upptäck Hela Historien</span>
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

function TimelineItem({ align, title, subtitle, description, imageSrc, icon }: {
    align: 'left' | 'right',
    title: string,
    subtitle: string,
    description: string,
    imageSrc: string,
    icon: React.ReactNode
}) {
    const isLeft = align === 'left';

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative ${isLeft ? '' : 'lg:flex-row-reverse'}`}
        >
            {/* Center Node (Desktop only marker) */}
            <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#050505] border border-white/20 z-20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                {icon}
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-1/2">
                <div className="group relative aspect-[4/5] md:aspect-[4/3] w-full rounded-sm overflow-hidden bg-white/5 mx-auto max-w-xl">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay" />
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    {/* Glass Overlay Border */}
                    <div className="absolute inset-0 border-[1px] border-white/10 z-20" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60" />
                </div>
            </div>

            {/* Content Side */}
            <div className={`w-full lg:w-1/2 space-y-6 text-center ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                    <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                    <span className="text-xs uppercase tracking-widest text-white/80 font-medium">{subtitle}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                    {title}
                </h3>

                <p className="text-lg text-white/50 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
