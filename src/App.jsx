import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Ecosystem from './components/Ecosystem'
import Compliance from './components/Compliance'
import Market from './components/Market'
import Advantage from './components/Advantage'
import RequestForm from './components/RequestForm'

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5]">
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-gradient-to-b from-black/60 to-transparent backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#hero" className="text-sm tracking-widest text-[#F5F5F5]/80">OPES DIGITAL</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#F5F5F5]/80">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#ecosystem" className="hover:text-white">Ecosystem</a>
            <a href="#compliance" className="hover:text-white">Compliance</a>
            <a href="#market" className="hover:text-white">Market</a>
            <a href="#advantage" className="hover:text-white">Advantage</a>
            <a href="#request" className="hover:text-white">Request Access</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Ecosystem />
        <Compliance />
        <Market />
        <Advantage />
        <RequestForm />
      </main>

      <footer className="bg-black/60 border-t border-white/10 py-10 text-center text-xs text-[#F5F5F5]/70">
        © {new Date().getFullYear()} Opes Digital. All rights reserved.
      </footer>
    </div>
  )
}

export default App
