import { useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { rentalCars } from "../../data/Cars/carRentals";

function CarRentalDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const car = useMemo(
    () => rentalCars.find((item) => item.slug === slug),
    [slug]
  );

  const [pickupLocation, setPickupLocation] = useState(
    searchParams.get("pickupLocation") || "New York"
  );
  const [pickupDate, setPickupDate] = useState(
    searchParams.get("pickupDate") || ""
  );
  const [returnDate, setReturnDate] = useState(
    searchParams.get("returnDate") || ""
  );
  const [driverAge, setDriverAge] = useState(
    searchParams.get("driverAge") || "30"
  );

  const rentalDays = useMemo(() => {
    if (!pickupDate || !returnDate) return 1;
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diff = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diff > 0 ? diff : 1;
  }, [pickupDate, returnDate]);

  const updateParam = (next: Record<string, string>) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(next).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });
    setSearchParams(params, { replace: true });
  };

  if (!car) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <h1 className="text-5xl font-black text-slate-900">Car Not Found</h1>
      </div>
    );
  }

  const totalPrice = car.pricePerDay * rentalDays;
  const taxes = Math.round(totalPrice * 0.12);
  const serviceFee = 49;
  const total = totalPrice + taxes + serviceFee;

  const handleCheckout = () => {
    const params = new URLSearchParams({
      slug: car.slug,
      car: car.name,
      brand: car.brand,
      image: car.image,
      pickupLocation,
      pickupDate,
      returnDate,
      driverAge,
      days: String(rentalDays),
      price: String(car.pricePerDay),
      total: String(total),
    });

    navigate(`/car-rental-checkout?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#14B8A6]">
            Car Rental Details
          </p>

          <h1 className="mt-5 max-w-5xl text-6xl font-black leading-tight text-slate-900 md:text-8xl">
            {car.name}
          </h1>

          <p className="mt-6 text-xl text-slate-500">
            {car.brand} • {car.year} • {car.category}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <div className="rounded-[28px] bg-white p-5 shadow-xl min-w-[230px]">
              <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
                Pickup Location
              </p>
              <input
                value={pickupLocation}
                onChange={(e) => {
                  setPickupLocation(e.target.value);
                  updateParam({ pickupLocation: e.target.value });
                }}
                className="mt-3 w-full border-none bg-transparent text-2xl font-black text-slate-900 outline-none"
              />
            </div>

            <div className="rounded-[28px] bg-white p-5 shadow-xl min-w-[230px]">
              <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
                Pickup Date
              </p>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => {
                  setPickupDate(e.target.value);
                  updateParam({ pickupDate: e.target.value });
                }}
                className="mt-3 w-full border-none bg-transparent text-2xl font-black text-slate-900 outline-none"
              />
            </div>

            <div className="rounded-[28px] bg-white p-5 shadow-xl min-w-[230px]">
              <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
                Return Date
              </p>
              <input
                type="date"
                min={pickupDate}
                value={returnDate}
                onChange={(e) => {
                  setReturnDate(e.target.value);
                  updateParam({ returnDate: e.target.value });
                }}
                className="mt-3 w-full border-none bg-transparent text-2xl font-black text-slate-900 outline-none"
              />
            </div>

            <div className="rounded-[28px] bg-white p-5 shadow-xl min-w-[180px]">
              <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
                Driver Age
              </p>
              <select
                value={driverAge}
                onChange={(e) => {
                  setDriverAge(e.target.value);
                  updateParam({ driverAge: e.target.value });
                }}
                className="mt-3 w-full border-none bg-transparent text-2xl font-black text-slate-900 outline-none"
              >
                {Array.from({ length: 43 }, (_, i) => i + 18).map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {car.gallery.map((img) => (
              <img
                key={img}
                src={img}
                alt={car.name}
                className="h-[260px] w-full rounded-[30px] object-cover shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 xl:grid-cols-[1fr_420px]">
          <div>
            <div className="rounded-[36px] bg-white p-10 shadow-xl">
              <p className="text-lg leading-9 text-slate-600">
                {car.description}
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {car.features.map((feature) => (
                  <div key={feature} className="rounded-2xl bg-slate-100 p-4 font-bold text-slate-900">
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm font-semibold text-slate-400">Transmission</p>
                  <p className="mt-1 text-lg font-black text-slate-900">{car.transmission}</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm font-semibold text-slate-400">Fuel</p>
                  <p className="mt-1 text-lg font-black text-slate-900">{car.fuelType}</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm font-semibold text-slate-400">Seats</p>
                  <p className="mt-1 text-lg font-black text-slate-900">{car.seats}</p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-black text-slate-900">Rental Policies</h2>
                <div className="mt-6 space-y-4">
                  {car.policyHighlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-6 overflow-hidden rounded-[36px] bg-[#020B2D] p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
              <p className="text-sm font-bold uppercase tracking-[5px] text-white/50">
                Booking Summary
              </p>

              <h3 className="mt-6 text-4xl font-black leading-tight">{car.name}</h3>
              <p className="mt-3 text-lg text-white/60">
                {car.brand} • {car.category}
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Pickup</span>
                  <span className="font-bold">{pickupLocation}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Pickup Date</span>
                  <span className="font-bold">{pickupDate || "Select Date"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Return Date</span>
                  <span className="font-bold">{returnDate || "Select Date"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Days</span>
                  <span className="font-bold">{rentalDays}</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Price / Day</span>
                  <span className="font-bold">${car.pricePerDay}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Taxes</span>
                  <span className="font-bold">${taxes}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Service Fee</span>
                  <span className="font-bold">${serviceFee}</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">Total</span>
                  <span className="text-5xl font-black">${total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-10 h-16 w-full rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Reserve Car
              </button>

              <p className="mt-4 text-center text-sm text-white/50">
                Free cancellation available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarRentalDetailsPage;