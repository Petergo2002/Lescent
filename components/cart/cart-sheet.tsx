'use client';

import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from 'components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from 'components/ui/sheet';
import { Separator } from 'components/ui/separator';
import { ScrollArea } from 'components/ui/scroll-area';
import { Cart } from 'lib/shopify/types';
import { formatPrice } from 'lib/utils';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import { removeItem, updateItemQuantity } from 'components/cart/actions';
import { useRouter } from 'next/navigation';

export function CartSheet({ cart }: { cart: Cart | undefined }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const itemCount = cart?.totalQuantity || 0;
    const lines = cart?.lines.edges.map((edge) => edge.node) || [];

    const handleUpdateQuantity = (lineId: string, variantId: string, quantity: number) => {
        startTransition(async () => {
            await updateItemQuantity(null, { lineId, variantId, quantity });
            router.refresh();
        });
    };

    const handleRemoveItem = (lineId: string) => {
        startTransition(async () => {
            await removeItem(null, lineId);
            router.refresh();
        });
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative" suppressHydrationWarning>
                    <ShoppingBag className="h-5 w-5" />
                    {itemCount > 0 && (
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground">
                            {itemCount}
                        </span>
                    )}
                    <span className="sr-only">Öppna varukorg</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="px-1">
                    <SheetTitle className="font-serif text-2xl">Din Varukorg</SheetTitle>
                </SheetHeader>

                {itemCount === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center space-y-4 pr-6">
                        <ShoppingBag className="h-16 w-16 text-muted-foreground/50" />
                        <p className="text-lg font-medium text-muted-foreground">Din varukorg är tom</p>
                        <Button variant="secondary" onClick={() => setIsOpen(false)}>
                            Börja shoppa
                        </Button>
                    </div>
                ) : (
                    <>
                        <ScrollArea className="flex-1 pr-6">
                            <div className="flex flex-col gap-8 py-6">
                                {lines.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative aspect-square h-24 w-24 min-w-[96px] overflow-hidden rounded-md border bg-secondary/10">
                                            {item.merchandise.product.featuredImage && (
                                                <Image
                                                    src={item.merchandise.product.featuredImage.url}
                                                    alt={item.merchandise.product.featuredImage.altText || item.merchandise.product.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between">
                                            <div className="space-y-1">
                                                <h3 className="font-serif font-medium leading-none">{item.merchandise.product.title}</h3>
                                                <p className="text-sm text-muted-foreground">{item.merchandise.title !== 'Default Title' ? item.merchandise.title : ''}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8 rounded-full"
                                                        onClick={() => handleUpdateQuantity(item.id, item.merchandise.id, item.quantity - 1)}
                                                        disabled={isPending}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="w-4 text-center text-sm">{item.quantity}</span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8 rounded-full"
                                                        onClick={() => handleUpdateQuantity(item.id, item.merchandise.id, item.quantity + 1)}
                                                        disabled={isPending}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <div className="flex flex-col items-end gap-1">
                                                    <p className="font-medium">
                                                        {formatPrice(item.cost.totalAmount.amount, item.cost.totalAmount.currencyCode)}
                                                    </p>
                                                    <button
                                                        onClick={() => handleRemoveItem(item.id)}
                                                        className="text-xs text-muted-foreground underline-offset-4 hover:underline"
                                                        disabled={isPending}
                                                    >
                                                        Ta bort
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="space-y-4 pr-6 pt-6">
                            <Separator />
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-base">
                                    <span className="text-muted-foreground">Delsumma</span>
                                    <span>{formatPrice(cart?.cost.subtotalAmount.amount || '0', cart?.cost.subtotalAmount.currencyCode || 'SEK')}</span>
                                </div>
                                <div className="flex justify-between text-base">
                                    <span className="text-muted-foreground">Frakt</span>
                                    <span className="text-muted-foreground">Beräknas i kassan</span>
                                </div>
                                <div className="flex justify-between text-lg font-medium">
                                    <span>Totalt</span>
                                    <span>{formatPrice(cart?.cost.totalAmount.amount || '0', cart?.cost.totalAmount.currencyCode || 'SEK')}</span>
                                </div>
                            </div>
                            <Button className="w-full py-6 text-lg" size="lg" asChild>
                                <a href={cart?.checkoutUrl}>
                                    TILL KASSAN
                                </a>
                            </Button>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
