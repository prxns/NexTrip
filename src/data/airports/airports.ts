import type { Airport } from "../../types/airport.types";

export const airports: Airport[] = [
  {
    id: "jfk",
    code: "JFK",
    name: "John F. Kennedy International Airport",
    city: "New York",
    state: "New York",
    country: "United States",
    terminals: 6,
    passengersPerYear: "62 Million",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
  {
    id: "lax",
    code: "LAX",
    name: "Los Angeles International Airport",
    city: "Los Angeles",
    state: "California",
    country: "United States",
    terminals: 9,
    passengersPerYear: "75 Million",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
  },
  {
    id: "ord",
    code: "ORD",
    name: "O'Hare International Airport",
    city: "Chicago",
    state: "Illinois",
    country: "United States",
    terminals: 4,
    passengersPerYear: "73 Million",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738",
  },
  {
    id: "mia",
    code: "MIA",
    name: "Miami International Airport",
    city: "Miami",
    state: "Florida",
    country: "United States",
    terminals: 3,
    passengersPerYear: "52 Million",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206",
  },
  {
    id: "las",
    code: "LAS",
    name: "Harry Reid International Airport",
    city: "Las Vegas",
    state: "Nevada",
    country: "United States",
    terminals: 2,
    passengersPerYear: "58 Million",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];