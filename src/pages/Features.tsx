import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Sparkles,
  Layers,
  Send,
  ShieldCheck,
} from 'lucide-react'

export default function Features() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-obsidian">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(236,72,153,0.10),_transparent_65%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-wish-pink/30 bg-wish-pink-soft px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-wish-pink">
              <Layers className="h-3.5 w-3.5" />
              iPhone Duo 5-Pose Storyboard
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              Curated scrapbooks.{' '}
              <span className="bg-gradient-to-r from-wish-pink via-indigo to-wish-pink bg-clip-text text-transparent">
                Shared across both screens.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
              Duo Wish is designed around the unique physical geometry of the iPhone Duo.
              From the zero-scroll 5.4″ closed cover to the 7.6″ dual-pane studio canvas and the freestanding
              tabletop tent pose, every screen orientation unlocks a purpose-built wishlist moment.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Deep Dives with Visual Mockups */}
      <section className="bg-obsidian py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-20 px-5 md:px-8 md:space-y-28">
          {/* Feature 1: Standout Tabletop Inverted-V Share Moment */}
          <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-wish-pink">
                <span className="flex h-2 w-2 rounded-full bg-wish-pink" />
                Standout UX Moment · Tabletop Tent Pose
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                “Look what I’m Wishing for” social share sheet.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                Set your iPhone Duo in freestanding Inverted-V tent mode on any table.
                The upper half projects a high-resolution ambient hero of your wish across the room,
                while the bottom half presents a native iOS ShareLink tray within easy arm’s reach.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Freestanding Inverted-V tent pose with 4pt horizontal fold seam',
                  'Upper pane: high-resolution studio photo, price, and emerald + Claim button',
                  'Lower tray: 4 circular native ShareLink targets (Messages, Instagram, AirDrop, Giftful)',
                  'Direct deep links with fallback to giftful.com web view',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-wish-pink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-wish-pink/20 bg-slate/60 p-4 shadow-card">
              <div className="relative mx-auto aspect-[678/1000] max-w-[320px] overflow-hidden rounded-2xl border border-wish-pink/40 bg-obsidian shadow-pink-glow">
                <img
                  src="/pose-invertedv-share.png"
                  alt="Duo Wish tabletop tent pose showing the Look what I'm Wishing for share sheet"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono text-text-muted">
                <span>Inverted-V Tabletop Tent</span>
                <span className="text-wish-pink font-semibold">ShareLink Active</span>
              </div>
            </div>
          </article>

          {/* Feature 2: Closed 5.4″ Outer Display */}
          <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-giftful-emerald">
                <span className="flex h-2 w-2 rounded-full bg-giftful-emerald" />
                Affordance 02 · Closed 5.4″ Cover
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                All 10 Giftful wishes visible simultaneously.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                Engineered so you never have to scroll to see your wishlist. When closed, all 10 wishes
                from Rachael Morris’s Giftful board render simultaneously in a crisp 2×5 matrix alongside
                the iOS 27.1 right-edge 48pt vertical utility rail.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Compact 466×678 pt cover display layout with zero vertical clipping',
                  'Tap any wish to open the 4-quadrant scrapbook drilldown on the SAME closed screen',
                  'Rachael Morris Giftful avatar and $1,911 valuation badge in top banner',
                  '48pt vertical navigation rail with Category filters and quick actions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-giftful-emerald" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-giftful-emerald/20 bg-slate/60 p-4 shadow-card lg:order-1">
              <div className="relative mx-auto aspect-[466/678] max-w-[320px] overflow-hidden rounded-2xl border border-giftful-emerald/40 bg-obsidian shadow-emerald-glow">
                <img
                  src="/duo_closed_giftful_all_wishes.png"
                  alt="Duo Wish closed 5.4-inch outer display showing all 10 Giftful wishes simultaneously"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono text-text-muted">
                <span>Closed Outer Display (466×678 pt)</span>
                <span className="text-giftful-emerald font-semibold">All 10 Visible</span>
              </div>
            </div>
          </article>

          {/* Feature 3: Unfolded 7.6″ Dual-Pane Wishes Canvas */}
          <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-indigo">
                <span className="flex h-2 w-2 rounded-full bg-indigo" />
                Affordance 03 · Unfolded 7.6″ Dual-Pane
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                High-Res Wishes Canvas across the 22pt hinge spine.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                Unfolding past the 550pt threshold reveals the dual-pane OLED canvas. The left pane
                presents the High-Resolution Wishes Canvas gallery (@3x retina studio photos), while
                the right pane hosts the interactive Giftful Product Showcase and + Claim modal.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-border bg-slate/60 p-3">
                  <p className="font-mono font-bold text-giftful-emerald">LEFT PANE</p>
                  <p className="mt-1 text-text-secondary">High-Res Wishes Gallery + 10/10 Studio Assets</p>
                </div>
                <div className="rounded-xl border border-border bg-slate/60 p-3">
                  <p className="font-mono font-bold text-wish-pink">RIGHT PANE</p>
                  <p className="mt-1 text-text-secondary">Giftful Product Inspector + Interactive + Claim CTA</p>
                </div>
                <div className="rounded-xl border border-border bg-slate/60 p-3">
                  <p className="font-mono font-bold text-indigo">22PT HINGE</p>
                  <p className="mt-1 text-text-secondary">Physical titanium spine with reserved safe areas</p>
                </div>
                <div className="rounded-xl border border-border bg-slate/60 p-3">
                  <p className="font-mono font-bold text-white">RETAILER DIRECT</p>
                  <p className="mt-1 text-text-secondary">Madhappy, Salt & Stone, Shop All My Love links</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-indigo/20 bg-slate/60 p-4 shadow-card">
              <div className="relative mx-auto aspect-[669/951] max-w-[340px] overflow-hidden rounded-2xl border border-indigo/40 bg-obsidian shadow-indigo-glow">
                <img
                  src="/duo_open_giftful_hires_canvas.png"
                  alt="Duo Wish unfolded dual-pane view showing High-Res Wishes Canvas and Giftful modal"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono text-text-muted">
                <span>Dual-Pane OLED (669×951 pt)</span>
                <span className="text-indigo font-semibold">22pt Center Spine</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 14-Source Aggregation Section */}
      <section className="border-t border-border bg-slate-deep/50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-wish-pink">
              Universal Scrapbook · 14-Source Taxonomy
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-text-primary sm:text-3xl">
              One place for wishes scattered across all your apps.
            </h2>
            <p className="mt-3 text-text-secondary">
              Aggregate items from Pinterest boards, Instagram saved posts, Safari reading lists,
              and Giftful directly into unified 4-quadrant wish projects.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7 font-mono text-xs">
            {[
              { name: 'Giftful', color: '#00C875' },
              { name: 'Pinterest', color: '#E60023' },
              { name: 'Google Keep', color: '#FFBB00' },
              { name: 'Reminders', color: '#FF453A' },
              { name: 'Tasks', color: '#30D158' },
              { name: 'Screenshot', color: '#64D2FF' },
              { name: 'Instagram', color: '#E1306C' },
              { name: 'TikTok', color: '#FF0050' },
              { name: 'YouTube', color: '#FF0000' },
              { name: 'Amazon', color: '#FF9900' },
              { name: 'Etsy', color: '#F1641E' },
              { name: 'Reading List', color: '#1A88FF' },
              { name: 'Maps', color: '#34C759' },
              { name: 'AllTrails', color: '#5A4FCF' },
            ].map((src) => (
              <div
                key={src.name}
                className="flex items-center gap-2 rounded-xl border border-border bg-slate/40 p-2.5"
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: src.color }} />
                <span className="text-text-primary">{src.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Negative Constraints / Transparency */}
      <section className="border-t border-border bg-obsidian py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">
                Architecture Discipline · v1 Invariants
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-text-primary sm:text-3xl">
                Real Stitch assets, zero fabricated screens.
              </h2>
              <p className="mt-3 text-text-secondary">
                Per ticket BUI-2202 constraints, all marketing assets originate from genuine
                Stitch concept boards (project 11339104189268197348) and native SwiftUI iOS 27.1 builds.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Sparkles, title: 'Real Stitch-Exported Assets', desc: 'Every visual mockup uses authentic simulator and Stitch concept renders.' },
                { icon: ShieldCheck, title: 'No Monorepo Nesting', desc: 'Hosted in dedicated decoupled web repository (ParzivalWins/duo-wish-landing).' },
                { icon: Send, title: 'Native iOS ShareLink', desc: 'Integrated with official SwiftUI ShareLink API for Messages, Instagram, and AirDrop.' },
                { icon: Database, title: 'Local-First Privacy', desc: 'All wish project metadata is persisted locally on-device with zero tracking.' },
              ].map((item) => (
                <li key={item.title} className="rounded-2xl border border-border bg-slate/30 p-4">
                  <div className="flex items-center gap-2 text-wish-pink">
                    <item.icon className="h-4 w-4" />
                    <span className="font-mono text-xs font-bold uppercase">{item.title}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-text-secondary">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Footer Banner */}
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-wish-pink/40 bg-gradient-to-r from-wish-pink/20 via-slate to-slate p-8 md:flex-row md:p-10">
            <div>
              <h3 className="font-display text-2xl font-bold text-text-primary">
                Ready to experience social wishlist sharing on iPhone Duo?
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                Request early access to the Duo Wish TestFlight beta.
              </p>
            </div>
            <Link
              to="/signup"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-button bg-gradient-to-r from-wish-pink to-indigo px-6 py-3.5 text-base font-semibold text-white shadow-cta transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Request TestFlight Invite
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
