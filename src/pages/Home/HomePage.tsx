import {
  FaPlane,
  FaHotel,
  FaHome,
  FaCar,
  FaBus,
  FaTrain,
  FaMapMarkedAlt,
} from "react-icons/fa";

import Container from "../../components/common/Container";

const destinations = [
  {
    city: "New York",
    state: "New York",
    properties: "1240+ properties",
    image:
      "https://images.unsplash.com/photo-1496588152823-e1cb5c4d4d95?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Los Angeles",
    state: "California",
    properties: "980+ properties",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Miami",
    state: "Florida",
    properties: "860+ properties",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "Las Vegas",
    state: "Nevada",
    properties: "720+ properties",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
];

const travelTabs = [
  { icon: <FaPlane />, label: "Flights" },
  { icon: <FaHotel />, label: "Hotels" },
  { icon: <FaHome />, label: "Villas" },
  { icon: <FaCar />, label: "Cars" },
  { icon: <FaBus />, label: "Buses" },
  { icon: <FaTrain />, label: "Trains" },
  { icon: <FaMapMarkedAlt />, label: "Tours" },
];

function HomePage() {
  return (
    <div className="pb-20">
      {/* HERO SECTION */}
      <section
        className="
          relative
          min-h-[920px]
          overflow-hidden
        "
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <Container className="relative z-10 flex min-h-[920px] flex-col justify-center">
          <div className="max-w-5xl">
            <p className="mb-6 text-lg font-semibold uppercase tracking-[6px] text-[#14B8A6]">
              Discover America
            </p>

            <h1
              className="
                max-w-5xl
                text-6xl
                font-black
                leading-[1.1]
                text-white
                md:text-8xl
              "
            >
              Explore Your Next{" "}
              <span className="text-[#14B8A6]">Luxury Journey</span>
            </h1>

            <p
              className="
                mt-8
                max-w-3xl
                text-xl
                leading-9
                text-slate-200
              "
            >
              Flights, hotels, villas, attractions, and unforgettable
              travel experiences across the United States.
            </p>

            {/* SEARCH CARD */}
            <div
              className="
                mt-14
                rounded-[36px]
                border
                border-white/20
                bg-white
                p-8
                shadow-2xl
              "
            >
              {/* TABS */}
              <div className="flex flex-wrap gap-4 border-b border-slate-200 pb-6">
                {travelTabs.map((tab) => (
                  <button
                    key={tab.label}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-slate-100
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-slate-700
                      transition-all
                      duration-300
                      hover:bg-[#2563EB]
                      hover:text-white
                    "
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* SEARCH GRID */}
              <div
                className="
                  mt-8
                  grid
                  gap-5
                  lg:grid-cols-4
                "
              >
                <div className="rounded-3xl border border-slate-200 p-6">
                  <p className="text-sm text-slate-500">From</p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    New York
                  </h3>

                  <p className="mt-1 text-slate-500">
                    JFK International Airport
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 p-6">
                  <p className="text-sm text-slate-500">To</p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    Los Angeles
                  </h3>

                  <p className="mt-1 text-slate-500">
                    LAX International Airport
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 p-6">
                  <p className="text-sm text-slate-500">Departure</p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    24 Jun 2026
                  </h3>

                  <p className="mt-1 text-slate-500">
                    Tuesday
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 p-6">
                  <p className="text-sm text-slate-500">Travelers</p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    2 Adults
                  </h3>

                  <p className="mt-1 text-slate-500">
                    Economy
                  </p>
                </div>
              </div>

              <button
                className="
                  mt-8
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
                "
              >
                Search Flights
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[4px] text-[#14B8A6]">
                Trending Destinations
              </p>

              <h2 className="mt-4 text-5xl font-black text-slate-900">
                Popular Places Across America
              </h2>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {destinations.map((place) => (
              <div
                key={place.city}
                className="
                  group
                  relative
                  h-[520px]
                  overflow-hidden
                  rounded-[36px]
                  shadow-xl
                "
              >
                <img
                  src={place.image}
                  alt={place.city}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-7 text-white">
                  <h3 className="text-5xl font-black">
                    {place.city}
                  </h3>

                  <p className="mt-2 text-lg text-slate-200">
                    {place.state}
                  </p>

                  <p className="mt-4 text-lg font-semibold">
                    {place.properties}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROMO SECTION */}
      <section className="pb-20">
        <Container>
          <div
            className="
              overflow-hidden
              rounded-[40px]
              bg-gradient-to-r
              from-[#2563EB]
              to-[#14B8A6]
              p-16
              text-white
              shadow-2xl
            "
          >
            <div className="max-w-3xl">
              <h2 className="text-6xl font-black leading-tight">
                Save up to 40% on luxury stays and flights across the United States.
              </h2>

              <p className="mt-6 text-xl leading-9 text-white/80">
                Premium travel deals, curated experiences, and unforgettable destinations.
              </p>

              <button
                className="
                  mt-10
                  rounded-2xl
                  bg-white
                  px-8
                  py-4
                  text-lg
                  font-bold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Explore Deals
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;