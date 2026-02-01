"use client";

import { FileText, ShoppingCart, Truck, RotateCcw, CreditCard, Scale, Mail } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const termsTranslations = {
  nl: {
    title: "Algemene Voorwaarden",
    subtitle: "De spelregels voor een prettige samenwerking",
    lastUpdated: "Laatst bijgewerkt:",
    date: "Januari 2026",
    article1: {
      title: "Artikel 1 - Definities",
      items: [
        { term: "SmartLiving:", def: "De webshop SmartLiving.nl, gevestigd in Amsterdam." },
        { term: "Klant:", def: "De natuurlijke persoon die een overeenkomst aangaat met SmartLiving." },
        { term: "Overeenkomst:", def: "De koopovereenkomst tussen SmartLiving en de Klant." },
        { term: "Product:", def: "Het artikel dat door SmartLiving wordt aangeboden." }
      ]
    },
    article2: {
      title: "Artikel 2 - Bestellingen",
      items: [
        "Een overeenkomst komt tot stand op het moment dat je een orderbevestiging ontvangt.",
        "SmartLiving behoudt zich het recht voor om bestellingen te weigeren of aanvullende informatie op te vragen.",
        "Prijzen zijn inclusief BTW, exclusief verzendkosten (tenzij anders vermeld).",
        "Kennelijke fouten in prijzen of productomschrijvingen zijn niet bindend."
      ]
    },
    article3: {
      title: "Artikel 3 - Betaling",
      items: [
        "Betaling geschiedt via iDEAL, PayPal, Creditcard of andere aangeboden betaalmethoden.",
        "Je bestelling wordt pas verzonden na ontvangst van de betaling.",
        "Bij niet-tijdige betaling behouden wij ons het recht voor de bestelling te annuleren."
      ]
    },
    article4: {
      title: "Artikel 4 - Levering",
      items: [
        "Levertijden zijn indicatief en geen fatale termijnen.",
        "Levering vindt plaats op het door jou opgegeven adres.",
        "Het risico van beschadiging en/of vermissing gaat over op de klant bij aflevering.",
        "Bij overschrijding van de levertijd met meer dan 30 dagen heb je recht op annulering."
      ]
    },
    article5: {
      title: "Artikel 5 - Herroepingsrecht",
      items: [
        "Je hebt 30 dagen bedenktijd na ontvangst van het product.",
        "Tijdens deze periode mag je het product uitpakken en bekijken zoals je dat in een winkel zou doen.",
        "Retourneren kan alleen als het product ongebruikt is en in originele verpakking.",
        "Retourkosten zijn voor rekening van de klant, tenzij het product defect of verkeerd geleverd is.",
        "Terugbetaling vindt plaats binnen 14 dagen na ontvangst van de retour."
      ]
    },
    article6: {
      title: "Artikel 6 - Garantie",
      items: [
        "Op alle producten geldt minimaal 2 jaar wettelijke garantie.",
        "Garantie geldt niet bij schade door verkeerd gebruik, ongelukken of normale slijtage.",
        "Bij een geldig garantieclaim repareren of vervangen wij het product kosteloos."
      ]
    },
    article7: {
      title: "Artikel 7 - Contact & Klachten",
      intro: "Heb je een klacht of vraag? Neem contact met ons op via:",
      email: "E-mail:",
      phone: "Telefoon:",
      outro: "Wij streven ernaar om klachten binnen 14 dagen af te handelen."
    },
    article8: {
      title: "Artikel 8 - Toepasselijk Recht",
      text: "Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Amsterdam."
    }
  },
  en: {
    title: "Terms & Conditions",
    subtitle: "The rules for a pleasant collaboration",
    lastUpdated: "Last updated:",
    date: "January 2026",
    article1: {
      title: "Article 1 - Definitions",
      items: [
        { term: "SmartLiving:", def: "The webshop SmartLiving.nl, located in Amsterdam." },
        { term: "Customer:", def: "The natural person who enters into an agreement with SmartLiving." },
        { term: "Agreement:", def: "The purchase agreement between SmartLiving and the Customer." },
        { term: "Product:", def: "The item offered by SmartLiving." }
      ]
    },
    article2: {
      title: "Article 2 - Orders",
      items: [
        "An agreement is concluded when you receive an order confirmation.",
        "SmartLiving reserves the right to refuse orders or request additional information.",
        "Prices include VAT, exclude shipping costs (unless stated otherwise).",
        "Obvious errors in prices or product descriptions are not binding."
      ]
    },
    article3: {
      title: "Article 3 - Payment",
      items: [
        "Payment is made via iDEAL, PayPal, Credit Card or other offered payment methods.",
        "Your order will only be shipped after receipt of payment.",
        "In case of late payment, we reserve the right to cancel the order."
      ]
    },
    article4: {
      title: "Article 4 - Delivery",
      items: [
        "Delivery times are indicative and not strict deadlines.",
        "Delivery takes place at the address you provided.",
        "The risk of damage and/or loss transfers to the customer upon delivery.",
        "If the delivery time is exceeded by more than 30 days, you have the right to cancel."
      ]
    },
    article5: {
      title: "Article 5 - Right of Withdrawal",
      items: [
        "You have a 30-day cooling-off period after receiving the product.",
        "During this period, you may unpack and inspect the product as you would in a store.",
        "Returns are only possible if the product is unused and in original packaging.",
        "Return costs are at the customer's expense, unless the product is defective or incorrectly delivered.",
        "Refunds are made within 14 days after receipt of the return."
      ]
    },
    article6: {
      title: "Article 6 - Warranty",
      items: [
        "All products have a minimum 2-year legal warranty.",
        "Warranty does not apply to damage from misuse, accidents, or normal wear and tear.",
        "For a valid warranty claim, we will repair or replace the product free of charge."
      ]
    },
    article7: {
      title: "Article 7 - Contact & Complaints",
      intro: "Do you have a complaint or question? Contact us via:",
      email: "Email:",
      phone: "Phone:",
      outro: "We aim to handle complaints within 14 days."
    },
    article8: {
      title: "Article 8 - Applicable Law",
      text: "Dutch law applies to all agreements. Disputes will be submitted to the competent court in Amsterdam."
    }
  }
};

export default function AlgemeneVoorwaardenPage() {
  const { language } = useLanguage();
  const t = termsTranslations[language];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-blue-200">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <p className="text-gray-600 mb-8"><strong>{t.lastUpdated}</strong> {t.date}</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  {t.article1.title}
                </h2>
                <ul className="text-gray-600 space-y-2">
                  {t.article1.items.map((item, index) => (
                    <li key={index}><strong>{item.term}</strong> {item.def}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <ShoppingCart className="w-6 h-6 text-blue-600 mr-3" />
                  {t.article2.title}
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  {t.article2.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                  {t.article3.title}
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  {t.article3.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Truck className="w-6 h-6 text-blue-600 mr-3" />
                  {t.article4.title}
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  {t.article4.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <RotateCcw className="w-6 h-6 text-blue-600 mr-3" />
                  {t.article5.title}
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  {t.article5.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Scale className="w-6 h-6 text-blue-600 mr-3" />
                  {t.article6.title}
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  {t.article6.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  {t.article7.title}
                </h2>
                <p className="text-gray-600 mb-4">{t.article7.intro}</p>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>{t.article7.email}</strong> info@smartliving.nl</li>
                  <li><strong>{t.article7.phone}</strong> +31 6 87 15 20 90</li>
                </ul>
                <p className="text-gray-600 mt-4">{t.article7.outro}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{t.article8.title}</h2>
                <p className="text-gray-600">{t.article8.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
