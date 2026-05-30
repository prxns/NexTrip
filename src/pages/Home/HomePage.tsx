import PopularDestinations from "../../components/homepage/PopularDestinations";
import Container from "../../components/common/Container";
import BookingSearch from "../../components/homepage/BookingSearch";
import OffersSection from "../../components/homepage/OffersSection";

function HomePage() {
  return (
    <div className="pb-20">
      {/* HERO SECTION */}
      <section
        className="
          relative
          min-h-[920px]
          overflow-visible
        "
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* CONTENT */}
        <Container className="relative z-10 flex min-h-[920px] flex-col justify-center">
          <div className="max-w-5xl">
            {/* LABEL */}
            <p className="mb-6 text-lg font-semibold uppercase tracking-[6px] text-[#14B8A6]">
              Discover America
            </p>

            {/* HEADING */}
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
              <span className="text-[#14B8A6]">
                Dream Destination
              </span>
            </h1>

            {/* DESCRIPTION */}
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

            {/* SEARCH COMPONENT */}
            <div className="mt-14">
              <BookingSearch />
            </div>
          </div>
        </Container>
      </section>

      {/* POPULAR DESTINATIONS */}
      <PopularDestinations />

      {/* PROMO SECTION */}
      <OffersSection />
    </div>
  );
}

export default HomePage;