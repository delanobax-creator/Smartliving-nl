import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function SlimmeVerlichtingTips() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop" alt="Slimme Verlichting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Verlichting</span>
              <span className="text-white/80 text-sm">6 min leestijd</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white">10 Tips voor Slimme Verlichting in Huis</h1>
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
            <p>Slimme verlichting is meer dan lampen aan en uit zetten met je telefoon. Met deze tips creëer je de perfecte sfeer én bespaar je energie.</p>
            <p><strong>Tip 1:</strong> Kies de juiste kleurtemperatuur. Gebruik 's ochtends koel wit (5000K+) voor energie, overdag neutraal wit (4000K) voor focus, en 's avonds warm wit (2700K) voor ontspanning.</p>
            <p><strong>Tip 2:</strong> Gebruik scènes. Maak vooringestelde scènes voor verschillende momenten zoals 'Goedemorgen', 'Film kijken', 'Feest', en 'Bedtijd'.</p>
            <p><strong>Tip 3:</strong> Automatiseer met zonsopgang en zonsondergang. Zo vergeet je nooit meer het licht.</p>
            <p><strong>Tip 4:</strong> Plaats bewegingssensoren in hal, gang, toilet, trap en garage.</p>
            <p><strong>Tip 5:</strong> Dim voor sfeer én besparing. Een lamp op 50% verbruikt slechts 20% van de energie.</p>
            <p><strong>Tip 6:</strong> Groepeer je lampen per kamer of zone.</p>
            <p><strong>Tip 7:</strong> Gebruik spraakbesturing - sneller dan je telefoon pakken.</p>
            <p><strong>Tip 8:</strong> Gebruik vakantiestand om aanwezigheid te simuleren.</p>
            <p><strong>Tip 9:</strong> Maak een wake-up light voor natuurlijk wakker worden.</p>
            <p><strong>Tip 10:</strong> Sync met entertainment voor filmavonden of feestjes.</p>
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
