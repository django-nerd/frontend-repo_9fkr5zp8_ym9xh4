import React, { useState } from 'react'

const RequestForm = () => {
  const [form, setForm] = useState({ full_name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${backend}/api/access-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      const data = await res.json()
      setStatus('Request received. Our team will reach out shortly.')
      setForm({ full_name: '', email: '', company: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again or email concierge@opesdigital.uk')
    }
  }

  return (
    <section id="request" className="relative bg-[#0D0D0D] text-[#F5F5F5] py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Request Access</h2>
        <p className="mt-3 text-[#F5F5F5]/80">Private access for institutions and family offices.</p>
        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="full_name" value={form.full_name} onChange={onChange} placeholder="Full Name" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C8A75F]/60" />
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C8A75F]/60" />
          </div>
          <input name="company" value={form.company} onChange={onChange} placeholder="Company" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C8A75F]/60" />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows={5} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C8A75F]/60" />
          <div className="flex items-center gap-4">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#C8A75F] text-black font-medium shadow-lg shadow-[#C8A75F]/20">Request Private Access</button>
            {status && <span className="text-sm opacity-80">{status}</span>}
          </div>
        </form>
        <p className="mt-10 text-xs opacity-70">Regulated activities subject to FCA, MiCA, and FINTRAC licensing. No services offered until authorized.</p>
      </div>
    </section>
  )
}

export default RequestForm
