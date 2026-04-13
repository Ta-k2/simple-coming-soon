import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import { sendEmail } from '../utils/sendEmail';

export default function ErvaartHetZelf() {
  const { lang } = useLanguage();
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!naam.trim() || !email.trim()) return;
    setStatus('loading');
    setErrorMsg('');
    const { success } = await sendEmail({
      subject: `Nieuwe waitlist aanmelding: ${naam.trim()}`,
      html: `<h2>Nieuwe waitlist aanmelding</h2><p><strong>Naam:</strong> ${naam.trim()}</p><p><strong>E-mail:</strong> ${email.trim()}</p><p><em>Via: Ervaar het zelf formulier</em></p>`,
    });
    if (!success) {
      setErrorMsg(t.ervaartHetZelf.error[lang]);
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  return (
    <section
      style={{
        position: 'relative',
        background: '#090708',
        overflow: 'hidden',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 8rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 90% 80% at 50% 40%, rgba(111,83,26,0.25) 0%, rgba(9,7,8,0.98) 65%, #090708 100%)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://i.imgur.com/XJAPnhy.png"
          alt=""
          aria-hidden="true"
          style={{
            height: '90%',
            maxHeight: '750px',
            width: 'auto',
            objectFit: 'contain',
            opacity: 0.06,
            filter: 'sepia(60%) brightness(0.5)',
            userSelect: 'none',
          }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '520px',
          width: '100%',
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
            fontSize: '0.5rem',
            letterSpacing: '0.5em',
            color: '#d3a522',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          {t.ervaartHetZelf.label[lang]}
        </p>

        <h2
          style={{
            fontFamily: "'Furlong Vintage', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(1.8rem, 7vw, 4.8rem)',
            lineHeight: 1.05,
            letterSpacing: '0.01em',
            color: '#fbfaf8',
            marginBottom: '1.75rem',
            whiteSpace: 'nowrap',
          }}
        >
          {t.ervaartHetZelf.heading[lang]}
        </h2>

        <p
          style={{
            fontFamily: "'Furlong Vintage', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(0.92rem, 2vw, 1.05rem)',
            color: 'rgba(211,165,34,0.65)',
            lineHeight: 1.85,
            marginBottom: '2.5rem',
            maxWidth: '420px',
          }}
        >
          {t.ervaartHetZelf.desc[lang]}
        </p>

        {status === 'success' ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '2.5rem',
              border: '1px solid rgba(211,165,34,0.2)',
              background: 'rgba(211,165,34,0.05)',
              width: '100%',
            }}
          >
            <p
              style={{
                fontFamily: "'Furlong Vintage', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '1.2rem',
                color: '#d3a522',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {t.ervaartHetZelf.success[lang]}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
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
                fontSize: '1rem',
                color: '#fbfaf8',
                background: 'rgba(211,165,34,0.09)',
                border: '1px solid rgba(211,165,34,0.2)',
                padding: '1.05rem 1.4rem',
                outline: 'none',
                width: '100%',
                letterSpacing: '0.03em',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = 'rgba(211,165,34,0.55)';
                e.currentTarget.style.background = 'rgba(211,165,34,0.14)';
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = 'rgba(211,165,34,0.2)';
                e.currentTarget.style.background = 'rgba(211,165,34,0.09)';
              }}
            />
            <input
              type="email"
              placeholder={t.ervaartHetZelf.placeholder[lang]}
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                fontFamily: "'Figtree', system-ui, sans-serif",
                fontSize: '1rem',
                color: '#fbfaf8',
                background: 'rgba(211,165,34,0.09)',
                border: '1px solid rgba(211,165,34,0.2)',
                padding: '1.05rem 1.4rem',
                outline: 'none',
                width: '100%',
                letterSpacing: '0.03em',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = 'rgba(211,165,34,0.55)';
                e.currentTarget.style.background = 'rgba(211,165,34,0.14)';
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = 'rgba(211,165,34,0.2)';
                e.currentTarget.style.background = 'rgba(211,165,34,0.09)';
              }}
            />

            {status === 'error' && (
              <p
                style={{
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontSize: '0.9rem',
                  color: '#c47a5a',
                  textAlign: 'left',
                  margin: 0,
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
                fontSize: '0.56rem',
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: '#090708',
                background: status === 'loading' ? 'rgba(211,165,34,0.55)' : '#d3a522',
                border: 'none',
                padding: '1.2rem 2rem',
                cursor: status === 'loading' ? 'default' : 'pointer',
                transition: 'background 0.25s',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
                marginTop: '0.2rem',
              }}
              onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = '#b8921e'; }}
              onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.background = '#d3a522'; }}
            >
              {status === 'loading' ? (
                t.loading.patience[lang]
              ) : (
                <>
                  <span style={{ fontSize: '0.65rem', opacity: 0.75 }}>✦</span>
                  {t.ervaartHetZelf.cta[lang]}
                </>
              )}
            </button>
          </form>
        )}

        <p
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontSize: '0.78rem',
            color: 'rgba(211,165,34,0.35)',
            marginTop: '1.25rem',
            letterSpacing: '0.02em',
          }}
        >
          {t.ervaartHetZelfExtra.disclaimer[lang]}
        </p>

      </div>
    </section>
  );
}
