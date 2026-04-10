import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

const STARS = (
  <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', marginBottom: '1.2rem' }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d3a522" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function Reviews() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const items = t.reviews.items;

  function prev() {
    setIndex(i => (i - 1 + items.length) % items.length);
    setExpanded(false);
  }

  function next() {
    setIndex(i => (i + 1) % items.length);
    setExpanded(false);
  }

  const review = items[index];
  const hasMore = review.full[lang] !== review.short[lang];

  return (
    <section
      style={{
        background: '#fbfaf8',
        padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.5rem, 8vw, 8rem)',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: "'Figtree', system-ui, sans-serif",
          fontWeight: 400,
          fontSize: '0.58rem',
          letterSpacing: '0.45em',
          color: '#d3a522',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}
      >
        {t.reviews.label[lang]}
      </p>

      {STARS}

      <div
        style={{
          maxWidth: '560px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Furlong Vintage', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: '#090708',
            lineHeight: 1.9,
            margin: '0 0 0.5rem',
            whiteSpace: 'pre-line',
          }}
        >
          "{expanded ? review.full[lang] : review.short[lang]}"
        </p>

        {hasMore && (
          <button
            onClick={() => setExpanded(e => !e)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.52rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(211,165,34,0.7)',
              padding: '0.5rem 0',
              marginBottom: '0.6rem',
              transition: 'color 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#d3a522')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(211,165,34,0.7)')}
          >
            {expanded ? t.reviews.expandLess[lang] : t.reviews.expandMore[lang]}
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: expanded ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s',
              }}
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        <p
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: '0.62rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#d3a522',
            margin: '0.4rem 0 0',
          }}
        >
          {review.author[lang]}
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.2rem',
          marginTop: '2.2rem',
        }}
      >
        <button
          onClick={prev}
          aria-label={t.reviews.prevAriaLabel[lang]}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '1px solid rgba(211,165,34,0.4)',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#d3a522',
            transition: 'border-color 0.25s, background 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(211,165,34,0.9)';
            e.currentTarget.style.background = 'rgba(211,165,34,0.07)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(211,165,34,0.4)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <span
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            color: 'rgba(211,165,34,0.55)',
          }}
        >
          {index + 1} / {items.length}
        </span>

        <button
          onClick={next}
          aria-label={t.reviews.nextAriaLabel[lang]}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '1px solid rgba(211,165,34,0.4)',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#d3a522',
            transition: 'border-color 0.25s, background 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(211,165,34,0.9)';
            e.currentTarget.style.background = 'rgba(211,165,34,0.07)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(211,165,34,0.4)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
