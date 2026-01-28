import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function SmartHomeBeginners() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&h=600&fit=crop" alt="Smart Home" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Beginners</span>
              <span className="text-white/80 text-sm">5 min leestijd</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white">Smart Home voor Beginners: Waar Begin Je?</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Terug naar Blog
        </Link>

        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>Een smart home is een woning waarin apparaten met elkaar verbonden zijn via internet. Je kunt ze bedienen met je smartphone, stem, of ze automatisch laten werken.</p>
            <p>Waarom zou je beginnen met smart home? Ten eerste gemak: bedien je verlichting, thermostaat en meer vanaf de bank of onderweg. Ten tweede energiebesparing: slimme thermostaten en verlichting kunnen tot 30% besparen op je energierekening. Ten derde veiligheid: camera's, sensoren en slimme sloten houden je huis veilig.</p>
            <p>Waar begin je? Start met het kiezen van je ecosysteem - de meeste mensen kiezen voor Google Home of Amazon Alexa. Begin dan klein met bijvoorbeeld slimme lampen, een slimme stekker, of een slimme thermostaat. Breid langzaam uit en voeg stap voor stap producten toe.</p>
            <p>Tips voor beginners: zorg voor stabiel WiFi (dit is de basis), kies producten die met elkaar werken, begin met wat je het meeste gebruikt, en stel automatiseringen in voor maximaal gemak.</p>
          </div>
        </article>

        <div className="mt-8 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Hulp nodig bij het kiezen?</h3>
          <p className="text-gray-600 mb-4">Ons team staat klaar voor persoonlijk advies</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Neem Contact Op
          </Link>
        </div>
      </div>
    </main>
  );
}
