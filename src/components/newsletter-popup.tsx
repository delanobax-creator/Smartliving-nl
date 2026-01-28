"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("newsletter_popup_seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("newsletter_popup_seen", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus("success");
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-3xl">🎁</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Krijg 10% Korting!
          </h2>
          <p className="text-gray-600">
            Schrijf je in voor onze nieuwsbrief en ontvang direct 10% korting op je eerste bestelling.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center py-4">
            <div className="text-green-600 text-5xl mb-2">✓</div>
            <p className="text-green-600 font-semibold">Bedankt voor je inschrijving!</p>
            <p className="text-sm text-gray-600 mt-2">Check je email voor de kortingscode.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Jouw email adres"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Bezig..." : "Claim 10% Korting"}
            </button>
            <p className="text-xs text-gray-500 text-center">
              Je kunt je op elk moment uitschrijven. Privacy policy.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
