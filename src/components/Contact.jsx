import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Demo only – in a full build we'd POST to backend
    await new Promise((r) => setTimeout(r, 800));
    setStatus('Thanks! We will contact you shortly.');
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
          <h2 className="text-2xl font-bold text-white">Request a call</h2>
          <p className="mt-2 text-blue-200/80">Leave your details and our team will reach out.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm text-blue-100/80 mb-2">Name</label>
              <input required className="w-full rounded-xl bg-white/10 text-white placeholder:text-blue-200/60 px-4 py-2.5 ring-1 ring-white/20 focus:outline-none focus:ring-white/40" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-blue-100/80 mb-2">Phone</label>
              <input required type="tel" className="w-full rounded-xl bg-white/10 text-white placeholder:text-blue-200/60 px-4 py-2.5 ring-1 ring-white/20 focus:outline-none focus:ring-white/40" placeholder="(555) 123-4567" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-blue-100/80 mb-2">Address</label>
              <input required className="w-full rounded-xl bg-white/10 text-white placeholder:text-blue-200/60 px-4 py-2.5 ring-1 ring-white/20 focus:outline-none focus:ring-white/40" placeholder="123 Main St" />
            </div>
            <div className="sm:col-span-2">
              <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:from-blue-500 hover:to-indigo-500">Request a call</button>
            </div>
          </form>

          {status && <p className="mt-4 text-emerald-300 text-sm">{status}</p>}
        </div>
      </div>
    </section>
  );
}
