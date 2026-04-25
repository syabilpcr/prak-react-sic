import PageHeader from "../components/PageHeader";
import {
  Users,
  Package,
  Wallet,
  TrendingUp,
  MapPin,
  Plus,
  Minus,
  Navigation,
} from "lucide-react";

const statsData = [
  {
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    borderColor: "border-blue-100",
    glowColor: "shadow-blue-100",
    label: "TOTAL PENGGUNA",
    value: "10,383",
    change: "+12.5%",
    period: "dari bulan lalu",
  },
  {
    icon: Package,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    borderColor: "border-purple-100",
    glowColor: "shadow-purple-100",
    label: "TOTAL PRODUK",
    value: "289",
    change: "+12.5%",
    period: "dari bulan lalu",
  },
  {
    icon: Wallet,
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
    borderColor: "border-green-100",
    glowColor: "shadow-green-100",
    label: "PENDAPATAN",
    value: "Rp 81,952,000",
    change: "+12.5%",
    period: "dari bulan lalu",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    borderColor: "border-orange-100",
    glowColor: "shadow-orange-100",
    label: "KONVERSI",
    value: "61%",
    change: "+12.5%",
    period: "dari bulan lalu",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        breadcrumb={["Home", "Detail", "Current Page"]}
      >
        <button className="border border-green-200 text-green-600 font-semibold px-4 py-2 rounded-xl hover:bg-green-50 transition-colors text-xs tracking-wide">
          REALTIME VIEW
        </button>
      </PageHeader>

      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statsData.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className={`bg-white rounded-2xl border ${stat.borderColor} p-5 hover:shadow-lg ${stat.glowColor} transition-all duration-300 hover:-translate-y-0.5 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`${stat.iconBg} p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon size={18} className={stat.iconColor} />
                </div>

                <span className="text-[9px] font-bold text-gray-300 tracking-widest uppercase bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                  THIS MONTH
                </span>
              </div>

              <p className="text-2xl font-black text-gray-800 leading-tight mb-1 tracking-tight">
                {stat.value}
              </p>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3">
                {stat.label}
              </p>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md">
                  {stat.change}
                </span>
                <span className="text-[10px] text-gray-400">
                  {stat.period}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Location Map */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-500" />
              Live Location Tracking
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Monitoring lokasi realtime dengan zoom & navigasi
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50">
              <Plus size={18} />
            </button>
            <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50">
              <Minus size={18} />
            </button>
            <button className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center hover:scale-105 transition-all">
              <Navigation size={18} />
            </button>
          </div>
        </div>

        <div className="relative h-[450px]">
          <iframe
            title="Live Map"
            src="https://www.google.com/maps?q=0.5666,101.4250&z=16&output=embed"
            className="w-full h-full"
            loading="lazy"
          />

          {/* Floating Status Card */}
          <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-4 w-[280px]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Lokasi Aktif
                </p>
                <p className="text-xs text-gray-400">
                  Monitoring lokasi area kampus realtime
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Area</span>
                <span className="font-medium">Politeknik Caltex Riau, Rumbai, Pekanbaru</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status</span>
                <span className="text-green-600 font-medium">Online</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Sync</span>
                <span className="font-medium">2 detik lalu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
