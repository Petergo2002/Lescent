import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { TAGS } from 'lib/constants';

// Manual revalidation endpoint for admin use
export async function POST(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const secret = searchParams.get('secret');

        if (process.env.NODE_ENV !== 'development' && secret !== process.env.CRON_SECRET) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        // Clear all product and collection caches
        // @ts-expect-error Next.js 16 type mismatch
        revalidateTag(TAGS.products);
        // @ts-expect-error Next.js 16 type mismatch
        revalidateTag(TAGS.collections);

        return NextResponse.json({
            revalidated: true,
            message: 'Cache cleared successfully',
            timestamp: Date.now()
        });
    } catch (err) {
        return NextResponse.json({
            message: 'Error clearing cache'
        }, { status: 500 });
    }
}
