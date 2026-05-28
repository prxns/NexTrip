import Container from '../common/Container';

/**
 * Promotional offers section.
 */
function OffersSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <Container>
        <div
          className="
            rounded-[36px]
            bg-gradient-to-r
            from-[#2563EB]
            to-[#14B8A6]
            p-12
            text-white
          "
        >
          <p className="uppercase tracking-widest text-sm font-semibold">
            Limited Time Offers
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Save up to 40% on luxury stays and
            flights across the United States.
          </h2>

          <button
            className="
              mt-10
              bg-white
              text-[#0F172A]
              font-semibold
              px-8
              py-4
              rounded-2xl
              hover:bg-slate-100
              transition-colors
            "
          >
            Explore Deals
          </button>
        </div>
      </Container>
    </section>
  );
}

export default OffersSection;