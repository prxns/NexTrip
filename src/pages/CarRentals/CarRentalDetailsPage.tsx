import { useMemo, useState } from "react";
import { useCurrency } from "../../context/CurrencyContext";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { rentalCars } from "../../data/Cars/carRentals";

function CarRentalDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const [searchParams, setSearchParams] = useSearchParams();

  const car = useMemo(
    () => rentalCars.find((item) => item.slug === slug),
    [slug]
  );

  const [pickupLocation, setPickupLocation] = useState(
    searchParams.get("pickupLocation") || ""
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
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
        <h1 className="text-3xl font-black text-slate-900 sm:text-5xl">
          Car Not Found
        </h1>
      </div>
    );
  }

  const totalPrice = car.pricePerDay * rentalDays;
  const taxes = Math.round(totalPrice * 0.12);
  const serviceFee = 20;
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
    <div className="min-h-screen bg-slate-100 pb-16 sm:pb-24">
      <section className="relative overflow-hidden py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[4px] text-[#14B8A6] sm:text-sm">
            Car Rental Details
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-5xl md:text-6xl lg:text-8xl">
            {car.name}
          </h1>

          <p className="mt-4 text-base text-slate-500 sm:mt-6 sm:text-lg md:text-xl">
            {car.brand} • {car.year} • {car.category}
          </p>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[24px] bg-white p-4 shadow-xl sm:rounded-[28px] sm:p-5 min-w-0">
              <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400 sm:text-sm">
                Pickup Location
              </p>
              <input
                value={pickupLocation}
                onChange={(e) => {
                  setPickupLocation(e.target.value);
                  updateParam({ pickupLocation: e.target.value });
                }}
                className="
                  mt-3 w-full border-none bg-transparent
                  text-lg font-black text-slate-900 outline-none
                  sm:text-2xl
                "
              />
            </div>

            <div className="rounded-[24px] bg-white p-4 shadow-xl sm:rounded-[28px] sm:p-5 min-w-0">
              <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400 sm:text-sm">
                Pickup Date
              </p>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => {
                  setPickupDate(e.target.value);
                  updateParam({ pickupDate: e.target.value });
                }}
                className="
                  mt-3 w-full border-none bg-transparent
                  text-lg font-black text-slate-900 outline-none
                  sm:text-2xl
                "
              />
            </div>

            <div className="rounded-[24px] bg-white p-4 shadow-xl sm:rounded-[28px] sm:p-5 min-w-0">
              <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400 sm:text-sm">
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
                className="
                  mt-3 w-full border-none bg-transparent
                  text-lg font-black text-slate-900 outline-none
                  sm:text-2xl
                "
              />
            </div>

            <div className="rounded-[24px] bg-white p-4 shadow-xl sm:rounded-[28px] sm:p-5 min-w-0">
              <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400 sm:text-sm">
                Driver Age
              </p>
              <select
                value={driverAge}
                onChange={(e) => {
                  setDriverAge(e.target.value);
                  updateParam({ driverAge: e.target.value });
                }}
                className="
                  mt-3 w-full border-none bg-transparent
                  text-lg font-black text-slate-900 outline-none
                  sm:text-2xl
                "
              >
                {Array.from({ length: 43 }, (_, i) => i + 18).map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3">
            {car.gallery.map((img) => (
              <img
                key={img}
                src={img}
                alt={car.name}
                className="h-48 w-full rounded-[24px] object-cover shadow-xl sm:h-[220px] sm:rounded-[30px] lg:h-[260px]"
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 sm:px-6 sm:pb-16 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_420px]">
          <div className="min-w-0">
            <div className="rounded-[28px] bg-white p-5 shadow-xl sm:rounded-[36px] sm:p-8 lg:p-10">
              <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                {car.description}
              </p>

              <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">
                {car.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl bg-slate-100 p-4 font-bold text-slate-900"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm font-semibold text-slate-400">
                    Transmission
                  </p>
                  <p className="mt-1 text-lg font-black text-slate-900">
                    {car.transmission}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm font-semibold text-slate-400">Fuel</p>
                  <p className="mt-1 text-lg font-black text-slate-900">
                    {car.fuelType}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm font-semibold text-slate-400">Seats</p>
                  <p className="mt-1 text-lg font-black text-slate-900">
                    {car.seats}
                  </p>
                </div>
              </div>

              <div className="mt-10 sm:mt-12">
                <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                  Rental Policies
                </h2>
                <div className="mt-5 space-y-4 sm:mt-6">
                  {car.policyHighlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 sm:p-5"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="rounded-[28px] bg-[#020B2D] p-5 text-white shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:rounded-[36px] sm:p-8 xl:sticky xl:top-6">
              <p className="text-xs font-bold uppercase tracking-[5px] text-white/50 sm:text-sm">
                Booking Summary
              </p>

              <h3 className="mt-5 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl">
                {car.name}
              </h3>
              <p className="mt-2 text-base text-white/60 sm:mt-3 sm:text-lg">
                {car.brand} • {car.category}
              </p>

              <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
                <SummaryRow label="Pickup" value={pickupLocation} />
                <SummaryRow
                  label="Pickup Date"
                  value={pickupDate || "Select Date"}
                />
                <SummaryRow
                  label="Return Date"
                  value={returnDate || "Select Date"}
                />
                <SummaryRow label="Days" value={String(rentalDays)} />

                <div className="h-px bg-white/10" />

                <SummaryRow
                  label="Price / Day"
                  value={formatPrice(car.pricePerDay)}
                />
                <SummaryRow label="Taxes" value={formatPrice(taxes)} />
                <SummaryRow
                  label="Service Fee"
                  value={formatPrice(serviceFee)}
                />

                <div className="h-px bg-white/10" />

                <div className="flex items-end justify-between gap-4">
                  <span className="text-2xl font-bold sm:text-2xl">Total</span>
                  <span className="text-4xl font-black sm:text-5xl">
                    {formatPrice(total)}
                  </span>
                </div>

                <p className="mt-2 text-right text-xs text-white/50 sm:text-sm">
                  Taxes and fees included
                </p>
              </div>

              <button
                onClick={handleCheckout}
                className="
                  mt-8 h-14 w-full rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6]
                  text-base font-bold text-white shadow-xl transition-all duration-300
                  hover:scale-[1.02]
                  sm:mt-10 sm:h-16 sm:text-lg
                "
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

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-white/60 sm:text-base">{label}</span>
      <span className="text-right text-sm font-bold sm:text-base">{value}</span>
    </div>
  );
}

export default CarRentalDetailsPage;