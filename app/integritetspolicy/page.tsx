
import React from 'react';

export default function IntegritetspolicyPage() {
    return (
        <div className="container mx-auto px-4 pt-40 pb-12 max-w-4xl">
            <h1 className="text-3xl font-serif font-bold mb-8">Integritetspolicy</h1>

            <div className="space-y-8 text-muted-foreground">
                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">1. Allmänt</h2>
                    <p>
                        Vi på Lescent värnar om din personliga integritet och strävar efter att alltid skydda dina personuppgifter på bästa sätt.
                        Denna policy förklarar vilken typ av information vi samlar in och varför, samt hur vi behandlar den, i enlighet med dataskyddsförordningen (GDPR).
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">2. Personuppgiftsansvarig</h2>
                    <p>
                        Lescent är personuppgiftsansvarig för behandlingen av dina personuppgifter på denna webbplats.
                        Kontakta oss gärna om du har frågor kring hur vi behandlar dina uppgifter.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">3. Vilka personuppgifter samlar vi in?</h2>
                    <p className="mb-2">Vi samlar in personuppgifter som du lämnar till oss när du exempelvis:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Genomför ett köp</li>
                        <li>Prenumererar på vårt nyhetsbrev</li>
                        <li>Kontaktar vår kundtjänst</li>
                    </ul>
                    <p className="mt-2">
                        Detta inkluderar uppgifter som namn, adress, e-postadress, telefonnummer och betalningsuppgifter.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">4. Varför behandlar vi dina uppgifter?</h2>
                    <p>Dina personuppgifter behandlas för att kunna:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Hantera din beställning och leverans (fullgörande av köpeavtal).</li>
                        <li>Hantera kundserviceärenden (berättigat intresse).</li>
                        <li>Skicka nyhetsbrev och erbjudanden (om du samtyckt till detta).</li>
                        <li>Följa lagkrav, t.ex. bokföringslagen.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">5. Delning av information</h2>
                    <p>
                        Vi kan komma att dela dina personuppgifter med våra samarbetspartners för att kunna fullfölja våra åtaganden gentemot dig,
                        exempelvis transportbolag för leverans och betalningslösningar för säker betalning.
                        Vi säljer aldrig dina uppgifter till tredje part.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">6. Dina rättigheter</h2>
                    <p>
                        Du har rätt att begära ett utdrag över de personuppgifter vi har sparade om dig.
                        Om dina uppgifter är felaktiga, ofullständiga eller irrelevanta, kan du begära att få dem rättade eller borttagna.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">7. Cookies</h2>
                    <p>
                        Denna webbplats använder cookies för att förbättra din upplevelse, analysera trafik och för marknadsföringsyften.
                        Du kan själv styra användningen av cookies via inställningarna i din webbläsare.
                    </p>
                </section>

                <section className="pt-8 border-t">
                    <p className="text-sm">Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>
                </section>
            </div>
        </div>
    );
}
