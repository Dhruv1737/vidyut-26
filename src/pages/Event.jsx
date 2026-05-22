import { SectionEyebrow, SectionTitle, ImageSlot } from '../components/UI'

function StatBox({ value, label }) {
  return (
    <div className="text-center border-r border-white/10 last:border-r-0 px-6 py-4">
      <p className="font-display text-[2.5rem] text-gold tracking-[.02em] leading-none">{value}</p>
      <p className="font-condensed font-semibold text-[11px] tracking-[.14em] uppercase text-white/35 mt-1">{label}</p>
    </div>
  )
}

function GallerySlot({ filename, label, className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded bg-sage2 ${className}`}>
      <img
        src={`/assets/${filename}`}
        alt={label}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default function Event() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="bg-forest px-8 lg:px-14 py-24 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full bg-pine opacity-[.3] pointer-events-none" />
        <div className="relative z-10 max-w-[900px]">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="w-7 h-[2px] bg-gold flex-shrink-0" />
            <span className="font-condensed font-semibold text-[12px] tracking-[.22em] uppercase text-gold">
              Highlights &amp; Legacy
            </span>
          </div>
          <h1 className="font-display text-white leading-[.9] tracking-[.01em] mb-6 animate-fade-up-1"
            style={{ fontSize: 'clamp(4rem,9vw,8rem)' }}>
            Where Industry<br /><span className="text-gold">Meets Intellect.</span>
          </h1>
          <p className="text-white/55 font-light text-[17px] leading-[1.75] max-w-[560px] mb-10 animate-fade-up-2">
            An 11-hour immersive showcase of next-generation electric vehicles at the heart of NIT Bhopal — bringing together students, engineers, and India's top EV industry names.
          </p>
          <div className="inline-grid grid-cols-3 border border-white/10 animate-fade-up-3">
            <StatBox value="25+"  label="EVs Showcased" />
            <StatBox value="11h"  label="9AM – 8PM"     />
            <StatBox value="500+" label="Attendees"      />
          </div>
        </div>
      </section>

      {/* ════════ EV EXPO ════════ */}
      <section className="bg-sage px-8 lg:px-14 py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionEyebrow light>EV Expo</SectionEyebrow>
            <SectionTitle light className="mb-4">25+ Next-Gen Electric Vehicles</SectionTitle>
            <p className="text-[16px] font-light text-white/55 leading-[1.85] mb-5">
              The Expo floor at <strong className="font-semibold text-white">Department Circle, MANIT Bhopal</strong> hosted
              over 25 cutting-edge electric vehicles — spanning two-wheelers, commercial fleet EVs, and prototype
              innovations from across India's mobility landscape.
            </p>
            <p className="text-[16px] font-light text-white/55 leading-[1.85] mb-7">
              For 11 straight hours — <strong className="font-semibold text-white">9 AM to 8 PM</strong> — students, faculty, and
              industry professionals walked the floor, interacted with vehicles live, and engaged directly with engineers and founders.
            </p>
            <div className="flex flex-wrap gap-2">
              {['9 AM – 8 PM', '11-Hour Window', 'Dept. Circle MANIT', '25+ Vehicles', 'Live Demos'].map((t) => (
                <span key={t} className="bg-sage2 font-condensed font-bold text-[11px] tracking-[.1em] uppercase px-3 py-[5px] text-gold">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <ImageSlot filename="1000074954.jpg" label="Wide EV Lineup at Expo" className="h-80 rounded" />
        </div>
      </section>

      {/* ════════ VAAYU ROBOTICS ════════ */}
      <section className="bg-pine px-8 lg:px-14 py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ImageSlot filename="" label="Vaayu Robotics · Technical Partnership" className="h-80 rounded" />
          <div>
            <SectionEyebrow light>Technical Partnership</SectionEyebrow>
            <SectionTitle light className="mb-4">In Collaboration with Vaayu Robotics</SectionTitle>
            <p className="text-[16px] font-light text-white/55 leading-[1.85] mb-4">
              Vaayu Robotics served as the technical backbone of Vidyut — providing deep industry context,
              judging expertise for Tech Track 2.0, and direct career pathways for students through paid internship offers.
            </p>
            <p className="text-[16px] font-light text-white/55 leading-[1.85] mb-7">
              Their engineers were present throughout the 11-hour event window — engaging with student teams, mentoring proposals,
              and demonstrating real-world EV engineering challenges on the floor.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Technical Partner', 'Internship Provider', 'Industry Mentor', 'Jury Member'].map((t) => (
                <span key={t} className="bg-forest text-gold font-condensed font-bold text-[11px] tracking-[.1em] uppercase px-3 py-[5px] border border-gold/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ VENUE ════════ */}
      <section className="bg-forest px-8 lg:px-14 py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionEyebrow light>Venue</SectionEyebrow>
            <SectionTitle light className="mb-4">Department Circle, MANIT Bhopal</SectionTitle>
            <p className="text-white/65 font-light text-[16px] leading-[1.85] mb-4">
              The iconic Department Circle of Maulana Azad National Institute of Technology provided the perfect
              amphitheatre setting — open, accessible, and deeply symbolic as the campus's central hub of innovation.
            </p>
            <p className="text-white/65 font-light text-[16px] leading-[1.85] mb-7">
              With 25+ EVs lined across the open space and hundreds of students flowing through, the Department
              Circle became the most electric space in Central India on September 9.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Dept. Circle', 'MANIT', 'Bhopal MP', 'Open Grounds'].map((t) => (
                <span key={t} className="border border-gold/25 font-condensed font-semibold text-[12px] tracking-[.1em] uppercase px-3 py-[5px] text-gold/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-pine border border-white/10 p-10">
            <p className="text-[48px] mb-4">📍</p>
            <p className="font-condensed font-bold text-[13px] tracking-[.15em] uppercase text-white/30 mb-2">Location</p>
            <p className="font-display text-[1.8rem] text-white tracking-[.02em] mb-1">MANIT Bhopal</p>
            <p className="text-[14px] text-white/40 mb-8">Maulana Azad National Institute of Technology · Bhopal, MP 462003</p>
            <div className="grid grid-cols-3 gap-px bg-white/[.06]">
              {[['9 AM', 'Opens'], ['8 PM', 'Closes'], ['11 hrs', 'Duration']].map(([val, lbl]) => (
                <div key={lbl} className="bg-forest p-4 text-center">
                  <p className="font-display text-[1.4rem] text-gold tracking-[.02em]">{val}</p>
                  <p className="font-condensed text-[11px] tracking-[.1em] uppercase text-white/30 mt-1">{lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ GALLERY ════════ */}
      <section className="bg-sage px-8 lg:px-14 py-20">
        <div className="max-w-[1100px] mx-auto">
          <SectionEyebrow light>Gallery</SectionEyebrow>
          <SectionTitle light className="mb-10">The Visual Proof</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <GallerySlot filename="1000074951.jpg" label="Student Engagement" className="lg:row-span-2 min-h-[380px]" />
            <GallerySlot filename="1000074952.jpg" label="Vehicle Interaction" />
            <GallerySlot filename="1000074953.jpg" label="Branding Display"   />
            <GallerySlot filename="1000074954.jpg" label="EV Lineup"          />
            <GallerySlot filename="1000074955.jpg" label="Tech Models"        className="lg:col-span-2" />
            <GallerySlot filename="1000074945.jpg" label="MANIT Campus"       />
          </div>
        </div>
      </section>
    </>
  )
}