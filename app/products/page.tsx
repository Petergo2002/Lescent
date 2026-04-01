import { getProducts } from 'lib/shopify';
import { ProductCard } from 'components/ui/product-card';
import { RefreshButton } from 'components/admin/refresh-button';
import { PageAmbience } from 'components/ui/page-ambience';
import { SchemaMarkup } from 'components/SchemaMarkup';
import { generateMetadata as generateSeoMetadata, buildBreadcrumbSchema, SITE_URL } from 'lib/seo';

export const metadata = generateSeoMetadata('collection');

export default async function ProductsPage() {
    const products = await getProducts({ sortKey: 'CREATED_AT', reverse: true });

    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: 'Hem', url: SITE_URL },
        { name: 'Parfymer', url: `${SITE_URL}/products` },
    ]);

    return (
        <div className="relative isolate min-h-screen pt-44 pb-32 md:pt-52">
            <SchemaMarkup data={breadcrumbSchema} />
            <PageAmbience />

            <div className="container">
                {/* Header */}
                <div className="mb-24 text-center space-y-8 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="h-[1px] w-12 bg-black/10" />
                        <span className="text-xs font-medium tracking-[0.5em] uppercase text-muted-foreground/80">Vår Kollektion</span>
                        <div className="h-[1px] w-12 bg-black/10" />
                    </div>

                    <h1 className="font-serif text-5xl md:text-8xl font-medium text-foreground tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Signaturdofter
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Upptäck en värld av oljebaserade dofter som definierar din närvaro. 
                        Inget vatten, ingen alkohol — bara ren personlighet.
                    </p>

                    {/* Refresh Button - Only visible in development */}
                    {process.env.NODE_ENV === 'development' && (
                        <div className="flex justify-center pt-8">
                            <RefreshButton />
                        </div>
                    )}
                </div>

                {/* Grid */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in duration-1000 delay-300">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-40 text-center animate-in fade-in zoom-in duration-500">
                        <p className="text-2xl font-serif text-foreground mb-4">Inga produkter hittades</p>
                        <p className="text-muted-foreground">Vår kollektion uppdateras snart. Håll utkik.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
