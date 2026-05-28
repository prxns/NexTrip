export type HotelRoom = {
  id: string;
  name: string;
  priceMultiplier: number;
  guests: number;
  bed: string;
  size: string;
};

export type HotelReview = {
  id: string;
  user: string;
  rating: number;
  comment: string;
};

export type Hotel = {
  id: string;
  slug: string;

  name: string;

  city: string;
  state: string;

  pricePerNight: number;

  rating: number;
  reviews: number;

  image: string;

  gallery: string[];

  amenities: string[];

  attractions: string[];

  description: string;

  category: string;

  rooms: HotelRoom[];

  userReviews: HotelReview[];
};

export const hotels: Hotel[] = [
  {
    id: "the-plaza-nyc",

    slug: "the-plaza-nyc",

    name: "The Plaza",

    city: "New York",

    state: "New York",

    pricePerNight: 890,

    rating: 4.9,

    reviews: 3244,

    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070&auto=format&fit=crop",
    ],

    amenities: [
      "Luxury Spa",
      "Central Park View",
      "Fine Dining",
      "Concierge",
      "Fitness Center",
      "Private Suites",
    ],

    attractions: [
      "Central Park",
      "Times Square",
      "Fifth Avenue",
      "Broadway",
    ],

    description:
      "Iconic Manhattan luxury hotel offering elegant suites, world-class hospitality, and unmatched city experiences.",

    category: "Luxury",

    rooms: [
      {
        id: "deluxe-king",

        name: "Deluxe King Room",

        priceMultiplier: 1,

        guests: 2,

        bed: "King Bed",

        size: "42m²",
      },

      {
        id: "executive-suite",

        name: "Executive Suite",

        priceMultiplier: 1.5,

        guests: 4,

        bed: "King Bed + Lounge",

        size: "70m²",
      },

      {
        id: "presidential-suite",

        name: "Presidential Suite",

        priceMultiplier: 2.5,

        guests: 6,

        bed: "2 King Beds",

        size: "150m²",
      },
    ],

    userReviews: [
      {
        id: "1",

        user: "Emma Watson",

        rating: 5,

        comment:
          "One of the most luxurious stays I’ve experienced in New York.",
      },

      {
        id: "2",

        user: "Daniel Brooks",

        rating: 4.9,

        comment:
          "Absolutely stunning interiors and elite service.",
      },
    ],
  },

  {
    id: "four-seasons-miami",

    slug: "four-seasons-miami",

    name: "Four Seasons Miami",

    city: "Miami",

    state: "Florida",

    pricePerNight: 740,

    rating: 4.8,

    reviews: 2140,

    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070&auto=format&fit=crop",
    ],

    amenities: [
      "Infinity Pool",
      "Private Beach",
      "Ocean View",
      "Luxury Spa",
      "Pool Bar",
      "Rooftop Dining",
    ],

    attractions: [
      "Miami Beach",
      "Ocean Drive",
      "Downtown Miami",
      "Luxury Marina",
    ],

    description:
      "Beachfront luxury resort with ocean-view suites, rooftop pools, and unforgettable tropical experiences.",

    category: "Resort",

    rooms: [
      {
        id: "ocean-room",

        name: "Ocean View Room",

        priceMultiplier: 1,

        guests: 2,

        bed: "King Bed",

        size: "48m²",
      },

      {
        id: "premium-suite",

        name: "Premium Ocean Suite",

        priceMultiplier: 1.8,

        guests: 4,

        bed: "King Bed + Lounge",

        size: "92m²",
      },
    ],

    userReviews: [
      {
        id: "1",

        user: "Sophia Miller",

        rating: 5,

        comment:
          "The ocean views and luxury atmosphere were unreal.",
      },
    ],
  },

  {
    id: "bellagio-las-vegas",

    slug: "bellagio-las-vegas",

    name: "Bellagio",

    city: "Las Vegas",

    state: "Nevada",

    pricePerNight: 610,

    rating: 4.7,

    reviews: 4521,

    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2070&auto=format&fit=crop",
    ],

    amenities: [
      "Casino",
      "Luxury Spa",
      "Infinity Pool",
      "Fine Dining",
      "VIP Lounge",
      "Luxury Suites",
    ],

    attractions: [
      "Las Vegas Strip",
      "Luxury Shopping",
      "Fountains Show",
      "Nightlife",
    ],

    description:
      "Legendary Vegas luxury hotel known for premium entertainment, iconic fountains, and elite suites.",

    category: "Resort",

    rooms: [
      {
        id: "deluxe-suite",

        name: "Deluxe Suite",

        priceMultiplier: 1,

        guests: 2,

        bed: "King Bed",

        size: "50m²",
      },

      {
        id: "vip-penthouse",

        name: "VIP Penthouse",

        priceMultiplier: 2.8,

        guests: 6,

        bed: "2 King Beds",

        size: "180m²",
      },
    ],

    userReviews: [
      {
        id: "1",

        user: "Michael Reed",

        rating: 4.9,

        comment:
          "The Vegas luxury experience done perfectly.",
      },
    ],
  },

  {
    id: "ritz-carlton-sf",

    slug: "ritz-carlton-sf",

    name: "Ritz-Carlton San Francisco",

    city: "San Francisco",

    state: "California",

    pricePerNight: 780,

    rating: 4.9,

    reviews: 1630,

    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2070&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
    ],

    amenities: [
      "Bay View",
      "Luxury Spa",
      "Private Dining",
      "Fitness Center",
      "Concierge",
      "Executive Lounge",
    ],

    attractions: [
      "Golden Gate Bridge",
      "Union Square",
      "Pier 39",
      "Bay Area",
    ],

    description:
      "Elegant luxury retreat in the heart of San Francisco with refined suites and exceptional hospitality.",

    category: "Luxury",

    rooms: [
      {
        id: "bay-room",

        name: "Bay View Room",

        priceMultiplier: 1,

        guests: 2,

        bed: "King Bed",

        size: "44m²",
      },

      {
        id: "royal-suite",

        name: "Royal Suite",

        priceMultiplier: 2.1,

        guests: 5,

        bed: "2 King Beds",

        size: "130m²",
      },
    ],

    userReviews: [
      {
        id: "1",

        user: "Olivia Bennett",

        rating: 5,

        comment:
          "Elegant, peaceful, and one of the best luxury stays ever.",
      },
    ],
  },

  {
    id: "beverly-hills-hotel",

    slug: "beverly-hills-hotel",

    name: "The Beverly Hills Hotel",

    city: "Los Angeles",

    state: "California",

    pricePerNight: 860,

    rating: 4.8,

    reviews: 1880,

    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    ],

    amenities: [
      "Private Villas",
      "Luxury Pool",
      "Celebrity Lounge",
      "Fine Dining",
      "Spa",
      "Garden Suites",
    ],

    attractions: [
      "Hollywood",
      "Rodeo Drive",
      "Beverly Hills",
      "Sunset Boulevard",
    ],

    description:
      "Famous luxury escape in Beverly Hills offering elite hospitality, iconic architecture, and celebrity-level experiences.",

    category: "Luxury",

    rooms: [
      {
        id: "garden-suite",

        name: "Garden Suite",

        priceMultiplier: 1,

        guests: 2,

        bed: "King Bed",

        size: "52m²",
      },

      {
        id: "hollywood-penthouse",

        name: "Hollywood Penthouse",

        priceMultiplier: 2.7,

        guests: 6,

        bed: "2 King Beds",

        size: "170m²",
      },
    ],

    userReviews: [
      {
        id: "1",

        user: "Charlotte Green",

        rating: 5,

        comment:
          "Classic Hollywood luxury at its absolute best.",
      },
    ],
  },
];