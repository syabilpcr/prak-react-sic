import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import Footer from "../components/Footer";

export default function Component() {
  const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

  const products = [
    { id: 1, name: "Laptop Asus", category: "Elektronik", price: "Rp 8.000.000" },
    { id: 2, name: "Sepatu Sport", category: "Fashion", price: "Rp 450.000" },
    { id: 3, name: "Jam Tangan", category: "Aksesoris", price: "Rp 799.000" },
  ];

  return (
    <Container>
      <div className="space-y-10 pb-20">
        {/* Header Section */}
        <div className="border-b border-gray-100 pb-6">
          <PageHeader title=" Components" />
          <p className="text-gray-500 mt-2">Ini halaman Component</p>
        </div>

        {/* Buttons & Badges Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Button Styles</h3>
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button type="secondary">Secondary</Button>
              <Button type="success">Success</Button>
              <Button type="danger">Danger</Button>
              <Button type="warning">Warning</Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Status Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Primary</Badge>
              <Badge type="secondary">Secondary</Badge>
              <Badge type="success">Success</Badge>
              <Badge type="danger">Danger</Badge>
              <Badge type="warning">Warning</Badge>
            </div>
          </div>
        </section>

        {/* Avatars Section */}
        <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">User Avatars</h3>
          <div className="flex items-center gap-4">
            <Avatar name="SYABIL">SY</Avatar>
            <Avatar name="SYASYA">SS</Avatar>
            <div className="text-sm text-gray-500 italic">Identitas visual pengguna</div>
          </div>
        </section>

        {/* Product Cards Section */}
        <section>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6 px-2">Featured Products</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProductCard
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              title="Sepatu Sport"
              category="Fashion"
              price="Rp 450.000"
              description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              title="Smartphone"
              category="Elektronik"
              price="Rp 4.500.000"
              description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
            />
          </div>
        </section>

        {/* Table Section */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Product Inventory</h3>
          </div>
          <Table headers={headers}>
            {products.map((product, index) => (
              <tr key={product.id} className="hover:bg-blue-50/30 transition-colors">
                <td className="px-6 py-4 text-gray-500 font-medium">{index + 1}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">{product.name}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-emerald-600">{product.price}</td>
                <td className="px-6 py-4">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-lg shadow-sm transition-all active:scale-95">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </Table>
        </section>
      </div>
      <Footer />
    </Container>
  );
}