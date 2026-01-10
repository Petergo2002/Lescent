
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
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
                        <span>Guide</span>
                        <span className="w-1 h-1 rounded-full bg-primary/20" />
                        <span>5 min läsning</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight text-foreground">
                        Artikeln kommer snart
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
