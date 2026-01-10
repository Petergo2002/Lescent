import { Cart, Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
    {
        id: 'gid://shopify/Product/1',
        handle: 'arabian-tonka',
        availableForSale: true,
        title: 'Arabian Tonka',
        description: 'En fängslande doftresa till Orienten. Kryddig saffran möter mjuk tonkaböna i en symfoni av värme och elegans.',
        descriptionHtml: '<p>En fängslande doftresa till Orienten. Kryddig saffran möter mjuk tonkaböna i en symfoni av värme och elegans.</p>',
        options: [],
        priceRange: {
            maxVariantPrice: { amount: '699.0', currencyCode: 'SEK' },
            minVariantPrice: { amount: '699.0', currencyCode: 'SEK' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'gid://shopify/ProductVariant/1',
                        title: '10ml',
                        availableForSale: true,
                        selectedOptions: [{ name: 'Size', value: '10ml' }],
                        price: { amount: '699.0', currencyCode: 'SEK' }
                    }
                }
            ]
        },
        featuredImage: {
            url: '/kollektion/arabian tonka.png',
            altText: 'Arabian Tonka - Exklusiv Parfymolja',
            width: 1000,
            height: 1000
        },
        images: {
            edges: [
                {
                    node: {
                        url: '/kollektion/arabian tonka.png',
                        altText: 'Arabian Tonka',
                        width: 1000,
                        height: 1000
                    }
                }
            ]
        },
        seo: { title: 'Arabian Tonka | Lescent', description: 'En magisk doft av saffran och tonkaböna.' },
        tags: ['kryddig', 'orientalisk'],
        updatedAt: new Date().toISOString()
    },
    {
        id: 'gid://shopify/Product/2',
        handle: 'baccarat-rouge',
        availableForSale: true,
        title: 'Rouge 540',
        description: 'En doft som definierar modern lyx. Kristallklar sötma möter träig ambra i en oförglömlig signatur.',
        descriptionHtml: '<p>En doft som definierar modern lyx. Kristallklar sötma möter träig ambra i en oförglömlig signatur.</p>',
        options: [],
        priceRange: {
            maxVariantPrice: { amount: '749.0', currencyCode: 'SEK' },
            minVariantPrice: { amount: '749.0', currencyCode: 'SEK' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'gid://shopify/ProductVariant/2',
                        title: '10ml',
                        availableForSale: true,
                        selectedOptions: [{ name: 'Size', value: '10ml' }],
                        price: { amount: '749.0', currencyCode: 'SEK' }
                    }
                }
            ]
        },
        featuredImage: {
            url: '/kollektion/baccarat.png',
            altText: 'Rouge 540 - Ikonisk Doft',
            width: 1000,
            height: 1000
        },
        images: {
            edges: [
                {
                    node: {
                        url: '/kollektion/baccarat.png',
                        altText: 'Rouge 540',
                        width: 1000,
                        height: 1000
                    }
                }
            ]
        },
        seo: { title: 'Rouge 540 | Lescent', description: 'Kristallklar sötma och ambra.' },
        tags: ['ikonisk', 'bärnsten'],
        updatedAt: new Date().toISOString()
    },
    {
        id: 'gid://shopify/Product/3',
        handle: 'layton-royal',
        availableForSale: true,
        title: 'Royal Layton',
        description: 'En aristokratisk blandning av vanilj, äpple och lavendel. För den som kräver det lilla extra av sin närvaro.',
        descriptionHtml: '<p>En aristokratisk blandning av vanilj, äpple och lavendel. För den som kräver det lilla extra av sin närvaro.</p>',
        options: [],
        priceRange: {
            maxVariantPrice: { amount: '649.0', currencyCode: 'SEK' },
            minVariantPrice: { amount: '649.0', currencyCode: 'SEK' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'gid://shopify/ProductVariant/3',
                        title: '10ml',
                        availableForSale: true,
                        selectedOptions: [{ name: 'Size', value: '10ml' }],
                        price: { amount: '649.0', currencyCode: 'SEK' }
                    }
                }
            ]
        },
        featuredImage: {
            url: '/kollektion/Layton.png',
            altText: 'Royal Layton - Maskulin Elegans',
            width: 1000,
            height: 1000
        },
        images: {
            edges: [
                {
                    node: {
                        url: '/kollektion/Layton.png',
                        altText: 'Royal Layton',
                        width: 1000,
                        height: 1000
                    }
                }
            ]
        },
        seo: { title: 'Royal Layton | Lescent', description: 'Vanilj och lavendel i perfekt harmoni.' },
        tags: ['kryddig', 'frisk'],
        updatedAt: new Date().toISOString()
    },
    {
        id: 'gid://shopify/Product/4',
        handle: 'naxos-sicilia',
        availableForSale: true,
        title: 'Naxos 1861',
        description: 'En hyllning till Sicilien. Söt honung och tobaksblad dansar med frisk citrus för en sofistikerad upplevelse.',
        descriptionHtml: '<p>En hyllning till Sicilien. Söt honung och tobaksblad dansar med frisk citrus för en sofistikerad upplevelse.</p>',
        options: [],
        priceRange: {
            maxVariantPrice: { amount: '699.0', currencyCode: 'SEK' },
            minVariantPrice: { amount: '699.0', currencyCode: 'SEK' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'gid://shopify/ProductVariant/4',
                        title: '10ml',
                        availableForSale: true,
                        selectedOptions: [{ name: 'Size', value: '10ml' }],
                        price: { amount: '699.0', currencyCode: 'SEK' }
                    }
                }
            ]
        },
        featuredImage: {
            url: '/kollektion/naxos.png',
            altText: 'Naxos 1861 - Siciliansk charm',
            width: 1000,
            height: 1000
        },
        images: {
            edges: [
                {
                    node: {
                        url: '/kollektion/naxos.png',
                        altText: 'Naxos 1861',
                        width: 1000,
                        height: 1000
                    }
                }
            ]
        },
        seo: { title: 'Naxos 1861 | Lescent', description: 'Honung och tobak.' },
        tags: ['söt', 'tobak'],
        updatedAt: new Date().toISOString()
    },
    {
        id: 'gid://shopify/Product/5',
        handle: 'oud-maracuja',
        availableForSale: true,
        title: 'Oud Maracujá',
        description: 'En exotisk kollision mellan tropisk passionsfrukt och djup, rökig oud. Unik, vågad och oförglömlig.',
        descriptionHtml: '<p>En exotisk kollision mellan tropisk passionsfrukt och djup, rökig oud. Unik, vågad och oförglömlig.</p>',
        options: [],
        priceRange: {
            maxVariantPrice: { amount: '799.0', currencyCode: 'SEK' },
            minVariantPrice: { amount: '799.0', currencyCode: 'SEK' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'gid://shopify/ProductVariant/5',
                        title: '10ml',
                        availableForSale: true,
                        selectedOptions: [{ name: 'Size', value: '10ml' }],
                        price: { amount: '799.0', currencyCode: 'SEK' }
                    }
                }
            ]
        },
        featuredImage: {
            url: '/kollektion/oud maracuja.png',
            altText: 'Oud Maracujá - Tropisk Oud',
            width: 1000,
            height: 1000
        },
        images: {
            edges: [
                {
                    node: {
                        url: '/kollektion/oud maracuja.png',
                        altText: 'Oud Maracujá',
                        width: 1000,
                        height: 1000
                    }
                }
            ]
        },
        seo: { title: 'Oud Maracujá | Lescent', description: 'Passionsfrujt och oud.' },
        tags: ['exotisk', 'oud'],
        updatedAt: new Date().toISOString()
    },
    {
        id: 'gid://shopify/Product/6',
        handle: 'satin-mood',
        availableForSale: true,
        title: 'Satin Mood',
        description: 'Som att svepa in sig i finaste silke. Bulgarisk ros och vanilj skapar en mjuk, pudrig och sensuell aura.',
        descriptionHtml: '<p>Som att svepa in sig i finaste silke. Bulgarisk ros och vanilj skapar en mjuk, pudrig och sensuell aura.</p>',
        options: [],
        priceRange: {
            maxVariantPrice: { amount: '749.0', currencyCode: 'SEK' },
            minVariantPrice: { amount: '749.0', currencyCode: 'SEK' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'gid://shopify/ProductVariant/6',
                        title: '10ml',
                        availableForSale: true,
                        selectedOptions: [{ name: 'Size', value: '10ml' }],
                        price: { amount: '749.0', currencyCode: 'SEK' }
                    }
                }
            ]
        },
        featuredImage: {
            url: '/kollektion/satin mood.png',
            altText: 'Satin Mood - Silkeslen elegans',
            width: 1000,
            height: 1000
        },
        images: {
            edges: [
                {
                    node: {
                        url: '/kollektion/satin mood.png',
                        altText: 'Satin Mood',
                        width: 1000,
                        height: 1000
                    }
                }
            ]
        },
        seo: { title: 'Satin Mood | Lescent', description: 'Ros och vanilj.' },
        tags: ['blommig', 'sensuell'],
        updatedAt: new Date().toISOString()
    },
    {
        id: 'gid://shopify/Product/7',
        handle: 'tygar-gem',
        availableForSale: true,
        title: 'Tygar Eye',
        description: 'Inspirerad av tigerns öga. En kraftfull explosion av grapefrukt och ingefära med en bas av djup bärnsten.',
        descriptionHtml: '<p>Inspirerad av tigerns öga. En kraftfull explosion av grapefrukt och ingefära med en bas av djup bärnsten.</p>',
        options: [],
        priceRange: {
            maxVariantPrice: { amount: '699.0', currencyCode: 'SEK' },
            minVariantPrice: { amount: '699.0', currencyCode: 'SEK' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'gid://shopify/ProductVariant/7',
                        title: '10ml',
                        availableForSale: true,
                        selectedOptions: [{ name: 'Size', value: '10ml' }],
                        price: { amount: '699.0', currencyCode: 'SEK' }
                    }
                }
            ]
        },
        featuredImage: {
            url: '/kollektion/tygar.png',
            altText: 'Tygar Eye - Citrus och Kraft',
            width: 1000,
            height: 1000
        },
        images: {
            edges: [
                {
                    node: {
                        url: '/kollektion/tygar.png',
                        altText: 'Tygar Eye',
                        width: 1000,
                        height: 1000
                    }
                }
            ]
        },
        seo: { title: 'Tygar Eye | Lescent', description: 'Grapefrukt och bärnsten.' },
        tags: ['citrus', 'fräsch'],
        updatedAt: new Date().toISOString()
    },
    {
        id: 'gid://shopify/Product/8',
        handle: 'imagination-infinite',
        availableForSale: true,
        title: 'Pure Imagination',
        description: 'En doft utan gränser. Svart te, citron och kanel skapar en sofistikerad och ren komposition för drömmaren.',
        descriptionHtml: '<p>En doft utan gränser. Svart te, citron och kanel skapar en sofistikerad och ren komposition för drömmaren.</p>',
        options: [],
        priceRange: {
            maxVariantPrice: { amount: '649.0', currencyCode: 'SEK' },
            minVariantPrice: { amount: '649.0', currencyCode: 'SEK' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'gid://shopify/ProductVariant/8',
                        title: '10ml',
                        availableForSale: true,
                        selectedOptions: [{ name: 'Size', value: '10ml' }],
                        price: { amount: '649.0', currencyCode: 'SEK' }
                    }
                }
            ]
        },
        featuredImage: {
            url: '/kollektion/imagination.png',
            altText: 'Pure Imagination - Renhet',
            width: 1000,
            height: 1000
        },
        images: {
            edges: [
                {
                    node: {
                        url: '/kollektion/imagination.png',
                        altText: 'Pure Imagination',
                        width: 1000,
                        height: 1000
                    }
                }
            ]
        },
        seo: { title: 'Pure Imagination | Lescent', description: 'Te och citrus.' },
        tags: ['te', 'ren'],
        updatedAt: new Date().toISOString()
    }
];

export const MOCK_CART: Cart = {
    id: 'mock-cart-id',
    checkoutUrl: 'https://checkout.shopify.com',
    cost: {
        subtotalAmount: { amount: '699.0', currencyCode: 'SEK' },
        totalAmount: { amount: '699.0', currencyCode: 'SEK' },
        totalTaxAmount: { amount: '139.8', currencyCode: 'SEK' }
    },
    lines: {
        edges: [
            {
                node: {
                    id: 'line-1',
                    quantity: 1,
                    cost: {
                        totalAmount: { amount: '699.0', currencyCode: 'SEK' }
                    },
                    merchandise: {
                        id: 'gid://shopify/ProductVariant/1',
                        title: '10ml',
                        selectedOptions: [{ name: 'Size', value: '10ml' }],
                        product: MOCK_PRODUCTS[0]
                    }
                }
            }
        ]
    },
    totalQuantity: 1
};
