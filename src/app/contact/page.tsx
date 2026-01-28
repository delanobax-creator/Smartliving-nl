"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://alluring-encouragement-production.up.railway.app/public/lead_v3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          name: formData.get("name"),
          details: formData.get("message"),
          knowledge_profile_id: "c6d19de5-0b32-45b2-8cca-aa2176628d4b",
        }),
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-blue-200">Heb je een vraag? Wij helpen je graag!</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Neem Contact Op</h2>
              <p className="text-gray-600 mb-8">Heb je een vraag over een product, je bestelling of heb je advies nodig? Ons team staat voor je klaar!</p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">E-mail</h3>
                    <p className="text-gray-600">info@smartliving.nl</p>
                    <p className="text-sm text-gray-500">Reactie binnen 24 uur</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefoon</h3>
                    <p className="text-gray-600">+31 6 87 15 20 90</p>
                    <p className="text-sm text-gray-500">Ma-Vr: 9:00 - 17:00</p>
                  </div>
                </div>

                <a href="https://wa.me/31687152090?text=Hoi!%20Ik%20heb%20een%20vraag%20over%20SmartLiving%20producten." target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">WhatsApp</h3>
                    <p className="text-gray-600">+31 6 87 15 20 90</p>
                    <p className="text-sm text-gray-500">Snelste reactie! Klik om te chatten</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adres</h3>
                    <p className="text-gray-600">Amsterdam, Nederland</p>
                    <p className="text-sm text-gray-500">Alleen online verkoop</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Stuur een Bericht</h2>
              
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bericht Verzonden!</h3>
                  <p className="text-gray-600">We nemen zo snel mogelijk contact met je op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Je naam" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="je@email.nl" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
                    <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Hoe kunnen we je helpen?" />
                  </div>
                  <button type="submit" disabled={status === "loading"} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50">
                    {status === "loading" ? "Verzenden..." : "Verstuur Bericht"}
                  </button>
                  {status === "error" && <p className="text-red-600 text-sm text-center">Er ging iets mis. Probeer het opnieuw of mail ons direct.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
