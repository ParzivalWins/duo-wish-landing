import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-slate-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 md:flex-row md:items-center md:px-8">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Duo Wish. Built for iPhone Duo and Giftful.
          </p>
          <p className="text-xs text-text-muted">
            Wish Projects × Giftful wishlist social sharing concept prototype.
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm text-text-secondary">
          <Link to="/features" className="hover:text-text-primary">
            Features
          </Link>
          <Link to="/signup" className="hover:text-text-primary">
            Waitlist
          </Link>
          <a
            href="https://giftful.com/wishlists/1OG7UHsGwObmEVNEdH9h"
            target="_blank"
            rel="noreferrer"
            className="hover:text-giftful-emerald"
          >
            Giftful Wishlist ↗
          </a>
          <a
            href="https://github.com/ParzivalWins/DuoWish"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-primary"
          >
            GitHub (iOS)
          </a>
        </div>
      </div>
    </footer>
  )
}
