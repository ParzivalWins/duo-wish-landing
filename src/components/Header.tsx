import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Gift, Sparkles } from 'lucide-react'

const NAV_LINKS = [
  { to: '/', label: 'Hero' },
  { to: '/features', label: 'Features' },
  { to: '/signup', label: 'Early Access' },
] as const

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'border-b border-border bg-obsidian/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 font-display text-lg font-bold text-text-primary"
          aria-label="Duo Wish home"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-wish-pink-soft ring-1 ring-wish-pink/40 transition-colors group-hover:bg-wish-pink-soft/80">
            <Gift className="h-4 w-4 text-wish-pink" aria-hidden="true" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-giftful-emerald shadow-[0_0_8px_var(--color-giftful-emerald)]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="flex items-center gap-1.5">
              <span>Duo Wish</span>
              <span className="rounded-full bg-giftful-emerald/20 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-giftful-emerald">
                × Giftful
              </span>
            </span>
            <span className="mt-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-text-secondary">
              iPhone Duo
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-wish-pink'
                    : 'text-text-secondary hover:text-text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/signup"
          className="hidden items-center gap-2 rounded-button bg-gradient-to-r from-wish-pink to-indigo px-5 py-2 text-sm font-semibold text-white shadow-cta transition-all hover:-translate-y-0.5 hover:opacity-95 md:inline-flex"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Join the waitlist
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-text-primary md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-slate/95 backdrop-blur-md md:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium ${
                    isActive
                      ? 'bg-wish-pink-soft text-wish-pink'
                      : 'text-text-secondary hover:bg-slate-raised hover:text-text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/signup"
              className="mt-2 inline-flex items-center justify-center rounded-button bg-gradient-to-r from-wish-pink to-indigo px-4 py-3 text-base font-semibold text-white"
            >
              Join the waitlist
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
