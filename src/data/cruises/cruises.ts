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
  gallery: string[];

  summary: string;

  itinerary: string[];
  highlights: string[];

  cabinTypes: string[];

  passengerCapacity: string;
  crewMembers: string;
  launched: string;
  tonnage: string;

  perfectFor: string[];

  dining: string[];
  entertainment: string[];

  portsDescription: string;
};

const img = {
  ocean1:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  ocean2:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
  ocean3:
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=1600&auto=format&fit=crop",
  ship1:
    "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?q=80&w=1600&auto=format&fit=crop",
  ship2:
    "https://images.unsplash.com/photo-1578922746465-3a80a228f223?q=80&w=1600&auto=format&fit=crop",
  ship3:
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
  ship4:
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
  ship5:
    "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1600&auto=format&fit=crop",
  ship6:
    "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1600&auto=format&fit=crop",
  ship7:
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
  ship8:
    "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1600&auto=format&fit=crop",
};

export const cruises: Cruise[] = [
  {
    slug: "icon-of-the-seas-miami",
    cruiseLine: "Royal Caribbean",
    ship: "Icon of the Seas",
    departurePort: "Miami, Florida",
    region: "Eastern / Western Caribbean",
    durationNights: 7,
    priceFrom: 1299,
    rating: 4.9,
    image: img.ship1,
    gallery: [img.ship1, img.ocean1, img.ocean3],
    summary:
      "The largest cruise ship in the world combines high-energy water attractions, family neighborhoods, and Caribbean sailings from Miami.",
    itinerary: ["Miami", "Perfect Day at CocoCay", "St. Thomas", "St. Maarten", "Miami"],
    highlights: [
      "Largest cruise ship in the world",
      "Perfect Day at CocoCay",
      "Category 6 waterpark",
      "Great for families and groups",
    ],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite"],
    passengerCapacity: "7,600",
    crewMembers: "2,350",
    launched: "2024",
    tonnage: "248,663 GT",
    perfectFor: ["Families", "Multi-generation trips", "Adventure seekers", "Luxury travelers"],
    dining: ["Empire Supper Club", "AquaDome Market", "Coastal Kitchen", "Izumi Hibachi"],
    entertainment: ["AquaTheater", "Category 6", "Absolute Zero", "Broadway-style shows"],
    portsDescription:
      "This sailing mixes the Mexican and Western Caribbean with Royal Caribbean's private island experience at CocoCay, making it a high-energy beach-and-adventure itinerary.",
  },
  {
    slug: "star-of-the-seas-port-canaveral",
    cruiseLine: "Royal Caribbean",
    ship: "Star of the Seas",
    departurePort: "Port Canaveral, Florida",
    region: "Bahamas / Caribbean",
    durationNights: 7,
    priceFrom: 1399,
    rating: 4.9,
    image: img.ship2,
    gallery: [img.ship2, img.ocean2, img.ocean1],
    summary:
      "Royal Caribbean's Icon Class sister ship brings the same headline-grabbing family experiences to Port Canaveral.",
    itinerary: ["Port Canaveral", "CocoCay", "Bahamas", "Caribbean", "Port Canaveral"],
    highlights: [
      "Icon Class experience",
      "Bahamas and Caribbean sailings",
      "Port Canaveral departures",
      "Big-ticket family cruise",
    ],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite"],
    passengerCapacity: "5,610",
    crewMembers: "2,350",
    launched: "2025",
    tonnage: "250,000 GT",
    perfectFor: ["Families", "First-time cruisers", "Thrill seekers", "Big ship fans"],
    dining: ["AquaDome Market", "Izumi", "Chops Grille", "Surfside Eatery"],
    entertainment: ["AquaDome shows", "Waterpark thrills", "Ice arena", "Live entertainment"],
    portsDescription:
      "The Port Canaveral departure pairs short beach breaks with Bahamian ports and private-island style shore days, a very strong seller for U.S. cruise buyers.",
  },
  {
    slug: "carnival-celebration-miami",
    cruiseLine: "Carnival Cruise Line",
    ship: "Carnival Celebration",
    departurePort: "Miami, Florida",
    region: "Caribbean",
    durationNights: 6,
    priceFrom: 649,
    rating: 4.7,
    image: img.ship3,
    gallery: [img.ship3, img.ocean2, img.ocean3],
    summary:
      "A Miami-based flagship with a lively, social atmosphere and flexible Caribbean itineraries.",
    itinerary: ["Miami", "Cozumel", "Costa Maya", "Miami"],
    highlights: [
      "Excel-class flagship",
      "Miami homeport",
      "Family-friendly entertainment",
      "Strong Caribbean demand",
    ],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite"],
    passengerCapacity: "6,500",
    crewMembers: "1,735",
    launched: "2022",
    tonnage: "183,521 GT",
    perfectFor: ["Families", "Groups of friends", "Budget-conscious travelers", "Casual cruisers"],
    dining: ["Bonsai Teppanyaki", "Guy's Burger Joint", "Emeril's Bistro", "Rudi's Seafood"],
    entertainment: ["Playlist Productions", "Bolt coaster", "Comedy club", "Deck parties"],
    portsDescription:
      "A classic South Florida cruise with warm-water ports, an easy departure, and lots of onboard activity from day one.",
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
    image: img.ship4,
    gallery: [img.ship4, img.ocean1, img.ocean3],
    summary:
      "Disney's family favorite delivers short Bahamas escapes with private-island magic and signature Disney storytelling.",
    itinerary: ["Port Canaveral", "Castaway Cay", "Port Canaveral"],
    highlights: [
      "Short Bahamas sailings",
      "Castaway Cay access",
      "Family-first entertainment",
      "Port Canaveral homeport",
    ],
    cabinTypes: ["Inside", "Oceanview", "Verandah", "Concierge"],
    passengerCapacity: "4,000",
    crewMembers: "1,555",
    launched: "2022",
    tonnage: "144,000 GT",
    perfectFor: ["Families with kids", "Disney fans", "Short getaways", "First-time cruisers"],
    dining: ["Arendelle: A Frozen Dining Adventure", "1923", "Worlds of Marvel", "Marceline Market"],
    entertainment: ["Broadway-style shows", "AquaMouse", "Kids clubs", "Character experiences"],
    portsDescription:
      "The sailing keeps things simple and polished: a quick ocean escape, Disney island time, and a modern Port Canaveral departure.",
  },
  {
    slug: "disney-treasure-port-canaveral",
    cruiseLine: "Disney Cruise Line",
    ship: "Disney Treasure",
    departurePort: "Port Canaveral, Florida",
    region: "Eastern / Western Caribbean",
    durationNights: 7,
    priceFrom: 1399,
    rating: 4.9,
    image: img.ship5,
    gallery: [img.ship5, img.ocean2, img.ocean3],
    summary:
      "Disney Treasure brings adventure-themed design and longer Caribbean itineraries from Port Canaveral.",
    itinerary: ["Port Canaveral", "Eastern Caribbean", "Western Caribbean", "Port Canaveral"],
    highlights: [
      "7-night Caribbean voyages",
      "Adventure-themed ship",
      "Port Canaveral departures",
      "Disney storytelling at sea",
    ],
    cabinTypes: ["Inside", "Oceanview", "Verandah", "Concierge"],
    passengerCapacity: "4,000",
    crewMembers: "1,555",
    launched: "2024",
    tonnage: "144,000 GT",
    perfectFor: ["Families", "Disney regulars", "Luxury short-list buyers", "Vacation planners"],
    dining: ["Plaza de Coco", "1923", "Worlds of Marvel", "Marceline Market"],
    entertainment: ["Stage shows", "Themed lounges", "Poolside movies", "Kids clubs"],
    portsDescription:
      "A strong fit for guests who want a longer Disney cruise with a mix of Eastern and Western Caribbean ports out of Port Canaveral.",
  },
  {
    slug: "msc-seascape-galveston",
    cruiseLine: "MSC Cruises",
    ship: "MSC Seascape",
    departurePort: "Galveston, Texas",
    region: "Western Caribbean",
    durationNights: 7,
    priceFrom: 699,
    rating: 4.6,
    image: img.ship6,
    gallery: [img.ship6, img.ocean1, img.ocean2],
    summary:
      "MSC's Texas deployment brings modern styling, family attractions, and Western Caribbean itineraries from Galveston.",
    itinerary: ["Galveston", "Costa Maya", "Cozumel", "Roatán", "Galveston"],
    highlights: [
      "Galveston homeport",
      "Western Caribbean routes",
      "MSC Yacht Club",
      "Modern family spaces",
    ],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Yacht Club Suite"],
    passengerCapacity: "5,877",
    crewMembers: "1,648",
    launched: "2022",
    tonnage: "169,400 GT",
    perfectFor: ["Value seekers", "Families", "Texas travelers", "Luxury buyers"],
    dining: ["Butcher's Cut", "Hola! Tacos & Cantina", "Ocean Cay Restaurant", "Marketplace Buffet"],
    entertainment: ["Robotron", "Live shows", "Waterfront promenade", "Family activities"],
    portsDescription:
      "A Texas-friendly itinerary with easy access to Mexico and Honduras, balancing beach days with a big-ship onboard experience.",
  },
  {
    slug: "celebrity-xcel-fort-lauderdale",
    cruiseLine: "Celebrity Cruises",
    ship: "Celebrity Xcel",
    departurePort: "Fort Lauderdale, Florida",
    region: "Caribbean",
    durationNights: 7,
    priceFrom: 1199,
    rating: 4.8,
    image: img.ship7,
    gallery: [img.ship7, img.ocean3, img.ocean1],
    summary:
      "Celebrity's newest Edge-class ship targets a more premium audience with a stylish Fort Lauderdale departure.",
    itinerary: ["Fort Lauderdale", "Caribbean", "Fort Lauderdale"],
    highlights: [
      "Premium Edge-class feel",
      "Fort Lauderdale homeport",
      "Elegant modern design",
      "Great for couples",
    ],
    cabinTypes: ["Inside", "Ocean View", "Veranda", "AquaClass", "Suite"],
    passengerCapacity: "3,260",
    crewMembers: "1,416",
    launched: "2025",
    tonnage: "141,000 GT",
    perfectFor: ["Couples", "Premium travelers", "Food lovers", "Relaxed vacations"],
    dining: ["Le Voyage", "Raw on 5", "Fine Cut Steakhouse", "Luminae"],
    entertainment: ["Live theater", "Resort deck events", "Spa experiences", "Nightlife"],
    portsDescription:
      "A refined Caribbean sailing from Fort Lauderdale with a more upscale onboard feel and easy access to the Florida coast.",
  },
  {
    slug: "legend-of-the-seas-fort-lauderdale",
    cruiseLine: "Royal Caribbean",
    ship: "Legend of the Seas",
    departurePort: "Fort Lauderdale, Florida",
    region: "Western Caribbean",
    durationNights: 7,
    priceFrom: 1499,
    rating: 4.9,
    image: img.ship8,
    gallery: [img.ship8, img.ocean2, img.ocean3],
    summary:
      "The third Icon-class Royal Caribbean ship is planned for Fort Lauderdale with Western Caribbean sailings.",
    itinerary: ["Fort Lauderdale", "Western Caribbean", "CocoCay", "Fort Lauderdale"],
    highlights: [
      "Icon-class ship",
      "Fort Lauderdale deployment",
      "Western Caribbean sailings",
      "Family-forward flagship",
    ],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite"],
    passengerCapacity: "5,610",
    crewMembers: "2,350",
    launched: "2026",
    tonnage: "250,000 GT",
    perfectFor: ["Families", "Big ship fans", "Adventure travelers", "Luxury seekers"],
    dining: ["AquaDome Market", "Izumi", "Chops Grille", "Surfside Bites"],
    entertainment: ["Waterpark thrills", "Live shows", "AquaDome", "Family neighborhoods"],
    portsDescription:
      "A premium Fort Lauderdale sailing that leans into the Icon-class mix of thrills, dining, and Caribbean shore time.",
  },
  {
    slug: "utopia-of-the-seas-port-canaveral",
    cruiseLine: "Royal Caribbean",
    ship: "Utopia of the Seas",
    departurePort: "Port Canaveral, Florida",
    region: "Bahamas",
    durationNights: 4,
    priceFrom: 999,
    rating: 4.8,
    image: img.ocean1,
    gallery: [img.ocean1, img.ship1, img.ship2],
    summary:
      "A short-break Oasis-class sailing built for easy Bahamas vacations out of Port Canaveral.",
    itinerary: ["Port Canaveral", "Nassau", "CocoCay", "Port Canaveral"],
    highlights: [
      "Short Bahamas cruises",
      "Port Canaveral homeport",
      "Perfect Day at CocoCay",
      "Energy-packed itinerary",
    ],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite"],
    passengerCapacity: "5,668",
    crewMembers: "2,300",
    launched: "2024",
    tonnage: "236,857 GT",
    perfectFor: ["Long-weekend travelers", "Families", "First-timers", "Short escapes"],
    dining: ["Chops Grille", "Izumi", "Windjammer", "The Mason Jar"],
    entertainment: ["AquaTheater", "FlowRider", "Live music", "Deck parties"],
    portsDescription:
      "A compact, easy-to-book Bahamas cruise that trades long sailing time for maximum onboard fun and quick beach stops.",
  },
];