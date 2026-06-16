import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, MapPin, Ship, Star } from "lucide-react";

import Container from "../../components/common/Container";
import { useCurrency } from "../../context/CurrencyContext";
import { cruises } from "../../data/cruises/cruises";

function CruiseDetailsPage() {
  const { slug } = useParams();
  const { formatPrice } = useCurrency();

  const cruise = useMemo(
    () => cruises.find((item) => item.slug === slug),
    [slug]
  );

  if (!cruise) {
    return (
      <div className="py-24">
        <Container>
          <div className="rounded-[32px] bg-white p-16 text-center shadow-xl">
            <h1 className="text-4xl font-black text-slate-900">
              Cruise not found
            </h1>
            <Link
              to="/cruises"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] px-5 py-3 font-bold text-white"
            >
              <ArrowLeft size={16} />
              Back to cruises
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#14B8A6] px-6 py-16 text-white">
        <Container>
          <Link
            to="/cruises"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/20"
          >
            <ArrowLeft size={16} />
            Back to cruises
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[5px] text-white/70">
                {cruise.cruiseLine}
              </p>
              <h1 className="mt-5 text-5xl font-black md:text-7xl">
                {cruise.ship}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/80">
                {cruise.summary}
              </p>
            </div>

            <div className="rounded-[32px] bg-white/95 p-4 text-slate-900 shadow-2xl backdrop-blur">
              <img
                src={cruise.image}
                alt={cruise.ship}
                className="h-[320px] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="-mt-8">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[36px] bg-white p-8 shadow-xl">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
                    Departure
                  </p>
                  <p className="mt-2 font-semibold text-slate-900">
                    {cruise.departurePort}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
                    Duration
                  </p>
                  <p className="mt-2 font-semibold text-slate-900">
                    {cruise.durationNights} nights
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
                    Region
                  </p>
                  <p className="mt-2 font-semibold text-slate-900">
                    {cruise.region}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
                    Rating
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 font-semibold text-slate-900">
                    <Star size={16} className="text-amber-500" fill="currentColor" />
                    {cruise.rating}
                  </p>
                </div>
              </div>

              <h2 className="mt-10 text-3xl font-black text-slate-900">
                Overview
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {cruise.summary}
              </p>

              <h3 className="mt-10 text-2xl font-black text-slate-900">
                Top highlights
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {cruise.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h3 className="mt-10 text-2xl font-black text-slate-900">
                Sample itinerary
              </h3>
              <div className="mt-5 space-y-3">
                {cruise.itinerary.map((stop, index) => (
                  <div
                    key={`${stop}-${index}`}
                    className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-black text-slate-900 shadow-sm">
                      {index + 1}
                    </div>
                    <div className="flex items-center gap-2 text-slate-800">
                      <MapPin size={16} className="text-slate-400" />
                      <span className="font-semibold">{stop}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[36px] bg-white p-8 shadow-xl">
                <div className="flex items-center gap-3">
                  <Ship className="text-teal-500" />
                  <h2 className="text-2xl font-black text-slate-900">
                    Cruise facts
                  </h2>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Starting from</span>
                    <span className="text-2xl font-black text-slate-900">
                      {formatPrice(cruise.priceFrom)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Cabin types</span>
                    <span className="text-right font-semibold text-slate-900">
                      {cruise.cabinTypes[0]}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Ships from</span>
                    <span className="text-right font-semibold text-slate-900">
                      {cruise.departurePort}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Best for</span>
                    <span className="text-right font-semibold text-slate-900">
                      {cruise.region}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-[36px] bg-gradient-to-br from-[#2563EB] to-[#14B8A6] p-8 text-white shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[4px] text-white/70">
                  Booking note
                </p>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Use this page as your cruise discovery layer. When you are ready
                  for live inventory, you can swap the price cards with real booking
                  data without changing the layout.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default CruiseDetailsPage;