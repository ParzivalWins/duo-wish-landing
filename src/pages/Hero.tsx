import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Share2, Smartphone, FoldVertical, ChevronRight, Gift, Check } from 'lucide-react'
import HeroVisual from '../components/HeroVisual'

// Rachael Morris's 10 Giftful Wishes (giftful.com/wishlists/1OG7UHsGwObmEVNEdH9h)
const GIFTFUL_WISHES = [
  { id: 1, title: 'The Archangel Poncho - Fog', price: 335, brand: 'giftful.com', tag: 'Autumn Layering' },
  { id: 2, title: 'Classics Fleece Hoodie · Ivory', price: 175, brand: 'madhappy', tag: 'Heavyweight Cotton' },
  { id: 3, title: 'Classics Fleece Hoodie', price: 175, brand: 'madhappy', tag: 'Featured Hi-Res' },
  { id: 4, title: 'SALT & STONE Eau de Parfum', price: 96, brand: 'saltandstone.com', tag: 'Coastal Woods' },
  { id: 5, title: 'Bon Bon Leather Black Loafer', price: 275, brand: 'giftful.com', tag: 'Supple Calfskin' },
  { id: 6, title: 'AVA TOP | ESPRESSO', price: 119, brand: 'shopallmylove.com', tag: 'Knit Crewneck' },
  { id: 7, title: 'KAYLA PANTS | ESPRESSO', price: 189, brand: 'shopallmylove.com', tag: 'Wide Leg Lounge' },
  { id: 8, title: 'TARA SHAWL TOP | ONYX', price: 219, brand: 'shopallmylove.com', tag: 'Halter Shawl' },
  { id: 9, title: 'Ruffle Hem Tank Top (Cream)', price: 228, brand: 'giftful.com', tag: 'Sculpted Peplum' },
  { id: 10, title: 'Formal Satin Straight Leg Trousers', price: 100, brand: 'giftful.com', tag: 'Liquid Satin' },
] as const

export default function Hero() {
  const [selectedWish, setSelectedWish] = useState<number>(3)
  const [claimedWishes, setClaimedWishes] = useState<number[]>([])

  const active = GIFTFUL_WISHES.find((w) => w.id === selectedWish) || GIFTFUL_WISHES[2]
  const isClaimed = claimedWishes.includes(active.id)

  const toggleClaim = (id: number) => {
    setClaimedWishes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-obsidian">
        {/* Subtle radial background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(236,72,153,0.12),_transparent_65%)]"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:gap-16 md:px-8 md:py-24 lg:gap-20 lg:py-28">
          {/* Text Column */}
          <div className="relative z-10">
            {/* Eyebrow Chip */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-button border border-border bg-slate/60 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-text-secondary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-wish-pink opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-wish-pink" />
              </span>
              <span>iPhone Duo · Wish Projects × Giftful</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Wishlists that{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-wish-pink via-indigo to-wish-pink bg-clip-text text-transparent">
                  share themselves
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-wish-pink/60 to-transparent"
                />
              </span>{' '}
              across both halves of your phone.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
              Carry your curated scrapbook wherever you go. When iPhone Duo is closed, all 10 wishes fit
              simultaneously on the 5.4″ outer cover. Unfold to 7.6″ for high-resolution studio photo galleries.
              Then set the phone down in tabletop tent mode to show your friends:
              <em className="text-white font-serif"> “Look what I’m Wishing for.”</em>
            </p>

            {/* CTA row */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/signup"
                className="group inline-flex items-center gap-2 rounded-button bg-gradient-to-r from-wish-pink to-indigo px-7 py-3.5 text-base font-semibold text-white shadow-cta transition-all hover:-translate-y-0.5 hover:opacity-95"
              >
                Join early access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                to="/features"
                className="group inline-flex items-center gap-2 rounded-button border border-border-strong bg-slate/50 px-6 py-3.5 text-base font-medium text-text-primary backdrop-blur-sm transition-colors hover:border-wish-pink/40 hover:text-wish-pink"
              >
                See the 5 poses
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Hardware & Spec Matrix */}
            <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-border/80 pt-6 sm:grid-cols-4">
              <MetaItem icon={Smartphone} label="Hardware" value="iPhone Duo" />
              <MetaItem icon={FoldVertical} label="Closed Display" value="5.4″ · 466×678 pt" />
              <MetaItem icon={Share2} label="Star Pose" value="Tabletop Tent" />
              <MetaItem icon={Gift} label="Giftful Sync" value="10 Wishes · $1,911" />
            </dl>
          </div>

          {/* Visual column */}
          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Giftful Wishlist Showcase Strip */}
      <section className="border-y border-border bg-slate-deep/70">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-giftful-emerald">
                <span className="h-2 w-2 rounded-full bg-giftful-emerald" />
                RACHAEL MORRIS · GIFTFUL WISHLIST INTEGRATION
              </div>
              <p className="mt-1 text-sm text-text-secondary">
                10 curated wishes synchronized from Giftful platform (ID: <code>1OG7UHsGwObmEVNEdH9h</code>)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-giftful-emerald/30 bg-giftful-emerald/10 px-3 py-1 font-mono text-xs font-semibold text-giftful-emerald">
                10 ITEMS · $1,911 TOTAL
              </span>
              <a
                href="https://giftful.com/wishlists/1OG7UHsGwObmEVNEdH9h"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-text-muted hover:text-white"
              >
                View on Giftful ↗
              </a>
            </div>
          </div>

          {/* 10 Wishes Grid */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
            {GIFTFUL_WISHES.map((w) => {
              const isSelected = w.id === selectedWish
              const claimed = claimedWishes.includes(w.id)
              return (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => setSelectedWish(w.id)}
                  className={`group relative flex flex-col justify-between rounded-xl border p-3 text-left transition-all ${
                    isSelected
                      ? 'border-wish-pink bg-wish-pink-soft/30 shadow-pink-glow ring-1 ring-wish-pink'
                      : 'border-border bg-slate/40 hover:border-wish-pink/40 hover:bg-slate/70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1">
                    <span className="font-mono text-[11px] text-text-muted">#{w.id}</span>
                    <span className="font-mono text-xs font-bold text-giftful-emerald">${w.price}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs font-semibold text-text-primary group-hover:text-white">
                    {w.title}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-text-muted">
                    <span>{w.brand}</span>
                    {claimed && (
                      <span className="flex items-center gap-0.5 text-giftful-emerald font-semibold">
                        <Check className="h-3 w-3" />
                        Claimed
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Interactive Wish Preview & Claim Inspector */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-wish-pink/30 bg-slate/80 p-5 backdrop-blur-sm sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-wish-pink to-indigo text-white shadow-md">
                <Gift className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-base font-bold text-text-primary">{active.title}</h3>
                  <span className="rounded-full bg-slate-raised px-2 py-0.5 font-mono text-[10px] text-text-muted">
                    {active.tag}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-text-secondary">
                  Retailer: <span className="font-medium text-white">{active.brand}</span> · Valuation: <span className="font-mono font-bold text-giftful-emerald">${active.price}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toggleClaim(active.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs font-semibold transition-all ${
                  isClaimed
                    ? 'border border-giftful-emerald bg-giftful-emerald/20 text-giftful-emerald'
                    : 'bg-giftful-emerald text-obsidian hover:bg-giftful-emerald/90 shadow-md font-bold'
                }`}
              >
                {isClaimed ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Claimed on Duo
                  </>
                ) : (
                  <>
                    + Claim This Wish
                  </>
                )}
              </button>
              <Link
                to="/features"
                className="rounded-full border border-border bg-slate/50 px-3.5 py-2 text-xs font-medium text-text-secondary hover:text-white"
              >
                Inspect in 3D ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-wish-pink-soft text-wish-pink">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <dt className="font-mono text-[10px] uppercase tracking-wider text-text-muted">{label}</dt>
        <dd className="font-medium text-text-primary text-sm">{value}</dd>
      </div>
    </div>
  )
}
