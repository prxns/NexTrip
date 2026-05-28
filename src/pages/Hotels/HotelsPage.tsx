import { useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import HotelCard from "../../components/hotels/HotelCard";
import HotelFilters from "../../components/hotels/HotelFilters";
import HotelDetailsModal from "../../components/hotels/HotelDetailsModal";

import {
  hotels,
  type Hotel,
} from "../../data/hotels/hotels";

function HotelsPage() {
  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const [checkIn, setCheckIn] =
    useState("");

  const [checkOut, setCheckOut] =
    useState("");

  const [maxPrice, setMaxPrice] =
    useState(1000);

  const [minRating, setMinRating] =
    useState(4);

  const [category, setCategory] =
    useState("All");

  const [selectedHotel, setSelectedHotel] =
    useState<Hotel | null>(null);

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const matchesSearch =
        `
          ${hotel.name}
          ${hotel.city}
          ${hotel.state}
        `
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesPrice =
        hotel.pricePerNight <= maxPrice;

      const matchesRating =
        hotel.rating >= minRating;

      const matchesCategory =
        category === "All" ||
        hotel.category === category;

      return (
        matchesSearch &&
        matchesPrice &&
        matchesRating &&
        matchesCategory
      );
    });
  }, [
    search,
    maxPrice,
    minRating,
    category,
  ]);

  const handleHotelClick = (
    hotel: Hotel
  ) => {
    if (!checkIn || !checkOut) {
      alert(
        "Please select check-in and check-out dates."
      );
      return;
    }

    navigate(
      `/hotels/${hotel.slug}?checkIn=${checkIn}&checkOut=${checkOut}`
    );
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* HERO */}
      <section
        className="
          relative
          overflow-hidden
          bg-black
          py-32
        "
      >
        {/* BACKGROUND */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* GLOW */}
        <div
          className="
            absolute
            right-[-120px]
            top-[-120px]

            h-[320px]
            w-[320px]

            rounded-full
            bg-[#14B8A6]/20

            blur-3xl
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[5px]
              text-[#14B8A6]
            "
          >
            Luxury Hotels
          </p>

          <h1
            className="
              mt-6
              max-w-5xl

              text-6xl
              font-black
              leading-tight
              text-white

              md:text-8xl
            "
          >
            Find Your Perfect Stay
          </h1>

          <p
            className="
              mt-8
              max-w-2xl

              text-xl
              leading-9
              text-slate-300
            "
          >
            Discover luxury resorts,
            boutique hotels, penthouses,
            and unforgettable stays across
            the United States.
          </p>

          {/* SEARCH BAR */}
          <div
            className="
              mt-14
              grid
              gap-4

              rounded-[32px]
              bg-white/95
              p-6

              shadow-2xl
              backdrop-blur-md

              md:grid-cols-4
            "
          >
            {/* DESTINATION */}
            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              type="text"
              placeholder="Where are you going?"
              className="
                h-16
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5

                text-lg
                font-semibold
                text-slate-900

                outline-none

                transition-all
                duration-300

                focus:border-[#2563EB]
                focus:ring-4
                focus:ring-blue-100
              "
            />

            {/* CHECK IN */}
            <input
              type="date"
              value={checkIn}
              onChange={(e) =>
                setCheckIn(e.target.value)
              }
              className="
                h-16
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5

                text-lg
                font-semibold
                text-slate-900

                outline-none

                transition-all
                duration-300

                focus:border-[#2563EB]
                focus:ring-4
                focus:ring-blue-100
              "
            />

            {/* CHECK OUT */}
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) =>
                setCheckOut(e.target.value)
              }
              className="
                h-16
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5

                text-lg
                font-semibold
                text-slate-900

                outline-none

                transition-all
                duration-300

                focus:border-[#2563EB]
                focus:ring-4
                focus:ring-blue-100
              "
            />

            {/* SEARCH BUTTON */}
            <button
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
                hover:shadow-2xl

                active:scale-[0.98]
              "
            >
              Search Hotels
            </button>
          </div>

          {/* DESTINATION CHIPS */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Miami",
              "New York",
              "Los Angeles",
              "Las Vegas",
              "Chicago",
            ].map((city) => (
              <button
                key={city}
                onClick={() =>
                  setSearch(city)
                }
                className="
                  rounded-full
                  border
                  border-white/20

                  bg-white/10
                  px-5
                  py-2

                  text-sm
                  font-semibold
                  text-white

                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:bg-white
                  hover:text-slate-900
                "
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* TOP */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[4px]
                  text-[#14B8A6]
                "
              >
                Featured Hotels
              </p>

              <h2
                className="
                  mt-4
                  text-5xl
                  font-black
                  text-slate-900
                "
              >
                Luxury Escapes
              </h2>
            </div>

            <div
              className="
                rounded-2xl
                bg-white
                px-6
                py-4

                shadow-lg
              "
            >
              <p className="text-lg font-bold text-slate-900">
                {filteredHotels.length} Hotels Found
              </p>
            </div>
          </div>

          {/* GRID */}
          <div
            className="
              mt-14
              grid
              gap-8

              xl:grid-cols-[320px_1fr]
            "
          >
            {/* FILTERS */}
            <div className="xl:sticky xl:top-6 xl:h-fit">
              <HotelFilters
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                minRating={minRating}
                setMinRating={setMinRating}
                category={category}
                setCategory={setCategory}
              />
            </div>

            {/* HOTELS */}
            <div
              className="
                grid
                gap-8

                md:grid-cols-2
              "
            >
              {filteredHotels.length > 0 ? (
                filteredHotels.map((hotel) => (
                  <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    onViewDetails={() =>
                      handleHotelClick(hotel)
                    }
                  />
                ))
              ) : (
                <div
                  className="
                    col-span-full

                    rounded-[32px]
                    bg-white

                    p-20

                    text-center

                    shadow-xl
                  "
                >
                  <h3
                    className="
                      text-4xl
                      font-black
                      text-slate-900
                    "
                  >
                    No Hotels Found
                  </h3>

                  <p
                    className="
                      mt-4
                      text-lg
                      text-slate-500
                    "
                  >
                    Try changing your filters
                    or search destination.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <HotelDetailsModal
        open={!!selectedHotel}
        hotel={selectedHotel}
        onClose={() =>
          setSelectedHotel(null)
        }
      />
    </div>
  );
}

export default HotelsPage;