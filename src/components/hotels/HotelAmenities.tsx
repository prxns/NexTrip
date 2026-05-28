type HotelAmenitiesProps = {
  amenities: string[];
};

function HotelAmenities({
  amenities,
}: HotelAmenitiesProps) {
  return (
    <section className="mt-20">
      <div className="flex items-end justify-between">
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
            Premium Experience
          </p>

          <h2
            className="
              mt-4
              text-5xl
              font-black
              text-slate-900
            "
          >
            Luxury Amenities
          </h2>
        </div>
      </div>

      <div
        className="
          mt-10
          grid
          gap-6

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {amenities.map((amenity) => (
          <div
            key={amenity}
            className="
              rounded-[32px]
              border
              border-slate-200

              bg-white
              p-8

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-3xl

                bg-gradient-to-r
                from-[#2563EB]
                to-[#14B8A6]

                text-3xl
              "
            >
              ✨
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-black
                text-slate-900
              "
            >
              {amenity}
            </h3>

            <p className="mt-3 leading-8 text-slate-500">
              Experience premium hospitality,
              luxury comfort, and elite service
              designed for unforgettable stays.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HotelAmenities;