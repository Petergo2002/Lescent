
import Image from 'next/image';

export const metadata = {
    title: 'Om Oss',
    description: 'Historien bakom Lescent i Borås. Vi brinner för att skapa högkvalitativa, långvariga oljeparfymer inspirerade av världens bästa dofter.',
    alternates: {
        canonical: 'https://lescent.se/about',
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-0 h-[800px] w-[800px] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute left-0 bottom-0 h-[600px] w-[600px] bg-gold-400/5 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <div className="container pt-44 pb-24 md:pt-52 md:pb-32 text-center space-y-8">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="text-muted-foreground text-sm tracking-[0.4em] uppercase font-medium">Vår Berättelse</span>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 text-foreground">
                        Från Borås med <br /><span className="italic text-muted-foreground">passion</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Vi är ett företag baserat i Borås som drivs av en brinnande passion för parfymer.
                        Vårt mål är att leverera doftupplevelser som både berör och består.
                    </p>
                </div>

                {/* The Vision Section */}
                <section className="bg-secondary/5 border-y border-black/5">
                    <div className="container py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Inspirerad av de bästa</h2>
                            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
                                <p>
                                    Vår affärsidé är enkel men kraftfull: Att erbjuda högkvalitativa oljeparfymer som är inspirerade av marknadens mest exklusiva och topprankade dofter. Vi kallar dem "dupes" av högsta klass.
                                </p>
                                <p>
                                    Vi ville skapa något som håller måttet. Genom att fokusera på oljebaserade extrakt säkerställer vi att doften sitter kvar på huden betydligt längre än traditionella alkoholbaserade parfymer. Det är lyx som varar.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] bg-white rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
                            <Image
                                src="/about/bottle-silhouette.png"
                                alt="Lescent Vision"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </section>

                {/* Craftsmanship Section */}
                <section className="container py-24 md:py-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/about/lab-mixing.png"
                                alt="Hantverket bakom Lescent"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="space-y-8">
                            <span className="text-primary text-sm tracking-[0.4em] uppercase font-medium">Vårt Löfte</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Kvalitet i varje droppe</h2>
                            <p className="text-muted-foreground font-light leading-relaxed text-lg">
                                Vi brinner för att leverera det bästa. Våra oljeparfymer är noggrant framtagna för att matcha orginalens notprofiler, men med oljans överlägsna hållbarhet. Det är din favoritdoft, men intensivare och mer långvarig.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Ingredients Section - Full Width Image Break */}
                <section className="relative h-[600px] w-full overflow-hidden">
                    <Image
                        src="/about/ingredients.png"
                        alt="Premium Ingredients"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white space-y-6 max-w-2xl px-6">
                            <h2 className="font-serif text-4xl md:text-6xl">Dofter som består</h2>
                            <p className="text-lg font-light text-white/80">Oljebaserad lyx från oss till dig.</p>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
}
