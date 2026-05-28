import Container from '../common/Container';

/**
 * Travel inspiration content section.
 */
function TravelInspiration() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl">
          <p className="text-[#14B8A6] font-semibold uppercase tracking-wider">
            Travel Inspiration
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0F172A] leading-tight">
            Discover unforgettable experiences
            across America.
          </h2>

          <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
            Explore hidden gems, iconic cities,
            luxury resorts, beaches, food spots,
            and unforgettable adventures curated
            for modern travelers.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default TravelInspiration;