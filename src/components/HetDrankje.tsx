import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

export default function HetDrankje() {
  const { lang } = useLanguage();
  return (
    <section
      style={{
        background: '#fbfaf8',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      <style>{`
        @media (max-width: 700px) {
          .drankje-grid { flex-direction: column !important; }
          .drankje-img-wrap { display: none !important; }
          .drankje-card { width: 100% !important; }
        }
      `}</style>

      <div
        className="drankje-grid"
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          display: 'flex',
          gap: 'clamp(1.5rem, 3vw, 3rem)',
          alignItems: 'stretch',
        }}
      >
        <div
          className="drankje-img-wrap"
          style={{
            flex: '0 0 46%',
            background: '#ece5d6',
            borderRadius: '2px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '460px',
          }}
        >
          <img
            src="https://i.imgur.com/vZkilG0.png"
            alt={t.hetDrankje.bottleAlt[lang]}
            className="bottle-float"
            style={{
              width: '95%',
              maxWidth: '580px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>

        <div
          className="drankje-card"
          style={{
            flex: '1 1 0',
            background: '#fbfaf8',
            border: '1px solid rgba(211,165,34,0.15)',
            borderRadius: '2px',
            padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.52rem',
              letterSpacing: '0.45em',
              color: '#d3a522',
              textTransform: 'uppercase',
              marginBottom: '0.9rem',
            }}
          >
            {t.hetDrankje.label[lang]}
          </p>

          <img
            src="https://imgur.com/cLPFW8x.png"
            alt="AURA11"
            style={{
              width: 'clamp(140px, 30vw, 240px)',
              height: 'auto',
              display: 'block',
              marginBottom: '1.6rem',
            }}
          />

          <div
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(0.92rem, 1.6vw, 1.02rem)',
              lineHeight: 1.7,
              color: '#6f531a',
              maxWidth: '400px',
            }}
          >
            <p style={{ marginBottom: '1rem' }}>
              {t.hetDrankje.intro1[lang].split('\n').map((line: string, i: number) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </p>

            <p style={{ marginBottom: '1rem', color: '#090708' }}>
              <span style={{ color: '#d3a522' }}>{t.hetDrankje.specs200ml[lang]}</span> {t.hetDrankje.specsZorgvuldig[lang]}<br />
              <span style={{ color: '#d3a522' }}>{t.hetDrankje.specs30mg[lang]}</span> {t.hetDrankje.specsPerFlesje[lang]}<br />
              <span style={{ color: '#d3a522' }}>{t.hetDrankje.specsKcal[lang]}</span>
            </p>

            <p
              style={{
                fontStyle: 'italic',
                color: '#6f531a',
                marginBottom: '2rem',
                lineHeight: 1.8,
              }}
            >
              {t.hetDrankje.tagline[lang].split('\n').map((line: string, i: number) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </p>
          </div>

          <div
            style={{
              borderLeft: '3px solid #d3a522',
              paddingLeft: '1rem',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                fontFamily: "'Figtree', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: '#090708',
                marginBottom: '0.1rem',
              }}
            >
              <span style={{ fontSize: '1.25em' }}>€4,95</span>
            </p>
            <p
              style={{
                fontFamily: "'Furlong Vintage', Georgia, serif",
                fontWeight: 400,
                fontSize: '0.82rem',
                color: '#6f531a',
                marginBottom: '0.25rem',
              }}
            >
              {t.hetDrankje.pricePerBottle[lang]}
            </p>
            <p
              style={{
                fontFamily: "'Furlong Vintage', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: '0.88rem',
                color: '#6f531a',
              }}
            >
              {t.hetDrankje.trialBox[lang]}
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('ervaart-het-zelf');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: '0.54rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: '#090708',
              background: '#d3a522',
              border: 'none',
              padding: '1.15rem 2rem',
              cursor: 'pointer',
              transition: 'background 0.25s',
              width: '100%',
              maxWidth: '400px',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#b8921e'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#d3a522'; }}
          >
            {t.hetDrankje.cta[lang]}
          </button>
        </div>
      </div>
    </section>
  );
}
