import AirportSearch from "../search/AirportSearch";
import PassengerSelector from "../search/PassengerSelector";
import TripTypeToggle from "../search/TripTypeToggle";
import CategoryTabs from "./CategoryTabs";

function BookingSearch() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* CATEGORY TABS */}
      <CategoryTabs />

      {/* TRIP TYPE */}
      <div className="mt-6">
        <TripTypeToggle />
      </div>

      {/* SEARCH CONTAINER */}
      <div
        className="
          relative
          mt-6
          rounded-[32px]
          bg-white/95
          p-6
          shadow-2xl
          backdrop-blur-md
          overflow-visible
        "
      >
        {/* SEARCH GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-2
            2xl:grid-cols-4
            items-start
          "
        >
          {/* FROM */}
          <AirportSearch />

          {/* TO */}
          <AirportSearch />

          {/* DEPARTURE */}
          <button
            className="
              min-h-[190px]
              rounded-[28px]
              border
              border-[#E2E8F0]
              bg-white
              p-5
              text-left
              transition-all
              duration-300
              hover:border-[#2563EB]
              hover:shadow-lg
            "
          >
            <p className="text-sm font-medium text-[#64748B]">
              Departure
            </p>

            <h3
              className="
                mt-4
                text-4xl
                font-black
                leading-tight
                text-slate-900
              "
            >
              24 Jun
              <br />
              2026
            </h3>

            <p className="mt-3 text-sm text-[#64748B]">
              Tuesday
            </p>
          </button>

          {/* PASSENGERS */}
          <PassengerSelector />
        </div>

        {/* SEARCH BUTTON */}
        <button
          className="
            mt-7
            h-16
            w-full
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
            hover:scale-[1.01]
            hover:shadow-2xl
            active:scale-[0.99]
          "
        >
          Search Flights
        </button>
      </div>
    </div>
  );
}

export default BookingSearch;