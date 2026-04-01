import Image from 'next/image';
import Link from 'next/link';
import { generateMetadata as generateSeoMetadata } from 'lib/seo';
import { PageAmbience } from 'components/ui/page-ambience';
import { Quote } from 'lucide-react';

export const metadata = generateSeoMetadata('about');

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            <PageAmbience />

            {/* Hero Section - Immersive & Minimal */}
            <header className="relative pt-44 pb-32 md:pt-60 md:pb-48 overflow-hidden">
                <div className="container relative z-10 px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <div className="inline-flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <span className="h-px w-8 bg-primary/30" />
                            <span className="text-primary/60 text-xs tracking-[0.5em] uppercase font-bold text-center">Essensen av Lescent</span>
                            <span className="h-px w-8 bg-primary/30" />
                        </div>
                        <h1 className="font-serif text-7xl md:text-9xl font-medium tracking-tight text-foreground leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                            Arvet från <br />
                            <span className="italic text-muted-foreground/40 font-light">Sju härad</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                            Vi förenar Borås rika hantverkshistoria med modern doftkemi för att skapa världens mest långlivade oljeparfymer.
                        </p>
                    </div>
                </div>
            </header>

            {/* The Heritage Section - Editorial Layout */}
            <section className="py-24 md:py-40 bg-secondary/5 border-y border-border/40">
                <div className="container px-6">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-6 space-y-12 order-2 lg:order-1">
                            <div className="space-y-6">
                                <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
                                    Där textil möter <br /><span className="italic text-muted-foreground/60">alkemistens bord</span>
                                </h2>
                                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                                    Borås har i århundraden varit hjärtat av svensk kvalitet och hantverk. Vi bär med oss den stoltheten i varje droppe vi skapar. Vår resa började med en enkel observation av parfymvärlden: *Varför försvinner doften så fort, och varför måste den vara så aggressiv?*
                                </p>
                                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                                    Svaret fanns i att återvända till parfymens ursprung. Genom att fokusera på rena oljor och en intim **rollerball-applicering**, skapade vi ett sätt att bära doft som är mjukare, mer personligt och som faktiskt håller hela dagen. Det är lyx som inte skriker, utan som dröjer kvar.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/60">
                                <div>
                                    <div className="text-3xl font-serif mb-2">1857</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Inspirationens ursprung</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-serif mb-2">100%</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Alkoholfritt</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                                <Image
                                    src="/about/heritage-v2.png"
                                    alt="Lescents arv i Borås hantverkshistoria"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Craftsmanship Section */}
            <section className="py-32 md:py-48">
                <div className="container px-6">
                    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative aspect-square rounded-full overflow-hidden shadow-inner ring-8 ring-secondary/5 group">
                            <Image
                                src="/about/craft.png"
                                alt="Hantverket bakom Lescents exklusiva oljeparfymer"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/5 group-hover:opacity-0 transition-opacity" />
                        </div>
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <span className="text-primary/60 text-xs tracking-[0.4em] uppercase font-bold">Vår Process</span>
                                <h2 className="font-serif text-4xl md:text-5xl text-foreground">Kemi blir till magi</h2>
                            </div>
                            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                                <p>
                                    Våra "Superior Dupes" skapas med kirurgisk precision. Vi analyserar originalens notprofiler, men istället för att späda ut dem med alkohol, extraherar vi de renaste oljorna för att skapa en intensivare och mer levande version.
                                </p>
                                <p>
                                    Detta är hantverk i sin renaste form. Varje batch testas och förfinas tills doften inte bara matchar originalet, utan överträffar det i djup och hållbarhet.
                                </p>
                                <ul className="space-y-4 pt-4">
                                    {[
                                        'Högsta koncentration av parfymolja',
                                        'Skonsamt mot huden (inga uttorkande kemikalier)',
                                        'Längre hållfasthet (upp till 12+ timmar)'
                                    ].map((value) => (
                                        <li key={value} className="flex items-center gap-3 text-foreground font-medium text-sm italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Vision (Quote Section) */}
            <section className="relative py-48 md:py-64 overflow-hidden bg-evergreen text-white">
                <div className="absolute inset-0 opacity-20 bg-[url('/about/ingredients.png')] bg-cover bg-fixed grayscale pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-evergreen/80 via-evergreen/95 to-evergreen/80" />
                
                <div className="container relative z-10 px-6">
                    <div className="max-w-3xl mx-auto text-center space-y-12">
                        <Quote className="w-16 h-16 mx-auto text-primary/40 opacity-50" />
                        <h2 className="font-serif text-4xl md:text-6xl italic leading-tight text-eggshell">
                            "Vi gör inte parfymer för att de ska säljas snabbt. Vi gör dem för att de ska levas länge. Det är skillnaden mellan en doft och en essens."
                        </h2>
                        <div className="space-y-2">
                            <p className="font-bold tracking-[0.3em] uppercase text-sm">Grundarnas Vision</p>
                            <p className="text-white/40 text-xs">Lescent, Borås</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA / Contact */}
            <section className="py-24 md:py-40">
                <div className="container px-6 text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="font-serif text-4xl md:text-5xl">Vill du veta mer?</h2>
                        <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
                            Vi älskar att prata dofter. Har du frågor om våra oljor eller vår process, tveka inte att höra av dig.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link 
                            href="/products" 
                            className="bg-primary text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                        >
                            Upptäck Kollektionen
                        </Link>
                        <Link 
                            href="/contact" 
                            className="bg-transparent border border-border text-foreground px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-secondary/10 transition-all"
                        >
                            Kontakta Oss
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
