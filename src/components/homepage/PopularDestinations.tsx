import Container from '../common/Container';
import { popularDestinations } from '../../data/destinations';

/**
 * Popular travel destinations section.
 */
function PopularDestinations() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[#14B8A6] font-semibold uppercase tracking-wider">
              Trending Destinations
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0F172A]">
              Popular Places Across America
            </h2>
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {popularDestinations.map((destination) => (
            <div
              key={destination.id}
              className="
                group
                overflow-hidden
                rounded-[28px]
                bg-white
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div className="relative h-[380px] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-500
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">
                    {destination.city}
                  </h3>

                  <p className="mt-1 text-sm text-slate-200">
                    {destination.state}
                  </p>

                  <p className="mt-4 text-sm">
                    {destination.properties}+ properties
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PopularDestinations;