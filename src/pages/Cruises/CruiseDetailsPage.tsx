import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Music2,
  Ship,
  Sparkles,
  Star,
  UtensilsCrossed,
  Users,
  BedDouble,
} from "lucide-react";

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
      <div className="bg-slate-100 py-24">
        <Container>
          <div className="rounded-[32px] bg-white p-12 text-center shadow-xl">
            <h1 className="text-4xl font-black text-slate-900">Cruise not found</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              The sailing you are looking for is not available in this demo.
            </p>
            <Link
              to="/cruises"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] px-5 py-3 font-bold text-white shadow-lg transition hover:scale-[1.02]"
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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#14B8A6] px-6 py-10 text-white">
        <div className="absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl" />

        <Container>
          <Link
            to="/cruises"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/20"
          >
            <ArrowLeft size={16} />
            Back to cruises
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_560px] lg:items-center">
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[6px] text-white/70">
                {cruise.cruiseLine}
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[1.02] md:text-7xl">
                {cruise.ship}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                {cruise.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <Ship size={16} />
                  {cruise.departurePort}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <CalendarDays size={16} />
                  {cruise.durationNights} nights
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <Star size={16} fill="currentColor" />
                  {cruise.rating} rating
                </span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[34px] bg-white/95 p-4 shadow-2xl backdrop-blur">
                <div className="relative overflow-hidden rounded-[26px]">
                  <img
                    src={cruise.image}
                    alt={cruise.ship}
                    className="h-[390px] w-full object-cover shadow-lg transition duration-500 hover:scale-[1.02]"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-slate-800 shadow-lg">
                    Starting from {formatPrice(cruise.priceFrom)}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {cruise.gallery.slice(0, 3).map((image, index) => (
                    <img
                      key={`${cruise.slug}-${index}`}
                      src={image}
                      alt=""
                      className="h-24 w-full rounded-2xl object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="-mt-8">
        <Container>
          <div className="rounded-[32px] bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
                  Departure
                </p>
                <p className="mt-2 text-lg font-black text-slate-900">
                  {cruise.departurePort}
                </p>
              </div>

              <div className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
                  Duration
                </p>
                <p className="mt-2 text-lg font-black text-slate-900">
                  {cruise.durationNights} nights
                </p>
              </div>

              <div className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
                  Region
                </p>
                <p className="mt-2 text-lg font-black text-slate-900">
                  {cruise.region}
                </p>
              </div>

              <div className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
                  Starting from
                </p>
                <p className="mt-2 text-2xl font-black text-slate-900">
                  {formatPrice(cruise.priceFrom)}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-10">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div className="rounded-[32px] bg-white p-8 shadow-xl">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-teal-500" />
                  <h2 className="text-3xl font-black text-slate-900">Overview</h2>
                </div>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {cruise.summary}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {cruise.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-xl">
                <div className="flex items-center gap-3">
                  <Users className="text-teal-500" />
                  <h2 className="text-3xl font-black text-slate-900">
                    Ship statistics
                  </h2>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-4">
                  <StatCard label="Passenger capacity" value={cruise.passengerCapacity} />
                  <StatCard label="Crew members" value={cruise.crewMembers} />
                  <StatCard label="Launched" value={cruise.launched} />
                  <StatCard label="Tonnage" value={cruise.tonnage} />
                </div>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-xl">
                <div className="flex items-center gap-3">
                  <Clock3 className="text-teal-500" />
                  <h2 className="text-3xl font-black text-slate-900">
                    Itinerary
                  </h2>
                </div>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                  {cruise.portsDescription}
                </p>

                <div className="mt-8 space-y-4">
                  {cruise.itinerary.map((stop, index) => (
                    <div
                      key={`${cruise.slug}-${stop}-${index}`}
                      className="flex items-center gap-4 rounded-[24px] bg-slate-50 p-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-black text-slate-900 shadow-sm">
                        {index + 1}
                      </div>
                      <div className="flex items-center gap-3 text-slate-800">
                        <MapPin size={16} className="text-slate-400" />
                        <span className="font-semibold">{stop}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-[32px] bg-white p-8 shadow-xl">
                  <div className="flex items-center gap-3">
                    <UtensilsCrossed className="text-teal-500" />
                    <h2 className="text-2xl font-black text-slate-900">
                      Dining
                    </h2>
                  </div>
                  <div className="mt-6 space-y-3">
                    {cruise.dining.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-slate-50 px-4 py-3 font-semibold text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] bg-white p-8 shadow-xl">
                  <div className="flex items-center gap-3">
                    <Music2 className="text-teal-500" />
                    <h2 className="text-2xl font-black text-slate-900">
                      Entertainment
                    </h2>
                  </div>
                  <div className="mt-6 space-y-3">
                    {cruise.entertainment.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-slate-50 px-4 py-3 font-semibold text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-xl">
                <div className="flex items-center gap-3">
                  <BedDouble className="text-teal-500" />
                  <h2 className="text-2xl font-black text-slate-900">
                    Cabin classes
                  </h2>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {cruise.cabinTypes.map((cabin) => (
                    <span
                      key={cabin}
                      className="rounded-full bg-gradient-to-r from-[#2563EB]/10 to-[#14B8A6]/10 px-4 py-2 text-sm font-semibold text-slate-800"
                    >
                      {cabin}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6 xl:sticky xl:top-6 xl:self-start">
              <div className="rounded-[32px] bg-white p-8 shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[4px] text-teal-500">
                  Cruise facts
                </p>

                <div className="mt-6 space-y-4">
                  <FactRow label="Cruise line" value={cruise.cruiseLine} />
                  <FactRow label="Ship" value={cruise.ship} />
                  <FactRow label="Ships from" value={cruise.departurePort} />
                  <FactRow label="Region" value={cruise.region} />
                  <FactRow label="Duration" value={`${cruise.durationNights} nights`} />
                  <FactRow label="Rating" value={`${cruise.rating} / 5`} />
                </div>
              </div>

              <div className="rounded-[32px] bg-gradient-to-br from-[#2563EB] to-[#14B8A6] p-8 text-white shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[4px] text-white/70">
                  Why travelers like it
                </p>

                <div className="mt-6 space-y-3">
                  {cruise.perfectFor.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white/12 px-4 py-3 backdrop-blur"
                    >
                      <CheckCircle2 size={16} />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[4px] text-white/60">
                  Planning tools
                </p>

                <h3 className="mt-4 text-2xl font-black">
                  Continue browsing or get support
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Compare this sailing with other cruises, or open support for help
                  with a demo booking flow.
                </p>

                <div className="mt-6 flex gap-3">
                  <Link
                    to="/cruises"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 font-bold text-slate-900 transition hover:scale-[1.01]"
                  >
                    <ArrowLeft size={16} />
                    More cruises
                  </Link>
                  <Link
                    to="/support"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 font-bold text-white transition hover:bg-white/15"
                  >
                    Need help
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-lg font-black text-slate-900">{value}</p>
    </div>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3 last:border-none last:pb-0">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-right font-semibold text-slate-900">{value}</span>
    </div>
  );
}

export default CruiseDetailsPage;