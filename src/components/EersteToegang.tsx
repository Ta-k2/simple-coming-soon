import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import { sendEmail } from '../utils/sendEmail';

const inputStyle: React.CSSProperties = {
  fontFamily: "'Figtree', system-ui, sans-serif",
  fontSize: '0.95rem',
  color: '#090708',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(111,83,26,0.4)',
  padding: '0.6rem 0',
  outline: 'none',
  width: '100%',
  letterSpacing: '0.02em',
  transition: 'border-color 0.25s',
};

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(9,7,8,0.55)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem',
  backdropFilter: 'blur(4px)',
};

const modalPanelStyle: React.CSSProperties = {
  background: '#fbfaf8',
  maxWidth: '480px',
  width: '100%',
  padding: '2rem 2.5rem 2.5rem',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '1.2rem',
  right: '1.2rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#6f531a',
  display: 'flex',
  alignItems: 'center',
  padding: '4px',
  transition: 'color 0.2s',
};

const logoStyle: React.CSSProperties = {
  fontFamily: "'Furlong Vintage', Georgia, serif",
  fontWeight: 400,
  fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
  lineHeight: 1,
  letterSpacing: '0.02em',
  marginBottom: '0.4rem',
};

const dividerStyle: React.CSSProperties = {
  width: '28px',
  height: '1px',
  background: '#d3a522',
  opacity: 0.5,
  marginBottom: '1rem',
};

interface EerstToegangProps {
  openWaitlist: boolean;
  openContact: boolean;
  onOpenWaitlist: () => void;
  onOpenContact: () => void;
  onCloseWaitlist: () => void;
  onCloseContact: () => void;
}

export default function EersteToegang({
  openWaitlist,
  openContact,
  onOpenWaitlist,
  onOpenContact,
  onCloseWaitlist,
  onCloseContact,
}: EerstToegangProps) {
  const { lang } = useLanguage();

  const [contactNaam, setContactNaam] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactError, setContactError] = useState('');

  const [waitlistNaam, setWaitlistNaam] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [waitlistError, setWaitlistError] = useState('');

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseContact();
        onCloseWaitlist();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onCloseContact, onCloseWaitlist]);

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contactNaam.trim() || !contactEmail.trim()) return;
    setContactStatus('loading');
    setContactError('');
    const { success } = await sendEmail({
      subject: `Nieuw contactbericht van ${contactNaam.trim()}`,
      html: `<h2>Nieuw contactbericht</h2><p><strong>Naam:</strong> ${contactNaam.trim()}</p><p><strong>E-mail:</strong> ${contactEmail.trim()}</p><p><em>Via: Eerste Toegang - Contact formulier</em></p>`,
    });
    if (!success) {
      setContactError(t.contact.error[lang]);
      setContactStatus('error');
    } else {
      setContactStatus('success');
    }
  }

  async function handleWaitlistSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!waitlistNaam.trim() || !waitlistEmail.trim()) return;
    setWaitlistStatus('loading');
    setWaitlistError('');
    const { success } = await sendEmail({
      subject: `Nieuwe waitlist aanmelding: ${waitlistNaam.trim()}`,
      html: `<h2>Nieuwe waitlist aanmelding</h2><p><strong>Naam:</strong> ${waitlistNaam.trim()}</p><p><strong>E-mail:</strong> ${waitlistEmail.trim()}</p><p><em>Via: Eerste Toegang - Waitlist formulier</em></p>`,
    });
    if (!success) {
      setWaitlistError(t.eersteToegang.error[lang]);
      setWaitlistStatus('error');
    } else {
      setWaitlistStatus('success');
    }
  }

  return (
    <section
      style={{
        background: '#fbfaf8',
        padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 8vw, 8rem)',
      }}
    >
      <div
        style={{
          maxWidth: '560px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: '0.55rem',
            letterSpacing: '0.45em',
            color: '#d3a522',
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
          }}
        >
          {t.eersteToegang.heading[lang]}
        </p>

        <img
          src="https://imgur.com/cLPFW8x.png"
          alt="AURA11"
          style={{
            width: 'clamp(140px, 35vw, 260px)',
            height: 'auto',
            display: 'block',
            marginBottom: '1.5rem',
          }}
        />

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => onOpenWaitlist()}
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#090708',
              background: '#d3a522',
              border: 'none',
              padding: '1rem 1.6rem',
              cursor: 'pointer',
              transition: 'background 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#b8921e'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#d3a522'; }}
          >
            {t.eersteToegang.cta[lang]}
          </button>

          <button
            onClick={() => onOpenContact()}
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#6f531a',
              background: 'transparent',
              border: '1px solid rgba(111,83,26,0.4)',
              padding: '1rem 1.6rem',
              cursor: 'pointer',
              transition: 'background 0.25s, border-color 0.25s, color 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(211,165,34,0.08)';
              e.currentTarget.style.borderColor = 'rgba(211,165,34,0.6)';
              e.currentTarget.style.color = '#d3a522';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(111,83,26,0.4)';
              e.currentTarget.style.color = '#6f531a';
            }}
          >
            {t.header.voelJeInVerbinding[lang]}
          </button>
        </div>
      </div>

      {openWaitlist && (
        <div
          onClick={e => { if (e.target === e.currentTarget) onCloseWaitlist(); }}
          style={modalOverlayStyle}
        >
          <div style={modalPanelStyle}>
            <button
              onClick={() => onCloseWaitlist()}
              aria-label={lang === 'nl' ? 'Sluiten' : 'Close'}
              style={closeButtonStyle}
              onMouseEnter={e => (e.currentTarget.style.color = '#090708')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6f531a')}
            >
              <X size={18} />
            </button>

            <img
              src="https://imgur.com/cLPFW8x.png"
              alt="AURA11"
              style={{ width: '110px', height: 'auto', display: 'block', marginBottom: '0.4rem' }}
            />
            <div style={dividerStyle} />

            {waitlistStatus === 'success' ? (
              <>
                <p style={{ fontFamily: "'Furlong Vintage', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: '#6f531a', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                  {t.eersteToegang.success[lang]}
                </p>
              </>
            ) : (
              <>
                <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontWeight: 400, fontSize: '0.55rem', letterSpacing: '0.4em', color: '#d3a522', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                  {t.eersteToegang.heading[lang]}
                </p>
                <p style={{ fontFamily: "'Furlong Vintage', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)', color: '#6f531a', lineHeight: 1.75, marginBottom: '0.8rem' }}>
                  {t.eersteToegang.desc[lang]}
                </p>
                <form onSubmit={handleWaitlistSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <input
                    type="text"
                    placeholder={t.contact.namePlaceholder[lang]}
                    required
                    value={waitlistNaam}
                    onChange={e => setWaitlistNaam(e.target.value)}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'rgba(211,165,34,0.8)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(111,83,26,0.4)')}
                  />
                  <input
                    type="email"
                    placeholder={t.eersteToegang.placeholder[lang]}
                    required
                    value={waitlistEmail}
                    onChange={e => setWaitlistEmail(e.target.value)}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'rgba(211,165,34,0.8)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(111,83,26,0.4)')}
                  />
                  {waitlistStatus === 'error' && (
                    <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '0.88rem', color: '#a05c3a' }}>{waitlistError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={waitlistStatus === 'loading'}
                    style={{
                      fontFamily: "'Figtree', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: '0.6rem',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: '#090708',
                      background: waitlistStatus === 'loading' ? 'rgba(211,165,34,0.5)' : '#d3a522',
                      border: 'none',
                      padding: '1rem 2rem',
                      cursor: waitlistStatus === 'loading' ? 'default' : 'pointer',
                      transition: 'background 0.25s',
                      marginTop: '0.25rem',
                      width: '100%',
                    }}
                    onMouseEnter={e => { if (waitlistStatus !== 'loading') e.currentTarget.style.background = '#b8921e'; }}
                    onMouseLeave={e => { if (waitlistStatus !== 'loading') e.currentTarget.style.background = '#d3a522'; }}
                  >
                    {waitlistStatus === 'loading' ? t.loading.patience[lang] : t.eersteToegang.cta[lang]}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {openContact && (
        <div
          onClick={e => { if (e.target === e.currentTarget) onCloseContact(); }}
          style={modalOverlayStyle}
        >
          <div style={modalPanelStyle}>
            <button
              onClick={() => onCloseContact()}
              aria-label={lang === 'nl' ? 'Sluiten' : 'Close'}
              style={closeButtonStyle}
              onMouseEnter={e => (e.currentTarget.style.color = '#090708')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6f531a')}
            >
              <X size={18} />
            </button>

            <img
              src="https://imgur.com/cLPFW8x.png"
              alt="AURA11"
              style={{ width: '110px', height: 'auto', display: 'block', marginBottom: '0.4rem' }}
            />
            <div style={dividerStyle} />

            {contactStatus === 'success' ? (
              <>
                <p style={{ fontFamily: "'Furlong Vintage', Georgia, serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: '#6f531a', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                  {t.contact.success[lang]}
                </p>
              </>
            ) : (
              <>
                <p style={{ fontFamily: "'Furlong Vintage', Georgia, serif", fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: '#090708', lineHeight: 1.8, marginBottom: '0.25rem' }}>
                  {t.contact.heading[lang]}
                </p>
                <p style={{ fontFamily: "'Furlong Vintage', Georgia, serif", fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#6f531a', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {t.contact.desc[lang]}
                </p>
                <form onSubmit={handleContactSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <input
                    type="text"
                    placeholder={t.contact.namePlaceholder[lang]}
                    required
                    value={contactNaam}
                    onChange={e => setContactNaam(e.target.value)}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'rgba(211,165,34,0.8)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(111,83,26,0.4)')}
                  />
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder[lang]}
                    required
                    value={contactEmail}
                    onChange={e => setContactEmail(e.target.value)}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'rgba(211,165,34,0.8)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(111,83,26,0.4)')}
                  />
                  {contactStatus === 'error' && (
                    <p style={{ fontFamily: "'Figtree', system-ui, sans-serif", fontSize: '0.88rem', color: '#a05c3a' }}>{contactError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={contactStatus === 'loading'}
                    style={{
                      fontFamily: "'Figtree', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: '0.6rem',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: '#090708',
                      background: contactStatus === 'loading' ? 'rgba(211,165,34,0.5)' : '#d3a522',
                      border: 'none',
                      padding: '1rem 2rem',
                      cursor: contactStatus === 'loading' ? 'default' : 'pointer',
                      transition: 'background 0.25s',
                      marginTop: '0.25rem',
                      width: '100%',
                    }}
                    onMouseEnter={e => { if (contactStatus !== 'loading') e.currentTarget.style.background = '#b8921e'; }}
                    onMouseLeave={e => { if (contactStatus !== 'loading') e.currentTarget.style.background = '#d3a522'; }}
                  >
                    {contactStatus === 'loading' ? t.loading.patience[lang] : t.contact.cta[lang]}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
