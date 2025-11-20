import React from 'react'

const tags = [
  'FCA (UK)', 'MiCA (EU)', 'FINTRAC (CA)', 'ISO', 'SOC2', 'ERC-3643', 'AML', 'KYB', 'SMCR-ready'
]

const Compliance = () => {
  return (
    <section id="compliance" className="relative bg-[#0D0D0D] text-[#F5F5F5] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Compliance</h2>
          <p className="mt-4 text-[#F5F5F5]/80 text-lg max-w-2xl">
            “Opes Digital is built on regulatory rails — not workarounds.”
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {tags.map((t) => (
            <span key={t} className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Compliance
