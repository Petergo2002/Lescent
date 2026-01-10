'use client';

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';


const testimonials = [
    {
        id: 1,
        content: "En helt fantastisk doftupplevelse! Arabian Tonka har blivit min absoluta favorit. Den sitter kvar hela dagen och jag får så många komplimanger.",
        author: "Sofia L.",
        role: "Verifierad Kund",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: 2,
        content: "Jag var skeptisk till att köpa parfym online, men Le Scent överträffade alla förväntningar. Baccarat-inspirerade doften är identisk med originalet men till en bråkdel av priset.",
        author: "Marcus E.",
        role: "Stammis",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: 3,
        content: "Lyxen i förpackningen och kvalitén på dofterna är otrolig. Det känns verkligen som en premiumprodukt rakt igenom. Rekommenderas varmt!",
        author: "Emma W.",
        role: "Verifierad Kund",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    }
];

export function Testimonials() {
    return (
        <section className="relative w-full overflow-hidden bg-evergreen py-24 md:py-32">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-eggshell/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-imperial-blue/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="h-[1px] w-12 bg-eggshell/30" />
                        <span className="text-sm font-medium tracking-[0.3em] uppercase text-eggshell">Vad Våra Kunder Säger</span>
                        <div className="h-[1px] w-12 bg-eggshell/30" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="max-w-3xl font-serif text-4xl font-medium leading-tight text-white md:text-5xl"
                    >
                        Älskad av <span className="text-gold-400 italic">Entusiaster</span>
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative flex flex-col rounded-2xl border border-eggshell/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-eggshell/20 hover:bg-white/10 hover:-translate-y-1"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-8 text-gold-400/20 group-hover:text-gold-400/40 transition-colors">
                                <Quote size={48} fill="currentColor" />
                            </div>

                            {/* Stars */}
                            <div className="mb-6 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="mb-8 flex-grow font-light leading-relaxed text-eggshell/90 italic">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-eggshell/20">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-serif text-lg text-white">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-xs uppercase tracking-wider text-gold-400/80">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
