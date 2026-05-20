import { Link } from 'react-router-dom'
import { SectionEyebrow, SectionTitle } from '../components/UI'

function PillarCard({ icon, title, desc }) {
  return (
    <div className="bg-sage p-7 border border-sage2 hover:border-bark transition-colors">
      <span className="text-[2rem] block mb-4">{icon}</span>
      <h3 className="font-condensed font-bold text-[18px] tracking-[.03em] text-forest mb-2">{title}</h3>
      <p className="text-[14px] font-light text-muted leading-[1.75]">{desc}</p>
    </div>
  )
}

function MediaCard({ name }) {
  return (
    <div className="bg-white border border-sage2 p-6 flex flex-col items-center text-center gap-3 hover:bg-sage transition-colors">
      <span className="text-[2rem]">📰</span>
      <p className="font-condensed font-bold text-[17px] tracking-[.03em] text-forest">{name}</p>
      <span className="font-condensed font-semibold text-[11px] tracking-[.1em] uppercase text-pine bg-sage px-3 py-[3px]">
        Media Partner
      </span>
    </div>
  )
}

export default function About() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="bg-forest px-8 lg:px-14 py-24 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full bg-pine opacity-[.12] pointer-events-none" />
        <div className="relative z-10 max-w-[800px]">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="w-7 h-[2px] bg-gold flex-shrink-0" />
            <span className="font-condensed font-semibold text-[12px] tracking-[.22em] uppercase text-gold">
              About the Club
            </span>
          </div>
          <h1 className="font-display text-white leading-[.92] tracking-[.01em] mb-6 animate-fade-up-1"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Evolve: The<br />Interdisciplinary<br /><span className="text-gold">Technical Club</span><br />of NIT Bhopal.
          </h1>
          <p className="text-white/55 font-light text-[17px] leading-[1.75] max-w-[540px] animate-fade-up-2">
            Founded by students, driven by purpose. Evolve bridges the gap between engineering talent and the rapidly evolving EV automotive sector.
          </p>
        </div>
      </section>

      {/* ════════ MISSION ════════ */}
      <section className="bg-white px-8 lg:px-14 py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionEyebrow>Mission</SectionEyebrow>
            <SectionTitle className="mb-4">Bridging Talent &amp; Technology</SectionTitle>
            <p className="text-[16px] font-light text-muted leading-[1.85] mb-4">
              Evolve was built on a single conviction: that the future of India's mobility sector will be shaped by students who get real exposure, real mentorship, and real platforms to demonstrate their capabilities.
            </p>
            <p className="text-[16px] font-light text-muted leading-[1.85]">
              Through Vidyut, we create that bridge — between the classroom and the industry, between prototype and product, between student and professional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <PillarCard icon="⚡" title="Electric Mobility"    desc="Promoting EV adoption, awareness, and deep technical understanding across MANIT and Central India." />
            <PillarCard icon="🔬" title="Technical Excellence" desc="Fostering a rigorous engineering culture through industry-grade competitions and real problem statements." />
            <PillarCard icon="🤝" title="Industry Connect"     desc="Building lasting bridges between NIT Bhopal students and the growing EV ecosystem — through events, partnerships, and internships." />
          </div>
        </div>
      </section>

      {/* ════════ MANIT IDENTITY ════════ */}
      <section className="bg-forest px-8 lg:px-14 py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionEyebrow light>Institutional Identity</SectionEyebrow>
            <SectionTitle light className="mb-4">Proudly Rooted at MANIT</SectionTitle>
            <p className="text-white/65 font-light text-[16px] leading-[1.85] mb-4">
              Evolve operates under the institutional support of{' '}
              <strong className="text-white font-semibold">Maulana Azad National Institute of Technology, Bhopal</strong> — one of India's premier National Institutes of Technology and a cornerstone of Central India's engineering education.
            </p>
            <p className="text-white/65 font-light text-[16px] leading-[1.85]">
              MANIT's campus — particularly the iconic Department Circle — serves as the live stage for Vidyut's annual EV exposition, giving the event both scale and credibility.
            </p>
          </div>
          <div className="bg-white/[.05] border border-white/10 p-10 text-center">
            <p className="text-[56px] mb-4">🏛️</p>
            <p className="font-display text-[2rem] text-white tracking-[.02em] mb-1">MANIT Bhopal</p>
            <p className="text-[14px] text-white/40 mb-6">Maulana Azad National Institute of Technology</p>
            <p className="text-[13px] text-white/25 leading-[1.7]">
              Established 1960 · NIT Ranking Band · Bhopal, Madhya Pradesh<br />
              One of 31 National Institutes of Technology in India
            </p>
          </div>
        </div>
      </section>

      {/* ════════ MEDIA ECOSYSTEM ════════ */}
      <section className="bg-sage px-8 lg:px-14 py-20">
        <div className="max-w-[1100px] mx-auto">
          <SectionEyebrow>Media Coverage</SectionEyebrow>
          <SectionTitle className="mb-3">Our Media Ecosystem</SectionTitle>
          <p className="text-[16px] font-light text-muted leading-[1.85] max-w-[560px] mb-10">
            Vidyut received widespread regional media recognition — amplifying Evolve NITB's work to audiences across Madhya Pradesh.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['BKB', 'MP04', 'BHM', 'Bhopal Update'].map((m) => (
              <MediaCard key={m} name={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA to Founders ════════ */}
      <section className="bg-forest px-8 lg:px-14 py-20">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <SectionTitle light className="mb-3">Meet the Leadership</SectionTitle>
            <p className="text-white/50 font-light text-[16px] max-w-[440px] leading-[1.75]">
              The three driven individuals behind Vidyut's vision, strategy, and execution — from first idea to grand finale.
            </p>
          </div>
          <Link
            to="/founders"
            className="inline-flex items-center gap-3 bg-gold hover:bg-goldb text-ink font-condensed font-bold text-[14px] tracking-[.12em] uppercase px-8 py-4 transition-colors flex-shrink-0"
          >
            View Founders →
          </Link>
        </div>
      </section>
    </>
  )
}
