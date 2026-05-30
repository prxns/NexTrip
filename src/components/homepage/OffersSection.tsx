import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, BadgePercent, Sparkles } from "lucide-react";
import Container from "../common/Container";

type OfferTab =
  | "All Offers"
  | "Bank Offers"
  | "Flights"
  | "Hotels"
  | "Holidays"
  | "Trains"
  | "Cabs"
  | "Bus"
  | "Forex"
  | "More";

type OfferItem = {
  id: string;
  tab: Exclude<OfferTab, "All Offers">;
  label: string;
  title: string;
  description: string;
  code?: string;
  badge?: string;
  cta: string;
  image: string;
};

const tabs: OfferTab[] = [
  "All Offers",
  "Bank Offers",
  "Flights",
  "Hotels",
  "Holidays",
  "Trains",
  "Cabs",
  "Bus",
  "Forex",
  "More",
];

const offers: OfferItem[] = [
  {
    id: "flight-air-india",
    tab: "Flights",
    label: "Intl Flights",
    title: "Live now: Save on international air travel",
    description: "Get premium fares, smart add-ons, and exclusive flight savings.",
    code: "FLYMORE",
    badge: "T&C'S APPLY",
    cta: "EXPLORE NOW",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "holiday-packages",
    tab: "Holidays",
    label: "Holidays",
    title: "Grab up to 20% off on holiday packages",
    description: "Choose curated getaways, stays, and experiences for your next trip.",
    code: "TRIP20",
    badge: "NEW",
    cta: "BOOK NOW",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "train-offer",
    tab: "Trains",
    label: "Rail Deals",
    title: "Rail journeys with festive savings",
    description: "Unlock smoother train booking with local and long-distance offers.",
    code: "RAILSAVE",
    badge: "T&C'S APPLY",
    cta: "BOOK NOW",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "bus-offer",
    tab: "Bus",
    label: "Bus",
    title: "Grab up to ₹300 off on bus tickets",
    description: "Travel intercity with a lighter fare and flexible booking options.",
    code: "BUS300",
    badge: "LIMITED TIME",
    cta: "BOOK NOW",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "cab-voucher",
    tab: "Cabs",
    label: "Cabs",
    title: "Airport cab vouchers for your next ride",
    description: "Quick rides, reliable pickups, and discounted cab booking support.",
    code: "CABRIDE",
    badge: "HOT",
    cta: "CHECK OFFER",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "hotel-stay",
    tab: "Hotels",
    label: "Hotels",
    title: "Stay smarter with premium hotel deals",
    description: "Save on luxury stays, boutique hotels, and weekend getaways.",
    code: "STAY15",
    badge: "BANK DEAL",
    cta: "SEE DEALS",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "forex-card",
    tab: "Forex",
    label: "Forex",
    title: "Travel smarter with forex card benefits",
    description: "Better exchange convenience, travel-ready balances, and ease abroad.",
    code: "FOREXTRIP",
    badge: "POPULAR",
    cta: "LEARN MORE",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "bank-offer-1",
    tab: "Bank Offers",
    label: "Bank Offer",
    title: "Use selected cards and save instantly",
    description: "Special card-linked rewards for flights, stays, and travel bookings.",
    code: "CARDWIN",
    badge: "T&C'S APPLY",
    cta: "VIEW BANK OFFERS",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "bank-offer-2",
    tab: "Bank Offers",
    label: "Rewards",
    title: "Earn bonus points on every eligible booking",
    description: "Unlock extra value when you book with select payment partners.",
    code: "BONUS10",
    badge: "NEW",
    cta: "VIEW DETAILS",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "more-gift-card",
    tab: "More",
    label: "Gift Cards",
    title: "Gift cards for every kind of traveler",
    description: "A simple way to gift travel credit for future trips and surprises.",
    code: "GIFTTRIP",
    badge: "GREAT GIFT",
    cta: "BUY GIFT CARD",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "more-mice",
    tab: "More",
    label: "MICE",
    title: "Offsites, events, and group travel support",
    description: "Plan professional travel experiences for meetings and team stays.",
    code: "TEAMTRIP",
    badge: "BUSINESS",
    cta: "ENQUIRE NOW",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "holiday-escape",
    tab: "Holidays",
    label: "Holiday Sale",
    title: "Escape to the hills with limited-time savings",
    description: "Browse scenic escapes, mountain stays, and handpicked packages.",
    code: "HILLTIME",
    badge: "TRENDING",
    cta: "BOOK NOW",
    image:
      "https://images.unsplash.com/photo-1500043357865-c6b8827edf7c?q=80&w=900&auto=format&fit=crop",
  },
];

function OffersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<OfferTab>("All Offers");

  const filteredOffers = useMemo(() => {
    if (activeTab === "All Offers") return offers;
    return offers.filter((offer) => offer.tab === activeTab);
  }, [activeTab]);

  const scroll = (direction: -1 | 1) => {
    scrollRef.current?.scrollBy({
      left: direction * 520,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-slate-100 py-24">
      <Container>
        <div className="rounded-[36px] bg-white px-6 py-8 shadow-[0_20px_70px_rgba(15,23,42,0.10)] md:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[4px] text-[#14B8A6]">
                <Sparkles size={16} />
                Offers
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0F172A]">
                Deals, discounts, and travel perks
              </h2>
            </div>

            <div className="flex items-center gap-3 self-start lg:self-auto">
              <button
                type="button"
                onClick={() => scroll(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:shadow-md"
                aria-label="Scroll offers left"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => scroll(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:shadow-md"
                aria-label="Scroll offers right"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div
            className="
              mt-6
              flex
              gap-3
              overflow-x-auto
              pb-2
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`
                    flex-none
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-[#2563EB] text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }
                  `}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div
            ref={scrollRef}
            className="
              mt-6
              grid
              max-h-[388px]
              grid-flow-col
              grid-rows-2
              gap-4
              overflow-x-auto
              overflow-y-hidden
              pb-3
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {filteredOffers.map((offer) => (
              <article
                key={offer.id}
                className="
                  group
                  flex
                  h-[170px]
                  w-[460px]
                  min-w-[460px]
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div className="relative w-[150px] shrink-0">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/20" />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[3px] text-slate-400">
                          {offer.label}
                        </p>

                        <h3 className="mt-2 h-[52px] overflow-hidden text-[18px] font-bold leading-6 text-slate-900">
                          {offer.title}
                        </h3>
                      </div>

                      <span className="shrink-0 text-[11px] uppercase tracking-[1.5px] text-slate-400">
                        {offer.badge}
                      </span>
                    </div>

                    <p className="mt-2 h-[42px] overflow-hidden text-sm leading-5 text-slate-600">
                      {offer.description}
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-3">
                    <div>
                      {offer.code ? (
                        <p className="text-sm text-slate-500">
                          Code:{" "}
                          <span className="font-semibold text-slate-900">
                            {offer.code}
                          </span>
                        </p>
                      ) : (
                        <div className="h-5" />
                      )}
                    </div>

                    <button
                      type="button"
                      className="text-sm font-bold text-[#0A84FF] transition-colors hover:text-[#2563EB]"
                    >
                      {offer.cta}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="flex items-center gap-2 text-sm text-slate-500">
              <BadgePercent size={16} className="text-[#14B8A6]" />
              Local offers only for now, easy to swap with live deals later.
            </p>

            <button
              type="button"
              onClick={() => scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" })}
              className="text-sm font-semibold text-[#2563EB]"
            >
              Back to start
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OffersSection;