import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import HotelCard from "../../components/hotels/HotelCard";
import HotelCardSkeleton from "../../components/hotels/HotelCardSkeleton";
import HotelFilters from "../../components/hotels/HotelFilters";
import HotelDetailsModal from "../../components/hotels/HotelDetailsModal";

import { hotels, type Hotel } from "../../data/hotels/hotels";

function HotelsPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(4);
  const [category, setCategory] = useState("All");
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const matchesSearch = `${hotel.name} ${hotel.city} ${hotel.state}`
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesPrice = hotel.pricePerNight <= maxPrice;
      const matchesRating = hotel.rating >= minRating;
      const matchesCategory = category === "All" || hotel.category === category;

      return matchesSearch && matchesPrice && matchesRating && matchesCategory;
    });
  }, [search, maxPrice, minRating, category]);

  const handleHotelClick = (hotel: Hotel) => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    navigate(`/hotels/${hotel.slug}?checkIn=${checkIn}&checkOut=${checkOut}`);
  };

  const handleResetFilters = () => {
    setSearch("");
    setCheckIn("");
    setCheckOut("");
    setMaxPrice(1000);
    setMinRating(4);
    setCategory("All");
  };

  const handleSearchHotels = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.getElementById("hotel-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const canSearch = Boolean(checkIn && checkOut);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20 md:py-32 lg:py-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="
            absolute
            right-[-60px]
            top-[-60px]
            h-[200px]
            w-[200px]
            md:right-[-120px]
            md:top-[-120px]
            md:h-[320px]
            md:w-[320px]
            rounded-full
            bg-[#14B8A6]/20
            blur-3xl
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[5px] text-[#14B8A6]">
            Hotels
          </p>

          <h1 className="mt-4 md:mt-6 max-w-5xl text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white">
            Find Your Perfect Stay
          </h1>

          <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-xl leading-relaxed md:leading-9 text-slate-300">
            Discover resorts, boutique hotels, penthouses, and unforgettable stays
            across the United States.
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearchHotels}
            className="
              mt-10
              md:mt-14
              grid
              gap-3
              md:gap-4
              rounded-[24px]
              md:rounded-[32px]
              bg-white/95
              p-4
              md:p-6
              shadow-2xl
              backdrop-blur-md
              md:grid-cols-4
            "
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Where are you going?"
              className="h-14 md:h-16 w-full rounded-xl md:rounded-2xl border border-slate-200 bg-white px-4 md:px-5 text-base md:text-lg font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
            />

            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="h-14 md:h-16 w-full rounded-xl md:rounded-2xl border border-slate-200 bg-white px-4 md:px-5 text-base md:text-lg font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
            />

            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="h-14 md:h-16 w-full rounded-xl md:rounded-2xl border border-slate-200 bg-white px-4 md:px-5 text-base md:text-lg font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
            />

            <button
              type="submit"
              disabled={!canSearch}
              className="
                h-14
                md:h-16
                w-full
                rounded-xl
                md:rounded-2xl
                bg-gradient-to-r
                from-[#2563EB]
                to-[#14B8A6]
                text-base
                md:text-lg
                font-bold
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:scale-[1.02]
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:scale-100
              "
            >
              Search Hotels
            </button>
          </form>

          <p className="mt-4 text-xs md:text-sm text-white/70">
            Select check-in and check-out to unlock hotel booking.
          </p>

          {/* Quick Filters */}
          <div className="mt-8 flex flex-wrap gap-2 md:gap-3">
            {["Miami", "New York", "Los Angeles", "Las Vegas", "Chicago"].map((city) => (
              <button
                key={city}
                onClick={() => setSearch(city)}
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-1.5
                  md:px-5
                  md:py-2
                  text-xs
                  md:text-sm
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

      {/* Results Section */}
      <section className="py-16 md:py-24" id="hotel-results">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header Layout */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[4px] text-[#14B8A6]">
                Featured Hotels
              </p>

              <h2 className="mt-2 md:mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
                Top Stays
              </h2>
            </div>

            <div className="flex w-full flex-col sm:flex-row sm:items-center justify-between sm:justify-start gap-4 sm:gap-3 rounded-2xl bg-white px-5 md:px-6 py-4 shadow-lg lg:w-auto">
              <p className="text-base md:text-lg font-bold text-slate-900">
                {loading ? "Loading top stays..." : `${filteredHotels.length} Hotels Found`}
              </p>

              <button
                type="button"
                onClick={handleResetFilters}
                className="
                  w-full
                  sm:w-auto
                  rounded-full
                  bg-slate-100
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-slate-700
                  transition-colors
                  hover:bg-slate-200
                "
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="mt-10 md:mt-14 grid gap-8 xl:grid-cols-[320px_1fr]">
            {/* Filters Sidebar */}
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

            {/* Results Grid */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <HotelCardSkeleton key={index} />
                ))
              ) : filteredHotels.length > 0 ? (
                filteredHotels.map((hotel) => (
                  <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    onViewDetails={handleHotelClick}
                  />
                ))
              ) : (
                <div className="col-span-full rounded-[24px] md:rounded-[32px] bg-white p-8 md:p-16 text-center shadow-xl">
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900">
                    No Hotels Found
                  </h3>

                  <p className="mt-3 md:mt-4 text-base md:text-lg text-slate-500">
                    Try changing your filters or search destination.
                  </p>

                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="
                      mt-6
                      md:mt-8
                      h-12
                      rounded-xl
                      md:rounded-2xl
                      bg-gradient-to-r
                      from-[#2563EB]
                      to-[#14B8A6]
                      px-6
                      font-bold
                      text-white
                      transition-transform
                      hover:scale-105
                    "
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <HotelDetailsModal
        open={!!selectedHotel}
        hotel={selectedHotel}
        onClose={() => setSelectedHotel(null)}
      />
    </div>
  );
}

export default HotelsPage;