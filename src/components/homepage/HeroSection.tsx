import BookingSearch from './BookingSearch';

/**
 * Large landing hero section.
 * Primary conversion area of homepage.
 */
function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-[750px]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/50
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          px-6
          text-center
        "
      >
        <p
          className="
            text-[#14B8A6]
            font-semibold
            uppercase
            tracking-[0.2em]
            mb-6
          "
        >
          Discover America
        </p>

        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
            text-white
            leading-tight
            max-w-5xl
            mx-auto
          "
        >
          Explore Your Next
          <span className="text-[#14B8A6]">
            {' '}
            Luxury Journey
          </span>
        </h1>

        <p
          className="
            mt-8
            text-lg
            md:text-xl
            text-slate-200
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          Flights, hotels, villas, attractions,
          and unforgettable experiences across
          the United States.
        </p>

        <div className="mt-14">
          <BookingSearch />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;