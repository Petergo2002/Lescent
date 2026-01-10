# 🚀 BEFORE DEPLOYMENT CHECKLIST

Follow these steps **immediately after deploying** your site to Vercel or Netlify.

---

## 1. Environment Variables (The Keys)
Go to your hosting dashboard (e.g., Vercel > Settings > Environment Variables) and add these:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` | `15w0q1-q1.myshopify.com` | Your store URL |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` | `2fc8a45f76cb4a357e04aa2d5f2fb5ee` | API Access Token |
| `SHOPIFY_WEBHOOK_SECRET` | *(From Shopify Admin)* | See step 2 below |
| `CRON_SECRET` | *(Create your own)* | Random password string (e.g., `my-secret-123`) |

---

## 2. Configure Shopify Webhooks (The Connection)
So your store updates automatically when you change products.

1. Go to **Shopify Admin** → **Settings** → **Notifications** → **Webhooks**
2. Scroll to the bottom and copy the **Signing Secret**.
   - Paste this value correctly into your `SHOPIFY_WEBHOOK_SECRET` environment variable.

3. Click **"Create webhook"** for EACH of these 6 events:

### The Events to Add:
- [ ] `Product creation`
- [ ] `Product update`
- [ ] `Product deletion`
- [ ] `Collection creation`
- [ ] `Collection update`
- [ ] `Collection deletion`

### Configuration for EACH Webhook:
*   **Format:** `JSON`
*   **URL:** `https://YOUR-DEPLOYED-DOMAIN.com/api/webhooks/shopify`
    *   *(e.g., `https://lescent.vercel.app/api/webhooks/shopify`)*
*   **API Version:** (Latest)

---

## 3. Deployment URL Check
Where is your site live?
*   [ ] Verify the domain name works (e.g., `lescent.com`)
*   [ ] Test the "Add to Cart" flow on the live site
*   [ ] Test the "Checkout" redirect on the live site

---

## 4. Troubleshooting
If products aren't updating on the live site:
1. Check that `SHOPIFY_WEBHOOK_SECRET` is correct.
   `https://YOUR-DOMAIN.com/api/revalidate?secret=YOUR_CRON_SECRET`

---

## 5. (Optional) Scheduled Cron Job
Webhooks should handle updates instantly, but setting up a daily "clean up" sync is good practice.

**Using Vercel Cron (easiest):**
1. Create a `vercel.json` file in your project root:
   ```json
   {
     "crons": [
       {
         "path": "/api/revalidate?secret=YOUR_CRON_SECRET",
         "schedule": "0 0 * * *"
       }
     ]
   }
   ```
   *(This runs every night at midnight)*

**Using External Service (e.g., EasyCron, GitHub Actions):**
1. Set URL to: `https://YOUR-DOMAIN.com/api/revalidate?secret=YOUR_CRON_SECRET`
2. Schedule: Daily (e.g., `0 0 * * *`)

