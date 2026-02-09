'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, ArrowRight } from 'lucide-react';
import { Product } from 'lib/shopify/types';
import { formatPrice } from 'lib/utils';

export function ProductCard({ product }: { product: Product }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-evergreen/10 bg-white p-3 transition-shadow duration-300 hover:shadow-xl">
            {/* Badges */}
            <div className="absolute left-4 top-4 z-10">
                <span className="rounded-full border border-evergreen/10 bg-white/95 px-3 py-1 text-xs font-medium tracking-wide text-evergreen">
                    NYHET
                </span>
            </div>

            <button className="absolute right-4 top-4 z-10 rounded-full bg-white/95 p-2 text-black transition-colors duration-200 hover:bg-imperial-blue hover:text-white">
                <Heart className="h-4 w-4" />
            </button>

            {/* Image */}
            <Link href={`/products/${product.handle}`} className="relative block aspect-[3/4] w-full overflow-hidden rounded-xl bg-eggshell/50">
                {product.featuredImage && (
                    <Image
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText || product.title}
                        fill
                        className="object-cover object-center scale-110 transition-transform duration-700 ease-out group-hover:scale-125"
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    />
                )}
            </Link>

            {/* Content */}
            <div className="mt-4 space-y-2 px-1">
                <h3 className="font-serif text-lg font-medium text-foreground transition-colors group-hover:text-imperial-blue">
                    <Link href={`/products/${product.handle}`}>
                        {product.title}
                    </Link>
                </h3>
                <p className="line-clamp-1 text-xs text-muted-foreground font-light tracking-wide">
                    {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-base font-medium text-evergreen">
                            {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
                        </span>
                    </div>

                    <Link href={`/products/${product.handle}`}>
                        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-evergreen/10 bg-evergreen text-white transition-colors duration-200 hover:bg-imperial-blue">
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
