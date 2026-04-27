import React from 'react';
import { generateMetadata as generateSeoMetadata } from 'lib/seo';

export const metadata = generateSeoMetadata('contact');

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 pt-40 pb-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-serif font-bold mb-4">Kontakta Oss</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Har du frågor om våra produkter, din beställning eller vill du bara säga hej?
                        Tveka inte att höra av dig till oss. Vi svarar vanligtvis inom 24 timmar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4">Kontaktuppgifter</h2>
                            <p className="text-muted-foreground mb-4">
                                Du når oss enklast via e-post. Skicka gärna med ordernummer om frågan gäller en beställning.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium text-foreground">E-post</h3>
                                <a href="mailto:lescentsweden@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    lescentsweden@hotmail.com
                                </a>
                            </div>

                            <div>
                                <h3 className="font-medium text-foreground">Adress</h3>
                                <p className="text-muted-foreground">
                                    Lescent<br />
                                    Borås
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-secondary/5 p-8 rounded-lg border">
                        <h2 className="text-2xl font-serif font-bold mb-4">Skicka e-post</h2>
                        <p className="text-muted-foreground mb-6">
                            För snabbast hjälp, mejla oss direkt så återkommer vi vanligtvis inom 24 timmar.
                        </p>
                        <a
                            href="mailto:lescentsweden@hotmail.com"
                            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            lescentsweden@hotmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
