import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Ship,
  Sparkles,
  Star,
  MapPin,
  Clock3,
  Filter,
} from "lucide-react";

import Container from "../../components/common/Container";
import { useCurrency } from "../../context/CurrencyContext";
import { cruises } from "../../data/cruises/cruises";

function CruisesPage() {
  const { formatPrice } = useCurrency();

  const [query, setQuery] = useState("");
  const [portFilter, setPortFilter] = useState("All");
  const [lineFilter, setLineFilter] = useState("All");
  const [durationFilter, setDurationFilter] = useState("All");

  const departurePorts = useMemo(
    () => ["All", ...new Set(cruises.map((cruise) => cruise.departurePort))],
    []
  );

  const cruiseLines = useMemo(
    () => ["All", ...new Set(cruises.map((cruise) => cruise.cruiseLine))],
    []
  );

  const filteredCruises = useMemo(() => {
    const q = query.trim().toLowerCase();

    return cruises.filter((cruise) => {
      const matchesQuery =
        !q ||
        cruise.cruiseLine.toLowerCase().includes(q) ||
        cruise.ship.toLowerCase().includes(q) ||
        cruise.departurePort.toLowerCase().includes(q) ||
        cruise.region.toLowerCase().includes(q);

      const matchesPort =
        portFilter === "All" || cruise.departurePort === portFilter;

      const matchesLine = lineFilter === "All" || cruise.cruiseLine === lineFilter;

      const matchesDuration =
        durationFilter === "All" ||
        (durationFilter === "Short" && cruise.durationNights <= 4) ||
        (durationFilter === "Mid" &&
          cruise.durationNights >= 5 &&
          cruise.durationNights <= 7) ||
        (durationFilter === "Long" && cruise.durationNights >= 8);

      return matchesQuery && matchesPort && matchesLine && matchesDuration;
    });
  }, [query, portFilter, lineFilter, durationFilter]);

  return (
    <div className="bg-slate-100 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#14B8A6] px-6 py-16 text-white">
        <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl" />

        <Container>
          <div className="relative max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[5px] text-white/70">
              Discover America
            </p>

            <h1 className="mt-5 text-5xl font-black md:text-7xl">
              Explore Cruises from the U.S.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Browse real cruise lines, U.S. departure ports, ship details, and
              Caribbean and Bahamas sailings in a polished travel-style layout.
            </p>
          </div>
        </Container>
      </section>

      <section className="-mt-8">
        <Container>
          <div className="rounded-[36px] border border-slate-200/80 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div className="grid gap-4 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.7fr]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search ship, line, port, or region"
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
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="h-16 rounded-2xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-900 outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
              >
                <option value="All">Any Duration</option>
                <option value="Short">Short (1–4 nights)</option>
                <option value="Mid">Mid (5–7 nights)</option>
                <option value="Long">Long (8+ nights)</option>
              </select>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Filter size={16} />
                {filteredCruises.length} cruises
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <Ship size={16} />
                U.S. departures only
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
                    Featured Cruises
                  </p>
                  <h2 className="mt-3 text-4xl font-black text-slate-900">
                    Real U.S. sailings and homeports
                  </h2>
                </div>
              </div>

              {filteredCruises.length === 0 ? (
                <div className="rounded-[32px] bg-white p-16 text-center shadow-xl">
                  <h3 className="text-3xl font-black text-slate-900">
                    No cruises found
                  </h3>
                  <p className="mt-4 text-slate-500">
                    Try removing a filter or searching a different port.
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
                              Duration
                            </p>
                            <p className="mt-1 font-semibold">
                              {cruise.durationNights} nights
                            </p>
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-xs font-bold uppercase tracking-[2px] text-slate-400">
                              Region
                            </p>
                            <p className="mt-1 font-semibold">{cruise.region}</p>
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
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
                              Starting from
                            </p>
                            <p className="mt-1 text-2xl font-black text-slate-900">
                              {formatPrice(cruise.priceFrom)}
                            </p>
                          </div>

                          <span className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] px-4 py-3 text-sm font-bold text-white">
                            View details <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-[32px] bg-white p-6 shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[4px] text-teal-500">
                  Popular Ports
                </p>
                <div className="mt-5 space-y-3">
                  {departurePorts
                    .filter((port) => port !== "All")
                    .map((port) => (
                      <div
                        key={port}
                        className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin size={16} className="text-slate-400" />
                          <span className="font-semibold text-slate-800">
                            {port}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="rounded-[32px] bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[4px] text-teal-300">
                  Why cruise from the U.S.
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                  <li className="flex items-start gap-3">
                    <Clock3 size={18} className="mt-0.5 text-teal-300" />
                    Shorter travel time to the ship and easier airport connections.
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock3 size={18} className="mt-0.5 text-teal-300" />
                    Easy Bahamas and Caribbean access from Florida and Texas ports.
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock3 size={18} className="mt-0.5 text-teal-300" />
                    Great mix of luxury, family, and premium cruise styles.
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default CruisesPage;