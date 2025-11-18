import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-slate-900 to-indigo-900/60" />

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_20px_rgba(59,130,246,0.35)]"
          >
            Fiber without cables
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-blue-100/90 max-w-xl"
          >
            Ultra‑fast wireless internet powered by the latest technology and equipment.
            Built for reliability, quality, and fair pricing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#plans" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 ring-1 ring-white/10 hover:from-blue-500 hover:to-indigo-500 transition-colors">
              See plans
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur px-6 py-3 text-base font-semibold text-white ring-1 ring-white/20 hover:bg-white/15">
              Request a call
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-blue-100/80">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <p className="text-sm">99.9% uptime</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              <p className="text-sm">Latest gear</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              <p className="text-sm">Fair prices</p>
            </div>
          </div>
        </div>

        {/* Empty right column to let Spline shine */}
        <div className="hidden lg:block" />
      </div>

      {/* Subtle top gradient overlay to keep content readable without blocking interactions */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-900/70 to-transparent" />
    </section>
  );
}
