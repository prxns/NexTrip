import type { Hotel } from "../../data/hotels/hotels";

type HotelDetailsModalProps = {
  open: boolean;
  hotel: Hotel | null;
  onClose: () => void;
};

function HotelDetailsModal({ open, hotel, onClose }: HotelDetailsModalProps) {
  if (!open || !hotel) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[40px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
      >
        <div
          className="h-[340px] bg-cover bg-center"
          style={{ backgroundImage: `url('${hotel.image}')` }}
        />

        <div className="p-8 md:p-12">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[4px] text-[#14B8A6]">
                Luxury Hotel
              </p>
              <h2 className="mt-4 text-5xl font-black text-slate-900">
                {hotel.name}
              </h2>
              <p className="mt-4 text-lg text-slate-500">
                {hotel.city}, {hotel.state}
              </p>
            </div>

            <button
              onClick={onClose}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-slate-700"
            >
              ✕
            </button>
          </div>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {hotel.description}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {hotel.amenities.map((amenity) => (
              <div key={amenity} className="rounded-3xl bg-slate-100 p-6">
                <h4 className="text-xl font-black text-slate-900">
                  {amenity}
                </h4>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 rounded-[32px] bg-slate-900 p-8 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-white/60">Starting from</p>
              <h3 className="mt-2 text-5xl font-black">${hotel.pricePerNight}</h3>
              <p className="mt-2 text-white/70">per night</p>
            </div>

            <button className="h-16 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] px-10 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.03]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetailsModal;