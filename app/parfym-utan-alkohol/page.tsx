import { getProducts } from 'lib/shopify';
import { SchemaMarkup } from 'components/SchemaMarkup';
import { CategoryPageLayout } from 'components/sections/CategoryPageLayout';
import {
    generateMetadata as generateSeoMetadata,
    buildBreadcrumbSchema,
    buildCategoryFaqSchema,
    SITE_URL,
} from 'lib/seo';

export const metadata = generateSeoMetadata('parfymUtanAlkohol');

export default async function ParfymUtanAlkoholPage() {
    const products = await getProducts({ sortKey: 'CREATED_AT', reverse: true });

    // JSON-LD schemas: breadcrumb trail + FAQ page for rich results in Google.
    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: 'Hem', url: SITE_URL },
        { name: 'Parfym Utan Alkohol', url: `${SITE_URL}/parfym-utan-alkohol` },
    ]);

    const faqSchema = buildCategoryFaqSchema('parfymUtanAlkohol');

    return (
        <>
            <SchemaMarkup data={breadcrumbSchema} />
            <SchemaMarkup data={faqSchema} />
            <CategoryPageLayout category="parfymUtanAlkohol" products={products} />
        </>
    );
}
