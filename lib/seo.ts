import type { Metadata } from 'next';
import type { BlogPost } from '@/lib/blog';
import type { Product } from 'lib/shopify/types';
import { formatPrice } from 'lib/utils';

// Central SEO-konfiguration för metadata, schema och produktinnehåll.
export const SITE_NAME = 'Lescent';
export const SITE_URL = 'https://lescent.se';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/realhero_compreesd.png`;

type SeoPage =
    | 'default'
    | 'home'
    | 'collection'
    | 'product'
    | 'blog'
    | 'blogArticle'
    | 'about'
    | 'contact'
    | 'terms'
    | 'privacy'
    | 'parfymolja'
    | 'parfymUtanAlkohol';

type SeoMetadataInput = {
    article?: BlogPost;
    product?: Product;
};

type ProductSeoContent = {
    brand: string;
    originalName: string;
    topNotes: string[];
    heartNotes: string[];
    baseNotes: string[];
};

type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

export type CategoryKey = 'parfymolja' | 'parfymUtanAlkohol';

// Category FAQ content for SEO landing pages — used both in the UI and in FAQPage schema.
const CATEGORY_FAQS: Record<CategoryKey, Array<{ question: string; answer: string }>> = {
    parfymolja: [
        {
            question: 'Vad är parfymolja och hur skiljer den sig från vanlig parfym?',
            answer: 'Parfymolja är en oljebaserad doft utan alkohol. Oljan binder till hudens naturliga fukt och låter doften öppna sig långsamt och sitta kvar i 8–12 timmar. Till skillnad från sprayparfym avdunstar doften inte lika snabbt och ger en mjukare, mer hudnära upplevelse.',
        },
        {
            question: 'Hur länge håller parfymolja på huden?',
            answer: 'En oljebaserad parfym från Lescent håller vanligtvis 8–12 timmar på huden. Hållbarheten beror på hudtyp, mängd applicerad, och var på kroppen du bär den. På välvårdad och något fuktig hud sitter doften som allra längst.',
        },
        {
            question: 'Hur applicerar man parfymolja på rätt sätt?',
            answer: 'Applicera parfymoljan på pulspunkterna – handled, hals, bakom öronen och inuti armbågarna. Värmen från kroppen aktiverar doften och sprider den naturligt. Du behöver bara en liten mängd; börja med ett par droppar och justera efter smak.',
        },
    ],
    parfymUtanAlkohol: [
        {
            question: 'Varför välja parfym utan alkohol?',
            answer: 'Alkoholfri parfym är mildare mot huden och undviker den skärpa och uttorkning som alkohol kan orsaka, särskilt vid daglig användning. Oljebaserade dofter ger dessutom en mjukare doftstart och längre hållbarhet eftersom de inte avdunstar lika snabbt.',
        },
        {
            question: 'Passar alkoholfri parfym för känslig hud?',
            answer: 'Ja – parfym utan alkohol är ett utmärkt val för känslig hud. Eftersom oljebasen saknar den uttorkande effekten av etanol upplevs doften som skonsam och behaglig. Många med eksem, rosacea eller torr hud föredrar oljebaserade parfymer av precis den anledningen.',
        },
        {
            question: 'Hur applicerar man parfym utan alkohol?',
            answer: 'Applicera direkt på pulspunkterna – handled, hals och bakom öronen. Gnid inte in oljan; låt den sjunka in naturligt. En eller två droppar räcker långt. Du kan lägga på ett extra lager under dagen utan att det blir överväldigande.',
        },
    ],
};

// Returns FAQ items for a given category — used to render FAQ in the UI.
export function getCategoryFaqs(category: CategoryKey) {
    return CATEGORY_FAQS[category];
}

// Builds a BreadcrumbList schema for Google's rich results.
export function buildBreadcrumbSchema(
    items: Array<{ name: string; url: string }>
): JsonLdValue {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

// Builds a FAQPage schema for category landing pages.
export function buildCategoryFaqSchema(category: CategoryKey): JsonLdValue {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: CATEGORY_FAQS[category].map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

const DEFAULT_KEYWORDS = [
    'parfymolja',
    'oljebaserad parfym',
    'långvarig doft',
    'alkoholfri parfym',
    'parfym online',
    'Lescent',
    'köpa parfym online sverige',
    'parfym utan alkohol',
    'parfymolja sverige',
    'niche parfym',
    'parfym känslig hud',
    'oljeparfym online',
    'exklusiv parfym',
    'handgjord parfym',
];

const PRODUCT_SEO_OVERRIDES: Array<{
    matches: string[];
    content: ProductSeoContent;
}> = [
    {
        matches: ['arabian-tonka', 'arabian tonka'],
        content: {
            brand: 'Montale',
            originalName: 'Arabians Tonka',
            topNotes: ['saffran', 'bergamott'],
            heartNotes: ['ros', 'oud'],
            baseNotes: ['tonkaböna', 'ambra'],
        },
    },
    {
        matches: ['baccarat-rouge', 'rouge 540', 'baccarat rouge 540'],
        content: {
            brand: 'Maison Francis Kurkdjian',
            originalName: 'Baccarat Rouge 540',
            topNotes: ['saffran', 'jasmin'],
            heartNotes: ['amberwood', 'mjuk sötma'],
            baseNotes: ['cederträ', 'ambra'],
        },
    },
    {
        matches: ['layton-royal', 'royal layton', 'layton'],
        content: {
            brand: 'Parfums de Marly',
            originalName: 'Layton',
            topNotes: ['äpple', 'lavendel'],
            heartNotes: ['vanilj', 'viol'],
            baseNotes: ['sandelträ', 'kardemumma'],
        },
    },
    {
        matches: ['naxos-sicilia', 'naxos 1861', 'naxos'],
        content: {
            brand: 'Xerjoff',
            originalName: 'Naxos',
            topNotes: ['citrus', 'bergamott'],
            heartNotes: ['honung', 'lavendel'],
            baseNotes: ['tobak', 'vanilj'],
        },
    },
    {
        matches: ['oud-maracuja', 'oud maracujá', 'oud maracuja'],
        content: {
            brand: 'Maison Crivelli',
            originalName: 'Oud Maracujá',
            topNotes: ['passionsfrukt', 'fruktiga noter'],
            heartNotes: ['saffran', 'ros'],
            baseNotes: ['oud', 'läder'],
        },
    },
    {
        matches: ['satin-mood', 'satin mood', 'oud satin mood'],
        content: {
            brand: 'Maison Francis Kurkdjian',
            originalName: 'Oud Satin Mood',
            topNotes: ['viol', 'pudriga noter'],
            heartNotes: ['bulgarisk ros', 'turkisk ros'],
            baseNotes: ['vanilj', 'oud'],
        },
    },
    {
        matches: ['tygar-gem', 'tygar eye', 'tygar'],
        content: {
            brand: 'Bvlgari',
            originalName: 'Tygar',
            topNotes: ['grapefrukt', 'citrus'],
            heartNotes: ['ingefära', 'friska kryddor'],
            baseNotes: ['ambra', 'träiga noter'],
        },
    },
    {
        matches: ['imagination-infinite', 'pure imagination', 'imagination'],
        content: {
            brand: 'Louis Vuitton',
            originalName: 'Imagination',
            topNotes: ['citron', 'bergamott'],
            heartNotes: ['svart te', 'neroli'],
            baseNotes: ['kanel', 'ambrox'],
        },
    },
];

function normalizeValue(value: string) {
    return value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function ensureLeadingSlash(path: string) {
    return path.startsWith('/') ? path : `/${path}`;
}

function toAbsoluteUrl(pathOrUrl: string) {
    if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
        return pathOrUrl;
    }

    return `${SITE_URL}${ensureLeadingSlash(pathOrUrl)}`;
}

function stripHtml(html: string) {
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function trimDescription(value: string, maxLength = 155) {
    if (value.length <= maxLength) {
        return value;
    }

    const trimmed = value.slice(0, maxLength - 1);
    return `${trimmed.slice(0, trimmed.lastIndexOf(' ')).trim() || trimmed}…`;
}

function buildMetadataObject({
    title,
    description,
    path,
    image,
    type = 'website',
    keywords = [],
}: {
    title: string;
    description: string;
    path: string;
    image?: string;
    type?: 'website' | 'article';
    keywords?: string[];
}): Metadata {
    // Alla sidor får en absolut canonical-URL och en delningsbar OG-bild.
    const canonicalUrl = toAbsoluteUrl(path);
    const ogImage = toAbsoluteUrl(image || DEFAULT_OG_IMAGE);

    return {
        title,
        description,
        keywords: [...DEFAULT_KEYWORDS, ...keywords],
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type,
            locale: 'sv_SE',
            url: canonicalUrl,
            siteName: SITE_NAME,
            title,
            description,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export function getProductSeoContent(product: Product): ProductSeoContent {
    const normalizedHandle = normalizeValue(product.handle);
    const normalizedTitle = normalizeValue(product.title);

    // Matchar kända doftinspirationer för att kunna bygga starkare produkt-SEO.
    const match = PRODUCT_SEO_OVERRIDES.find(({ matches }) =>
        matches.some((candidate) =>
            normalizedHandle.includes(normalizeValue(candidate)) ||
            normalizedTitle.includes(normalizeValue(candidate)),
        ),
    );

    if (match) {
        return match.content;
    }

    // Svensk fallback för produkter som inte finns i mappen ovan.
    return {
        brand: 'ett välkänt parfymhus',
        originalName: product.title,
        topNotes: ['friska noter', 'ljusa ackord'],
        heartNotes: ['balanserade blommor', 'mjuka kryddor'],
        baseNotes: ['mjuk ambra', 'träiga noter'],
    };
}

export function getProductPriceText(product: Product) {
    return formatPrice(
        product.priceRange.minVariantPrice.amount,
        product.priceRange.minVariantPrice.currencyCode,
    );
}

export function getProductTagline(product: Product) {
    return `Oljebaserad parfym | Långvarig doft | ${getProductPriceText(product)}`;
}

export function getProductImageAlt(product: Product) {
    return `${product.title} parfymolja – oljebaserad doftprofil från Lescent`;
}

export function getProductFaqs(product: Product) {
    const seoContent = getProductSeoContent(product);

    return [
        {
            question: 'Hur länge håller parfymoljan?',
            answer: `${product.title} håller vanligtvis 8-12 timmar på huden beroende på hudtyp, mängd och var du applicerar den. På återfuktad hud sitter doften ofta ännu längre.`,
        },
        {
            question: 'Är detta en fristående doftprofil?',
            answer: `Ja. Lescent säljer egna parfymoljor som fristående doftprofiler inspirerade av välkända noter och doftfamiljer. ${product.title} är inte kopplad till, godkänd av eller producerad av ${seoContent.brand}.`,
        },
        {
            question: 'Hur applicerar jag parfymoljan?',
            answer: 'Applicera på pulspunkterna som handled, hals och bakom öronen. Börja med en liten mängd, låt oljan sjunka in och bygg upp intensiteten vid behov.',
        },
    ];
}

export function buildProductNotesText(product: Product) {
    const seoContent = getProductSeoContent(product);

    return `Toppnoter: ${seoContent.topNotes.join(', ')}. Hjärtnoter: ${seoContent.heartNotes.join(', ')}. Basnoter: ${seoContent.baseNotes.join(', ')}.`;
}

export function buildOrganizationSchema(): JsonLdValue {
    // Enhanced Organization schema with address, founding info and social proof for local + E-E-A-T signals.
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Lescent',
        url: SITE_URL,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/Logotype/trasnparentlogo.png`,
        },
        foundingDate: '2023',
        foundingLocation: {
            '@type': 'Place',
            name: 'Borås, Sverige',
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Borås',
            addressCountry: 'SE',
        },
        sameAs: ['https://se.trustpilot.com/review/lescent.se'],
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'lescentsweden@hotmail.com',
            contactType: 'customer service',
            availableLanguage: 'Swedish',
        },
    };
}

// WebSite schema enables Google's sitelinks searchbox in search results.
export function buildWebSiteSchema(): JsonLdValue {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Lescent',
        url: SITE_URL,
        description: 'Exklusiva oljebaserade parfymer utan alkohol. Handgjorda i Sverige med långvarig doft.',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

export function buildProductSchema(product: Product): JsonLdValue {
    const variant = product.variants.edges[0]?.node;
    const seoContent = getProductSeoContent(product);

    // Produkt-schemat inkluderar nu bild och original-brand för rikare Google-representation.
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: stripHtml(product.descriptionHtml || product.description),
        image: product.featuredImage?.url ?? `${SITE_URL}/realhero_compreesd.png`,
        brand: { '@type': 'Brand', name: 'Lescent' },
        manufacturer: { '@type': 'Organization', name: 'Lescent' },
        additionalProperty: [
            { '@type': 'PropertyValue', name: 'Inspiration', value: seoContent.originalName },
            { '@type': 'PropertyValue', name: 'Bas', value: 'Olja (alkoholfri)' },
            { '@type': 'PropertyValue', name: 'Volym', value: '10ml' },
        ],
        offers: {
            '@type': 'Offer',
            price: product.priceRange.minVariantPrice.amount,
            priceCurrency: product.priceRange.minVariantPrice.currencyCode,
            availability: variant?.availableForSale
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            url: `${SITE_URL}/products/${product.handle}`,
            seller: { '@type': 'Organization', name: 'Lescent' },
        },
    };
}

export function buildArticleSchema(article: BlogPost): JsonLdValue {
    // Full Article schema per Google's rich results spec — includes publisher, image, and canonical URL.
    const canonicalUrl = `${SITE_URL}/blog/${article.slug}`;
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.seoDescription,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
        },
        image: {
            '@type': 'ImageObject',
            url: article.image.startsWith('http') ? article.image : `${SITE_URL}${article.image}`,
        },
        author: {
            '@type': 'Organization',
            name: 'Lescent',
            url: SITE_URL,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Lescent',
            url: SITE_URL,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/Logotype/trasnparentlogo.png`,
            },
        },
    };
}

export function buildFaqSchema(product: Product): JsonLdValue {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: getProductFaqs(product).map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function generateMetadata(page: SeoPage, data: SeoMetadataInput = {}): Metadata {
    if (page === 'default') {
        return {
            metadataBase: new URL(SITE_URL),
            title: {
                default: 'Lescent – Oljebaserade Parfymer Online | Sverige',
                template: '%s',
            },
            description: 'Köp parfymolja online hos Lescent. Oljebaserad parfym med långvarig doft och snabb leverans i Sverige. Beställ idag.',
            keywords: DEFAULT_KEYWORDS,
            authors: [{ name: 'Lescent', url: SITE_URL }],
            creator: 'Lescent',
            publisher: 'Lescent',
            manifest: '/manifest.json',
            formatDetection: {
                email: false,
                address: false,
                telephone: false,
            },
            robots: {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    'max-video-preview': -1,
                    'max-image-preview': 'large',
                    'max-snippet': -1,
                },
            },
            openGraph: {
                siteName: SITE_NAME,
                locale: 'sv_SE',
                images: [
                    {
                        url: DEFAULT_OG_IMAGE,
                        width: 1200,
                        height: 630,
                        alt: 'Lescent logotyp – oljebaserade parfymer',
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                images: [DEFAULT_OG_IMAGE],
            },
        };
    }

    if (page === 'home') {
        return buildMetadataObject({
            title: 'Lescent – Oljebaserade Parfymer Online | Sverige',
            description: trimDescription('Köp parfymolja online hos Lescent. Oljebaserad parfym med långvarig doft, inspirerad av ikoniska favoriter. Beställ idag i Sverige.'),
            path: '/',
            keywords: ['parfym online sverige', 'oljeparfym', 'doftinspiration'],
        });
    }

    if (page === 'collection') {
        return buildMetadataObject({
            title: 'Köp Oljebaserad Parfym Online – Lescent Sverige',
            description: trimDescription('Köp parfymolja och oljebaserad parfym online hos Lescent. Långvarig doft, alkoholfria favoriter och snabb leverans. Utforska kollektionen.'),
            path: '/products',
            keywords: ['köp oljebaserad parfym', 'parfymkollektion', 'parfymolja online'],
        });
    }

    if (page === 'product' && data.product) {
        const seoContent = getProductSeoContent(data.product);

        // Produktmetadata följer ett konsekvent format för title och description.
        return buildMetadataObject({
            title: `${data.product.title} Parfymolja – Inspirerad av ${seoContent.brand} | Lescent`,
            description: trimDescription(`Köp ${data.product.title} parfymolja inspirerad av ${seoContent.brand}. Oljebaserad parfym med långvarig doft. Beställ online idag.`),
            path: `/products/${data.product.handle}`,
            image: data.product.featuredImage?.url,
            keywords: [data.product.title, seoContent.brand, seoContent.originalName, ...data.product.tags],
        });
    }

    if (page === 'blog') {
        return buildMetadataObject({
            title: 'Parfymguider & Doftinspiration – Lescent Blogg',
            description: trimDescription('Läs guider om parfymolja, oljebaserad parfym och långvarig doft. Råd, inspiration och doftkunskap för den moderna parfymälskaren.'),
            path: '/blog',
            keywords: ['parfymguide', 'doftguide', 'blogg parfymolja', 'parfyminspiration', 'doftkunskap'],
        });
    }

    if (page === 'blogArticle' && data.article) {
        return buildMetadataObject({
            title: data.article.seoTitle || `${data.article.title} | Lescent Blogg`,
            description: trimDescription(data.article.seoDescription),
            path: `/blog/${data.article.slug}`,
            image: data.article.image,
            type: 'article',
            keywords: data.article.keywords,
        });
    }

    if (page === 'about') {
        return buildMetadataObject({
            title: 'Om Lescent – Handgjorda Parfymoljor från Sverige',
            description: trimDescription('Läs om Lescent och våra handgjorda parfymoljor från Sverige. Oljebaserad parfym med långvarig doft. Utforska vår resa online.'),
            path: '/about',
            keywords: ['om lescent', 'handgjord parfymolja', 'svensk parfym'],
        });
    }

    if (page === 'contact') {
        return buildMetadataObject({
            title: 'Kontakt – Lescent Sverige',
            description: trimDescription('Kontakta Lescent om parfymolja, beställningar och oljebaserad parfym. Vi hjälper dig hitta rätt långvarig doft. Hör av dig idag.'),
            path: '/contact',
            keywords: ['kontakt lescent', 'kundservice parfym', 'frågor parfymolja'],
        });
    }

    if (page === 'terms') {
        return buildMetadataObject({
            title: 'Köpvillkor – Lescent',
            description: trimDescription('Läs Lescents köpvillkor för beställning, leverans och retur av parfymolja och oljebaserad parfym online.'),
            path: '/kopvillkor',
            keywords: ['köpvillkor lescent'],
        });
    }

    if (page === 'privacy') {
        return buildMetadataObject({
            title: 'Integritetspolicy – Lescent',
            description: trimDescription('Läs hur Lescent hanterar personuppgifter och integritet när du handlar parfymolja och oljebaserad parfym online.'),
            path: '/integritetspolicy',
            keywords: ['integritetspolicy lescent'],
        });
    }

    if (page === 'parfymolja') {
        return buildMetadataObject({
            title: 'Parfymolja Online – Handgjorda Oljebaserade Parfymer | Lescent Sverige',
            description: trimDescription('Köp exklusiv parfymolja online. Alkoholfria, långvariga dofter inspirerade av världens bästa parfymer. Snabb leverans i Sverige.'),
            path: '/parfymolja',
            keywords: ['parfymolja online', 'handgjord parfymolja', 'oljeparfym sverige', 'köp parfymolja', 'parfymolja bäst', 'oljebaserad doft'],
        });
    }

    if (page === 'parfymUtanAlkohol') {
        return buildMetadataObject({
            title: 'Parfym Utan Alkohol | Oljebaserade Parfymer – Lescent',
            description: trimDescription('Parfym utan alkohol för känslig hud. Våra oljebaserade parfymer är milda, långvariga och fria från irriterande alkohol. Beställ online idag.'),
            path: '/parfym-utan-alkohol',
            keywords: ['parfym utan alkohol', 'alkoholfri parfym', 'känslig hud parfym', 'parfym utan alkohol köpa', 'skonsam parfym', 'naturlig parfym'],
        });
    }

    return buildMetadataObject({
        title: 'Lescent',
        description: trimDescription('Köp parfymolja online hos Lescent. Oljebaserad parfym med långvarig doft.'),
        path: '/',
    });
}
