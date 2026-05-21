import { useState, Fragment } from 'react'

const steps = [
  {
    label:   'Launch',
    date:    'Aug 29, 2025',
    eyebrow: 'Phase 01 · Registration',
    title:   ['Vidyut-26', 'Officially Launches'],
    body:    "Registrations go live on Unstop. Teams begin forming, ideas start brewing. This is where your journey into Central India's biggest EV platform begins.",
    details: [
      'Register individually or as a team of 1–4',
      'Open to all engineering students',
      'Hosted on Unstop platform',
      'No entry fee',
    ],
  },
  {
    label:   'Submission',
    date:    'Sept 5, 2025',
    eyebrow: 'Phase 02 · Online Round',
    title:   ['Submit Your', 'EV Proposal'],
    body:    'Submit your EV innovation proposal digitally. Teams are evaluated on technical merit, feasibility, and real-world impact. Top entries are shortlisted for the Offline Finale.',
    details: [
      'PDF or slide-deck submission via Unstop',
      'Judged on merit, not just ideas',
      'Shortlisted teams notified by Sept 7',
      'Hard deadline — no extensions',
    ],
  },
  {
    label:   'Finale',
    date:    'Sept 9, 2025',
    eyebrow: 'Phase 03 · Grand Finale',
    title:   ['Live at MANIT', 'Department Circle'],
    body:    'Present live before an expert jury of Vaayu Robotics engineers and faculty at MANIT Bhopal. Winners take the stage — and the best walk away with ₹18,000 in prizes and paid internship offers.',
    details: [
      'Live pitch + Q&A with industry jury',
      '₹18,000 prize pool awarded on stage',
      'Paid internship offers from Vaayu Robotics',
      '25+ EVs on the expo floor simultaneously',
    ],
  },
]

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function StepDot({ index, status, label, onClick }) {
  const base = 'w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer transition-all duration-300 font-condensed font-bold text-[14px] border-2'
  const variants = {
    done:     `${base} bg-pine border-pine text-white`,
    active:   `${base} bg-gold border-gold text-ink shadow-[0_0_0_6px_rgba(184,148,58,0.15)]`,
    upcoming: `${base} bg-white/[.06] border-white/20 text-white/30`,
  }
  return (
    <div className="flex flex-col items-center gap-2 relative" onClick={onClick}>
      <div className={variants[status]}>
        {status === 'done' ? <CheckIcon /> : index + 1}
      </div>
      <span className={`font-condensed font-semibold text-[10px] tracking-[.14em] uppercase absolute top-10 whitespace-nowrap transition-colors duration-300 ${
        status === 'active'   ? 'text-gold' :
        status === 'done'     ? 'text-white/45' :
                                'text-white/20'
      }`}>
        {label}
      </span>
    </div>
  )
}

function StepLine({ filled }) {
  return (
    <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden mx-[6px] mb-7">
      <div
        className="absolute left-0 top-0 bottom-0 bg-gold transition-all duration-500 ease-in-out"
        style={{ width: filled ? '100%' : '0%' }}
      />
    </div>
  )
}

function StepCard({ step, animKey }) {
  return (
    <div
      key={animKey}
      className="bg-white/[.05] border border-white/[.09] p-8 min-h-[210px] relative"
      style={{ animation: 'stepSlideIn .35s ease both' }}
    >
      <span className="absolute top-6 right-6 font-condensed font-semibold text-[11px] tracking-[.12em] uppercase bg-white/[.06] border border-white/10 px-3 py-[4px] text-white/35">
        {step.date}
      </span>
      <p className="font-condensed font-bold text-[10px] tracking-[.2em] uppercase text-gold mb-2">
        {step.eyebrow}
      </p>
      <h3 className="font-display text-[2rem] tracking-[.02em] text-white leading-[1.05] mb-3">
        {step.title[0]}<br />{step.title[1]}
      </h3>
      <p className="text-[14.5px] font-light text-white/55 leading-[1.8] mb-5 max-w-xl">
        {step.body}
      </p>
      <div className="flex flex-col gap-2">
        {step.details.map((d, i) => (
          <div key={i} className="flex items-center gap-[10px] text-[13.5px] text-white/40">
            <span className="w-[6px] h-[6px] rounded-full bg-pine flex-shrink-0" />
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function StepperSection() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const goTo = (i) => {
    if (i === current) return
    setCurrent(i)
    setAnimKey((k) => k + 1)
  }

  const prev = () => { if (current > 0) goTo(current - 1) }
  const next = () => {
    if (current < steps.length - 1) {
      goTo(current + 1)
    } else {
      window.open('https://unstop.com', '_blank') // 👈 replace with your Unstop link
    }
  }

  return (
    <>
      <style>{`
        @keyframes stepSlideIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <section className="bg-forest px-8 lg:px-14 py-20 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-pine opacity-[.12] pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-60 h-60 rounded-full bg-pine opacity-[.07] pointer-events-none" />

        <div className="max-w-[780px] mx-auto relative z-10">

          <p className="font-condensed font-bold text-[11px] tracking-[.22em] uppercase text-gold mb-1">
            Tech Track 2.0
          </p>
          <h2 className="font-display text-white leading-[.95] tracking-[.02em] mb-10"
            style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)' }}>
            The <span className="text-gold">Competition</span> Journey
          </h2>

          {/* progress dots */}
          <div className="flex items-center mb-10">
            {steps.map((s, i) => (
              <Fragment key={i}>
                <StepDot
                  key={`dot-${i}`}
                  index={i}
                  label={s.label}
                  status={i < current ? 'done' : i === current ? 'active' : 'upcoming'}
                  onClick={() => goTo(i)}
                />
                {i < steps.length - 1 && (
                  <StepLine key={`line-${i}`} filled={i < current} />
                )}
              </Fragment>
            ))}
          </div>

          {/* card */}
          <StepCard step={steps[current]} animKey={animKey} />

          {/* nav */}
          <div className="flex items-center justify-between mt-5">
            <span className="font-condensed font-semibold text-[11px] tracking-[.15em] uppercase text-white/20">
              Step {current + 1} of {steps.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={current === 0}
                className="font-condensed font-bold text-[13px] tracking-[.1em] uppercase px-5 py-[10px] bg-white/[.08] border border-white/[.12] text-white/50 hover:bg-white/[.14] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>
              <button
                onClick={next}
                className="font-condensed font-bold text-[13px] tracking-[.1em] uppercase px-5 py-[10px] bg-gold hover:bg-goldb text-ink transition-colors"
              >
                {current === steps.length - 1 ? 'Register Now →' : 'Next →'}
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}