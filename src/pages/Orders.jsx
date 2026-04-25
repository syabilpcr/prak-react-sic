import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/ordersData";
import { Plus, X, Search } from "lucide-react";

const statusConfig = {
  Completed: {
    className: "bg-green-50 text-green-700 border border-green-100",
    dot: "bg-green-400",
  },
  Pending: {
    className: "bg-yellow-50 text-yellow-700 border border-yellow-100",
    dot: "bg-yellow-400",
  },
  Cancelled: {
    className: "bg-red-50 text-red-600 border border-red-100",
    dot: "bg-red-400",
  },
};

const Orders = () => {
  const [orders, setOrders] = useState(ordersData);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.customerName || !form.totalPrice || !form.orderDate) return;
    const newOrder = {
      id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
      customerName: form.customerName,
      status: form.status,
      totalPrice: Number(form.totalPrice),
      orderDate: form.orderDate,
    };
    setOrders([newOrder, ...orders]);
    setForm({ customerName: "", status: "Pending", totalPrice: "", orderDate: "" });
    setShowModal(false);
  };

  const filtered = orders.filter(
    (o) =>
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <PageHeader title="Orders" breadcrumb={["Management", "Orders"]}>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-xl transition-all text-xs shadow-md shadow-green-200 hover:shadow-green-300 hover:-translate-y-0.5 duration-200"
        >
          <Plus size={14} />
          Add Orders
        </button>
      </PageHeader>

      {/* Table Card */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
      >
        {/* Table Header */}
        <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-gray-700">Daftar Orders</p>
            <p className="text-xs text-gray-400">{filtered.length} total pesanan</p>
          </div>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari order..."
              className="pl-8 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200 w-44"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50/80">
                <th className="text-left px-6 py-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Order ID</th>
                <th className="text-left px-6 py-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                <th className="text-left px-6 py-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="text-left px-6 py-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total</th>
                <th className="text-left px-6 py-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tanggal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((order) => {
                const s = statusConfig[order.status] || statusConfig.Pending;
                return (
                  <tr key={order.id} className="hover:bg-gray-50/60 transition-colors group">
                    <td className="px-6 py-3.5 font-mono text-xs text-gray-500 font-semibold">{order.id}</td>
                    <td className="px-6 py-3.5 font-semibold text-gray-800 text-sm">{order.customerName}</td>
                    <td className="px-6 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold ${s.className}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-sm font-semibold text-gray-700">
                      Rp {order.totalPrice.toLocaleString("id-ID")}
                    </td>
                    <td className="px-6 py-3.5 text-xs text-gray-400">{order.orderDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-7 w-full max-w-md mx-4 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-gray-800">Tambah Order Baru</h3>
                <p className="text-xs text-gray-400 mt-0.5">Isi form di bawah dengan benar</p>
              </div>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <X size={16} className="text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              {[
                { label: "Customer Name", name: "customerName", type: "text", placeholder: "Nama customer..." },
                { label: "Total Price (Rp)", name: "totalPrice", type: "number", placeholder: "150000" },
                { label: "Order Date", name: "orderDate", type: "date", placeholder: "" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-100 bg-gray-50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-300 transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full border border-gray-100 bg-gray-50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-300 transition-all"
                >
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowModal(false)} className="flex-1 border border-gray-100 text-gray-500 font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm">
                Batal
              </button>
              <button onClick={handleSubmit} className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl transition-all text-sm shadow-md shadow-green-200">
                Simpan Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
