import React from 'react'
import { ShieldCheck, Coins, Gauge, Vault } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Regulated Custody' },
  { icon: Coins, title: 'Tokenization' },
  { icon: Gauge, title: 'AI-Personalized Dashboards' },
  { icon: Vault, title: 'Vault Infrastructure' },
]

const About = () => {
  return (
    <section id="about" className="relative bg-[#0D0D0D] text-[#F5F5F5] py-24">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(40% 30% at 70% 10%, rgba(0,196,180,0.12) 0%, rgba(13,13,13,0) 60%)'
      }} />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">About Opes Digital</h2>
          <p className="mt-4 text-[#F5F5F5]/80 text-lg">
            Opes Digital is a next-generation platform that unifies custody, token issuance, private deal rooms, and institutional-grade digital asset management.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden hover:border-[#C8A75F]/40 transition">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{
                background: 'radial-gradient(60% 60% at 50% 50%, rgba(200,167,95,0.15) 0%, rgba(0,0,0,0) 60%)'
              }} />
              <Icon className="h-7 w-7 text-[#C8A75F]" />
              <h3 className="mt-4 text-xl font-medium">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
