import { useState } from 'react'
import { Share2, Smartphone, BookOpen, Sparkles, Heart } from 'lucide-react'

type PoseMode = 'invertedV' | 'closed' | 'open'

export default function HeroVisual() {
  const [pose, setPose] = useState<PoseMode>('invertedV')

  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px]">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] opacity-75 blur-3xl transition-all duration-500"
        style={{
          background:
            pose === 'invertedV'
              ? 'radial-gradient(circle at 50% 40%, rgba(236,72,153,0.35), transparent 70%)'
              : pose === 'open'
                ? 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.35), transparent 70%)'
                : 'radial-gradient(circle at 50% 40%, rgba(0,200,117,0.30), transparent 70%)',
        }}
      />

      {/* Interactive Pose Switcher Controls */}
      <div className="mb-4 flex items-center justify-center gap-1.5 rounded-2xl border border-border bg-slate/90 p-1.5 shadow-card backdrop-blur-md">
        <button
          type="button"
          onClick={() => setPose('invertedV')}
          className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
            pose === 'invertedV'
              ? 'bg-gradient-to-r from-wish-pink to-indigo text-white shadow-cta'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          <Share2 className="h-3.5 w-3.5" />
          Tabletop Inverted-V
        </button>
        <button
          type="button"
          onClick={() => setPose('closed')}
          className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
            pose === 'closed'
              ? 'bg-giftful-emerald text-obsidian shadow-cta font-bold'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          <Smartphone className="h-3.5 w-3.5" />
          Closed 5.4″
        </button>
        <button
          type="button"
          onClick={() => setPose('open')}
          className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
            pose === 'open'
              ? 'bg-indigo text-white shadow-cta'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          <BookOpen className="h-3.5 w-3.5" />
          Open 7.6″
        </button>
      </div>

      {/* Titanium iPhone Duo Device Mockup Container */}
      <div className="group relative overflow-hidden rounded-[36px] border-2 border-white/15 bg-obsidian p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-wish-pink/40">
        <div className="relative overflow-hidden rounded-[28px] border border-border/80 bg-slate-deep">
          {pose === 'invertedV' && (
            <div className="relative aspect-[678/1000] w-full overflow-hidden bg-obsidian">
              <img
                src="/pose-invertedv-share.png"
                alt="iPhone Duo in Inverted-V tabletop tent pose showing the Look what I'm Wishing for share sheet with native Messages, Instagram, AirDrop, and Pinterest share targets"
                className="h-full w-full object-contain"
                loading="eager"
              />
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-wish-pink/40 bg-slate/90 px-3 py-2 text-xs backdrop-blur-md">
                <div className="flex items-center gap-1.5 font-mono font-semibold text-wish-pink">
                  <Heart className="h-3.5 w-3.5 fill-wish-pink" />
                  STANDOUT SHARE MOMENT
                </div>
                <span className="font-mono text-[11px] text-text-secondary">Tabletop Tent</span>
              </div>
            </div>
          )}

          {pose === 'closed' && (
            <div className="relative aspect-[466/678] w-full overflow-hidden bg-obsidian">
              <img
                src="/duo_closed_giftful_all_wishes.png"
                alt="iPhone Duo closed outer 5.4-inch display showing all 10 Giftful wishes simultaneously with Rachael Morris header and 48pt utility rail"
                className="h-full w-full object-contain"
                loading="eager"
              />
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-giftful-emerald/40 bg-slate/90 px-3 py-2 text-xs backdrop-blur-md">
                <div className="flex items-center gap-1.5 font-mono font-semibold text-giftful-emerald">
                  <Sparkles className="h-3.5 w-3.5" />
                  ALL 10 WISHES SIMULTANEOUS
                </div>
                <span className="font-mono text-[11px] text-text-secondary">Closed 5.4″</span>
              </div>
            </div>
          )}

          {pose === 'open' && (
            <div className="relative aspect-[669/951] w-full overflow-hidden bg-obsidian">
              <img
                src="/duo_open_giftful_hires_canvas.png"
                alt="iPhone Duo unfolded 7.6-inch dual-pane display showing the High-Res Wishes Canvas on left and Giftful Product Showcase + Claim Modal on right across the 22pt hinge spine"
                className="h-full w-full object-contain"
                loading="eager"
              />
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-indigo/40 bg-slate/90 px-3 py-2 text-xs backdrop-blur-md">
                <div className="flex items-center gap-1.5 font-mono font-semibold text-indigo">
                  <BookOpen className="h-3.5 w-3.5" />
                  DUAL-PANE OLED CANVAS
                </div>
                <span className="font-mono text-[11px] text-text-secondary">22pt Hinge Spine</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Badges */}
      <div className="pointer-events-none absolute -left-4 top-16 hidden rounded-xl border border-border bg-slate/90 px-3 py-2 text-[11px] shadow-card backdrop-blur-md md:block">
        <p className="font-mono text-[9px] uppercase tracking-widest text-wish-pink">SOCIAL SHARING</p>
        <p className="font-medium text-text-primary">Native iOS ShareLink</p>
      </div>

      <div className="pointer-events-none absolute -right-4 bottom-24 hidden rounded-xl border border-border bg-slate/90 px-3 py-2 text-[11px] shadow-card backdrop-blur-md md:block">
        <p className="font-mono text-[9px] uppercase tracking-widest text-giftful-emerald">GIFTFUL SYNC</p>
        <p className="font-mono font-medium text-text-primary">10 Items · $1,911</p>
      </div>
    </div>
  )
}
