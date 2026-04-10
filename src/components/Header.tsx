import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const navItems = {
  nl: ['Het Drankje', 'Ontstaan', 'Voor Wie', 'Contact'],
  en: ['The Drink', 'Origin', 'For Who', 'Contact'],
};

const sectionIds = ['het-drankje', 'ontstaan', 'voor-wie', 'contact'];

interface HeaderProps {
  onOpenWaitlist: () => void;
  onOpenContact: () => void;
  onNavigateVerhaal?: () => void;
}

export default function Header({ onOpenWaitlist: _onOpenWaitlist, onOpenContact, onNavigateVerhaal }: HeaderProps) {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }

  const items = navItems[lang];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
          background: scrolled ? 'rgba(251,250,248,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(111,83,26,0.1)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(1.5rem, 5vw, 4rem)',
            height: '64px',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1.2rem, 3vw, 2.5rem)',
            }}
          >
            <button
              aria-label={lang === 'nl' ? 'Menu openen' : 'Open menu'}
              onClick={() => setMenuOpen(v => !v)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <span style={{ width: '18px', height: '1px', background: '#6f531a', display: 'block', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }} />
              <span style={{ width: '18px', height: '1px', background: '#6f531a', display: 'block', transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ width: '18px', height: '1px', background: '#6f531a', display: 'block', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label={lang === 'nl' ? 'Naar boven' : 'Back to top'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            onMouseEnter={e => {
              const imgs = e.currentTarget.querySelectorAll('img');
              (imgs[0] as HTMLImageElement).style.opacity = '0';
              (imgs[1] as HTMLImageElement).style.opacity = '1';
            }}
            onMouseLeave={e => {
              const imgs = e.currentTarget.querySelectorAll('img');
              (imgs[0] as HTMLImageElement).style.opacity = '1';
              (imgs[1] as HTMLImageElement).style.opacity = '0';
            }}
          >
            <img
              src="https://i.imgur.com/NQwqhUh.png"
              alt="AURA11"
              style={{
                height: '48px',
                width: 'auto',
                display: 'block',
                transition: 'opacity 0.25s',
                position: 'relative',
              }}
            />
            <img
              src="https://i.imgur.com/cLPFW8x.png"
              alt="AURA11"
              style={{
                height: '44px',
                width: 'auto',
                maxWidth: '220px',
                display: 'block',
                transition: 'opacity 0.25s',
                opacity: 0,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                whiteSpace: 'nowrap',
              }}
            />
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 'clamp(1.2rem, 3vw, 2.5rem)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <button
                onClick={() => setLang('nl')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontWeight: lang === 'nl' ? 700 : 400,
                  fontSize: '0.58rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: lang === 'nl' ? '#d3a522' : '#6f531a',
                  transition: 'color 0.2s',
                }}
              >
                NL
              </button>
              <span
                style={{
                  width: '1px',
                  height: '10px',
                  background: 'rgba(111,83,26,0.3)',
                  display: 'inline-block',
                }}
              />
              <button
                onClick={() => setLang('en')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontWeight: lang === 'en' ? 700 : 400,
                  fontSize: '0.58rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: lang === 'en' ? '#d3a522' : '#6f531a',
                  transition: 'color 0.2s',
                }}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            zIndex: 99,
            background: 'rgba(251,250,248,0.97)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(211,165,34,0.15)',
            padding: '2rem clamp(1.5rem, 5vw, 4rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'flex-start',
          }}
        >
          {items.map((label, i) => (
            <button
              key={label}
              onClick={() => scrollTo(sectionIds[i])}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                fontFamily: "'Figtree', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: '0.75rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#6f531a',
              }}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => {
              if (onNavigateVerhaal) {
                onNavigateVerhaal();
              }
              setMenuOpen(false);
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#6f531a',
            }}
          >
            {lang === 'nl' ? 'Het Verhaal' : 'The Story'}
          </button>

          <button
            onClick={() => { scrollTo('ervaart-het-zelf'); onOpenContact(); }}
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#090708',
              background: '#d3a522',
              border: 'none',
              padding: '0.6rem 1.1rem',
              cursor: 'pointer',
              transition: 'background 0.25s',
              alignSelf: 'flex-start',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#b8921e';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#d3a522';
            }}
          >
            {lang === 'nl' ? 'Voel je in verbinding' : 'Feel the connection'}
          </button>
        </div>
      )}
    </>
  );
}
