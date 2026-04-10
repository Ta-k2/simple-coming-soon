import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

export default function IntroFade() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1400);
    const removeTimer = setTimeout(() => setVisible(false), 2100);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#fbfaf8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1.5rem',
        transition: 'opacity 0.7s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem',
          animation: 'introLogoFadeIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        }}
      >
        <img
          src="https://imgur.com/NQwqhUh.png"
          alt="AURA11"
          style={{
            width: 'clamp(160px, 35vw, 300px)',
            height: 'auto',
            display: 'block',
          }}
        />
        <div
          style={{
            width: '40px',
            height: '1px',
            background: '#d3a522',
            opacity: 0.7,
          }}
        />
        <p
          style={{
            fontFamily: "'Furlong Vintage', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            color: '#6f531a',
            margin: 0,
            letterSpacing: '0.04em',
          }}
        >
          {t.intro.tagline[lang]}
        </p>
      </div>

      <style>{`
        @keyframes introLogoFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
