import { cn } from 'lib/utils';

type PageAmbienceProps = {
    className?: string;
};

export function PageAmbience({ className }: PageAmbienceProps) {
    return (
        <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
            <div className="absolute inset-0 opacity-70 [background:radial-gradient(65%_50%_at_0%_0%,hsl(var(--primary)/0.12),transparent_72%),radial-gradient(60%_45%_at_100%_100%,hsl(var(--secondary)/0.12),transparent_72%)]" />
        </div>
    );
}
