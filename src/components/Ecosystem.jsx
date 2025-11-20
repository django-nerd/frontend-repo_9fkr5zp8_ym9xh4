import React from 'react'

const products = [
  {
    name: 'Cryptauram™',
    desc: 'FCA-regulated custody & exchange',
  },
  {
    name: 'NOVOR™',
    desc: 'Gold-backed stablecoin + utility token',
  },
  {
    name: 'OMNIA™',
    desc: 'RWA tokenization & UHNW deal rooms',
  },
  {
    name: 'Asset Holding Co.',
    desc: 'Digital vaults + trust entities',
  },
]

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="relative bg-[#0D0D0D] text-[#F5F5F5] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Ecosystem</h2>
          <p className="mt-4 text-[#F5F5F5]/80 text-lg">Four pillars, one integrated infrastructure.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-[#C8A75F] via-transparent to-[#00C4B4]">
              <div className="rounded-2xl h-full w-full bg-[#121212] p-8 transition-transform group-hover:-translate-y-0.5">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#C8A75F]/30 to-[#00C4B4]/30 mb-6" />
                <h3 className="text-2xl font-medium">{p.name}</h3>
                <p className="mt-2 text-[#F5F5F5]/80">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
