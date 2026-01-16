import { MetadataRoute } from 'next';

/**
 * Robots.txt konfiguration för sökmotorer.
 * Next.js genererar detta till /robots.txt automatiskt.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/cart/',
                    '/_next/',
                    '/admin/',
                ],
            },
        ],
        sitemap: 'https://lescent.se/sitemap.xml',
    };
}
