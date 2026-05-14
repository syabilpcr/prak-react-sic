import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const pageMeta = {
  "/": { title: "Dashboard", subtitle: "Manage your restaurant activity here" },
  "/profile": { title: "Profile", subtitle: "Manage your profile" },
  "/orders": { title: "Orders", subtitle: "Manage all your orders here" },
  "/customers": { title: "Customers", subtitle: "Manage your customer base" },
  "/products": { title: "Products", subtitle: "Manage your product catalog" },
  "/error/400": { title: "Error 400", subtitle: "Bad Request" },
  "/error/401": { title: "Error 401", subtitle: "Unauthorized" },
  "/error/403": { title: "Error 403", subtitle: "Forbidden" },
  "/error/404": { title: "Error 404", subtitle: "Page Not Found" },
};

const MainLayout = () => {
  const location = useLocation();

  // Cek juga untuk dynamic route /products/:id
  const isProductDetail = location.pathname.startsWith("/products/");
  const meta = isProductDetail
    ? { title: "Product Detail", subtitle: "Detail informasi produk" }
    : pageMeta[location.pathname] || { title: "Page", subtitle: "" };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header title={meta.title} subtitle={meta.subtitle} />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
