import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        qualities: [75, 90],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                pathname: '/s/files/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Robots-Tag', value: 'index, follow' },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/products/ambre-suit',
                destination: '/products/ambre-nuit',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
