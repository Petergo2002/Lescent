'use client';

import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-48 md:pb-32">
            {/* Background Gradient/Effects */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] opacity-50" />

            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-border bg-background/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm"
                    >
                        <Sparkles className="mr-2 h-3.5 w-3.5 text-primary" />
                        <span>Den nya kollektionen är här</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-7xl font-serif"
                    >
                        Upptäck doften av <br />
                        <span className="text-primary italic">ren elegans</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
                    >
                        Utforska vår exklusiva samling av parfymer som definierar din personlighet.
                        Skapade med passion, designade för dig.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        <Button size="lg" className="rounded-full h-12 px-8 text-base" asChild>
                            <Link href="/products">
                                Handla Nu
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base" asChild>
                            <Link href="/about">
                                Vår Berättelse
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
