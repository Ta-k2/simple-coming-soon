import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCartStore } from '../stores/cartStore';

export default function CartDrawer() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);

  useEffect(() => { if (isOpen) syncCart(); }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const url = getCheckoutUrl();
    if (url) {
      window.open(url, '_blank');
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating cart button */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 90,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#d3a522',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(111,83,26,0.3)',
          transition: 'transform 0.2s, background 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = '#b8921e'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#d3a522'; }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#090708" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {totalItems > 0 && (
          <span style={{
            position: 'absolute', top: '-4px', right: '-4px',
            background: '#090708', color: '#fbfaf8',
            fontSize: '0.65rem', fontWeight: 700,
            width: '20px', height: '20px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Figtree', system-ui, sans-serif",
          }}>
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(9,7,8,0.4)',
            backdropFilter: 'blur(4px)',
          }}
        />
      )}

      {/* Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 201,
        width: '100%', maxWidth: '420px',
        background: '#fbfaf8',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        display: 'flex', flexDirection: 'column',
        boxShadow: isOpen ? '-8px 0 30px rgba(0,0,0,0.1)' : 'none',
      }}>
        {/* Header */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(111,83,26,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontFamily: "'Furlong Vintage', Georgia, serif", fontSize: '1.3rem', color: '#090708', margin: 0 }}>
            {lang === 'nl' ? 'Winkelwagen' : 'Shopping Cart'}
          </h3>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#6f531a', padding: '4px' }}>✕</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
          {items.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1rem' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(111,83,26,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", color: 'rgba(111,83,26,0.5)', fontSize: '0.9rem' }}>
                {lang === 'nl' ? 'Je winkelwagen is leeg' : 'Your cart is empty'}
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {items.map(item => (
                <div key={item.variantId} style={{ display: 'flex', gap: '1rem', padding: '0.75rem 0', borderBottom: '1px solid rgba(111,83,26,0.06)' }}>
                  <div style={{ width: '64px', height: '64px', background: '#f5f0e8', flexShrink: 0, overflow: 'hidden' }}>
                    {item.product.node.images?.edges?.[0]?.node && (
                      <img src={item.product.node.images.edges[0].node.url} alt={item.product.node.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '0.85rem', fontWeight: 600, color: '#090708', margin: '0 0 0.15rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.product.node.title}
                    </p>
                    <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '0.75rem', color: '#6f531a', margin: '0 0 0.5rem' }}>
                      {item.selectedOptions.map(o => o.value).join(' · ')}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} style={{ width: '24px', height: '24px', border: '1px solid rgba(111,83,26,0.2)', background: 'transparent', cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#090708' }}>−</button>
                      <span style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '0.8rem', width: '24px', textAlign: 'center' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} style={{ width: '24px', height: '24px', border: '1px solid rgba(111,83,26,0.2)', background: 'transparent', cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#090708' }}>+</button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <button onClick={() => removeItem(item.variantId)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.7rem', color: 'rgba(111,83,26,0.4)', padding: '2px' }}>✕</button>
                    <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '0.85rem', fontWeight: 600, color: '#d3a522', margin: 0 }}>
                      {item.price.currencyCode} {(parseFloat(item.price.amount) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(111,83,26,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '1rem', fontWeight: 600, color: '#090708' }}>
                {lang === 'nl' ? 'Totaal' : 'Total'}
              </span>
              <span style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#090708' }}>
                {items[0]?.price.currencyCode} {totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={isLoading || isSyncing}
              style={{
                fontFamily: "'Figtree', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#090708',
                background: isLoading || isSyncing ? 'rgba(211,165,34,0.55)' : '#d3a522',
                border: 'none',
                padding: '1.1rem',
                cursor: isLoading || isSyncing ? 'default' : 'pointer',
                width: '100%',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => { if (!isLoading && !isSyncing) e.currentTarget.style.background = '#b8921e'; }}
              onMouseLeave={e => { if (!isLoading && !isSyncing) e.currentTarget.style.background = '#d3a522'; }}
            >
              {isLoading || isSyncing
                ? (lang === 'nl' ? 'Laden...' : 'Loading...')
                : (lang === 'nl' ? 'Afrekenen via Shopify' : 'Checkout with Shopify')}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
