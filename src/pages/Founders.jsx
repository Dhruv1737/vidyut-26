import { SectionEyebrow, SectionTitle } from '../components/UI'

const founders = [
  {
    initials: 'Y',
    name:     'Yash Atlani',
    role:     'Lead Organizer',
    photo:    null,
    bio:      "Visionary organizer driving Vidyut's overall strategy, partnerships, and execution from conception to grand finale. Primary liaison with institutional and industry stakeholders — including Tata Motors, Vaayu Robotics, and the Government of Madhya Pradesh.",
    tags:     ['Strategy', 'Partnerships', 'Stakeholder Relations'],
  },
  {
    initials: 'AJ',
    name:     'Ayush Jain',
    role:     'Strategic Lead',
    photo:    null,
    bio:      "Architect of Vidyut's long-term positioning and competitive identity. Spearheaded the Tech Track 2.0 framework and the industry collaboration model with Vaayu Robotics — turning a campus event into a genuine career launchpad.",
    tags:     ['Strategic Planning', 'Tech Track', 'Industry Collaboration'],
  },
  {
    initials: 'AS',
    name:     'Aman Sharma',
    role:     'Operational Lead',
    photo:    null,
    bio:      'Ground-level execution and logistics lead. Ensured seamless management of the 11-hour expo, 500+ participant flow, 25+ EV coordination, and cross-team operations across every minute of the Grand Finale at MANIT.',
    tags:     ['Logistics', 'Execution', 'Event Operations'],
  },
]

function FounderCard({ founder, index }) {
  return (
    <div className="bg-pine border border-white/[.08] border-t-[4px] border-t-gold overflow-hidden hover:border-gold/30 transition-all">
      <div className="h-64 bg-gradient-to-br from-forest to-sage2 relative flex items-center justify-center">
        {founder.photo ? (
          <img src={founder.photo} alt={founder.name} loading="lazy" className="w-full h-full object-cover" />
        ) : (
          <div className="w-24 h-24 bg-white/10 border-2 border-white/25 flex items-center justify-center">
            <span className="font-display text-[2.5rem] text-white tracking-[.02em]">
              {founder.initials}
            </span>
          </div>
        )}
        <div className="absolute bottom-3 left-4 bg-gold text-ink font-condensed font-bold text-[11px] tracking-[.08em] uppercase px-3 py-[4px]">
          {founder.role}
        </div>
        <div className="absolute top-4 right-4 font-display text-[3rem] text-white/10 leading-none select-none">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-display text-[1.9rem] tracking-[.02em] text-white mb-3 leading-[1.05]">
          {founder.name}
        </h3>
        <p className="text-[14.5px] font-light text-white/45 leading-[1.8] mb-6">
          {founder.bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {founder.tags.map((t) => (
            <span key={t} className="bg-sage2 font-condensed font-bold text-[11px] tracking-[.1em] uppercase px-3 py-[4px] text-gold">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Founders() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="bg-forest px-8 lg:px-14 py-24 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full bg-pine opacity-[.3] pointer-events-none" />
        <div className="relative z-10 max-w-[800px]">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="w-7 h-[2px] bg-gold flex-shrink-0" />
            <span className="font-condensed font-semibold text-[12px] tracking-[.22em] uppercase text-gold">
              The Leadership
            </span>
          </div>
          <h1 className="font-display text-white leading-[.92] tracking-[.01em] mb-6 animate-fade-up-1"
            style={{ fontSize: 'clamp(3.5rem,8vw,7rem)' }}>
            The Founders<br />of{' '}
            <span className="text-gold">Evolve NITB</span>
          </h1>
          <p className="text-white/55 font-light text-[17px] leading-[1.75] max-w-[520px] animate-fade-up-2">
            Three engineers who turned a campus idea into Central India's most significant EV platform — and did it without a roadmap.
          </p>
        </div>
      </section>

      {/* ════════ CARDS ════════ */}
      <section className="bg-sage px-8 lg:px-14 py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((f, i) => (
              <FounderCard key={f.name} founder={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════ QUOTE ════════ */}
      <section className="bg-forest px-8 lg:px-14 py-20 border-t border-white/[.06]">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-white tracking-[.02em] leading-[1.2] mb-6">
            "We didn't just organize an event — we built a platform that gives engineering students a genuine stake in India's EV future."
          </p>
          <div className="w-10 h-px bg-gold mx-auto mb-4" />
          <p className="font-condensed font-semibold text-[12px] tracking-[.18em] uppercase text-white/35">
            Evolve NITB · Founding Team
          </p>
        </div>
      </section>

      {/* ════════ TEAM CTA ════════ */}
      <section className="bg-sage px-8 lg:px-14 py-16 border-t border-white/[.06]">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <SectionEyebrow light>Join the Movement</SectionEyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[.02em] text-white leading-[.95]">
              Want to be Part<br />of Vidyut-26?
            </h2>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="mailto:Evolvenitb@gmail.com"
              className="inline-flex items-center gap-2 bg-gold hover:bg-goldb text-ink font-condensed font-bold text-[14px] tracking-[.12em] uppercase px-7 py-4 transition-colors">
              Get in Touch →
            </a>
            <a href="#"
              className="inline-flex items-center gap-2 border border-gold/30 text-gold font-condensed font-semibold text-[14px] tracking-[.12em] uppercase px-7 py-4 hover:bg-gold hover:text-ink transition-colors">
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}