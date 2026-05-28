type NearbyAttractionsProps = {
  attractions: string[];
};

function NearbyAttractions({
  attractions,
}: NearbyAttractionsProps) {
  return (
    <section className="mt-24">
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
          Explore Nearby
        </p>

        <h2
          className="
            mt-4
            text-5xl
            font-black
            text-slate-900
          "
        >
          Nearby Attractions
        </h2>
      </div>

      <div
        className="
          mt-10
          grid
          gap-6

          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {attractions.map(
          (attraction) => (
            <div
              key={attraction}
              className="
                rounded-[32px]
                bg-gradient-to-br
                from-[#2563EB]
                to-[#14B8A6]

                p-8

                text-white

                shadow-xl
              "
            >
              <div className="text-5xl">
                📍
              </div>

              <h3
                className="
                  mt-8
                  text-3xl
                  font-black
                  leading-tight
                "
              >
                {attraction}
              </h3>

              <p className="mt-4 leading-8 text-white/80">
                Discover iconic destinations
                and unforgettable experiences
                just moments away.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default NearbyAttractions;