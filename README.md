# Duo Wish — Landing Page

Public marketing landing for the **Duo Wish** iPhone Duo wishlist and Giftful sharing experience.

- **Stack:** Vite 6 + React 19 + TypeScript + Tailwind v4 + react-router-dom 7 + lucide-react
- **Design System:** Wish Design System (obsidian `#0B0F19`, slate `#151C2C`, indigo `#6366F1`, wish-pink `#EC4899`, Giftful emerald `#00C875`)
- **3 Pages:** `/` Hero, `/features` Features, `/signup` Early Access
- **Deploy Target:** Vercel preview (SPA rewrites in `vercel.json`)
- **Native iOS Prototype:** `ParzivalWins/DuoWish` (separate native Swift/Xcode repository)
- **Dedicated Web Repository:** `ParzivalWins/duo-wish-landing`

## Hardware & Poses Showcased

1. **Tabletop Inverted-V Tent Pose** — Standout UX moment with "Look what I'm Wishing for" share sheet and native iOS ShareLink targets.
2. **Closed 5.4″ Outer Cover Display (`466×678 pt`)** — All 10 Giftful wishes visible simultaneously with right-edge 48pt utility rail.
3. **Open 7.6″ Dual-Pane Inner Display (`669×951 pt`)** — Unfolded dual-pane OLED separated by 22pt hinge spine featuring High-Res Wishes Canvas and Giftful `+ Claim` modal.

## Synchronized Giftful Wishlist

Integrated with Rachael Morris's Giftful wishlist (`1OG7UHsGwObmEVNEdH9h`, 10 items, $1,911 valuation) across all 5 foldable poses.

## Build & Preview

```bash
npm run build      # tsc --noEmit + vite build
npm run preview    # Preview production build locally
```
