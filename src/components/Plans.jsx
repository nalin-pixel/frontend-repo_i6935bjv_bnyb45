import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 19,
    speed: "50 Mbps",
    features: ["Unlimited data", "No contracts", "Basic router included"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: 39,
    speed: "200 Mbps",
    features: ["Unlimited data", "Priority support", "Wi‑Fi 6 router"],
    highlighted: true,
  },
  {
    name: "Ultra",
    price: 69,
    speed: "1 Gbps",
    features: ["Unlimited data", "Static IP available", "Mesh-ready"],
    highlighted: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, fair pricing</h2>
          <p className="mt-4 text-blue-200/80">Choose the speed that fits. No hidden fees.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl p-6 ring-1 ring-white/10 backdrop-blur bg-white/5 ${plan.highlighted ? 'md:-mt-4 md:mb-4 bg-gradient-to-b from-white/10 to-white/5' : ''}`}>
              {plan.highlighted && (
                <div className="absolute -top-3 right-4 text-xs font-semibold text-sky-200">Most popular</div>
              )}
              <h3 className="text-white font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-white">${plan.price}<span className="text-sm font-normal text-blue-200">/mo</span></p>
              <p className="text-sm text-blue-200/80 mt-1">Up to {plan.speed}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-blue-100/90">
                    <Check className="h-5 w-5 text-emerald-400 mt-0.5" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow ring-1 ring-white/10 hover:from-blue-500 hover:to-indigo-500">
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
