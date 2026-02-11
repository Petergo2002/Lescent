import { Product } from "lib/shopify/types";

export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Lescent',
        url: 'https://lescent.se',
        logo: 'https://lescent.se/Logotype/trasnparentlogo.png',
        description: 'Exklusiva oljebaserade parfymer handgjorda i Sverige.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Borås',
            addressCountry: 'SE',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'lescentsweden@hotmail.com',
            contactType: 'customer service',
        },
        sameAs: [
            // Lägg till sociala medier här om de finns
            // 'https://instagram.com/lescent',
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function ProductSchema({ product }: { product: Product }) {
    const variant = product.variants.edges[0]?.node;
    const price = product.priceRange.minVariantPrice;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.featuredImage?.url,
        brand: {
            '@type': 'Brand',
            name: 'Lescent',
        },
        offers: {
            '@type': 'Offer',
            price: price.amount,
            priceCurrency: price.currencyCode,
            availability: variant?.availableForSale
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            url: `https://lescent.se/products/${product.handle}`,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function WebsiteSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Lescent',
        url: 'https://lescent.se',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://lescent.se/products?q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
