import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useCurrency } from "../../context/CurrencyContext";
import { cabTypes } from "../../data/Cabs/cabTypes";

type CabType = (typeof cabTypes)[number];

type Coordinates = {
  lat: number;
  lng: number;
};

const LOCATION_PRESETS: Array<{
  aliases: string[];
  coords: Coordinates;
}> = [
  { aliases: ["jfk airport", "jfk", "john f kennedy airport"], coords: { lat: 40.6413, lng: -73.7781 } },
  { aliases: ["laguardia airport", "lga", "lga airport"], coords: { lat: 40.7769, lng: -73.8740 } },
  { aliases: ["newark airport", "ewr", "ewr airport"], coords: { lat: 40.6895, lng: -74.1745 } },
  { aliases: ["new york", "new york city", "nyc", "manhattan", "brooklyn", "queens", "times square"], coords: { lat: 40.7128, lng: -74.0060 } },
  { aliases: ["logan airport", "boston logan", "bos", "boston"], coords: { lat: 42.3656, lng: -71.0096 } },
  { aliases: ["los angeles airport", "lax", "lax airport", "los angeles", "la", "hollywood", "santa monica"], coords: { lat: 34.0522, lng: -118.2437 } },
  { aliases: ["san francisco airport", "sfo", "sfo airport", "san francisco"], coords: { lat: 37.7749, lng: -122.4194 } },
  { aliases: ["ohare airport", "ord", "ord airport", "chicago"], coords: { lat: 41.8781, lng: -87.6298 } },
  { aliases: ["miami airport", "mia", "mia airport", "miami"], coords: { lat: 25.7617, lng: -80.1918 } },
  { aliases: ["mco airport", "orlando airport", "orlando"], coords: { lat: 28.5383, lng: -81.3792 } },
  { aliases: ["atlanta airport", "atl", "atl airport", "atlanta"], coords: { lat: 33.7490, lng: -84.3880 } },
  { aliases: ["dfw airport", "dallas airport", "dallas"], coords: { lat: 32.7767, lng: -96.7970 } },
  { aliases: ["seattle airport", "sea", "sea airport", "seattle"], coords: { lat: 47.6062, lng: -122.3321 } },
  { aliases: ["dca airport", "washington dc", "washington d c", "dc", "d.c.", "washington"], coords: { lat: 38.9072, lng: -77.0369 } },
  { aliases: ["houston", "iah", "iah airport"], coords: { lat: 29.7604, lng: -95.3698 } },
  { aliases: ["las vegas", "las vegas airport", "las", "las airport"], coords: { lat: 36.1699, lng: -115.1398 } },
];

function normalizeLocation(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveCoordinates(value: string): Coordinates | null {
  const normalized = normalizeLocation(value);

  for (const preset of LOCATION_PRESETS) {
    if (preset.aliases.some((alias) => normalized.includes(alias))) {
      return preset.coords;
    }
  }

  return null;
}

function haversineMiles(a: Coordinates, b: Coordinates) {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const earthRadiusMiles = 3958.8;

  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const inner =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return 2 * earthRadiusMiles * Math.asin(Math.sqrt(inner));
}

function estimateRouteDistanceMiles(origin: string, destination: string) {
  const originCoords = resolveCoordinates(origin);
  const destinationCoords = resolveCoordinates(destination);

  if (originCoords && destinationCoords) {
    return Math.max(
      1,
      Math.round(haversineMiles(originCoords, destinationCoords))
    );
  }

  const seed = normalizeLocation(origin).length + normalizeLocation(destination).length;
  return Math.max(8, Math.min(75, Math.round(seed / 4) || 15));
}

function CabsPage() {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [category, setCategory] = useState("All");
  const [routeDistanceMiles, setRouteDistanceMiles] = useState<number | null>(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    document.title = "NextTrip | Cabs";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const categories = ["All", "Economy", "Premium", "XL", "Airport", "Electric"];

  const filteredCabs = useMemo(() => {
    return cabTypes.filter(
      (cab) => category === "All" || cab.category === category
    );
  }, [category]);

  const routeStatusText = isCalculating
    ? "Calculating route..."
    : routeDistanceMiles !== null
      ? `${routeDistanceMiles} miles estimated`
      : "Enter pickup and destination to calculate trip distance";

  const canSearch = from.trim().length > 0 && to.trim().length > 0;

  const handleFindRides = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSearch) return;

    setIsCalculating(true);

    await new Promise((resolve) => setTimeout(resolve, 700));

    const estimatedDistance = estimateRouteDistanceMiles(from, to);
    setRouteDistanceMiles(estimatedDistance);
    setIsCalculating(false);

    document
      .getElementById("cab-results")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSelectRide = (cab: CabType) => {
    const tripDistance = routeDistanceMiles ?? 0;
    const fare = Math.round(cab.baseFare + cab.perMile * tripDistance);

    navigate(
      `/cab-booking?ride=${encodeURIComponent(cab.name)}&from=${encodeURIComponent(
        from.trim()
      )}&to=${encodeURIComponent(to.trim())}&passengers=${encodeURIComponent(
        passengers
      )}&distance=${tripDistance}&fare=${fare}&eta=${cab.etaMinutes}&slug=${cab.slug}`
    );
  };

  const handleResetSearch = () => {
    setFrom("");
    setTo("");
    setPassengers("1");
    setCategory("All");
    setRouteDistanceMiles(null);
  };

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
            Quick city rides, airport pickups, premium cars, XL trips, and electric
            options.
          </p>

          <form
            onSubmit={handleFindRides}
            className="
              mt-14
              rounded-[32px]
              bg-white/95
              p-6
              shadow-2xl
              backdrop-blur-md
            "
          >
            <div className="grid gap-4 md:grid-cols-4">
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

              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-lg font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="5">5 Passengers</option>
                <option value="6">6 Passengers</option>
              </select>

              <button
                type="submit"
                disabled={!canSearch || isCalculating}
                className="
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#2563EB]
                  to-[#14B8A6]
                  text-lg
                  font-bold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  disabled:hover:scale-100
                "
              >
                {isCalculating ? "Calculating..." : "Find Rides"}
              </button>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Enter pickup and destination to calculate the ride fare instantly.
            </p>
          </form>

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

      <section className="py-24" id="cab-results">
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

            <div className="flex flex-col gap-3 rounded-2xl bg-white px-6 py-4 shadow-lg">
              <div>
                <p className="text-lg font-bold text-slate-900">
                  {filteredCabs.length} Ride Types
                </p>
                <p className="mt-1 text-sm text-slate-500">{routeStatusText}</p>
              </div>

              <button
                type="button"
                onClick={handleResetSearch}
                className="
                  rounded-full
                  bg-slate-100
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-slate-700
                "
              >
                Reset Search
              </button>
            </div>
          </div>

          {pageLoading || isCalculating ? (
            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[34px] bg-white shadow-xl animate-pulse"
                >
                  <div className="h-[250px] bg-slate-200" />
                  <div className="p-7 space-y-4">
                    <div className="h-4 w-24 rounded bg-slate-200" />
                    <div className="h-7 w-3/4 rounded bg-slate-200" />
                    <div className="h-4 w-2/3 rounded bg-slate-200" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-10 rounded-2xl bg-slate-200" />
                      <div className="h-10 rounded-2xl bg-slate-200" />
                      <div className="h-10 rounded-2xl bg-slate-200" />
                      <div className="h-10 rounded-2xl bg-slate-200" />
                    </div>
                    <div className="h-10 w-full rounded-2xl bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>
          ) : routeDistanceMiles === null ? (
            <div className="mt-14 rounded-[32px] bg-white p-16 text-center shadow-xl">
              <h3 className="text-4xl font-black text-slate-900">
                Ready to calculate your ride
              </h3>

              <p className="mt-4 text-lg text-slate-500">
                Enter a pickup point and destination to calculate route distance and
                show fares.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {["New York → Boston", "Los Angeles → San Diego", "Miami → Orlando"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="mt-6 rounded-[32px] bg-white px-6 py-4 shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-[3px] text-slate-400">
                  Route Summary
                </p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  {from.trim()} → {to.trim()}
                </h3>
                <p className="mt-1 text-slate-500">
                  {routeDistanceMiles} miles estimated • {passengers} passenger(s)
                </p>
              </div>

              <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {filteredCabs.map((cab) => {
                  const tripDistance = routeDistanceMiles ?? 0;
                  const fare = Math.round(
                    cab.baseFare + cab.perMile * tripDistance
                  );

                  return (
                    <div
                      key={cab.id}
                      className="overflow-hidden rounded-[34px] bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <img
                        src={cab.image}
                        alt={cab.name}
                        className="h-[250px] w-full object-cover"
                      />

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
                          <div className="rounded-2xl bg-slate-100 p-3">
                            Seats: {cab.seats}
                          </div>
                          <div className="rounded-2xl bg-slate-100 p-3">
                            Base: {formatPrice(cab.baseFare)}
                          </div>
                          <div className="rounded-2xl bg-slate-100 p-3">
                            Per Mile: {formatPrice(cab.perMile)}
                          </div>
                          <div className="rounded-2xl bg-slate-100 p-3">
                            Fare: {formatPrice(fare)}
                          </div>
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
                              Estimated fare • Final price may vary
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleSelectRide(cab)}
                          className="mt-8 h-12 w-full rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] font-bold text-white transition-all duration-300 hover:scale-[1.03]"
                        >
                          Select Ride
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default CabsPage;