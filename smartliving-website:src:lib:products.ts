{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 export interface Product \{\
  id: string;\
  name: string;\
  description: string;\
  price: number;\
  originalPrice?: number;\
  category: string;\
  brand: string;\
  images: string[];\
  rating: number;\
  reviews: number;\
  inStock: boolean;\
  badge?: string;\
  features: string[];\
\}\
\
const baseProducts: Product[] = [\
  \{\
    id: "smart-led-starter-kit",\
    name: "Smart LED Lampen Starter Set E27",\
    description: "Complete set met 3 slimme LED lampen en WiFi bridge.",\
    price: 49.99, originalPrice: 69.99, category: "verlichting", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/96897409-703f-48b4-a0a6-2ad2f3563f95/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/65b306de-d11f-4aa7-9c9d-67a897b76679/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/5394d416-3c24-4ab9-be09-bf3b5af0ac31/image.png?w=1024&h=1024"\
    ],\
    rating: 4.7, reviews: 189, inStock: true, badge: "Bestseller",\
    features: ["3x E27 lampen", "WiFi bridge inclusief", "16 miljoen kleuren", "App bediening"]\
  \},\
  \{\
    id: "smart-display-hub",\
    name: "Smart Display met Spraakassistent",\
    description: "7 inch touchscreen display met spraakassistent.",\
    price: 79.99, category: "speakers", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/4b011a3a-ff08-44e9-9fe8-f6258d07220d/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/26b0e5ed-3c55-45d2-b07e-9523111b5e73/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/0b43ef05-ded5-4dae-a522-3605b78cffce/image.png?w=1024&h=1024"\
    ],\
    rating: 4.5, reviews: 156, inStock: true, badge: "Nieuw",\
    features: ["7 inch touchscreen", "Spraakassistent", "Smart home hub", "Video bellen"]\
  \},\
  \{\
    id: "wifi-video-doorbell",\
    name: "WiFi Video Deurbel met Camera",\
    description: "1080p HD camera met nachtzicht.",\
    price: 89.99, category: "cameras", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/8f87a3fb-d66e-4cb8-833b-30bdb6de121b/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/dd9367b0-5dd9-41b6-89b1-5bcde3aebf21/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/61f36229-354f-42ef-ae45-1cb0cf9aa8f7/image.png?w=1024&h=1024"\
    ],\
    rating: 4.6, reviews: 234, inStock: true,\
    features: ["1080p HD", "Bewegingsdetectie", "Nachtzicht", "Twee-weg audio"]\
  \},\
  \{\
    id: "smart-thermostat-wifi",\
    name: "Slimme WiFi Thermostaat",\
    description: "Programmeerbare thermostaat met app.",\
    price: 129.99, category: "thermostaten", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/f192b55e-87ab-4d14-91c3-9b7fb215fcfb/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/3a564131-4d67-4c8f-b3d1-b9608dceb0ef/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/3159d26d-2ebf-406a-acb3-e2f624aae866/image.png?w=1024&h=1024"\
    ],\
    rating: 4.8, reviews: 278, inStock: true, badge: "Top Rated",\
    features: ["Programmeerbaar", "30% besparing", "App bediening", "Elegant design"]\
  \},\
  \{\
    id: "smart-lock-wifi",\
    name: "Smart Deurslot met WiFi",\
    description: "Open met smartphone of pincode.",\
    price: 149.99, originalPrice: 179.99, category: "locks", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/08adc7ad-35c3-4b2b-9996-282ddb6c3742/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/0d49a523-d2f7-431a-954e-d10b2a01240e/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/1b270e8a-1a12-41e1-8ceb-7b013fc97580/image.png?w=1024&h=1024"\
    ],\
    rating: 4.4, reviews: 145, inStock: true,\
    features: ["WiFi", "Pincode", "Gastcodes", "Past op elk slot"]\
  \},\
  \{\
    id: "mesh-wifi-system",\
    name: "Mesh WiFi Systeem (3-pack)",\
    description: "Supersnel WiFi in hele huis.",\
    price: 159.99, category: "netwerk", brand: "SmartLiving",\
    images: [\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/fbfe524a-e50e-4cb2-adf7-421dfffccee0/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/9065a77a-29cf-4a1f-b33d-fa0cbded07a5/image.png?w=1024&h=1024",\
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/d50a8173-3e79-46fa-8cb1-021104de5358/image.png?w=1024&h=1024"\
    ],\
    rating: 4.7, reviews: 167, inStock: true, badge: "Populair",\
    features: ["WiFi 6", "3-pack", "500m\'b2", "100+ apparaten"]\
  \}\
];\
\
import \{ extraProducts \} from "./extra-products";\
\
export const products: Product[] = [...baseProducts, ...extraProducts];\
\
export const categories = [\
  \{ id: "all", name: "Alle Producten" \},\
  \{ id: "verlichting", name: "Slimme Verlichting" \},\
  \{ id: "speakers", name: "Smart Speakers" \},\
  \{ id: "cameras", name: "Camera's & Deurbellen" \},\
  \{ id: "thermostaten", name: "Thermostaten" \},\
  \{ id: "locks", name: "Smart Locks" \},\
  \{ id: "netwerk", name: "Netwerk & WiFi" \}\
];\
\
export const brands = ["Alle Merken", "SmartLiving"];\
}