
export type BlogPost = {
    id: number;
    slug: string;
    title: string;
    seoTitle: string;
    excerpt: string;
    date: string;
    publishedAt: string;
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
        seoTitle: 'Alkohol vs Oljebaserad Parfym – Vad är Skillnaden? | Lescent',
        seoDescription: 'Förstå skillnaden mellan alkohol- och oljebaserade parfymer. Varför parfymolja håller längre och luktar bättre på huden.',
        excerpt: 'De flesta kommersiella parfymer består av upp till 90% alkohol. Upptäck varför oljebaserade parfymer är det självklara valet för den medvetna konsumenten.',
        date: '5 Dec, 2025',
        publishedAt: '2025-12-05',
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
        seoTitle: 'Hur Applicerar Man Parfymolja? Guide till Pulspunkter | Lescent',
        seoDescription: 'Lär dig applicera parfymolja rätt. Guide till de bästa pulspunkterna för maximal doftupplevelse hela dagen.',
        excerpt: 'Att applicera parfymolja är mer än bara en rutin - det är en ritual. Lär dig de strategiska pulspunkterna som maximerar din doftupplevelse.',
        date: '28 Nov, 2025',
        publishedAt: '2025-11-28',
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
        seoTitle: 'Doftpyramiden Förklarad – Topp, Hjärta & Basnoter | Lescent',
        seoDescription: 'Vad är topp-, hjärt- och basnoter i parfym? Vi förklarar doftpyramiden och hur din parfym utvecklas under dagen.',
        excerpt: 'Varför doftar din parfym annorlunda efter en timme? Vi dyker ner i doftpyramidens mysterium och förklarar topp-, hjärt- och basnoter.',
        date: '15 Nov, 2025',
        publishedAt: '2025-11-15',
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
        seoTitle: 'Hitta Din Signaturdoft – Guide till Din Personliga Parfym | Lescent',
        seoDescription: 'Hur hittar man sin signaturdoft? Vår guide hjälper dig välja rätt parfymolja som matchar din personlighet och stil.',
        excerpt: 'Din doft är ditt osynliga visitkort. Här är guiden till att hitta parfymen som speglar din personlighet och stil.',
        date: '1 Nov, 2025',
        publishedAt: '2025-11-01',
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
    },
    {
        id: 5,
        slug: 'vetenskapen-bakom-olje-extraction',
        title: 'Vetenskapen Bakom Ren Doft: Hur Parfymolja Extraheras',
        seoTitle: 'Hur Extraheras Parfymolja? Vetenskapen Bakom Doften | Lescent',
        seoDescription: 'Lär dig om ångdestillation, koldioxidextraktion och hur vi fångar naturens renaste dofter i våra parfymoljor.',
        excerpt: 'Bakom varje droppe Lescent ligger avancerad vetenskap. Vi utforskar de exklusiva metoderna som förvandlar växter till flytande guld.',
        date: '15 Jan, 2026',
        publishedAt: '2026-01-15',
        readTime: '5 min läsning',
        category: 'Vetenskap',
        image: '/blog/essence-science.png',
        keywords: ['extraktion', 'ångdestillation', 'doftvetenskap', 'etiska oljor', 'parfymtillverkning'],
        content: `
      <h2>Från planta till flaska: En resa i kemi och konst</h2>
      <p>När du öppnar en flaska från Lescent möts du av naturens mest koncentrerade essens. Men hur hamnar doften där? Processen att extrahera doftmolekyler från blommor, rötter och harts är en balansakt mellan tusenårig tradition och modern teknologi.</p>

      <h3>1. Ångdestillation – Den klassiska metoden</h3>
      <p>Den vanligaste metoden för att utvinna eteriska oljor är ångdestillation. Genom att låta het ånga passera genom växtmaterialet (som lavendel eller rosor) frigörs doftmolekylerna. Ångan kyls sedan ner och kondenseras till vätska, där oljan flyter ovanpå vattnet. Det är en skonsam metod som bevarar doftens naturliga karaktär.</p>

      <h3>2. Koldioxidextraktion (CO2) – Den moderna revolutionen</h3>
      <p>För de allra mest exklusiva dofterna använder vi CO2-extraktion. Under högt tryck blir koldioxid "superkritisk" – den får både gasens och vätskans egenskaper. Detta gör att den kan extrahera doftämnen vid mycket låga temperaturer, vilket bevarar molekyler som annars skulle förstöras av värme. Resultatet är en doft som är identisk med den levande växten.</p>

      <h3>3. Varför metoden spelar roll</h3>
      <p>Billigare parfymer använder ofta kemiska lösningsmedel som hexan. Dessa är effektiva men kan lämna spår efter sig och ger ofta en "plattare" doftupplevelse. Genom att välja renare extraktionsmetoder säkerställer vi att våra oljor är rika, nyanserade och helt fria från oönskade kemikalier.</p>

      <h2>Hantverket bakom Lescent</h2>
      <p>Varje batch vi producerar genomgår noggranna kontroller för att säkerställa att renheten och potensen är exakt där den ska vara. Det är därför våra oljor upplevs som djupare och mer levande på huden.</p>
    `
    },
    {
        id: 6,
        slug: 'hallbarhet-lyx-glas-framfor-plast',
        title: 'Hållbar Elegans: Varför Vi Väljer Glas Framför Plast',
        seoTitle: 'Hållbarhet & Lyx – Varför Vi Väljer Glasflaskor | Lescent',
        seoDescription: 'Upptäck varför glas är överlägset plast för förvaring av parfymoljor och hur Lescent arbetar för en mer hållbar framtid.',
        excerpt: 'I en värld av engångsplast väljer Lescent en annan väg. Upptäck varför våra tunga glasflaskor är bättre för både doften och planeten.',
        date: '2 Feb, 2026',
        publishedAt: '2026-02-02',
        readTime: '4 min läsning',
        category: 'Hållbarhet',
        image: '/blog/sustainability-glass.png',
        keywords: ['hållbar lyx', 'glas vs plast', 'miljövänlig parfym', 'återvinning', 'premiumförpackning'],
        content: `
      <h2>Inget utrymme för kompromisser</h2>
      <p>När vi grundade Lescent hade vi en vision: vi ville skapa världens bästa parfymoljor utan att det skulle kosta planeten. Ett av våra viktigaste beslut var att helt utesluta plastflaskor för våra dofter.</p>

      <h3>Bevarar doftens integritet</h3>
      <p>Glas är ett inert material. Det betyder att det inte reagerar med innehållet. Plast kan å andra sidan över tid "läcka" kemikalier in i oljan eller absorbera doftmolekyler, vilket förändrar parfymens profil. Våra tunga glasflaskor fungerar som ett kassaskåp för din doft, och håller den fräsch i åratal.</p>

      <h3>Tidlös återvinningsbarhet</h3>
      <p>Glas kan återvinnas i all oändlighet utan att förlora i kvalitet. Genom att välja glas minskar vi vårt plastavtryck och uppmuntrar till en cirkulär ekonomi. Dessutom är våra flaskor så vackra att många av våra kunder väljer att behålla dem som prydnad eller återanvända dem för andra ändamål efter att oljan tagit slut.</p>

      <h3>Tyngden av kvalitet</h3>
      <p>Det finns en unik känsla i att hålla en tung glasflaska. Det signalerar kvalitet, hantverk och medvetenhet. För oss är hållbarhet inte bara ett ord – det är en del av den estetiska upplevelsen av lyx.</p>

      <h2>Vårt löfte</h2>
      <p>Vi arbetar ständigt med att se över hela vår leveranskedja, från etiskt odlade råvaror till våra förpackningar. För att sann lyx ska kännas bra hela vägen, måste den vara hållbar.</p>
    `
    }
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogColumns() {
    return BLOG_POSTS.map(({ content: _content, ...meta }) => meta); // Return helper without heavy content if needed lists
}
