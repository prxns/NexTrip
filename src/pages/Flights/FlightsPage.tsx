import { useSearchParams } from "react-router-dom";

import FlightCard from "../../components/flights/FlightCard";

import { flights } from "../../data/flights/flights";

function FlightsPage() {
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");

  return (
    <div className="min-h-screen bg-slate-100 pb-20">
      {/* HEADER */}
      <div
        className="
          bg-gradient-to-r
          from-[#2563EB]
          to-[#14B8A6]

          px-6
          py-14

          text-white
        "
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-white/70">
            Flight Search Results
          </p>

          <h1 className="mt-4 text-5xl font-black">
            {from} → {to}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto mt-10 grid max-w-7xl gap-8 px-6 xl:grid-cols-[320px_1fr]">
        {/* FILTERS */}
        <div
          className="
            h-fit
            rounded-[32px]
            bg-white
            p-6
            shadow-lg
          "
        >
          <h2 className="text-2xl font-black text-slate-900">
            Filters
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Stops
              </p>

              <div className="mt-3 space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  <span>Non-stop</span>
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  <span>1 Stop</span>
                </label>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Price Range
              </p>

              <input
                type="range"
                min="100"
                max="1000"
                className="mt-4 w-full"
              />
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div className="space-y-6">
          {flights.map((flight) => (
            <FlightCard
              key={flight.id}
              airline={flight.airline}
              airlineCode={flight.airlineCode}
              from={flight.from}
              to={flight.to}
              departureTime={flight.departureTime}
              arrivalTime={flight.arrivalTime}
              duration={flight.duration}
              stops={flight.stops}
              price={flight.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlightsPage;