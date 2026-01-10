export type Maybe<T> = T | null;

export type Connection<T> = {
    edges: Array<Edge<T>>;
};

export type Edge<T> = {
    node: T;
};

export type Image = {
    url: string;
    altText: string;
    width: number;
    height: number;
};

export type Money = {
    amount: string;
    currencyCode: string;
};

export type ProductOption = {
    id: string;
    name: string;
    values: string[];
};

export type ProductVariant = {
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: {
        name: string;
        value: string;
    }[];
    price: Money;
    compareAtPrice?: Money;
    image?: Image;
};

export type Product = {
    id: string;
    handle: string;
    availableForSale: boolean;
    title: string;
    description: string;
    descriptionHtml: string;
    options: ProductOption[];
    priceRange: {
        maxVariantPrice: Money;
        minVariantPrice: Money;
    };
    variants: Connection<ProductVariant>;
    featuredImage: Image;
    images: Connection<Image>;
    seo: {
        title: string;
        description: string;
    };
    tags: string[];
    updatedAt: string;
};

export type CartItem = {
    id: string;
    quantity: number;
    cost: {
        totalAmount: Money;
    };
    merchandise: {
        id: string;
        title: string;
        selectedOptions: {
            name: string;
            value: string;
        }[];
        product: Product;
    };
};

export type Cart = {
    id: string;
    checkoutUrl: string;
    cost: {
        subtotalAmount: Money;
        totalAmount: Money;
        totalTaxAmount: Money;
    };
    lines: Connection<CartItem>;
    totalQuantity: number;
};

export type Collection = {
    handle: string;
    title: string;
    description: string;
    seo: {
        title: string;
        description: string;
    };
    updatedAt: string;
    products: Connection<Product>;
};

export type ShopifyCartOperation = {
    data: {
        cart: Cart;
    };
    variables: {
        cartId: string;
    };
};

export type ShopifyCreateCartOperation = {
    data: {
        cartCreate: {
            cart: Cart;
        };
    };
};

export type ShopifyAddToCartOperation = {
    data: {
        cartLinesAdd: {
            cart: Cart;
        };
    };
    variables: {
        cartId: string;
        lines: {
            merchandiseId: string;
            quantity: number;
        }[];
    };
};

export type ShopifyRemoveFromCartOperation = {
    data: {
        cartLinesRemove: {
            cart: Cart;
        };
    };
    variables: {
        cartId: string;
        lineIds: string[];
    };
};

export type ShopifyUpdateCartOperation = {
    data: {
        cartLinesUpdate: {
            cart: Cart;
        };
    };
    variables: {
        cartId: string;
        lines: {
            id: string;
            merchandiseId: string;
            quantity: number;
        }[];
    };
};

export type ShopifyProductsOperation = {
    data: {
        products: Connection<Product>;
    };
    variables: {
        query?: string;
        reverse?: boolean;
        sortKey?: string;
    };
};

export type ShopifyProductOperation = {
    data: {
        product: Product;
    };
    variables: {
        handle: string;
    };
};
