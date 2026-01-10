import { getProducts } from 'lib/shopify';
import { Hero } from 'components/sections/Hero';
import { FeatureSection } from 'components/sections/FeatureSection';
import { ProductGrid } from 'components/sections/ProductGrid';
import { TimelineSection } from 'components/sections/TimelineSection';

import { Testimonials } from 'components/sections/Testimonials';

export const metadata = {
    description: 'High-performance ecommerce store built with Next.js 15 and Shopify.',
    openGraph: {
        type: 'website'
    }
};

export default async function Home() {
    const products = (await getProducts({ sortKey: 'CREATED_AT', reverse: true })).slice(0, 4);

    return (
        <>
            <Hero />
            <FeatureSection />
            <ProductGrid products={products} />
            <Testimonials />
            <TimelineSection />
        </>
    );
}
