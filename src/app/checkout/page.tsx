"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, CreditCard, Truck, Shield } from "lucide-react";
import { products } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";
import { cartTranslations } from "@/lib/cart-translations";
import { productTranslations } from "@/lib/product-translations";

interface CartItem {
  id: string;
  quantity: number;
}

export default function CheckoutPage() {
  const { language } = useLanguage();
  const t = cartTranslations[language];
  const c = t.checkoutPage;
  const pt = productTranslations[language];

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, []);

  const getProductName = (productId: string, fallbackName: string) => {
    const translation = pt[productId as keyof typeof pt];
    if (translation && typeof translation === "object" && "name" in translation) {
      return translation.name;
    }
    return fallbackName;
  };

  const cartProducts = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? { ...product, quantity: item.quantity } : null;
  }).filter(Boolean) as (typeof products[0] & { quantity: number })[];

  const subtotal = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 50 ? 0 : 4.95;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
    
    setOrderComplete(true);
    setIsSubmitting(false);
  };

  if (orderComplete) {
    return (
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{c.thankYou}</h1>
            <p className="text-gray-600 mb-6">{c.confirmationEmail}</p>
            <Link href="/shop" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t.continueShopping}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{c.emptyCart}</h1>
          <Link href="/shop" className="text-blue-600 hover:text-blue-700 font-medium">
            {c.goToShop}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/cart" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          {c.backToCart}
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{c.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{c.contactDetails}</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{c.email}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{c.phone}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{c.deliveryAddress}</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{c.firstName}</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{c.lastName}</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{c.address}</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder={c.addressPlaceholder}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{c.postalCode}</label>
                      <input
                        type="text"
                        required
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{c.city}</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{c.paymentMethod}</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-blue-600 rounded-lg bg-blue-50 cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="mr-3" />
                    <span className="font-medium">iDEAL</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400">
                    <input type="radio" name="payment" className="mr-3" />
                    <span className="font-medium">PayPal</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400">
                    <input type="radio" name="payment" className="mr-3" />
                    <span className="font-medium">Creditcard</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? c.processing : `${c.pay} €${total.toFixed(2)}`}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{c.orderSummary}</h2>
              
              <div className="space-y-4 mb-6">
                {cartProducts.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.images[0]} alt={getProductName(item.id, item.name)} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">{getProductName(item.id, item.name)}</h3>
                      <p className="text-sm text-gray-500">{c.quantity}: {item.quantity}</p>
                    </div>
                    <span className="font-medium">€{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>{t.subtotal}</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>{t.shipping}</span>
                  <span>{shipping === 0 ? t.free : `€${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>{t.total}</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  {c.secureSSL}
                </div>
                <div className="flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-blue-600" />
                  {c.freeShipping}
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                  {c.allPaymentMethods}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
