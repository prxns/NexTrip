import type { Hotel } from "../../data/hotels/hotels";

type HotelCardProps = {
  hotel: Hotel;
  onViewDetails: (hotel: Hotel) => void;
};

function HotelCard({ hotel, onViewDetails }: HotelCardProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-[32px]
        bg-white
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div
        className="h-[280px] bg-cover bg-center"
        style={{ backgroundImage: `url('${hotel.image}')` }}
      />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900">
              {hotel.name}
            </h3>
            <p className="mt-2 text-slate-500">
              {hotel.city}, {hotel.state}
            </p>
          </div>

          <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
            {hotel.rating}★
          </div>
        </div>

        <p className="mt-5 line-clamp-3 text-slate-600">
          {hotel.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {hotel.amenities.slice(0, 4).map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Starting from</p>
            <h4 className="text-3xl font-black text-slate-900">
              ${hotel.pricePerNight}
            </h4>
            <p className="text-sm text-slate-400">per night</p>
          </div>

          <button
            onClick={() => onViewDetails(hotel)}
            className="
              h-12
              rounded-2xl
              bg-gradient-to-r
              from-[#2563EB]
              to-[#14B8A6]
              px-6
              font-bold
              text-white
              transition-all
              duration-300
              hover:scale-[1.03]
            "
          >
            View Hotel
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;