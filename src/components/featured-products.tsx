"use client";

import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function FeaturedProducts() {
  const { t } = useLanguage();

  const products = [
    { id: "smart-led-starter-kit", name: "Smart LED Lampen Starter Set", price: "€49,99", originalPrice: "€69,99", rating: 4.7, reviews: 189, image: "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/96897409-703f-48b4-a0a6-2ad2f3563f95/image.png?w=1024&h=1024", badge: "Bestseller", inStock: true },
    { id: "smart-display-hub", name: "Smart Display met Spraakassistent", price: "€79,99", rating: 4.5, reviews: 156, image: "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/4b011a3a-ff08-44e9-9fe8-f6258d07220d/image.png?w=1024&h=1024", badge: "Nieuw", inStock: true },
    { id: "wifi-video-doorbell", name: "WiFi Video Deurbel met Camera", price: "€89,99", rating: 4.6, reviews: 234, image: "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/8f87a3fb-d66e-4cb8-833b-30bdb6de121b/image.png?w=1024&h=1024", inStock: true },
    { id: "smart-thermostat-wifi", name: "Slimme WiFi Thermostaat", price: "€129,99", rating: 4.8, reviews: 278, image: "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/f192b55e-87ab-4d14-91c3-9b7fb215fcfb/image.png?w=1024&h=1024", badge: "Top Rated", inStock: true },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.products.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                {product.badge && <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{product.badge}</span>}
                {product.inStock && <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">{t.products.inStock}</span>}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium text-gray-900">{product.rating}</span>
                  <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  {product.originalPrice && <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>}
                </div>
                <div className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>{t.products.viewProduct}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">{t.products.viewAll}</Link>
        </div>
      </div>
    </section>
  );
}
