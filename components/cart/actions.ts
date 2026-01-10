'use server';

import { addToCart, createCart, getCart, removeFromCart, updateCart } from 'lib/shopify';
import { cookies } from 'next/headers';

export async function getCartId() {
    const cookieStore = await cookies();
    return cookieStore.get('cartId')?.value;
}

export async function createCartAndSetCookie() {
    const cart = await createCart();
    const cookieStore = await cookies();
    cookieStore.set('cartId', cart.id);
    return cart;
}

export async function addItem(prevState: any, selectedVariantId: string | undefined) {
    let cartId = await getCartId();
    let cart;

    if (!selectedVariantId) {
        return 'Error adding item to cart';
    }

    try {
        if (!cartId) {
            // Create a new cart if one doesn't exist
            cart = await createCartAndSetCookie();
            cartId = cart.id;
        }

        cart = await addToCart(cartId, [{ merchandiseId: selectedVariantId, quantity: 1 }]);
    } catch (e) {
        console.error('Error adding to cart:', e);
        // If the cart is invalid (e.g. expired), create a new one
        cart = await createCartAndSetCookie();
        cart = await addToCart(cart.id, [{ merchandiseId: selectedVariantId, quantity: 1 }]);
    }

    return cart;
}

export async function updateItemQuantity(
    prevState: any,
    payload: {
        lineId: string;
        variantId: string;
        quantity: number;
    }
) {
    const cartId = await getCartId();

    if (!cartId) {
        return 'Missing cart ID';
    }

    const { lineId, variantId, quantity } = payload;

    try {
        if (quantity === 0) {
            await removeFromCart(cartId, [lineId]);
        } else {
            await updateCart(cartId, [
                {
                    id: lineId,
                    merchandiseId: variantId,
                    quantity
                }
            ]);
        }
    } catch (e) {
        return 'Error updating item quantity';
    }
}

export async function removeItem(prevState: any, lineId: string) {
    const cartId = await getCartId();

    if (!cartId) {
        return 'Missing cart ID';
    }

    try {
        await removeFromCart(cartId, [lineId]);
    } catch (e) {
        return 'Error removing item from cart';
    }
}
