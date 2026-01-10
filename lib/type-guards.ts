export interface ShopifyErrorLike {
    status: number;
    message: Error;
    query?: string;
}

export const isShopifyError = (error: unknown): error is ShopifyErrorLike => {
    if (!error || typeof error !== 'object') return false;

    return 'status' in error && 'message' in error;
};
