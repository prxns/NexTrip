export type CabType = {
  id: string;
  slug: string;
  name: string;
  category: "Economy" | "Premium" | "XL" | "Airport" | "Electric";
  seats: number;
  etaMinutes: number;
  baseFare: number;
  perMile: number;
  image: string;
  features: string[];
  description: string;
};

export const cabTypes: CabType[] = [
  {
    id: "cab-economy",
    slug: "economy",
    name: "Economy Ride",
    category: "Economy",
    seats: 4,
    etaMinutes: 4,
    baseFare: 5,
    perMile: 1.4,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    features: ["Fast Pickup", "Best Value", "AC Ride"],
    description:
      "Affordable everyday rides for quick city travel.",
  },
  {
    id: "cab-premium",
    slug: "premium",
    name: "Premium Comfort",
    category: "Premium",
    seats: 4,
    etaMinutes: 5,
    baseFare: 9,
    perMile: 2.2,
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop",
    features: ["Clean Interior", "Priority Pickup", "Extra Comfort"],
    description:
      "A smoother, upgraded ride for business or leisure.",
  },
  {
    id: "cab-xl",
    slug: "xl",
    name: "XL Family Ride",
    category: "XL",
    seats: 6,
    etaMinutes: 6,
    baseFare: 10,
    perMile: 2.8,
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
    features: ["6 Seats", "Extra Luggage", "Family Friendly"],
    description:
      "Best for groups, airport luggage, and family travel.",
  },
  {
    id: "cab-airport",
    slug: "airport",
    name: "Airport Transfer",
    category: "Airport",
    seats: 4,
    etaMinutes: 8,
    baseFare: 12,
    perMile: 2.0,
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1600&auto=format&fit=crop",
    features: ["Flight Tracking", "Pickup Assistance", "Airport Priority"],
    description:
      "Reliable airport drop and pickup with travel-friendly timing.",
  },
  {
    id: "cab-electric",
    slug: "electric",
    name: "Electric Cab",
    category: "Electric",
    seats: 4,
    etaMinutes: 5,
    baseFare: 8,
    perMile: 1.9,
    image:
      "https://images.unsplash.com/photo-1626668893632-6f3ff2d2d2b0?q=80&w=1600&auto=format&fit=crop",
    features: ["Quiet Ride", "Eco Friendly", "Low Emissions"],
    description:
      "A clean and modern ride with a quieter cabin.",
  },
];