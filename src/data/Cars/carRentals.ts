export type RentalCar = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  year: number;
  category: "Economy" | "SUV" | "Luxury" | "Sports" | "Electric";
  transmission: "Automatic" | "Manual";
  fuelType: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  seats: number;
  luggage: number;
  pricePerDay: number;
  rating: number;
  reviews: number;
  availableIn: string[];
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  policyHighlights: string[];
};

export const rentalCars: RentalCar[] = [
  {
    id: "tesla-model-3",
    slug: "tesla-model-3",
    name: "Tesla Model 3",
    brand: "Tesla",
    year: 2024,
    category: "Electric",
    transmission: "Automatic",
    fuelType: "Electric",
    seats: 5,
    luggage: 2,
    pricePerDay: 89,
    rating: 4.9,
    reviews: 1824,
    availableIn: ["New York", "Los Angeles", "San Francisco", "Miami"],
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A clean, efficient electric sedan for city drives and premium daily rentals.",
    features: ["Autopilot", "Fast Charging", "Premium Audio", "Navigation"],
    policyHighlights: [
      "Free cancellation up to 24 hours before pickup",
      "Full insurance available",
      "No hidden mileage surprises",
    ],
  },
  {
    id: "bmw-5-series",
    slug: "bmw-5-series",
    name: "BMW 5 Series",
    brand: "BMW",
    year: 2024,
    category: "Luxury",
    transmission: "Automatic",
    fuelType: "Hybrid",
    seats: 5,
    luggage: 3,
    pricePerDay: 149,
    rating: 4.8,
    reviews: 1150,
    availableIn: ["New York", "Chicago", "Los Angeles", "Dallas"],
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A refined executive sedan with smooth performance, comfort, and a premium cabin.",
    features: ["Leather Seats", "Adaptive Cruise", "Sunroof", "Apple CarPlay"],
    policyHighlights: [
      "Premium roadside assistance included",
      "Deposit required",
      "Unlimited support for booking changes",
    ],
  },
  {
    id: "mercedes-gle",
    slug: "mercedes-gle",
    name: "Mercedes-Benz GLE",
    brand: "Mercedes-Benz",
    year: 2024,
    category: "SUV",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 7,
    luggage: 4,
    pricePerDay: 179,
    rating: 4.8,
    reviews: 990,
    availableIn: ["Los Angeles", "Miami", "Houston", "Las Vegas"],
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A spacious premium SUV that fits families, luggage, and road-trip comfort perfectly.",
    features: ["Panoramic Roof", "7 Seats", "Premium Sound", "Large Trunk"],
    policyHighlights: [
      "Best for family trips",
      "Child seat add-on available",
      "Premium coverage options",
    ],
  },
  {
    id: "porsche-911",
    slug: "porsche-911",
    name: "Porsche 911 Carrera",
    brand: "Porsche",
    year: 2024,
    category: "Sports",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 2,
    luggage: 1,
    pricePerDay: 349,
    rating: 4.9,
    reviews: 640,
    availableIn: ["Los Angeles", "Miami", "Las Vegas"],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A sharp, iconic sports car for memorable drives and special occasions.",
    features: ["0–60 in 3s", "Sport Mode", "Premium Interior", "Performance Brakes"],
    policyHighlights: [
      "Higher security deposit applies",
      "Mileage cap included",
      "Ideal for weekend rentals",
    ],
  },
  {
    id: "toyota-corolla",
    slug: "toyota-corolla",
    name: "Toyota Corolla",
    brand: "Toyota",
    year: 2024,
    category: "Economy",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    luggage: 2,
    pricePerDay: 49,
    rating: 4.7,
    reviews: 2330,
    availableIn: ["New York", "Chicago", "Dallas", "Atlanta"],
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "Reliable and efficient economy car for city trips, errands, and affordable travel.",
    features: ["Fuel Efficient", "Easy Parking", "Bluetooth", "Air Conditioning"],
    policyHighlights: [
      "Best value rental",
      "Low deposit option",
      "Flexible pickup times",
    ],
  },
  {
    id: "ford-mustang-convertible",
    slug: "ford-mustang-convertible",
    name: "Ford Mustang Convertible",
    brand: "Ford",
    year: 2024,
    category: "Sports",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 4,
    luggage: 2,
    pricePerDay: 219,
    rating: 4.8,
    reviews: 870,
    availableIn: ["Miami", "Los Angeles", "Las Vegas"],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "Open-top performance with a classic American feel for an exciting driving experience.",
    features: ["Convertible", "Sport Exhaust", "Cruise Control", "Premium Seats"],
    policyHighlights: [
      "Great for scenic drives",
      "Weekend special pricing",
      "Limited luggage space",
    ],
  },
  {
    id: "hyundai-ioniq-5",
    slug: "hyundai-ioniq-5",
    name: "Hyundai Ioniq 5",
    brand: "Hyundai",
    year: 2024,
    category: "Electric",
    transmission: "Automatic",
    fuelType: "Electric",
    seats: 5,
    luggage: 3,
    pricePerDay: 99,
    rating: 4.8,
    reviews: 710,
    availableIn: ["San Francisco", "Seattle", "Austin", "Miami"],
    image:
      "https://images.unsplash.com/photo-1626668893632-6f3ff2d2d2b0?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1626668893632-6f3ff2d2d2b0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A futuristic electric SUV with impressive range and a tech-forward cabin.",
    features: ["Rapid Charging", "Lane Assist", "Digital Dash", "Quiet Ride"],
    policyHighlights: [
      "EV charging guide included",
      "Best for city and highway",
      "No fuel charges",
    ],
  },
  {
    id: "jeep-grand-cherokee",
    slug: "jeep-grand-cherokee",
    name: "Jeep Grand Cherokee",
    brand: "Jeep",
    year: 2024,
    category: "SUV",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    luggage: 4,
    pricePerDay: 159,
    rating: 4.7,
    reviews: 980,
    availableIn: ["Denver", "Phoenix", "Dallas", "Orlando"],
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A comfortable SUV for road trips, family travel, and long-distance plans.",
    features: ["All Terrain", "Spacious Cabin", "Advanced Safety", "Large Cargo"],
    policyHighlights: [
      "Excellent road-trip choice",
      "Child seat compatible",
      "Comfort-first cabin",
    ],
  },
  {
    id: "audi-a6",
    slug: "audi-a6",
    name: "Audi A6",
    brand: "Audi",
    year: 2024,
    category: "Luxury",
    transmission: "Automatic",
    fuelType: "Hybrid",
    seats: 5,
    luggage: 3,
    pricePerDay: 159,
    rating: 4.8,
    reviews: 1022,
    availableIn: ["New York", "Boston", "Chicago", "San Francisco"],
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562519819-016930ada31b?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A smooth executive sedan with a premium feel and understated design.",
    features: ["Virtual Cockpit", "Premium Leather", "Ambient Lighting", "Cruise Control"],
    policyHighlights: [
      "Ideal for business trips",
      "High-end comfort",
      "Flexible extension option",
    ],
  },
  {
    id: "range-rover-velar",
    slug: "range-rover-velar",
    name: "Range Rover Velar",
    brand: "Land Rover",
    year: 2024,
    category: "Luxury",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    luggage: 4,
    pricePerDay: 239,
    rating: 4.9,
    reviews: 760,
    availableIn: ["Los Angeles", "Miami", "New York", "Houston"],
    image:
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A bold luxury SUV with commanding road presence and premium comfort.",
    features: ["4x4", "Panoramic Roof", "Off-Road Mode", "Premium Sound"],
    policyHighlights: [
      "Perfect for premium travel",
      "Strong road presence",
      "Higher class vehicle category",
    ],
  },
  {
    id: "honda-accord",
    slug: "honda-accord",
    name: "Honda Accord",
    brand: "Honda",
    year: 2024,
    category: "Economy",
    transmission: "Automatic",
    fuelType: "Hybrid",
    seats: 5,
    luggage: 3,
    pricePerDay: 58,
    rating: 4.7,
    reviews: 1560,
    availableIn: ["Atlanta", "Dallas", "Chicago", "Orlando"],
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "Comfortable, efficient, and dependable for daily rentals and city travel.",
    features: ["Great Mileage", "Comfort Seats", "Bluetooth", "Rear Camera"],
    policyHighlights: [
      "Excellent daily rental",
      "Low fuel costs",
      "Easy pickup and return",
    ],
  },
];