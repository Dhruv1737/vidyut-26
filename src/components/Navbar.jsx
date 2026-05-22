import { useRef, useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'

const links = [
  { label: 'Home',      to: '/'         },
  { label: 'Vidyut-26', to: '/vidyut'   },
  { label: 'Event',     to: '/event'    },
  { label: 'About',     to: '/about'    },
  { label: 'Founders',  to: '/founders' },
]

/* ── COUNTDOWN CAPSULE ── */
function InlineCountdown() {
  const target = new Date('2026-09-09T09:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now()
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
  }, [target])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(0,201,81,0.2)',
        borderRadius: 999,
        padding: '7px 16px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* label */}
      <span style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#00C951',
        whiteSpace: 'nowrap',
      }}>
        Vidyut '26
      </span>

      {/* divider */}
      <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />

      {/* units */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {[
          { val: pad(timeLeft.days),    label: 'd' },
          { val: pad(timeLeft.hours),   label: 'h' },
          { val: pad(timeLeft.minutes), label: 'm' },
          { val: pad(timeLeft.seconds), label: 's' },
        ].map(({ val, label }, i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 1.5 }}>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 16,
                color: '#ffffff',
                lineHeight: 1,
                letterSpacing: '0.04em',
              }}>{val}</span>
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 8.5,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.06em',
              }}>{label}</span>
            </div>
            {i < 3 && (
              <span style={{
                color: '#00C951',
                fontSize: 12,
                opacity: 0.5,
                lineHeight: 1,
                marginBottom: 1,
              }}>:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── SLIDE TABS ── */
function SlideTabs() {
  const location = useLocation()
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)

  useEffect(() => {
    if (!navRef.current) return
    const active = navRef.current.querySelector('[data-active="true"]')
    if (active) {
      const { width } = active.getBoundingClientRect()
      setPosition({ left: active.offsetLeft, width, opacity: 1 })
    }
  }, [location.pathname])

  return (
    <ul
      ref={navRef}
      onMouseLeave={() => {
        if (!navRef.current) return
        const active = navRef.current.querySelector('[data-active="true"]')
        if (active) {
          const { width } = active.getBoundingClientRect()
          setPosition({ left: active.offsetLeft, width, opacity: 1 })
        } else {
          setPosition((pv) => ({ ...pv, opacity: 0 }))
        }
      }}
      className="relative flex items-center rounded-full border border-white/15 bg-white/[.05] p-1"
    >
      {links.map((l) => (
        <SlideTab key={l.to} to={l.to} setPosition={setPosition}>
          {l.label}
        </SlideTab>
      ))}
      <SlideCursor position={position} />
    </ul>
  )
}

function SlideTab({ to, children, setPosition }) {
  const ref = useRef(null)
  const location = useLocation()
  const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <li
      ref={ref}
      data-active={isActive}
      onMouseEnter={() => {
        if (!ref.current) return
        const { width } = ref.current.getBoundingClientRect()
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 })
      }}
      className="relative z-10 list-none"
    >
      <NavLink
        to={to}
        end={to === '/'}
        className="block font-condensed font-semibold text-[13px] tracking-[.1em] uppercase px-4 py-[7px] transition-colors duration-150 whitespace-nowrap"
        style={({ isActive }) => ({
          color: isActive ? '#121212' : 'rgba(255,255,255,0.6)',
        })}
      >
        {children}
      </NavLink>
    </li>
  )
}

function SlideCursor({ position }) {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
      className="absolute z-0 h-8 rounded-full list-none"
      style={{
        top: '50%',
        transform: 'translateY(-50%)',
        background: '#00C951',
      }}
    />
  )
}

/* ── NAVBAR ── */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-[200] bg-forest border-b border-white/[.05] transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.6)]' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-[80px] flex items-center justify-between gap-4">

        {/* ── LEFT: logo + countdown ── */}
        <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">

          {/* Logo — bigger, more breathing room */}
          <NavLink to="/" className="no-underline flex-shrink-0 group">
            <div className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <img
                src="https://evolve.nitb.in/Evolve_Logo.png"
                alt="Evolve NITB"
                className="w-full h-full object-contain"
              />
            </div>
          </NavLink>

          {/* vertical rule between logo and countdown */}
          <span className="hidden sm:block w-px h-8 bg-white/10 flex-shrink-0" />

          {/* Countdown — always visible */}
          <InlineCountdown />
        </div>

        {/* ── CENTER/RIGHT: desktop nav ── */}
        <div className="hidden md:flex items-center">
          <SlideTabs />
        </div>

        {/* ── HAMBURGER ── */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-2 flex-shrink-0"
        >
          <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-transform duration-200 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-transform duration-200 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/[.06] ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-forest px-6 pb-5 pt-2 flex flex-col">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-condensed font-semibold text-[16px] tracking-[.1em] uppercase py-[12px] border-b border-white/[.05] last:border-none transition-colors duration-150 ${
                  isActive ? 'text-gold' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}