
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
    },
    {
        id: 7,
        slug: 'doftgarderob-var-sommar',
        title: 'Uppdatera Doftgarderoben: Varför du bör byta parfym efter årstid',
        seoTitle: 'Byt Parfym Efter Årstid – Vår och Sommar Doftguide | Lescent',
        seoDescription: 'Upptäck varför väderleken påverkar din parfym och hur du bäst navigerar bland doftnoter när solen tittar fram. Exklusiv doftguide från Lescent.',
        excerpt: 'Samma parfym dygnet runt, året om? Dags att tänka om. Upptäck varför värme, fukt och säsongsskiftningar är avgörande för din doftupplevelse.',
        date: '6 Apr, 2026',
        publishedAt: '2026-04-06',
        readTime: '4 min läsning',
        category: 'Inspiration',
        image: '/blog/spring-summer.png',
        keywords: ['vårparfym', 'sommarparfym', 'byta parfym', 'doftnoter', 'värme och parfym'],
        content: `
      <h2>Varför doftar parfym olika beroende på väder?</h2>
      <p>Doft är levande kemi. Precis som naturen skiftar karaktär när vårsolen värmer upp jorden, reagerar din parfymolja på din kroppstemperatur och klimatet i din omgivning. När temperaturen stiger, avdunstar doftmolekyler snabbare och de framträder kraftfullare. En doft som kändes varm och omfamnande i december kylan kan lätt bli övermäktig och kvävande en varm julidag.</p>

      <h3>Luftfuktighetens överraskande effekt</h3>
      <p>På sommaren innehåller luften ofta mer fukt, vilket förstärker doften. Vattnet i luften fungerar som en bärare som sprider aromerna effektivare. Lättare dofter, som citrus, lätta blommor och ljusa trän, får utrymme att blomstra i luften utan att kännas tunga. På vintern, när luften är torr, behöver du i stället tyngre och sötare noter för att de överhuvudtaget ska märkas.</p>

      <h3>Noter att satsa på under våren och sommaren</h3>
      <p>För att möta de varmare månaderna rekommenderar vi att du söker dig till doftfamiljer som är krispiga, uppfriskande och energiingivande. Tänk gnistrande <strong>bergamott</strong>, solmogen <strong>grapefrukt</strong>, upplyftande tär eller diskret saltvatten. Dessa noter stannar eleganta och sofistikerade, oavsett hur intensiv solen är.</p>

      <h2>Tygar Eye – Din ultimata följeslagare i värmen</h2>
      <p>Letar du efter den perfekta doften för varmare tider? Vi rekommenderar starkt vår bästsäljare <a href="/products/bvlgari-le-gemme-tygar" title="Upptäck Tygar Eye Parfymolja"><strong>Tygar Eye</strong></a>. Med en kraftfull explosion av grapefrukt kombinerad med en vibrerande kärna av ingefära och en sofistikerad bas av ambra, fungerar den som en uppfriskande oas. Den är krispig, kraftfull och oändligt exklusiv – ett självklart val när temperaturen stiger.</p>
    `
    },
    {
        id: 8,
        slug: 'parfymens-psykologi-och-valmaende',
        title: 'Doftandets Kraft: Hur parfym påverkar ditt humör och välmående',
        seoTitle: 'Doftpsykologi – Hur Parfym Påverkar Humör och Välmående | Lescent',
        seoDescription: 'Lär dig om parfymens psykologi. Utforska hur olika doftnoter kan minska stress, öka självförtroendet och förbättra ditt mentala välmående.',
        excerpt: 'Din parfym är mer än bara en doft; det är ett verktyg för ditt sinne. Dyk ner i vetenskapen bakom hur rätt doft kan transformera ditt humör.',
        date: '8 Apr, 2026',
        publishedAt: '2026-04-08',
        readTime: '5 min läsning',
        category: 'Kunskap',
        image: '/blog/scent-psychology.png',
        keywords: ['doftpsykologi', 'välmående', 'parfym humör', 'arometerapi', 'självförtroende'],
        content: `
      <h2>En Direktlänk till Känslornas Centrum</h2>
      <p>Av alla våra fem sinnen är luktsinnet det mest fascinerande. Till skillnad från syn eller hörsel, processas inte dofter först av hjärnans rationella del. Istället färdas de direkt via luktnerven till det limbiska systemet – hjärnans primära struktur för känslor och minnen. Detta är förklaringen till varför en specifik doft från barndomen omedelbart kan framkalla en intensiv känslovåg eller ett uråldrigt minne, snabbare än en tanke hinner formas.</p>

      <h3>Bära självförtroende på huden</h3>
      <p>Vad du bär på huden sänder signaler inte bara till din omgivning, utan i allra högsta grad till dig själv. Neurovetenskapliga studier visar att personer som bär en parfym de älskar uppvisar en mätbar ökning i självförtroende och social närvaro. En elegant, kryddig doft kan bokstavligen få dig att stå rakare i ryggen inför ett viktigt möte.</p>

      <h3>Minska stress och hitta lugnet</h3>
      <p>Vi lever i en konstant uppkopplad och intensiv värld. Att applicera en oljebaserad parfym blir därmed något mer än en kosmetisk akt – det är en stunds mindfulness. Doftnoter som mjuk vanilj, lugnande lavendel och varma träslag sänker, bevisligen, hjärtfrekvensen och reducerar stress. Det är som en osynlig sköld av ro som du bär med dig under hela dagen.</p>

      <h2>Satin Mood – Välmående på flaska</h2>
      <p>Vill du utforska en doft designad för djup harmoni och subtil, inre styrka? Då är <a href="/products/maison-francis-kurkdjian-oud-satin-mood" title="Upptäck Satin Mood Parfymolja"><strong>Satin Mood</strong></a> rätt val. Dess utsökta symfoni av bulgarisk ros och mjukt pudrig vanilj omsluter dig likt det finaste silke. Den skapar en omedelbar känsla av lugn, sensualitet och lyx. Applicera den på kvällen, andas in, och låt stillheten ta över.</p>
    `
    },
    {
        id: 9,
        slug: 'layering-kombinera-flera-dofter',
        title: 'Layering: Konsten att kombinera parfymer för din unika signatur',
        seoTitle: 'Parfym Layering Guide – Konsten att Kombinera Dofter | Lescent',
        seoDescription: 'Var din egen parfymör. Lär dig grunderna i "layering" och hur du kan kombinera olika parfymoljor för att skapa ett helt unikt och personligt doftuttryck.',
        excerpt: 'Varför nöja sig med en doft när du kan skapa din egen? Vi guidar dig genom layering – konsten att blanda dofter som ett riktigt proffs.',
        date: '10 Apr, 2026',
        publishedAt: '2026-04-10',
        readTime: '4 min läsning',
        category: 'Guide',
        image: '/blog/layering-guide.png',
        keywords: ['layering parfym', 'kombinera dofter', 'blanda parfym', 'unik signaturdoft', 'parfymguide'],
        content: `
      <h2>Var din egen Parfymör</h2>
      <p>En exklusiv parfymolja är ett mästerverk i sig, men ibland vill man vara ensam i hela världen om sitt doftuttryck. "Layering", eller doftskiktning, handlar om att bära två (eller ibland tre) olika parfymer samtidigt för att komponera en helt ny, skräddarsydd doft. Eftersom Lescents parfymer är rena oljor – fria från alkoholens skarpa "clash" – blandas de gudomligt mjukt och naturligt med varandra på din hud.</p>

      <h3>Grundregeln: Tung bas, lätt topp</h3>
      <p>För att lyckas med layering utan att det blir en osammanhängande krock, tillämpar parfymörer en gyllene regel: <strong>Applicera alltid den tyngsta doften först.</strong> Om du börjar med en rik, djup oud, trä- eller vaniljdoft, och sedan duttar över en lättare, citrus- eller ren tedoft, tillåter du toppens friskhet att gnistra, samtidigt som den får en magnifik, stabil grund att dansa på.</p>

      <h3>De bästa kombinationerna att starta med</h3>
      <p>Om du är nybörjare, rekommenderar vi att experimentera med motsatser som attraherar varandra:
      <ul>
        <li><strong>Sött möter Kryddigt:</strong> Mjuka upp en kraftig kryddig doft med lite len vanilj.</li>
        <li><strong>Trä möter Frukt:</strong> Låt en torr tränote få liv med hjälp av en tropisk fruktnot.</li>
        <li><strong>Orientaliskt möter Friskt:</strong> Ge luft åt mörka, komplexa harts-noter med en gnistrande, ren teblandning.</li>
      </ul>
      </p>

      <h2>Den Optimala Kombinationen för Layering</h2>
      <p>Vill du uppleva kontrastens mästerskap i praktiken? Prova att applicera <a href="/products/arabian-tonka" title="Upptäck Arabian Tonka Parfymolja"><strong>Arabian Tonka</strong></a> som en djup, varm och kryddig bas på insidan av handlederna. Ge den en minut. Toppa den sedan med några försiktiga droppar av den otroligt eleganta <a href="/products/xerjoff-naxos" title="Upptäck Xerjoff Naxos Parfymolja"><strong>Xerjoff Naxos</strong></a>. Den varma, saffranskryddade tonkabönan i botten möter den citrus- och honungssöta friskheten från Naxos och svävar ut i en unik harmoni som garanterat genererar komplimanger hela kvällen.</p>
    `
    }
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogColumns() {
    return BLOG_POSTS.map(({ content: _content, ...meta }) => meta); // Return helper without heavy content if needed lists
}
