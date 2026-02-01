"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { articleTranslations } from "@/lib/article-translations";

export default function SlimmeVerlichtingTips() {
  const { language } = useLanguage();
  const t = articleTranslations[language];
  const article = t.articles["slimme-verlichting-tips"];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop" alt="Slimme Verlichting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{article.category}</span>
              <span className="text-white/80 text-sm">6 min {t.readTime}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white">{article.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" />
          {t.backToBlog}
        </Link>

        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        <div className="mt-8 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t.helpTitle}</h3>
          <p className="text-gray-600 mb-4">{t.helpDesc}</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            {t.helpButton}
          </Link>
        </div>
      </div>
    </main>
  );
}
