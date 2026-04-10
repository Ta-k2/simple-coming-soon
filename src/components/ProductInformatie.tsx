import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

interface ProductInformatieProps {
  onOpenWaitlist: () => void;
}

export default function ProductInformatie({ onOpenWaitlist: _onOpenWaitlist }: ProductInformatieProps) {
  const { lang } = useLanguage();

  const specs = t.productInfo.specs.map(s => ({
    label: s.label[lang],
    value: s.value[lang],
  }));

  return (
    <section
      style={{
        background: '#fbfaf8',
        padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 8vw, 8rem)',
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .prodinfo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div
        className="prodinfo-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.55rem',
              letterSpacing: '0.4em',
              color: '#d3a522',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            {t.productInfo.label[lang]}
          </p>

          <h2
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#090708',
              lineHeight: 1.1,
              marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
              letterSpacing: '-0.01em',
            }}
          >
            {t.productInfo.heading[lang]}
          </h2>

          <div>
            {specs.map(({ label, value }, i) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: 'clamp(0.7rem, 1.5vw, 1rem) 0',
                  borderTop: i === 0 ? '1px solid rgba(111,83,26,0.15)' : undefined,
                  borderBottom: '1px solid rgba(111,83,26,0.15)',
                  gap: '1rem',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Figtree', system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                    color: '#6f531a',
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "'Figtree', system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                    color: i === 1 || i === 2 ? '#d3a522' : '#090708',
                    textAlign: 'right',
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderRadius: '14px',
            overflow: 'hidden',
            aspectRatio: '4/5',
            minHeight: '320px',
          }}
        >
          <img
            src="https://imgur.com/mbLrW5B.jpg"
            alt={t.productInfo.imageAlt[lang]}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
}
