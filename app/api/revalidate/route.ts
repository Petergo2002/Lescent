import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { TAGS } from 'lib/constants';

function revalidateStorefrontCache() {
    revalidateTag(TAGS.products, { expire: 0 });
    revalidateTag(TAGS.collections, { expire: 0 });
    revalidatePath('/');
    revalidatePath('/products');
    revalidatePath('/products/[handle]', 'page');
}

async function handleRevalidate(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const secret = searchParams.get('secret');

        if (process.env.NODE_ENV !== 'development' && secret !== process.env.CRON_SECRET) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        revalidateStorefrontCache();

        return NextResponse.json({
            revalidated: true,
            message: 'Cache cleared successfully',
            timestamp: Date.now()
        });
    } catch {
        return NextResponse.json({
            message: 'Error clearing cache'
        }, { status: 500 });
    }
}

// Manual revalidation endpoint for admin use and cron calls.
export async function GET(req: NextRequest) {
    return handleRevalidate(req);
}

export async function POST(req: NextRequest) {
    return handleRevalidate(req);
}
