import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Mail, Smartphone, Lock, Heart, Gift } from 'lucide-react'

interface FormState {
  email: string
  interest: string
  source: string
}

const INITIAL: FormState = {
  email: '',
  interest: 'personal',
  source: '',
}

export default function SignUp() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState(false)

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  const canSubmit = emailValid

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!canSubmit) {
      setTouched(true)
      return
    }
    // Mock submit per AC negative constraints
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-obsidian">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(236,72,153,0.12),_transparent_60%)]"
        />
        <div className="relative mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-wish-pink/30 bg-wish-pink-soft px-3.5 py-1 font-mono text-xs uppercase tracking-[0.18em] text-wish-pink">
            <Gift className="h-3.5 w-3.5" />
            Early Access Beta · 2026
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
            Get Duo Wish when it ships.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
            Join the early-access TestFlight wave for iPhone Duo. We will send you an invite to test
            social wishlist sharing, tabletop Inverted-V presentations, and seamless Giftful synchronization.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-obsidian">
        <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-20">
          {submitted ? (
            <SubmittedState email={form.email} />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-card border border-border bg-slate/40 p-6 shadow-card md:p-10"
              noValidate
            >
              <div className="space-y-6">
                <Field
                  label="Email"
                  hint="We will only use this for your TestFlight invitation."
                  error={touched && !emailValid ? 'Enter a valid email address.' : null}
                >
                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@domain.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      onBlur={() => setTouched(true)}
                      className="w-full rounded-button border border-border-strong bg-obsidian py-3 pl-11 pr-4 text-base text-text-primary placeholder:text-text-muted focus:border-wish-pink focus:outline-none"
                    />
                  </div>
                </Field>

                <Field label="Primary Use Case" hint="Helps us tailor your TestFlight onboarding.">
                  <div className="grid gap-2.5 sm:grid-cols-3">
                    {[
                      { id: 'personal', label: 'Personal Scrapbook' },
                      { id: 'giftful', label: 'Giftful Registry' },
                      { id: 'social', label: 'Friends & Family Sharing' },
                    ].map((opt) => (
                      <label
                        key={opt.id}
                        className={`flex cursor-pointer items-center justify-center rounded-button border px-3 py-3 text-sm font-medium transition-colors ${
                          form.interest === opt.id
                            ? 'border-wish-pink bg-wish-pink-soft text-wish-pink font-semibold'
                            : 'border-border-strong bg-obsidian text-text-secondary hover:border-wish-pink/40 hover:text-text-primary'
                        }`}
                      >
                        <input
                          type="radio"
                          name="interest"
                          value={opt.id}
                          checked={form.interest === opt.id}
                          onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
                          className="sr-only"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </Field>

                <Field label="Referral (optional)" hint="Where did you hear about Duo Wish?">
                  <input
                    type="text"
                    placeholder="e.g. Giftful, Apple Keynote, X, Friend…"
                    value={form.source}
                    onChange={(e) => setForm((f) => ({ ...f, source: e.target.value }))}
                    className="w-full rounded-button border border-border-strong bg-obsidian px-4 py-3 text-base text-text-primary placeholder:text-text-muted focus:border-wish-pink focus:outline-none"
                  />
                </Field>
              </div>

              <div className="mt-8 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-text-muted">
                  By submitting, you agree to receive a single email with the TestFlight link.
                  No spam, no newsletters.
                </p>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="group inline-flex items-center justify-center gap-2 rounded-button bg-gradient-to-r from-wish-pink to-indigo px-6 py-3.5 text-base font-semibold text-white shadow-cta transition-all hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  Join TestFlight Wave
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
              </div>
            </form>
          )}

          {/* Value Props */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Smartphone, label: 'iPhone Duo Native', note: 'iOS 27.1 HIG verified' },
              { icon: Heart, label: 'Giftful Integration', note: 'Direct wishlist link' },
              { icon: Lock, label: 'Local-First Storage', note: 'Zero cloud tracking' },
            ].map((d) => (
              <div
                key={d.label}
                className="flex items-start gap-3 rounded-card border border-border bg-slate/40 p-4"
              >
                <d.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-wish-pink" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-text-primary">{d.label}</p>
                  <p className="text-xs text-text-muted">{d.note}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-text-muted">
            Changed your mind?{' '}
            <Link to="/" className="text-wish-pink hover:underline">
              Return to the hero
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string
  hint?: string
  error?: string | null
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-text-primary">{label}</label>
      {children}
      <div className="mt-1.5 flex items-center justify-between text-xs">
        {error ? (
          <span className="text-rose-400">{error}</span>
        ) : hint ? (
          <span className="text-text-muted">{hint}</span>
        ) : (
          <span />
        )}
      </div>
    </div>
  )
}

function SubmittedState({ email }: { email: string }) {
  return (
    <div className="rounded-card border border-wish-pink/40 bg-wish-pink-soft/30 p-8 text-center shadow-pink-glow md:p-12">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-wish-pink to-indigo text-white shadow-lg">
        <Check className="h-7 w-7" aria-hidden="true" />
      </div>
      <h2 className="mt-6 font-display text-2xl font-bold text-text-primary md:text-3xl">
        You’re on the waitlist!
      </h2>
      <p className="mt-3 text-base text-text-secondary md:text-lg">
        We will email <span className="font-mono font-semibold text-wish-pink">{email}</span> the
        TestFlight build link when the next iPhone Duo wave opens.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/features"
          className="inline-flex items-center gap-1.5 rounded-button border border-border-strong bg-slate/60 px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-wish-pink/40 hover:text-wish-pink"
        >
          Explore features
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-button bg-gradient-to-r from-wish-pink to-indigo px-5 py-2.5 text-sm font-semibold text-white"
        >
          Back to hero
        </Link>
      </div>
    </div>
  )
}
