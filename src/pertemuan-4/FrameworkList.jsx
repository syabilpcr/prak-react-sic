import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="min-h-screen bg-[#030712] py-24 px-6 font-sans antialiased selection:bg-cyan-500/30">
            {/* Dynamic Background Atmosphere */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[140px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-24 space-y-6">
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white">
                        Future <span className="bg-gradient-to-b from-cyan-300 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Stacks</span>
                    </h1>
                    <p className="text-slate-500 text-sm md:text-base font-bold tracking-[0.5em] uppercase max-w-2xl mx-auto">
                        The Next Evolution of Digital Craftsmanship
                    </p>
                </div>

                {/* Grid System */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {frameworkData.map((item) => (
                        <div
                            key={item.id}
                            className="group relative rounded-[2.5rem] p-[2px] transition-all duration-700 hover:scale-[1.03] active:scale-[0.98]"
                        >
                            {/* BORDER ANIMATION LAYER */}
                            {/* Cahaya berputar yang hanya muncul saat hover */}
                            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#22d3ee_180deg,transparent_210deg,transparent_360deg)] animate-[spin_3s_linear_infinite]" />
                            </div>

                            {/* Static Border (Base) */}
                            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 group-hover:border-transparent transition-colors" />

                            {/* MAIN CARD CONTENT */}
                            <div className="relative h-full bg-[#0a0f1e]/95 backdrop-blur-3xl rounded-[calc(2.5rem-2px)] p-10 overflow-hidden">

                                {/* Internal Glow on Hover */}
                                <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Card Top Branding */}
                                    <div className="flex justify-between items-start mb-12">
                                        <div className="relative h-14 w-14 group-hover:rotate-[10deg] transition-transform duration-500">
                                            <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
                                            <div className="relative h-full w-full flex items-center justify-center rounded-2xl bg-slate-900 border border-white/10 text-cyan-400 group-hover:border-cyan-400/50 transition-colors">
                                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black tracking-[0.3em] text-slate-600 uppercase">Release</p>
                                            <p className="text-sm font-mono font-bold text-white tracking-tighter">{item.details.releaseYear}</p>
                                        </div>
                                    </div>

                                    {/* Framework Name & Developer */}
                                    <div className="mb-6">
                                        <h2 className="text-3xl font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                                            {item.name}
                                        </h2>
                                        <div className="inline-flex items-center mt-2 px-3 py-1 rounded-md bg-white/5 border border-white/5 shadow-inner">
                                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse mr-2" />
                                            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                                                {item.details.developer}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow font-light">
                                        {item.description}
                                    </p>

                                    {/* Premium Button Action */}
                                    <a
                                        href={item.details.officialWebsite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn relative inline-flex items-center justify-between w-full p-4 rounded-2xl bg-white/[0.03] border border-white/5 transition-all duration-300 hover:bg-white/[0.08] hover:border-cyan-500/30"
                                    >
                                        <span className="text-xs font-bold uppercase tracking-widest text-white ml-2">Open Blueprint</span>
                                        <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 group-hover/btn:bg-cyan-500 group-hover/btn:text-black transition-all duration-500">
                                            <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>

                                {/* Decorative Bottom Mesh */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}