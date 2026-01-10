import { TAGS } from 'lib/constants';
import {
    addToCartMutation,
    createCartMutation,
    editCartItemsMutation,
    removeFromCartMutation
} from './mutations';
import { getCartQuery, getProductQuery, getProductsQuery } from './queries';
import {
    Cart,
    Product,
    ShopifyAddToCartOperation,
    ShopifyCartOperation,
    ShopifyCreateCartOperation,
    ShopifyProductOperation,
    ShopifyProductsOperation,
    ShopifyRemoveFromCartOperation,
    ShopifyUpdateCartOperation
} from './types';
import { shopifyFetch } from './client';
import { MOCK_CART, MOCK_PRODUCTS } from './mock-data';

// Check if we are in mock mode (helper function)
const isMockMode = () => !process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || !process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

export async function getCart(cartId: string): Promise<Cart | undefined> {
    if (isMockMode()) return MOCK_CART;

    const res = await shopifyFetch<ShopifyCartOperation>({
        query: getCartQuery,
        variables: { cartId },
        tags: [TAGS.cart],
        cache: 'no-store'
    });

    if (!res.body.data.cart) {
        return undefined;
    }

    return res.body.data.cart;
}

export async function createCart(): Promise<Cart> {
    if (isMockMode()) return MOCK_CART;

    const res = await shopifyFetch<ShopifyCreateCartOperation>({
        query: createCartMutation,
        cache: 'no-store'
    });

    return res.body.data.cartCreate.cart;
}

export async function addToCart(
    cartId: string,
    lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
    if (isMockMode()) return MOCK_CART;

    const res = await shopifyFetch<ShopifyAddToCartOperation>({
        query: addToCartMutation,
        variables: {
            cartId,
            lines
        },
        cache: 'no-store'
    });

    return res.body.data.cartLinesAdd.cart;
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
    if (isMockMode()) return MOCK_CART;

    const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
        query: removeFromCartMutation,
        variables: {
            cartId,
            lineIds
        },
        cache: 'no-store'
    });

    return res.body.data.cartLinesRemove.cart;
}

export async function updateCart(
    cartId: string,
    lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
    if (isMockMode()) return MOCK_CART;

    const res = await shopifyFetch<ShopifyUpdateCartOperation>({
        query: editCartItemsMutation,
        variables: {
            cartId,
            lines
        },
        cache: 'no-store'
    });

    return res.body.data.cartLinesUpdate.cart;
}

export async function getProducts({
    query,
    reverse,
    sortKey
}: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
}): Promise<Product[]> {
    if (isMockMode()) return MOCK_PRODUCTS;

    const res = await shopifyFetch<ShopifyProductsOperation>({
        query: getProductsQuery,
        tags: [TAGS.products],
        variables: {
            query,
            reverse,
            sortKey
        },
        cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache'
    });

    return res.body.data.products.edges.map((edge) => edge.node);
}

export async function getProduct(handle: string): Promise<Product | undefined> {
    if (isMockMode()) {
        return MOCK_PRODUCTS.find((p) => p.handle === handle);
    }

    try {
        const res = await shopifyFetch<ShopifyProductOperation>({
            query: getProductQuery,
            tags: [TAGS.products],
            variables: {
                handle
            },
            cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache'
        });

        return res.body.data.product;
    } catch (error) {
        console.error('Error fetching product:', handle, error);
        throw error;
    }
}
