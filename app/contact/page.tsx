
import React from 'react';
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";

export const metadata = {
    title: 'Kontakta Oss',
    description: 'Har du frågor om Lescents parfymer? Kontakta oss via e-post på lescentsweden@hotmail.com. Vi svarar inom 24 timmar.',
    openGraph: {
        title: 'Kontakta Lescent',
        description: 'Har du frågor om våra oljebaserade parfymer? Vi finns här för dig.',
    },
    alternates: {
        canonical: 'https://lescent.se/contact',
    },
};

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
                                Du når oss enklast via e-post eller genom kontaktformuläret intill.
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

                    {/* Contact Form */}
                    <div className="bg-secondary/5 p-8 rounded-lg border">
                        <h2 className="text-2xl font-serif font-bold mb-6">Skicka meddelande</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Namn</label>
                                    <Input id="name" placeholder="Ditt namn" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">E-post</label>
                                    <Input id="email" type="email" placeholder="Din e-post" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Ämne</label>
                                <Input id="subject" placeholder="Vad gäller ärendet?" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Meddelande</label>
                                <Textarea
                                    id="message"
                                    placeholder="Skriv ditt meddelande här..."
                                    className="min-h-[150px]"
                                    required
                                />
                            </div>

                            <div className="pt-2">
                                <Button type="submit" className="w-full">
                                    Skicka Meddelande
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
