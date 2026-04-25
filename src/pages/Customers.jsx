import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customersData";
import { Plus, X, Search } from "lucide-react";

const loyaltyConfig = {
  Gold: {
    className: "bg-yellow-50 text-yellow-700 border border-yellow-100",
    dot: "bg-yellow-400",
    emoji: "🥇",
  },
  Silver: {
    className: "bg-gray-50 text-gray-600 border border-gray-100",
    dot: "bg-gray-300",
    emoji: "🥈",
  },
  Bronze: {
    className: "bg-orange-50 text-orange-700 border border-orange-100",
    dot: "bg-orange-300",
    emoji: "🥉",
  },
};

const Customers = () => {
  const [customers, setCustomers] = useState(customersData);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ customerName: "", email: "", phone: "", loyalty: "Bronze" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.customerName || !form.email || !form.phone) return;
    const newCustomer = {
      id: `CUST-${String(customers.length + 1).padStart(3, "0")}`,
      ...form,
    };
    setCustomers([newCustomer, ...customers]);
    setForm({ customerName: "", email: "", phone: "", loyalty: "Bronze" });
    setShowModal(false);
  };

  const filtered = customers.filter(
    (c) =>
      c.customerName.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <PageHeader title="Customers" breadcrumb={["Management", "Customers"]}>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-xl transition-all text-xs shadow-md shadow-green-200 hover:shadow-green-300 hover:-translate-y-0.5 duration-200"
        >
          <Plus size={14} />
          Add Customer
        </button>
      </PageHeader>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
      >
        <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-gray-700">Daftar Customers</p>
            <p className="text-xs text-gray-400">{filtered.length} total pelanggan</p>
          </div>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari customer..."
              className="pl-8 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-200 w-44"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50/80">
                <th className="text-left px-6 py-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">ID</th>
                <th className="text-left px-6 py-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nama</th>
                <th className="text-left px-6 py-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</th>
                <th className="text-left px-6 py-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone</th>
                <th className="text-left px-6 py-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Loyalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((cust) => {
                const l = loyaltyConfig[cust.loyalty] || loyaltyConfig.Bronze;
                return (
                  <tr key={cust.id} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-6 py-3.5 font-mono text-xs text-gray-500 font-semibold">{cust.id}</td>
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                          {cust.customerName.charAt(0)}
                        </div>
                        <span className="font-semibold text-gray-800 text-sm">{cust.customerName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3.5 text-xs text-gray-500">{cust.email}</td>
                    <td className="px-6 py-3.5 text-xs text-gray-500">{cust.phone}</td>
                    <td className="px-6 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold ${l.className}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${l.dot}`} />
                        {cust.loyalty}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-7 w-full max-w-md mx-4 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-gray-800">Tambah Customer Baru</h3>
                <p className="text-xs text-gray-400 mt-0.5">Isi data pelanggan dengan lengkap</p>
              </div>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <X size={16} className="text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              {[
                { label: "Customer Name", name: "customerName", type: "text", placeholder: "Nama lengkap..." },
                { label: "Email", name: "email", type: "email", placeholder: "email@contoh.com" },
                { label: "Phone", name: "phone", type: "text", placeholder: "08xxxxxxxxxx" },
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
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Loyalty</label>
                <select
                  name="loyalty"
                  value={form.loyalty}
                  onChange={handleChange}
                  className="w-full border border-gray-100 bg-gray-50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-300 transition-all"
                >
                  <option>Bronze</option>
                  <option>Silver</option>
                  <option>Gold</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowModal(false)} className="flex-1 border border-gray-100 text-gray-500 font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm">
                Batal
              </button>
              <button onClick={handleSubmit} className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl transition-all text-sm shadow-md shadow-green-200">
                Simpan Customer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;
