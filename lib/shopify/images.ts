import type { Product } from './types';

export function getVersionedProductImageUrl(product: Pick<Product, 'featuredImage' | 'updatedAt'>) {
    const imageUrl = product.featuredImage?.url;

    if (!imageUrl || !product.updatedAt) {
        return imageUrl;
    }

    try {
        const url = new URL(imageUrl);
        url.searchParams.set('product_updated_at', String(Date.parse(product.updatedAt) || product.updatedAt));
        return url.toString();
    } catch {
        const separator = imageUrl.includes('?') ? '&' : '?';
        return `${imageUrl}${separator}product_updated_at=${encodeURIComponent(product.updatedAt)}`;
    }
}
