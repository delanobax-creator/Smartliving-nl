import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartLiving.nl | Betaalbare Smart Home & Tech Gadgets",
  description: "Ontdek betaalbare smart home technologie en tech gadgets bij SmartLiving.nl. Gratis verzending vanaf €50, 30 dagen retour, expert advies.",
  keywords: ["smart home", "tech gadgets", "slimme verlichting", "smart speakers", "home automation", "domotica", "Nederland", "betaalbaar"],
  icons: {
    icon: "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/cfe481f9-cba1-43fd-b087-4ffa1cf6cc8e/generated-image-2026-02-01.png",
    apple: "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/cfe481f9-cba1-43fd-b087-4ffa1cf6cc8e/generated-image-2026-02-01.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
