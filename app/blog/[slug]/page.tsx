import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SchemaMarkup } from 'components/SchemaMarkup';
import { PageAmbience } from 'components/ui/page-ambience';
import { getBlogPost } from '@/lib/blog';
import { buildArticleSchema, buildBreadcrumbSchema, generateMetadata as generateSeoMetadata, SITE_URL } from 'lib/seo';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = getBlogPost(slug);

    if (!article) {
        return {
            title: 'Artikel ej hittad – Lescent',
            description: 'Kunde inte hitta artikeln du sökte.',
            robots: {
                index: false,
                follow: true,
            },
        };
    }

    // Bloggmetadata bygger på den centrala SEO-tabellen i lib/blog.ts och lib/seo.ts.
    return generateSeoMetadata('blogArticle', { article });
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const article = getBlogPost(slug);

    if (!article) {
        return (
            <div className="min-h-screen pt-44 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl font-serif mb-4">Artikeln kunde inte hittas</h1>
                <Link href="/blog" className="text-primary hover:underline">
                    Tillbaka till Bloggen
                </Link>
            </div>
        );
    }

    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: 'Hem', url: SITE_URL },
        { name: 'Blogg', url: `${SITE_URL}/blog` },
        { name: article.title, url: `${SITE_URL}/blog/${article.slug}` },
    ]);

    return (
        <div className="relative isolate min-h-screen pt-44 pb-24 md:pt-52">
            {/* Artikelschemat speglar sidans innehåll och publiceringsdatum. */}
            <SchemaMarkup data={buildArticleSchema(article)} />
            <SchemaMarkup data={breadcrumbSchema} />
            <PageAmbience />

            <article className="container max-w-3xl px-6 mx-auto">
                <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 text-sm uppercase tracking-widest group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Tillbaka till Bloggen
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
                        alt={`${article.title} – Lescent Journal om parfymolja`}
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
                        className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium tracking-wide hover:bg-primary/90 transition-all hover:scale-105 shadow-sm not-italic"
                    >
                        Upptäck Kollektionen
                    </Link>
                </div>
            </article>
        </div>
    );
}
