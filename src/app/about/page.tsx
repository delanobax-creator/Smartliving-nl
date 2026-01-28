"use client";

import { Users, Heart, Zap, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Over SmartLiving</h1>
          <p className="text-xl text-blue-200">
            Wij maken smart home technologie toegankelijk en betaalbaar voor iedereen
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ons Verhaal</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                SmartLiving.nl is ontstaan vanuit een simpele frustratie: waarom is smart home technologie zo duur? 
                Wij geloven dat iedereen recht heeft op een slim, comfortabel en veilig huis - zonder de hoofdprijs te betalen.
              </p>
              <p>
                Als klein familiebedrijf selecteren wij zorgvuldig de beste smart home producten met de beste 
                prijs-kwaliteitverhouding. Geen onnodige tussenschakels, geen dure merklicenties - gewoon 
                goede producten voor een eerlijke prijs.
              </p>
              <p>
                Vanuit Nederland leveren wij snel en betrouwbaar. Met onze persoonlijke klantenservice staan 
                we altijd voor je klaar - of je nu een vraag hebt over installatie of advies nodig hebt bij 
                het kiezen van het juiste product.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Waar Wij Voor Staan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Betaalbaar", description: "Smart home hoeft niet duur te zijn. Wij bieden kwaliteit voor een eerlijke prijs." },
              { icon: Zap, title: "Eenvoudig", description: "Plug & play producten die iedereen kan installeren. Geen technische kennis nodig." },
              { icon: Shield, title: "Betrouwbaar", description: "Zorgvuldig geselecteerde producten met garantie en uitstekende support." },
              { icon: Users, title: "Persoonlijk", description: "Klein team, grote service. Wij kennen onze klanten en staan altijd klaar." },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om je huis slimmer te maken?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Ontdek onze collectie en begin vandaag nog met besparen
          </p>
          <a href="/shop" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Bekijk de Shop
          </a>
        </div>
      </section>
    </main>
  );
}
