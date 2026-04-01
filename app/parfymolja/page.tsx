import { getProducts } from 'lib/shopify';
import { SchemaMarkup } from 'components/SchemaMarkup';
import { CategoryPageLayout } from 'components/sections/CategoryPageLayout';
import {
    generateMetadata as generateSeoMetadata,
    buildBreadcrumbSchema,
    buildCategoryFaqSchema,
    SITE_URL,
} from 'lib/seo';

export const metadata = generateSeoMetadata('parfymolja');

export default async function ParfymoljaPage() {
    const products = await getProducts({ sortKey: 'CREATED_AT', reverse: true });

    // JSON-LD schemas: breadcrumb trail + FAQ page for rich results in Google.
    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: 'Hem', url: SITE_URL },
        { name: 'Parfymolja', url: `${SITE_URL}/parfymolja` },
    ]);

    const faqSchema = buildCategoryFaqSchema('parfymolja');

    return (
        <>
            <SchemaMarkup data={breadcrumbSchema} />
            <SchemaMarkup data={faqSchema} />
            <CategoryPageLayout category="parfymolja" products={products} />
        </>
    );
}
