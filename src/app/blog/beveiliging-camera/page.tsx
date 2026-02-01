import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BeveiligingCamera() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=600&fit=crop" alt="Beveiliging Camera" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Beveiliging</span>
              <span className="text-white/80 text-sm">5 min leestijd</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white">Je Huis Beveiligen met Slimme Camera&apos;s</h1>
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
            <p>Een slim beveiligingssysteem geeft je gemoedsrust - thuis en onderweg.</p>
            <p><strong>Voordelen van slimme camera&apos;s:</strong> Bekijk live beelden op je telefoon, ontvang meldingen bij beweging, geen dure abonnementen nodig, en eenvoudig zelf te installeren.</p>
            <p><strong>Soorten camera&apos;s:</strong> Binnen camera&apos;s zijn perfect om je huisdier in de gaten te houden of te checken of de kinderen veilig thuis zijn. Buiten camera&apos;s zijn weerbestendig met nachtzicht voor 24/7 bewaking. Video deurbellen laten je zien wie er voor de deur staat en praten met bezoekers via je telefoon.</p>
            <p><strong>Belangrijkste locaties:</strong> Voordeur (34% van inbrekers komt hier binnen), achterdeur/tuin, garage, en woonkamer voor overzicht.</p>
            <p><strong>Slimme functies:</strong> Bewegingszones om valse meldingen te voorkomen, persoonherkenning om onderscheid te maken tussen mensen en dieren, en twee-weg audio om met bezoekers te praten.</p>
            <p><strong>Tips voor installatie:</strong> Plaats camera&apos;s op 2-3 meter hoogte, vermijd tegenlicht, test het nachtzicht, en zorg voor stabiel WiFi bij de camera.</p>
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
