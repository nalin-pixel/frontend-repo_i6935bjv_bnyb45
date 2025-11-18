import { ShieldCheck, SignalHigh, Gauge, Coins } from "lucide-react";

const features = [
  {
    icon: SignalHigh,
    title: "Quality",
    desc: "Consistent high-speed connectivity engineered for peak performance.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Enterprise-grade uptime backed by proactive monitoring.",
  },
  {
    icon: Coins,
    title: "Fair Prices",
    desc: "Transparent plans that scale with your needs. No surprises.",
  },
  {
    icon: Gauge,
    title: "Latest Tech",
    desc: "Cutting-edge hardware and wireless fiber architecture.",
  },
];

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built on principles that matter</h2>
          <p className="mt-4 text-blue-200/80">
            We obsess over quality, reliability, fair pricing, and staying ahead with the latest technology.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 hover:bg-white/8 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 ring-1 ring-white/10 mb-4">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
