import { FaPlus, FaHome, FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Button from "./Button";

export default function PageHeader({ onAdd }) {
  const location = useLocation();

  // Konfigurasi terpusat di dalam komponen
  const pageConfig = {
    "/": { 
      title: "Dashboard", 
      breadcrumb: "Overview", 
      buttonLabel: null 
    },
    "/orders": {
      title: "Orders",
      breadcrumb: "Order List",
      buttonLabel: "Add Order",
    },
    "/customers": {
      title: "Customers",
      breadcrumb: "Customer List",
      buttonLabel: "Add Customer",
    },
    "/products": {
      title: "Products",
      breadcrumb: "Product List",
      buttonLabel: "Add Product",
    },
    "/components": {
      title: "Components",
      breadcrumb: "UI Library",
      buttonLabel: "Add Component",
    },
  };

  // Mengambil config berdasarkan path saat ini, fallback ke Dashboard
  const config = pageConfig[location.pathname] || pageConfig["/"];

  return (
    <div
      id="pageheader-container"
      className="relative bg-white rounded-2xl mb-6 overflow-hidden border border-gray-100 shadow-sm"
    >
      {/* Garis Gradasi Atas */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-400 via-emerald-400 to-teal-300" />

      <div className="px-7 py-5 flex flex-col md:flex-row md:items-center justify-between">
        <div id="pageheader-left">
          <h1
            id="page-title"
            className="text-xl font-bold text-gray-800 tracking-tight leading-tight"
          >
            {config.title}
          </h1>
          
          <nav
            id="breadcrumb-links"
            className="flex items-center gap-1.5 text-xs mt-1.5"
          >
            <div className="flex items-center text-green-500 font-semibold cursor-pointer hover:underline">
              <FaHome className="mr-1.5 text-[11px]" />
              <span>Home</span>
            </div>
            
            <FaChevronRight className="mx-1 text-[10px] text-gray-300" />
            
            <span
              id="breadcrumb-current"
              className="text-gray-500 font-semibold uppercase tracking-wider text-[10px]"
            >
              {config.breadcrumb}
            </span>
          </nav>
        </div>

        {/* Tombol Aksi - Hanya muncul jika buttonLabel ada */}
        {config.buttonLabel && (
          <div id="action-button" className="mt-4 md:mt-0">
            <Button
              id="add-button"
              onClick={onAdd}
              type="success"
              className="flex items-center gap-2"
            >
              <FaPlus className="text-xs" />
              <span className="font-semibold">{config.buttonLabel}</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}