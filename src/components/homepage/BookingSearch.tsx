import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  ChevronDown,
  CircleAlert,
  Minus,
  PlaneLanding,
  PlaneTakeoff,
  Plus,
  Users,
} from "lucide-react";

import CategoryTabs from "./CategoryTabs";
import TripTypeToggle from "../search/TripTypeToggle";

const CABIN_OPTIONS = [
  "Economy",
  "Premium Economy",
  "Business",
  "First",
] as const;

type CabinOption = (typeof CABIN_OPTIONS)[number];

type AirportOption = {
  code: string;
  city: string;
  airport: string;
  state: string;
};

const AIRPORT_OPTIONS: AirportOption[] = [
  { code: "JFK", city: "New York", airport: "John F. Kennedy International Airport", state: "NY" },
  { code: "LGA", city: "New York", airport: "LaGuardia Airport", state: "NY" },
  { code: "EWR", city: "Newark", airport: "Newark Liberty International Airport", state: "NJ" },
  { code: "LAX", city: "Los Angeles", airport: "Los Angeles International Airport", state: "CA" },
  { code: "BUR", city: "Burbank", airport: "Hollywood Burbank Airport", state: "CA" },
  { code: "SFO", city: "San Francisco", airport: "San Francisco International Airport", state: "CA" },
  { code: "SJC", city: "San Jose", airport: "Norman Y. Mineta San Jose International Airport", state: "CA" },
  { code: "ORD", city: "Chicago", airport: "O'Hare International Airport", state: "IL" },
  { code: "MDW", city: "Chicago", airport: "Midway International Airport", state: "IL" },
  { code: "SEA", city: "Seattle", airport: "Seattle-Tacoma International Airport", state: "WA" },
  { code: "ATL", city: "Atlanta", airport: "Hartsfield-Jackson Atlanta International Airport", state: "GA" },
  { code: "DFW", city: "Dallas", airport: "Dallas/Fort Worth International Airport", state: "TX" },
  { code: "DAL", city: "Dallas", airport: "Dallas Love Field", state: "TX" },
  { code: "DEN", city: "Denver", airport: "Denver International Airport", state: "CO" },
  { code: "BOS", city: "Boston", airport: "Logan International Airport", state: "MA" },
  { code: "MIA", city: "Miami", airport: "Miami International Airport", state: "FL" },
  { code: "FLL", city: "Fort Lauderdale", airport: "Fort Lauderdale-Hollywood International Airport", state: "FL" },
  { code: "MCO", city: "Orlando", airport: "Orlando International Airport", state: "FL" },
  { code: "CLT", city: "Charlotte", airport: "Charlotte Douglas International Airport", state: "NC" },
  { code: "DCA", city: "Washington", airport: "Ronald Reagan Washington National Airport", state: "DC" },
  { code: "IAD", city: "Washington", airport: "Washington Dulles International Airport", state: "VA" },
  { code: "LAS", city: "Las Vegas", airport: "Harry Reid International Airport", state: "NV" },
  { code: "SAN", city: "San Diego", airport: "San Diego International Airport", state: "CA" },
  { code: "PDX", city: "Portland", airport: "Portland International Airport", state: "OR" },
  { code: "SLC", city: "Salt Lake City", airport: "Salt Lake City International Airport", state: "UT" },
  { code: "AUS", city: "Austin", airport: "Austin-Bergstrom International Airport", state: "TX" },
  { code: "MSP", city: "Minneapolis", airport: "Minneapolis–Saint Paul International Airport", state: "MN" },
  { code: "IAH", city: "Houston", airport: "George Bush Intercontinental Airport", state: "TX" },
];

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatAirportValue(option: AirportOption) {
  return `${option.code} ${option.city}`;
}

function formatDateLabel(value: string) {
  if (!value) return "";

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function scoreAirportOption(option: AirportOption, query: string) {
  if (!query) return 1;

  const normalizedQuery = normalizeText(query);
  const haystack = normalizeText(
    `${option.code} ${option.city} ${option.airport} ${option.state}`
  );

  let score = 0;

  if (normalizeText(option.code) === normalizedQuery) score += 1000;
  if (normalizeText(option.city) === normalizedQuery) score += 900;
  if (normalizeText(option.airport) === normalizedQuery) score += 800;

  if (normalizeText(option.code).startsWith(normalizedQuery)) score += 700;
  if (normalizeText(option.city).startsWith(normalizedQuery)) score += 650;
  if (normalizeText(option.airport).startsWith(normalizedQuery)) score += 600;

  if (haystack.includes(normalizedQuery)) score += 400;

  return score;
}

type AirportFieldProps = {
  label: string;
  icon: ReactNode;
  value: string;
  placeholder: string;
  suggestions: AirportOption[];
  onValueChange: (value: string) => void;
};

function AirportField({
  label,
  icon,
  value,
  placeholder,
  suggestions,
  onValueChange,
}: AirportFieldProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const visibleSuggestions = useMemo(() => {
    const ranked = suggestions
      .map((item) => ({
        item,
        score: scoreAirportOption(item, value),
      }))
      .filter(({ score }) => value.trim() === "" || score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(({ item }) => item);

    if (value.trim() === "") {
      return suggestions.slice(0, 6);
    }

    return ranked;
  }, [suggestions, value]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="block h-[180px]">
      <span className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-slate-400">
        {label}
      </span>

      <div ref={wrapperRef} className="relative">
        <div
          className="
            flex h-[120px] flex-col justify-between
            rounded-[28px] border border-slate-200 bg-white px-5 py-5
            shadow-sm transition-all duration-300
            hover:-translate-y-0.5 hover:border-[#2563EB]/30 hover:shadow-lg
            focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-blue-100
          "
        >
          <div className="flex items-center gap-3">
            <div className="shrink-0 text-slate-400">{icon}</div>

            <input
              value={value}
              onChange={(e) => {
                onValueChange(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              onBlur={() => {
                window.setTimeout(() => setOpen(false), 150);
              }}
              placeholder={placeholder}
              autoComplete="off"
              className="
                w-full bg-transparent
                text-[1.45rem] font-semibold text-slate-900 outline-none
                placeholder:text-slate-300
              "
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-slate-500">
              Search by city, airport name, or code
            </p>

            {value ? (
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onValueChange("")}
                className="
                  rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold
                  text-slate-500 transition-colors hover:bg-slate-200
                "
              >
                Clear
              </button>
            ) : null}
          </div>
        </div>

        {open && visibleSuggestions.length > 0 ? (
          <div
            className="
              absolute left-0 right-0 top-[calc(100%+10px)] z-50
              max-h-80 overflow-hidden rounded-[24px] border border-slate-200 bg-white
              shadow-2xl
            "
          >
            <div className="max-h-80 overflow-y-auto">
              {visibleSuggestions.map((item) => (
                <button
                  key={`${item.code}-${item.city}`}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    onValueChange(formatAirportValue(item));
                    setOpen(false);
                  }}
                  className="
                    flex w-full items-center justify-between gap-4 border-b
                    border-slate-100 px-4 py-4 text-left transition-colors
                    duration-200 last:border-b-0 hover:bg-slate-50
                  "
                >
                  <div>
                    <p className="text-base font-bold text-slate-900">
                      {item.city}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{item.airport}</p>
                  </div>

                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {item.code}
                    </span>
                    <span className="text-xs text-slate-400">{item.state}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {open && value.trim() && visibleSuggestions.length === 0 ? (
          <div
            className="
              absolute left-0 right-0 top-[calc(100%+10px)] z-50 rounded-[24px]
              border border-slate-200 bg-white p-4 text-sm text-slate-500 shadow-2xl
            "
          >
            No matching airports found.
          </div>
        ) : null}
      </div>
    </div>
  );
}

type DateFieldProps = {
  value: string;
  onValueChange: (value: string) => void;
  minDate: string;
};

function DateField({ value, onValueChange, minDate }: DateFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const openPicker = () => {
    const input = inputRef.current as
      | (HTMLInputElement & { showPicker?: () => void })
      | null;

    if (!input) return;

    if (typeof input.showPicker === "function") {
      input.showPicker();
      return;
    }

    input.focus();
    input.click();
  };

  return (
    <div className="block h-[180px]">
      <span className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-slate-400">
        Trip Dates
      </span>

      <button
        type="button"
        onClick={openPicker}
        className="
          flex h-[120px] w-full items-center justify-between rounded-[28px]
          border border-slate-200 bg-white px-5 py-5 text-left shadow-sm
          transition-all duration-300
          hover:-translate-y-0.5 hover:border-[#2563EB]/30 hover:shadow-lg
          focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100
        "
      >
        <div className="flex items-center gap-3">
          <CalendarDays className="shrink-0 text-slate-400" size={18} />
          <div>
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-slate-400">
              Departure
            </p>
            <p className="mt-1 text-[1.45rem] font-semibold text-slate-900">
              {value ? formatDateLabel(value) : "Select date"}
            </p>
          </div>
        </div>

        <span
          className="
            rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500
          "
        >
          {value ? "Change" : "Pick"}
        </span>
      </button>

      <input
        ref={inputRef}
        type="date"
        value={value}
        min={minDate}
        onChange={(e) => onValueChange(e.target.value)}
        className="sr-only"
        aria-label="Departure date"
      />
    </div>
  );
}

type TravelerPanelProps = {
  adults: number;
  childrenCount: number;
  infants: number;
  cabin: CabinOption;
  setAdults: (value: number) => void;
  setChildrenCount: (value: number) => void;
  setInfants: (value: number) => void;
  setCabin: (value: CabinOption) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  passengerCount: number;
};

function TravelerPanel({
  adults,
  childrenCount,
  infants,
  cabin,
  setAdults,
  setChildrenCount,
  setInfants,
  setCabin,
  open,
  setOpen,
  passengerCount,
}: TravelerPanelProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [setOpen]);

  return (
    <div ref={panelRef} className="relative block h-[180px]">
      <span className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-slate-400">
        Travelers
      </span>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex h-[120px] w-full flex-col justify-between rounded-[28px]
          border border-slate-200 bg-white px-5 py-5 text-left shadow-sm
          transition-all duration-300
          hover:-translate-y-0.5 hover:border-[#2563EB]/30 hover:shadow-lg
          focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Users className="shrink-0 text-slate-400" size={18} />
            <h3 className="text-2xl font-black text-slate-900">
              {passengerCount} Traveler{passengerCount > 1 ? "s" : ""}
            </h3>
          </div>

          <ChevronDown
            className={`shrink-0 text-slate-400 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            size={20}
          />
        </div>

        <p className="text-base font-semibold text-slate-500">{cabin}</p>
      </button>

      {open ? (
        <div
          className="
            absolute right-0 top-[calc(100%+10px)] z-50 w-[360px]
            rounded-[28px] border border-slate-200 bg-white p-5 shadow-2xl
          "
        >
          <div className="space-y-5">
            {[
              {
                label: "Adults",
                hint: "Age 12+",
                value: adults,
                setValue: setAdults,
              },
              {
                label: "Children",
                hint: "Age 2-11",
                value: childrenCount,
                setValue: setChildrenCount,
              },
              {
                label: "Infants",
                hint: "Under 2 years",
                value: infants,
                setValue: setInfants,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
              >
                <div>
                  <p className="text-lg font-bold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-500">{item.hint}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => item.setValue(Math.max(0, item.value - 1))}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="w-8 text-center text-xl font-black text-slate-900">
                    {item.value}
                  </span>

                  <button
                    type="button"
                    onClick={() => item.setValue(item.value + 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            ))}

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-slate-400">
                Cabin Class
              </p>

              <div className="grid grid-cols-2 gap-3">
                {CABIN_OPTIONS.map((option) => {
                  const active = cabin === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setCabin(option)}
                      className={`
                        rounded-2xl border px-4 py-4 text-sm font-bold transition-all duration-300
                        ${
                          active
                            ? "border-transparent bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-white"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }
                      `}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="
                h-14 w-full rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6]
                font-bold text-white transition-all duration-300 hover:scale-[1.01]
              "
            >
              Done
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function BookingSearch() {
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabin, setCabin] = useState<CabinOption>("Economy");
  const [openTravelerPanel, setOpenTravelerPanel] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const passengerCount = adults + children + infants;

  const canSearch =
    from.trim().length > 0 &&
    to.trim().length > 0 &&
    departureDate.length > 0;

  const topAirports = useMemo(() => AIRPORT_OPTIONS.slice(0, 8), []);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!from.trim() || !to.trim() || !departureDate) {
      setError("Please enter from, to, and departure date.");
      return;
    }

    const searchParams = new URLSearchParams({
      from: from.trim(),
      to: to.trim(),
      departure: departureDate,
      passengers: String(passengerCount),
      cabin,
    });

    navigate(`/flights?${searchParams.toString()}`);
  };

  return (
    <div className="mx-auto w-full max-w-6xl">
      <CategoryTabs />

      <div className="mt-6">
        <TripTypeToggle />
      </div>

      <form
        onSubmit={handleSearch}
        className="
          relative mt-6 overflow-visible rounded-[36px]
          border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50/80
          p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl
        "
      >
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 xl:grid-cols-4">
          <AirportField
            label="Airport"
            icon={<PlaneTakeoff size={18} />}
            value={from}
            onValueChange={setFrom}
            placeholder="Search airport"
            suggestions={AIRPORT_OPTIONS}
          />

          <AirportField
            label="Airport"
            icon={<PlaneLanding size={18} />}
            value={to}
            onValueChange={setTo}
            placeholder="Search airport"
            suggestions={AIRPORT_OPTIONS}
          />

          <DateField
            value={departureDate}
            onValueChange={setDepartureDate}
            minDate={today}
          />

          <TravelerPanel
            adults={adults}
            childrenCount={children}
            infants={infants}
            cabin={cabin}
            setAdults={setAdults}
            setChildrenCount={setChildren}
            setInfants={setInfants}
            setCabin={setCabin}
            open={openTravelerPanel}
            setOpen={setOpenTravelerPanel}
            passengerCount={passengerCount}
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {topAirports.map((airport) => (
            <button
              key={airport.code}
              type="button"
              onClick={() => {
                const airportValue = formatAirportValue(airport);

                if (!from) setFrom(airportValue);
                else if (!to) setTo(airportValue);
                else setFrom(airportValue);
              }}
              className="
                rounded-full border border-slate-200 bg-white px-4 py-2
                text-sm font-semibold text-slate-700 shadow-sm transition-all
                duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md
              "
            >
              {airport.code} · {airport.city}
            </button>
          ))}
        </div>

        <div className="mt-7">
          <button
            type="submit"
            disabled={!canSearch}
            className="
              h-16 w-full rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6]
              text-lg font-bold text-white shadow-xl transition-all duration-300
              hover:scale-[1.01] hover:shadow-2xl active:scale-[0.99]
              disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100
            "
          >
            Search Flights
          </button>
        </div>

        {error && (
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-rose-500">
            <CircleAlert size={16} />
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

export default BookingSearch;