import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProduct } from 'lib/shopify';
import { formatPrice } from 'lib/utils';
import { AddToCart } from './add-to-cart';
import { Suspense } from 'react';

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
    const { handle } = await params;

    let product;
    try {
        product = await getProduct(handle);
    } catch (error) {
        console.error('Failed to fetch product:', handle, error);
        return notFound();
    }

    if (!product) return notFound();

    const { url, altText } = product.featuredImage || {};
    const variant = product.variants.edges[0]?.node;

    return (
        <div className="bg-background min-h-screen text-foreground pt-32 lg:pt-0">
            {/* Desktop Split Layout */}
            <div className="lg:flex">
                {/* Left: Sticky Image Gallery */}
                <div className="relative w-full lg:w-1/2 lg:h-[calc(100vh-112px)] lg:sticky lg:top-28 h-[60vh] bg-secondary/5 overflow-hidden">
                    {url && (
                        <Image
                            src={url}
                            alt={altText || product.title}
                            fill
                            className="object-cover object-center scale-110"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    )}
                    {/* Gradient Overlay for text contrast on mobile */}
                    <div className="absolute bottom-0 z-10 h-1/3 w-full bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
                </div>

                {/* Right: Scrollable Content */}
                <div className="relative w-full lg:w-1/2 px-6 py-12 lg:px-24 lg:pt-48 lg:pb-32 space-y-16">
                    {/* Header Section */}
                    <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-8 bg-primary/20" />
                            <span className="text-muted-foreground text-sm tracking-[0.3em] uppercase font-medium">
                                Inspirerad Utav
                            </span>
                        </div>

                        <h1 className="font-serif text-5xl lg:text-7xl font-medium leading-tight tracking-tight text-foreground">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-6 text-xl">
                            <p className="font-medium text-foreground">
                                {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
                            </p>
                            <span className="text-muted-foreground text-sm uppercase tracking-wide">10 ML</span>
                        </div>


                        <div
                            className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg prose prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-em:text-foreground/80"
                            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                        />

                        {/* Purchase Action */}
                        <div className="pt-8">
                            <Suspense fallback={null}>
                                {variant && (
                                    <AddToCart variantId={variant.id} availableForSale={variant.availableForSale} />
                                )}
                            </Suspense>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-16">
                        <div className="space-y-4">
                            <h3 className="font-serif text-xl text-foreground">Oljebaserad</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                100% ren parfymolja utan alkohol för en djupare, mer intim doftupplevelse som varar längre.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-serif text-xl text-foreground">Hantverk</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Varje flaska fylls för hand i Sverige med ingredienser av högsta kvalitet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
