import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

interface OntstaanSectionProps {
  onNavigateVerhaal: () => void;
}

export default function OntstaanSection({ onNavigateVerhaal }: OntstaanSectionProps) {
  const { lang } = useLanguage();
  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 8vw, 8rem)',
        background: '#fbfaf8',
        overflow: 'hidden',
      }}
    >
      <img
        src="https://imgur.com/NQwqhUh.png"
        alt=""
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: 'clamp(500px, 60vw, 700px)',
          opacity: 0.04,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      <style>{`
        @media (max-width: 768px) {
          .ontstaan-grid {
            flex-direction: column !important;
          }
        }
      `}</style>

      <div
        className="ontstaan-grid"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'clamp(2.5rem, 6vw, 6rem)',
        }}
      >
        <div style={{ flex: '1 1 0', minWidth: 0 }}>
          <p
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.58rem',
              letterSpacing: '0.45em',
              color: '#d3a522',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
            }}
          >
            {t.ontstaan.label[lang]}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <div style={{ width: '40px', height: '1px', background: 'rgba(211,165,34,0.4)' }} />
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#d3a522', opacity: 0.6 }} />
            <div style={{ width: '40px', height: '1px', background: 'rgba(211,165,34,0.4)' }} />
          </div>

          <h2
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              color: '#090708',
              lineHeight: 1.2,
              marginBottom: '2rem',
              fontStyle: 'italic',
            }}
          >
            {t.ontstaan.heading[lang]}
          </h2>

          <div
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              lineHeight: 2,
              color: '#090708',
            }}
          >
            <p style={{ marginBottom: '1rem' }}>{t.ontstaan.p1[lang].split('\n').map((line: string, i: number) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}</p>
            <p style={{ marginBottom: '1rem' }}>{t.ontstaan.p2[lang].split('\n').map((line: string, i: number) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}</p>
            <p style={{ marginBottom: '1rem' }}>{t.ontstaan.p3[lang].split('\n').map((line: string, i: number) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}</p>
            <p style={{ marginBottom: '1rem' }}>{t.ontstaan.p4[lang]}</p>
            <p style={{ color: '#6f531a', fontStyle: 'italic' }}>{t.ontstaan.p5[lang]}</p>
          </div>

          <div
            style={{
              width: '36px',
              height: '1px',
              background: '#d3a522',
              margin: '2.5rem 0',
              opacity: 0.4,
            }}
          />

          <button
            onClick={onNavigateVerhaal}
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#090708',
              background: '#d3a522',
              border: 'none',
              padding: '0.85rem 2.5rem',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#b8921e';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#d3a522';
            }}
          >
            {t.ontstaan.cta[lang]}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
