import { useEffect, useState } from 'react'

export default function CutoutTextLoader({ duration = 12000, onDone }) {
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), duration - 600)
    const doneTimer = setTimeout(() => onDone?.(), duration)
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer) }
  }, [duration, onDone])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#0B1410',
      transition: 'opacity 0.6s ease',
      opacity: fading ? 0 : 1,
      pointerEvents: fading ? 'none' : 'all',
      overflow: 'hidden',
    }}>

      {/* ── background EV image ── */}
      {/*
        Place your EV image at: public/assets/ev-bg.jpg
        Any EV photo works — wide landscape shot looks best.
        On mobile it centres and covers the screen.
      */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRJxvBACgybVMwOwC0zQdwA3-ugmtWqnzig&s)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.18) saturate(0.6)',
      }} />

      {/* ── green vignette over image ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(11,20,16,0.3) 0%, rgba(11,20,16,0.85) 100%)',
      }} />

      {/* ── center content ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '0 20px',
        width: '100%',
      }}>

        {/* VIDYUT cutout text */}
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(4.5rem, 18vw, 14rem)',
          letterSpacing: '0.06em',
          lineHeight: 1,
          color: 'transparent',
         backgroundImage: 'linear-gradient(135deg, #00C951 0%, #00A843 40%, #00C951 70%, #00E85A 100%)',
          backgroundSize: '300% 300%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          animation: 'gradShift 2s ease infinite',
          userSelect: 'none',
          textAlign: 'center',
          width: '100%',
        }}>
          VIDYUT
        </div>

        {/* subtitle */}
        <div style={{
          marginTop: '1.25rem',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(9px, 2vw, 11px)',
          fontWeight: 700,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
          whiteSpace: 'nowrap',
          animation: 'fadeInUp 0.6s 0.4s ease both',
          textAlign: 'center',
        }}>
          Evolve NITB · Central India EV Platform
        </div>

        {/* year pill */}
        <div style={{
          marginTop: '1.5rem',
          padding: '4px 16px',
          border: '1px solid rgba(184,148,58,0.4)',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#B8943A',
          animation: 'fadeInUp 0.6s 0.6s ease both',
          opacity: 0,
        }}>
          Sept 9, 2026 · MANIT Bhopal
        </div>
      </div>

      {/* ── progress bar ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 2, background: 'rgba(255,255,255,0.06)',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #00A843, #00C951)',
          animation: `progressFill ${duration}ms linear both`,
        }} />
      </div>

      <style>{`
        @keyframes gradShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}