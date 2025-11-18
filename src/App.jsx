import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Plans from './components/Plans';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* background subtle grid */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_50%_at_50%_-10%,rgba(59,130,246,0.25),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Plans />

      <footer className="relative">
        <Contact />
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-blue-200/70">© {new Date().getFullYear()} BlueWave Internet. All rights reserved.</p>
            <p className="text-xs text-blue-200/50">Built on reliability • Powered by the latest wireless fiber technology</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
