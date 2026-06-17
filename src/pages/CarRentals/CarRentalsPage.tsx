import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useCurrency } from "../../context/CurrencyContext";
import CarRentalCardSkeleton from "../../components/car-rentals/CarRentalCardSkeleton";

import { rentalCars } from "../../data/Cars/carRentals";

function CarRentalsPage() {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [transmission, setTransmission] = useState("All");
  const [maxPrice, setMaxPrice] = useState(400);
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [driverAge, setDriverAge] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const rentalDays = useMemo(() => {
    if (!pickupDate || !returnDate) return 1;
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diff = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diff > 0 ? diff : 1;
  }, [pickupDate, returnDate]);

  const filteredCars = useMemo(() => {
    return rentalCars.filter((car) => {
      const matchesSearch = `${car.name} ${car.brand} ${car.category} ${car.availableIn.join(
        " "
      )}`
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = category === "All" || car.category === category;
      const matchesTransmission =
        transmission === "All" || car.transmission === transmission;
      const matchesPrice = car.pricePerDay <= maxPrice;
      const matchesLocation =
        pickupLocation.trim().length === 0 ||
        car.availableIn.some((place) =>
          place.toLowerCase().includes(pickupLocation.toLowerCase())
        );

      return (
        matchesSearch &&
        matchesCategory &&
        matchesTransmission &&
        matchesPrice &&
        matchesLocation
      );
    });
  }, [search, category, transmission, maxPrice, pickupLocation]);

  const categories = ["All", "Economy", "SUV", "Luxury", "Sports", "Electric"];

  const canSearch =
    pickupLocation.trim().length > 0 &&
    pickupDate.length > 0 &&
    returnDate.length > 0 &&
    driverAge.length > 0;

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document
      .getElementById("car-rental-results")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleViewDetails = (slug: string) => {
    const params = new URLSearchParams({
      pickupLocation,
      pickupDate,
      returnDate,
      driverAge,
    });

    navigate(`/car-rentals/${slug}?${params.toString()}`);
  };

  const handleResetFilters = () => {
    setSearch("");
    setCategory("All");
    setTransmission("All");
    setMaxPrice(400);
    setPickupLocation("");
    setPickupDate("");
    setReturnDate("");
    setDriverAge("");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[5px] text-[#14B8A6] sm:text-sm">
            Car Rentals
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:mt-6 sm:text-5xl md:text-6xl lg:text-8xl">
            Find the right car for every trip
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            Browse economy cars, SUVs, premium rides, and electric vehicles with
            quick pickup and easy booking.
          </p>

          <form
            onSubmit={handleSearch}
            className="
              mt-8 rounded-[24px] bg-white/95 p-4 shadow-2xl backdrop-blur-md
              sm:mt-12 sm:rounded-[32px] sm:p-6
            "
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <input
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                type="text"
                placeholder="Pickup location"
                className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-base font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-5 sm:text-lg"
              />

              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-base font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-5 sm:text-lg"
              />

              <input
                type="date"
                min={pickupDate}
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-base font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-5 sm:text-lg"
              />

              <select
                value={driverAge}
                onChange={(e) => setDriverAge(e.target.value)}
                className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-base font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-5 sm:text-lg"
              >
                <option value="">Driver's Age</option>
                {Array.from({ length: 43 }, (_, i) => i + 18).map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                disabled={!canSearch}
                className="
                  h-14 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6]
                  px-8 text-base font-bold text-white shadow-xl transition-all
                  duration-300 hover:scale-[1.02]
                  disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100
                  sm:h-16 sm:text-lg
                "
              >
                Search Cars
              </button>

              <p className="text-sm text-slate-500">
                Choose a pickup city, travel dates, and driver age to unlock
                availability.
              </p>
            </div>
          </form>

          <div
            className="
              mt-6 flex flex-nowrap gap-3 overflow-x-auto pb-1
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:mt-8 sm:flex-wrap sm:overflow-visible
            "
          >
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-5 ${
                  category === item
                    ? "border-transparent bg-white text-slate-900"
                    : "border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-slate-900"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24" id="car-rental-results">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[4px] text-[#14B8A6] sm:text-sm">
                Available Cars
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:mt-4 sm:text-4xl lg:text-5xl">
                Your next ride
              </h2>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg sm:px-6">
              <p className="text-base font-bold text-slate-900 sm:text-lg">
                {loading ? "Loading cars..." : `${filteredCars.length} Cars Found`}
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {loading
                  ? "Shimmering cards are on the way"
                  : `${rentalDays} day(s) selected`}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 xl:mt-14 xl:grid-cols-[320px_1fr]">
            <aside className="rounded-[28px] bg-white p-5 shadow-xl sm:rounded-[32px] sm:p-8 xl:sticky xl:top-6 xl:h-fit">
              <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                Filters
              </h3>

              <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400 sm:text-sm">
                    Search
                  </p>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Brand or model"
                    className="mt-3 h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-[#2563EB] sm:h-14 sm:px-5"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400 sm:text-sm">
                    Max Price / Day
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-black text-slate-900">
                      {formatPrice(maxPrice)}
                    </span>
                    <span className="text-sm text-slate-500">/ day</span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={400}
                    step={5}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="mt-4 w-full"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400 sm:text-sm">
                    Transmission
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {["All", "Automatic", "Manual"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setTransmission(item)}
                        className={`rounded-2xl px-4 py-3 text-sm font-bold transition-all ${
                          transmission === item
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400 sm:text-sm">
                    Category
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {categories.map((item) => (
                      <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                          category === item
                            ? "bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="
                    h-12 w-full rounded-2xl border border-slate-200 bg-white
                    font-bold text-slate-900 transition-all duration-300 hover:bg-slate-50
                  "
                >
                  Reset Filters
                </button>
              </div>
            </aside>

            <div className="grid gap-6 sm:grid-cols-2 xl:gap-8">
              {loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <CarRentalCardSkeleton key={index} />
                ))
              ) : filteredCars.length > 0 ? (
                filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className="overflow-hidden rounded-[30px] bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-[34px]"
                  >
                    <img
                      src={car.image}
                      alt={car.name}
                      className="h-52 w-full object-cover sm:h-[250px]"
                    />

                    <div className="p-5 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[3px] text-[#14B8A6] sm:text-sm">
                            {car.category}
                          </p>
                          <h3 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
                            {car.name}
                          </h3>
                          <p className="mt-2 text-sm text-slate-500 sm:text-base">
                            {car.brand} • {car.year}
                          </p>
                        </div>

                        <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 sm:text-sm">
                          ⭐ {car.rating}
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
                        <div className="rounded-2xl bg-slate-100 p-3">
                          Seats: {car.seats}
                        </div>
                        <div className="rounded-2xl bg-slate-100 p-3">
                          Luggage: {car.luggage}
                        </div>
                        <div className="rounded-2xl bg-slate-100 p-3">
                          {car.transmission}
                        </div>
                        <div className="rounded-2xl bg-slate-100 p-3">
                          {car.fuelType}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {car.availableIn.slice(0, 3).map((place) => (
                          <span
                            key={place}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 sm:text-sm"
                          >
                            {place}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                          <p className="text-sm text-slate-400">
                            Starting from
                          </p>
                          <h4 className="text-3xl font-black text-slate-900 sm:text-4xl">
                            {formatPrice(car.pricePerDay)}
                          </h4>
                          <p className="text-sm text-slate-400">
                            per day • taxes excluded
                          </p>
                        </div>

                        <button
                          onClick={() => handleViewDetails(car.slug)}
                          className="
                            h-12 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6]
                            px-6 font-bold text-white transition-all duration-300 hover:scale-[1.03]
                          "
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full rounded-[28px] bg-white p-8 text-center shadow-xl sm:rounded-[32px] sm:p-16">
                  <h3 className="text-3xl font-black text-slate-900 sm:text-4xl">
                    No Cars Found
                  </h3>

                  <p className="mt-4 text-base text-slate-500 sm:text-lg">
                    Try changing the filters or pickup location.
                  </p>

                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="
                      mt-8 h-12 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6]
                      px-6 font-bold text-white
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
    </div>
  );
}

export default CarRentalsPage;