import { MetadataRoute } from 'next';
import { getProducts } from 'lib/shopify';
import { BLOG_POSTS } from '@/lib/blog';
import { SITE_URL } from 'lib/seo';

/**
 * Dynamisk sitemap som automatiskt inkluderar alla sidor och produkter.
 * Next.js genererar detta till /sitemap.xml automatiskt.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let products: { handle: string; updatedAt: string }[] = [];
    try {
        products = await getProducts({});
    } catch (e) {
        console.error('Failed to fetch products for sitemap:', e);
    }

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/products`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/parfymolja`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/parfym-utan-alkohol`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${SITE_URL}/kopvillkor`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/integritetspolicy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${SITE_URL}/products/${product.handle}`,
        lastModified: new Date(product.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...productPages, ...blogPages];
}
