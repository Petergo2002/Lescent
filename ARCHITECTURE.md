# Lescent Architecture & System Overview

## 1. System Overview
**Lescent** is a headless ecommerce application built with **Next.js 15** (App Router) and **TypeScript**, using **Shopify** as the backend platform via the **Storefront API**.

- **Frontend**: Next.js 15 (Vercel)
- **Backend**: Shopify (Headless)
- **Styling**: Tailwind CSS + shadcn/ui
- **State**: Zustand (Client) + Shopify Cart (Server Source of Truth)

## 2. Data Flow & "Source of Truth"
**Shopify is the canonical source of truth** for all product data, pricing, inventory, and cart state.

### Product Data
`Shopify (Storefront API)` -> `Next.js Server Components` -> `UI`
- **Caching**: We use Next.js `fetch` cache with `revalidateTag` to cache product queries.
- **Updates**: Webhooks (future) or manual revalidation triggers cache updates.

### Cart Architecture
The cart is **hybrid**:
1.  **Server State**: The `cartId` is stored in a secure HTTP-only cookie. The actual line items live in Shopify.
2.  **Client State**: We use `zustand` to store the cart object locally for immediate UI feedback (optimistic updates), but **every action** triggers a Server Action to sync with Shopify.

**Flow:**
1.  User clicks "Lägg i varukorg" (Add to Cart).
2.  Client calls `addToCartAction(variantId, quantity)`.
3.  Server Action calls Shopify `cartLinesAdd`.
4.  Shopify returns new Cart object.
5.  Server Action revalidates the cart tag and returns the new Cart.
6.  Client updates Zustand store with the fresh data.

## 3. Folder Structure
```
/app
  /cart             # Cart page (optional, if not using drawer only)
  /products
    /[handle]       # Product Detail Page (PDP)
      page.tsx
  layout.tsx        # Root layout (Fonts, Providers)
  page.tsx          # Homepage (Hero, Featured Products)

/components
  /layout           # Header, Footer, CartDrawer
  /sections         # Hero, ProductGrid, About
  /ui               # shadcn/ui primitives (Button, Sheet, etc.)

/lib
  /shopify          # Core Shopify Integration
    client.ts       # Typed fetch wrapper
    queries.ts      # GraphQL queries (Products, Collections)
    mutations.ts    # GraphQL mutations (Cart)
    types.ts        # TypeScript interfaces for Shopify objects
  utils.ts          # Helper functions (currency formatting, class merging)

/types              # Global types
```

## 4. Key Decisions & Rules

### Naming Conventions
- **Components**: PascalCase (e.g., `ProductCard.tsx`)
- **Functions**: camelCase (e.g., `getProductByHandle`)
- **Files**: kebab-case or camelCase (Next.js enforces some, we prefer `kebab-case` for utilities).

### Scaling Strategy
- **Edge Caching**: Vercel's Edge Network caches static pages (Home, PDPs).
- **Incremental Static Regeneration (ISR)**: Product pages are statically generated at build time and revalidated periodically (e.g., every hour) or on-demand.
- **Rate Limiting**: We respect Shopify's leaky bucket rate limit by handling `429` errors in `client.ts`.

### SEO (Search Engine Optimization)
- **Metadata**: Every page exports a `generateMetadata` function.
- **Canonical URLs**: Always set to the production domain.
- **Structured Data (JSON-LD)**: Product pages include Schema.org markup for Rich Snippets (Price, Availability).

## 5. Performance & Caching
- **Images**: Use `next/image` for all product images with proper `sizes` attributes.
- **Fonts**: `next/font` (Google Fonts) for zero layout shift.
- **Scripts**: Third-party scripts (Analytics) loaded via `next/script` with `strategy="afterInteractive"`.

## 6. Environment Variables
```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-public-access-token
```
**Note**: Never expose Admin API keys. Only Storefront API tokens are safe for the client-side (though we primarily use them server-side).
