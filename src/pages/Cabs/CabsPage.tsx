import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCurrency } from "../../context/CurrencyContext";

import { cabTypes } from "../../data/Cabs/cabTypes";

function CabsPage() {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [distance, setDistance] = useState(18);
  const [category, setCategory] = useState("All");

  const categories = ["All", "Economy", "Premium", "XL", "Airport", "Electric"];

  const filteredCabs = useMemo(() => {
    return cabTypes.filter(
      (cab) => category === "All" || cab.category === category
    );
  }, [category]);

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="relative overflow-hidden bg-black py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[5px] text-[#14B8A6]">
            Cabs
          </p>

          <h1 className="mt-6 max-w-4xl text-6xl font-black leading-tight text-white md:text-8xl">
            Book a ride in seconds
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            Quick city rides, airport pickups, premium cars, XL trips, and electric options.
          </p>

          <div className="mt-14 grid gap-4 rounded-[32px] bg-white/95 p-6 shadow-2xl backdrop-blur-md md:grid-cols-4">
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Pickup from"
              className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-lg font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
            />
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Drop to"
              className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-lg font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
            />
            <input
              type="number"
              min={1}
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              placeholder="Distance (mi)"
              className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-lg font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
            />
            <button className="h-16 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02]">
              Find Rides
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  category === item
                    ? "border-transparent bg-white text-slate-900"
                    : "border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-slate-900"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[4px] text-[#14B8A6]">
                Ride Options
              </p>
              <h2 className="mt-4 text-5xl font-black text-slate-900">
                Choose your ride
              </h2>
            </div>

            <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">
              <p className="text-lg font-bold text-slate-900">
                {filteredCabs.length} Ride Types
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Estimated distance: {distance} miles
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredCabs.map((cab) => {
              const fare = Math.round(cab.baseFare + cab.perMile * distance);

              return (
                <div
                  key={cab.id}
                  className="overflow-hidden rounded-[34px] bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <img src={cab.image} alt={cab.name} className="h-[250px] w-full object-cover" />

                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[3px] text-[#14B8A6]">
                          {cab.category}
                        </p>
                        <h3 className="mt-3 text-3xl font-black text-slate-900">
                          {cab.name}
                        </h3>
                        <p className="mt-2 text-slate-500">
                          {cab.description}
                        </p>
                      </div>
                      <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
                        ETA {cab.etaMinutes}m
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
                      <div className="rounded-2xl bg-slate-100 p-3">Seats: {cab.seats}</div>
                      <div className="rounded-2xl bg-slate-100 p-3">Base: {formatPrice(cab.baseFare)}</div>
                      <div className="rounded-2xl bg-slate-100 p-3">Per mile: {formatPrice(cab.perMile)}</div>
                      <div className="rounded-2xl bg-slate-100 p-3">Fare: {formatPrice(fare)}</div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {cab.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <p className="text-sm text-slate-400">
                          Estimated Trip Cost
                        </p>

                        <h4 className="text-4xl font-black text-slate-900">
                          {formatPrice(fare)}
                        </h4>

                        <p className="text-sm text-slate-400">
                          Based on {distance} miles
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        navigate(
                          `/cab-booking?ride=${encodeURIComponent(cab.name)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&distance=${distance}&fare=${fare}&eta=${cab.etaMinutes}&slug=${cab.slug}`
                        )
                      }
                      className="mt-8 h-12 w-full rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] font-bold text-white transition-all duration-300 hover:scale-[1.03]"
                    >
                      Select Ride
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CabsPage;