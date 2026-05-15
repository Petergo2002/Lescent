import type { Metadata } from 'next';
import Link from 'next/link';
import { MAINTENANCE_COPY } from 'lib/site-status';

export const metadata: Metadata = {
  title: 'Tillfälligt pausat | Lescent',
  description:
    'Lescent är tillfälligt pausat medan vi arbetar med sidan och ser över orderhanteringen.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,41,119,0.12),_transparent_42%),linear-gradient(135deg,_rgba(0,57,39,0.12),_transparent_55%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-[2rem] border border-black/10 bg-white/80 p-8 text-center shadow-[0_30px_120px_rgba(0,0,0,0.08)] backdrop-blur md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/75">
            {MAINTENANCE_COPY.badge}
          </p>
          <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight text-foreground md:text-6xl">
            {MAINTENANCE_COPY.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {MAINTENANCE_COPY.description}
          </p>

          <div className="mt-10 rounded-3xl border border-primary/10 bg-primary/5 px-6 py-5">
            <p className="text-sm uppercase tracking-[0.25em] text-primary/70">
              {MAINTENANCE_COPY.contactLabel}
            </p>
            <Link
              href={`mailto:${MAINTENANCE_COPY.contactEmail}`}
              className="mt-3 inline-block font-medium text-foreground underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary"
            >
              {MAINTENANCE_COPY.contactEmail}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
