import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

type Item = typeof t.voorWie.accordionItems[0];

function AccordionItem({ item, index, lang }: { item: Item; index: number; lang: 'nl' | 'en' }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: '1px solid rgba(111,83,26,0.15)',
        borderTop: index === 0 ? '1px solid rgba(111,83,26,0.15)' : undefined,
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1.1rem 0',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.2rem' }}>
          <span
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontWeight: 400,
              fontSize: '1rem',
              color: '#6f531a',
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            —
          </span>
          <p
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
              color: '#090708',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {item.text[lang]}
            <span style={{ color: '#d3a522', fontWeight: 700 }}>{item.highlight[lang]}</span>
            {item.rest[lang]}
            {item.highlight2 && <span style={{ color: '#d3a522', fontWeight: 700 }}>{item.highlight2[lang]}</span>}
            {item.rest2 && item.rest2[lang]}
          </p>
        </div>
        <ChevronDown
          size={16}
          style={{
            color: '#d3a522',
            flexShrink: 0,
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? '200px' : '0',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
            color: '#6f531a',
            lineHeight: 1.75,
            margin: '0 0 1.1rem 2.4rem',
          }}
        >
          {item.detail[lang]}
        </p>
      </div>
    </div>
  );
}

export default function VoorWie() {
  const { lang } = useLanguage();
  return (
    <section
      style={{
        background: '#ece5d6',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 8vw, 8rem)',
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: '#d3a522',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          {t.voorWie.label[lang]}
        </p>

        <h2
          style={{
            fontFamily: "'Furlong Vintage', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            color: '#090708',
            lineHeight: 1.1,
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            letterSpacing: '-0.01em',
          }}
        >
          {lang === 'nl' ? (
            <>Voor wie is{' '}
              <img
                src="https://imgur.com/yiJgWPX.png"
                alt="AURA11"
                style={{
                  height: '0.85em',
                  width: 'auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  position: 'relative',
                  top: '-0.1em',
                }}
              />?
            </>
          ) : (
            <>Who is{' '}
              <img
                src="https://imgur.com/yiJgWPX.png"
                alt="AURA11"
                style={{
                  height: '0.85em',
                  width: 'auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  position: 'relative',
                  top: '-0.1em',
                }}
              /> for?
            </>
          )}
        </h2>

        <div style={{ textAlign: 'left' }}>
          {t.voorWie.accordionItems.map((item, i) => (
            <AccordionItem key={i} item={item} index={i} lang={lang} />
          ))}
        </div>

        <div
          style={{
            marginTop: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          <p
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontWeight: 400,
              fontSize: '1rem',
              fontStyle: 'italic',
              color: '#6f531a',
              lineHeight: 1.7,
              margin: 0,
              opacity: 0.9,
            }}
          >
            {t.voorWie.quote1[lang]}<br />
            {t.voorWie.quote2[lang]}
          </p>
        </div>

        <button
          onClick={() => {
            const el = document.getElementById('ervaart-het-zelf');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            background: '#d3a522',
            color: '#090708',
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            padding: '1.1rem 2.8rem',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            transition: 'background 0.25s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#b8921e')}
          onMouseLeave={e => (e.currentTarget.style.background = '#d3a522')}
        >
          {t.voorWie.cta[lang]}
        </button>
      </div>
    </section>
  );
}
