import { useEffect, useState } from "react";
import { FaUsers, FaBox, FaWallet, FaChartLine } from "react-icons/fa";

const useCountUp = (target, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

const StatCard = ({ icon, label, value, colorClass, bgIcon, prefix = "", suffix = "" }) => {
  const animated = useCountUp(value);

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50">
      {/* Decorative Gradient Background (Muncul tipis saat hover) */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 ${bgIcon}`} />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          {/* Icon Container */}
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${bgIcon} ${colorClass} shadow-inner`}>
            <span className="text-xl">{icon}</span>
          </div>
          
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
            This Month
          </span>
        </div>

        <div className="space-y-1">
          <div className="text-2xl font-black tracking-tight text-gray-800">
            {prefix}
            {animated.toLocaleString()}
            {suffix}
          </div>
          <div className="text-xs font-bold uppercase tracking-wide text-gray-400">
            {label}
          </div>
        </div>

        {/* Mini Indicator */}
        <div className="mt-4 flex items-center gap-1">
          <span className="text-[10px] font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded-md">+12.5%</span>
          <span className="text-[10px] text-gray-300 font-medium">dari bulan lalu</span>
        </div>
      </div>
    </div>
  );
};

const StatsWidget = () => {
  const stats = [
    {
      icon: <FaUsers />,
      label: "Total Pengguna",
      value: 12480,
      colorClass: "text-blue-600",
      bgIcon: "bg-blue-50",
    },
    {
      icon: <FaBox />,
      label: "Total Produk",
      value: 348,
      colorClass: "text-purple-600",
      bgIcon: "bg-purple-50",
    },
    {
      icon: <FaWallet />,
      label: "Pendapatan",
      value: 98500000,
      colorClass: "text-green-600",
      bgIcon: "bg-green-50",
      prefix: "Rp ",
    },
    {
      icon: <FaChartLine />,
      label: "Konversi",
      value: 74,
      colorClass: "text-orange-600",
      bgIcon: "bg-orange-50",
      suffix: "%",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  );
};

export default StatsWidget;