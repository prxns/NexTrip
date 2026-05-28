import { useMemo, useRef, useState } from "react";
import { airports } from "../../data/airports/airports";

function AirportSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const blurTimeoutRef = useRef<number | null>(null);

  const filteredAirports = useMemo(() => {
    const search = query.trim().toLowerCase();

    // DEFAULT POPULAR AIRPORTS
    if (!search) {
      return airports.slice(0, 8);
    }

    // SEARCH FILTER
    return airports
      .filter((airport) => {
        const searchableText =
          `${airport.city} ${airport.code} ${airport.name} ${airport.state}`.toLowerCase();

        return searchableText.includes(search);
      })
      .slice(0, 12);
  }, [query]);

  const handleSelectAirport = (
    city: string,
    code: string
  ) => {
    setQuery(`${city} (${code})`);
    setFocused(false);
  };

  return (
    <div className="relative z-50 w-full">
      {/* INPUT CARD */}
      <div
        className="
          rounded-[28px]
          border
          border-[#E2E8F0]
          bg-white
          p-5
          transition-all
          duration-200
          hover:border-[#2563EB]
          focus-within:border-[#2563EB]
          focus-within:shadow-xl
        "
      >
        <p className="text-sm font-medium text-[#64748B]">
          Airport
        </p>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (blurTimeoutRef.current) {
              clearTimeout(blurTimeoutRef.current);
            }

            setFocused(true);
          }}
          onBlur={() => {
            blurTimeoutRef.current = window.setTimeout(() => {
              setFocused(false);
            }, 150);
          }}
          placeholder="Search airport or city"
          className="
            mt-3
            w-full
            bg-transparent
            text-[32px]
            font-black
            leading-none
            text-slate-900
            outline-none
            placeholder:text-slate-300
          "
        />

        <p className="mt-3 text-sm text-[#64748B]">
          Search by city, airport name, or code
        </p>
      </div>

      {/* DROPDOWN */}
      {focused && (
        <div
          className="
            absolute
            left-0
            right-0
            top-[calc(100%+14px)]
            z-[999]
            max-h-[340px]
            overflow-y-auto
            rounded-[24px]
            border
            border-slate-200
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
          "
        >
          {filteredAirports.length > 0 ? (
            filteredAirports.map((airport) => (
              <button
                key={airport.code}
                type="button"
                onMouseDown={() =>
                  handleSelectAirport(
                    airport.city,
                    airport.code
                  )
                }
                className="
                  w-full
                  border-b
                  border-slate-100
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-200
                  hover:bg-slate-50
                  last:border-b-0
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h4
                      className="
                        text-lg
                        font-bold
                        text-slate-900
                      "
                    >
                      {airport.city} ({airport.code})
                    </h4>

                    <p
                      className="
                        mt-1
                        line-clamp-2
                        text-sm
                        leading-6
                        text-slate-500
                      "
                    >
                      {airport.name}
                    </p>
                  </div>

                  <span
                    className="
                      shrink-0
                      rounded-xl
                      bg-slate-100
                      px-3
                      py-2
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    {airport.state}
                  </span>
                </div>
              </button>
            ))
          ) : (
            <div
              className="
                px-6
                py-8
                text-center
                text-sm
                font-medium
                text-slate-500
              "
            >
              No airports found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AirportSearch;