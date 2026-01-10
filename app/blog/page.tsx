
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Lescent Journal | Kunskap om Parfym',
    description: 'Utforska våra guider och artiklar om oljebaserad parfym, doftnoter och hur du hittar din signaturdoft.'
};

const ARTICLES = [
    {
        id: 1,
        slug: 'alkohol-vs-oljebaserad-parfym',
        title: 'Alkohol vs. Oljebaserad Parfym: Vad är skillnaden?',
        excerpt: 'De flesta kommersiella parfymer består av upp till 90% alkohol. Upptäck varför oljebaserade parfymer är det självklara valet för den medvetna konsumenten.',
        date: '5 Dec, 2025',
        readTime: '4 min läsning',
        category: 'Kunskap',
        image: '/blog/oil-vs-alcohol.png'
    },
    {
        id: 2,
        slug: 'hur-applicerar-man-parfymolja',
        title: 'Ritualen: Hur du applicerar parfymolja korrekt',
        excerpt: 'Att applicera parfymolja är mer än bara en rutin - det är en ritual. Lär dig de strategiska pulspunkterna som maximerar din doftupplevelse.',
        date: '28 Nov, 2025',
        readTime: '3 min läsning',
        category: 'Guide',
        image: '/blog/applying-oil.png'
    },
    {
        id: 3,
        slug: 'topp-hjarta-basnoter-forklarat',
        title: 'Doftpyramiden Förklarad: Förstå din parfym',
        excerpt: 'Varför doftar din parfym annorlunda efter en timme? Vi dyker ner i doftpyramidens mysterium och förklarar topp-, hjärt- och basnoter.',
        date: '15 Nov, 2025',
        readTime: '6 min läsning',
        category: 'Utbildning',
        image: '/blog/fragrance-pyramid.png'
    },
    {
        id: 4,
        slug: 'hitta-din-signaturdoft',
        title: 'Konsten att hitta din signaturdoft',
        excerpt: 'Din doft är ditt osynliga visitkort. Här är guiden till att hitta parfymen som speglar din personlighet och stil.',
        date: '1 Nov, 2025',
        readTime: '5 min läsning',
        category: 'Inspiration',
        image: '/blog/collection.png'
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-44 md:pt-52 pb-24">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute left-[-20%] top-[-10%] h-[1000px] w-[1000px] bg-primary/5 blur-[150px] rounded-full" />
                <div className="absolute right-[-20%] bottom-[-10%] h-[800px] w-[800px] bg-gold-400/5 blur-[150px] rounded-full" />
            </div>

            <div className="container relative z-10 px-6">
                {/* Header */}
                <div className="mb-24 space-y-6 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="text-muted-foreground text-sm tracking-[0.3em] uppercase font-medium">Lescent Journal</span>
                    <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-foreground">
                        Kunskap & <br /><span className="italic text-muted-foreground">Inspiration</span>
                    </h1>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                        En samling artiklar för att fördjupa din förståelse för dofternas värld.
                        Från vetenskapen bakom oljor till konsten att bära dem.
                    </p>
                </div>

                {/* Article Grid */}
                <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-2">
                    {ARTICLES.map((article, _index) => (
                        <Link
                            href={`/blog/${article.slug}`}
                            key={article.id}
                            className="group block space-y-6"
                        >
                            {/* Card Image */}
                            <div className="aspect-[16/9] bg-secondary/5 rounded-lg overflow-hidden relative shadow-sm transition-all duration-500 group-hover:shadow-md">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/0" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">
                                    <span>{article.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-primary/20" />
                                    <span>{article.readTime}</span>
                                </div>
                                <h2 className="font-serif text-3xl font-medium text-foreground group-hover:text-primary transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-foreground font-medium group-hover:gap-4 transition-all group-hover:text-primary">
                                    Läs artikeln <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
