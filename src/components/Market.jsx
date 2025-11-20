import React from 'react'

const stats = [
  { k: 'Tokenized RWAs', v: '$24T+', sub: 'Projected by 2030' },
  { k: 'Global Private Wealth', v: '$84T', sub: 'Seeking diversification' },
  { k: 'UHNW Exposure', v: '16%', sub: 'Already exposed to digital assets' },
]

const Market = () => {
  return (
    <section id="market" className="relative bg-[#0D0D0D] text-[#F5F5F5] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Market Opportunity</h2>
          <p className="mt-4 text-[#F5F5F5]/80 text-lg">Institutional adoption of digital assets is accelerating.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C8A75F] to-[#E7D6A5]">{s.v}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-[#F5F5F5]/70">{s.k}</div>
              <div className="mt-1 text-[#F5F5F5]/60">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Market
