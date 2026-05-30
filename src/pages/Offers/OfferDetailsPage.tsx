import { Gift, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function OfferDetailsPage() {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div
          className="
            rounded-[40px]
            bg-white
            p-12
            text-center
            shadow-xl
          "
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-white">
            <Gift size={36} />
          </div>

          <h1 className="mt-8 text-5xl font-black text-slate-900">
            Offer Details
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            This promotion is currently unavailable.
            Live partner integrations and redemption
            systems will be added in a future release.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700">
            <Sparkles size={16} />
            Demo Version
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="
                rounded-2xl
                bg-gradient-to-r
                from-[#2563EB]
                to-[#14B8A6]
                px-8
                py-4
                font-bold
                text-white
                transition
                hover:scale-[1.02]
              "
            >
              Return Home
            </Link>

            <Link
              to="/flights"
              className="
                rounded-2xl
                border
                border-slate-200
                px-8
                py-4
                font-bold
                text-slate-700
                hover:bg-slate-50
              "
            >
              Continue Exploring
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferDetailsPage;