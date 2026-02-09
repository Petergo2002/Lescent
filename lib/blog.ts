
export type BlogPost = {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: string; // HTML formatted content
    seoDescription: string;
    keywords: string[];
};

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        slug: 'alkohol-vs-oljebaserad-parfym',
        title: 'Alkohol vs. Oljebaserad Parfym: Vad är skillnaden?',
        seoDescription: 'Upptäck varför oljebaserade parfymer är det självklara valet. Lär dig skillnaden mellan alkoholbaserad och oljebaserad parfym och varför olja håller längre.',
        excerpt: 'De flesta kommersiella parfymer består av upp till 90% alkohol. Upptäck varför oljebaserade parfymer är det självklara valet för den medvetna konsumenten.',
        date: '5 Dec, 2025',
        readTime: '4 min läsning',
        category: 'Kunskap',
        image: '/blog/oil-vs-alcohol.png',
        keywords: ['parfymolja', 'oljebaserad parfym', 'alkoholfri parfym', 'långvarig doft', 'parfymguide'],
        content: `
      <h2>Varför välja oljebaserad parfym?</h2>
      <p>I en värld full av snabba intryck och flyktiga dofter står oljebaserad parfym (Parfymolja) ut som ett val för den medvetna kännaren. Till skillnad från traditionella sprayer, som ofta består av upp till 90-95% alkohol och vatten, är våra parfymoljor 100% koncentrerad doft. Det är skillnaden mellan att dricka en utspädd juice och att smaka på den färskpressade frukten.</p>
      
      <h3>1. Oslagbar hållbarhet</h3>
      <p>Alkohol är flyktigt – det avdunstar snabbt och tar doften med sig. Det är därför du ofta känner en stark "alkoholchock" när du sprayar, följt av en doft som snabbt sviker. Olja, däremot, avdunstar inte. Den absorberas av huden och utvecklas långsamt med din kroppsvärme. Resultatet? En doft som stannar kvar hela dagen, ibland ända in på nästa.</p>

      <h3>2. Skonsammare mot huden</h3>
      <p>Alkohol torkar ut huden och kan orsaka irritation, särskilt för dig med känslig hy. Oljebaserade parfymer är naturligt återfuktande och snälla mot din hudbarriär. De smälter in istället för att ligga som en hinna utanpå.</p>

      <h3>3. En intim och personlig projektion</h3>
      <p>Har du någonsin klivit in i en hiss och kvävts av någons parfym? Det kallas "sillage", och alkoholbaserade parfymer är designade för att fylla ett rum. Oljebaserad parfym är mer intim. Den skriker inte – den viskar. Den märks av de som står dig nära, vilket skapar en aura av mystik och exklusivitet snarare än dominans.</p>

      <h3>4. Mer valuta för pengarna</h3>
      <p>När du köper en "Eau de Parfum" betalar du ofta dyrt för en vacker flaska fylld med billig alkohol. Med Lescents parfymoljor betalar du för själva essensen. En 10ml flaska racker ofta lika länge som, eller längre än, en 50ml sprayflaska eftersom du behöver så otroligt lite vid varje applicering.</p>

      <h2>Sammanfattning</h2>
      <p>Att gå över till oljebaserad parfym är att uppgradera sin doftgarderob till HD-kvalitet. Det är renare, djupare och mer personligt. Det är doft, så som den var menad att upplevas.</p>
    `
    },
    {
        id: 2,
        slug: 'hur-applicerar-man-parfymolja',
        title: 'Ritualen: Hur du applicerar parfymolja korrekt',
        seoDescription: 'Lär dig de strategiska pulspunkterna som maximerar din doftupplevelse med oljebaserad parfym. En guide till att applicera parfymolja.',
        excerpt: 'Att applicera parfymolja är mer än bara en rutin - det är en ritual. Lär dig de strategiska pulspunkterna som maximerar din doftupplevelse.',
        date: '28 Nov, 2025',
        readTime: '3 min läsning',
        category: 'Guide',
        image: '/blog/applying-oil.png',
        keywords: ['applicera parfym', 'pulspunkter', 'få parfym att hålla längre', 'parfymtips', 'hudvård'],
        content: `
      <h2>Less is more – Konsten att dosera</h2>
      <p>Det vanligaste misstaget många gör med parfymolja är att använda för mycket. Eftersom våra oljor är 100% koncentrerade behöver du bara en bråkdel av vad du är van vid. Tänk "duttar", inte "spray".</p>

      <h3>Värme aktiverar doften: Pulspunkterna</h3>
      <p>Parfymolja utvecklas bäst med värme. Därför ska du applicera den där blodkärlen ligger närmast huden och avger mest kroppsvärme. Dina strategiska punkter är:</p>
      <ul>
        <li><strong>Handlederna:</strong> En klassiker av en anledning.</li>
        <li><strong>Halsgropen och bakom öronen:</strong> Perfekt för när du kramar någon eller viskar en hemlighet.</li>
        <li><strong>Armvecken:</strong> En underskattad plats som avger värme när du rör dig.</li>
      </ul>

      <h3>Gnid inte!</h3>
      <p>Du har säkert sett det på film: någon sprayar handlederna och gnider dem mot varandra. <strong>Gör inte det.</strong> När du gnider handlederna skapar du friktion som bryter ner doftmolekylerna, särskilt de flyktiga toppnoterna. Doften "dödas" snabbare. Istället, applicera oljan (gärna med roll-on) och dutta försiktigt handlederna mot varandra eller mot halsen om du vill sprida ut den.</p>

      <h3>Applicera på fuktig hud</h3>
      <p>För absolut bäst hållbarhet, applicera din parfymolja direkt efter duschen när huden fortfarande är lite fuktig och varm. Huden fungerar som en svamp och låser in både fukt och doft. En oparfymerad body lotion som bas kan också göra underverk för hållbarheten.</p>

      <h3>Lager-på-lager (Layering)</h3>
      <p>Vill du skapa något helt unikt? Parfymoljor är fantastiska för "layering". Testa att applicera en tyngre, träig olja som bas och en lättare, citrusaktig olja ovanpå. Eftersom oljorna inte innehåller alkohol blandar de sig mjukt på huden och skapar din helt egna signaturdoft.</p>
    `
    },
    {
        id: 3,
        slug: 'topp-hjarta-basnoter-forklarat',
        title: 'Doftpyramiden Förklarad: Förstå din parfym',
        seoDescription: 'Förstå varför parfym doftar annorlunda efter en timme. Vi förklarar topp-, hjärt- och basnoter i doftpyramiden.',
        excerpt: 'Varför doftar din parfym annorlunda efter en timme? Vi dyker ner i doftpyramidens mysterium och förklarar topp-, hjärt- och basnoter.',
        date: '15 Nov, 2025',
        readTime: '6 min läsning',
        category: 'Utbildning',
        image: '/blog/fragrance-pyramid.png',
        keywords: ['doftnoter', 'parfympyramid', 'toppnoter', 'hjärtnoter', 'basnoter', 'parfymkunskap'],
        content: `
      <h2>Parfymens tre akter</h2>
      <p>En välgjord parfym är som en musikalisk komposition eller en teaterföreställning i tre akter. Den lever och förändras på din hud. För att förstå din doft måste du förstå dess struktur, ofta kallad <em>doftpyramiden</em>.</p>

      <h3>1. Toppnoterna: Det första intrycket</h3>
      <p>Detta är vad du känner direkt när du applicerar doften. Toppnoterna är lätta, friska och flyktiga molekyler. De är parfymens säljare – designade för att fånga ditt intresse omedelbart.</p>
      <ul>
        <li><strong>Vanliga noter:</strong> Citrus (bergamott, citron), lätta frukter, örter, ingefära.</li>
        <li><strong>Varaktighet:</strong> 5–30 minuter.</li>
      </ul>

      <h3>2. Hjärtnoterna: Parfymens själ</h3>
      <p>När toppnoterna klingar av träder hjärtnoterna fram. Detta är doftens kärna och karaktär. De är fylligare och mjukare, och fungerar som en bro till basen.</p>
      <ul>
        <li><strong>Vanliga noter:</strong> Blommor (ros, jasmin), kryddor (kanel, kardemumma), frukter.</li>
        <li><strong>Varaktighet:</strong> 2–4 timmar.</li>
      </ul>

      <h3>3. Basnoterna: Minnet som stannar</h3>
      <p>När festen är över är det basnoterna som stannar kvar. Dessa tunga, rika molekyler är grunden som hela parfymen vilar på. De utvecklas långsamt och blandar sig med din egen hudkemi för att skapa den doft som folk minns dig för.</p>
      <ul>
        <li><strong>Vanliga noter:</strong> Träslag (sandelträ, ceder), mysk, vanilj, ambra, oud.</li>
        <li><strong>Varaktighet:</strong> 6 timmar till flera dygn (särskilt i oljor).</li>
      </ul>

      <h3>Linjär vs. Komplex doft</h3>
      <p>Vissa moderna parfymer, och särskilt många billigare varianter, är "linjära". De doftar likadant från början till slut. En komplex kvalitetsdoft tar dig dock på en resa. Det är därför du aldrig ska köpa en parfym baserat enbart på det första intrycket i butiken. Låt den leva på huden i en timme. Låt hjärtat och basen tala innan du bestämmer dig.</p>
    `
    },
    {
        id: 4,
        slug: 'hitta-din-signaturdoft',
        title: 'Konsten att hitta din signaturdoft',
        seoDescription: 'Din doft är ditt osynliga visitkort. Här är guiden till att hitta parfymen som speglar din personlighet och stil.',
        excerpt: 'Din doft är ditt osynliga visitkort. Här är guiden till att hitta parfymen som speglar din personlighet och stil.',
        date: '1 Nov, 2025',
        readTime: '5 min läsning',
        category: 'Inspiration',
        image: '/blog/collection.png',
        keywords: ['signaturdoft', 'välja parfym', 'personlig stil', 'doftgarderob', 'köpa parfym'],
        content: `
      <h2>Vad säger din doft om dig?</h2>
      <p>Christian Dior sa en gång: <em>"En kvinnas parfym säger mer om henne än hennes handstil."</em> Detsamma gäller för män. Din doft är en förlängning av din personlighet, en osynlig accessoar som lämnar intryck långt efter att du lämnat rummet. Men hur hittar man "den rätta"?</p>

      <h3>1. Identifiera dina preferenser</h3>
      <p>Börja med att titta på vad du gillar i andra sammanhang. Älskar du doften av nybakat, vanilj och kaffe? Då är du troligen en <em>Gourmand</em>-person. Dras du till skogspromenader, mossa och öppen eld? Då ska du titta på <em>Träiga</em> noter. Gillar du ren tvätt och havsbris? Sök efter <em>Friska/Aqautiska</em> dofter.</p>

      <h3>2. Testa på HUDEN, inte papper</h3>
      <p>Detta är den gyllene regeln. En pappersremsa har inget pH-värde, ingen kroppsvärme och inga hormoner. Din hudkemi är unik. En parfym som doftar magiskt på din vän kan dofta helt annorlunda på dig. Applicera lite på handleden och vänta. Låt doften gifta sig med dig.</p>

      <h3>3. Bygg en doftgarderob</h3>
      <p>Tanken på <em>en</em> enda signaturdoft för hela livet är romantisk men kanske lite föråldrad. Vi byter kläder efter säsong och humör – varför inte göra detsamma med doft?</p>
      <ul>
        <li><strong>Vardag/Jobb:</strong> Något lätt, rent och icke-offensivt. Kanske citrus eller ljus mysk.</li>
        <li><strong>Dejt/Kväll:</strong> Något djupare, varmare och mer sensuellt. Tänk ambra, vanilj eller oud.</li>
        <li><strong>Sommar:</strong> Friska, marina och blommiga noter som inte blir för tunga i värmen.</li>
        <li><strong>Vinter:</strong> Kryddiga, träiga och söta noter som värmer i kylan.</li>
      </ul>

      <h3>4. Ha tålamod</h3>
      <p>Att hitta sin signaturdoft är en resa. Känner du dig osäker? Beställ vårt <strong>Discovery Set</strong>. Det ger dig chansen att leva med flera olika dofter under några dagar och se vilken som du sträcker dig efter om och om igen. Den du inte kan sluta dofta på – det är din vinnare.</p>
    `
    }
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogColumns() {
    return BLOG_POSTS.map(({ content: _content, ...meta }) => meta); // Return helper without heavy content if needed lists
}
