"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { faqTranslations } from "@/lib/faq-translations";

export default function FAQPage() {
  const { language } = useLanguage();
  const t = faqTranslations[language];
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
  };

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
          {t.categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${catIndex}-${faqIndex}`;
                  const isOpen = openItems.includes(itemId);
                  return (
                    <div key={faqIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="bg-blue-50 rounded-xl p-8 text-center mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.notFound}</h3>
            <p className="text-gray-600 mb-4">{t.notFoundDesc}</p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t.contactButton}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
