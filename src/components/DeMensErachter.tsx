import { useLanguage } from '../context/LanguageContext';

export default function DeMensErachter() {
  const { lang } = useLanguage();

  return (
    <section
      style={{
        background: '#ece5d6',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 8vw, 8rem)',
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .mens-grid { display: flex !important; flex-direction: column !important; }
          .mens-img { order: 2 !important; }
          .mens-text { order: 1 !important; }
        }
      `}</style>
      <div
        className="mens-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'center',
        }}
      >
        <div
          className="mens-img"
          style={{
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '3/4',
          }}
        >
          <img
            src="https://imgur.com/FKTWW1B.jpg"
            alt={lang === 'nl' ? 'Rustige natuur, verbinding met de kern' : 'Quiet nature, connection with the core'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </div>

        <div className="mens-text">
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
            De Mens Erachter
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
            Ontstaan van AURA<span style={{ color: '#d3a522', fontWeight: 400, letterSpacing: '0.08em' }}>11</span>
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
              AURA<span style={{ fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.08em' }}>11</span> is niet ontstaan vanuit een businessplan.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Maar vanuit een persoonlijke frustratie.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Tijdens drukke periodes en veel reizen<br />
              merkte Pourya Shoughiniya dat cafeïne niet werkte zoals hij wilde.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Cafeïne gaf energie.<br />
              Maar geen helderheid.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Focus kwam met onrust.<br />
              Energie met een crash.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Alles hielp om door te gaan.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Maar niet om bij zichzelf te blijven.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Wat hij miste kon hij nog niet benoemen.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Dus ging hij op zoek.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Niet verder.<br />
              Maar terug.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Naar eenvoud.<br />
              Naar rust.<br />
              Naar aandacht.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Naar dat wat er altijd al was.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              In een wereld vol prikkels en snelheid<br />
              ontstond AURA<span style={{ fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.08em' }}>11</span> als een herinnering aan rust.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Daar vond hij saffraan.
            </p>

            <p style={{ marginBottom: '3rem' }}>
              Een kruid uit de oudheid.<br />
              Zeldzaam. Met zorg gebruikt.
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
              Eerlijk in zijn werking.
            </p>
            <p style={{ color: '#6f531a' }}>
              Eerlijk in zijn bedoeling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
