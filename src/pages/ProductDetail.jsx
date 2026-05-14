import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, Tag, Layers, Star, Package } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(response.message);
          return;
        }
        setProduct(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  if (error)
    return (
      <div className="p-6">
        <div className="bg-red-50 text-red-500 rounded-xl p-4 text-sm">
          ⚠️ Error: {error}
        </div>
      </div>
    );

  if (!product)
    return (
      <div className="p-6 flex items-center justify-center min-h-[300px]">
        <div className="text-center text-gray-400">
          <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm">Memuat data produk...</p>
        </div>
      </div>
    );

  return (
    <div className="p-6">
      {/* Back Button */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Kembali ke Products
      </Link>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Product Image */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            {/* Title & Rating */}
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                {product.title}
              </h2>
              <span className="flex items-center gap-1 bg-yellow-50 text-yellow-500 text-xs font-bold px-2 py-1 rounded-full ml-3 shrink-0">
                <Star size={11} fill="currentColor" />
                {product.rating}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-5 leading-relaxed">
              {product.description}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                <span className="bg-green-100 p-2 rounded-lg">
                  <Layers size={14} className="text-green-600" />
                </span>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                    Kategori
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {product.category}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                <span className="bg-blue-100 p-2 rounded-lg">
                  <Tag size={14} className="text-blue-600" />
                </span>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                    Brand
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {product.brand}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                <span className="bg-purple-100 p-2 rounded-lg">
                  <Package size={14} className="text-purple-600" />
                </span>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                    Stok
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {product.stock} unit
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-3 flex items-center gap-3">
                <span className="bg-green-100 p-2 rounded-lg">
                  <span className="text-green-600 text-xs font-black">Rp</span>
                </span>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                    Harga
                  </p>
                  <p className="text-sm font-bold text-green-600">
                    Rp {(product.price * 1000).toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>

            {/* Discount Badge */}
            {product.discountPercentage && (
              <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-center">
                <p className="text-red-500 text-sm font-semibold">
                  🔥 Diskon {product.discountPercentage}% — Hemat Rp{" "}
                  {Math.round(
                    ((product.price * product.discountPercentage) / 100) * 1000,
                  ).toLocaleString("id-ID")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
