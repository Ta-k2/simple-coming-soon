import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY } from '../lib/shopify';
import { useCartStore } from '../stores/cartStore';
import Header from '../components/Header';

interface ProductPageProps {
  handle: string;
  onNavigateHome: () => void;
}

export default function ProductPage({ handle, onNavigateHome }: ProductPageProps) {
  const { lang } = useLanguage();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(s => s.addItem);
  const isCartLoading = useCartStore(s => s.isLoading);

  useEffect(() => {
    (async () => {
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
        setProduct(data?.data?.product || null);
      } catch (e) {
        console.error('Failed to fetch product:', e);
      } finally {
        setLoading(false);
      }
    })();
  }, [handle]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#fbfaf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", color: '#6f531a' }}>
          {lang === 'nl' ? 'Product laden...' : 'Loading product...'}
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', background: '#fbfaf8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", color: '#6f531a' }}>
          {lang === 'nl' ? 'Product niet gevonden' : 'Product not found'}
        </p>
        <button onClick={onNavigateHome} style={{ fontFamily: "'Figtree', system-ui, sans-serif", background: '#d3a522', color: '#090708', border: 'none', padding: '0.8rem 2rem', cursor: 'pointer', fontWeight: 700, fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          {lang === 'nl' ? 'Terug naar home' : 'Back to home'}
        </button>
      </div>
    );
  }

  const images = product.images?.edges || [];
  const variants = product.variants?.edges || [];
  const selectedVariant = variants[selectedVariantIdx]?.node;
  const hasMultipleVariants = variants.length > 1;

  return (
    <div style={{ minHeight: '100vh', background: '#fbfaf8' }}>
      <Header onOpenWaitlist={() => {}} onOpenContact={() => {}} />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: 'calc(64px + 3rem) clamp(1.5rem, 5vw, 4rem) 4rem' }}>
        <button
          onClick={onNavigateHome}
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#6f531a',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '2rem',
            padding: 0,
          }}
        >
          ← {lang === 'nl' ? 'Terug' : 'Back'}
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'start' }}>
          {/* Images */}
          <div>
            <div style={{ aspectRatio: '1', overflow: 'hidden', background: '#f5f0e8', marginBottom: '0.75rem' }}>
              {images[selectedImage]?.node && (
                <img
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {images.map((img: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    style={{
                      width: '60px', height: '60px', overflow: 'hidden', background: '#f5f0e8',
                      border: i === selectedImage ? '2px solid #d3a522' : '1px solid rgba(111,83,26,0.1)',
                      cursor: 'pointer', padding: 0,
                    }}
                  >
                    <img src={img.node.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 style={{ fontFamily: "'Furlong Vintage', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#090708', marginBottom: '0.75rem', lineHeight: 1.1 }}>
              {product.title}
            </h1>
            <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '1.3rem', color: '#d3a522', fontWeight: 600, marginBottom: '1.5rem' }}>
              {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || '0').toFixed(2)}
            </p>
            <div style={{ width: '32px', height: '1px', background: '#d3a522', opacity: 0.4, marginBottom: '1.5rem' }} />
            <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '0.95rem', color: '#090708', lineHeight: 1.8, marginBottom: '2rem' }}>
              {product.description}
            </p>

            {hasMultipleVariants && (
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6f531a', marginBottom: '0.5rem' }}>
                  {lang === 'nl' ? 'Variant' : 'Variant'}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {variants.map((v: any, i: number) => (
                    <button
                      key={v.node.id}
                      onClick={() => setSelectedVariantIdx(i)}
                      style={{
                        fontFamily: "'Figtree', system-ui, sans-serif",
                        fontSize: '0.8rem',
                        padding: '0.5rem 1rem',
                        border: i === selectedVariantIdx ? '2px solid #d3a522' : '1px solid rgba(111,83,26,0.2)',
                        background: i === selectedVariantIdx ? 'rgba(211,165,34,0.08)' : 'transparent',
                        color: '#090708',
                        cursor: 'pointer',
                      }}
                    >
                      {v.node.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              disabled={isCartLoading || !selectedVariant?.availableForSale}
              onClick={() => {
                if (!selectedVariant) return;
                addItem({
                  product: { node: product },
                  variantId: selectedVariant.id,
                  variantTitle: selectedVariant.title,
                  price: selectedVariant.price,
                  quantity: 1,
                  selectedOptions: selectedVariant.selectedOptions || [],
                });
              }}
              style={{
                fontFamily: "'Figtree', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#090708',
                background: isCartLoading ? 'rgba(211,165,34,0.55)' : '#d3a522',
                border: 'none',
                padding: '1.1rem 3rem',
                cursor: isCartLoading ? 'default' : 'pointer',
                transition: 'background 0.25s',
                width: '100%',
              }}
              onMouseEnter={e => { if (!isCartLoading) e.currentTarget.style.background = '#b8921e'; }}
              onMouseLeave={e => { if (!isCartLoading) e.currentTarget.style.background = '#d3a522'; }}
            >
              {isCartLoading
                ? (lang === 'nl' ? 'Toevoegen...' : 'Adding...')
                : !selectedVariant?.availableForSale
                  ? (lang === 'nl' ? 'Uitverkocht' : 'Sold out')
                  : (lang === 'nl' ? 'In winkelwagen' : 'Add to Cart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
