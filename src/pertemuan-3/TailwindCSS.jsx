import { useState, useEffect } from "react";

export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden">
      {/* Background orbs */}
      <div className="fixed top-[-100px] right-[-100px] w-96 h-96 bg-orange-500 rounded-full blur-[100px] opacity-15 pointer-events-none animate-pulse" />
      <div className="fixed bottom-20 left-[-80px] w-72 h-72 bg-sky-500 rounded-full blur-[80px] opacity-15 pointer-events-none animate-pulse" />

      {/* Navbar di paling atas */}
      <FlexboxGrid />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-2">
        {/* Header */}
        <div className="mb-2">
          <span className="inline-block text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30 mb-4">
            Tailwind CSS
          </span>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
            Belajar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Tailwind CSS
            </span>
          </h1>
          <p className="text-slate-400 mt-3 text-lg">
            Eksplorasi komponen, layout, dan utility classes.
          </p>
          <button className="mt-5 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-7 py-3 rounded-xl font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-200">
            Click Me →
          </button>
        </div>

        <Divider />
        <Section label="Spacing">
          <Spacing />
        </Section>

        <Divider />
        <Section label="Typography">
          <Typography />
        </Section>

        <Divider />
        <Section label="Border Radius">
          <BorderRadius />
        </Section>

        <Divider />
        <Section label="Background Colors">
          <BackgroundColors />
        </Section>

        <Divider />
        <Section label="Shadow Effects">
          <ShadowEffects />
        </Section>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8" />
  );
}

function Section({ label, children }) {
  return (
    <div>
      <span className="inline-block text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-4">
        {label}
      </span>
      {children}
    </div>
  );
}

function Spacing() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sky-500 to-sky-700 p-7 rounded-2xl shadow-2xl shadow-sky-500/20">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
      <h2 className="text-xl font-bold">Card Title</h2>
      <p className="mt-2 text-sky-100 leading-relaxed">
        Ini adalah contoh penggunaan padding dan margin di Tailwind.
      </p>
    </div>
  );
}

function Typography() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
        Tailwind Typography
      </h1>
      <p className="text-slate-400 text-lg mt-3 leading-relaxed max-w-md">
        Belajar Tailwind sangat menyenangkan dan cepat!
      </p>
    </div>
  );
}

function BorderRadius() {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="border-2 border-slate-600 text-slate-200 px-6 py-3 rounded-xl bg-white/5 backdrop-blur hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-300 transition-all duration-200">
        Klik Saya
      </button>
      <button className="border-2 border-slate-600 text-slate-200 px-6 py-3 rounded-full bg-white/5 backdrop-blur hover:border-sky-500 hover:bg-sky-500/10 hover:text-sky-300 transition-all duration-200">
        Rounded Full
      </button>
      <button className="border-2 border-slate-600 text-slate-200 px-6 py-3 rounded-sm bg-white/5 backdrop-blur hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-300 transition-all duration-200">
        Rounded SM
      </button>
    </div>
  );
}

function BackgroundColors() {
  const colors = [
    { bg: "bg-orange-500", label: "Orange" },
    { bg: "bg-sky-500", label: "Sky" },
    { bg: "bg-violet-500", label: "Violet" },
    { bg: "bg-emerald-500", label: "Emerald" },
    { bg: "bg-rose-500", label: "Rose" },
  ];
  return (
    <div className="bg-slate-900 border border-slate-800 p-7 rounded-2xl shadow-xl">
      <h3 className="text-xl font-bold text-white">Tailwind Colors</h3>
      <p className="mt-2 text-slate-400 leading-relaxed">
        Belajar Tailwind itu seru dan fleksibel!
      </p>
      <div className="flex gap-3 mt-5 flex-wrap">
        {colors.map(({ bg, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div className={`w-8 h-8 ${bg} rounded-lg shadow-lg hover:scale-110 transition-transform duration-150`} />
            <span className="text-[10px] text-slate-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center bg-slate-950/80 border-b border-slate-800 backdrop-blur-md px-8 py-4">
      <h1 className="text-lg font-extrabold tracking-tight">
        My<span className="text-orange-400">Website</span>
      </h1>
      <ul className="flex space-x-6 list-none p-0 m-0">
        {["Home", "About", "Contact"].map((item) => (
          <li key={item}>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200 no-underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 hover:border-orange-500/30 transition-all duration-300 cursor-default">
      <h3 className="text-xl font-bold text-white">Hover me! ✦</h3>
      <p className="text-slate-500 mt-2 leading-relaxed">
        Lihat efek bayangan saat hover — halus tapi berkesan.
      </p>
    </div>
  );
}

