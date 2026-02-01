"use client";

import { RotateCcw, Package, CheckCircle, AlertCircle, Mail } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { legalTranslations } from "@/lib/legal-translations";

export default function RetourPage() {
  const { language } = useLanguage();
  const t = legalTranslations[language].returns;

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
              <RotateCcw className="w-7 h-7 text-blue-600 mr-3" />
              {t.policyTitle}
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p dangerouslySetInnerHTML={{ __html: t.policyText }} />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {t.returnableTitle}
                </h3>
                <ul className="text-sm text-green-700 space-y-1">
                  {t.returnableItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {t.notReturnableTitle}
                </h3>
                <ul className="text-sm text-red-700 space-y-1">
                  {t.notReturnableItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Package className="w-7 h-7 text-blue-600 mr-3" />
              {t.howToTitle}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t.step1Title}</h3>
                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t.step1Text }} />
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t.step2Title}</h3>
                  <p className="text-gray-600">{t.step2Text}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t.step3Title}</h3>
                  <p className="text-gray-600">{t.step3Text}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t.step4Title}</h3>
                  <p className="text-gray-600">{t.step4Text}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.costsTitle}</h2>
            <p className="text-gray-600 mb-4">{t.costsText}</p>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Tip:</strong> {t.costsTip}
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.registerTitle}</h3>
            <p className="text-gray-600 mb-4">{t.registerText}</p>
            <a href="mailto:info@smartliving.nl" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              info@smartliving.nl
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
