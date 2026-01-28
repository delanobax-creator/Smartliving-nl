"use client";

import { Shield, Award, CreditCard } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    { icon: Shield, title: t.trust.secureShopping, description: t.trust.secureShoppingDesc },
    { icon: Award, title: t.trust.quality, description: t.trust.qualityDesc },
    { icon: CreditCard, title: t.trust.securePayment, description: t.trust.securePaymentDesc },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.trust.title}</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">{t.trust.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{badge.title}</h3>
                <p className="text-blue-200">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
