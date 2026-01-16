
import Image from 'next/image';

export const metadata = {
    title: 'Om Oss',
    description: 'Historien bakom Lescent och vår passion för oljebaserade parfymer. Utvalda ingredienser och handgjort hantverk.',
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
                        <span className="text-muted-foreground text-sm tracking-[0.4em] uppercase font-medium">Vår Historia</span>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 text-foreground">
                        Konsten att skapa <br /><span className="italic text-muted-foreground">tidlöshet</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Lescent föddes ur en enkel önskan: Att skapa dofter som inte bara doftar, utan som känns.
                        En motreaktion mot det flyktiga, och en hyllning till det bestående.
                    </p>
                </div>

                {/* The Vision Section */}
                <section className="bg-secondary/5 border-y border-black/5">
                    <div className="container py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Visionen</h2>
                            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
                                <p>
                                    I en värld fylld av massproduktion och utspädda essenser, valde vi en annan väg.
                                    Vi ville gå tillbaka till parfymkonstens rötter – där oljan var bäraren av själen.
                                </p>
                                <p>
                                    Vår vision är att erbjuda en doftupplevelse som är intim, personlig och framför allt, varaktig.
                                    Vi tror att din doft är din osynliga signatur, och den förtjänar att skrivas med bläck som inte bleknar.
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
                            <span className="text-primary text-sm tracking-[0.4em] uppercase font-medium">Hantverket</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Varje droppe räknas</h2>
                            <p className="text-muted-foreground font-light leading-relaxed text-lg">
                                Våra parfymer blandas för hand med de finaste ingredienserna från världens alla hörn.
                                Från den djupa Ouden i öst till den friska Bergamotten i väst.
                                Ingen alkohol, inga onödiga tillsatser. Bara ren, outspädd perfektion.
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
                            <h2 className="font-serif text-4xl md:text-6xl">Naturens finaste essenser</h2>
                            <p className="text-lg font-light text-white/80">Utvalda med omsorg. Blandade med precision.</p>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
}
