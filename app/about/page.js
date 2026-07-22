import React from 'react'

const About = () => {
  return (
<section className="min-h-screen">
  <div className="py-16 lg:py-24 px-4 mx-auto max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

  
      <div>
        <span className="inline-block mb-3 text-xs font-semibold tracking-wider text-purple-600 uppercase">
          About Bitlink
        </span>
        <h2 className="mb-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          One link in.<br/>One link out. That's it.
        </h2>
        <p className="mb-4 text-lg text-gray-600 font-light">
          Bitlink shortens links the way it should work — paste your long URL, get a short one back, instantly.
          No account to create, no email to verify, no dashboard to figure out.
        </p>
        <p className="mb-8 text-gray-700 font-medium">
          We don't run ads, we don't insert interstitial pages, and we don't sit between you and your destination.
          Click a Bitlink, land exactly where you meant to — nothing in between.
        </p>

        <ul className="space-y-4 mb-10">
          <li className="flex items-start gap-3">
            <span className="shrink-0 w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
              </svg>
            </span>
            <div>
              <p className="font-semibold text-gray-900">No sign-up, ever</p>
              <p className="text-sm text-gray-500">Shorten a link the moment you land on the page. No forms, no friction.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="shrink-0 w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"/>
              </svg>
            </span>
            <div>
              <p className="font-semibold text-gray-900">Zero ads, zero interstitials</p>
              <p className="text-sm text-gray-500">No waiting pages, no pop-ups. Your visitors go straight through.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="shrink-0 w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </span>
            <div>
              <p className="font-semibold text-gray-900">Direct, instant redirects</p>
              <p className="text-sm text-gray-500">Your short link sends people straight to the destination — nothing logged in between.</p>
            </div>
          </li>
        </ul>

        <a href="/shorten"
           className="inline-flex items-center gap-2 py-3 px-8 text-sm font-semibold text-white rounded-xl
                  bg-linear-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 hover:font-bold active:font-semibold 
                  hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all duration-200">
          Try it now
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L18 12M18 12l-6-6M18 12l-6 6"/>
          </svg>
        </a>
      </div>

      <div className="relative">
        <div className="absolute -inset-3 bg-purple-400/20 rounded-4xl blur-2xl"></div>
        <div className="relative bg-linear-to-b from-[#211c3d] to-[#150f2b] rounded-3xl border border-purple-500/20 shadow-2xl p-8">

          <label className="block mb-2 text-xs font-medium text-purple-300">Paste your long URL</label>
          <div className="mb-6 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-purple-100/50 truncate">
            https://example.com/blog/2026/very-long-article-title-here
          </div>

          <div className="flex justify-center mb-6">
            <span className="w-9 h-9 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6"/>
              </svg>
            </span>
          </div>

          <label className="block mb-2 text-xs font-medium text-purple-300">Your shortened link</label>
          <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-purple-400/30">
            <span className="text-sm font-semibold text-white">bitlink.io/xY3zQ2</span>
            <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default About
