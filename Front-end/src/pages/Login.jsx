
import { useState } from 'react'
import { useAuth } from '../contex/AuthContext'

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 3 19 6v5c0 4.7-3 8-7 10-4-2-7-5.3-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M7.5 3.5h9a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5a1.5 1.5 0 0 1 1.5-1.5Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 17.5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="5" y="10" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function Login() {
  const {login}=useAuth();
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const phone = formData.get('phone')
    const password = formData.get('password')
    login({
      phone:formData.get("phone"),
      password:formData.get("password"),
       userType:formData.get("userType"),

    })

    
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f8f7] px-4 py-10 text-slate-900 sm:px-6">

      {/* Background */}

      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-44 h-[28rem] w-[28rem] rounded-full bg-emerald-100/70 blur-3xl" />

      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -right-36 h-[34rem] w-[34rem] rounded-full bg-cyan-100/60 blur-3xl" />

      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_28px_90px_-38px_rgba(15,53,48,0.28)] lg:min-h-[650px] lg:grid-cols-[1.02fr_0.98fr]">

        {/* Left Section */}

        <aside className="relative hidden flex-col justify-between overflow-hidden bg-[#0d3935] p-12 text-white lg:flex xl:p-14">

          <div aria-hidden="true" className="absolute -right-28 top-24 h-80 w-80 rounded-full border border-white/10" />

          <div aria-hidden="true" className="absolute -right-12 top-40 h-56 w-56 rounded-full border border-white/10" />

          <div aria-hidden="true" className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-2xl" />

          {/* Logo */}

          <a href="/" className="relative flex w-fit items-center gap-3" aria-label="SmartHealth home">

            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300 text-[#0d3935]">
              <ShieldIcon />
            </span>

            <span className="text-xl font-semibold tracking-tight">
              SmartHealth
            </span>

          </a>

          {/* Branding Content */}

          <div className="relative max-w-md pb-3">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-200 ring-1 ring-white/15">
              <ShieldIcon />
            </div>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-200">
              Healthcare Made Smarter
            </p>

            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight xl:text-[2.8rem]">
              Your health deserves better choices.
            </h1>

            <p className="mt-5 max-w-sm text-base leading-7 text-emerald-50/70">
              Discover trusted hospitals, compare medical services
              and treatment costs, and make smarter healthcare decisions.
            </p>

          </div>

          <p className="relative text-sm text-emerald-50/50">
            Connecting people with better healthcare.
          </p>

        </aside>

        {/* Right Section */}

        <div className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-12 xl:px-16">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}

            <a href="/" className="mb-10 flex w-fit items-center gap-2.5 lg:hidden" aria-label="SmartHealth home">

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d3935] text-emerald-200">
                <ShieldIcon />
              </span>

              <span className="text-lg font-semibold tracking-tight text-slate-900">
                SmartHealth
              </span>

            </a>

            {/* Heading */}

            <div className="mb-8">

              <p className="mb-3 text-sm font-semibold text-emerald-700">
                WELCOME BACK
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Sign in to your account
              </h2>

              <p className="mt-3 text-[15px] leading-6 text-slate-500">
                Access hospitals, healthcare services and your account.
              </p>

            </div>

            {/* Login Form */}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Phone Number */}

              <div>

                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                  Phone number
                </label>

                <div className="flex h-13 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-600/10">

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
                    className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <div className="mb-2 flex items-center justify-between gap-3">

                  <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-sm font-medium text-emerald-700 transition hover:text-emerald-800"
                  >
                    Forgot password?
                  </a>

                </div>

                <div className="flex h-13 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-600/10">

                  <span className="text-slate-400">
                    <LockIcon />
                  </span>

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                    className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="text-xs font-semibold text-slate-500 transition hover:text-slate-800"
                  >
                    {showPassword ? 'Hide' : 'Show'}
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

              {/* Remember Me */}

              <label className="flex w-fit cursor-pointer items-center gap-2.5 py-1 text-sm text-slate-600">

                <input
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 rounded border-slate-300 accent-emerald-700 focus:ring-emerald-600"
                />

                Remember me

              </label>

              {/* Submit */}

              <button
                type="submit"
                className="flex h-13 w-full items-center justify-center rounded-xl bg-[#0d3935] px-5 text-sm font-semibold text-white shadow-[0_8px_18px_-8px_rgba(13,57,53,0.7)] transition hover:bg-[#125149] focus:outline-none focus:ring-4 focus:ring-emerald-700/20 active:translate-y-px"
              >
                Sign in
              </button>

            </form>

            {/* Register Link */}

            <p className="mt-8 text-center text-sm text-slate-500">

              New to SmartHealth?{' '}

              <a
                href="/register"
                className="font-semibold text-emerald-700 transition hover:text-emerald-800"
              >
                Create an account
              </a>

            </p>

            {/* Security Note */}

            <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-400">

              <ShieldIcon />

              <span>Your account information is protected.</span>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Login
