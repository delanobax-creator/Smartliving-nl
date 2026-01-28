"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

type Emotion = "happy" | "frustrated" | "neutral" | "confused" | "urgent";

function detectEmotion(text: string): Emotion {
  const lower = text.toLowerCase();
  if (lower.includes("boos") || lower.includes("angry") || lower.includes("kwaad") || lower.includes("slecht") || lower.includes("werkt niet") || lower.includes("not working") || lower.includes("kapot")) return "frustrated";
  if (lower.includes("snap niet") || lower.includes("dont understand") || lower.includes("begrijp niet") || lower.includes("hoe moet") || lower.includes("how to") || lower.includes("wat is") || lower.includes("what is")) return "confused";
  if (lower.includes("snel") || lower.includes("fast") || lower.includes("spoed") || lower.includes("urgent") || lower.includes("dringend") || lower.includes("haast")) return "urgent";
  if (lower.includes("dank") || lower.includes("thank") || lower.includes("bedankt") || lower.includes("fijn") || lower.includes("great") || lower.includes("top") || lower.includes("super")) return "happy";
  return "neutral";
}

function generateResponse(input: string, emotion: Emotion, lang: "nl" | "en"): string {
  const lower = input.toLowerCase();
  
  const empathy = {
    nl: { frustrated: "Ik begrijp dat dit vervelend is. ", confused: "Geen zorgen, ik leg het graag uit! ", urgent: "Ik help je zo snel mogelijk! ", happy: "Fijn om te horen! ", neutral: "" },
    en: { frustrated: "I understand this is frustrating. ", confused: "No worries, let me explain! ", urgent: "I'll help you as fast as possible! ", happy: "Great to hear! ", neutral: "" }
  };

  let response = empathy[lang][emotion];

  if (lower.match(/verzend|shipping|levering|delivery|bezorg/)) {
    response += lang === "nl" ? "Gratis verzending vanaf €50! Bestel voor 17:00 = morgen in huis. Levertijd is 1-3 werkdagen." : "Free shipping from €50! Order before 5pm = delivered tomorrow. Delivery time is 1-3 business days.";
  } else if (lower.match(/retour|return|terug|ruil|exchange/)) {
    response += lang === "nl" ? "Je hebt 30 dagen bedenktijd. Mail naar info@smartliving.nl met je ordernummer!" : "You have 30 days to return. Email info@smartliving.nl with your order number!";
  } else if (lower.match(/install|aansluiten|setup|werkt niet|not working|kapot|broken/)) {
    response += lang === "nl" ? "Onze producten zijn plug & play. Probeer: 1) Opnieuw opstarten 2) App opnieuw koppelen. Werkt het nog niet? Stuur een foto via WhatsApp!" : "Our products are plug & play. Try: 1) Restart 2) Reconnect app. Still not working? Send a photo via WhatsApp!";
  } else if (lower.match(/prijs|price|korting|discount|aanbieding|sale/)) {
    response += lang === "nl" ? "Check onze sale-sectie! Schrijf je in voor de nieuwsbrief en krijg 10% korting op je eerste bestelling." : "Check our sale section! Subscribe to the newsletter and get 10% off your first order.";
  } else if (lower.match(/betaal|pay|ideal|creditcard|paypal/)) {
    response += lang === "nl" ? "We accepteren iDEAL, PayPal, Creditcard en Klarna. Alles 100% veilig!" : "We accept iDEAL, PayPal, Credit Card and Klarna. 100% secure!";
  } else if (lower.match(/google|alexa|siri|voice|spraak/)) {
    response += lang === "nl" ? "De meeste producten werken met Google Home én Alexa. Check de productpagina voor compatibiliteit." : "Most products work with Google Home and Alexa. Check the product page for compatibility.";
  } else if (lower.match(/advies|advice|welke|which|kiezen|choose|recommend/)) {
    response += lang === "nl" ? "Vertel me wat je zoekt! Verlichting, beveiliging, of energie besparen? Dan geef ik persoonlijk advies." : "Tell me what you're looking for! Lighting, security, or energy saving? I'll give you personal advice.";
  } else if (lower.match(/bedankt|thank|dank/)) {
    response = lang === "nl" ? "Graag gedaan! Kan ik je nog ergens anders mee helpen?" : "You're welcome! Can I help you with anything else?";
  } else if (lower.match(/hoi|hallo|hey|hello|hi|good/)) {
    response = lang === "nl" ? "Hoi! Welkom bij SmartLiving! Waarmee kan ik je helpen?" : "Hi! Welcome to SmartLiving! How can I help you?";
  } else {
    response += lang === "nl" ? "Ik help je graag! Stel je vraag of kies een onderwerp." : "I'm happy to help! Ask your question or choose a topic.";
  }

  return response;
}

export default function ChatBot() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ type: "bot", text: t.chat.welcome, emotion: "neutral" as Emotion }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const emotion = detectEmotion(input);
    setMessages(prev => [...prev, { type: "user", text: input, emotion }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(input, emotion, language);
      setMessages(prev => [...prev, { type: "bot", text: response, emotion }]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleQuickReply = (reply: string) => {
    setMessages(prev => [...prev, { type: "user", text: reply, emotion: "neutral" as Emotion }]);
    setIsTyping(true);
    setTimeout(() => {
      const response = generateResponse(reply, "neutral", language);
      setMessages(prev => [...prev, { type: "bot", text: response, emotion: "neutral" as Emotion }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 left-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110" aria-label="Chat">
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 left-6 z-40 w-80 sm:w-96 bg-white rounded-xl shadow-2xl overflow-hidden border">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">🤖</div>
              <div>
                <h3 className="font-semibold">SmartLiving AI</h3>
                <p className="text-xs text-blue-200 flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>{t.chat.online}</p>
              </div>
            </div>
          </div>

          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm ${msg.type === "user" ? "bg-blue-600 text-white rounded-br-none" : "bg-white text-gray-800 shadow-sm rounded-bl-none"}`}>{msg.text}</div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg shadow-sm rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-4 py-2 bg-white border-t flex flex-wrap gap-2">
            {t.chat.quickReplies.map(reply => (
              <button key={reply} onClick={() => handleQuickReply(reply)} className="text-xs bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-3 py-1 rounded-full transition-colors">{reply}</button>
            ))}
          </div>

          <div className="p-4 bg-white border-t">
            <div className="flex space-x-2">
              <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === "Enter" && handleSend()} placeholder={t.chat.placeholder} className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm" />
              <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"><Send className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
