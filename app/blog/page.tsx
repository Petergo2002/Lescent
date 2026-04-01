import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PageAmbience } from 'components/ui/page-ambience';
import { SchemaMarkup } from 'components/SchemaMarkup';
import { BLOG_POSTS as ARTICLES } from '@/lib/blog';
import { generateMetadata as generateSeoMetadata, buildBreadcrumbSchema, SITE_URL } from 'lib/seo';
import { cn } from 'lib/utils';

export const metadata = generateSeoMetadata('blog');

export default function BlogPage() {
    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: 'Hem', url: SITE_URL },
        { name: 'Blogg', url: `${SITE_URL}/blog` },
    ]);
    const [featuredPost, ...remainingPosts] = [...ARTICLES].reverse();

    return (
        <div className="relative isolate min-h-screen pt-44 pb-32 md:pt-52">
            <SchemaMarkup data={breadcrumbSchema} />
            <PageAmbience />

            <div className="container px-6">
                {/* Header */}
                <div className="mb-20 space-y-6 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="text-primary/60 text-sm tracking-[0.4em] uppercase font-semibold">Lescent Blogg</span>
                    <h1 className="font-serif text-6xl md:text-8xl font-medium tracking-tight text-foreground leading-[0.9]">
                        Design & <br /><span className="italic text-muted-foreground/60">Essens</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                        Utforska dofternas vetenskap, hantverket bakom våra oljor och inspiration för din personliga doftresa.
                    </p>
                </div>

                {/* Featured Post */}
                {featuredPost && (
                    <div className="mb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        <Link
                            href={`/blog/${featuredPost.slug}`}
                            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                        >
                            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-full">
                                        Utvald Artikel
                                    </span>
                                </div>
                            </div>
                            <div className="lg:col-span-5 space-y-8">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-[0.2em] font-semibold">
                                    <span>{featuredPost.category}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                                    <span>{featuredPost.readTime}</span>
                                </div>
                                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight group-hover:text-primary transition-colors duration-500">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="pt-4">
                                    <div className="inline-flex items-center gap-3 text-sm text-foreground font-semibold uppercase tracking-widest group-hover:gap-5 transition-all">
                                        Läs hela artikeln <ArrowRight className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Sub-header for the rest */}
                <div className="flex items-center justify-between mb-12 border-b border-border/50 pb-8">
                    <h3 className="font-serif text-3xl font-medium">Fler insikter</h3>
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Visar {remainingPosts.length} artiklar</div>
                </div>

                {/* Article Grid */}
                <div className="grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-2">
                    {remainingPosts.map((article, index) => (
                        <Link
                            href={`/blog/${article.slug}`}
                            key={article.id}
                            className={cn(
                                "group block space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700",
                                `delay-[${(index + 1) * 100}ms]`
                            )}
                        >
                            {/* Card Image */}
                            <div className="aspect-[3/2] bg-secondary/5 rounded-xl overflow-hidden relative shadow-md group-hover:shadow-xl transition-all duration-700 ring-1 ring-black/5">
                                <Image
                                    src={article.image}
                                    alt={`${article.title} – guide`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4 px-2">
                                <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
                                    <span>{article.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-border" />
                                    <span>{article.readTime}</span>
                                </div>
                                <h2 className="font-serif text-3xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
                                    {article.title}
                                </h2>
                                <p className="text-muted-foreground font-light leading-relaxed line-clamp-3">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-foreground font-bold uppercase tracking-widest decoration-primary/30 group-hover:text-primary transition-colors">
                                    Utforska <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
