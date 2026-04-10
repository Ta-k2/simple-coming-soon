import { useState, useRef, useEffect } from 'react';
import { Instagram, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import { sendEmail } from '../utils/sendEmail';

export default function Contact() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const { success } = await sendEmail({
      subject: `Nieuw contactbericht van ${naam.trim()}`,
      html: `<h2>Nieuw contactbericht</h2><p><strong>Naam:</strong> ${naam.trim()}</p><p><strong>E-mail:</strong> ${email.trim()}</p><p><em>Via: Contact formulier</em></p>`,
    });
    if (!success) {
      setErrorMsg(t.contact.error[lang]);
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  return (
    <section
      style={{
        background: '#090708',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 8vw, 8rem) 0',
        borderTop: '1px solid rgba(211,165,34,0.2)',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <img
          src="https://imgur.com/iThqwN2.png"
          alt="AURA11"
          style={{
            width: 'clamp(140px, 30vw, 260px)',
            height: 'auto',
            display: 'block',
            marginBottom: '0.75rem',
          }}
        />

        <p
          style={{
            fontFamily: "'Furlong Vintage', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'rgba(211,165,34,0.7)',
            marginBottom: '1.75rem',
          }}
        >
          {t.intro.tagline[lang]}
        </p>

        <a
          href="https://www.instagram.com/aura11_official/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(251,250,248,0.5)',
            textDecoration: 'none',
            marginBottom: '3rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#d3a522')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(251,250,248,0.5)')}
          aria-label={t.aria.instagramLink[lang]}
        >
          <Instagram size={16} />
          <span
            style={{
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            @aura11_official
          </span>
        </a>

      </div>

      <footer
        style={{
          borderTop: '1px solid rgba(211,165,34,0.12)',
          padding: '4rem 1.5rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: '0.65rem',
            color: 'rgba(211,165,34,0.45)',
            letterSpacing: '0.05em',
          }}
        >
          {t.footer.rights[lang]} By{' '}
          <a
            href="https://techazura.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(211,165,34,0.7)', textDecoration: 'none' }}
          >
            TechAzura
          </a>
        </p>
      </footer>

      {open && (
        <div
          onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(9,7,8,0.55)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            ref={panelRef}
            style={{
              background: '#fbfaf8',
              maxWidth: '480px',
              width: '100%',
              padding: '2rem 2.5rem 2.5rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '0',
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label={t.aria.close[lang]}
              style={{
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
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#090708')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6f531a')}
            >
              <X size={18} />
            </button>

            <img
              src="https://imgur.com/cLPFW8x.png"
              alt="AURA11"
              style={{
                width: '120px',
                height: 'auto',
                display: 'block',
                marginBottom: '0.4rem',
              }}
            />

            <div
              style={{
                width: '28px',
                height: '1px',
                background: '#d3a522',
                opacity: 0.5,
                marginBottom: '1rem',
              }}
            />

            {status === 'success' ? (
              <>
                <p
                  style={{
                    fontFamily: "'Furlong Vintage', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                    color: '#6f531a',
                    lineHeight: 1.8,
                    marginBottom: '0.5rem',
                  }}
                >
                  {t.contact.success[lang]}
                </p>
              </>
            ) : (
              <>
                <p
                  style={{
                    fontFamily: "'Furlong Vintage', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                    color: '#090708',
                    lineHeight: 1.8,
                    marginBottom: '0.25rem',
                  }}
                >
                  {t.contact.heading[lang]}
                </p>
                <p
                  style={{
                    fontFamily: "'Furlong Vintage', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    color: '#6f531a',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                  }}
                >
                  {t.contact.desc[lang]}
                </p>

                <form
                  onSubmit={handleSubmit}
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <input
                    type="text"
                    placeholder={t.contact.namePlaceholder[lang]}
                    required
                    value={naam}
                    onChange={e => setNaam(e.target.value)}
                    style={{
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
                    }}
                  />
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder[lang]}
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
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
                      marginBottom: '0.25rem',
                    }}
                  />

                  {status === 'error' && (
                    <p
                      style={{
                        fontFamily: "'Figtree', system-ui, sans-serif",
                        fontSize: '0.88rem',
                        color: '#a05c3a',
                      }}
                    >
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      fontFamily: "'Figtree', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#090708',
                      background: status === 'loading' ? 'rgba(211,165,34,0.5)' : '#d3a522',
                      border: 'none',
                      padding: '1rem 2.4rem',
                      cursor: status === 'loading' ? 'default' : 'pointer',
                      marginTop: '0.25rem',
                      transition: 'background 0.25s',
                      width: '100%',
                    }}
                    onMouseEnter={e => {
                      if (status !== 'loading') e.currentTarget.style.background = '#b8921e';
                    }}
                    onMouseLeave={e => {
                      if (status !== 'loading') e.currentTarget.style.background = '#d3a522';
                    }}
                  >
                    {status === 'loading' ? t.loading.pleaseWait[lang] : t.contact.cta[lang]}
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
