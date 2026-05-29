import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import FlightCard from "../../components/flights/FlightCard";
import FlightCardSkeleton from "../../components/flights/FlightCardSkeleton";
import FlightFilters from "../../components/flights/FlightFilters";

import { flights } from "../../data/flights/flights";

function FlightsPage() {
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from") || "JFK";
  const to = searchParams.get("to") || "LAX";

  const [selectedStops, setSelectedStops] = useState("all");
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedSort, setSelectedSort] = useState("price-low");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `NextTrip | Flights ${from} → ${to}`;
  }, [from, to]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const filteredFlights = useMemo(() => {
    let filtered = [...flights];

    filtered = filtered.filter((flight) => flight.price <= maxPrice);

    if (selectedStops === "non-stop") {
      filtered = filtered.filter((flight) => flight.stops === 0);
    }

    if (selectedStops === "1-stop") {
      filtered = filtered.filter((flight) => flight.stops === 1);
    }

    if (selectedSort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (selectedSort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (selectedSort === "duration-low") {
      filtered.sort((a, b) => a.duration - b.duration);
    }

    return filtered;
  }, [maxPrice, selectedStops, selectedSort]);

  const handleResetFilters = () => {
    setSelectedStops("all");
    setMaxPrice(2000);
    setSelectedSort("price-low");
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-20">
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-r
          from-[#2563EB]
          via-[#1D4ED8]
          to-[#14B8A6]
          px-6
          py-16
          text-white
        "
      >
        <div
          className="
            absolute
            right-[-120px]
            top-[-120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-white/10
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[5px] text-white/70">
            Flight Search Results
          </p>

          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            {from} → {to}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Discover flexible flights, comfortable travel experiences, and the best
            fares for your next journey.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-6">
        <div className="grid gap-8 xl:grid-cols-[320px_1fr]">
          <div className="xl:sticky xl:top-6 xl:h-fit">
            <FlightFilters
              selectedStops={selectedStops}
              setSelectedStops={setSelectedStops}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
            />
          </div>

          <div>
            <div
              className="
                mb-8
                flex
                flex-col
                gap-4
                rounded-[32px]
                bg-white
                p-6
                shadow-lg
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div>
                <h2 className="text-3xl font-black text-slate-900">
                  {filteredFlights.length} Flights Found
                </h2>

                <p className="mt-2 text-slate-500">
                  Showing premium fares and best available flights.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div
                  className="
                    rounded-2xl
                    bg-slate-100
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-slate-600
                  "
                >
                  Updated just now
                </div>

                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-slate-900
                    transition-all
                    duration-300
                    hover:bg-slate-50
                  "
                >
                  Reset Filters
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <FlightCardSkeleton key={index} />
                ))
              ) : filteredFlights.length === 0 ? (
                <div
                  className="
                    rounded-[32px]
                    bg-white
                    p-16
                    text-center
                    shadow-xl
                  "
                >
                  <h3 className="text-4xl font-black text-slate-900">
                    No Flights Found
                  </h3>

                  <p className="mt-4 text-lg text-slate-500">
                    Try adjusting your filters or reset them to see more options.
                  </p>

                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="
                      mt-8
                      h-12
                      rounded-2xl
                      bg-gradient-to-r
                      from-[#2563EB]
                      to-[#14B8A6]
                      px-6
                      font-bold
                      text-white
                    "
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                filteredFlights.map((flight) => (
                  <FlightCard
                    key={flight.id}
                    airline={flight.airline}
                    airlineCode={flight.airlineCode}
                    airlineLogo={flight.airlineLogo}
                    from={flight.from}
                    to={flight.to}
                    departureTime={flight.departureTime}
                    arrivalTime={flight.arrivalTime}
                    duration={flight.duration}
                    stops={flight.stops}
                    price={flight.price}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FlightsPage;