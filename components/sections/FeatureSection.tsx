'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';

export function FeatureSection() {
    return (
        <section className="bg-background py-24">
            <div className="container">
                <div className="flex flex-col items-end justify-between gap-8 border-b border-border pb-12 md:flex-row md:items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl"
                    >
                        Upplev Lyxig Doft med <span className="text-primary">Lescent</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-start gap-6 md:items-end"
                    >
                        <p className="max-w-md text-muted-foreground md:text-right">
                            Välkommen till Lescent – handgjorda oljeparfymer från Sverige. Upptäck vår exklusiva kollektion.
                        </p>
                        <Button size="lg" className="group gap-2 rounded-full h-12 px-8">
                            Utforska Mer
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
