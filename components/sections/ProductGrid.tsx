import Link from 'next/link';
import { Droplets, Leaf, ArrowRight } from 'lucide-react';
import { Product } from 'lib/shopify/types';
import { ProductCard } from 'components/ui/product-card';
import { Button } from 'components/ui/button';

// ─── Category Teaser Card ──────────────────────────────────────────────────
// Replaces the old bare underlined footnote links with proper clickable cards.

function CategoryTeaserCard({
    href,
    icon,
    title,
    description,
}: {
    href: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <Link href={href} className="group block">
            <div className="flex items-center gap-6 rounded-sm border border-evergreen/5 bg-white/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-evergreen/20 hover:bg-white hover:shadow-2xl hover:shadow-evergreen/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-evergreen/5 transition-colors group-hover:bg-evergreen group-hover:text-white">
                    <div className="transition-transform duration-500 group-hover:scale-110">
                        {icon}
                    </div>
                </div>
                <div className="flex-1">
                    <p className="font-serif text-lg font-medium text-foreground tracking-tight">{title}</p>
                    <p className="mt-1 text-xs font-light leading-relaxed text-muted-foreground/80">{description}</p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-evergreen/10 transition-all group-hover:translate-x-1 group-hover:bg-evergreen group-hover:text-white">
                    <ArrowRight className="h-3 w-3" />
                </div>
            </div>
        </Link>
    );
}

// ─── ProductGrid ───────────────────────────────────────────────────────────

export function ProductGrid({ products }: { products: Product[] }) {
    return (
        <section className="container relative z-10 py-24 md:py-40">
            {/* Section Header */}
            <div className="mb-20 space-y-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-[1px] w-10 bg-evergreen/20" />
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-evergreen/60">
                        Utvalt För Dig
                    </span>
                    <div className="h-[1px] w-10 bg-evergreen/20" />
                </div>
                <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-foreground">
                    Upptäck Dofterna
                </h2>
                <p className="mx-auto max-w-2xl font-light leading-relaxed text-muted-foreground/90 md:text-lg">
                    Vårt hantverk förenar urgamla traditioner med modern lyx. Upplev skillnaden med ren parfymolja.
                </p>
                <p className="mx-auto max-w-xl text-xs font-light leading-relaxed tracking-wide text-muted-foreground/70">
                    Fristående doftprofiler inspirerade av välkända doftfamiljer.
                </p>
            </div>

            {/* Product Cards */}
            <div className="mb-24 grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* ─ Category Teaser Strip */}
            <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                <CategoryTeaserCard
                    href="/parfymolja"
                    icon={<Droplets className="h-5 w-5" />}
                    title="Signatur Parfymolja"
                    description="Koncentrerade, oljebaserade dofter som stannar med dig hela dagen. 100% ren essens."
                />
                <CategoryTeaserCard
                    href="/parfym-utan-alkohol"
                    icon={<Leaf className="h-5 w-5" />}
                    title="Alkoholfritt & Milt"
                    description="Vänlig mot både huden och naturen. En sofistikerad doftupplevelse utan irritation."
                />
            </div>

            {/* Primary CTA */}
            <div className="flex justify-center pt-8">
                <Link href="/products">
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-14 rounded-full px-12 text-[11px] font-bold tracking-[0.2em] uppercase border-evergreen/20 hover:bg-evergreen hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-evergreen/10"
                    >
                        Utforska Hela Kollektionen
                    </Button>
                </Link>
            </div>
        </section>
    );
}
