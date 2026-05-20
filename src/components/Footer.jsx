import { Link } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { label: 'Home',            to: '/',         idx: '01' },
  { label: 'Vidyut-26',       to: '/vidyut',   idx: '02' },
  { label: 'Event Highlights', to: '/event',   idx: '03' },
  { label: 'About Evolve',    to: '/about',    idx: '04' },
  { label: 'Founders',        to: '/founders', idx: '05' },
]

const partners = ['Tata Motors', 'Govt. of Madhya Pradesh', 'Unstop', 'Vaayu Robotics']

const socials = [
  { label: 'Instagram', href: '#', icon: <InstagramIcon /> },
  { label: 'LinkedIn',  href: '#', icon: <LinkedInIcon />  },
  { label: 'X',         href: '#', icon: <XIcon />         },
  { label: 'YouTube',   href: '#', icon: <YouTubeIcon />   },
  { label: 'WhatsApp',  href: '#', icon: <WhatsAppIcon />  },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-dark text-white overflow-hidden">

      {/* gold-tipped top rule */}
      <div className="gold-topline" />

      {/* ── wordmark hero row ── */}
      <div className="max-w-[1200px] mx-auto px-10 pt-16 pb-0 grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8">
        <div>
          <p className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[.92] tracking-[.02em] text-white">
            Evolve NITB
          </p>
          <p className="font-body font-bold text-[clamp(1.4rem,3vw,2.6rem)] tracking-[.04em] text-gold mt-1">
            × Vidyut '26
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-4 pb-1">
          <p className="font-condensed text-[11px] tracking-[.18em] uppercase text-white/20 text-right leading-[1.9]">
            Maulana Azad National<br />
            Institute of Technology<br />
            Bhopal, MP — India
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gold text-ink font-condensed font-bold text-[12.5px] tracking-[.12em] uppercase hover:bg-goldb transition-colors"
          >
            Register on Unstop →
          </a>
        </div>
      </div>

      {/* ── divider ── */}
      <div className="max-w-[1200px] mx-auto px-10 pt-10 flex items-center gap-5">
        <span className="w-[5px] h-[5px] rounded-full bg-pine flex-shrink-0" />
        <span className="flex-1 h-px bg-[#1c2e1e]" />
        <span className="w-[5px] h-[5px] rounded-full bg-pine flex-shrink-0" />
      </div>

      {/* ── 3-col grid ── */}
      <div className="max-w-[1200px] mx-auto px-10 pt-10 pb-12 grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr] border-b border-[#1c2e1e]">

        {/* Col 1 — about + contact + social */}
        <div className="pr-0 md:pr-12 border-b md:border-b-0 md:border-r border-[#1c2e1e] pb-10 md:pb-0">
          <p className="font-condensed text-[9.5px] tracking-[.28em] uppercase text-white/20 mb-6">
            About the Club
          </p>
          <p className="text-[13.5px] text-white/30 leading-[1.9] mb-6 max-w-[280px]">
            Evolve is the interdisciplinary technical club of NIT Bhopal — bridging
            campus engineering and India's electric mobility future through real
            competitions and industry exposure.
          </p>

          {/* contact */}
          <div className="flex flex-col gap-[10px] mb-6">
            <ContactRow icon={<EmailIcon />}>
              <a href="mailto:Evolvenitb@gmail.com" className="hover:text-white/80 transition-colors">
                Evolvenitb@gmail.com
              </a>
            </ContactRow>
            <ContactRow icon={<PhoneIcon />}>
              <a href="tel:+916232702705" className="hover:text-white/80 transition-colors">
                +91 62327 02705
              </a>
            </ContactRow>
            <ContactRow icon={<PinIcon />}>
              <span>Dept. Circle, MANIT, Bhopal 462003</span>
            </ContactRow>
          </div>

          {/* social */}
          <div className="flex gap-[7px]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 border border-[#1e3020] flex items-center justify-center text-white/28 hover:border-white/30 hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — quick links */}
        <div className="md:pl-10 pt-10 md:pt-0 border-b md:border-b-0 md:border-r border-[#1c2e1e] pb-10 md:pb-0">
          <p className="font-condensed text-[9.5px] tracking-[.28em] uppercase text-white/20 mb-6">
            Explore
          </p>
          <div className="flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center justify-between py-[10px] text-[14px] text-white/38 border-b border-[#161f17] last:border-none hover:text-white/85 transition-colors"
              >
                <span>{l.label}</span>
                <span className="text-[9.5px] text-white/12 tracking-[.06em]">{l.idx}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3 — newsletter */}
        <div className="md:pl-10 pt-10 md:pt-0">
          <p className="font-condensed text-[9.5px] tracking-[.28em] uppercase text-white/20 mb-6">
            Stay Updated
          </p>
          <p className="text-[13.5px] text-white/30 leading-[1.85] mb-6">
            Early access to registrations, results, and updates on the next edition of Vidyut.
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-white/[.04] border border-[#1e3020] px-4 py-3 text-[13px] text-white placeholder-white/18 outline-none focus:border-pine transition-colors mb-[10px] font-body"
          />
          <button className="w-full py-[11px] bg-transparent border border-[#2a3d2b] font-condensed font-bold text-[12px] tracking-[.14em] uppercase text-white/40 hover:bg-[#1c2e1e] hover:border-[#3a5e38] hover:text-white/80 transition-all">
            Notify Me
          </button>
        </div>
      </div>

      {/* ── partners band ── */}
      <div className="flex flex-col md:flex-row items-stretch border-b border-[#1c2e1e]">
        <div className="px-10 py-[22px] font-condensed text-[9.5px] tracking-[.24em] uppercase text-white/15 border-b md:border-b-0 md:border-r border-[#1c2e1e] whitespace-nowrap flex-shrink-0">
          Partners
        </div>
        <div className="flex flex-1 flex-wrap md:flex-nowrap">
          {partners.map((p, i) => (
            <div
              key={p}
              className={`flex-1 px-6 py-[22px] text-center font-condensed font-semibold text-[14px] tracking-[.05em] text-white/22 hover:text-white/60 transition-colors cursor-default ${
                i < partners.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#1c2e1e]' : ''
              }`}
            >
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* ── bottom bar ── */}
      <div className="max-w-[1200px] mx-auto px-10 py-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[11.5px] text-white/16 tracking-[.02em]">
          © 2025 Evolve NITB · Vidyut-26 · Maulana Azad National Institute of Technology, Bhopal
        </p>
        <div className="flex gap-7">
          {['Privacy', 'Terms', 'Conduct'].map((l) => (
            <a key={l} href="#" className="text-[11.5px] text-white/20 hover:text-white/55 transition-colors tracking-[.04em]">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ── small helpers ── */
function ContactRow({ icon, children }) {
  return (
    <div className="flex items-center gap-[9px] text-[13px] text-white/40">
      <span className="flex-shrink-0 opacity-50">{icon}</span>
      {children}
    </div>
  )
}

/* ── SVG icons ── */
function EmailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0122 16.9z"/>
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3"/>
      <line x1="8" y1="11" x2="8" y2="17"/>
      <line x1="8" y1="7.5" x2="8" y2="8.5"/>
      <path d="M12 11v6"/>
      <path d="M12 14a3 3 0 016 0v3"/>
    </svg>
  )
}
function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 4l16 16M20 4L4 20"/>
    </svg>
  )
}
function YouTubeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="4"/>
      <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none"/>
    </svg>
  )
}
function WhatsAppIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M21 11.5A9 9 0 1 1 3.1 15.9L2 22l6.3-1.6A9 9 0 0 1 21 11.5z"/>
    </svg>
  )
}
