import { FaChevronRight, FaHome } from "react-icons/fa";

export default function PageHeader({ title = "Dashboard" }) {
  return (
    <div className="relative mb-8 overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
      
      {/* Aksentuasi Dekoratif di pojok (Opsional, untuk mempermanis border) */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-green-50/50" />

      <div className="relative flex items-center justify-between">
        {/* Left Side */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">
            {title}
          </h1>

          {/* Breadcrumb - Clean Style */}
          <nav className="mt-3 flex items-center gap-2 text-xs font-semibold tracking-wide">
            <div className="flex items-center text-green-500 hover:text-green-600 cursor-pointer transition-colors">
              <FaHome className="mr-1" />
              <span>Home</span>
            </div>

            <FaChevronRight className="text-[10px] text-gray-300" />

            <span className="text-gray-400 hover:text-green-500 cursor-pointer transition-colors">
              Detail
            </span>

            <FaChevronRight className="text-[10px] text-gray-300" />

            <span className="text-gray-300">
              Current Page
            </span>
          </nav>
        </div>

        {/* Right Side (Bisa ditambahkan Action Button jika perlu nanti) */}
        <div className="hidden sm:block">
          <div className="rounded-2xl bg-green-50 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-green-600">
            Realtime View
          </div>
        </div>
      </div>
    </div>
  );
}