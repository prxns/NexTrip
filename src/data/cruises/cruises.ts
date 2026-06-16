export type Cruise = {
  slug: string;
  cruiseLine: string;
  ship: string;
  departurePort: string;
  region: string;
  durationNights: number;
  priceFrom: number;
  rating: number;
  image: string;
  highlights: string[];
  itinerary: string[];
  cabinTypes: string[];
  summary: string;
};

export const cruises: Cruise[] = [
  {
    slug: "icon-of-the-seas-galveston",
    cruiseLine: "Royal Caribbean",
    ship: "Icon of the Seas",
    departurePort: "Galveston, Texas",
    region: "Caribbean",
    durationNights: 7,
    priceFrom: 1299,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "6-, 7-, and 8-night sailings",
      "Perfect Day at CocoCay",
      "Royal Beach Club Cozumel",
      "Largest cruise ship in the world",
    ],
    itinerary: ["Galveston", "Cozumel", "Perfect Day at CocoCay", "Galveston"],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite"],
    summary:
      "Royal Caribbean's Icon Class mega-ship set for Galveston with Caribbean sailings and headline stops like Cozumel and CocoCay.",
  },
  {
    slug: "liberty-of-the-seas-galveston",
    cruiseLine: "Royal Caribbean",
    ship: "Liberty of the Seas",
    departurePort: "Galveston, Texas",
    region: "Western Caribbean",
    durationNights: 5,
    priceFrom: 799,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "4- to 8-night itineraries",
      "Western Caribbean focus",
      "Cozy family-favorite ship",
      "Strong Galveston deployment",
    ],
    itinerary: ["Galveston", "Cozumel", "Costa Maya", "Roatán", "Galveston"],
    cabinTypes: ["Interior", "Ocean View", "Balcony"],
    summary:
      "A Texas-homeported Royal Caribbean option with flexible Western Caribbean sailings from Galveston.",
  },
  {
    slug: "msc-seascape-galveston",
    cruiseLine: "MSC Cruises",
    ship: "MSC Seascape",
    departurePort: "Galveston, Texas",
    region: "Caribbean",
    durationNights: 7,
    priceFrom: 699,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "7-night cruises",
      "MSC Yacht Club",
      "RoboTron thrill ride",
      "Texas homeport expansion",
    ],
    itinerary: ["Galveston", "Cozumel", "Costa Maya", "Galveston"],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Yacht Club Suite"],
    summary:
      "MSC's Texas-sailing option with a modern ship, family amenities, and a strong Caribbean focus.",
  },
  {
    slug: "carnival-celebration-miami",
    cruiseLine: "Carnival Cruise Line",
    ship: "Carnival Celebration",
    departurePort: "Miami, Florida",
    region: "Caribbean",
    durationNights: 7,
    priceFrom: 649,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "Miami homeport",
      "Excel-class flagship",
      "Family-friendly entertainment",
      "Big Caribbean demand",
    ],
    itinerary: ["Miami", "Caribbean ports", "Miami"],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite"],
    summary:
      "A Miami-based Carnival flagship that gives you the classic Caribbean cruise experience from South Florida.",
  },
  {
    slug: "disney-wish-port-canaveral",
    cruiseLine: "Disney Cruise Line",
    ship: "Disney Wish",
    departurePort: "Port Canaveral, Florida",
    region: "Bahamas",
    durationNights: 3,
    priceFrom: 899,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "3- and 4-night sailings",
      "Castaway Cay access",
      "Family-first entertainment",
      "Port Canaveral homeport",
    ],
    itinerary: ["Port Canaveral", "Castaway Cay", "Port Canaveral"],
    cabinTypes: ["Inside", "Oceanview", "Verandah", "Concierge"],
    summary:
      "Disney's current family favorite from Port Canaveral, built around short Bahamas getaways and Disney private island calls.",
  },
  {
    slug: "disney-treasure-port-canaveral",
    cruiseLine: "Disney Cruise Line",
    ship: "Disney Treasure",
    departurePort: "Port Canaveral, Florida",
    region: "Eastern/Western Caribbean",
    durationNights: 7,
    priceFrom: 1399,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "7-night Caribbean voyages",
      "Adventure-themed ship",
      "Disney storytelling at sea",
      "Port Canaveral departures",
    ],
    itinerary: ["Port Canaveral", "Eastern Caribbean", "Western Caribbean"],
    cabinTypes: ["Inside", "Oceanview", "Verandah", "Concierge"],
    summary:
      "Disney's newer large ship operating from Port Canaveral with 7-night Caribbean itineraries.",
  },
  {
    slug: "norwegian-luna-miami",
    cruiseLine: "Norwegian Cruise Line",
    ship: "Norwegian Luna",
    departurePort: "Miami, Florida",
    region: "Bahamas / Caribbean",
    durationNights: 4,
    priceFrom: 749,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "3- to 4-day Bahamas trips",
      "7-day Caribbean itineraries",
      "Modern NCL resort-at-sea feel",
      "Miami-based sailings",
    ],
    itinerary: ["Miami", "Bahamas", "Caribbean", "Miami"],
    cabinTypes: ["Inside", "Ocean View", "Balcony", "Suite"],
    summary:
      "A newer NCL option with short Bahamas escapes and longer Caribbean sailings from Miami.",
  },
  {
    slug: "nieuw-amsterdam-fort-lauderdale",
    cruiseLine: "Holland America Line",
    ship: "Nieuw Amsterdam",
    departurePort: "Fort Lauderdale, Florida",
    region: "Caribbean",
    durationNights: 7,
    priceFrom: 899,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "7-night Fort Lauderdale voyages",
      "Relaxed premium atmosphere",
      "Classic Caribbean route",
      "Great for couples",
    ],
    itinerary: ["Fort Lauderdale", "Caribbean", "Fort Lauderdale"],
    cabinTypes: ["Inside", "Ocean View", "Verandah", "Neptune Suite"],
    summary:
      "A premium, relaxed Caribbean option sailing from Fort Lauderdale.",
  },
  {
    slug: "hero-of-the-seas-miami",
    cruiseLine: "Royal Caribbean",
    ship: "Hero of the Seas",
    departurePort: "Miami, Florida",
    region: "Eastern/Western Caribbean",
    durationNights: 7,
    priceFrom: 1499,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1597536131743-4f4a3d5f4d90?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "Debuts in Miami in 2027",
      "7-night Caribbean cruises",
      "Icon-class innovation",
      "Huge family appeal",
    ],
    itinerary: ["Miami", "Eastern Caribbean", "Western Caribbean"],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite"],
    summary:
      "A future Miami-based Icon-class ship planned for 7-night Eastern and Western Caribbean itineraries.",
  },
];