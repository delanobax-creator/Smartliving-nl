"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, ShoppingCart, Truck, RotateCcw, Shield, Check, Minus, Plus, ChevronLeft } from "lucide-react";
import { products } from "@/lib/products";

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product niet gevonden</h1>
          <Link href="/shop" className="text-blue-600 hover:text-blue-700 font-medium">
            Terug naar shop
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/shop" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Terug naar shop
        </Link>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-blue-600" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-blue-600 font-medium mb-2">{product.brand}</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">{product.rating}</span>
                <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-gray-900">€{product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="ml-3 text-xl text-gray-500 line-through">€{product.originalPrice.toFixed(2)}</span>
                    <span className="ml-3 bg-red-100 text-red-700 text-sm font-semibold px-2 py-1 rounded">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>

              <div className={`inline-flex items-center mb-6 ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                <div className={`w-3 h-3 rounded-full mr-2 ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
                <span className="font-medium">{product.inStock ? "Op voorraad" : "Uitverkocht"}</span>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Kenmerken:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {product.inStock && (
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-100 transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 font-medium">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-100 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all ${
                      addedToCart ? "bg-green-500 text-white" : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {addedToCart ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Toegevoegd!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        <span>In Winkelwagen</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="w-5 h-5 mr-3 text-blue-600" />
                  Gratis verzending vanaf €50
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <RotateCcw className="w-5 h-5 mr-3 text-blue-600" />
                  30 dagen retourrecht
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-5 h-5 mr-3 text-blue-600" />
                  2 jaar garantie
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde producten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link key={relProduct.id} href={`/shop/${relProduct.id}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img src={relProduct.images[0]} alt={relProduct.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-blue-600 font-medium mb-1">{relProduct.brand}</p>
                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-2">{relProduct.name}</h3>
                    <span className="font-bold text-gray-900">€{relProduct.price.toFixed(2)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
