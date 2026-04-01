import { getProducts } from 'lib/shopify';
import { SchemaMarkup } from 'components/SchemaMarkup';
import { Hero } from 'components/sections/Hero';
import { FeatureSection } from 'components/sections/FeatureSection';
import { ProductGrid } from 'components/sections/ProductGrid';
import { TimelineSection } from 'components/sections/TimelineSection';
import { Testimonials } from 'components/sections/Testimonials';
import { buildOrganizationSchema, buildWebSiteSchema, generateMetadata as generateSeoMetadata } from 'lib/seo';

export const metadata = generateSeoMetadata('home');

export default async function Home() {
    const products = (await getProducts({ sortKey: 'CREATED_AT', reverse: true })).slice(0, 8);

    return (
        <>
            {/* Organization schema for brand identity + WebSite schema for Google Sitelinks Searchbox */}
            <SchemaMarkup data={buildOrganizationSchema()} />
            <SchemaMarkup data={buildWebSiteSchema()} />
            <Hero />
            <FeatureSection />
            <ProductGrid products={products} />
            <Testimonials />
            <TimelineSection />
        </>
    );
}
