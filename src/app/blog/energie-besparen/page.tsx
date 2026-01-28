import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function EnergieBesparen() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=1200&h=600&fit=crop" alt="Energie Besparen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Besparen</span>
              <span className="text-white/80 text-sm">4 min leestijd</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white">Energie Besparen met Smart Home: Tot 30% Minder Kosten</h1>
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
            <p>Met de stijgende energieprijzen zoekt iedereen naar manieren om te besparen. Smart home technologie kan je helpen tot 30% te besparen - zonder in te leveren op comfort.</p>
            <p>De slimme thermostaat is de nummer één investering voor energiebesparing. Hij leert je gedrag en past zich aan, verwarmt alleen wanneer nodig, is bedienbaar op afstand, en geeft inzicht in je verbruik. Gemiddelde besparing: 15-25% op verwarmingskosten.</p>
            <p>Slimme verlichting met LED lampen verbruikt al 80% minder dan gloeilampen. Met automatisch uitschakelen, dimmen, bewegingssensoren en tijdschema's bespaar je nog meer. Gemiddelde besparing: 5-10% op elektriciteit.</p>
            <p>Slimme stekkers zijn ook belangrijk. Wist je dat apparaten op standby tot 10% van je stroomrekening kunnen kosten? Slimme stekkers schakelen apparaten volledig uit en meten het verbruik per apparaat.</p>
            <p>De terugverdientijd is kort: een slimme thermostaat verdient zichzelf terug in 1-2 jaar, slimme lampen in 2-3 jaar, en slimme stekkers in 1-2 jaar.</p>
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
