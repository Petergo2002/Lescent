import { MetadataRoute } from 'next';
import { getProducts } from 'lib/shopify';

/**
 * Dynamisk sitemap som automatiskt inkluderar alla sidor och produkter.
 * Next.js genererar detta till /sitemap.xml automatiskt.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://lescent.se';

    // Hämta alla produkter från Shopify
    let products: { handle: string; updatedAt: string }[] = [];
    try {
        products = await getProducts({});
    } catch (e) {
        console.error('Failed to fetch products for sitemap:', e);
    }

    // Statiska sidor med prioritet baserat på viktighet
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/kopvillkor`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/integritetspolicy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // Dynamiska produktsidor från Shopify
    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/products/${product.handle}`,
        lastModified: new Date(product.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Blogginlägg (statiska slugs)
    const blogSlugs = [
        'alkohol-vs-oljebaserad-parfym',
        'hur-applicerar-man-parfymolja',
        'topp-hjarta-basnoter-forklarat',
        'hitta-din-signaturdoft',
    ];
    const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...productPages, ...blogPages];
}
