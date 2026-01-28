export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  features: string[];
}

const baseProducts: Product[] = [
  {
    id: "smart-led-starter-kit",
    name: "Smart LED Lampen Starter Set E27",
    description: "Complete set met 3 slimme LED lampen en WiFi bridge.",
    price: 49.99, originalPrice: 69.99, category: "verlichting", brand: "SmartLiving",
    images: [
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/96897409-703f-48b4-a0a6-2ad2f3563f95/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/96897409-703f-48b4-a0a6-2ad2f3563f95/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/96897409-703f-48b4-a0a6-2ad2f3563f95/image.png?w=1024&h=1024"
    ],
    rating: 4.7, reviews: 189, inStock: true, badge: "Bestseller",
    features: ["3x E27 lampen", "WiFi bridge inclusief", "16 miljoen kleuren", "App bediening"]
  },
  {
    id: "smart-display-hub",
    name: "Smart Display met Spraakassistent",
    description: "7 inch touchscreen display met spraakassistent.",
    price: 79.99, category: "speakers", brand: "SmartLiving",
    images: [
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/4b011a3a-ff08-44e9-9fe8-f6258d07220d/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/4b011a3a-ff08-44e9-9fe8-f6258d07220d/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/4b011a3a-ff08-44e9-9fe8-f6258d07220d/image.png?w=1024&h=1024"
    ],
    rating: 4.5, reviews: 156, inStock: true, badge: "Nieuw",
    features: ["7 inch touchscreen", "Spraakassistent", "Smart home hub", "Video bellen"]
  },
  {
    id: "wifi-video-doorbell",
    name: "WiFi Video Deurbel met Camera",
    description: "1080p HD camera met nachtzicht.",
    price: 89.99, category: "cameras", brand: "SmartLiving",
    images: [
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/8f87a3fb-d66e-4cb8-833b-30bdb6de121b/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/8f87a3fb-d66e-4cb8-833b-30bdb6de121b/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/8f87a3fb-d66e-4cb8-833b-30bdb6de121b/image.png?w=1024&h=1024"
    ],
    rating: 4.6, reviews: 234, inStock: true,
    features: ["1080p HD", "Bewegingsdetectie", "Nachtzicht", "Twee-weg audio"]
  },
  {
    id: "smart-thermostat-wifi",
    name: "Slimme WiFi Thermostaat",
    description: "Programmeerbare thermostaat met app.",
    price: 129.99, category: "thermostaten", brand: "SmartLiving",
    images: [
      "https://images.unsplash.com/photo-1567315219470-eb696a8a9a6d?w=1024&h=1024&fit=crop",
      "https://images.unsplash.com/photo-1567315219470-eb696a8a9a6d?w=1024&h=1024&fit=crop",
      "https://images.unsplash.com/photo-1567315219470-eb696a8a9a6d?w=1024&h=1024&fit=crop"
    ],
    rating: 4.8, reviews: 278, inStock: true, badge: "Top Rated",
    features: ["Programmeerbaar", "30% besparing", "App bediening", "Elegant design"]
  },
  {
    id: "smart-lock-wifi",
    name: "Smart Deurslot met WiFi",
    description: "Open met smartphone of pincode.",
    price: 149.99, originalPrice: 179.99, category: "locks", brand: "SmartLiving",
    images: [
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/08adc7ad-35c3-4b2b-9996-282ddb6c3742/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/08adc7ad-35c3-4b2b-9996-282ddb6c3742/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/08adc7ad-35c3-4b2b-9996-282ddb6c3742/image.png?w=1024&h=1024"
    ],
    rating: 4.4, reviews: 145, inStock: true,
    features: ["WiFi", "Pincode", "Gastcodes", "Past op elk slot"]
  },
  {
    id: "mesh-wifi-system",
    name: "Mesh WiFi Systeem (3-pack)",
    description: "Supersnel WiFi in hele huis.",
    price: 159.99, category: "netwerk", brand: "SmartLiving",
    images: [
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/fbfe524a-e50e-4cb2-adf7-421dfffccee0/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/fbfe524a-e50e-4cb2-adf7-421dfffccee0/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/fbfe524a-e50e-4cb2-adf7-421dfffccee0/image.png?w=1024&h=1024"
    ],
    rating: 4.7, reviews: 167, inStock: true, badge: "Populair",
    features: ["WiFi 6", "3-pack", "500m²", "100+ apparaten"]
  }
];

import { extraProducts } from "./extra-products";

export const products: Product[] = [...baseProducts, ...extraProducts];

export const categories = [
  { id: "all", name: "Alle Producten" },
  { id: "verlichting", name: "Slimme Verlichting" },
  { id: "speakers", name: "Smart Speakers" },
  { id: "cameras", name: "Camera's & Deurbellen" },
  { id: "thermostaten", name: "Thermostaten" },
  { id: "locks", name: "Smart Locks" },
  { id: "netwerk", name: "Netwerk & WiFi" }
];

export const brands = ["Alle Merken", "SmartLiving"];
