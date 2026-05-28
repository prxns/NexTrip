import AirportSearch from "../search/AirportSearch";
import PassengerSelector from "../search/PassengerSelector";
import TripTypeToggle from "../search/TripTypeToggle";
import DateSelector from "../search/DateSelector";
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
          overflow-visible
          rounded-[32px]
          bg-white/95
          p-6
          shadow-2xl
          backdrop-blur-md
        "
      >
        {/* SEARCH GRID */}
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-5

            lg:grid-cols-2
            2xl:grid-cols-4
          "
        >
          {/* FROM */}
          <AirportSearch />

          {/* TO */}
          <AirportSearch />

          {/* DATE */}
          <DateSelector />

          {/* PASSENGERS */}
          <PassengerSelector />
        </div>

        {/* SEARCH BUTTON */}
        <button
          type="button"
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