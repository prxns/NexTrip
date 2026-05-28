type FlightFiltersProps = {
  selectedStops: string;

  setSelectedStops: (
    value: string
  ) => void;

  maxPrice: number;

  setMaxPrice: (
    value: number
  ) => void;

  selectedSort: string;

  setSelectedSort: (
    value: string
  ) => void;
};

function FlightFilters({
  selectedStops,
  setSelectedStops,

  maxPrice,
  setMaxPrice,

  selectedSort,
  setSelectedSort,
}: FlightFiltersProps) {
  return (
    <div
      className="
        rounded-[32px]
        bg-white
        p-8
        shadow-xl
      "
    >
      <h2 className="text-3xl font-black text-slate-900">
        Filters
      </h2>

      {/* SORT */}
      <div className="mt-10">
        <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
          Sort By
        </p>

        <select
          value={selectedSort}
          onChange={(e) =>
            setSelectedSort(e.target.value)
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
            text-slate-700

            outline-none

            focus:border-[#2563EB]
          "
        >
          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="duration-low">
            Fastest Flight
          </option>
        </select>
      </div>

      {/* STOPS */}
      <div className="mt-10">
        <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
          Stops
        </p>

        <div className="mt-5 space-y-4">
          {[
            "all",
            "non-stop",
            "1-stop",
          ].map((item) => (
            <button
              key={item}
              onClick={() =>
                setSelectedStops(item)
              }
              className={`
                flex
                h-12
                w-full
                items-center
                justify-center

                rounded-2xl

                text-sm
                font-bold

                transition-all
                duration-300

                ${
                  selectedStops === item
                    ? `
                      bg-gradient-to-r
                      from-[#2563EB]
                      to-[#14B8A6]

                      text-white
                    `
                    : `
                      bg-slate-100
                      text-slate-700

                      hover:bg-slate-200
                    `
                }
              `}
            >
              {item === "all"
                ? "All Flights"
                : item === "non-stop"
                ? "Non-stop"
                : "1 Stop"}
            </button>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
            Max Price
          </p>

          <p className="text-lg font-black text-slate-900">
            ${maxPrice}
          </p>
        </div>

        <input
          type="range"
          min={100}
          max={2000}
          step={50}
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Number(e.target.value))
          }
          className="mt-5 w-full"
        />
      </div>
    </div>
  );
}

export default FlightFilters;