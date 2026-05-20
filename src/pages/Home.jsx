import { Ticker, BtnGold, BtnGhost, ImageSlot, SectionEyebrow, SectionTitle, Pill } from '../components/UI'

/* ── hero stat ── */
function HeroStat({ num, sup, label }) {
  return (
    <div>
      <p className="font-display text-[2.2rem] text-white leading-none">
        {num}<sup className="text-gold text-[1rem]">{sup}</sup>
      </p>
      <p className="font-condensed font-semibold text-[11px] tracking-[.14em] uppercase text-white/35 mt-1">
        {label}
      </p>
    </div>
  )
}

/* ── collage slot ── */
function CollageSlot({ filename, label, className = '' }) {
  return (
    <div className={`relative rounded overflow-hidden bg-white/[.06] after:absolute after:inset-0 after:bg-ink/20 after:pointer-events-none ${className}`}>
      <ImageSlot filename={filename} label={label} className="w-full h-full" />
    </div>
  )
}

/* ── partner card ── */
function PartnerCard({ name, role, tag }) {
  return (
    <div className="bg-white hover:bg-sage p-7 flex flex-col gap-3 transition-colors cursor-default">
      {/*
        Replace the name div with a real logo:
        <img src={`/assets/${logoFile}`} alt={name}
             loading="lazy" className="h-10 w-auto object-contain mb-1" />
      */}
      <div>
        <p className="font-condensed font-bold text-[19px] tracking-[.03em] text-forest">{name}</p>
        <p className="text-[13px] text-muted mt-1">{role}</p>
      </div>
      <span className="inline-block bg-sage font-condensed font-bold text-[11px] tracking-[.1em] uppercase text-pine px-[10px] py-[3px] w-fit">
        {tag}
      </span>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="bg-forest min-h-[calc(100vh-60px)] grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] overflow-hidden">

        {/* Left — text */}
        <div className="flex flex-col justify-center px-8 lg:px-14 py-16 z-10">
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="w-7 h-[2px] bg-gold flex-shrink-0" />
            <span className="font-condensed font-semibold text-[12px] tracking-[.22em] uppercase text-gold">
              MANIT Bhopal · Sept 9, 2025
            </span>
          </div>

          {/* headline */}
          <h1 className="font-display text-white leading-[.92] tracking-[.01em] mb-6 animate-fade-up-1"
            style={{ fontSize: 'clamp(4rem,7vw,7rem)' }}>
            Central<br />India's<br />
            <span className="text-gold">Premier EV</span><br />
            Platform.
          </h1>

          {/* sub */}
          <p className="text-white/60 font-light text-[16px] leading-[1.75] max-w-[380px] mb-9 animate-fade-up-2">
            <strong className="text-white/88 font-semibold">Vidyut-26</strong> brings 500+ engineers,
            25+ electric vehicles, and India's top EV names to the floor of MANIT — in a single electrifying day.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap mb-12 animate-fade-up-3">
            <BtnGold href="#">Register Now →</BtnGold>
            <BtnGhost href="/event">View Event</BtnGhost>
          </div>

          {/* stats */}
          <div className="grid grid-cols-4 gap-2 border-t border-white/10 pt-7 animate-fade-up-4">
            <HeroStat num="25"  sup="+"  label="EVs on Floor"  />
            <HeroStat num="₹18" sup="K"  label="Prize Pool"    />
            <HeroStat num="500" sup="+"  label="Participants"   />
            <HeroStat num="11"  sup="h"  label="Expo Window"   />
          </div>
        </div>

        {/* Right — photo collage */}
        <div className="relative hidden lg:block overflow-hidden">
          {/* left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-r from-forest to-transparent z-10 pointer-events-none" />

          {/*
            COLLAGE LAYOUT (3 cols × 3 rows):
            ┌──────────┬────────┬────────┐
            │          │  [B]   │  [C]   │
            │  [A]tall │────────┴────────┤
            │          │      [D]wide    │
            ├──────────┼────────┬────────┤
            │  [E]     │      [F]wide    │
            └──────────┴────────┴────────┘

            Swap ImageSlot → real <img> when assets are ready.
            File mapping:
              A → 1000074951.jpg  (crowd)
              B → 1000074952.jpg  (interaction)
              C → 1000074953.jpg  (branding)
              D → 1000074954.jpg  (wide EV lineup)
              E → 1000074945.jpg  (campus)
              F → 1000074955.jpg  (tech models)
          */}
          <div className="absolute inset-0 grid gap-[6px] p-5 pl-0"
            style={{ gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr' }}>

            {/* A — tall, rows 1-2 */}
            <CollageSlot filename="1000074951.jpg" label="Student Crowd"
              className="[grid-row:span_2]" />

            {/* B */}
            <CollageSlot filename="1000074952.jpg" label="Vehicle Interaction" />

            {/* C */}
            <CollageSlot filename="1000074953.jpg" label="Branding Display" />

            {/* D — wide, cols 2-3 */}
            <CollageSlot filename="1000074954.jpg" label="Wide EV Lineup"
              className="[grid-column:span_2]" />

            {/* E */}
            <CollageSlot filename="1000074945.jpg" label="MANIT Campus" />

            {/* F — wide, cols 2-3 */}
            <CollageSlot filename="1000074955.jpg" label="Tech Models"
              className="[grid-column:span_2]" />
          </div>

          {/* floating live badge */}
          <div className="absolute bottom-9 right-8 z-20 bg-gold text-ink flex items-center gap-2 px-[14px] py-[8px]">
            <span className="w-[7px] h-[7px] rounded-full bg-ink/45 animate-pulse-dot flex-shrink-0" />
            <span className="font-condensed font-bold text-[13px] tracking-[.1em] uppercase">
              Live · Sept 9
            </span>
          </div>
        </div>
      </section>

      {/* ════════ TICKER ════════ */}
      <Ticker />

      {/* ════════ PARTNERS ════════ */}
      <section className="bg-white py-16 px-8 lg:px-14 border-b border-sage2">
        <div className="max-w-[1100px] mx-auto">
          <SectionEyebrow>Official Partners &amp; Sponsors</SectionEyebrow>
          <SectionTitle className="mb-8">Our Ecosystem</SectionTitle>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-sage2 border border-sage2">
            <PartnerCard name="Tata Motors"    role="Official Industry Partner"       tag="Automotive"  />
            <PartnerCard name="Unstop"         role="Competition Platform Partner"    tag="Platform"    />
            <PartnerCard name="Vaayu Robotics" role="Technical Partner · Internships" tag="Tech"        />
            <PartnerCard name="Govt. of MP"    role="Government Partner · Chief Guest" tag="Government" />
          </div>
        </div>
      </section>

      {/* ════════ CHIEF GUEST ════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-sage">

        {/* left — dark card */}
        <div className="bg-forest px-8 lg:px-14 py-16 flex flex-col justify-between relative overflow-hidden">
          {/* decorative circle */}
          <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-pine opacity-15 pointer-events-none" />

          <div className="relative z-10">
            <p className="font-condensed font-semibold text-[11px] tracking-[.22em] uppercase text-gold mb-3">
              Chief Guest · Vidyut-26
            </p>
            <h2 className="font-display text-white leading-[1.05] tracking-[.02em] mb-4"
              style={{ fontSize: 'clamp(2.2rem,3.5vw,3.2rem)' }}>
              Dept. of Urban<br />Administration<br />&amp; Development
            </h2>
            <p className="text-[14px] text-white/40 leading-[1.75] max-w-xs">
              Government of Madhya Pradesh — affirming Vidyut's role in shaping the state's clean transport roadmap.
            </p>
          </div>

          <div className="relative z-10 mt-10 inline-flex items-center gap-2 border border-white/15 px-[14px] py-[10px] w-fit">
            <span className="w-[7px] h-[7px] rounded-full bg-gold flex-shrink-0" />
            <span className="font-condensed font-semibold text-[11.5px] tracking-[.12em] uppercase text-white/50">
              Official · Govt. of Madhya Pradesh
            </span>
          </div>
        </div>

        {/* right — body text */}
        <div className="px-8 lg:px-14 py-16 flex flex-col justify-center">
          <p className="font-condensed font-bold text-[11px] tracking-[.22em] uppercase text-pine mb-5">
            Why It Matters
          </p>
          <p className="text-[16px] font-light text-[#3b5038] leading-[1.85] mb-5">
            When <strong className="font-semibold text-forest">Government of Madhya Pradesh</strong> representatives
            attend a student EV platform, it stops being just a competition. It becomes a policy signal — that student
            innovation and state infrastructure planning are converging on the same future.
          </p>
          <p className="text-[16px] font-light text-[#3b5038] leading-[1.85] mb-6">
            Vidyut-26 is where that conversation happens in public, on the floor of{' '}
            <strong className="font-semibold text-forest">MANIT's Department Circle</strong>, with 500+ engineers watching.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Govt. of MP', 'Urban Development', 'Clean Transport', 'EV Policy'].map((t) => (
              <span key={t} className="bg-white font-condensed font-bold text-[12px] tracking-[.1em] uppercase text-forest px-3 py-[5px]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
