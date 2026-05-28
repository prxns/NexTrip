import Container from '../../components/common/Container';

/**
 * NexTrip homepage.
 */
function HomePage() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              text-[#0F172A]
            "
          >
            Discover Your
            <span className="text-[#2563EB]">
              {' '}
              Next Journey
            </span>
          </h1>

          <p
            className="
              mt-6
              text-lg
              text-[#64748B]
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Book flights, hotels, villas,
            attractions, and unforgettable travel
            experiences across the United States.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
              className="
                bg-[#2563EB]
                hover:bg-[#1D4ED8]
                transition-colors
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
              "
            >
              Explore Flights
            </button>

            <button
              className="
                bg-white
                border
                border-[#E2E8F0]
                hover:border-[#2563EB]
                transition-colors
                px-8
                py-4
                rounded-2xl
                font-semibold
              "
            >
              Browse Hotels
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomePage;