export type Hotel = {
  id: string;
  name: string;
  city: string;
  state: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
  description: string;
  category: string;
};

export const hotels: Hotel[] = [
  {
    id: "grand-horizon-miami",
    name: "Grand Horizon Resort",
    city: "Miami",
    state: "Florida",
    pricePerNight: 420,
    rating: 4.9,
    reviews: 1824,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop",
    amenities: ["Ocean View", "Pool", "Spa", "Breakfast"],
    description:
      "Luxury beachfront stay with premium service, private cabanas, and world-class dining.",
    category: "Resort",
  },
  {
    id: "skyline-villas-nyc",
    name: "Skyline Villas",
    city: "New York",
    state: "New York",
    pricePerNight: 560,
    rating: 4.8,
    reviews: 946,
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb21044?q=80&w=1600&auto=format&fit=crop",
    amenities: ["City View", "Gym", "Concierge", "Wi-Fi"],
    description:
      "Premium city stay with elegant interiors, fast access to Manhattan, and skyline views.",
    category: "Boutique",
  },
  {
    id: "coastal-escape-la",
    name: "Coastal Escape Hotel",
    city: "Los Angeles",
    state: "California",
    pricePerNight: 390,
    rating: 4.7,
    reviews: 1310,
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1600&auto=format&fit=crop",
    amenities: ["Pool", "Parking", "Breakfast", "Balcony"],
    description:
      "A stylish stay near the beach with modern rooms and premium hospitality.",
    category: "Hotel",
  },
  {
    id: "desert-luxe-vegas",
    name: "Desert Luxe Resort",
    city: "Las Vegas",
    state: "Nevada",
    pricePerNight: 340,
    rating: 4.6,
    reviews: 1055,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop",
    amenities: ["Casino", "Pool", "Bar", "Spa"],
    description:
      "Premium Vegas resort experience with nightlife, entertainment, and luxury suites.",
    category: "Resort",
  },
  {
    id: "bay-view-sf",
    name: "Bay View Stays",
    city: "San Francisco",
    state: "California",
    pricePerNight: 475,
    rating: 4.8,
    reviews: 812,
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1600&auto=format&fit=crop",
    amenities: ["Bay View", "Gym", "Room Service", "Wi-Fi"],
    description:
      "Upscale stay with bay-side views, premium dining, and easy access to the city.",
    category: "Luxury",
  },
  {
    id: "classic-downtown-chicago",
    name: "Classic Downtown Hotel",
    city: "Chicago",
    state: "Illinois",
    pricePerNight: 310,
    rating: 4.5,
    reviews: 677,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    amenities: ["Downtown", "Breakfast", "Gym", "Wi-Fi"],
    description:
      "Comfortable and classy downtown stay with excellent service and business-friendly amenities.",
    category: "Business",
  },
];