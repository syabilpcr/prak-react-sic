import { useState } from "react";
// Import MdSpaceDashboard sesuai gambar
import { MdSpaceDashboard } from "react-icons/md"; 
import { FaShoppingCart, FaUsers, FaPlus, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  // Sesuaikan dengan variabel di gambar: menuClass
  const menuClass = ({ isActive }) =>
    `flex items-center rounded-2xl px-5 py-4 transition-all duration-300 ${
      isActive
        ? "bg-green-500 text-white shadow-lg shadow-green-200 font-bold"
        : "text-gray-500 hover:bg-green-50 hover:text-green-600 font-medium"
    }`;

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
      <nav className="flex-1 space-y-8">

        {/* BAGIAN 1: MAIN MENU */}
        <div>
          <p className="px-5 mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Main Menu</p>
          <ul className="space-y-2">
            <li>
              <NavLink id="menu-1" to="/" className={menuClass}>
                <MdSpaceDashboard className="mr-4 text-xl" />
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        {/* BAGIAN 2: MANAGEMENT */}
        <div>
          <p className="px-5 mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Management</p>
          <ul className="space-y-2">
            <li>
              <NavLink to="/orders" className={menuClass}>
                <FaShoppingCart className="mr-4 text-xl" />
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/customers" className={menuClass}>
                <FaUsers className="mr-4 text-xl" />
                Customers
              </NavLink>
            </li>
          </ul>
        </div>

        {/* BAGIAN 3: OTHERS */}
        {/* <div>
          <p className="px-5 mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Others</p>
          <ul className="space-y-2">
            <li>
              <NavLink to="/settings" className={menuClass}>
                <FaCog className="mr-4 text-xl" />
                Settings
              </NavLink>
            </li>
            <li>
              <button className="flex w-full items-center rounded-2xl px-5 py-4 text-red-400 hover:bg-red-50 transition-all duration-300 font-medium">
                <FaSignOutAlt className="mr-4 text-xl" />
                Logout
              </button>
            </li>
          </ul>
        </div> */}

      </nav>

      {/* Footer / Promo Card */}
      <div className="mt-auto pt-10">
        <div className="relative mb-8 overflow-hidden rounded-3xl bg-green-600 p-6 shadow-xl">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-500 opacity-50"></div>
          <div className="relative z-10 text-white">
            <p className="text-sm font-medium">Organize your menus easily!</p>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-bold text-green-600 transition-transform hover:scale-[1.02] active:scale-95">
              <FaPlus /> Add Menus
            </button>
          </div>
        </div>
        <div className="px-2">
          <p className="text-sm font-bold text-gray-800">Sedap Restaurant</p>
          <p className="text-xs text-gray-400 mt-1">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}