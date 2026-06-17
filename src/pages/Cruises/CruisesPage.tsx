import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  Filter,
  MapPin,
  Search,
  Ship,
  Sparkles,
  Star,
} from "lucide-react";

import Container from "../../components/common/Container";
import { useCurrency } from "../../context/CurrencyContext";
import { cruises } from "../../data/cruises/cruises";

type SortMode = "recommended" | "price-asc" | "price-desc" | "rating-desc" | "duration-asc";
type DurationMode = "All" | "Short" | "Mid" | "Long";

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function CruisesPage() {
  const { formatPrice } = useCurrency();

  const [query, setQuery] = useState("");
  const [portFilter, setPortFilter] = useState("All");
  const [lineFilter, setLineFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("All");
  const [durationFilter, setDurationFilter] = useState<DurationMode>("All");
  const [sortBy, setSortBy] = useState<SortMode>("recommended");

  const featuredCruise = cruises[0];

  const departurePorts = useMemo(
    () => ["All", ...new Set(cruises.map((cruise) => cruise.departurePort))],
    []
  );

  const cruiseLines = useMemo(
    () => ["All", ...new Set(cruises.map((cruise) => cruise.cruiseLine))],
    []
  );

  const regionOptions = useMemo(
    () => ["All", ...new Set(cruises.map((cruise) => cruise.region))],
    []
  );

  const portCounts = useMemo(
    () =>
      departurePorts
        .filter((port) => port !== "All")
        .map((port) => ({
          port,
          count: cruises.filter((cruise) => cruise.departurePort === port).length,
        })),
    [departurePorts]
  );

  const lineCounts = useMemo(
    () =>
      cruiseLines
        .filter((line) => line !== "All")
        .map((line) => ({
          line,
          count: cruises.filter((cruise) => cruise.cruiseLine === line).length,
        })),
    [cruiseLines]
  );

  const averageRating = useMemo(() => {
    const total = cruises.reduce((sum, cruise) => sum + cruise.rating, 0);
    return total / cruises.length;
  }, []);

  const filteredCruises = useMemo(() => {
    const q = normalize(query);

    const list = cruises.filter((cruise) => {
      const searchBlob = normalize(
        [
          cruise.cruiseLine,
          cruise.ship,
          cruise.departurePort,
          cruise.region,
          cruise.summary,
          ...cruise.highlights,
          ...cruise.perfectFor,
        ].join(" ")
      );

      const matchesQuery = !q || searchBlob.includes(q);
      const matchesPort = portFilter === "All" || cruise.departurePort === portFilter;
      const matchesLine = lineFilter === "All" || cruise.cruiseLine === lineFilter;
      const matchesRegion =
        regionFilter === "All" || cruise.region === regionFilter;

      const matchesDuration =
        durationFilter === "All" ||
        (durationFilter === "Short" && cruise.durationNights <= 4) ||
        (durationFilter === "Mid" &&
          cruise.durationNights >= 5 &&
          cruise.durationNights <= 7) ||
        (durationFilter === "Long" && cruise.durationNights >= 8);

      return matchesQuery && matchesPort && matchesLine && matchesRegion && matchesDuration;
    });

    switch (sortBy) {
      case "price-asc":
        return [...list].sort((a, b) => a.priceFrom - b.priceFrom);
      case "price-desc":
        return [...list].sort((a, b) => b.priceFrom - a.priceFrom);
      case "rating-desc":
        return [...list].sort((a, b) => b.rating - a.rating);
      case "duration-asc":
        return [...list].sort((a, b) => a.durationNights - b.durationNights);
      default:
        return list;
    }
  }, [query, portFilter, lineFilter, regionFilter, durationFilter, sortBy]);

  return (
    <div className="bg-slate-100 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#14B8A6] px-6 py-16 text-white">
        <div className="absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl" />

        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[6px] text-white/70">
                Premium ocean voyages
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[1.02] md:text-7xl">
                Curated cruises from America&apos;s best departure ports
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                Explore cruise lines, ships, and vacation
                experiences sailing from Miami, Port Canaveral, Galveston, and
                Fort Lauderdale.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <StatCard label="Voyages" value={String(cruises.length)} />
                <StatCard label="Ports" value={String(departurePorts.length - 1)} />
                <StatCard label="Lines" value={String(cruiseLines.length - 1)} />
                <StatCard label="Avg rating" value={averageRating.toFixed(1)} />
              </div>

              <div className="mt-8 flex flex-wrap gap-2 text-sm font-semibold text-white/85">
                {["Miami", "Port Canaveral", "Galveston", "Fort Lauderdale"].map(
                  (port) => (
                    <span
                      key={port}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur"
                    >
                      {port}
                    </span>
                  )
                )}
              </div>
            </div>

            <Link to={`/cruises/${featuredCruise.slug}`} className="group block">
              <div className="rounded-[34px] bg-white/95 p-4 text-slate-900 shadow-2xl backdrop-blur">
                <div className="relative overflow-hidden rounded-[28px]">
                  <img
                    src={featuredCruise.image}
                    alt={featuredCruise.ship}
                    className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-slate-800 shadow-lg">
                    Featured voyage
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-end justify-between gap-4 text-white">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[3px] text-white/70">
                          {featuredCruise.cruiseLine}
                        </p>
                        <h2 className="mt-2 text-3xl font-black">
                          {featuredCruise.ship}
                        </h2>
                        <p className="mt-2 text-sm text-white/80">
                          {featuredCruise.departurePort} • {featuredCruise.region}
                        </p>
                      </div>

                      <div className="rounded-[22px] bg-white/15 px-4 py-3 text-right backdrop-blur">
                        <p className="text-xs font-bold uppercase tracking-[3px] text-white/70">
                          From
                        </p>
                        <p className="mt-1 text-2xl font-black">
                          {formatPrice(featuredCruise.priceFrom)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <MiniFact label="Duration" value={`${featuredCruise.durationNights} nights`} />
                  <MiniFact label="Rating" value={`${featuredCruise.rating} / 5`} />
                  <MiniFact label="Deck life" value="Resort-style" />
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      <section className="-mt-8">
        <Container>
          <div className="rounded-[36px] border border-slate-200/80 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div className="grid gap-4 xl:grid-cols-[1.15fr_0.8fr_0.8fr_0.9fr_0.8fr_0.8fr]">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search ship, line, port, region, or itinerary"
                  className="h-16 w-full rounded-2xl border border-slate-200 bg-white px-11 text-base font-semibold text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <select
                value={portFilter}
                onChange={(e) => setPortFilter(e.target.value)}
                className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
              >
                {departurePorts.map((port) => (
                  <option key={port} value={port}>
                    {port}
                  </option>
                ))}
              </select>

              <select
                value={lineFilter}
                onChange={(e) => setLineFilter(e.target.value)}
                className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
              >
                {cruiseLines.map((line) => (
                  <option key={line} value={line}>
                    {line}
                  </option>
                ))}
              </select>

              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
              >
                {regionOptions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value as DurationMode)}
                className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
              >
                <option value="All">Any duration</option>
                <option value="Short">Short (1–4 nights)</option>
                <option value="Mid">Mid (5–7 nights)</option>
                <option value="Long">Long (8+ nights)</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortMode)}
                className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="rating-desc">Rating: highest</option>
                <option value="duration-asc">Duration: shortest</option>
              </select>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Filter size={16} />
                {filteredCruises.length} voyages
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Ship size={16} />
                U.S. departures
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Sparkles size={16} />
                Premium sailings
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-10">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[1fr_320px]">
            <div>
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[4px] text-teal-500">
                    Featured cruises
                  </p>
                  <h2 className="mt-3 text-4xl font-black text-slate-900">
                    Real ships, real ports, polished pricing
                  </h2>
                </div>
              </div>

              {filteredCruises.length === 0 ? (
                <div className="rounded-[32px] bg-white p-16 text-center shadow-xl">
                  <h3 className="text-3xl font-black text-slate-900">
                    No cruises found
                  </h3>
                  <p className="mt-4 text-slate-500">
                    Try widening the filters or changing the search text.
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
                  {filteredCruises.map((cruise) => (
                    <Link
                      key={cruise.slug}
                      to={`/cruises/${cruise.slug}`}
                      className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={cruise.image}
                          alt={cruise.ship}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-slate-800">
                          <Sparkles size={14} className="text-teal-500" />
                          {cruise.cruiseLine}
                        </div>
                        <div className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-slate-800 shadow-lg">
                          {cruise.durationNights} nights
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-2xl font-black text-slate-900">
                              {cruise.ship}
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">
                              {cruise.departurePort}
                            </p>
                          </div>

                          <div className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-2 text-sm font-bold text-amber-700">
                            <Star size={14} fill="currentColor" />
                            {cruise.rating}
                          </div>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
                          <div className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-xs font-bold uppercase tracking-[2px] text-slate-400">
                              Region
                            </p>
                            <p className="mt-1 font-semibold">{cruise.region}</p>
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-xs font-bold uppercase tracking-[2px] text-slate-400">
                              Starting from
                            </p>
                            <p className="mt-1 font-semibold">
                              {formatPrice(cruise.priceFrom)}
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {cruise.highlights.slice(0, 3).map((item) => (
                            <span
                              key={item}
                              className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                            <Clock3 size={16} />
                            View voyage details
                          </div>

                          <span className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] px-4 py-3 text-sm font-bold text-white">
                            Explore <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <aside className="space-y-6 xl:sticky xl:top-6 xl:self-start">
              <div className="rounded-[32px] bg-white p-6 shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[4px] text-teal-500">
                  Popular ports
                </p>

                <div className="mt-5 space-y-3">
                  {portCounts.map((item) => (
                    <div
                      key={item.port}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin size={16} className="text-slate-400" />
                        <span className="font-semibold text-slate-800">
                          {item.port}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-slate-500">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] bg-white p-6 shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[4px] text-teal-500">
                  Cruise lines
                </p>

                <div className="mt-5 space-y-3">
                  {lineCounts.map((item) => (
                    <div
                      key={item.line}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      <span className="font-semibold text-slate-800">{item.line}</span>
                      <span className="text-sm font-bold text-slate-500">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] bg-slate-900 p-6 text-white shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[4px] text-white/60">
                  Planning help
                </p>

                <h3 className="mt-4 text-2xl font-black">
                  Need a hand choosing a sailing?
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Use the support page for demo-safe guidance, or open a voyage and
                  compare ship style, route length, and departure port.
                </p>

                <Link
                  to="/support"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 font-bold text-slate-900 transition hover:scale-[1.01]"
                >
                  Go to support
                </Link>
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
    <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur">
      <p className="text-[11px] font-bold uppercase tracking-[3px] text-white/70">
        {label}
      </p>
      <p className="mt-2 text-lg font-black text-white">{value}</p>
    </div>
  );
}

function MiniFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

export default CruisesPage;