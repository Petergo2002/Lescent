'use client';
import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { CartSheet } from 'components/cart/cart-sheet';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from 'components/ui/sheet';
import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Hem' },
    { href: '/products', label: 'Kollektion' },
    { href: '/blog', label: 'Journal' },
    { href: '/about', label: 'Om Oss' },
];

import { Cart } from 'lib/shopify/types';

export function Navbar({ cart }: { cart: Cart | undefined }) {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to determine if we are on the home page (transparent) or not
    const isHome = pathname === '/';

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300 border-b",
                isScrolled || !isHome
                    ? "bg-evergreen border-white/10 shadow-sm py-2"
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <div className="container flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo - aligned to the left */}
                <Link href="/" className="flex items-center flex-shrink-0">
                    <Image
                        src="/Logotype/trasnparentlogo.png"
                        alt="LESCENT"
                        width={280}
                        height={93}
                        className={cn(
                            "object-contain h-24 w-auto transition-all",
                            isHome && !isScrolled ? "invert" : "invert-0" // Invert on home (light bg) for both mobile and desktop
                        )}
                        priority
                        unoptimized
                    />
                </Link>

                {/* Centered Links */}
                <div className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "group relative text-sm font-medium transition-colors hover:text-eggshell",
                                isScrolled || !isHome ? "text-white" : "text-evergreen"
                            )}
                        >
                            {link.label}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-eggshell"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-eggshell transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu */}
                <div className="flex md:hidden items-center gap-4">
                    <button className={cn("hover:text-eggshell transition-colors", isScrolled || !isHome ? "text-white" : "text-evergreen")}>
                        <Search className="h-5 w-5" />
                    </button>
                    {/* Pass custom color class to CartSheet if needed, otherwise it handles itself. Assuming CartSheet icon is styleable or consistent. */}
                    <div className={cn(isScrolled || !isHome ? "text-white" : "text-evergreen")}>
                        <CartSheet cart={cart} />
                    </div>

                    <Sheet>
                        <SheetTrigger asChild>
                            <button className={cn("p-2 transition-colors hover:text-eggshell", isScrolled || !isHome ? "text-white" : "text-evergreen")} suppressHydrationWarning>
                                <Menu className="h-6 w-6" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-evergreen text-white pt-12">
                            <SheetTitle className="sr-only">Meny</SheetTitle>
                            <SheetDescription className="sr-only">Navigera genom butiken</SheetDescription>
                            <div className="flex flex-col gap-8 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-2xl font-serif font-medium text-white hover:text-eggshell transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Actions */}
                <div className={cn(
                    "hidden md:flex items-center gap-6 transition-colors",
                    isScrolled || !isHome ? "text-white" : "text-evergreen"
                )}>
                    <button className="hover:text-eggshell">
                        <Search className="h-5 w-5" />
                    </button>

                    <div className="flex items-center gap-4">
                        <CartSheet cart={cart} />
                    </div>
                </div>
            </div>
        </nav>
    );
}
