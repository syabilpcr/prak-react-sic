import { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../data/productsData";
import PageHeader from "../components/PageHeader";

const Products = () => {
  const [search, setSearch] = useState("");

  const filtered = productsData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <PageHeader title="Products" subtitle="Dashboard / Product List" />

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-green-300"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <table className="w-full text-sm text-left">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Code</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Brand</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Stock</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-gray-400">{index + 1}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-emerald-500 hover:text-emerald-600 font-medium hover:underline"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="px-6 py-4 text-gray-500">{item.code}</td>
                <td className="px-6 py-4">
                  <span className="bg-green-50 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{item.brand}</td>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  Rp {item.price.toLocaleString("id-ID")}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      item.stock < 15
                        ? "bg-red-50 text-red-500"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.stock}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-10 text-gray-400 text-sm">
            Produk tidak ditemukan.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;