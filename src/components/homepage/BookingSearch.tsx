import CategoryTabs from './CategoryTabs';

/**
 * Main homepage booking search panel.
 */
function BookingSearch() {
  return (
    <div className="max-w-6xl mx-auto">
      <CategoryTabs />

      <div
        className="
          mt-6
          bg-white
          rounded-[32px]
          shadow-2xl
          p-6
          md:p-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-4
            gap-4
          "
        >
          <div className="border border-[#E2E8F0] rounded-2xl p-5 text-left">
            <p className="text-sm text-[#64748B]">
              From
            </p>

            <h3 className="mt-2 text-xl font-bold">
              New York
            </h3>

            <p className="text-sm text-[#64748B] mt-1">
              JFK Airport
            </p>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl p-5 text-left">
            <p className="text-sm text-[#64748B]">
              To
            </p>

            <h3 className="mt-2 text-xl font-bold">
              Los Angeles
            </h3>

            <p className="text-sm text-[#64748B] mt-1">
              LAX Airport
            </p>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl p-5 text-left">
            <p className="text-sm text-[#64748B]">
              Departure
            </p>

            <h3 className="mt-2 text-xl font-bold">
              24 Jun 2026
            </h3>

            <p className="text-sm text-[#64748B] mt-1">
              Tuesday
            </p>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl p-5 text-left">
            <p className="text-sm text-[#64748B]">
              Travelers
            </p>

            <h3 className="mt-2 text-xl font-bold">
              2 Adults
            </h3>

            <p className="text-sm text-[#64748B] mt-1">
              Economy
            </p>
          </div>
        </div>

        <button
          className="
            mt-8
            w-full
            md:w-auto
            bg-[#2563EB]
            hover:bg-[#1D4ED8]
            transition-colors
            text-white
            font-semibold
            px-10
            py-4
            rounded-2xl
            text-lg
          "
        >
          Search Flights
        </button>
      </div>
    </div>
  );
}

export default BookingSearch;