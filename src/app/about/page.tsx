"use client";

import { Users, Heart, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t.about.affordable, description: t.about.affordableDesc },
    { icon: Zap, title: t.about.simple, description: t.about.simpleDesc },
    { icon: Shield, title: t.about.reliable, description: t.about.reliableDesc },
    { icon: Users, title: t.about.personal, description: t.about.personalDesc },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h1>
          <p className="text-xl text-blue-200">{t.about.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.about.storyTitle}</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>{t.about.storyP1}</p>
              <p>{t.about.storyP2}</p>
              <p>{t.about.storyP3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t.about.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.about.ctaTitle}</h2>
          <p className="text-xl text-blue-200 mb-8">{t.about.ctaSubtitle}</p>
          <a href="/shop" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            {t.about.ctaButton}
          </a>
        </div>
      </section>
    </main>
  );
}
