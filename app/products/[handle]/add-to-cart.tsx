'use client';

import { Button } from 'components/ui/button';
import { addItem } from 'components/cart/actions';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export function AddToCart({ variantId, availableForSale }: { variantId: string; availableForSale: boolean }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleAddToCart = () => {
        startTransition(async () => {
            await addItem(null, variantId);
            router.refresh();
        });
    };

    if (!availableForSale) {
        return (
            <Button disabled className="w-full py-6 text-lg" size="lg">
                Slutsåld
            </Button>
        );
    }

    return (
        <Button
            onClick={handleAddToCart}
            disabled={isPending}
            className="w-full h-14 rounded-full bg-white text-black font-medium text-lg hover:bg-gold-400 hover:text-white hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-white/5"
            size="lg"
        >
            {isPending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Lägger till...
                </>
            ) : (
                'LÄGG I VARUKORG'
            )}
        </Button>
    );
}
