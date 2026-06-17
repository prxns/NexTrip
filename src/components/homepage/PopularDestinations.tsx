import { Link } from "react-router-dom";

import Container from "../common/Container";
import { popularDestinations } from "../../data/destinations/popularDestinations";

function PopularDestinations() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#14B8A6] sm:text-base">
              Trending Destinations
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:mt-4 sm:text-4xl">
              Popular Places Across America
            </h2>
          </div>
        </div>

        <div
          className="
            flex
            gap-5
            overflow-x-auto
            overflow-y-hidden
            pb-5
            pr-1
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:gap-6
            md:gap-8
            md:pb-6
          "
        >
          {popularDestinations.map((destination) => (
            <Link
              key={destination.id}
              to={`/destinations/${destination.id}`}
              className="
                group
                relative
                h-[340px]
                w-[82vw]
                flex-none
                overflow-hidden
                rounded-[28px]
                bg-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                sm:h-[360px]
                sm:w-[340px]
                md:h-[380px]
                md:w-[360px]
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
                <h3 className="text-2xl font-bold">{destination.city}</h3>

                <p className="mt-1 text-sm text-slate-200">{destination.state}</p>

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