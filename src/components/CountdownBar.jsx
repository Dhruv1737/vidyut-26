import { useState, useEffect } from 'react'

export default function CountdownBar() {
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
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    /* Removed "sticky", "top-0", and "z-[210]". It now uses standard static block layout */
    <div className="bg-forest border-b border-white/[.06] py-2 px-4">
      <div className="flex justify-center">
        <div
          className="inline-flex items-center gap-4 flex-wrap justify-center"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            background: 'rgba(26,46,28,0.8)',
            border: '1px solid rgba(184,148,58,0.25)',
            borderRadius: 999,
            padding: '6px 20px',
          }}
        >
          {/* label */}
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 10, fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#B8943A',
            whiteSpace: 'nowrap',
          }}>
            Vidyut-26 · Grand Finale
          </span>

          <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />

          {/* countdown units */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {[
              { val: pad(timeLeft.days),    label: 'D' },
              { val: pad(timeLeft.hours),   label: 'H' },
              { val: pad(timeLeft.minutes), label: 'M' },
              { val: pad(timeLeft.seconds), label: 'S' },
            ].map(({ val, label }, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 20, color: '#fff',
                    lineHeight: 1, letterSpacing: '0.04em',
                  }}>{val}</span>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 9, fontWeight: 600,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                  }}>{label}</span>
                </div>
                {i < 3 && (
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 16, color: '#B8943A',
                    lineHeight: 1, marginBottom: 4,
                  }}>:</span>
                )}
              </div>
            ))}
          </div>

          <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />

          {/* date */}
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 10, fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            whiteSpace: 'nowrap',
          }}>
            Sept 9, 2026
          </span>
        </div>
      </div>
    </div>
  )
}