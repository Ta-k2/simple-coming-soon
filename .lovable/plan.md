

## Plan: Integrate Shopify Storefront into Existing Site

### Overview
Add a fully functional Shopify-powered product section and cart/checkout system to your existing AURA11 website. Products will be fetched live from your Shopify store via the Storefront API.

### What will be built

1. **Shopify API setup** -- Create a `src/lib/shopify.ts` utility with the Storefront API configuration (store domain, token, GraphQL helper function, product types)

2. **Cart store with Zustand** -- Install `zustand` and create `src/stores/cartStore.ts` with persistent cart state, real-time Shopify cart sync (create, add lines, update, remove), and checkout URL generation

3. **Cart sync hook** -- Create `src/hooks/useCartSync.ts` to sync cart state on page load and tab focus (clears completed orders)

4. **Products section** -- Add a products grid section to the homepage that fetches products from Shopify Storefront API. Shows "No products found" with a message if the store is empty

5. **Product detail page** -- Add a `/product/[handle]` route for individual product pages with variant selection and "Add to Cart" button

6. **Cart drawer component** -- Floating cart button + slide-out drawer showing cart items, quantities, totals, and "Checkout with Shopify" button that opens the Storefront API checkout URL

7. **Fix existing build errors** -- Remove unused `logoStyle` variable in `EersteToegang.tsx` and unused `error` variable in `ErvaartHetZelf.tsx`

### Technical details
- Store domain: `simple-coming-soon-hwq35.myshopify.com`
- API version: `2025-07`
- Storefront token: configured securely
- Cart checkout URLs include `channel=online_store` parameter and open in new tab
- Hash-based routing will be extended for product detail pages
- Zustand cart persisted to localStorage

### Post-implementation
Since the store has 0 products, after building I'll prompt you to create your first product by describing it in chat.

