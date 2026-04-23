import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden rounded-[3rem] bg-white/50 backdrop-blur-sm">
      
      {/* Background Decorative Elements - Membuat UI terasa lebih "deep" */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-100/50 blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-red-100/50 blur-3xl"></div>

      {/* Main Content Card */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Animated Icon Section */}
        <div className="group relative mb-12">
          {/* Ring Glow Animation */}
          <div className="absolute inset-0 animate-ping rounded-[3rem] bg-red-400 opacity-10"></div>
          <div className="absolute inset-0 animate-pulse rounded-[3rem] bg-red-200 opacity-20"></div>
          
          {/* Floating Icon Container */}
          <div className="relative flex h-44 w-44 animate-bounce items-center justify-center rounded-[3.5rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-transform duration-500 group-hover:scale-110" style={{ animationDuration: '3s' }}>
            <FaExclamationTriangle className="text-7xl text-red-500 drop-shadow-lg" />
            
            {/* Small Floating Dots */}
            <div className="absolute -right-2 top-0 h-4 w-4 animate-pulse rounded-full bg-green-400 shadow-lg shadow-green-200"></div>
            <div className="absolute -left-4 bottom-10 h-3 w-3 animate-pulse rounded-full bg-orange-400 delay-300"></div>
          </div>
        </div>

        {/* Error Text Section */}
        <div className="space-y-2 text-center">
          <h1 className="bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-9xl font-black tracking-tighter text-transparent opacity-90">
            404
          </h1>
          <div className="mx-auto h-1.5 w-20 rounded-full bg-green-500 mb-6"></div>
          
          <h2 className="text-3xl font-black text-gray-800">
            Oops! Jalurnya Terputus
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm font-medium leading-relaxed text-gray-400">
            Halaman yang kamu tuju sepertinya sudah pindah ke lain hati atau tidak pernah ada sejak awal.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-2xl bg-gray-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-200 active:scale-95"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Kembali
          </Link>
          
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-green-100 transition-all hover:bg-green-600 hover:shadow-green-200 active:scale-95"
          >
            <FaHome className="text-lg" />
            Ke Dashboard Utama
          </Link>
        </div>

        {/* System Message Overlay */}
        <div className="mt-16 flex items-center gap-2 rounded-full border border-gray-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
            Error Code: PAGE_NOT_FOUND_SEC_04
          </span>
        </div>
      </div>
    </div>
  );
}