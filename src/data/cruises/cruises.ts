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
    "https://i.pinimg.com/1200x/b8/38/82/b83882bca2ffa3bcdd33d88130465200.jpg",
  ocean3:
    "https://i.pinimg.com/736x/a4/b0/49/a4b0492d4156a4b246c273ac4a452c97.jpg",
  ship1:
    "https://i.pinimg.com/1200x/fc/36/0c/fc360c2894a14af7481f4d1aba03107a.jpg",
  ship2:
    "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/star/asset/star-of-the-seas-aerial-bow-angle-evening-crop.jpg?$676x610$",
  ship3:
    "https://cruiseoverload.com/wp-content/uploads/2026/01/utopia-1023x1536.jpg",
  ship4:
    "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/wonder/wonder-of-the-seas-cruise-ship-aerial-aft.jpg?$676x610$",
  ship5:
    "https://crew-center.com/sites/default/files/styles/ship_teaser_image/public/carnival_celebration_cruise_ship.jpg.webp?itok=pf3rQEDc",
  ship6:
    "https://static.wixstatic.com/media/61152b_b4866c9ad1514ebdb1aa873c3f4abd24~mv2.jpg/v1/fill/w_628,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0812_JPG.jpg",
  ship7:
    "https://i0.wp.com/disneyaddicts.com/wp-content/uploads/2024/12/IMG_5063.jpeg?fit=1536%2C1024&ssl=1",
  ship8:
    "https://cruisemaven.com/wp-content/uploads/2022/04/MSC-SEASCAPE-at-Sea-1536x691.webp",
  ship9:
    "https://i.pinimg.com/1200x/f6/d4/1f/f6d41fc5f5a2ad74dfeca904f3d4d39b.jpg",
  ship10:
    "https://cruisefever.net/wp-content/uploads/2023/12/Carnival-Jubilee-is-officially-joins-the-Carnival-Cruise-Line-fleet-scaled.jpg",
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
      "The Port Canaveral departure pairs short beach breaks with Bahamian ports and private-island style shore days, a strong fit for cruise buyers who want a modern flagship from Central Florida.",
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
    image: img.ship3,
    gallery: [img.ship3, img.ocean1, img.ocean2],
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
      "A compact Bahamas cruise that trades long sailing time for maximum onboard fun and quick beach stops.",
  },
  {
    slug: "wonder-of-the-seas-miami",
    cruiseLine: "Royal Caribbean",
    ship: "Wonder of the Seas",
    departurePort: "Miami, Florida",
    region: "Eastern / Western Caribbean",
    durationNights: 7,
    priceFrom: 1099,
    rating: 4.8,
    image: img.ship4,
    gallery: [img.ship4, img.ocean3, img.ocean1],
    summary:
      "A Miami-based Oasis Class favorite with a big-resort feel and well-balanced Caribbean itineraries.",
    itinerary: ["Miami", "CocoCay", "Caribbean", "Miami"],
    highlights: [
      "Oasis Class experience",
      "Miami departures",
      "Private island stop",
      "Great for couples and families",
    ],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite"],
    passengerCapacity: "5,734",
    crewMembers: "2,300",
    launched: "2022",
    tonnage: "236,857 GT",
    perfectFor: ["Families", "Couples", "First-time cruisers", "Big ship fans"],
    dining: ["150 Central Park", "Chops Grille", "Giovanni's Italian Kitchen", "Hooked Seafood"],
    entertainment: ["AquaTheater", "Ice skating", "Live nightlife", "Broadway-style shows"],
    portsDescription:
      "This sailing keeps the cruise easy to plan with Miami embarkation and a mix of Caribbean sea days and island calls.",
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
    image: img.ship5,
    gallery: [img.ship5, img.ocean2, img.ocean3],
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
    image: img.ship6,
    gallery: [img.ship6, img.ocean1, img.ocean3],
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
    image: img.ship7,
    gallery: [img.ship7, img.ocean2, img.ocean3],
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
    slug: "msc-seascape-miami",
    cruiseLine: "MSC Cruises",
    ship: "MSC Seascape",
    departurePort: "Miami, Florida",
    region: "Caribbean",
    durationNights: 7,
    priceFrom: 699,
    rating: 4.6,
    image: img.ship8,
    gallery: [img.ship8, img.ocean1, img.ocean2],
    summary:
      "MSC's Miami deployment brings modern styling, family attractions, and Caribbean itineraries from South Florida.",
    itinerary: ["Miami", "Cozumel", "Costa Maya", "Miami"],
    highlights: [
      "Miami homeport",
      "Caribbean routes",
      "MSC Yacht Club",
      "Modern family spaces",
    ],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Yacht Club Suite"],
    passengerCapacity: "5,877",
    crewMembers: "1,648",
    launched: "2022",
    tonnage: "169,400 GT",
    perfectFor: ["Value seekers", "Families", "Miami travelers", "Luxury buyers"],
    dining: ["Butcher's Cut", "Hola! Tacos & Cantina", "Ocean Cay Restaurant", "Marketplace Buffet"],
    entertainment: ["Robotron", "Live shows", "Waterfront promenade", "Family activities"],
    portsDescription:
      "A South Florida itinerary with easy access to Mexico and a big-ship onboard experience that feels modern and active.",
  },
  {
    slug: "celebrity-ascent-fort-lauderdale",
    cruiseLine: "Celebrity Cruises",
    ship: "Celebrity Ascent",
    departurePort: "Fort Lauderdale, Florida",
    region: "Caribbean",
    durationNights: 7,
    priceFrom: 1199,
    rating: 4.8,
    image: img.ship9,
    gallery: [img.ship9, img.ocean2, img.ocean3],
    summary:
      "Celebrity's Edge Class ship targets a more premium audience with a stylish Fort Lauderdale departure.",
    itinerary: ["Fort Lauderdale", "Caribbean", "Fort Lauderdale"],
    highlights: [
      "Premium Edge-class feel",
      "Fort Lauderdale homeport",
      "Elegant modern design",
      "Great for couples",
    ],
    cabinTypes: ["Inside", "Ocean View", "Veranda", "Infinite Veranda", "Suite"],
    passengerCapacity: "3,260",
    crewMembers: "1,416",
    launched: "2023",
    tonnage: "141,420 GT",
    perfectFor: ["Couples", "Premium travelers", "Food lovers", "Relaxed vacations"],
    dining: ["Le Voyage", "Raw on 5", "Fine Cut Steakhouse", "Eden Restaurant"],
    entertainment: ["Live theater", "Resort deck events", "Spa experiences", "Nightlife"],
    portsDescription:
      "A refined Caribbean sailing from Fort Lauderdale with a more upscale onboard feel and easy access to the Florida coast.",
  },
  {
    slug: "carnival-jubilee-galveston",
    cruiseLine: "Carnival Cruise Line",
    ship: "Carnival Jubilee",
    departurePort: "Galveston, Texas",
    region: "Western Caribbean",
    durationNights: 7,
    priceFrom: 729,
    rating: 4.7,
    image: img.ship10,
    gallery: [img.ship10, img.ocean1, img.ocean2],
    summary:
      "Carnival's Texas flagship brings a lively family cruise experience to Galveston with easy Western Caribbean itineraries.",
    itinerary: ["Galveston", "Cozumel", "Costa Maya", "Roatán", "Galveston"],
    highlights: [
      "Galveston homeport",
      "Western Caribbean routes",
      "Family entertainment",
      "Big Carnival atmosphere",
    ],
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite"],
    passengerCapacity: "5,374",
    crewMembers: "1,735",
    launched: "2023",
    tonnage: "183,521 GT",
    perfectFor: ["Families", "Groups of friends", "Value-conscious travelers", "Casual cruisers"],
    dining: ["Big Chicken", "Guy's Burger Joint", "Bonsai Teppanyaki", "Emeril's Bistro"],
    entertainment: ["Bolt coaster", "Playlist Productions", "Comedy club", "Deck parties"],
    portsDescription:
      "A Texas-friendly sailing that blends Mexico and Honduras stops with a lively onboard scene and a straightforward Galveston departure.",
  },
];