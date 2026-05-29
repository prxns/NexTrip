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
      "https://images.unsplash.com/photo-1657872737697-737a2d123ef2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://i.pinimg.com/1200x/20/23/dd/2023ddc5d87bcaa58030db770d2cddee.jpg",
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
      "https://i.pinimg.com/1200x/fd/ff/2b/fdff2b56c13c75865cacd4d008dad1e6.jpg",
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
      "https://i.pinimg.com/736x/22/23/62/222362c6bcb170899036201f90320e06.jpg",
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
      "https://images.unsplash.com/photo-1610470832703-95d40c3fad55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Quiet Ride", "Eco Friendly", "Low Emissions"],
    description:
      "A clean and modern ride with a quieter cabin.",
  },
];