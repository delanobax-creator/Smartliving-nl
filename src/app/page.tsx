import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import Categories from "@/components/categories";
import USPs from "@/components/usps";
import TrustBadges from "@/components/trust-badges";
import WhatsAppButton from "@/components/whatsapp-button";
import ChatBot from "@/components/chatbot";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <USPs />
      <Categories />
      <FeaturedProducts />
      <TrustBadges />
      <WhatsAppButton />
      <ChatBot />
    </main>
  );
}
