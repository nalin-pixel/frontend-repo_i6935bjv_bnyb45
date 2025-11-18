import { Menu, Wifi } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Plans", href: "#plans" },
    { label: "Coverage", href: "#coverage" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 ring-1 ring-white/10">
            <Wifi className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">BlueWave Internet</p>
            <p className="text-xs text-blue-200 -mt-0.5">Fiber without cables</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#plans" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/30 ring-1 ring-white/10 hover:from-blue-500 hover:to-indigo-500 transition-colors">
            Get connected
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 ring-1 ring-white/10 text-white" onClick={() => setOpen((v) => !v)}>
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-lg p-4 space-y-3">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block text-sm text-blue-100/90 hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#plans" className="block text-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 ring-1 ring-white/10">
            Get connected
          </a>
        </div>
      )}
    </header>
  );
}
