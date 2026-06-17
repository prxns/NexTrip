import BookingSearch from "./BookingSearch";

/**
 * Premium landing hero section.
 * Main conversion area of homepage.
 */
function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-[100svh]
        overflow-visible
        md:min-h-[980px]
      "
    >
      <div
        className="
          absolute
          inset-0
          scale-[1.02]
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2200&auto=format&fit=crop')",
        }}
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/70
          via-black/55
          to-black/60
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.15),transparent_45%)]
        "
      />

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-7xl
          flex-col
          justify-start
          px-4
          pt-24
          pb-16
          sm:px-6
          sm:pt-28
          md:min-h-[980px]
          md:justify-center
          md:pt-32
          md:pb-[220px]
        "
      >
        <div className="max-w-5xl">
          <p
            className="
              mb-5
              text-xs
              font-bold
              uppercase
              tracking-[0.32em]
              text-[#14B8A6]
              sm:mb-6
              sm:text-sm
              md:text-base
            "
          >
            Discover America
          </p>

          <h1
            className="
              max-w-5xl
              text-4xl
              font-black
              leading-[1.05]
              text-white
              sm:text-5xl
              md:text-7xl
              xl:text-8xl
            "
          >
            Explore Your Next{" "}
            <span className="text-[#14B8A6]">Dream Destination</span>
          </h1>

          <p
            className="
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-slate-200
              sm:mt-6
              sm:text-lg
              sm:leading-8
              md:mt-8
              md:text-xl
              md:leading-9
            "
          >
            Flights, hotels, villas, attractions, and unforgettable travel
            experiences across the United States.
          </p>
        </div>

        <div className="relative z-50 mt-8 sm:mt-10 md:mt-14">
          <BookingSearch />
        </div>
      </div>

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-white
          to-transparent
          sm:h-32
          md:h-40
        "
      />
    </section>
  );
}

export default HeroSection;