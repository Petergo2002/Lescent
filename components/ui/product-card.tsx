'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShoppingBag, Check, Loader2 } from 'lucide-react';
import { Product } from 'lib/shopify/types';
import { getVersionedProductImageUrl } from 'lib/shopify/images';
import { getProductImageAlt } from 'lib/seo';
import { formatPrice, cn } from 'lib/utils';
import { addItem } from 'components/cart/actions';

export function ProductCard({ product }: { product: Product }) {
    const [isPending, startTransition] = useTransition();
    const [isAdded, setIsAdded] = useState(false);
    const router = useRouter();
    
    const variantId = product.variants.edges[0]?.node.id;
    const imageUrl = getVersionedProductImageUrl(product);

    const handleQuickAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!variantId || isPending) return;

        startTransition(async () => {
            const result = await addItem(null, variantId);
            if (typeof result !== 'string') {
                setIsAdded(true);
                router.refresh();
                setTimeout(() => setIsAdded(false), 2000);
            }
        });
    };

    return (
        <div className="group relative flex flex-col animate-in fade-in duration-700">
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-background">
                {/* Badges */}
                <div className="absolute left-3 top-3 z-10 pointer-events-none">
                    {product.tags.includes('storsäljare') && (
                        <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-evergreen shadow-sm">
                            Best Seller
                        </span>
                    )}
                </div>

                <Link href={`/products/${product.handle}`} className="relative block h-full w-full">
                    {imageUrl && (
                        <Image
                            src={imageUrl}
                            alt={getProductImageAlt(product)}
                            fill
                            className="object-contain object-center p-6 mix-blend-multiply transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03] sm:p-7"
                            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        />
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                </Link>

                {/* Quick Actions Container - Desktop Only (Hover) */}
                <div className="absolute bottom-4 left-1/2 hidden lg:flex w-[calc(100%-2.5rem)] -translate-x-1/2 flex-col gap-2 transition-all duration-700 ease-out translate-y-6 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto">
                    {/* Quick Add Button */}
                    <button 
                        onClick={handleQuickAdd}
                        disabled={isPending}
                        className={cn(
                            "flex w-full items-center justify-center gap-3 py-3 text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-2xl backdrop-blur-sm",
                            isAdded 
                                ? "bg-custom-green/90 text-white" 
                                : "bg-black/80 text-white hover:bg-black"
                        )}
                    >
                        {isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : isAdded ? (
                            <>
                                <Check className="h-4 w-4" />
                                <span>TILLAGD</span>
                            </>
                        ) : (
                            <>
                                <ShoppingBag className="h-4 w-4" />
                                <span>KÖP NU</span>
                            </>
                        )}
                    </button>

                    {/* View Details Sub-button */}
                    <Link 
                        href={`/products/${product.handle}`}
                        className="flex w-full items-center justify-center gap-2 bg-white/95 py-2 text-[9px] font-bold tracking-[0.2em] uppercase text-black backdrop-blur-md transition-all hover:bg-white border border-black/5"
                    >
                        Visa Produkt
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="mt-6 flex flex-col items-center text-center space-y-1.5 px-2">
                <Link href={`/products/${product.handle}`}>
                    <h3 className="font-serif text-xl font-medium tracking-tight text-foreground decoration-evergreen/30 underline-offset-8 group-hover:underline">
                        {product.title}
                    </h3>
                </Link>
                
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/80 font-medium pb-1 text-center">
                    Inspirerad doftprofil
                </p>

                <div className="flex flex-col items-center gap-4 w-full pt-1">
                    <span className="text-sm font-bold tracking-widest text-evergreen">
                        {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
                    </span>

                    {/* Mobile Quick Actions - Visible only on mobile/touch */}
                    <div className="flex flex-col gap-2 w-full lg:hidden pt-2">
                        <button 
                            onClick={handleQuickAdd}
                            disabled={isPending}
                            className={cn(
                                "flex w-full items-center justify-center gap-3 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300",
                                isAdded 
                                    ? "bg-custom-green text-white" 
                                    : "bg-black text-white active:bg-black/90"
                            )}
                        >
                            {isPending ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : isAdded ? (
                                <>
                                    <Check className="h-4 w-4" />
                                    <span>TILLAGD</span>
                                </>
                            ) : (
                                <>
                                    <ShoppingBag className="h-4 w-4" />
                                    <span>KÖP NU</span>
                                </>
                            )}
                        </button>
                        <Link 
                            href={`/products/${product.handle}`}
                            className="flex w-full items-center justify-center gap-2 border border-black/10 py-2.5 text-[9px] font-bold tracking-[0.2em] uppercase text-black/60 active:bg-black/5 transition-colors"
                        >
                            Visa Produkt
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
