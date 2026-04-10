import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

export default function VerhaalVanSaffraan() {
  const { lang } = useLanguage();
  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 8vw, 8rem)',
        background: '#f4f0e8',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
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
            marginBottom: '1.2rem',
          }}
        >
          {t.verhaalSaffraan.label[lang]}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ width: '40px', height: '1px', background: 'rgba(211,165,34,0.4)' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#d3a522', opacity: 0.6 }} />
          <div style={{ width: '40px', height: '1px', background: 'rgba(211,165,34,0.4)' }} />
        </div>

        <div
          style={{
            fontFamily: "'Furlong Vintage', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            lineHeight: 2.2,
            color: '#090708',
          }}
        >
          <p style={{ marginBottom: '2rem' }}>
            {t.verhaalSaffraan.p1[lang]}<br />
            {t.verhaalSaffraan.p2[lang]}
          </p>

          <p style={{ marginBottom: '2rem' }}>
            {t.verhaalSaffraan.p3[lang]}<br />
            {t.verhaalSaffraan.p4[lang]}
          </p>

          <p style={{ marginBottom: '2rem', color: '#6f531a', fontStyle: 'italic' }}>
            {t.verhaalSaffraan.p5[lang]}<br />
            {t.verhaalSaffraan.p6[lang]}<br />
            {t.verhaalSaffraan.p7[lang]}
          </p>

          <p style={{ marginBottom: '2rem' }}>
            {t.verhaalSaffraan.p8[lang]}<br />
            {t.verhaalSaffraan.p9[lang]}<br />
            {t.verhaalSaffraan.p10[lang]}
          </p>

          <p style={{ marginBottom: '2rem' }}>
            {t.verhaalSaffraan.p11[lang]}
          </p>

          <div
            style={{
              width: '36px',
              height: '1px',
              background: '#d3a522',
              margin: '2.5rem auto',
              opacity: 0.4,
            }}
          />

          <p style={{ color: '#6f531a', fontStyle: 'italic' }}>
            {t.verhaalSaffraan.p12[lang]}
          </p>
        </div>
      </div>
    </section>
  );
}
