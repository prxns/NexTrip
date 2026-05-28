export interface Hotel {
  id: string;
  name: string;
  city: string;
  state: string;
  pricePerNight: number;
  rating: number;
  image: string;
  amenities: string[];
}