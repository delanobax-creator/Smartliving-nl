"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SL</span>
              </div>
              <span className="text-xl font-bold text-white">SmartLiving.nl</span>
            </div>
            <p className="text-sm mb-4">{t.footer.description}</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/smartliving.nl" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://instagram.com/smartliving.nl" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://twitter.com/smartliving_nl" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.customerService}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">{t.footer.contact}</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">{t.footer.faq}</Link></li>
              <li><Link href="/verzending" className="hover:text-blue-400 transition-colors">{t.footer.shipping}</Link></li>
              <li><Link href="/retour" className="hover:text-blue-400 transition-colors">{t.footer.returns}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.aboutUs}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">{t.footer.about}</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">{t.footer.blog}</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">{t.footer.privacy}</Link></li>
              <li><Link href="/algemene-voorwaarden" className="hover:text-blue-400 transition-colors">{t.footer.terms}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.contactInfo}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@smartliving.nl</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+31 6 87 15 20 90</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Amsterdam, Nederland</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2026 SmartLiving.nl - Alle rechten voorbehouden</p>
        </div>
      </div>
    </footer>
  );
}
