import { getProducts } from 'lib/shopify';
import { Hero } from 'components/sections/Hero';
import { FeatureSection } from 'components/sections/FeatureSection';
import { ProductGrid } from 'components/sections/ProductGrid';
import { TimelineSection } from 'components/sections/TimelineSection';

import { Testimonials } from 'components/sections/Testimonials';

export const metadata = {
    description: 'Upptäck din signaturdoft med Lescents exklusiva kollektion av handgjorda oljebaserade parfymer. Alkoholfria, långvariga och skapade i Sverige.',
    openGraph: {
        type: 'website',
        title: 'Lescent | Exklusiva Oljebaserade Parfymer',
        description: 'Handgjorda oljebaserade parfymer för den moderna människan. Upptäck din signaturdoft.',
        images: ['/og-image.jpg'],
    },
};

import { OrganizationSchema, WebsiteSchema } from 'components/seo/JsonLd';

export default async function Home() {
    const products = (await getProducts({ sortKey: 'CREATED_AT', reverse: true })).slice(0, 4);

    return (
        <>
            <OrganizationSchema />
            <WebsiteSchema />
            <Hero />
            <FeatureSection />
            <ProductGrid products={products} />
            <Testimonials />
            <TimelineSection />
        </>
    );
}
