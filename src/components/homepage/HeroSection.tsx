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
        min-h-[980px]
        overflow-visible
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          scale-[1.02]
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2200&auto=format&fit=crop')",
        }}
      />

      {/* OVERLAY */}
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

      {/* GLOW EFFECT */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.15),transparent_45%)]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[980px]
          w-full
          max-w-7xl
          flex-col
          justify-center
          px-6
          pt-32
          pb-[220px]
        "
      >
        {/* HERO TEXT */}
        <div className="max-w-5xl">
          <p
            className="
              mb-6
              text-sm
              font-bold
              uppercase
              tracking-[0.35em]
              text-[#14B8A6]
              md:text-base
            "
          >
            Discover America
          </p>

          <h1
            className="
              max-w-5xl
              text-5xl
              font-black
              leading-[1.05]
              text-white
              sm:text-6xl
              md:text-7xl
              xl:text-8xl
            "
          >
            Explore Your Next{" "}
            <span className="text-[#14B8A6]">
              Dream Destination
            </span>
          </h1>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-slate-200
              md:text-xl
            "
          >
            Flights, hotels, villas, attractions, and unforgettable travel experiences across the United States.
          </p>
        </div>

        {/* SEARCH SECTION */}
        <div className="relative z-50 mt-16">
          <BookingSearch />
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-40
          bg-gradient-to-t
          from-white
          to-transparent
        "
      />
    </section>
  );
}

export default HeroSection;