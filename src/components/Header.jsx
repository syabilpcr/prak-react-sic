import { useState } from "react";
import { Search, Bell, X, Command } from "lucide-react";

const Header = ({ title, subtitle }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="bg-white px-8 py-3.5 flex items-center justify-between sticky top-0 z-10"
      style={{ boxShadow: "0 1px 0 #f1f5f9, 0 2px 8px rgba(0,0,0,0.04)" }}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <div>
          <h2 className="text-base font-bold text-gray-800 leading-tight">{title || "Dashboard"}</h2>
          {subtitle && <p className="text-[11px] text-gray-400 leading-tight">{subtitle}</p>}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative flex items-center">
          <Search size={13} className="absolute left-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search anything..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-9 pr-14 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-300 w-52 transition-all"
          />
          <div className="absolute right-3 flex items-center gap-0.5 text-gray-300">
            {searchValue ? (
              <button onClick={() => setSearchValue("")} className="hover:text-gray-500 transition-colors">
                <X size={12} />
              </button>
            ) : (
              <span className="flex items-center gap-0.5 text-[10px] font-semibold bg-gray-100 px-1.5 py-0.5 rounded-md text-gray-400">
                <Command size={9} />K
              </span>
            )}
          </div>
        </div>

        {/* Notification */}
        <button className="relative p-2.5 rounded-xl hover:bg-gray-50 border border-gray-100 transition-colors">
          <Bell size={16} className="text-gray-500" />
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Divider */}
        <div className="w-px h-7 bg-gray-100" />

        {/* User */}
        <div className="flex items-center gap-2.5">
          <div className="text-right">
            <p className="text-xs font-bold text-gray-800 leading-tight">SYABIL</p>
            <p className="text-[10px] text-gray-400 leading-tight">Owner</p>
          </div>
          <div className="relative">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-green-200">
              S
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
