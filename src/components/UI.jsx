/* ─────────────────────────────────────────────
   Shared UI primitives
   Import what you need in any page/component
───────────────────────────────────────────── */

/** Small uppercase label above a section title */
export function SectionEyebrow({ children, light = false, className = '' }) {
  return (
    <p className={`font-condensed font-bold text-[11px] tracking-[.22em] uppercase mb-2 ${
      light ? 'text-white/40' : 'text-pine'
    } ${className}`}>
      {children}
    </p>
  )
}

/** Large Bebas Neue section headline */
export function SectionTitle({ children, light = false, className = '' }) {
  return (
    <h2 className={`font-display tracking-[.02em] leading-[.95] mb-3 ${
      light ? 'text-white' : 'text-forest'
    } ${className}`}
      style={{ fontSize: 'clamp(2.2rem,4vw,3.8rem)' }}
    >
      {children}
    </h2>
  )
}

/** Small tag/badge */
export function Pill({ children, variant = 'outline' }) {
  const variants = {
    outline: 'border border-white/20 text-white/55',
    gold:    'border border-gold text-gold',
    solid:   'bg-forest text-white border border-pine',
    sage:    'bg-sage2 text-forest border border-sage2',
    pine:    'bg-pine text-white border border-pine',
  }
  return (
    <span className={`inline-block font-condensed font-semibold text-[12px] tracking-[.1em] uppercase px-[12px] py-[5px] ${variants[variant]}`}>
      {children}
    </span>
  )
}

/**
 * Image placeholder slot — swap the inner div for a real <img> when assets are ready.
 * Usage:
 *   <ImageSlot filename="1000074951.jpg" label="Student Crowd" className="h-64" />
 *
 * To replace with real image, swap the component usage with:
 *   <img src="/assets/1000074951.jpg" alt="Student Crowd"
 *        loading="lazy" className="w-full h-64 object-cover rounded" />
 */
export function ImageSlot({ filename, label, className = '' }) {
  return (
    <div className={`w-full bg-pine/50 flex flex-col items-center justify-center gap-2 rounded ${className}`}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
        stroke="rgba(255,255,255,0.3)" strokeWidth="1.4">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      {filename && (
        <span className="text-[11px] text-white/30 italic tracking-wide text-center px-2">
          {filename}
        </span>
      )}
      {label && (
        <span className="text-[10px] text-white/20 text-center px-2">{label}</span>
      )}
    </div>
  )
}

/** Gold CTA button */
export function BtnGold({ children, href = '#', className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 bg-gold hover:bg-goldb text-ink font-condensed font-bold text-[14px] tracking-[.12em] uppercase px-7 py-[13px] transition-colors ${className}`}
    >
      {children}
    </a>
  )
}

/** Ghost/outline button */
export function BtnGhost({ children, href = '#', className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 border-[1.5px] border-white/25 hover:border-white/60 text-white/75 hover:text-white font-condensed font-semibold text-[14px] tracking-[.12em] uppercase px-7 py-[13px] transition-colors ${className}`}
    >
      {children}
    </a>
  )
}

/** Scrolling ticker strip */
const TICKER_ITEMS = [
  'Vidyut-26',
  '25+ Electric Vehicles',
  '₹18,000 Prize Pool',
  '500+ Participants',
  'Sept 9 · MANIT Bhopal',
  'Tech Track 2.0',
  'Vaayu Robotics Internships',
  'Tata Motors · Unstop · Govt. of MP',
]

export function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="bg-gold overflow-hidden py-[9px] whitespace-nowrap">
      <div className="inline-flex animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-8 font-condensed font-bold text-[13px] tracking-[.12em] uppercase text-ink">
            {item}
            <span className="w-[4px] h-[4px] rounded-full bg-ink/30 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
