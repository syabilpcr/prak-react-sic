import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  AlertTriangle,
  ShieldOff,
  Ban,
  Plus,
  Zap,
  User,
  Package,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* Main Menu */
  const mainMenuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/" },
    { label: "Profile", icon: User, path: "/profile" },
  ];

  /* Management */
  const managementItems = [
    { label: "Orders", icon: ShoppingCart, path: "/orders" },
    { label: "Customers", icon: Users, path: "/customers" },
    { label: "Products", icon: Package, path: "/products" },
  ];

  /* Error Pages */
  const errorItems = [
    { label: "Error 400", icon: AlertTriangle, path: "/error/400" },
    { label: "Error 401", icon: ShieldOff, path: "/error/401" },
    { label: "Error 403", icon: Ban, path: "/error/403" },
  ];

  const NavItem = ({ item }) => {
    // Active jika path sama, atau jika di halaman detail produk
    const isActive =
      location.pathname === item.path ||
      (item.path === "/products" && location.pathname.startsWith("/products"));
    const Icon = item.icon;

    return (
      <button
        onClick={() => navigate(item.path)}
        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group relative ${
          isActive
            ? "bg-green-500 text-white shadow-lg shadow-green-200"
            : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
        }`}
      >
        {isActive && (
          <span className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white opacity-70" />
        )}

        <span
          className={`p-1.5 rounded-lg transition-all ${
            isActive
              ? "bg-white/20"
              : "bg-gray-100 group-hover:bg-gray-200"
          }`}
        >
          <Icon size={14} />
        </span>

        {item.label}
      </button>
    );
  };

  const SectionLabel = ({ label }) => (
    <p className="text-[10px] font-bold text-gray-300 tracking-widest uppercase px-3 mb-2 mt-1">
      {label}
    </p>
  );

  return (
    <div
      className="w-64 min-h-screen bg-white flex flex-col p-4 fixed left-0 top-0 bottom-0 z-20"
      style={{ boxShadow: "1px 0 0 #f1f5f9" }}
    >
      {/* Logo */}
      <div className="mb-8 px-2 pt-3">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center shadow-md shadow-green-200">
            <Zap size={14} className="text-white" fill="white" />
          </div>

          <h1 className="text-xl font-black text-gray-900 tracking-tight">
            Sedap<span className="text-green-500">.</span>
          </h1>
        </div>

        <p className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase ml-9">
          Admin Panel
        </p>
      </div>

      {/* Main Menu */}
      <div className="mb-5">
        <SectionLabel label="Main Menu" />
        <div className="space-y-0.5">
          {mainMenuItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </div>
      </div>

      {/* Management */}
      <div className="mb-5">
        <SectionLabel label="Management" />
        <div className="space-y-0.5">
          {managementItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </div>
      </div>

      {/* Error Pages */}
      <div className="mb-5">
        <SectionLabel label="Error Pages" />
        <div className="space-y-0.5">
          {errorItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-2" />

      {/* Bottom Card */}
      <div className="mt-auto">
        <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 text-white overflow-hidden">
          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/10" />
          <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-white/10" />

          <p className="text-xs font-bold mb-1 relative z-10">
            Organize menus easily!
          </p>

          <p className="text-[10px] text-green-100 mb-3 relative z-10">
            Kelola semua menu dengan mudah.
          </p>

          <button className="relative z-10 w-full flex items-center justify-center gap-1.5 bg-white text-green-600 font-bold text-xs py-2 rounded-xl hover:bg-green-50 transition-colors shadow-sm">
            <Plus size={13} />
            Add Menus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
