"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const phoneNumber = "31687152090";
  const message = "Hoi! Ik heb een vraag over SmartLiving producten.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group" aria-label="Chat via WhatsApp">
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{t.whatsapp}</span>
    </a>
  );
}
