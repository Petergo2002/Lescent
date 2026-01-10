import { getProducts } from 'lib/shopify';
import { ProductCard } from 'components/ui/product-card';
import { RefreshButton } from 'components/admin/refresh-button';

export const metadata = {
    title: 'Kollektionen | Lescent',
    description: 'Utforska hela vår kollektion av exklusiva oljebaserade parfymer.'
};

export default async function ProductsPage() {
    const products = await getProducts({ sortKey: 'CREATED_AT', reverse: true });

    return (
        <div className="min-h-screen pt-44 md:pt-52 pb-24">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute left-[-10%] top-[-10%] h-[800px] w-[800px] rounded-full bg-primary/5 blur-[150px]" />
                <div className="absolute right-[-10%] bottom-[-10%] h-[800px] w-[800px] rounded-full bg-gold-400/5 blur-[150px]" />
            </div>

            <div className="container relative z-10">
                {/* Header */}
                <div className="mb-24 text-center space-y-8 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="h-[1px] w-12 bg-black/20" />
                        <span className="text-xs font-medium tracking-[0.4em] uppercase text-muted-foreground">Vår Katalog</span>
                        <div className="h-[1px] w-12 bg-black/20" />
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-medium text-foreground tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Exklusiv Kollektion
                    </h1>

                    <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Upptäck en värld av dofter där varje flaska är ett konstverk.
                        Oljebaserade, långvariga och skapade för att lämna ett outplånligt intryck.
                    </p>

                    {/* Refresh Button - Only visible in development */}
                    {process.env.NODE_ENV === 'development' && (
                        <div className="flex justify-center pt-4">
                            <RefreshButton />
                        </div>
                    )}
                </div>

                {/* Grid */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 text-center animate-in fade-in zoom-in duration-500">
                        <p className="text-2xl font-serif text-foreground mb-4">Inga produkter hittades</p>
                        <p className="text-muted-foreground">Vår kollektion uppdateras snart. Håll utkik.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
