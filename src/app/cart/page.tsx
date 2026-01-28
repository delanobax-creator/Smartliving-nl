"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

interface CartItem {
  id: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cartItems]);

  const cartProducts = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? { ...product, quantity: item.quantity } : null;
  }).filter(Boolean) as (typeof products[0] & { quantity: number })[];

  const subtotal = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 50 ? 0 : 4.95;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Je winkelwagen is leeg</h1>
          <p className="text-gray-600 mb-6">Ontdek onze producten en voeg ze toe aan je winkelwagen.</p>
          <Link href="/shop" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Ga naar Shop
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Winkelwagen</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartProducts.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm p-4 flex gap-4">
                <Link href={`/shop/${item.id}`} className="flex-shrink-0">
                  <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link href={`/shop/${item.id}`}>
                    <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">{item.name}</h3>
                  </Link>
                  <p className="text-sm text-gray-500 mb-2">{item.brand}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-gray-100 transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-gray-100 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-gray-900">€{(item.price * item.quantity).toFixed(2)}</p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-gray-500">€{item.price.toFixed(2)} per stuk</p>
                      )}
                    </div>
                  </div>
                </div>

                <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Overzicht</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotaal</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Verzending</span>
                  <span>{shipping === 0 ? "Gratis" : `€${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-blue-600">
                    Nog €{(50 - subtotal).toFixed(2)} voor gratis verzending!
                  </p>
                )}
                <div className="border-t pt-3 flex justify-between font-bold text-gray-900 text-lg">
                  <span>Totaal</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/checkout" className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center mb-3">
                Afrekenen
              </Link>

              <Link href="/shop" className="block text-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                Verder winkelen
              </Link>

              <div className="mt-6 pt-6 border-t space-y-2 text-xs text-gray-500">
                <p className="flex items-center">✓ Veilig betalen met iDEAL, PayPal, Creditcard</p>
                <p className="flex items-center">✓ 30 dagen retourrecht</p>
                <p className="flex items-center">✓ Gratis verzending vanaf €50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
