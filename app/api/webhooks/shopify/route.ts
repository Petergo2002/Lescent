import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { TAGS } from 'lib/constants';
import crypto from 'crypto';

// Force Node.js runtime for crypto support
export const runtime = 'nodejs';

// Shopify webhook endpoint to clear cache when products change
export async function POST(req: NextRequest) {
    try {
        const body = await req.text();
        const topic = req.headers.get('x-shopify-topic');
        const hmac = req.headers.get('x-shopify-hmac-sha256');
        const secret = process.env.SHOPIFY_WEBHOOK_SECRET;

        // Verify webhook is from Shopify
        if (secret && hmac) {
            const hash = crypto
                .createHmac('sha256', secret)
                .update(body, 'utf8')
                .digest('base64');

            if (hash !== hmac) {
                console.error('Invalid webhook signature');
                return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
            }
        } else if (!secret) {
            console.warn('SHOPIFY_WEBHOOK_SECRET not set, skipping verification');
        }

        // Log the webhook for debugging
        console.log('Shopify webhook received:', topic);

        // Revalidate product cache based on webhook topic
        if (topic?.includes('products')) {
            // @ts-expect-error Next.js 16 type mismatch
            revalidateTag(TAGS.products);
            console.log('Product cache cleared');
        }

        if (topic?.includes('collections')) {
            // @ts-expect-error Next.js 16 type mismatch
            revalidateTag(TAGS.collections);
            console.log('Collection cache cleared');
        }

        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (err) {
        console.error('Webhook error:', err);
        return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
    }
}
