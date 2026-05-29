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
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1610470832703-95d40c3fad55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://i.pinimg.com/736x/2f/99/81/2f99819385965184efa1d0513eafe8ae.jpg",
      "https://i.pinimg.com/1200x/8b/57/a0/8b57a03d7a98bba6a638800f5b9b72e5.jpg",
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
      "https://i.pinimg.com/1200x/20/23/dd/2023ddc5d87bcaa58030db770d2cddee.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/24/65/dd/2465dd3640b7bd474a9120a3906c45a5.jpg",
      "https://i.pinimg.com/1200x/4c/f8/a5/4cf8a5f94bee49ca04e13cc4799616b2.jpg",
      "https://i.pinimg.com/736x/c5/ce/c1/c5cec1abdf8bda803983bab62eed3c50.jpg",
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
      "https://i.pinimg.com/736x/7a/04/66/7a04666b3e30ce6c32fa5b7978fd12b1.jpg",
    gallery: [
      "https://i.pinimg.com/736x/7a/04/66/7a04666b3e30ce6c32fa5b7978fd12b1.jpg",
      "https://i.pinimg.com/736x/fa/c0/05/fac005c7730d5fb343afdeaf68d72b03.jpg",
      "https://i.pinimg.com/736x/5f/50/36/5f5036be3a8590a0b49d7e8431f5b758.jpg",
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
      "https://i.pinimg.com/1200x/71/a2/6d/71a26d79df435d250d45dfe9578e5202.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/b5/3f/a0/b53fa065a416c13734e591627a30d5f7.jpg",
      "https://i.pinimg.com/1200x/71/a2/6d/71a26d79df435d250d45dfe9578e5202.jpg",
      "https://i.pinimg.com/736x/66/8d/bf/668dbf58f227aeef673d4c42b0d36681.jpg",
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
      "https://images.unsplash.com/photo-1642130204821-74126d1cb88e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1621968175389-f1a0c0692cdc?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1638618164682-12b986ec2a75?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://i.pinimg.com/1200x/ae/f6/f2/aef6f29eb44a8f690a57d9a9b4721208.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/8f/b2/74/8fb274ac5ba8b1a40e017ebf8542933f.jpg",
      "https://i.pinimg.com/1200x/79/9d/cd/799dcd79932d869f3d7c7107f2f6e149.jpg",
      "https://i.pinimg.com/736x/f2/7a/6d/f27a6d83e0a37e4022bb12912c532a0f.jpg",
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
      "https://images.unsplash.com/photo-1647934441921-4ed1e182e4b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://i.pinimg.com/1200x/ea/38/57/ea38574942c0caee7acad80fdc0e8b85.jpg",
      "https://i.pinimg.com/736x/74/d1/0b/74d10bba70db675ee49209cc2c6213fa.jpg",
      "https://i.pinimg.com/1200x/dc/98/96/dc989677db7688099b155e6ee02601b5.jpg",
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
      "https://i.pinimg.com/1200x/4b/87/5e/4b875e7feeeb5e56b1c81ec339af99f7.jpg",
    gallery: [
      "https://i.pinimg.com/736x/2d/1d/e5/2d1de547968fe69bedd7111010026889.jpg",
      "https://i.pinimg.com/736x/75/22/6d/75226d1bce0a5a0ef7138e7e28413f10.jpg",
      "https://i.pinimg.com/736x/f6/34/88/f6348810b28711e690602908ad10eab8.jpg",
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
      "https://i.pinimg.com/1200x/ad/3a/c5/ad3ac586700fcc22330e4b0bbd2ca27e.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/87/32/37/873237fb84e78d62c71561bc105d9646.jpg",
      "https://i.pinimg.com/736x/01/18/f8/0118f8466565cffb9bdf4b43eaf5b7f5.jpg",
      "https://i.pinimg.com/1200x/a9/82/52/a982521804be3023aed4443bf2e2c075.jpg",
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
      "https://i.pinimg.com/1200x/f4/02/e6/f402e6cf051e084fc90ab9c2bc8bc076.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/76/91/be/7691be4783f8b58b26244b5ad60ae4d8.jpg",
      "https://i.pinimg.com/1200x/f4/02/e6/f402e6cf051e084fc90ab9c2bc8bc076.jpg",
      "https://i.pinimg.com/1200x/ac/e1/da/ace1da96aa30a2eae2e038c363da8db6.jpg",
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
      "https://i.pinimg.com/1200x/72/6b/07/726b0737596ba525e9133f5955a05ffb.jpg",
    gallery: [
      "https://i.pinimg.com/736x/54/29/e0/5429e0548b4d7c7bd168995e925f2a61.jpg",
      "https://i.pinimg.com/736x/7d/a3/c8/7da3c8bcd176608dedc2d7d9d274e527.jpg",
      "https://i.pinimg.com/736x/ce/69/5e/ce695e249b3610002194e4a3d7d70e23.jpg",
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