import { useLanguage } from '../context/LanguageContext';

export default function HetHart() {
  const { lang } = useLanguage();

  return (
    <section
      style={{
        background: '#fbfaf8',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 8vw, 8rem)',
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .hart-grid { display: flex !important; flex-direction: column !important; }
          .hart-img { order: 2 !important; }
          .hart-text { order: 1 !important; }
        }
      `}</style>
      <div
        className="hart-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'center',
        }}
      >
        <div className="hart-text">
          <p
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.45em',
              color: '#d3a522',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Saffraan
          </p>

          <h2
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              color: '#090708',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Het hart
          </h2>

          <div
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
              lineHeight: 1.75,
              color: '#090708',
              maxWidth: '420px',
            }}
          >
            <p style={{ marginBottom: '1rem' }}>
              Saffraan wordt al eeuwen met zorg gebruikt.<br />
              Warm. Verfijnd. Stil aanwezig.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Niet om te pushen.<br />
              Maar om ruimte te maken.<br />
              Voor rust. Voor helderheid.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Je ziet het goud.<br />
              Je ruikt het eerst.<br />
              Warm. Kruidig. Oud.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Dan proef je het.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              In AURA11 komt saffraan samen met zachte bubbels.<br />
              Een sprankelende herbal tonic.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Een smaak die langzaam opent.
            </p>

            <p style={{ marginBottom: '3rem' }}>
              Geen stimulatie. Geen piek. Geen crash.<br />
              Aan. Maar ontspannen.<br /><br />
              Een andere manier van energie.
            </p>

            <div
              style={{
                width: '36px',
                height: '1px',
                background: '#d3a522',
                marginBottom: '1.5rem',
                opacity: 0.5,
              }}
            />

            <p
              style={{
                fontFamily: "'Figtree', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: '0.6rem',
                letterSpacing: '0.45em',
                color: '#d3a522',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}
            >
              Waar AURA<span style={{ fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.08em' }}>11</span> thuis hoort
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Waar beweging en aandacht samenkomen.<br />
              Aan tafels waar tijd wordt genomen.<br />
              In omgevingen waar rust voelbaar is.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Maar ook midden in de dag,<br />
              wanneer helderheid nodig is.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Of in een moment voor jezelf.
            </p>

            <p style={{ color: '#6f531a' }}>
              Overal waar je even wilt terugkeren naar jezelf.<br />
              Een klein moment van aanwezigheid.
            </p>
          </div>
        </div>

        <div
          className="hart-img"
          style={{
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '3/4',
          }}
        >
          <img
            src="https://imgur.com/xwgdAux.jpg"
            alt={lang === 'nl' ? 'Saffraan draden — het gouden hart van AURA11' : 'Saffron threads — the golden heart of AURA11'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
}
