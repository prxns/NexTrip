import AirportSearch from "../search/AirportSearch";
import PassengerSelector from "../search/PassengerSelector";
import CategoryTabs from "./CategoryTabs";

function BookingSearch() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <CategoryTabs />

      <div
        className="
          mt-6
          rounded-[32px]
          bg-white
          p-6
          shadow-xl
        "
      >
        {/* SEARCH GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            xl:grid-cols-4
            items-start
          "
        >
          {/* FROM */}
          <AirportSearch />

          {/* TO */}
          <AirportSearch />

          {/* DATE */}
          <div
            className="
              min-h-[190px]
              rounded-[24px]
              border
              border-[#E2E8F0]
              bg-white
              p-5
            "
          >
            <p className="text-sm font-medium text-[#64748B]">
              Departure
            </p>

            <h3 className="mt-3 text-4xl font-bold text-slate-900">
              24 Jun 2026
            </h3>

            <p className="mt-2 text-sm text-[#64748B]">
              Tuesday
            </p>
          </div>

          {/* PASSENGERS */}
          <PassengerSelector />
        </div>

        {/* BUTTON */}
        <button
          className="
            mt-6
            h-16
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-[#2563EB]
            to-[#14B8A6]
            text-lg
            font-bold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.01]
          "
        >
          Search Flights
        </button>
      </div>
    </div>
  );
}

export default BookingSearch;