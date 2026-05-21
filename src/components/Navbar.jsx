import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home',      to: '/'         },
  { label: 'Vidyut-26', to: '/vidyut'   },
  { label: 'Event',     to: '/event'    },
  { label: 'About',     to: '/about'    },
  { label: 'Founders',  to: '/founders' },
]

function CountdownBar() {
  const target = new Date('2026-09-09T09:00:00').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  })

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const diff = target - now
      if (diff <= 0) return
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 300,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      background: 'rgba(27, 48, 34, 0.75)',
      borderBottom: '1px solid rgba(184, 148, 58, 0.3)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        flexWrap: 'wrap',
      }}>
        {/* label */}
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#B8943A',
        }}>
          Vidyut-26 · Grand Finale
        </span>

        {/* divider */}
        <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />

        {/* time units */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {[
            { val: pad(timeLeft.days),    label: 'Days'    },
            { val: pad(timeLeft.hours),   label: 'Hours'   },
            { val: pad(timeLeft.minutes), label: 'Mins'    },
            { val: pad(timeLeft.seconds), label: 'Secs'    },
          ].map(({ val, label }, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 22,
                  color: '#ffffff',
                  lineHeight: 1,
                  letterSpacing: '0.04em',
                }}>
                  {val}
                </div>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginTop: 2,
                }}>
                  {label}
                </div>
              </div>
              {i < 3 && (
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 20,
                  color: '#B8943A',
                  lineHeight: 1,
                  marginBottom: 10,
                }}>:</span>
              )}
            </div>
          ))}
        </div>

        {/* divider */}
        <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />

        {/* date */}
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
        }}>
          Sept 9, 2026 · MANIT Bhopal
        </span>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location])

  // shadow on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <> 
    <CountdownBar />
    <header
      className={`sticky top-0 z-[200] bg-forest transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.35)]' : ''
      }`}
    >
      {/* ── main bar ── */}
      <div className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-[9px] no-underline">
          <div className="flex items-center h-full py-2">
          <img 
          src="https://evolve.nitb.in/Evolve_Logo.png" 
          alt="Evolve NITB Logo" 
          className="h-11 w-auto max-h-full object-contain block"
          />
          </div>
        </NavLink>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-0">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-condensed font-semibold text-[14px] tracking-[.1em] uppercase px-4 py-1 border-b-2 transition-colors duration-150 ${
                  isActive
                    ? 'text-white border-gold'
                    : 'text-white/50 border-transparent hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-[6px]"
        >
          <span
            className={`block w-[22px] h-[2px] bg-white rounded-sm transition-transform duration-200 origin-center ${
              open ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white rounded-sm transition-opacity duration-200 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white rounded-sm transition-transform duration-200 origin-center ${
              open ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* ── mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/[.07] ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-forest px-6 pb-4 pt-1 flex flex-col">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-condensed font-semibold text-[16px] tracking-[.1em] uppercase py-[11px] border-b border-white/[.05] last:border-none transition-colors duration-150 ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
    </>
  )
}

function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}
