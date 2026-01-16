
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

// Artikel-data för SEO metadata
const ARTICLES: Record<string, { title: string; description: string; image: string; category: string; readTime: string }> = {
    'alkohol-vs-oljebaserad-parfym': {
        title: 'Alkohol vs. Oljebaserad Parfym: Vad är skillnaden?',
        description: 'Upptäck varför oljebaserade parfymer är det självklara valet. Lär dig skillnaden mellan alkoholbaserad och oljebaserad parfym.',
        image: '/blog/oil-vs-alcohol.png',
        category: 'Kunskap',
        readTime: '4 min läsning',
    },
    'hur-applicerar-man-parfymolja': {
        title: 'Ritualen: Hur du applicerar parfymolja korrekt',
        description: 'Lär dig de strategiska pulspunkterna som maximerar din doftupplevelse med oljebaserad parfym.',
        image: '/blog/applying-oil.png',
        category: 'Guide',
        readTime: '3 min läsning',
    },
    'topp-hjarta-basnoter-forklarat': {
        title: 'Doftpyramiden Förklarad: Topp-, Hjärt- och Basnoter',
        description: 'Förstå varför parfym doftar annorlunda efter en timme. En guide till doftpyramidens mysterium.',
        image: '/blog/fragrance-pyramid.png',
        category: 'Utbildning',
        readTime: '6 min läsning',
    },
    'hitta-din-signaturdoft': {
        title: 'Konsten att hitta din signaturdoft',
        description: 'Din doft är ditt osynliga visitkort. Här är guiden till att hitta parfymen som speglar din personlighet.',
        image: '/blog/collection.png',
        category: 'Inspiration',
        readTime: '5 min läsning',
    },
};

type Props = {
    params: Promise<{ slug: string }>;
};

/**
 * Genererar dynamisk metadata för varje bloggartikel.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = ARTICLES[slug];

    if (!article) {
        return {
            title: 'Artikel',
            description: 'Läs mer på Lescent Journal',
        };
    }

    return {
        title: article.title,
        description: article.description,
        openGraph: {
            title: `${article.title} | Lescent Journal`,
            description: article.description,
            type: 'article',
            locale: 'sv_SE',
            images: [{
                url: article.image,
                width: 1200,
                height: 630,
                alt: article.title,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.description,
            images: [article.image],
        },
        alternates: {
            canonical: `https://lescent.se/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const article = ARTICLES[slug];

    // In a real app, fetch article by slug here
    // For now, we just render a generic "Coming Soon" or placeholder template

    return (
        <div className="min-h-screen pt-44 md:pt-52 pb-24">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-1/4 h-[800px] w-[800px] bg-primary/5 blur-[150px] rounded-full" />
                <div className="absolute left-0 bottom-0 h-[600px] w-[600px] bg-gold-400/5 blur-[100px] rounded-full" />
            </div>

            <article className="container relative z-10 max-w-3xl px-6 mx-auto">
                <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4" /> Tillbaka till Journalen
                </Link>

                <header className="space-y-8 mb-16 text-center">
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">
                        <span>{article?.category || 'Guide'}</span>
                        <span className="w-1 h-1 rounded-full bg-primary/20" />
                        <span>{article?.readTime || '5 min läsning'}</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight text-foreground">
                        {article?.title || 'Artikeln kommer snart'}
                    </h1>
                </header>

                <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-p:font-light prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-primary mx-auto">
                    <p className="lead text-2xl font-serif italic text-foreground/80 mb-12">
                        Vi jobbar på att fylla vår journal med djuplodande innehåll om parfymkonsten.
                        Detta inlägg är under konstruktion och kommer att publiceras inom kort.
                    </p>
                    <hr className="border-border my-12" />
                    <p>
                        Under tiden, utforska gärna vår <Link href="/products" className="text-primary hover:text-foreground no-underline">exklusiva kollektion</Link> av oljebaserade parfymer.
                    </p>
                </div>
            </article>
        </div>
    );
}
