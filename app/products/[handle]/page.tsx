import { Suspense } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SchemaMarkup } from 'components/SchemaMarkup';
import { getProduct } from 'lib/shopify';
import { getVersionedProductImageUrl } from 'lib/shopify/images';
import {
    buildBreadcrumbSchema,
    buildFaqSchema,
    buildProductNotesText,
    buildProductSchema,
    generateMetadata as generateSeoMetadata,
    getProductFaqs,
    getProductImageAlt,
    getProductPriceText,
    getProductSeoContent,
    getProductTagline,
    SITE_URL,
} from 'lib/seo';
import { AddToCart } from './add-to-cart';

type Props = {
    params: Promise<{ handle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { handle } = await params;

    try {
        const product = await getProduct(handle);

        if (!product) {
            return {
                title: 'Produkt ej hittad – Lescent',
                description: 'Produkten kunde inte hittas.',
                robots: {
                    index: false,
                    follow: true,
                },
            };
        }

        // All produktspecifik metadata hämtas från den centrala SEO-konfigurationen.
        return generateSeoMetadata('product', { product });
    } catch {
        return {
            title: 'Produkt ej hittad – Lescent',
            description: 'Produkten kunde inte hittas.',
            robots: {
                index: false,
                follow: true,
            },
        };
    }
}

export default async function ProductPage({ params }: Props) {
    const { handle } = await params;

    let product;
    try {
        product = await getProduct(handle);
    } catch (error) {
        console.error('Failed to fetch product:', handle, error);
        return notFound();
    }

    if (!product) {
        return notFound();
    }

    const seoContent = getProductSeoContent(product);
    const faqs = getProductFaqs(product);
    const variant = product.variants.edges[0]?.node;
    const imageUrl = getVersionedProductImageUrl(product);

    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: 'Hem', url: SITE_URL },
        { name: 'Parfymer', url: `${SITE_URL}/products` },
        { name: product.title, url: `${SITE_URL}/products/${product.handle}` },
    ]);

    return (
        <div className="bg-background min-h-screen text-foreground pt-32 lg:pt-0">
            {/* Produkt-, FAQ- och brödsmuleschemat hjälper Google att förstå sidan semantiskt. */}
            <SchemaMarkup data={buildProductSchema(product)} />
            <SchemaMarkup data={buildFaqSchema(product)} />
            <SchemaMarkup data={breadcrumbSchema} />

            <div className="lg:flex">
                {/* Bildytan hålls sticky på desktop för att produktinnehåll och SEO-text ska kunna växa. */}
                <div className="relative w-full lg:w-1/2 lg:h-[calc(100vh-112px)] lg:sticky lg:top-28 h-[60vh] bg-background overflow-hidden">
                    {imageUrl && (
                        <Image
                            src={imageUrl}
                            alt={getProductImageAlt(product)}
                            fill
                            className="object-contain object-center p-8 pb-20 mix-blend-multiply md:p-12 lg:p-16"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    )}
                    <p className="absolute bottom-0 left-0 right-0 z-20 border-t border-black/10 bg-background/95 px-5 py-3 text-center text-[11px] font-light leading-5 text-muted-foreground/80 backdrop-blur-sm md:bottom-8 md:left-10 md:right-10 md:border-0 md:bg-transparent md:p-0 md:text-[10px] md:leading-relaxed md:text-muted-foreground/70 md:backdrop-blur-none">
                        Produktbilden är en visualisering. Etikett och förpackningsdetaljer kan skilja sig något från faktisk produkt.
                    </p>
                    <div className="absolute bottom-0 z-10 h-1/3 w-full bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
                </div>

                <div className="relative w-full lg:w-1/2 px-6 py-12 lg:px-24 lg:pt-48 lg:pb-32 space-y-16">
                    {/* Här ligger den kommersiella primärinformationen nära toppen för både användare och sökmotorer. */}
                    <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-8 bg-primary/20" />
                            <span className="text-muted-foreground text-sm tracking-[0.3em] uppercase font-medium">
                                Inspirerad doftprofil
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground">
                            {product.title}
                        </h1>

                        <p className="product-tagline text-sm uppercase tracking-[0.25em] text-muted-foreground">
                            {getProductTagline(product)}
                        </p>

                        <div
                            className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg prose prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-em:text-foreground/80"
                            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                        />

                        <p className="max-w-lg rounded-sm border border-black/10 bg-white/60 px-4 py-3 text-xs font-light leading-relaxed text-muted-foreground">
                            En fristående doftprofil inspirerad av välkända noter. Lescent är inte kopplat till, godkänt av eller producerat av något designer- eller varumärkeshus.
                        </p>

                        <div className="flex items-center gap-6 text-xl">
                            <p className="font-medium text-foreground">
                                {getProductPriceText(product)}
                            </p>
                            <span className="text-muted-foreground text-sm uppercase tracking-wide">10 ML</span>
                        </div>

                        <div className="pt-8">
                            <Suspense fallback={null}>
                                {variant && (
                                    <AddToCart variantId={variant.id} availableForSale={variant.availableForSale} />
                                )}
                            </Suspense>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 border-t border-black/10 pt-16 md:grid-cols-2">
                        <div className="space-y-4">
                            <p className="font-serif text-xl text-foreground">Oljebaserad parfym</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                100% koncentrerad parfymolja utan alkohol för en djupare och mjukare doftupplevelse som håller längre på huden.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p className="font-serif text-xl text-foreground">Handgjord i Sverige</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Varje flaska fylls med omsorg för att ge dig långvarig doft, hög koncentration och en lyxig känsla i varje applicering.
                            </p>
                        </div>
                    </div>

                    {/* Detta block ger varje produktsida mer indexerbart innehåll kring doft, användning och sökintention. */}
                    <section className="seo-text space-y-6 border-t border-black/10 pt-16">
                        <h2 className="font-serif text-3xl text-foreground">Om denna doftinspiration</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {product.title} är vår oljebaserade doftprofil inspirerad av välkända noter inom samma doftfamilj som {seoContent.originalName} från {seoContent.brand}. Som alla våra parfymoljor är den fri från alkohol, vilket ger en mjukare och djupare doftupplevelse som håller längre på huden. Perfekt för dig som söker en långvarig parfymolja online till rätt pris.
                        </p>

                        <h3 className="font-serif text-2xl text-foreground">Doftnoter</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {buildProductNotesText(product)}
                        </p>

                        <h3 className="font-serif text-2xl text-foreground">Varför oljebaserad parfym?</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Oljebaserade parfymer sitter längre på huden än alkoholbaserade alternativ eftersom oljan binder sig till hudens naturliga fukt. Du behöver mindre produkt för samma effekt, och doften utvecklas mjukare under dagen utan den skarpa alkoholöppningen som många traditionella parfymer har.
                        </p>
                    </section>

                    {/* FAQ-blocket återanvänder samma frågor som FAQ-schemat för att hålla innehåll och markup synkade. */}
                    <section className="product-faq space-y-6 border-t border-black/10 pt-16">
                        <h2 className="font-serif text-3xl text-foreground">Vanliga frågor</h2>

                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <details key={faq.question} className="rounded-2xl border border-black/10 bg-secondary/5 px-5 py-4">
                                    <summary className="cursor-pointer list-none font-medium text-foreground">
                                        {faq.question}
                                    </summary>
                                    <p className="pt-3 text-sm leading-relaxed text-muted-foreground">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
