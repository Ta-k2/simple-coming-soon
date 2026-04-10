import { useEffect } from 'react';
import Header from '../components/Header';
import HetVerhaal from '../components/HetVerhaal';
import DeMensErachter from '../components/DeMensErachter';
import HetHart from '../components/HetHart';
import Contact from '../components/Contact';
import Bubbles from '../components/Bubbles';
import SaffronDecor from '../components/SaffronDecor';
import LogoMark from '../components/LogoMark';
import MarqueeBand from '../components/MarqueeBand';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

interface VerhaalPageProps {
  onNavigateHome: () => void;
}

export default function VerhaalPage({ onNavigateHome }: VerhaalPageProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Header
        onOpenWaitlist={() => {
          onNavigateHome();
          setTimeout(() => {
            const el = document.getElementById('eerste-toegang');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onOpenContact={() => {
          onNavigateHome();
          setTimeout(() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onNavigateVerhaal={() => {}}
      />

      <section
        style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#fbfaf8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <Bubbles />
          <SaffronDecor side="left" />
          <SaffronDecor side="right" />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(211,165,34,0.05) 0%, transparent 70%)',
            }}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: 'clamp(1.5rem, 5vw, 4rem)',
            zIndex: 20,
          }}
        >
          <button
            onClick={onNavigateHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.58rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#6f531a',
              padding: 0,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#d3a522')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6f531a')}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t.verhaalPage.back[lang]}
          </button>
        </div>

        <div
          style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', padding: 'clamp(5rem,12vw,9rem) 1.5rem clamp(3rem,6vw,5rem)', minHeight: '100vh', textAlign: 'center' }}
        >
          <div className="mb-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <LogoMark />
          </div>

          <div
            className="flex items-center gap-4 mt-8 mb-8 fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(211,165,34,0.5))' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#d3a522' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(211,165,34,0.5))' }} />
          </div>

          <p
            className="fade-in-up"
            style={{
              animationDelay: '0.48s',
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(0.48rem, 1.4vw, 0.58rem)',
              letterSpacing: '0.22em',
              color: 'rgba(111,83,26,0.65)',
              textTransform: 'uppercase',
              lineHeight: 1.9,
              marginTop: '2rem',
              marginBottom: '0',
            }}
          >
            {t.verhaalPage.specsLine[lang]}
          </p>

          <button
            className="fade-in-up"
            onClick={() => {
              const el = document.getElementById('het-verhaal');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              marginTop: '2.5rem',
              animationDelay: '0.55s',
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: '0.6rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#090708',
              background: '#d3a522',
              border: 'none',
              padding: '1.1rem 3rem',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#b8921e'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#d3a522'; }}
          >
            {t.verhaalPage.cta[lang]}
          </button>
        </div>
      </section>

      <MarqueeBand dark={false} />

      <div id="het-verhaal"><HetVerhaal /></div>
      <div id="de-mens"><DeMensErachter /></div>
      <div id="het-hart"><HetHart /></div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
