import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home',      to: '/'         },
  { label: 'Vidyut-26', to: '/vidyut'   },
  { label: 'Event',     to: '/event'    },
  { label: 'About',     to: '/about'    },
  { label: 'Founders',  to: '/founders' },
]

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
