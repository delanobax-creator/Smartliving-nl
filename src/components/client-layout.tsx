"use client";

import { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NewsletterPopup from "@/components/newsletter-popup";
import CookieConsent from "@/components/cookie-consent";
import { LanguageProvider } from "@/lib/language-context";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
      <NewsletterPopup />
      <CookieConsent />
    </LanguageProvider>
  );
}
