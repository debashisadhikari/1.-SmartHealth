
import { useContext, useState } from 'react'
import { useAuth } from '../contex/AuthContext'
import { useNavigate } from 'react-router-dom'




function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M7.5 3.5h9A1.5 1.5 0 0 1 18 5v14a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5a1.5 1.5 0 0 1 1.5-1.5Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 17.5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="5" y="10" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function Register() {
  const {register}=useAuth();

  const [showPasswords, setShowPasswords] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (password.length < 8) {
      setPasswordError('Password must contain at least 8 characters.')
      return
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match. Please try again.')
      return
    }

    setPasswordError('')
register({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password,
    userType:formData.get("userType"),
    confirmpassword:formData.get("confirmPassword"),
  });
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f8f7] px-4 py-8 text-slate-900 sm:px-6">

      <div className="pointer-events-none absolute -left-40 -top-44 h-[28rem] w-[28rem] rounded-full bg-emerald-100/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -right-36 h-[34rem] w-[34rem] rounded-full bg-cyan-100/60 blur-3xl" />

      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_28px_90px_-38px_rgba(15,53,48,0.28)] lg:min-h-[720px] lg:grid-cols-[0.95fr_1.05fr]">

        {/* Left Section */}

        <aside className="relative hidden flex-col justify-between overflow-hidden bg-[#0d3935] p-12 text-white lg:flex xl:p-14">

          <div className="absolute -right-28 top-24 h-80 w-80 rounded-full border border-white/10" />

          <div className="absolute -right-12 top-40 h-56 w-56 rounded-full border border-white/10" />

          <div className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-2xl" />

          <a href="/" className="relative flex w-fit items-center gap-3">

            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300 text-[#0d3935]">
              <LockIcon />
            </span>

            <span className="text-xl font-semibold tracking-tight">
              SmartHealth
            </span>

          </a>

          <div className="relative max-w-md pb-3">

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-emerald-200">
              Your Health, Our Priority
            </p>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight xl:text-4xl">
              Better healthcare starts with the right choice.
            </h1>

            <p className="mt-5 max-w-sm text-base leading-7 text-emerald-50/70">
              Discover trusted hospitals, explore medical services,
              compare treatment costs and make informed healthcare decisions.
            </p>

          </div>

          <p className="relative text-sm text-emerald-50/50">
            Making healthcare more accessible and transparent.
          </p>

        </aside>

        {/* Registration Form */}

        <div className="flex items-center justify-center px-6 py-9 sm:px-12 lg:px-12 xl:px-16">

          <div className="w-full max-w-md">

            <a href="/" className="mb-8 flex w-fit items-center gap-2.5 lg:hidden">

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d3935] text-emerald-200">
                <LockIcon />
              </span>

              <span className="text-lg font-semibold tracking-tight text-slate-900">
                SmartHealth
              </span>

            </a>

            <div className="mb-6">

              <p className="mb-2 text-sm font-semibold text-emerald-700">
                JOIN SMARTHEALTH
              </p>

              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Register to discover and access healthcare services.
              </p>

            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Full Name */}

              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Full name
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-600/10">

                  <span className="text-slate-400">
                    <UserIcon />
                  </span>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    required
                    className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />

                </div>
              </div>

              {/* Email */}

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email address
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-600/10">

                  <span className="text-slate-400">
                    <MailIcon />
                  </span>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    required
                    className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />

                </div>
              </div>

              {/* Phone */}

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Phone number
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-600/10">

                  <span className="text-slate-400">
                    <PhoneIcon />
                  </span>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="Enter your phone number"
                    required
                    className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />

                </div>
              </div>

              {/* Password */}

              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-600/10">

                  <span className="text-slate-400">
                    <LockIcon />
                  </span>

                  <input
                    id="password"
                    name="password"
                    type={showPasswords ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="Create a password"
                    required
                    className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />

                </div>
              </div>

              {/* Confirm Password */}

              <div>
                <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Confirm password
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-600/10">

                  <span className="text-slate-400">
                    <LockIcon />
                  </span>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPasswords ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    required
                    className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPasswords(!showPasswords)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    {showPasswords ? 'Hide' : 'Show'}
                  </button>

                </div>
                <br />
                <div>
  <label htmlFor="userType" className="mb-1.5 block text-sm font-medium text-slate-700">
    Account Type
  </label>

  <select
    id="userType"
    name="userType"
    required
    defaultValue="normal"
    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
  >
    <option value="normal">Normal User</option>
    <option value="admin">Admin</option>
  </select>
</div>
              </div>

              {passwordError && (
                <p role="alert" className="text-sm text-rose-600">
                  {passwordError}
                </p>
              )}

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#0d3935] px-5 text-sm font-semibold text-white shadow-[0_8px_18px_-8px_rgba(13,57,53,0.7)] transition hover:bg-[#125149] focus:outline-none focus:ring-4 focus:ring-emerald-700/20 active:translate-y-px"
              >
                Create account
              </button>

            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{' '}

              <a
                href="/login"
                className="font-semibold text-emerald-700 transition hover:text-emerald-800"
              >
                Sign in
              </a>

            </p>

          </div>
        </div>

      </section>
    </main>
  )
}

export default Register
