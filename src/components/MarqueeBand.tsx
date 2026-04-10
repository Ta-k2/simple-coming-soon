import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

const DOT = (
  <span style={{ color: 'rgba(211,165,34,0.5)', fontSize: '0.55em', lineHeight: 1 }}>·</span>
);

interface StripProps {
  dark: boolean;
  items: string[];
}

function Strip({ dark, items }: StripProps) {
  return (
    <span
      aria-hidden="true"
      style={{
        fontFamily: "'Figtree', system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 'clamp(0.55rem, 1.2vw, 0.68rem)',
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: dark ? 'rgba(211,165,34,0.75)' : 'rgba(111,83,26,0.7)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1.4em',
        paddingRight: '1.4em',
        flexShrink: 0,
      }}
    >
      {items.map((item, j) => (
        <span key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.4em' }}>
          <span>{item}</span>
          {DOT}
        </span>
      ))}
    </span>
  );
}

interface MarqueeBandProps {
  dark?: boolean;
}

export default function MarqueeBand({ dark = true }: MarqueeBandProps) {
  const { lang } = useLanguage();
  const items = t.marquee.items[lang];
  return (
    <div
      style={{
        background: dark ? '#090708' : '#ece5d6',
        borderTop: `1px solid ${dark ? 'rgba(211,165,34,0.18)' : 'rgba(111,83,26,0.15)'}`,
        borderBottom: `1px solid ${dark ? 'rgba(211,165,34,0.18)' : 'rgba(111,83,26,0.15)'}`,
        overflow: 'hidden',
        padding: '0.75rem 0',
        whiteSpace: 'nowrap',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          width: 'max-content',
        }}
      >
        <Strip dark={dark} items={items} />
        <Strip dark={dark} items={items} />
        <Strip dark={dark} items={items} />
        <Strip dark={dark} items={items} />
      </div>
    </div>
  );
}
