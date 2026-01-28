import { FileText, ShoppingCart, Truck, RotateCcw, CreditCard, Scale, Mail } from "lucide-react";

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Algemene Voorwaarden</h1>
          <p className="text-xl text-blue-200">De spelregels voor een prettige samenwerking</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <p className="text-gray-600 mb-8"><strong>Laatst bijgewerkt:</strong> Januari 2026</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  Artikel 1 - Definities
                </h2>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>SmartLiving:</strong> De webshop SmartLiving.nl, gevestigd in Amsterdam.</li>
                  <li><strong>Klant:</strong> De natuurlijke persoon die een overeenkomst aangaat met SmartLiving.</li>
                  <li><strong>Overeenkomst:</strong> De koopovereenkomst tussen SmartLiving en de Klant.</li>
                  <li><strong>Product:</strong> Het artikel dat door SmartLiving wordt aangeboden.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <ShoppingCart className="w-6 h-6 text-blue-600 mr-3" />
                  Artikel 2 - Bestellingen
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Een overeenkomst komt tot stand op het moment dat je een orderbevestiging ontvangt.</li>
                  <li>SmartLiving behoudt zich het recht voor om bestellingen te weigeren of aanvullende informatie op te vragen.</li>
                  <li>Prijzen zijn inclusief BTW, exclusief verzendkosten (tenzij anders vermeld).</li>
                  <li>Kennelijke fouten in prijzen of productomschrijvingen zijn niet bindend.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                  Artikel 3 - Betaling
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Betaling geschiedt via iDEAL, PayPal, Creditcard of andere aangeboden betaalmethoden.</li>
                  <li>Je bestelling wordt pas verzonden na ontvangst van de betaling.</li>
                  <li>Bij niet-tijdige betaling behouden wij ons het recht voor de bestelling te annuleren.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Truck className="w-6 h-6 text-blue-600 mr-3" />
                  Artikel 4 - Levering
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Levertijden zijn indicatief en geen fatale termijnen.</li>
                  <li>Levering vindt plaats op het door jou opgegeven adres.</li>
                  <li>Het risico van beschadiging en/of vermissing gaat over op de klant bij aflevering.</li>
                  <li>Bij overschrijding van de levertijd met meer dan 30 dagen heb je recht op annulering.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <RotateCcw className="w-6 h-6 text-blue-600 mr-3" />
                  Artikel 5 - Herroepingsrecht
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Je hebt 30 dagen bedenktijd na ontvangst van het product.</li>
                  <li>Tijdens deze periode mag je het product uitpakken en bekijken zoals je dat in een winkel zou doen.</li>
                  <li>Retourneren kan alleen als het product ongebruikt is en in originele verpakking.</li>
                  <li>Retourkosten zijn voor rekening van de klant, tenzij het product defect of verkeerd geleverd is.</li>
                  <li>Terugbetaling vindt plaats binnen 14 dagen na ontvangst van de retour.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Scale className="w-6 h-6 text-blue-600 mr-3" />
                  Artikel 6 - Garantie
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Op alle producten geldt minimaal 2 jaar wettelijke garantie.</li>
                  <li>Garantie geldt niet bij schade door verkeerd gebruik, ongelukken of normale slijtage.</li>
                  <li>Bij een geldig garantieclaim repareren of vervangen wij het product kosteloos.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  Artikel 7 - Contact & Klachten
                </h2>
                <p className="text-gray-600 mb-4">Heb je een klacht of vraag? Neem contact met ons op via:</p>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>E-mail:</strong> info@smartliving.nl</li>
                  <li><strong>Telefoon:</strong> +31 (0)20 123 4567</li>
                </ul>
                <p className="text-gray-600 mt-4">Wij streven ernaar om klachten binnen 14 dagen af te handelen.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Artikel 8 - Toepasselijk Recht</h2>
                <p className="text-gray-600">
                  Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd 
                  aan de bevoegde rechter in Amsterdam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
