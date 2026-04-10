import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

export default function LogoMark() {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col items-center select-none">
      <img
        src="https://imgur.com/cLPFW8x.png"
        alt="AURA11"
        style={{
          width: 'clamp(180px, 40vw, 320px)',
          height: 'auto',
          display: 'block',
        }}
      />

      <div
        style={{
          marginTop: '1.1rem',
          fontFamily: "'Furlong Vintage', Georgia, serif",
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#6f531a',
          lineHeight: 1.7,
          textAlign: 'center',
        }}
      >
        <span>{t.hero.tagline[lang]}</span>
        <br />
        <span>{t.hero.subtitle[lang]}</span>
      </div>
    </div>
  );
}
