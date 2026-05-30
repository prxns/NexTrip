import Container from "../common/Container";
import { popularDestinations } from "../../data/destinations/popularDestinations";
import { Link } from "react-router-dom";

function PopularDestinations() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="font-semibold uppercase tracking-wider text-[#14B8A6]">
              Trending Destinations
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0F172A]">
              Popular Places Across America
            </h2>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto overflow-y-hidden pb-6 pr-1">
          {popularDestinations.map((destination) => (
            <Link
              key={destination.id}
              to={`/destinations/${destination.id}`}
              className="
                group
                relative
                h-[380px]
                w-[360px]
                flex-none
                overflow-hidden
                rounded-[28px]
                bg-white
                shadow-lg
                transition-shadow
                duration-300
                hover:shadow-2xl
              "
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">
                  {destination.city}
                </h3>

                <p className="mt-1 text-sm text-slate-200">
                  {destination.state}
                </p>

                <p className="mt-4 text-sm font-semibold">
                  {destination.properties}+ properties
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PopularDestinations;