import { useState } from "react";
import { FaHome, FaShoppingCart, FaUsers, FaPlus, FaUtensils, FaChartBar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // <--- L NYA HARUS KAPITAL

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/" },
    { name: "Orders", icon: <FaShoppingCart />, path: "/orders" },
    { name: "Customers", icon: <FaUsers />, path: "/customers" },
  ];
  const location = useLocation();
  return (
    <div className="flex min-h-screen w-72 flex-col bg-white p-6 shadow-2xl border-r border-gray-100">

      {/* Logo Section */}
      <div className="mb-10 px-4">
        <h1 className="font-poppins text-4xl font-bold tracking-tight text-gray-900">
          Sedap<span className="text-green-500">.</span>
        </h1>
        <p className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-400">
          Modern Admin Panel
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            // Kita cek URL aktif menggunakan useLocation
            const isActive = location.pathname === item.path;

            return (
              <li key={item.name}>
                {/* GUNAKAN Link DENGAN L KAPITAL */}
                <Link
                  to={item.path}
                  className={`flex w-full items-center rounded-2xl px-5 py-4 transition-all duration-300 ${isActive
                      ? "bg-green-500 text-white shadow-lg shadow-green-200"
                      : "text-gray-500 hover:bg-green-50 hover:text-green-600"
                    }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="ml-4 font-semibold">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer / Promo Card */}
      <div className="mt-auto pt-10">
        <div className="relative mb-8 overflow-hidden rounded-3xl bg-green-600 p-6 shadow-xl">
          {/* Decorative Circle */}
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-500 opacity-50"></div>

          <div className="relative z-10">
            <p className="text-sm font-medium text-green-50">
              Please organize your menus through button below!
            </p>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-bold text-green-600 transition-transform hover:scale-[1.02] active:scale-95">
              <FaPlus />
              Add Menus
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-2">
          <p className="text-sm font-bold text-gray-800">Sedap Restaurant</p>
          <p className="text-xs text-gray-400 mt-1">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}