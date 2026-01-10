import { Product } from 'lib/shopify/types';
import { ProductCard } from 'components/ui/product-card';
import { Button } from 'components/ui/button';

export function ProductGrid({ products }: { products: Product[] }) {
    return (
        <section className="container py-20 md:py-32 relative z-10">
            <div className="mb-16 text-center space-y-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-[1px] w-12 bg-evergreen/30" />
                    <span className="text-xs font-medium tracking-[0.3em] uppercase text-evergreen/80">Kollektionen</span>
                    <div className="h-[1px] w-12 bg-evergreen/30" />
                </div>
                <h2 className="font-serif text-5xl font-medium text-foreground tracking-wide">Utvalda Favoriter</h2>
                <p className="text-muted-foreground font-light tracking-wide max-w-xl mx-auto">
                    Utforska vår noga utvalda samling av hantverksmässiga dofter. Varje flaska bär på en unik berättelse.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-24">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center">
                <a href="/products">
                    <Button size="lg" className="h-14 px-10 rounded-full text-sm font-medium tracking-widest uppercase">
                        Se Hela Kollektionen
                    </Button>
                </a>
            </div>
        </section>
    );
}
