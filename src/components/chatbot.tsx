"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function ChatBot() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: t.chat.welcome }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const generateResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();

    // Verzending
    if (lower.match(/verzend|shipping|levering|delivery|bezorg|wanneer|lever/)) {
      return language === "nl" 
        ? "📦 Gratis verzending vanaf €50! Bestel voor 17:00 = volgende werkdag in huis. Standaard levertijd is 1-3 werkdagen in Nederland en België."
        : "📦 Free shipping from €50! Order before 5pm = delivered next business day. Standard delivery is 1-3 business days in Netherlands and Belgium.";
    }

    // Retour
    if (lower.match(/retour|return|terug|ruil|geld terug|terugsturen/)) {
      return language === "nl"
        ? "↩️ Je hebt 30 dagen bedenktijd! Niet tevreden? Stuur het product in originele verpakking terug. Mail naar info@smartliving.nl met je ordernummer om een retour aan te melden."
        : "↩️ You have 30 days to return! Not satisfied? Return the product in original packaging. Email info@smartliving.nl with your order number to register a return.";
    }

    // Betaling
    if (lower.match(/betaal|pay|ideal|creditcard|paypal|klarna|afrekenen/)) {
      return language === "nl"
        ? "💳 We accepteren iDEAL, PayPal, Creditcard (Visa/Mastercard), Bancontact en Klarna. Alle betalingen zijn 100% veilig en beveiligd met SSL."
        : "💳 We accept iDEAL, PayPal, Credit Card (Visa/Mastercard), Bancontact and Klarna. All payments are 100% secure with SSL encryption.";
    }

    // Garantie
    if (lower.match(/garantie|warranty|kapot|defect|stuk|broken/)) {
      return language === "nl"
        ? "🛡️ Al onze producten hebben minimaal 2 jaar garantie. Is je product defect? Neem contact op via info@smartliving.nl met je ordernummer en een foto van het probleem."
        : "🛡️ All our products have a minimum 2-year warranty. Is your product defective? Contact us at info@smartliving.nl with your order number and a photo of the issue.";
    }

    // Installatie
    if (lower.match(/install|aansluiten|setup|werkt niet|not working|koppel|verbind|wifi/)) {
      return language === "nl"
        ? "🔧 Onze producten zijn plug & play! Tips: 1) Zorg voor stabiel WiFi 2) Download de juiste app 3) Volg de handleiding stap voor stap. Nog steeds problemen? Stuur een foto via WhatsApp: +31 6 87 15 20 90"
        : "🔧 Our products are plug & play! Tips: 1) Ensure stable WiFi 2) Download the correct app 3) Follow the manual step by step. Still having issues? Send a photo via WhatsApp: +31 6 87 15 20 90";
    }

    // Korting
    if (lower.match(/korting|discount|aanbieding|sale|coupon|code|goedkoper/)) {
      return language === "nl"
        ? "🎁 Schrijf je in voor onze nieuwsbrief en krijg 10% korting op je eerste bestelling! Check ook onze Shop pagina voor actuele aanbiedingen."
        : "🎁 Subscribe to our newsletter and get 10% off your first order! Also check our Shop page for current deals.";
    }

    // Google/Alexa compatibiliteit
    if (lower.match(/google|alexa|siri|voice|spraak|smart home|domotica/)) {
      return language === "nl"
        ? "🏠 De meeste van onze producten werken met Google Home én Amazon Alexa! Check de productpagina voor specifieke compatibiliteit. Hulp nodig bij het instellen? Vraag het ons!"
        : "🏠 Most of our products work with Google Home and Amazon Alexa! Check the product page for specific compatibility. Need help setting up? Just ask!";
    }

    // Advies
    if (lower.match(/advies|advice|welke|which|kiezen|choose|recommend|aanraden|beste|best/)) {
      return language === "nl"
        ? "💡 Ik help je graag! Vertel me: wat wil je bereiken? (bijv. energie besparen, huis beveiligen, sfeerverlichting). Dan geef ik persoonlijk advies!"
        : "💡 Happy to help! Tell me: what do you want to achieve? (e.g., save energy, secure your home, ambient lighting). I'll give you personal advice!";
    }

    // Bestelling/Order
    if (lower.match(/bestelling|order|track|volg|waar is|status|verzonden/)) {
      return language === "nl"
        ? "📬 Je ontvangt een track & trace code per email zodra je bestelling verzonden is. Nog geen mail ontvangen? Check je spam of mail naar info@smartliving.nl met je ordernummer."
        : "📬 You'll receive a track & trace code by email once your order ships. Haven't received it? Check spam or email info@smartliving.nl with your order number.";
    }

    // Contact
    if (lower.match(/contact|bel|email|whatsapp|telefoon|bereik/)) {
      return language === "nl"
        ? "📞 Je kunt ons bereiken via:\n• WhatsApp: +31 6 87 15 20 90 (snelst!)\n• Email: info@smartliving.nl\n• Ma-Vr: 9:00 - 17:00"
        : "📞 You can reach us via:\n• WhatsApp: +31 6 87 15 20 90 (fastest!)\n• Email: info@smartliving.nl\n• Mon-Fri: 9:00 - 17:00";
    }

    // Bedankt
    if (lower.match(/bedankt|thanks|thank|dank|fijn|top|super|geweldig/)) {
      return language === "nl"
        ? "😊 Graag gedaan! Kan ik je nog ergens anders mee helpen?"
        : "😊 You're welcome! Can I help you with anything else?";
    }

    // Groet
    if (lower.match(/hoi|hallo|hey|hello|hi|goedemorgen|goedemiddag|goedenavond/)) {
      return language === "nl"
        ? "👋 Hoi! Welkom bij SmartLiving. Waarmee kan ik je helpen? Je kunt vragen stellen over producten, verzending, retourneren, of advies vragen!"
        : "👋 Hi! Welcome to SmartLiving. How can I help you? You can ask about products, shipping, returns, or get advice!";
    }

    // Prijs
    if (lower.match(/prijs|price|kost|cost|duur|expensive|cheap|goedkoop/)) {
      return language === "nl"
        ? "💰 Onze prijzen zijn inclusief BTW. Gratis verzending vanaf €50! Bekijk onze Shop voor alle producten en prijzen. Zoek je iets specifieks?"
        : "💰 Our prices include VAT. Free shipping from €50! Check our Shop for all products and prices. Looking for something specific?";
    }

    // Default antwoord
    return language === "nl"
      ? "🤔 Ik begrijp je vraag niet helemaal. Probeer het anders te formuleren, of neem contact op via WhatsApp (+31 6 87 15 20 90) voor persoonlijke hulp!"
      : "🤔 I don't quite understand your question. Try rephrasing it, or contact us via WhatsApp (+31 6 87 15 20 90) for personal assistance!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages((prev) => [...prev, { type: "bot", text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 500);
  };

  const handleQuickReply = (reply: string) => {
    setMessages((prev) => [...prev, { type: "user", text: reply }]);
    setIsTyping(true);
    setTimeout(() => {
      const response = generateResponse(reply);
      setMessages((prev) => [...prev, { type: "bot", text: response }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 left-6 z-40 w-80 sm:w-96 bg-white rounded-xl shadow-2xl overflow-hidden border">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">🤖</div>
              <div>
                <h3 className="font-semibold">SmartLiving Assistent</h3>
                <p className="text-xs text-blue-200 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  {t.chat.online}
                </p>
              </div>
            </div>
          </div>

          <div className="h-72 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-line ${
                  msg.type === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 shadow-sm rounded-bl-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg shadow-sm rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-4 py-2 bg-white border-t flex flex-wrap gap-2">
            {t.chat.quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="text-xs bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-3 py-1 rounded-full transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>

          <div className="p-4 bg-white border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder={t.chat.placeholder}
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
