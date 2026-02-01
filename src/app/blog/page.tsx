"use client";

import { Lightbulb, Zap, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { blogTranslations } from "@/lib/blog-translations";

const blogImages = {
  "smart-home-beginners": "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
  "energie-besparen": "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&h=400&fit=crop",
  "slimme-verlichting-tips": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  "beveiliging-camera": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop",
};

const tipIcons = [Lightbulb, Zap, Shield, TrendingUp];

export default function BlogPage() {
  const { language } = useLanguage();
  const t = blogTranslations[language];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-blue-200">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t.quickTips}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.tips.map((tip, index) => {
              const Icon = tipIcons[index];
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.latestArticles}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video overflow-hidden">
                    <img src={blogImages[post.slug as keyof typeof blogImages]} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime} {t.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    {t.readMore}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.helpTitle}</h2>
          <p className="text-xl text-blue-200 mb-8">{t.helpSubtitle}</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            {t.helpButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
