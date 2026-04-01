# SEO Changes for lescent.se

## 1. Central SEO-konfiguration

- Skapade `lib/seo.ts`.
- Lade in en central `generateMetadata(page, data?)` för App Router-sidor.
- Standardiserade title, meta description, canonical, Open Graph och Twitter Card.
- Säkrade att metadata utgår från `https://lescent.se` och samma standardbild.

### Varför

- För att undvika spretig metadata mellan sidor.
- För att ge konsekventa canonical-taggar och delningskort.
- För att kunna styra SEO-logik för produkter, blogg och landningssidor från en källa.

## 2. Metadata uppdaterad på befintliga sidor

- `app/layout.tsx` använder nu central standardmetadata.
- `app/page.tsx` använder startsidans SEO-title och description.
- `app/products/page.tsx` använder SEO för kollektionssida.
- `app/products/[handle]/page.tsx` genererar dynamisk metadata per produkt.
- `app/blog/page.tsx` använder central bloggmetadata.
- `app/blog/[slug]/page.tsx` genererar artikelmetadata per slug.
- `app/about/page.tsx`, `app/contact/page.tsx`, `app/kopvillkor/page.tsx` och `app/integritetspolicy/page.tsx` använder central metadata.

### Varför

- För att varje sida ska ha unik, indexerbar och sökintentsanpassad metadata.

## 3. Blogg-SEO

- Uppdaterade `lib/blog.ts` med:
  - `seoTitle`
  - `seoDescription`
  - `publishedAt`
- Matchade de fyra befintliga artiklarna mot de titlar och descriptions som efterfrågades.
- Bloggartiklar använder nu `Article` schema och korrekta canonical-URL:er.

### Varför

- För att stärka långsvanssökningar kring parfymolja, applicering, doftnoter och signaturdoft.

## 4. Structured Data / JSON-LD

- Skapade `components/SchemaMarkup.tsx`.
- Startsidan renderar `Organization` schema.
- Produktsidor renderar:
  - `Product` schema
  - `FAQPage` schema
- Bloggsidor renderar `Article` schema.

### Varför

- För att öka chansen till rich results och tydligare semantisk förståelse i Google.

## 5. Produktsidor förbättrade för SEO

- Byggde om `app/products/[handle]/page.tsx` så att sidan nu innehåller:
  - SEO-optimerad `h1`
  - produkt-tagline med pris
  - SEO-text om doftinspirationen
  - strukturerade doftnoter
  - avsnitt om varför oljebaserad parfym
  - FAQ-block med tre frågor och svar
- Lade in produkthelpers i `lib/seo.ts` för:
  - doftinspirationsdata
  - produkt-alt-texter
  - FAQ-innehåll
  - schema-data

### Varför

- För att göra produktsidorna sökbara på både generiska och doftspecifika termer.
- För att ge mer indexerbart innehåll än enbart kort produktbeskrivning.

## 6. Nya SEO-landningssidor

- Skapade `app/parfymolja/page.tsx`.
- Skapade `app/parfym-utan-alkohol/page.tsx`.
- Båda sidorna:
  - har egen metadata
  - har cirka 200 ord SEO-text
  - listar alla produkter via samma datakälla som övriga sajten

### Varför

- För att få indexerbara landningssidor för centrala svenska söktermer med tydlig sökavsikt.

## 7. Intern länkning

- Lade till interna länkar till de nya landningssidorna i:
  - `components/sections/FeatureSection.tsx`
  - `components/sections/ProductGrid.tsx`
  - `app/products/page.tsx`

### Varför

- För att hjälpa Google att hitta och förstå de nya SEO-sidorna.
- För att skicka intern länkkraft från startsida och kollektionssida.

## 8. Sitemap och robots

- Uppdaterade `app/sitemap.ts` så att sitemap nu innehåller:
  - startsidan
  - `/products`
  - `/parfymolja`
  - `/parfym-utan-alkohol`
  - varje produktsida
  - `/blog`
  - varje bloggartikel
  - `/about`
  - `/contact`
  - policy- och villkorssidor
- Uppdaterade `app/robots.ts` till:
  - `Allow: /`
  - `Disallow: /api/`
  - sitemap-pekare till `https://lescent.se/sitemap.xml`

### Varför

- För att säkerställa korrekt crawlbarhet och bättre upptäckt av viktiga sidor.

## 9. Tekniska SEO-fixar

- Uppdaterade `next.config.ts` med global header:
  - `X-Robots-Tag: index, follow`
- Lade till permanent redirect:
  - `/products/ambre-suit` -> `/products/ambre-nuit`
- Lade till canonical-taggar via central metadata.

### Varför

- För att minska risken för felindexering och konsolidera eventuella felstavade produkt-URL:er.

## 10. Bild-alt-texter

- Uppdaterade alt-texter för:
  - produktkort
  - produktsidor
  - varukorgsbilder
  - logotyp
  - hero- och innehållsbilder
  - bloggkort och blogghero

### Varför

- För att förbättra bild-SEO, tillgänglighet och sidans semantiska relevans.

## 11. Visuell struktur för SEO-innehåll

- Lade till CSS i `app/globals.css` för:
  - `.product-tagline`
  - `.seo-text`
  - `.product-faq`

### Varför

- För att de nya SEO-blocken ska vara läsbara och integrerade i befintlig design utan att bryta layouten.

## 12. Verifiering

- Körde `npm run build`.
- Bygget gick igenom utan fel.
