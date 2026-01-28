import { Shield, Eye, Lock, Database, Mail, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-200">Hoe wij omgaan met je gegevens</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <p className="text-gray-600 mb-8"><strong>Laatst bijgewerkt:</strong> Januari 2026</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  1. Wie zijn wij?
                </h2>
                <p className="text-gray-600">
                  SmartLiving.nl is een webshop gespecialiseerd in smart home producten en tech gadgets. 
                  Wij zijn verantwoordelijk voor de verwerking van je persoonsgegevens zoals beschreven in deze privacyverklaring.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="w-6 h-6 text-blue-600 mr-3" />
                  2. Welke gegevens verzamelen wij?
                </h2>
                <p className="text-gray-600 mb-4">Wij verzamelen de volgende gegevens:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Naam en adresgegevens</li>
                  <li>E-mailadres</li>
                  <li>Telefoonnummer (indien opgegeven)</li>
                  <li>Betaalgegevens</li>
                  <li>Bestelgeschiedenis</li>
                  <li>IP-adres en browsergegevens</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-blue-600 mr-3" />
                  3. Waarvoor gebruiken wij je gegevens?
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Het verwerken en verzenden van je bestelling</li>
                  <li>Het versturen van orderbevestigingen en verzendinfo</li>
                  <li>Klantenservice en het beantwoorden van vragen</li>
                  <li>Het versturen van nieuwsbrieven (alleen met toestemming)</li>
                  <li>Het verbeteren van onze website en diensten</li>
                  <li>Het voldoen aan wettelijke verplichtingen</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-blue-600 mr-3" />
                  4. Hoe beveiligen wij je gegevens?
                </h2>
                <p className="text-gray-600">
                  Wij nemen de bescherming van je gegevens serieus. Onze website is beveiligd met SSL-encryptie. 
                  We bewaren je gegevens op beveiligde servers en hebben passende technische en organisatorische 
                  maatregelen genomen om misbruik, verlies en onbevoegde toegang te voorkomen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
                  5. Je rechten
                </h2>
                <p className="text-gray-600 mb-4">Je hebt het recht om:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Je gegevens in te zien</li>
                  <li>Je gegevens te laten corrigeren</li>
                  <li>Je gegevens te laten verwijderen</li>
                  <li>Bezwaar te maken tegen verwerking</li>
                  <li>Je gegevens over te dragen</li>
                  <li>Je toestemming in te trekken</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  6. Contact
                </h2>
                <p className="text-gray-600">
                  Heb je vragen over deze privacyverklaring of wil je gebruik maken van je rechten? 
                  Neem dan contact met ons op via <strong>info@smartliving.nl</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
