{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Product \} from "./products";\
\
export const extraProducts: Product[] = [\
  \{\
    id: "smart-plug-wifi",\
    name: "Smart Plug WiFi Stopcontact",\
    description: "Bedien apparaten op afstand via app.",\
    price: 19.99, category: "verlichting", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/96897409-703f-48b4-a0a6-2ad2f3563f95/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/65b306de-d11f-4aa7-9c9d-67a897b76679/image.png?w=1024&h=1024"\
    ],\
    rating: 4.6, reviews: 312, inStock: true, badge: "Budget",\
    features: ["WiFi", "Timer", "Energiemeter", "Compact design"]\
  \},\
  \{\
    id: "motion-sensor-wifi",\
    name: "WiFi Bewegingssensor",\
    description: "Detecteer beweging en automatiseer verlichting.",\
    price: 29.99, category: "cameras", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/4b011a3a-ff08-44e9-9fe8-f6258d07220d/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/26b0e5ed-3c55-45d2-b07e-9523111b5e73/image.png?w=1024&h=1024"\
    ],\
    rating: 4.5, reviews: 187, inStock: true,\
    features: ["WiFi", "Bewegingsdetectie", "Automatisering", "Batterij 2 jaar"]\
  \},\
  \{\
    id: "smart-led-strip",\
    name: "Smart LED Strip RGB 5m",\
    description: "Kleurrijke LED strip met app bediening.",\
    price: 39.99, originalPrice: 49.99, category: "verlichting", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/8f87a3fb-d66e-4cb8-833b-30bdb6de121b/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/dd9367b0-5dd9-41b6-89b1-5bcde3aebf21/image.png?w=1024&h=1024"\
    ],\
    rating: 4.7, reviews: 423, inStock: true, badge: "Populair",\
    features: ["5 meter", "16 miljoen kleuren", "Muziek sync", "Waterdicht"]\
  \},\
  \{\
    id: "smart-speaker-mini",\
    name: "Smart Speaker Mini",\
    description: "Compacte speaker met spraakassistent.",\
    price: 49.99, category: "speakers", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/f192b55e-87ab-4d14-91c3-9b7fb215fcfb/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/3a564131-4d67-4c8f-b3d1-b9608dceb0ef/image.png?w=1024&h=1024"\
    ],\
    rating: 4.4, reviews: 256, inStock: true,\
    features: ["Compact", "Spraakassistent", "Stereo geluid", "Bluetooth"]\
  \},\
  \{\
    id: "door-window-sensor",\
    name: "Deur & Raam Sensor",\
    description: "Detecteer openen/sluiten van deuren en ramen.",\
    price: 24.99, category: "cameras", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/08adc7ad-35c3-4b2b-9996-282ddb6c3742/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/0d49a523-d2f7-431a-954e-d10b2a01240e/image.png?w=1024&h=1024"\
    ],\
    rating: 4.6, reviews: 198, inStock: true,\
    features: ["WiFi", "Magnetisch", "Notificaties", "Batterij 3 jaar"]\
  \},\
  \{\
    id: "smart-bulb-e14",\
    name: "Smart LED Lamp E14",\
    description: "Kleine slimme LED lamp voor spotjes.",\
    price: 14.99, category: "verlichting", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/fbfe524a-e50e-4cb2-adf7-421dfffccee0/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/9065a77a-29cf-4a1f-b33d-fa0cbded07a5/image.png?w=1024&h=1024"\
    ],\
    rating: 4.5, reviews: 167, inStock: true,\
    features: ["E14 fitting", "Dimbaar", "16 miljoen kleuren", "App bediening"]\
  \}\
];\
}