export const faqTranslations = {
  nl: {
    title: "Veelgestelde Vragen",
    subtitle: "Vind snel antwoord op je vragen",
    notFound: "Staat je vraag er niet tussen?",
    notFoundDesc: "Neem gerust contact met ons op. We helpen je graag!",
    contactButton: "Neem Contact Op",
    categories: [
      {
        name: "Bestellen & Betalen",
        questions: [
          { q: "Welke betaalmethoden accepteren jullie?", a: "Wij accepteren iDEAL, PayPal, Creditcard (Visa, Mastercard, American Express), Bancontact en Klarna. Alle betalingen zijn 100% veilig en beveiligd." },
          { q: "Kan ik mijn bestelling nog wijzigen of annuleren?", a: "Ja, zolang je bestelling nog niet verzonden is kun je deze wijzigen of annuleren. Neem zo snel mogelijk contact met ons op via info@smartliving.nl of WhatsApp." },
          { q: "Krijg ik een factuur?", a: "Ja, je ontvangt automatisch een factuur per e-mail na je bestelling. Deze kun je ook altijd opvragen via onze klantenservice." }
        ]
      },
      {
        name: "Verzending & Levering",
        questions: [
          { q: "Hoe lang duurt de levering?", a: "Bestellingen geplaatst voor 17:00 worden dezelfde werkdag verzonden. De levertijd is 1-3 werkdagen binnen Nederland en België." },
          { q: "Zijn er verzendkosten?", a: "Verzending is GRATIS bij bestellingen vanaf €50. Bij bestellingen onder €50 betaal je €4,95 verzendkosten." },
          { q: "Leveren jullie ook in België?", a: "Ja! Wij leveren in heel Nederland en België. Verzendkosten en levertijden zijn gelijk." },
          { q: "Kan ik mijn pakket volgen?", a: "Ja, zodra je bestelling verzonden is ontvang je een track & trace code per e-mail waarmee je je pakket kunt volgen." }
        ]
      },
      {
        name: "Retourneren & Garantie",
        questions: [
          { q: "Wat is jullie retourbeleid?", a: "Je hebt 30 dagen bedenktijd. Niet tevreden? Stuur het product in originele verpakking terug en je krijgt je geld terug. Retourkosten zijn voor eigen rekening." },
          { q: "Hoe kan ik een product retourneren?", a: "Stuur een e-mail naar info@smartliving.nl met je ordernummer en reden van retour. Wij sturen je dan de retourinstructies." },
          { q: "Hoeveel garantie krijg ik?", a: "Al onze producten hebben minimaal 2 jaar garantie. Bij defecten binnen de garantieperiode repareren of vervangen wij het product kosteloos." }
        ]
      },
      {
        name: "Producten & Installatie",
        questions: [
          { q: "Zijn de producten makkelijk te installeren?", a: "Ja! Al onze producten zijn plug & play en eenvoudig zelf te installeren. Bij elk product zit een duidelijke handleiding en we hebben ook video tutorials beschikbaar." },
          { q: "Werken de producten met Google Home / Alexa?", a: "De meeste van onze smart home producten zijn compatibel met Google Home en Amazon Alexa. Check de productpagina voor specifieke compatibiliteit." },
          { q: "Heb ik een hub nodig?", a: "De meeste producten werken direct via WiFi en hebben geen aparte hub nodig. Sommige starter sets bevatten een hub voor extra functies." },
          { q: "Kan ik advies krijgen over welk product ik nodig heb?", a: "Natuurlijk! Neem contact op via WhatsApp, chat of e-mail en we helpen je graag met persoonlijk advies." }
        ]
      }
    ]
  },
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Find quick answers to your questions",
    notFound: "Can't find your question?",
    notFoundDesc: "Feel free to contact us. We're happy to help!",
    contactButton: "Contact Us",
    categories: [
      {
        name: "Ordering & Payment",
        questions: [
          { q: "What payment methods do you accept?", a: "We accept iDEAL, PayPal, Credit Card (Visa, Mastercard, American Express), Bancontact and Klarna. All payments are 100% safe and secure." },
          { q: "Can I still modify or cancel my order?", a: "Yes, as long as your order hasn't been shipped yet, you can modify or cancel it. Contact us as soon as possible via info@smartliving.nl or WhatsApp." },
          { q: "Will I receive an invoice?", a: "Yes, you will automatically receive an invoice by email after your order. You can also always request one through our customer service." }
        ]
      },
      {
        name: "Shipping & Delivery",
        questions: [
          { q: "How long does delivery take?", a: "Orders placed before 17:00 are shipped the same business day. Delivery time is 1-3 business days within the Netherlands and Belgium." },
          { q: "Are there shipping costs?", a: "Shipping is FREE for orders from €50. For orders under €50, you pay €4.95 shipping costs." },
          { q: "Do you also deliver to Belgium?", a: "Yes! We deliver throughout the Netherlands and Belgium. Shipping costs and delivery times are the same." },
          { q: "Can I track my package?", a: "Yes, once your order has been shipped, you will receive a track & trace code by email to track your package." }
        ]
      },
      {
        name: "Returns & Warranty",
        questions: [
          { q: "What is your return policy?", a: "You have 30 days to decide. Not satisfied? Return the product in original packaging and get your money back. Return costs are at your own expense." },
          { q: "How can I return a product?", a: "Send an email to info@smartliving.nl with your order number and reason for return. We will then send you the return instructions." },
          { q: "How much warranty do I get?", a: "All our products have a minimum 2-year warranty. In case of defects within the warranty period, we repair or replace the product free of charge." }
        ]
      },
      {
        name: "Products & Installation",
        questions: [
          { q: "Are the products easy to install?", a: "Yes! All our products are plug & play and easy to install yourself. Each product comes with clear instructions and we also have video tutorials available." },
          { q: "Do the products work with Google Home / Alexa?", a: "Most of our smart home products are compatible with Google Home and Amazon Alexa. Check the product page for specific compatibility." },
          { q: "Do I need a hub?", a: "Most products work directly via WiFi and don't need a separate hub. Some starter sets include a hub for extra features." },
          { q: "Can I get advice on which product I need?", a: "Of course! Contact us via WhatsApp, chat or email and we'll be happy to help with personal advice." }
        ]
      }
    ]
  }
};

export type FaqLanguage = "nl" | "en";
