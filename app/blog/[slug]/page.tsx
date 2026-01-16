
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { getBlogPost } from '@/lib/blog';
import Image from 'next/image';

type Props = {
    params: Promise<{ slug: string }>;
};

/**
 * Genererar dynamisk metadata för varje bloggartikel.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = getBlogPost(slug);

    if (!article) {
        return {
            title: 'Artikel ej hittad | Lescent',
            description: 'Kunde inte hitta artikeln du sökte.',
            robots: {
                index: false,
                follow: true
            }
        };
    }

    return {
        title: article.title,
        description: article.seoDescription,
        keywords: article.keywords,
        openGraph: {
            title: `${article.title} | Lescent Journal`,
            description: article.seoDescription,
            type: 'article',
            locale: 'sv_SE',
            url: `https://lescent.se/blog/${slug}`,
            publishedTime: new Date(article.date).toISOString(), // Roughly parsing the date string or assuming functionality if needed, keeping simple for now
            authors: ['Lescent'],
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
            description: article.seoDescription,
            images: [article.image],
        },
        alternates: {
            canonical: `https://lescent.se/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const article = getBlogPost(slug);

    if (!article) {
        return (
            <div className="min-h-screen pt-44 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl font-serif mb-4">Artikeln kunde inte hittas</h1>
                <Link href="/blog" className="text-primary hover:underline">
                    Tillbaka till Journalen
                </Link>
            </div>
        );
    }

    // JSON-LD Structured Data for Article
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.seoDescription,
        image: `https://lescent.se${article.image}`,
        datePublished: article.date, // Note: Should ideally be ISO format
        author: {
            '@type': 'Organization',
            name: 'Lescent',
            url: 'https://lescent.se'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Lescent',
            logo: {
                '@type': 'ImageObject',
                url: 'https://lescent.se/logo.png' // Assumed logo path
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://lescent.se/blog/${slug}`
        }
    };

    return (
        <div className="min-h-screen pt-44 md:pt-52 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute right-0 top-1/4 h-[800px] w-[800px] bg-primary/5 blur-[150px] rounded-full" />
                <div className="absolute left-0 bottom-0 h-[600px] w-[600px] bg-gold-400/5 blur-[100px] rounded-full" />
            </div>

            <article className="container relative z-10 max-w-3xl px-6 mx-auto">
                <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm uppercase tracking-widest group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Tillbaka till Journalen
                </Link>

                <header className="space-y-8 mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{article.category}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span>{article.readTime}</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground">
                        {article.title}
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-8" />
                </header>

                <div className="relative aspect-video mb-16 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div
                    className="prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-p:font-light prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:font-medium prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-muted-foreground mx-auto"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <hr className="border-border my-16" />

                <div className="text-center font-light italic text-muted-foreground">
                    <p className="mb-6">Vill du utforska dofterna vi pratar om?</p>
                    <Link
                        href="/products"
                        className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium tracking-wide hover:bg-primary/90 transition-all hover:scale-105 shadow-sm"
                    >
                        Upptäck Kollektionen
                    </Link>
                </div>
            </article>
        </div>
    );
}
