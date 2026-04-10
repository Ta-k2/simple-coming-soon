import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

export default function WatJeErvaart() {
  const { lang } = useLanguage();
  return (
    <section
      style={{
        background: '#ece5d6',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 8vw, 8rem)',
      }}
    >
      <style>{`
        .watjeervaart-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          max-width: 820px;
          margin: 0 auto;
        }
        @media (max-width: 600px) {
          .watjeervaart-grid { grid-template-columns: 1fr !important; }
        }
        .watjeervaart-card {
          background: #fbfaf8;
          border: 1px solid rgba(211,165,34,0.15);
          border-radius: 14px;
          padding: 2rem;
        }
      `}</style>

      <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            color: '#d3a522',
            textTransform: 'uppercase',
            marginBottom: '1.1rem',
          }}
        >
          {t.watJeErvaart.label[lang]}
        </p>

        <h2
          style={{
            fontFamily: "'Furlong Vintage', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            color: '#090708',
            lineHeight: 1.1,
            marginBottom: '1.4rem',
            letterSpacing: '-0.01em',
          }}
        >
          {t.watJeErvaart.heading[lang]}
        </h2>

        <p
          style={{
            fontFamily: "'Furlong Vintage', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
            color: '#6f531a',
            lineHeight: 1.7,
            maxWidth: '480px',
            margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto',
          }}
        >
          {t.watJeErvaart.intro[lang]}
        </p>

        <div className="watjeervaart-grid">
          {t.watJeErvaart.cards.map((card, i) => (
            <div className="watjeervaart-card" key={i}>
              <div
                style={{
                  fontSize: '1.15rem',
                  color: '#d3a522',
                  marginBottom: '1.4rem',
                  textAlign: 'left',
                  lineHeight: 1,
                }}
              >
                {card.icon}
              </div>
              <p
                style={{
                  fontFamily: "'Furlong Vintage', Georgia, serif",
                  fontWeight: 400,
                  fontSize: '1.1rem',
                  color: '#6f531a',
                  marginBottom: '0.65rem',
                  lineHeight: 1.2,
                  textAlign: 'left',
                }}
              >
                {card.title[lang]}
              </p>
              <p
                style={{
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: '0.9rem',
                  color: '#090708',
                  lineHeight: 1.7,
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                {card.desc[lang]}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Furlong Vintage', Georgia, serif",
            fontWeight: 400,
            fontSize: '1rem',
            fontStyle: 'italic',
            color: '#6f531a',
            textAlign: 'center',
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            opacity: 0.85,
          }}
        >
          {t.watJeErvaart.outro[lang]}
        </p>
      </div>
    </section>
  );
}
