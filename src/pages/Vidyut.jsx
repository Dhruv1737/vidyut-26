import { SectionEyebrow, SectionTitle, BtnGold } from '../components/UI'

function PhaseCard({ num, tag, tagGold, title, body, details, highlight }) {
  return (
    <div className={`bg-white p-6 sm:p-10 relative overflow-hidden hover:bg-[#fafcf8] transition-colors ${highlight ? 'border-l-[3px] border-gold' : ''}`}>
      <span className="absolute right-4 sm:right-6 top-2 sm:top-3 font-display text-[4rem] sm:text-[5rem] leading-none text-sage2 pointer-events-none select-none">
        {num}
      </span>
      <span className={`inline-block font-condensed font-bold text-[11px] tracking-[.12em] uppercase px-3 py-1 mb-5 ${
        tagGold ? 'bg-gold text-ink' : 'bg-sage text-pine'
      }`}>
        {tag}
      </span>
      <h3 className="font-display text-[1.75rem] sm:text-[2rem] tracking-[.02em] text-forest mb-4 break-words">{title}</h3>
      <p className="text-[15px] font-light text-muted leading-[1.8] mb-5">{body}</p>
      <div className="flex flex-col gap-[10px]">
        {details.map((d, i) => (
          <div key={i} className="flex items-start gap-[10px] text-[14px] text-muted">
            <span className="w-[6px] h-[6px] rounded-full bg-pine flex-shrink-0 mt-[7px]" />
            <span className="break-words w-full">{d}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PrizeCard({ rank, medal, amount, label, highlight }) {
  return (
    <div className={`bg-forest text-center p-6 sm:p-10 border border-white/[.06] hover:bg-[#1e3824] transition-colors relative ${highlight ? 'border-t-[3px] border-t-gold' : ''}`}>
      <p className="font-condensed font-bold text-[10px] sm:text-[12px] tracking-[.18em] uppercase text-white/30 mb-4">{rank}</p>
      <span className="text-[2rem] sm:text-[2.5rem] block mb-3">{medal}</span>
      <p className="font-display text-[2.2rem] sm:text-[3.2rem] text-gold tracking-[.02em] leading-none break-words">{amount}</p>
      <p className="text-[12px] sm:text-[13px] text-white/30 font-light mt-2 break-words">{label}</p>
    </div>
  )
}

function TimelineItem({ date, name, body, tag, tagGold, done, active }) {
  return (
    <div className="relative pl-8 border-l-2 border-sage2 lg:border-none lg:pl-0 w-full overflow-hidden">
      {/* dot */}
      <div className={`absolute -left-[9px] top-0 w-[18px] h-[18px] rounded-full border-2 lg:static lg:mb-6 flex-shrink-0 ${
        active ? 'bg-gold border-gold' : done ? 'bg-pine border-pine' : 'bg-white border-sage2'
      }`} />
      <div className="pb-10 lg:pb-0 mt-[-18px] lg:mt-0 w-full">
        <p className="font-condensed font-bold text-[11px] tracking-[.18em] uppercase text-muted mb-1 pt-1 lg:pt-0">{date}</p>
        <h3 className="font-display text-[1.6rem] sm:text-[1.9rem] tracking-[.02em] text-forest mb-2 break-words">{name}</h3>
        <p className="text-[14px] font-light text-muted leading-[1.75] mb-3 break-words">{body}</p>
        <span className={`inline-block font-condensed font-bold text-[11px] tracking-[.1em] uppercase px-[10px] py-[3px] break-words ${
          tagGold ? 'bg-gold text-ink' : 'bg-forest text-white'
        }`}>{tag}</span>
      </div>
    </div>
  )
}

export default function Vidyut() {
  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white">
      {/* ════════ HERO ════════ */}
      <section className="bg-forest px-4 sm:px-8 lg:px-14 py-16 sm:py-24 relative overflow-hidden w-full max-w-full">
        {/* Fixed grid texture width bleed constraints */}
        <div className="absolute inset-0 pointer-events-none opacity-100 max-w-full w-full overflow-hidden"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0,rgba(255,255,255,.025) 1px,transparent 1px,transparent 48px),
              repeating-linear-gradient(90deg,rgba(255,255,255,.025) 0,rgba(255,255,255,.025) 1px,transparent 1px,transparent 48px)
            `
          }}
        />
        <div className="absolute -right-24 -top-24 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-pine opacity-[.12] pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-pine opacity-[.08] pointer-events-none" />

        <div className="relative z-10 max-w-[900px] w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-7 h-[2px] bg-gold flex-shrink-0" />
            <span className="font-condensed font-semibold text-[12px] tracking-[.22em] uppercase text-gold break-words">
              Vidyut-26 · The Road Ahead
            </span>
          </div>
          <h1 className="font-display text-white leading-[.95] tracking-[.01em] mb-6 break-words"
            style={{ fontSize: 'clamp(2.5rem, 7.5vw, 7rem)' }}>
            Recharging<br /><span className="text-gold">Innovation.</span>
          </h1>
          <p className="text-white/55 font-light text-[15px] sm:text-[17px] leading-[1.75] max-w-[560px] mb-10 break-words">
            The next edition of Central India's defining EV platform.{' '}
            <strong className="text-white/85 font-semibold">Bigger competitions, bolder collaborations</strong> — and a clearer path from campus to career.
          </p>
          <div className="flex flex-wrap gap-2 w-full">
            {['Sept 9, 2025', 'MANIT Bhopal', 'Tech Track 2.0', '₹18K Prize Pool', 'Open to All Engineers'].map((p, i) => (
              <span key={i} className={`font-condensed font-semibold text-[11px] sm:text-[12px] tracking-[.1em] uppercase px-2.5 py-[4px] border break-words ${
                i === 0 ? 'border-gold text-gold' : 'border-white/15 text-white/50'
              }`}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ TECH TRACK 2.0 ════════ */}
      <section className="bg-white px-4 sm:px-8 lg:px-14 py-16 sm:py-20 w-full max-w-full">
        <div className="max-w-[1100px] mx-auto w-full">
          <SectionEyebrow>The Competition</SectionEyebrow>
          <SectionTitle className="mb-3">Tech Track 2.0</SectionTitle>
          <p className="text-[15px] sm:text-[16px] font-light text-muted leading-[1.85] max-w-[620px] mb-10 break-words">
            A two-phase competition that filters raw ideas into polished engineering solutions — from your laptop to the MANIT stage, in front of an industry jury.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-sage2 border border-sage2 w-full">
            <PhaseCard
              num="01" tag="Phase One" title="Online Proposal"
              body="Submit your EV innovation proposal digitally through Unstop. Teams are evaluated on technical merit, real-world feasibility, and potential for scalable impact in India's mobility sector."
              details={[
                'Submit via Unstop platform',
                'Any engineering domain welcome',
                'Team size: 1–4 members',
                'Deadline: September 5, 2025',
              ]}
            />
            <PhaseCard
              num="02" tag="Phase Two" tagGold title="Offline Finale" highlight
              body="Shortlisted teams present live at MANIT Bhopal before an expert jury of industry professionals, Vaayu Robotics engineers, and faculty — competing for ₹18,000 in prizes and internship offers."
              details={[
                'Live pitch + Q&A with jury',
                'Industry judges from Vaayu Robotics',
                'Winners announced on stage',
                'Date: September 9, 2025',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ════════ PRIZE MATRIX ════════ */}
      <section className="bg-forest px-4 sm:px-8 lg:px-14 py-16 sm:py-20 w-full max-w-full">
        <div className="max-w-[1100px] mx-auto w-full">
          <SectionEyebrow light>Rewards</SectionEyebrow>
          <SectionTitle light className="mb-3">The Prize Matrix</SectionTitle>
          <p className="text-white/45 font-light text-[15px] sm:text-[16px] leading-[1.85] max-w-[580px] mb-10 break-words">
            ₹18,000 total prize pool distributed across Tech Track 2.0 winners — plus direct internship opportunities for top performers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[.07] w-full">
            <PrizeCard rank="First Place"  medal="🥇" amount="₹10,000" label="Tech Track 2.0 · Winner"           highlight />
            <PrizeCard rank="Second Place" medal="🥈" amount="₹5,000"  label="Tech Track 2.0 · Runner Up"        />
            <PrizeCard rank="Third Place"  medal="🥉" amount="₹3,000"  label="Tech Track 2.0 · 2nd Runner Up"    />
            <PrizeCard rank="Bonus"        medal="⚡" amount="Internship" label="Paid · Vaayu Robotics"           />
          </div>

          {/* total bar responsive layout adjustments */}
          <div className="mt-px bg-white/[.04] border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full">
            <div className="w-full sm:w-auto">
              <p className="font-condensed font-semibold text-[12px] tracking-[.15em] uppercase text-white/40 mb-1">Combined Prize Pool</p>
              <p className="font-display text-[2.5rem] sm:text-[3rem] text-white tracking-[.02em] leading-none">₹18,000</p>
            </div>
            <p className="text-[13px] text-white/30 font-light max-w-xs leading-[1.7] w-full sm:w-auto">
              All prizes awarded live on stage at the Grand Finale, September 9 — Department Circle, MANIT Bhopal.
            </p>
            <div className="w-full sm:w-auto">
              <BtnGold href="#" className="w-full sm:w-auto block text-center">Register Now →</BtnGold>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CAREER ROI ════════ */}
      <section className="bg-pine px-4 sm:px-8 lg:px-14 py-16 sm:py-20 relative overflow-hidden w-full max-w-full">
        <div className="absolute -right-16 -bottom-16 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-forest opacity-25 pointer-events-none" />
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 w-full">

          {/* left */}
          <div className="w-full">
            <p className="font-condensed font-bold text-[11px] tracking-[.22em] uppercase text-white/40 mb-2">Beyond The Prize</p>
            <h2 className="font-display text-white leading-[1] tracking-[.02em] mb-5 break-words"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}>
              Paid<br />Internship<br /><span className="text-gold">Opportunities</span>
            </h2>
            <p className="text-white/65 font-light text-[15px] sm:text-[16px] leading-[1.85] mb-4 break-words">
              Top performers at Vidyut-26 get something more valuable than prize money — a direct shot at{' '}
              <strong className="text-white font-semibold">paid internships with Vaayu Robotics</strong>, one of India's emerging EV engineering firms.
            </p>
            <p className="text-white/65 font-light text-[15px] sm:text-[16px] leading-[1.85] mb-7 break-words">
              No applications. No waiting.{' '}
              <strong className="text-white font-semibold">Offers extended on stage</strong> at the Grand Finale to standout participants.
            </p>
            <div className="flex flex-wrap gap-2 w-full">
              {['Paid Role', 'EV Engineering', 'Real Projects', 'Industry Exposure'].map((t) => (
                <span key={t} className="border border-white/20 font-condensed font-semibold text-[11px] tracking-[.1em] uppercase px-2.5 py-[4px] text-white/60 break-words">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="bg-black/20 border border-white/10 p-6 sm:p-10 w-full">
            <p className="font-condensed font-bold text-[11px] tracking-[.2em] uppercase text-white/30 mb-4">Partner Company</p>
            <h3 className="font-display text-[1.8rem] sm:text-[2.2rem] text-white tracking-[.02em] mb-3 break-words">Vaayu Robotics</h3>
            <p className="text-[14px] text-white/45 leading-[1.75] mb-7 break-words">
              Technical partner of Vidyut-26 — providing industry context, judging expertise, and direct career pathways for standout student engineers.
            </p>
            <div className="flex flex-col gap-3 w-full">
              {[
                ['💼', 'Paid internship — not volunteer'],
                ['⚡', 'Work on live EV engineering projects'],
                ['🎯', 'Offer extended directly at Grand Finale'],
                ['🏆', 'Based on performance, not just rank'],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-start gap-3 text-[14px] text-white/55 w-full">
                  <span className="w-7 h-7 bg-white/[.08] border border-white/10 flex items-center justify-center flex-shrink-0 text-[14px] mt-0.5">
                    {icon}
                  </span>
                  <span className="break-words w-full">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ TIMELINE ════════ */}
      <section className="bg-sage px-4 sm:px-8 lg:px-14 py-16 sm:py-20 w-full max-w-full">
        <div className="max-w-[1100px] mx-auto w-full">
          <SectionEyebrow>Schedule</SectionEyebrow>
          <SectionTitle className="mb-3">Event Timeline</SectionTitle>
          <p className="text-[15px] sm:text-[16px] font-light text-muted leading-[1.85] max-w-[480px] mb-12 break-words">
            Three dates. One window to make your mark.
          </p>

          {/* desktop: horizontal line - wrapped in absolute mask protection */}
          <div className="hidden lg:grid grid-cols-3 gap-0 relative w-full overflow-hidden">
            <div className="absolute top-[9px] left-[calc(16.666%+1rem)] right-[calc(16.666%+1rem)] h-px bg-sage2 pointer-events-none" />
            <TimelineItem
              date="August 29, 2025" name="Launch" done
              body="Official launch of Vidyut-26 and Tech Track 2.0. Registrations open on Unstop. Teams begin forming and submitting proposals."
              tag="Registrations Open"
            />
            <div className="px-6">
              <TimelineItem
                date="September 5, 2025" name="Submissions Close" done
                body="Final deadline for all online proposals via Unstop. Shortlisted teams notified and invited to the offline finale at MANIT."
                tag="Deadline"
              />
            </div>
            <TimelineItem
              date="September 9, 2025" name="Grand Finale" active
              body="The 11-hour expo and live competition at Department Circle, MANIT Bhopal. 25+ EVs, live judging, prize ceremony — all in one electrifying day."
              tag="Grand Finale · MANIT" tagGold
            />
          </div>

          {/* mobile: vertical layout structural block safety checks */}
          <div className="lg:hidden flex flex-col ml-1 w-full max-w-full overflow-hidden">
            <TimelineItem date="August 29, 2025" name="Launch" done
              body="Official launch of Vidyut-26 and Tech Track 2.0. Registrations open on Unstop."
              tag="Registrations Open" />
            <TimelineItem date="September 5, 2025" name="Submissions Close" done
              body="Final deadline for all online proposals. Shortlisted teams notified for the offline finale."
              tag="Deadline" />
            <TimelineItem date="September 9, 2025" name="Grand Finale" active
              body="The 11-hour expo at Department Circle, MANIT. Live judging, prizes, internship offers."
              tag="Grand Finale · MANIT" tagGold />
          </div>
        </div>
      </section>
    </div>
  )
}