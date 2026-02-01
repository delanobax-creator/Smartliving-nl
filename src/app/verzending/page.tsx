"use client";

import { Truck, Clock, MapPin, Package, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { legalTranslations } from "@/lib/legal-translations";

export default function VerzendingPage() {
  const { language } = useLanguage();
  const t = legalTranslations[language].shipping;

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-blue-200">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Truck className="w-7 h-7 text-blue-600 mr-3" />
              {t.shippingOptions}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">{t.freeShipping}</h3>
                  <p className="text-gray-600">{t.freeShippingDesc}</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <Package className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">{t.standardShipping}</h3>
                  <p className="text-gray-600">{t.standardShippingDesc}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="w-7 h-7 text-blue-600 mr-3" />
              {t.deliveryTimes}
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">{t.country}</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">{t.deliveryTime}</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">{t.shippingCosts}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-gray-600">{t.netherlands}</td>
                    <td className="py-3 px-4 text-gray-600">{t.businessDays13}</td>
                    <td className="py-3 px-4 text-gray-600">{t.freeFrom50}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-gray-600">{t.belgium}</td>
                    <td className="py-3 px-4 text-gray-600">{t.businessDays24}</td>
                    <td className="py-3 px-4 text-gray-600">{t.freeFrom50}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Let op:</strong> {t.orderNote}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="w-7 h-7 text-blue-600 mr-3" />
              {t.trackTrace}
            </h2>
            
            <p className="text-gray-600 mb-4">{t.trackTraceText}</p>

            <ul className="space-y-2 text-gray-600">
              {t.trackTraceItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.questionsTitle}</h3>
            <p className="text-gray-600 mb-4">{t.questionsText}</p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t.contactButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
