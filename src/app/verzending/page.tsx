import { Truck, Clock, MapPin, Package, CheckCircle } from "lucide-react";

export default function VerzendingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Verzending & Levering</h1>
          <p className="text-xl text-blue-200">Snel en betrouwbaar bij je thuis</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Truck className="w-7 h-7 text-blue-600 mr-3" />
              Verzendopties
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Gratis Verzending</h3>
                  <p className="text-gray-600">Bij bestellingen vanaf €50 - geen verzendkosten!</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <Package className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Standaard Verzending</h3>
                  <p className="text-gray-600">€4,95 voor bestellingen onder €50</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="w-7 h-7 text-blue-600 mr-3" />
              Levertijden
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Land</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Levertijd</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Verzendkosten</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-gray-600">Nederland</td>
                    <td className="py-3 px-4 text-gray-600">1-3 werkdagen</td>
                    <td className="py-3 px-4 text-gray-600">Gratis vanaf €50</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-gray-600">België</td>
                    <td className="py-3 px-4 text-gray-600">2-4 werkdagen</td>
                    <td className="py-3 px-4 text-gray-600">Gratis vanaf €50</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Let op:</strong> Bestellingen geplaatst voor 17:00 op werkdagen worden dezelfde dag verzonden.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="w-7 h-7 text-blue-600 mr-3" />
              Track & Trace
            </h2>
            
            <p className="text-gray-600 mb-4">
              Zodra je bestelling verzonden is, ontvang je automatisch een e-mail met een track & trace code. 
              Hiermee kun je je pakket realtime volgen.
            </p>

            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Automatische verzendbevestiging per e-mail
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Realtime tracking via PostNL of DHL
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Notificaties bij bezorging
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Vragen over je verzending?</h3>
            <p className="text-gray-600 mb-4">Neem contact met ons op en we helpen je graag verder.</p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Opnemen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
