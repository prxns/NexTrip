import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import FlightCard from "../../components/flights/FlightCard";
import FlightCardSkeleton from "../../components/flights/FlightCardSkeleton";

import { flights } from "../../data/flights/flights";

function FlightsPage() {
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");

  /* FILTER STATES */
  const [nonStopOnly, setNonStopOnly] =
    useState(false);

  const [maxPrice, setMaxPrice] =
    useState(1000);

  const [sortBy, setSortBy] =
    useState("price-low");

  /* LOADING STATE */
  const [loading, setLoading] =
    useState(true);

  /* FAKE API DELAY */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  /* FILTER + SORT */
  const filteredFlights = useMemo(() => {
    let updatedFlights = [...flights];

    // NON STOP FILTER
    if (nonStopOnly) {
      updatedFlights =
        updatedFlights.filter(
          (flight) => flight.stops === 0
        );
    }

    // PRICE FILTER
    updatedFlights =
      updatedFlights.filter(
        (flight) => flight.price <= maxPrice
      );

    // SORTING
    switch (sortBy) {
      case "price-low":
        updatedFlights.sort(
          (a, b) => a.price - b.price
        );
        break;

      case "price-high":
        updatedFlights.sort(
          (a, b) => b.price - a.price
        );
        break;

      case "duration":
        updatedFlights.sort(
          (a, b) => a.duration - b.duration
        );
        break;

      default:
        break;
    }

    return updatedFlights;
  }, [nonStopOnly, maxPrice, sortBy]);

  return (
    <div className="min-h-screen bg-slate-100 pb-20">
      {/* HERO */}
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
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[4px]
              text-white/70
            "
          >
            Flight Search Results
          </p>

          <h1 className="mt-4 text-5xl font-black">
            {from} → {to}
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          mx-auto
          mt-10
          grid
          max-w-7xl
          gap-8
          px-6

          xl:grid-cols-[320px_1fr]
        "
      >
        {/* SIDEBAR */}
        <div
          className="
            sticky
            top-6
            h-fit

            rounded-[32px]
            bg-white
            p-6

            shadow-lg
          "
        >
          <h2
            className="
              text-2xl
              font-black
              text-slate-900
            "
          >
            Filters
          </h2>

          {/* STOPS */}
          <div className="mt-8">
            <p
              className="
                text-sm
                font-semibold
                text-slate-500
              "
            >
              Stops
            </p>

            <label className="mt-4 flex items-center gap-3">
              <input
                type="checkbox"
                checked={nonStopOnly}
                onChange={(e) =>
                  setNonStopOnly(
                    e.target.checked
                  )
                }
              />

              <span className="font-medium">
                Non-stop only
              </span>
            </label>
          </div>

          {/* PRICE */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <p
                className="
                  text-sm
                  font-semibold
                  text-slate-500
                "
              >
                Max Price
              </p>

              <p className="font-bold text-slate-900">
                ${maxPrice}
              </p>
            </div>

            <input
              type="range"
              min="100"
              max="1000"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(
                  Number(e.target.value)
                )
              }
              className="mt-5 w-full"
            />
          </div>

          {/* SORT */}
          <div className="mt-10">
            <p
              className="
                text-sm
                font-semibold
                text-slate-500
              "
            >
              Sort By
            </p>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="
                mt-4
                h-14
                w-full

                rounded-2xl
                border
                border-slate-200

                px-4

                font-semibold
                outline-none

                focus:border-[#2563EB]
              "
            >
              <option value="price-low">
                Lowest Price
              </option>

              <option value="price-high">
                Highest Price
              </option>

              <option value="duration">
                Shortest Duration
              </option>
            </select>
          </div>
        </div>

        {/* RESULTS */}
        <div>
          {/* TOP BAR */}
          <div className="mb-6 flex items-center justify-between">
            <h2
              className="
                text-3xl
                font-black
                text-slate-900
              "
            >
              {filteredFlights.length} Flights Found
            </h2>

            <p className="font-medium text-slate-500">
              Showing best available fares
            </p>
          </div>

          {/* FLIGHT CARDS */}
          <div className="space-y-6">
            {loading ? (
              Array.from({
                length: 4,
              }).map((_, index) => (
                <FlightCardSkeleton
                  key={index}
                />
              ))
            ) : (
              filteredFlights.map((flight) => (
                <FlightCard
                  key={flight.id}
                  airline={flight.airline}
                  airlineCode={
                    flight.airlineCode
                  }
                  airlineLogo={
                    flight.airlineLogo
                  }
                  from={flight.from}
                  to={flight.to}
                  departureTime={
                    flight.departureTime
                  }
                  arrivalTime={
                    flight.arrivalTime
                  }
                  duration={flight.duration}
                  stops={flight.stops}
                  price={flight.price}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightsPage;