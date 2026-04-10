import { useLanguage } from '../context/LanguageContext';

export default function HetVerhaal() {
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
          .verhaal-grid { display: flex !important; flex-direction: column !important; }
          .verhaal-img { order: 2 !important; }
          .verhaal-text { order: 1 !important; }
        }
      `}</style>
      <div
        className="verhaal-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'center',
        }}
      >
        <div className="verhaal-text">
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
            Het Verhaal
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
            Waar de tijd vertraagt
          </h2>

          <div
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
              lineHeight: 1.75,
              color: '#6f531a',
              maxWidth: '420px',
            }}
          >
            <p style={{ marginBottom: '1rem', color: '#090708' }}>
              Op de berg werd alles stiller.<br />
              Niet leeg.<br />
              Maar rustig.
            </p>

            <p style={{ marginBottom: '1rem', color: '#090708' }}>
              Mensen spraken zachter.<br />
              Luisterden echt.<br />
              Alsof niemand haast had.
            </p>

            <p style={{ marginBottom: '1rem', color: '#090708' }}>
              Er hing iets in de lucht.<br />
              Een kalme aandacht.<br />
              Moeilijk te benoemen.
            </p>

            <p style={{ marginBottom: '1rem', color: '#090708' }}>
              Kleine rode draadjes.<br />
              Met zorg gebruikt.<br />
              Nooit meer dan nodig.
            </p>

            <p
              style={{
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: '#d3a522',
                marginBottom: '1.25rem',
                marginTop: '0.5rem',
              }}
            >
              Saffraan.
            </p>

            <p style={{ marginBottom: '1rem', color: '#090708' }}>
              Sommige momenten openen iets in je<br />
              zonder dat je weet hoe.<br />
              Een gevoel van thuiskomen in jezelf.
            </p>

            <p style={{ marginBottom: '1rem', color: '#090708' }}>
              Uit dat gevoel ontstond AURA<span style={{ fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.08em' }}>11</span>.
            </p>

            <p style={{ marginBottom: '3rem', color: '#090708' }}>
              Een herbal tonic met saffraan als hart.
            </p>

            <div
              style={{
                width: '36px',
                height: '1px',
                background: '#d3a522',
                marginBottom: '1.25rem',
                opacity: 0.5,
              }}
            />

            <p style={{ marginBottom: '0.5rem', color: '#6f531a' }}>
              Gemaakt om te vertragen.
            </p>
            <p style={{ color: '#6f531a' }}>
              Helder aanwezig te zijn.
            </p>
          </div>
        </div>

        <div
          className="verhaal-img"
          style={{
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '3/4',
          }}
        >
          <img
            src="https://i.imgur.com/DV6Wgbl.jpeg"
            alt={lang === 'nl' ? 'Rustige berglandschap waar de tijd vertraagt' : 'Quiet mountain landscape where time slows down'}
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
