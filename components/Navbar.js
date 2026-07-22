import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   <nav className="fixed top-0 inset-x-0 z-50 h-16 bg-purple-700/40 backdrop-blur-xl border-b border-white/10 flex items-center justify-between text-white px-4">
    <div className="logo font-bold text-lg flex items-center gap-2">
        <img src="/bitlink.gif" alt="Bitlinks Logo" className="h-8 w-8" />
        <Link className="hover:text-purple-300 hover:font-semibold active:font-normal transition-all text-xl" href="/">Bitlink</Link>
        
        </div>
    <ul className="flex items-center justify-center gap-4 ">
        <Link className="hover:text-purple-300 hover:font-bold active:font-semibold transition-all font-semibold" href="/"><li>Home</li></Link>
        <Link className="hover:text-purple-300 hover:font-bold active:font-semibold transition-all font-semibold" href="/about"><li>About</li></Link>
        <Link className="hover:text-purple-300 hover:font-bold active:font-semibold transition-all font-semibold" href="/shorten"><li>Shorten</li></Link>
        <Link className="hover:text-purple-300 hover:font-bold active:font-semibold transition-all font-semibold" href="/contact"><li>Contact</li></Link>
        <li className="flex gap-3 items-center">
        {/* <Link href="/shorten"><button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-3 py-1 font-semibold hover:font-bold active:font-semibold transition-all hover:bg-white/20">Try Now</button></Link>
        <Link href="https://github.com/hiteshraj786" target="_blank"><button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-semibold hover:font-bold active:font-semibold transition-all hover:bg-purple-600">GitHub</button></Link>  */}
        </li>
    </ul>
   </nav>
  )
}

export default Navbar
