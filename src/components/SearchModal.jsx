import { useState, useEffect } from "react";
import { FaSearch, FaRegCompass, FaHistory, FaArrowRight } from "react-icons/fa";

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  const suggestions = [
    "Dashboard Overview",
    "Laporan Penjualan",
    "Data Pengguna",
    "Pengaturan Akun",
    "Manajemen Produk",
  ];

  const filtered = suggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden"; // Mencegah scroll di background
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center pt-[10vh] bg-gray-900/40 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-xl mx-4 overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Section */}
        <div className="relative flex items-center px-6 py-5 border-b border-gray-100">
          <FaSearch className="text-gray-400 mr-4 text-lg" />
          <input
            autoFocus
            type="text"
            placeholder="Search for reports, users, or settings..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 outline-none text-gray-700 text-base placeholder:text-gray-400 font-medium"
          />
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-block px-2 py-1 text-[10px] font-bold text-gray-400 bg-gray-50 border border-gray-200 rounded-lg">
              ESC
            </kbd>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
          {/* Label untuk context */}
          <div className="px-6 pt-4 pb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
              <FaRegCompass /> Quick Navigation
            </p>
          </div>

          <ul className="pb-4">
            {filtered.length > 0 ? (
              filtered.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-center justify-between px-6 py-3.5 hover:bg-green-50 cursor-pointer transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-gray-50 text-gray-400 group-hover:bg-white group-hover:text-green-500 shadow-sm transition-all">
                      <FaHistory className="text-xs" />
                    </div>
                    <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900">
                      {item}
                    </span>
                  </div>
                  <FaArrowRight className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-green-500 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                </li>
              ))
            ) : (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
                  <FaSearch className="text-gray-200 text-2xl" />
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  No results found for <span className="text-gray-900 font-bold">"{query}"</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">Try different keywords or check spelling.</p>
              </div>
            )}
          </ul>
        </div>

        {/* Footer Hint */}
        <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-100">
          <div className="flex gap-4">
            <span className="text-[10px] text-gray-400 flex items-center gap-1">
              <kbd className="border bg-white px-1 rounded">↑↓</kbd> to navigate
            </span>
            <span className="text-[10px] text-gray-400 flex items-center gap-1">
              <kbd className="border bg-white px-1 rounded">↵</kbd> to select
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;