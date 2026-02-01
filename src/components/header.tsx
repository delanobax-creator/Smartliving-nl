"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const updateCartCount = () => {
      const saved = localStorage.getItem("cart");
      if (saved) {
        const cart = JSON.parse(saved);
        const count = cart.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);
        setCartCount(count);
      } else {
        setCartCount(0);
      }
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "nl" ? "en" : "nl");
  };

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/shop", label: t.nav.shop },
    { href: "/blog", label: t.nav.blog },
    { href: "/about", label: t.nav.about },
    { href: "/faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 text-center text-sm font-medium">
        {t.banner}
      </div>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <img 
                src="https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/cfe481f9-cba1-43fd-b087-4ffa1cf6cc8e/generated-image-2026-02-01.png" 
                alt="SmartLiving.nl" 
                className="h-12 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={toggleLanguage} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 rounded border border-gray-300 hover:border-blue-600">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>

              <Link href="/cart" className="relative text-gray-700 hover:text-blue-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Link>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
