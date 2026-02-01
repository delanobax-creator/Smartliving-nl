"use client";

import { Shield, Eye, Lock, Database, Mail, UserCheck } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { legalTranslations } from "@/lib/legal-translations";

export default function PrivacyPage() {
  const { language } = useLanguage();
  const t = legalTranslations[language].privacy;

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
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <p className="text-gray-600 mb-8"><strong>{t.lastUpdated}</strong> Januari 2026</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  {t.section1Title}
                </h2>
                <p className="text-gray-600">{t.section1Text}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="w-6 h-6 text-blue-600 mr-3" />
                  {t.section2Title}
                </h2>
                <p className="text-gray-600 mb-4">{t.section2Intro}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {t.section2Items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-blue-600 mr-3" />
                  {t.section3Title}
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {t.section3Items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-blue-600 mr-3" />
                  {t.section4Title}
                </h2>
                <p className="text-gray-600">{t.section4Text}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
                  {t.section5Title}
                </h2>
                <p className="text-gray-600 mb-4">{t.section5Intro}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {t.section5Items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  {t.section6Title}
                </h2>
                <p className="text-gray-600">
                  {t.section6Text} <strong>info@smartliving.nl</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
