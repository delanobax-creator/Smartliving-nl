"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Star, Filter, X, ChevronDown } from "lucide-react";
import { products, categories, brands } from "@/lib/products";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("Alle Merken");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedBrand !== "Alle Merken") {
      filtered = filtered.filter((p) => p.brand === selectedBrand);
    }

    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered = [...filtered].sort((a, b) => b.reviews - a.reviews);
    }

    return filtered;
  }, [selectedCategory, selectedBrand, sortBy]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Shop</h1>
          <p className="text-blue-200">Ontdek onze complete collectie smart home producten</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm mb-4"
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64 flex-shrink-0`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg">Filters</h2>
                <button onClick={() => setShowFilters(false)} className="md:hidden">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Categorie</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat.id
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Merk</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedBrand === brand
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedBrand("Alle Merken");
                }}
                className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Filters wissen
              </button>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{filteredProducts.length}</span> producten gevonden
              </p>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="popular">Meest populair</option>
                  <option value="rating">Beste beoordeeld</option>
                  <option value="price-low">Prijs laag - hoog</option>
                  <option value="price-high">Prijs hoog - laag</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    )}
                    <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
                      product.inStock ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}>
                      {product.inStock ? "Op voorraad" : "Uitverkocht"}
                    </span>
                  </div>

                  <div className="p-4">
                    <p className="text-xs text-blue-600 font-medium mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-gray-900">{product.rating}</span>
                      <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xl font-bold text-gray-900">€{product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            €{product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Geen producten gevonden met deze filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedBrand("Alle Merken");
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Filters wissen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
