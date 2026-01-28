import { Product } from "./products";

export const extraProducts: Product[] = [
  {
    id: "outdoor-camera",
    name: "Outdoor Beveiligingscamera WiFi",
    description: "Weerbestendige camera met spotlight en nachtzicht.",
    price: 79.99,
    category: "cameras",
    brand: "SmartLiving",
    images: [
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/17364e1a-c3a1-47d5-8a82-0d0287878563/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/17364e1a-c3a1-47d5-8a82-0d0287878563/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/17364e1a-c3a1-47d5-8a82-0d0287878563/image.png?w=1024&h=1024"
    ],
    rating: 4.5, reviews: 198, inStock: true,
    features: ["2K resolutie", "Weerbestendig", "Spotlight", "Nachtzicht"]
  },
  {
    id: "smart-speaker-mini",
    name: "Smart Speaker Mini",
    description: "Compacte speaker met spraakassistent.",
    price: 39.99,
    category: "speakers",
    brand: "SmartLiving",
    images: [
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/454dadb7-43b4-4be2-b80f-4ca3f0e855be/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/454dadb7-43b4-4be2-b80f-4ca3f0e855be/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/454dadb7-43b4-4be2-b80f-4ca3f0e855be/image.png?w=1024&h=1024"
    ],
    rating: 4.3, reviews: 312, inStock: true,
    features: ["Spraakassistent", "Compact formaat", "360° geluid", "Multi-room"]
  },
  {
    id: "led-strip-5m",
    name: "Smart LED Strip 5 Meter",
    description: "Flexibele RGB LED strip met app bediening.",
    price: 29.99,
    originalPrice: 39.99,
    category: "verlichting",
    brand: "SmartLiving",
    images: [
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/17fc878c-dccf-436d-b019-734f8ad862e8/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/17fc878c-dccf-436d-b019-734f8ad862e8/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/17fc878c-dccf-436d-b019-734f8ad862e8/image.png?w=1024&h=1024"
    ],
    rating: 4.4, reviews: 267, inStock: true, badge: "Sale",
    features: ["5 meter", "16 miljoen kleuren", "Knipbaar", "Muziek sync"]
  },
  {
    id: "video-doorbell-pro",
    name: "Video Deurbel Pro 2K",
    description: "Premium deurbel met 2K camera en lokale opslag.",
    price: 119.99,
    category: "cameras",
    brand: "SmartLiving",
    images: [
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/24fcfc33-0262-4aaf-b815-7da568dfbd2f/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/24fcfc33-0262-4aaf-b815-7da568dfbd2f/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/24fcfc33-0262-4aaf-b815-7da568dfbd2f/image.png?w=1024&h=1024"
    ],
    rating: 4.7, reviews: 156, inStock: true, badge: "Premium",
    features: ["2K resolutie", "Lokale opslag", "Gezichtsherkenning", "Pre-roll"]
  },
  {
    id: "premium-speaker",
    name: "Premium Smart Speaker",
    description: "High-end speaker met superieur geluid.",
    price: 149.99,
    category: "speakers",
    brand: "SmartLiving",
    images: [
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/4b4473e3-f8e7-49b0-840e-1f864ae64ea4/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/4b4473e3-f8e7-49b0-840e-1f864ae64ea4/image.png?w=1024&h=1024",
      "https://eu.chat-img.sintra.ai/f9728c88-26b5-4c9d-9aad-be0c86ea1aee/4b4473e3-f8e7-49b0-840e-1f864ae64ea4/image.png?w=1024&h=1024"
    ],
    rating: 4.8, reviews: 89, inStock: true, badge: "Premium",
    features: ["Hi-Fi geluid", "Multi-room", "Spraakassistent", "Dolby Atmos"]
  }
];
