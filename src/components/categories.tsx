"use client";

import Link from "next/link";
import { Lightbulb, Speaker, Camera, Thermometer, Lock, Wifi } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Categories() {
  const { t } = useLanguage();

  const categories = [
    { icon: Lightbulb, name: t.categories.lighting, description: t.categories.lightingDesc, href: "/shop?category=verlichting", color: "from-yellow-400 to-orange-500" },
    { icon: Speaker, name: t.categories.speakers, description: t.categories.speakersDesc, href: "/shop?category=speakers", color: "from-purple-400 to-pink-500" },
    { icon: Camera, name: t.categories.cameras, description: t.categories.camerasDesc, href: "/shop?category=cameras", color: "from-blue-400 to-cyan-500" },
    { icon: Thermometer, name: t.categories.thermostats, description: t.categories.thermostatsDesc, href: "/shop?category=thermostaten", color: "from-red-400 to-orange-500" },
    { icon: Lock, name: t.categories.locks, description: t.categories.locksDesc, href: "/shop?category=locks", color: "from-gray-600 to-gray-800" },
    { icon: Wifi, name: t.categories.network, description: t.categories.networkDesc, href: "/shop?category=netwerk", color: "from-green-400 to-teal-500" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.categories.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.categories.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={index} href={category.href} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-hover">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
