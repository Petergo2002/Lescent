
import React from 'react';

export default function KopvillkorPage() {
    return (
        <div className="container mx-auto px-4 pt-40 pb-12 max-w-4xl">
            <h1 className="text-3xl font-serif font-bold mb-8">Köpvillkor</h1>

            <div className="space-y-8 text-muted-foreground">
                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">1. Allmänt</h2>
                    <p>
                        Dessa köpvillkor ("Villkoren") gäller när du som konsument ("Kunden") gör en beställning via www.lescent.se.
                        Avtal ingås mellan dig och Lescent (se företagsinformation nedan).
                        För att kunna beställa måste du vara minst 18 år. Minderåriga behöver målsmans godkännande.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">2. Priser och Betalning</h2>
                    <p className="mb-2">
                        Alla priser anges i svenska kronor (SEK) och inkluderar 25% moms.
                        Vi reserverar oss för prisändringar orsakat av prisändring från leverantör, feltryck i prislistan samt felaktigheter i priser beroende på felaktig information och förbehåller oss rätten att justera priset.
                    </p>
                    <p>
                        Vi erbjuder säker betalning via våra betalningspartners (t.ex. Klarna, Kortbetalning, Swish).
                        Vid beställning skickas en orderbekräftelse till din angivna e-postadress.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">3. Leverans</h2>
                    <p>
                        Våra normala leveranstider är 2-5 arbetsdagar. OBS! Beställningar lagda under helger skickas tidigast påföljande måndag.
                        Om förseningar i leveransen skulle uppstå (utan att vi har meddelat dig om längre leveranstid) ska du kontakta oss på e-postadressen nedan.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">4. Ångerrätt</h2>
                    <p className="mb-2">
                        Vid köp av varor på webbplatsen har du som kund en lagstiftad 14 dagars ångerrätt som gäller från det att du har tagit emot en vara som du har beställt.
                    </p>
                    <h3 className="text-lg font-medium text-foreground mb-2">Vid nyttjande av din ångerrätt:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Du måste meddela att du ångrar dig. Meddelandet ska skickas till oss via e-post. I ditt meddelande ska ditt namn, din adress, e-postadress, ordernumret samt vilka varor som returneringen gäller framgå klart och tydligt.</li>
                        <li>Du bör omedelbart och senast inom lagstiftad 14 dagar efter ångermeddelandet returnera produkterna till oss.</li>
                        <li>Du står för returfrakt, leverans och skick på produkterna vid retur, produkterna bör därför skickas välpaketerade och i ursprunglig förpackning.</li>
                        <li>På återbetalningsbeloppet förbehåller vi oss rätten att dra av en summa motsvarande värdeminskningen jämfört med varans ursprungliga värde vid använd eller skadad produkt.</li>
                    </ul>
                    <p className="mt-2 text-sm italic">
                        Observera: Ångerrätten gäller inte för brutna förpackningar av hygienartiklar/parfymer av hälso- och hygienskäl.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">5. Reklamation och klagomål</h2>
                    <p>
                        Vi besiktigar alla produkter innan dessa skickas till dig. Skulle produkten ändå vara skadad eller felexpedierad när den anländer åtar vi oss i enlighet med gällande konsumentskyddslagstiftning att kostnadsfritt åtgärda felet.
                        Du måste alltid kontakta oss för ett godkännande innan du returnerar en defekt vara.
                        Klagomålet ska skickas omedelbart efter att defekten har upptäckts via e-post.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-4">6. Personuppgifter (GDPR)</h2>
                    <p>
                        Genom att handla hos Lescent accepterar du vår dataskyddspolicy och vår behandling av dina personuppgifter.
                        Vi värnar om din personliga integritet och samlar inte in fler uppgifter än nödvändigt för att behandla din beställning.
                        Vi säljer eller vidareger aldrig dina uppgifter till tredjepart utan rättslig grund.
                        Läs mer i vår <a href="/integritetspolicy" className="underline hover:text-primary">Integritetspolicy</a>.
                    </p>
                </section>

                <section className="pt-8 border-t">
                    <p className="text-sm">Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>
                </section>
            </div>
        </div>
    );
}
