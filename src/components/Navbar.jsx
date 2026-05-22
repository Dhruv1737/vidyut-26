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

/* ── 1. INLINE CAPSULE COUNTDOWN BADGE ── */
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
      className="inline-flex items-center gap-3 bg-white/[.04] border border-gold/20 rounded-full px-4 py-[6px] backdrop-blur-md"
      style={{ border: '1px solid rgba(184,148,58,0.25)' }}
    >
      <span style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 10, fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: '#B8943A',
        whiteSpace: 'nowrap',
      }}>
        Vidyut-26
      </span>
      
      <span style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.12)' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {[
          { val: pad(timeLeft.days),    label: 'd' },
          { val: pad(timeLeft.hours),   label: 'h' },
          { val: pad(timeLeft.minutes), label: 'm' },
          { val: pad(timeLeft.seconds), label: 's' },
        ].map(({ val, label }, i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 15, color: '#fff',
              lineHeight: 1,
            }}>{val}</span>
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 8, fontWeight: 500,
              color: 'rgba(255,255,255,0.3)',
              textTransform: 'lowercase'
            }}>{label}</span>
            {i < 3 && <span style={{ color: '#B8943A', fontSize: 11, marginLeft: 2, opacity: 0.5 }}>:</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── 2. SLIDE NAVIGATION TABS SYSTEM ── */
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
      className="relative flex items-center rounded-full border border-white/15 bg-white/[.06] p-1"
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
  const isActive = to === '/'
    ? location.pathname === '/'
    : location.pathname.startsWith(to)

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
          color: isActive ? '#0A0F0B' : 'rgba(255,255,255,0.6)',
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
      className="absolute z-0 h-8 rounded-full bg-gold list-none"
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    />
  )
}

/* ── 3. MAIN INTEGRATED EXPORT HEADER ── */
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
      className={`sticky top-0 z-[200] bg-forest transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.55)]' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[95px] flex items-center justify-between gap-4">
        
        {/* Left Side: Logo & Embedded Badge together */}
        <div className="flex items-center gap-5">
          <NavLink to="/" className="no-underline flex-shrink-0">
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] bg-transparent flex items-center justify-center transition-transform duration-200 hover:scale-105">
              <img 
                src="https://evolve.nitb.in/Evolve_Logo.png" 
                alt="Evolve Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </NavLink>
          
          {/* Sits right next to the logo on desktop screens */}
          <div className="hidden lg:block">
            <InlineCountdown />
          </div>
        </div>

        {/* Right Side: Primary Navigation Links */}
        <div className="hidden md:flex items-center gap-4">
          {/* Moves into the main navbar line for mid-sized tablet displays */}
          <div className="hidden md:block lg:hidden">
            <InlineCountdown />
          </div>
          <SlideTabs />
        </div>

        {/* Mobile Hamburger Action */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-[6px] z-50"
        >
          <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-transform duration-200 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-transform duration-200 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/[.07] ${open ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-forest px-6 pb-6 pt-3 flex flex-col gap-2">
          {/* Renders right at the top of mobile link panel drawer */}
          <div className="pb-3 border-b border-white/[.05] flex justify-center">
            <InlineCountdown />
          </div>
          
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-condensed font-semibold text-[16px] tracking-[.1em] uppercase py-[11px] border-b border-white/[.05] last:border-none transition-colors duration-150 ${
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