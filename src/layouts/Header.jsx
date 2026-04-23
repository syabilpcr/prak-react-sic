import { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import SearchModal from "../components/SearchModal";
import NotificationDropdown from "../components/NotificationDropdown";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-gray-100 bg-white/70 px-6 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          
          {/* Page Title & Breadcrumb-ish */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-gray-800">
              Dashboard
            </h1>
            <p className="hidden text-[11px] font-medium text-gray-400 sm:block">
              Manage your restaurant activity here
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            
            {/* Search Style Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="group hidden items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-2 transition-all duration-300 hover:border-green-200 hover:bg-white hover:shadow-md hover:shadow-green-100/50 lg:flex lg:w-72"
            >
              <FaSearch className="text-xs text-gray-400 transition-colors group-hover:text-green-500" />
              <span className="text-sm text-gray-400 group-hover:text-gray-500">Search anything...</span>
              <div className="ml-auto flex items-center gap-1 opacity-40">
                <kbd className="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-[10px] font-sans">⌘</kbd>
                <kbd className="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-[10px] font-sans">K</kbd>
              </div>
            </button>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              
              {/* Notification with Indicator */}
              <div className="relative flex items-center justify-center p-1">
                <NotificationDropdown />
                {/* Notification Dot */}
                <span className="absolute right-2 top-2 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500"></span>
                </span>
              </div>

              {/* Vertical Divider */}
              <div className="h-8 w-[1px] bg-gray-100" />

              {/* User Profile */}
              <button className="group flex items-center gap-3 rounded-xl p-1.5 transition-all hover:bg-gray-50">
                <div className="relative">
                  <img 
                    src="https://avatar.iran.liara.run/public/32" 
                    alt="Admin" 
                    className="h-9 w-9 rounded-xl border border-gray-200 object-cover shadow-sm transition-transform group-hover:scale-105"
                  />
                  {/* Status Online */}
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
                </div>
                
                <div className="hidden text-left leading-tight md:block">
                  <p className="text-sm font-bold text-gray-700 group-hover:text-green-600">SYABIL</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Owner</p>
                </div>
                
                <FaChevronDown className="hidden text-[10px] text-gray-300 transition-transform group-hover:translate-y-0.5 group-hover:text-gray-500 md:block" />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;