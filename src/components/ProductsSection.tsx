import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { storefrontApiRequest, PRODUCTS_QUERY, type ShopifyProduct } from '../lib/shopify';
import { useCartStore } from '../stores/cartStore';

interface ProductsSectionProps {
  onNavigateProduct: (handle: string) => void;
}

export default function ProductsSection({ onNavigateProduct }: ProductsSectionProps) {
  const { lang } = useLanguage();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(s => s.addItem);
  const isCartLoading = useCartStore(s => s.isLoading);

  useEffect(() => {
    (async () => {
      try {
        const data = await storefrontApiRequest(PRODUCTS_QUERY, { first: 20 });
        setProducts(data?.data?.products?.edges || []);
      } catch (e) {
        console.error('Failed to fetch products:', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <section style={{ background: '#fbfaf8', padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4rem)', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", color: '#6f531a', fontSize: '0.9rem' }}>
          {lang === 'nl' ? 'Producten laden...' : 'Loading products...'}
        </p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="shop" style={{ background: '#fbfaf8', padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4rem)', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontWeight: 400, fontSize: '0.5rem', letterSpacing: '0.5em', color: '#d3a522', textTransform: 'uppercase', marginBottom: '1rem' }}>
          SHOP
        </p>
        <h2 style={{ fontFamily: "'Furlong Vintage', Georgia, serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#090708', marginBottom: '1rem' }}>
          {lang === 'nl' ? 'Binnenkort beschikbaar' : 'Coming Soon'}
        </h2>
        <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", color: '#6f531a', fontSize: '1rem', maxWidth: '400px', margin: '0 auto' }}>
          {lang === 'nl' ? 'Er zijn nog geen producten beschikbaar. Kom snel terug!' : 'No products available yet. Check back soon!'}
        </p>
      </section>
    );
  }

  return (
    <section id="shop" style={{ background: '#fbfaf8', padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4rem)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontWeight: 400, fontSize: '0.5rem', letterSpacing: '0.5em', color: '#d3a522', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>
          SHOP
        </p>
        <h2 style={{ fontFamily: "'Furlong Vintage', Georgia, serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#090708', marginBottom: '3rem', textAlign: 'center' }}>
          {lang === 'nl' ? 'Onze Producten' : 'Our Products'}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {products.map((product) => {
            const img = product.node.images.edges[0]?.node;
            const price = product.node.priceRange.minVariantPrice;
            const variant = product.node.variants.edges[0]?.node;

            return (
              <div
                key={product.node.id}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(111,83,26,0.1)',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 30px rgba(111,83,26,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div
                  onClick={() => onNavigateProduct(product.node.handle)}
                  style={{ aspectRatio: '1', overflow: 'hidden', background: '#f5f0e8' }}
                >
                  {img && (
                    <img
                      src={img.url}
                      alt={img.altText || product.node.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3
                    onClick={() => onNavigateProduct(product.node.handle)}
                    style={{
                      fontFamily: "'Furlong Vintage', Georgia, serif",
                      fontSize: '1.1rem',
                      color: '#090708',
                      margin: '0 0 0.5rem',
                    }}
                  >
                    {product.node.title}
                  </h3>
                  <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '1rem', color: '#d3a522', fontWeight: 600, margin: '0 0 1rem' }}>
                    {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                  </p>
                  <button
                    disabled={isCartLoading || !variant}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!variant) return;
                      addItem({
                        product,
                        variantId: variant.id,
                        variantTitle: variant.title,
                        price: variant.price,
                        quantity: 1,
                        selectedOptions: variant.selectedOptions || [],
                      });
                    }}
                    style={{
                      fontFamily: "'Figtree', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: '0.55rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: '#090708',
                      background: '#d3a522',
                      border: 'none',
                      padding: '0.85rem 1.5rem',
                      cursor: isCartLoading ? 'default' : 'pointer',
                      transition: 'background 0.25s',
                      width: '100%',
                    }}
                    onMouseEnter={e => { if (!isCartLoading) e.currentTarget.style.background = '#b8921e'; }}
                    onMouseLeave={e => { if (!isCartLoading) e.currentTarget.style.background = '#d3a522'; }}
                  >
                    {isCartLoading
                      ? (lang === 'nl' ? 'Toevoegen...' : 'Adding...')
                      : (lang === 'nl' ? 'In winkelwagen' : 'Add to Cart')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
