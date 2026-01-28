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
            <h3 className="text-white font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2"><Mail className="w-5 h-5 mt-0.5 flex-shrink-0" /><span>info@smartliving.nl</span></li>
              <li className="flex items-start space-x-2"><Phone className="w-5 h-5 mt-0.5 flex-shrink-0" /><a href="https://wa.me/31687152090" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">+31 6 87 15 20 90</a></li>
              <li className="flex items-start space-x-2"><MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" /><span>Amsterdam, Nederland</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2026 SmartLiving.nl. {t.footer.rights}.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
