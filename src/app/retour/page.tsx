import { RotateCcw, Package, CheckCircle, AlertCircle, Mail } from "lucide-react";

export default function RetourPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Retourneren</h1>
          <p className="text-xl text-blue-200">30 dagen bedenktijd - niet goed, geld terug</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <RotateCcw className="w-7 h-7 text-blue-600 mr-3" />
              Retourbeleid
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Bij SmartLiving heb je <strong>30 dagen bedenktijd</strong>. Niet tevreden met je aankoop? 
                Geen probleem! Je kunt het product binnen 30 dagen na ontvangst retourneren.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Wel retourneerbaar
                </h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Ongebruikte producten</li>
                  <li>• Originele verpakking intact</li>
                  <li>• Binnen 30 dagen na ontvangst</li>
                  <li>• Met aankoopbewijs</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Niet retourneerbaar
                </h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Gebruikte producten</li>
                  <li>• Beschadigde verpakking</li>
                  <li>• Na 30 dagen</li>
                  <li>• Hygiëne-gevoelige items</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Package className="w-7 h-7 text-blue-600 mr-3" />
              Hoe Retourneer Ik?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Meld je retour aan</h3>
                  <p className="text-gray-600">Stuur een e-mail naar <strong>info@smartliving.nl</strong> met je ordernummer en reden van retour.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ontvang retourinstructies</h3>
                  <p className="text-gray-600">Wij sturen je binnen 24 uur een bevestiging met het retouradres en instructies.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Verstuur het pakket</h3>
                  <p className="text-gray-600">Verpak het product goed in de originele verpakking en verstuur het naar ons retouradres.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ontvang je geld terug</h3>
                  <p className="text-gray-600">Na ontvangst en controle storten wij het aankoopbedrag binnen 5 werkdagen terug.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Retourkosten</h2>
            <p className="text-gray-600 mb-4">
              De kosten voor het retourneren zijn voor eigen rekening. Wij adviseren om het pakket 
              aangetekend te versturen zodat je kunt aantonen dat het pakket verzonden is.
            </p>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Tip:</strong> Bij een defect of verkeerd geleverd product nemen wij de retourkosten voor onze rekening.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Retour Aanmelden</h3>
            <p className="text-gray-600 mb-4">Stuur een e-mail met je ordernummer naar:</p>
            <a href="mailto:info@smartliving.nl" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              info@smartliving.nl
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
