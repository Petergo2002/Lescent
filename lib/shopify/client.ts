import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { isShopifyError } from 'lib/type-guards';
import { ensureStartsWith } from 'lib/utils';
import { headers } from 'next/headers';

// function to ensure env vars are read at runtime
const getShopifyConfig = () => {
    const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
        ? ensureStartsWith(process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN, 'https://')
        : '';
    const endpoint = `${domain}/api/2024-07/graphql.json`;
    const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;

    return { domain, endpoint, key };
};

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function shopifyFetch<T>({
    cache = 'force-cache',
    headers,
    query,
    tags,
    variables
}: {
    cache?: RequestCache;
    headers?: HeadersInit;
    query: string;
    tags?: string[];
    variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
    const { domain, endpoint, key } = getShopifyConfig();

    try {
        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': key,
                ...headers
            },
            body: JSON.stringify({
                ...(query && { query }),
                ...(variables && { variables })
            }),
            cache,
            ...(tags && { next: { tags } })
        });

        const body = await result.json();

        if (body.errors) {
            throw body.errors[0];
        }

        return {
            status: result.status,
            body
        };
    } catch (e) {
        // Log the exact error content
        console.error('Shopify Fetch Error V2:');
        console.error('Message:', e instanceof Error ? e.message : (e as any).message || e);
        console.error('Stack:', e instanceof Error ? e.stack : undefined);
        console.error('Request Details:', {
            endpoint, // Check if this is empty/malformed
            query,
            domain,
            hasKey: !!key
        });

        if (isShopifyError(e)) {
            throw {
                status: e.status || 500,
                message: e.message,
                query
            };
        }

        throw {
            error: e,
            query
        };
    }
}
