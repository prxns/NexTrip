import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { rentalCars } from "../../data/Cars/carRentals";

function CarRentalsPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [transmission, setTransmission] = useState("All");
  const [maxPrice, setMaxPrice] = useState(400);
  const [pickupLocation, setPickupLocation] = useState("New York");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [driverAge, setDriverAge] = useState("30");

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
      const matchesSearch = `${car.name} ${car.brand} ${car.category} ${car.availableIn.join(" ")}`
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

  const handleViewDetails = (slug: string) => {
    const params = new URLSearchParams({
      pickupLocation,
      pickupDate,
      returnDate,
      driverAge,
    });

    navigate(`/car-rentals/${slug}?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="relative overflow-hidden bg-black py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[5px] text-[#14B8A6]">
            Car Rentals
          </p>

          <h1 className="mt-6 max-w-4xl text-6xl font-black leading-tight text-white md:text-8xl">
            Find the right car for every trip
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            Browse economy cars, SUVs, luxury rides, and electric vehicles with quick pickup and easy booking.
          </p>

          <div className="mt-14 grid gap-4 rounded-[32px] bg-white/95 p-6 shadow-2xl backdrop-blur-md md:grid-cols-4">
            <input
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              type="text"
              placeholder="Pickup location"
              className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-lg font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
            />
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-lg font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
            />
            <input
              type="date"
              min={pickupDate}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-lg font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
            />
            <select
              value={driverAge}
              onChange={(e) => setDriverAge(e.target.value)}
              className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-lg font-semibold text-slate-900 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
            >
              {Array.from({ length: 43 }, (_, i) => i + 18).map((age) => (
                <option key={age} value={age}>
                  Driver age {age}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
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

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[4px] text-[#14B8A6]">
                Available Cars
              </p>
              <h2 className="mt-4 text-5xl font-black text-slate-900">
                Your next ride
              </h2>
            </div>

            <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">
              <p className="text-lg font-bold text-slate-900">
                {filteredCars.length} Cars Found
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {rentalDays} day(s) selected
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 xl:grid-cols-[320px_1fr]">
            <aside className="rounded-[32px] bg-white p-8 shadow-xl xl:sticky xl:top-6 xl:h-fit">
              <h3 className="text-3xl font-black text-slate-900">Filters</h3>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
                    Search
                  </p>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Brand or model"
                    className="mt-3 h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
                    Max Price / Day
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-black text-slate-900">${maxPrice}</span>
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
                  <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
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
                  <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
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
              </div>
            </aside>

            <div className="grid gap-8 md:grid-cols-2">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="overflow-hidden rounded-[34px] bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <img src={car.image} alt={car.name} className="h-[250px] w-full object-cover" />

                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[3px] text-[#14B8A6]">
                          {car.category}
                        </p>
                        <h3 className="mt-3 text-3xl font-black text-slate-900">
                          {car.name}
                        </h3>
                        <p className="mt-2 text-slate-500">
                          {car.brand} • {car.year}
                        </p>
                      </div>

                      <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
                        ⭐ {car.rating}
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
                      <div className="rounded-2xl bg-slate-100 p-3">Seats: {car.seats}</div>
                      <div className="rounded-2xl bg-slate-100 p-3">Luggage: {car.luggage}</div>
                      <div className="rounded-2xl bg-slate-100 p-3">{car.transmission}</div>
                      <div className="rounded-2xl bg-slate-100 p-3">{car.fuelType}</div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {car.availableIn.slice(0, 3).map((place) => (
                        <span key={place} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                          {place}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-400">Starting from</p>
                        <h4 className="text-4xl font-black text-slate-900">
                          ${car.pricePerDay}
                        </h4>
                        <p className="text-sm text-slate-400">per day</p>
                      </div>

                      <button
                        onClick={() => handleViewDetails(car.slug)}
                        className="h-12 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] px-6 font-bold text-white transition-all duration-300 hover:scale-[1.03]"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {filteredCars.length === 0 && (
                <div className="col-span-full rounded-[32px] bg-white p-16 text-center shadow-xl">
                  <h3 className="text-4xl font-black text-slate-900">No Cars Found</h3>
                  <p className="mt-4 text-lg text-slate-500">
                    Try changing the filters or pickup location.
                  </p>
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