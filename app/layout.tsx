import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "components/layout/navbar";
import { cn } from "lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Lescent | Exklusiva Oljebaserade Parfymer",
    description: "Upptäck din signaturdoft med Lescents exklusiva kollektion av oljebaserade parfymer.",
};

import { getCart } from 'lib/shopify';
import { getCartId } from 'components/cart/actions';

// ... imports

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cartId = await getCartId();
    const cart = cartId ? await getCart(cartId) : undefined;

    return (
        <html lang="sv">
            <body className={cn(inter.variable, playfair.variable, "min-h-screen bg-background font-sans antialiased")} suppressHydrationWarning={true}>
                <Navbar cart={cart} />
                <main className="flex-1">
                    {children}
                </main>
                <footer className="border-t bg-secondary/5 py-12">
                    <div className="container grid gap-8 md:grid-cols-4">
                        <div>
                            <h3 className="mb-4 font-serif text-lg font-bold">LESCENT</h3>
                            <p className="text-sm text-muted-foreground">
                                Exklusiva oljebaserade parfymer för den moderna människan.
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-4 font-medium">Länkar</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><a href="/products" className="hover:text-primary">Parfymer</a></li>
                                <li><a href="/blog" className="hover:text-primary">Journal</a></li>
                                <li><a href="/about" className="hover:text-primary">Om Oss</a></li>
                                <li><a href="/contact" className="hover:text-primary">Kontakt</a></li>
                                <li><a href="/kopvillkor" className="hover:text-primary">Köpvillkor</a></li>
                                <li><a href="/integritetspolicy" className="hover:text-primary">Integritetspolicy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 font-medium">Kontakt & Företag</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><strong>Lescent</strong></li>
                                <li>Borås</li>
                                <li><a href="mailto:info@lescent.se" className="hover:text-primary">info@lescent.se</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 font-medium">Nyhetsbrev</h4>
                            <p className="mb-4 text-sm text-muted-foreground">
                                Prenumerera för exklusiva erbjudanden.
                            </p>
                            {/* Newsletter form placeholder */}
                        </div>
                    </div>
                    <div className="container mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                        <p>&copy; {new Date().getFullYear()} Lescent. Alla rättigheter förbehållna.</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
