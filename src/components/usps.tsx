"use client";

import { Truck, RotateCcw, Headphones, Shield } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function USPs() {
  const { t } = useLanguage();

  const usps = [
    { icon: Truck, title: t.usps.freeShipping, description: t.usps.freeShippingDesc },
    { icon: RotateCcw, title: t.usps.returns, description: t.usps.returnsDesc },
    { icon: Headphones, title: t.usps.expertAdvice, description: t.usps.expertAdviceDesc },
    { icon: Shield, title: t.usps.securePayment, description: t.usps.securePaymentDesc },
  ];

  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{usp.title}</h3>
                  <p className="text-sm text-gray-600">{usp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
