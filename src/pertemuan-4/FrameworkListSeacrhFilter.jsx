import React, { useState, useMemo } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
    /** 1. Inisialisasi State Objek **/
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    /** 2. Handle perubahan nilai input form **/
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /** 3. Ambil Unique Tags **/
    const allTags = useMemo(() => {
        const tags = new Set();
        frameworkData.forEach((item) => {
            if (Array.isArray(item.tags)) {
                item.tags.forEach(tag => tags.add(tag));
            }
        });
        return Array.from(tags).sort();
    }, []);

    /** 4. Logic Search & Filter **/
    const filteredData = useMemo(() => {
        const _searchTerm = dataForm.searchTerm.toLowerCase();
        
        return frameworkData.filter((framework) => {
            const matchesSearch =
                framework.name.toLowerCase().includes(_searchTerm) ||
                framework.description.toLowerCase().includes(_searchTerm) ||
                framework.details?.developer?.toLowerCase().includes(_searchTerm) ||
                framework.details?.releaseYear?.toString().includes(_searchTerm);

            const matchesTag = dataForm.selectedTag 
                ? framework.tags?.includes(dataForm.selectedTag) 
                : true;

            return matchesSearch && matchesTag;
        });
    }, [dataForm.searchTerm, dataForm.selectedTag]); // Perbaikan dependency

    return (
        <div className="min-h-screen bg-[#030712] py-24 px-6 font-sans antialiased selection:bg-cyan-500/30">
            {/* Background Decor */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-6">
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white">
                        Future <span className="bg-gradient-to-b from-cyan-300 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Stacks</span>
                    </h1>
                    <p className="text-slate-500 text-sm font-bold tracking-[0.5em] uppercase">
                        Filtered Architectural Excellence
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mb-20 flex flex-col md:flex-row gap-6">
                    {/* Input Search */}
                    <div className="relative flex-grow group">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur opacity-20 group-focus-within:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center bg-[#0a0f1e]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="pl-5 text-slate-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="searchTerm" // Penting untuk handleChange
                                placeholder="Search by name, developer, or year..."
                                className="w-full bg-transparent py-4 px-4 text-white focus:outline-none text-sm placeholder:text-slate-600"
                                value={dataForm.searchTerm}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Select Category */}
                    <div className="relative w-full md:w-64 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-2xl blur opacity-20 group-focus-within:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-[#0a0f1e]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <select
                                name="selectedTag" // Penting untuk handleChange
                                className="w-full bg-transparent py-4 px-5 text-white appearance-none focus:outline-none cursor-pointer text-sm font-medium"
                                value={dataForm.selectedTag}
                                onChange={handleChange}
                            >
                                <option value="" className="bg-[#0a0f1e]">All Tags</option>
                                {allTags.map((tag, index) => (
                                    <option key={index} value={tag} className="bg-[#0a0f1e]">
                                        {tag}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Filter Aktif */}
                {(dataForm.searchTerm || dataForm.selectedTag) && (
                    <div className="mb-10 flex items-center justify-center gap-4 text-xs font-mono">
                        <span className="text-slate-500 uppercase tracking-widest">Showing:</span>
                        <span className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                            {filteredData.length} Results
                        </span>
                        <button
                            onClick={() => setDataForm({ searchTerm: "", selectedTag: "" })}
                            className="text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}

                {/* Grid List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredData.map((item) => (
                        <div key={item.id} className="group relative rounded-[2.5rem] p-[2px] transition-all duration-700 hover:scale-[1.03]">
                            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#22d3ee_180deg,transparent_210deg,transparent_360deg)] animate-[spin_3s_linear_infinite]" />
                            </div>

                            <div className="relative h-full bg-[#0a0f1e]/95 backdrop-blur-3xl rounded-[calc(2.5rem-2px)] p-10 flex flex-col border border-white/10 group-hover:border-transparent">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
                                        {item.details?.category || item.tags?.[0] || "Architecture"}
                                    </span>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Year</p>
                                        <p className="text-sm font-mono font-bold text-white">{item.details?.releaseYear}</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-white tracking-tight line-clamp-1 group-hover:text-cyan-400 transition-colors">
                                        {item.name}
                                    </h2>
                                    <p className="text-[11px] font-bold text-cyan-500/80 uppercase mt-1 tracking-widest">
                                        {item.details?.developer}
                                    </p>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow line-clamp-3 italic">
                                    "{item.description}"
                                </p>

                                <a
                                    href={item.details?.officialWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn relative inline-flex items-center justify-between w-full p-4 rounded-2xl bg-white/[0.03] border border-white/5 transition-all hover:bg-white/[0.08]"
                                >
                                    <span className="text-xs font-bold uppercase text-white">Open Blueprint</span>
                                    <div className="h-8 w-8 rounded-lg bg-cyan-500 flex items-center justify-center text-black">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredData.length === 0 && (
                    <div className="text-center py-32 bg-[#0a0f1e]/50 backdrop-blur-sm rounded-[3rem] border border-dashed border-white/10">
                        <p className="text-slate-500 tracking-[0.2em] uppercase font-bold text-sm">
                            No matching architectures in this sector
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}