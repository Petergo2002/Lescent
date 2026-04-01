import Link from 'next/link';
import { Clock, Droplets, Leaf, Shield, ChevronDown, ArrowRight, Home } from 'lucide-react';
import { Product } from 'lib/shopify/types';
import { ProductCard } from 'components/ui/product-card';
import { PageAmbience } from 'components/ui/page-ambience';
import { CategoryKey, getCategoryFaqs } from 'lib/seo';

// ─── Types ────────────────────────────────────────────────────────────────────

type Benefit = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

type ContentSection = {
    heading: string;
    paragraphs: string[];
};

type CategoryConfig = {
    badge: string;
    title: string;
    lead: string;
    benefits: Benefit[];
    content: ContentSection;
    breadcrumbLabel: string;
};

type Props = {
    category: CategoryKey;
    products: Product[];
};

// ─── Category Content Map ─────────────────────────────────────────────────────

// All copy lives here — pages stay clean and just pass the category key.
const CATEGORY_CONFIG: Record<CategoryKey, CategoryConfig> = {
    parfymolja: {
        badge: 'Oljebaserade Dofter',
        title: 'Parfymolja Online',
        lead: 'Koncentrerade, alkoholfria parfymer som sitter kvar i 8–12 timmar. Inspirerade av världens mest eftertraktade dofter — i ett format som är mjukare, prisvärt och lätt att bära varje dag.',
        benefits: [
            {
                icon: <Clock className="h-5 w-5 text-evergreen" />,
                title: '8–12 Timmar',
                description: 'Oljan binder till hudens fukt och ger en doftupplevelse som håller hela dagen.',
            },
            {
                icon: <Droplets className="h-5 w-5 text-evergreen" />,
                title: 'Ingen Alkohol',
                description: 'Utan den uttorkande alkoholen öppnar sig doften mjukare och mer naturligt.',
            },
            {
                icon: <Shield className="h-5 w-5 text-evergreen" />,
                title: 'Skonsam mot huden',
                description: 'Oljebasen är mild och lämplig för alla hudtyper, inklusive känslig hud.',
            },
        ],
        content: {
            heading: 'Varför parfymolja?',
            paragraphs: [
                'Parfymolja har blivit ett självklart val för dig som vill ha en mer koncentrerad, långvarig och hudnära doftupplevelse. Till skillnad från traditionell sprayparfym innehåller oljebaserad parfym ingen uttorkande alkohol, vilket gör att doften utvecklas mjukare och sitter kvar längre på huden.',
                'Hos Lescent hittar du parfymolja online inspirerad av några av världens mest eftertraktade dofter, men i ett format som känns mer intimt, prisvärt och lätt att bära varje dag. Våra parfymoljor passar både dig som söker en ny signaturdoft och dig som vill bygga en hel doftgarderob med olika uttryck för vardag, kväll och säsong.',
                'Eftersom oljan binder bättre till hudens naturliga fukt räcker en liten mängd långt — ett smart val för både hållbarhet och ekonomi.',
            ],
        },
        breadcrumbLabel: 'Parfymolja',
    },
    parfymUtanAlkohol: {
        badge: 'Alkoholfria Parfymer',
        title: 'Parfym Utan Alkohol',
        lead: 'Skonsamma dofter för känslig hud, utan kompromiss på intensitet eller hållbarhet. Upplev hur parfym utan alkohol ger mjukare doftstart och längre välmående på huden.',
        benefits: [
            {
                icon: <Leaf className="h-5 w-5 text-evergreen" />,
                title: 'Känslig Hud',
                description: 'Perfekt för dig med torr, känslig eller reaktiv hud. Utan irriterande etanol.',
            },
            {
                icon: <Droplets className="h-5 w-5 text-evergreen" />,
                title: 'Mjukare Doftstart',
                description: 'Utan den kraftiga alkoholdunsten öppnar sig doften gradvis och naturligt.',
            },
            {
                icon: <Clock className="h-5 w-5 text-evergreen" />,
                title: 'Längre Hållbarhet',
                description: 'Oljebaserade dofter avdunstar långsammare och sitter kvar i 8–12 timmar.',
            },
        ],
        content: {
            heading: 'Fördelarna med alkoholfri parfym',
            paragraphs: [
                'Parfym utan alkohol är ett starkt alternativ för dig som vill bära doft utan att kompromissa med komforten på huden. Många upplever att alkoholbaserad parfym kan kännas skarp, uttorkande eller irriterande — särskilt vid daglig användning eller om huden redan är känslig.',
                'En oljebaserad parfym är däremot mildare i appliceringen och låter doften öppna sig långsamt i stället för att försvinna snabbt efter en kraftig alkoholstart. Hos Lescent fokuserar vi på parfymoljor som ger en mjuk, följsam och långvarig doftupplevelse.',
                'Det gör alkoholfri parfym till ett naturligt val för dig som vill använda doft nära pulspunkterna varje dag — utan att det blir stickigt eller överväldigande.',
            ],
        },
        breadcrumbLabel: 'Parfym Utan Alkohol',
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function CategoryPageLayout({ category, products }: Props) {
    const config = CATEGORY_CONFIG[category];
    const faqs = getCategoryFaqs(category);

    // Filter and limit to 3 products for the category-specific display
    const taggedProducts = products.filter((p) => {
        const tags = (p.tags || []).map((t) => t.toLowerCase());
        if (category === 'parfymolja') return tags.includes('parfymolja');
        if (category === 'parfymUtanAlkohol') return tags.includes('alkoholfritt');
        return true;
    });

    // If for some reason we have no tagged products, fallback to first 3 to avoid empty page
    const filteredProducts = taggedProducts.length > 0
        ? taggedProducts.slice(0, 3)
        : products.slice(0, 3);

    return (
        <div className="relative isolate min-h-screen pt-32 pb-24 md:pt-40">
            <PageAmbience />

            {/* ── Breadcrumb ────────────────────────────────────────────── */}
            <nav
                aria-label="Brödsmulor"
                className="container flex items-center gap-2 pt-32 pb-0 text-xs text-muted-foreground md:pt-40"
            >
                <Link
                    href="/"
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                >
                    <Home className="h-3 w-3" />
                    Hem
                </Link>
                <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
                <span className="text-foreground">{config.breadcrumbLabel}</span>
            </nav>

            {/* ── Hero ──────────────────────────────────────────────────── */}
            <header className="container pt-10 pb-16 md:pb-20">
                <div className="max-w-3xl space-y-5">
                    {/* Category badge — real label, not "SEO-kategori" */}
                    <span className="inline-flex items-center gap-2 rounded-full border border-evergreen/20 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-[0.25em] uppercase text-evergreen">
                        {config.badge}
                    </span>

                    <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-6xl">
                        {config.title}
                    </h1>

                    <p className="text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                        {config.lead}
                    </p>
                </div>
            </header>

            {/* ── Benefits Strip ────────────────────────────────────────── */}
            <section className="container pb-16" aria-label="Fördelar">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {config.benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="flex items-start gap-4 rounded-2xl border border-evergreen/10 bg-white/80 p-5 backdrop-blur-sm"
                        >
                            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-evergreen/8">
                                {benefit.icon}
                            </div>
                            <div>
                                <p className="font-medium text-foreground">{benefit.title}</p>
                                <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Product Grid ──────────────────────────────────────────── */}
            <section className="container pb-24" aria-label="Kollektionen">
                <div className="mb-10 flex items-center gap-4">
                    <div className="h-px flex-1 bg-evergreen/10" />
                    <span className="text-xs font-medium tracking-[0.3em] uppercase text-evergreen/70">
                        Kollektionen
                    </span>
                    <div className="h-px flex-1 bg-evergreen/10" />
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4 py-24 text-center">
                        <p className="text-muted-foreground">Inga produkter att visa just nu.</p>
                        <Link
                            href="/products"
                            className="text-sm font-medium text-evergreen underline underline-offset-4 hover:text-imperial-blue"
                        >
                            Se hela kollektionen
                        </Link>
                    </div>
                )}
            </section>

            {/* ── SEO Content Section ───────────────────────────────────── */}
            <section className="border-t border-evergreen/10 bg-white/50">
                <div className="container py-16 md:py-20">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                                {config.content.heading}
                            </h2>
                        </div>
                        <div className="space-y-5">
                            {config.content.paragraphs.map((para, i) => (
                                <p
                                    key={i}
                                    className="font-light leading-relaxed text-muted-foreground"
                                >
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ Accordion ─────────────────────────────────────────── */}
            <section className="container py-16 md:py-24">
                <div className="mx-auto max-w-2xl">
                    <div className="mb-10 text-center">
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground">
                            Vanliga Frågor
                        </h2>
                        <p className="mt-3 text-sm font-light text-muted-foreground">
                            Allt du behöver veta om {config.breadcrumbLabel.toLowerCase()}.
                        </p>
                    </div>

                    <div className="divide-y divide-evergreen/10 rounded-2xl border border-evergreen/10 bg-white/80 overflow-hidden">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-sm font-medium text-foreground hover:bg-evergreen/3 transition-colors [&::-webkit-details-marker]:hidden">
                                    {faq.question}
                                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-5 pt-1">
                                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                                        {faq.answer}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ────────────────────────────────────────────── */}
            <section className="container pb-24">
                <div className="relative overflow-hidden rounded-3xl bg-evergreen px-8 py-12 text-center md:px-16">
                    {/* Subtle decorative gradient */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(60%_50%_at_50%_0%,hsl(43_58%_92%/0.4),transparent)]"
                    />
                    <p className="relative mb-2 text-xs font-medium tracking-[0.3em] uppercase text-eggshell/60">
                        Utforska mer
                    </p>
                    <h2 className="relative mb-4 font-serif text-3xl font-medium text-eggshell md:text-4xl">
                        Se Hela Kollektionen
                    </h2>
                    <p className="relative mb-8 font-light text-eggshell/70">
                        Alla våra handgjorda parfymoljor, på ett och samma ställe.
                    </p>
                    <Link
                        href="/products"
                        className="relative inline-flex items-center gap-2 rounded-full bg-eggshell px-8 py-3.5 text-sm font-medium tracking-wide text-evergreen transition-all hover:bg-white hover:shadow-lg"
                    >
                        Utforska alla dofter
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
