import React from 'react'

const competitors = [
  { name: 'Coinbase Institutional', reg: 'US / Limited EU', tok: 'Limited', vault: 'Custody only', ux: 'Good' },
  { name: 'Fireblocks', reg: 'Not a custodian', tok: 'No', vault: 'MPC infra', ux: 'Technical' },
  { name: 'SEBA / Sygnum', reg: 'CH', tok: 'Partial', vault: 'Bank custody', ux: 'Good' },
  { name: 'Tokeny', reg: 'EU', tok: 'Yes', vault: 'No custody', ux: 'Issuer-centric' },
]

const Advantage = () => {
  return (
    <section id="advantage" className="relative bg-[#0D0D0D] text-[#F5F5F5] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Competitive Advantage</h2>
          <p className="mt-4 text-[#F5F5F5]/80 text-lg">Regulation + UX + Tokenization + Vaults = Opes</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-sm">
            <div className="font-semibold opacity-70">Platform</div>
            <div className="font-semibold opacity-70">Regulatory</div>
            <div className="font-semibold opacity-70">Tokenization</div>
            <div className="font-semibold opacity-70">Vaults/Custody</div>
            <div className="font-semibold opacity-70">UX</div>
          </div>
          {competitors.map((c) => (
            <div key={c.name} className="grid grid-cols-2 sm:grid-cols-5 gap-2 items-center rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#C8A75F]/40 transition">
              <div className="font-medium">{c.name}</div>
              <div className="opacity-80">{c.reg}</div>
              <div className="opacity-80">{c.tok}</div>
              <div className="opacity-80">{c.vault}</div>
              <div className="opacity-80">{c.ux}</div>
            </div>
          ))}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 items-center rounded-xl border border-[#C8A75F]/60 bg-gradient-to-br from-[#C8A75F]/20 to-[#00C4B4]/10 p-4">
            <div className="font-semibold text-[#C8A75F]">Opes Digital</div>
            <div>UK/EU/CA rails</div>
            <div>Yes — RWA & currency</div>
            <div>Digital vaults & entities</div>
            <div>Executive-grade</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantage
