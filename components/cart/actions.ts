'use server';

import { addToCart, createCart, removeFromCart, updateCart } from 'lib/shopify';
import { MAINTENANCE_COPY, MAINTENANCE_MODE } from 'lib/site-status';
import { revalidatePath } from 'next/cache';
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

export async function addItem(_prevState: unknown, selectedVariantId: string | undefined) {
    if (MAINTENANCE_MODE) {
        return MAINTENANCE_COPY.orderingPausedMessage;
    }

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
    } catch {
        // If the cart is invalid (e.g. expired), create a new one
        cart = await createCartAndSetCookie();
        cart = await addToCart(cart.id, [{ merchandiseId: selectedVariantId, quantity: 1 }]);
    }

    revalidatePath('/', 'layout');
    return cart;
}

export async function updateItemQuantity(
    _prevState: unknown,
    payload: {
        lineId: string;
        variantId: string;
        quantity: number;
    }
) {
    if (MAINTENANCE_MODE) {
        return MAINTENANCE_COPY.orderingPausedMessage;
    }

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
        revalidatePath('/', 'layout');
    } catch {
        return 'Error updating item quantity';
    }
}

export async function removeItem(_prevState: unknown, lineId: string) {
    if (MAINTENANCE_MODE) {
        return MAINTENANCE_COPY.orderingPausedMessage;
    }

    const cartId = await getCartId();

    if (!cartId) {
        return 'Missing cart ID';
    }

    try {
        await removeFromCart(cartId, [lineId]);
        revalidatePath('/', 'layout');
    } catch {
        return 'Error removing item from cart';
    }
}
