import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative h-[90vh] w-full overflow-hidden bg-[#0D0D0D] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 40% at 50% 50%, rgba(200,167,95,0.15) 0%, rgba(0,0,0,0) 60%)'
      }} />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur mb-6">
            <span className="h-2 w-2 rounded-full bg-[#00C4B4] animate-pulse" />
            <span className="text-xs tracking-widest text-[#F5F5F5]/80">OPES DIGITAL</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight">
            <span className="text-[#F5F5F5]">The Future of Digital Wealth</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A75F] via-[#E7D6A5] to-[#C8A75F]">Is Here</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#F5F5F5]/80 max-w-2xl">
            Custody. Currency. Blockchain. Legacy.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#ecosystem" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#C8A75F] text-black font-medium shadow-lg shadow-[#C8A75F]/20">
              Explore the Ecosystem
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#request" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/20 text-white/90 hover:bg-white/10 transition">
              Request Access
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
