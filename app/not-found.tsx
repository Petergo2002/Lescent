import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sidan hittades inte',
    description: 'Sidan du söker finns inte. Gå tillbaka till Lescents startsida.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
            <div className="text-center space-y-6 px-4">
                <h1 className="font-serif text-8xl md:text-9xl font-medium text-primary/20">404</h1>
                <div className="space-y-2">
                    <h2 className="text-2xl font-medium">Sidan hittades inte</h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Vi kunde inte hitta sidan du söker efter. Den kan ha flyttats eller tagits bort.
                    </p>
                </div>
                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2 uppercase tracking-widest"
                    >
                        Tillbaka till startsidan
                    </Link>
                </div>
            </div>
        </div>
    );
}
