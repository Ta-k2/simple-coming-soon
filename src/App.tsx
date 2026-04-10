import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { t } from './translations';
import Header from './components/Header';
import IntroFade from './components/IntroFade';
import Contact from './components/Contact';
import HetDrankje from './components/HetDrankje';
import OntstaanSection from './components/OntstaanSection';
import WatJeErvaart from './components/WatJeErvaart';
import ProductInformatie from './components/ProductInformatie';
import VerhaalPage from './pages/VerhaalPage';
import ErvaartHetZelf from './components/ErvaartHetZelf';
import MarqueeBand from './components/MarqueeBand';
import Bubbles from './components/Bubbles';
import SaffronDecor from './components/SaffronDecor';
import Reviews from './components/Reviews';
import VoorWie from './components/VoorWie';
import VerhaalVanSaffraan from './components/VerhaalVanSaffraan';

function HomePage({
  onNavigateVerhaal,
}: {
  onNavigateVerhaal: () => void;
}) {
  const { lang } = useLanguage();
  return (
    <div style={{ position: 'relative' }}>
      <Header onOpenWaitlist={() => {}} onOpenContact={() => {}} onNavigateVerhaal={onNavigateVerhaal} />

      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          background: '#fbfaf8',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <Bubbles />
          <SaffronDecor side="left" />
          <SaffronDecor side="right" />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(211,165,34,0.05) 0%, transparent 70%)',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: 'calc(var(--header-h, 80px) + 3vh) 2rem 6vh',
          }}
        >
          <img
            src="https://i.imgur.com/yiJgWPX.png"
            alt="AURA11"
            style={{
              width: 'clamp(200px, 50vw, 480px)',
              height: 'auto',
              display: 'block',
              marginBottom: '0.6rem',
            }}
          />

          <p
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#6f531a',
              margin: '0 0 0.5rem',
              letterSpacing: '0.02em',
            }}
          >
            {t.hero.tagline[lang]}
          </p>

          <p
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(0.55rem, 1.4vw, 0.72rem)',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'rgba(111,83,26,0.65)',
              margin: '0 0 3rem',
            }}
          >
            {t.hero.subtitle[lang]}
          </p>

          <div
            className="bottle-float"
            style={{
              width: 'clamp(260px, 34vw, 500px)',
              marginBottom: '1.8rem',
            }}
          >
            <img
              src="https://i.imgur.com/vZkilG0.png"
              alt={t.hero.bottleAlt[lang]}
              style={{ width: '100%', display: 'block' }}
            />
          </div>

          <p
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
              color: '#6f531a',
              margin: '0 0 2.2rem',
              letterSpacing: '0.01em',
              maxWidth: '340px',
              lineHeight: 1.7,
            }}
          >
            {t.hero.description[lang]}
          </p>

          <button
            onClick={() => {
              const el = document.getElementById('het-drankje');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: '0.62rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#090708',
              background: '#d3a522',
              border: 'none',
              padding: '1.1rem 3.5rem',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#b8921e')}
            onMouseLeave={e => (e.currentTarget.style.background = '#d3a522')}
          >
            {t.hero.cta[lang]}
          </button>
        </div>
      </section>

      <MarqueeBand dark={false} />

      <div id="het-drankje">
        <HetDrankje />
      </div>

      <div id="ontstaan">
        <OntstaanSection onNavigateVerhaal={onNavigateVerhaal} />
      </div>

      <VerhaalVanSaffraan />

      <WatJeErvaart />

      <Reviews />

      <div id="voor-wie">
        <VoorWie />
      </div>

      <ProductInformatie onOpenWaitlist={() => {}} />

      <div
        style={{
          background: '#fbfaf8',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 8vw, 8rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(2rem, 4vw, 4rem)',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            width: 'clamp(120px, 18vw, 200px)',
            height: 'clamp(120px, 18vw, 200px)',
            flexShrink: 0,
            overflow: 'hidden',
            borderRadius: '50%',
          }}
        >
          <img
            src="https://imgur.com/Hz4CpFJ.jpg"
            alt={t.maker.founderAlt[lang]}
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        <div style={{ maxWidth: '420px' }}>
          <p
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.52rem',
              letterSpacing: '0.4em',
              color: '#d3a522',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            {t.maker.label[lang]}
          </p>
          <p
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
              color: '#090708',
              marginBottom: '0.4rem',
            }}
          >
            Pourya Shoughiniya
          </p>
          <div style={{ width: '24px', height: '1px', background: '#d3a522', marginBottom: '0.75rem' }} />
          <p
            style={{
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '0.9rem',
              color: '#d3a522',
              marginBottom: '1rem',
            }}
          >
            {t.maker.title[lang]}<span style={{ fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.08em' }}>11</span>
          </p>
          <p
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
              lineHeight: 1.75,
              color: '#090708',
              margin: 0,
            }}
          >
            {t.maker.bio[lang].split('\n').map((line: string, i: number) => (<span key={i}>{line}{i === 0 && <br />}</span>))}
          </p>
          <span
            onClick={onNavigateVerhaal}
            style={{
              display: 'inline-block',
              marginTop: '1.2rem',
              fontFamily: "'Furlong Vintage', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '0.85rem',
              color: '#6f531a',
              opacity: 0.6,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              borderBottom: '1px solid rgba(111,83,26,0.25)',
              paddingBottom: '1px',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
          >
            {t.maker.readStory[lang]}
          </span>
        </div>
      </div>

      <div
        style={{
          background: '#ece5d6',
          borderTop: '1px solid rgba(111,83,26,0.1)',
          borderBottom: '1px solid rgba(111,83,26,0.1)',
          padding: 'clamp(1.8rem, 4vw, 2.8rem) clamp(1.5rem, 6vw, 4rem)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(0.38rem, 2.2vw, 0.65rem)',
            letterSpacing: '0.18em',
            color: '#6f531a',
            maxWidth: '640px',
            lineHeight: 1.8,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            margin: 0,
          }}
        >
          {t.nameMeaning.line[lang]}
        </p>
      </div>

      <div id="ervaart-het-zelf">
        <ErvaartHetZelf />
      </div>

      <MarqueeBand dark={true} />

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<'home' | 'verhaal'>(() => {
    if (window.location.hash === '#/verhaal') return 'verhaal';
    return 'home';
  });

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === '#/verhaal') {
        setPage('verhaal');
      } else {
        setPage('home');
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function navigateVerhaal() {
    window.location.hash = '#/verhaal';
    setPage('verhaal');
    window.scrollTo({ top: 0 });
  }

  function navigateHome() {
    window.location.hash = '';
    setPage('home');
    window.scrollTo({ top: 0 });
  }

  return (
    <LanguageProvider>
      <IntroFade />
      {page === 'verhaal' ? (
        <VerhaalPage onNavigateHome={navigateHome} />
      ) : (
        <HomePage onNavigateVerhaal={navigateVerhaal} />
      )}
    </LanguageProvider>
  );
}
