"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    category: "Bestellen & Betalen",
    questions: [
      { q: "Welke betaalmethoden accepteren jullie?", a: "Wij accepteren iDEAL, PayPal, Creditcard (Visa, Mastercard, American Express), Bancontact en Klarna. Alle betalingen zijn 100% veilig en beveiligd." },
      { q: "Kan ik mijn bestelling nog wijzigen of annuleren?", a: "Ja, zolang je bestelling nog niet verzonden is kun je deze wijzigen of annuleren. Neem zo snel mogelijk contact met ons op via info@smartliving.nl of WhatsApp." },
      { q: "Krijg ik een factuur?", a: "Ja, je ontvangt automatisch een factuur per e-mail na je bestelling. Deze kun je ook altijd opvragen via onze klantenservice." },
    ],
  },
  {
    category: "Verzending & Levering",
    questions: [
      { q: "Hoe lang duurt de levering?", a: "Bestellingen geplaatst voor 17:00 worden dezelfde werkdag verzonden. De levertijd is 1-3 werkdagen binnen Nederland en België." },
      { q: "Zijn er verzendkosten?", a: "Verzending is GRATIS bij bestellingen vanaf €50. Bij bestellingen onder €50 betaal je €4,95 verzendkosten." },
      { q: "Leveren jullie ook in België?", a: "Ja! Wij leveren in heel Nederland en België. Verzendkosten en levertijden zijn gelijk." },
      { q: "Kan ik mijn pakket volgen?", a: "Ja, zodra je bestelling verzonden is ontvang je een track & trace code per e-mail waarmee je je pakket kunt volgen." },
    ],
  },
  {
    category: "Retourneren & Garantie",
    questions: [
      { q: "Wat is jullie retourbeleid?", a: "Je hebt 30 dagen bedenktijd. Niet tevreden? Stuur het product in originele verpakking terug en je krijgt je geld terug. Retourkosten zijn voor eigen rekening." },
      { q: "Hoe kan ik een product retourneren?", a: "Stuur een e-mail naar info@smartliving.nl met je ordernummer en reden van retour. Wij sturen je dan de retourinstructies." },
      { q: "Hoeveel garantie krijg ik?", a: "Al onze producten hebben minimaal 2 jaar garantie. Bij defecten binnen de garantieperiode repareren of vervangen wij het product kosteloos." },
    ],
  },
  {
    category: "Producten & Installatie",
    questions: [
      { q: "Zijn de producten makkelijk te installeren?", a: "Ja! Al onze producten zijn plug & play en eenvoudig zelf te installeren. Bij elk product zit een duidelijke handleiding en we hebben ook video tutorials beschikbaar." },
      { q: "Werken de producten met Google Home / Alexa?", a: "De meeste van onze smart home producten zijn compatibel met Google Home en Amazon Alexa. Check de productpagina voor specifieke compatibiliteit." },
      { q: "Heb ik een hub nodig?", a: "De meeste producten werken direct via WiFi en hebben geen aparte hub nodig. Sommige starter sets bevatten een hub voor extra functies." },
      { q: "Kan ik advies krijgen over welk product ik nodig heb?", a: "Natuurlijk! Neem contact op via WhatsApp, chat of e-mail en we helpen je graag met persoonlijk advies." },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Veelgestelde Vragen</h1>
          <p className="text-xl text-blue-200">Vind snel antwoord op je vragen</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${catIndex}-${faqIndex}`;
                  const isOpen = openItems.includes(itemId);
                  return (
                    <div key={faqIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="bg-blue-50 rounded-xl p-8 text-center mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Staat je vraag er niet tussen?</h3>
            <p className="text-gray-600 mb-4">Neem gerust contact met ons op. We helpen je graag!</p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Neem Contact Op
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
