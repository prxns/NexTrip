import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { useCurrency } from "../../context/CurrencyContext";

function CabBookingPage() {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const [searchParams] = useSearchParams();

  const ride = searchParams.get("ride") || "Cab Ride";
  const from = searchParams.get("from") || "Pickup";
  const to = searchParams.get("to") || "Drop";
  const passengers = searchParams.get("passengers") || "1";
  const distance = Number(searchParams.get("distance") || 0);
  const fare = Number(searchParams.get("fare") || 0);
  const eta = Number(searchParams.get("eta") || 5);

  const taxes = Math.round(fare * 0.08);
  const serviceFee = 20;
  const total = fare + taxes + serviceFee;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [bookingReference] = useState(
    () => `CAB-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
  );

  useEffect(() => {
    document.title = `NextTrip | ${ride}`;
  }, [ride]);

  const passengerLabel =
    Number(passengers) === 1 ? "1 Passenger" : `${passengers} Passengers`;

  const isFormValid =
    fullName.trim().length >= 2 &&
    phone.replace(/\D/g, "").length >= 8 &&
    cardNumber.replace(/\s+/g, "").length >= 12 &&
    cardName.trim().length >= 2 &&
    expiry.trim().length >= 4 &&
    cvv.trim().length >= 3;

  const confirmRide = () => {
    const cleanCardNumber = cardNumber.replace(/\s+/g, "");

    if (!isFormValid || cleanCardNumber.length < 12) {
      alert("Please complete all payment details.");
      return;
    }

    navigate("/booking-success", {
      state: {
        type: "cab",
        ride,
        from,
        to,
        passengers: passengerLabel,
        distance,
        fare,
        taxes,
        serviceFee,
        total,
        paymentMethod,
        bookingReference,
      },
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-100 pb-16 sm:pb-24">
      <section className="border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[4px] text-[#14B8A6]">
              Cab Booking
            </p>
            <h1 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
              Confirm your ride
            </h1>
          </div>

          <Link
            to="/cabs"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back to cabs
          </Link>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 pt-6 sm:px-6 sm:pt-10 xl:grid-cols-[1fr_420px] xl:gap-10 xl:px-8">
        <div className="rounded-[28px] bg-white p-5 shadow-2xl sm:rounded-[40px] sm:p-8 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[5px] text-[#14B8A6]">
            Cab Booking
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Complete your booking
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg sm:leading-9">
            Complete your ride details and payment to book instantly.
          </p>

          <div className="mt-10 sm:mt-14">
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Passenger Details
            </h3>

            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="h-14 rounded-2xl border border-slate-200 px-5 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="h-14 rounded-2xl border border-slate-200 px-5 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
              />
            </div>
          </div>

          <div className="mt-12 sm:mt-16">
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Payment
            </h3>

            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6">
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-14 rounded-2xl border border-slate-200 px-5 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
              >
                <option>Card</option>
                <option>UPI</option>
                <option>Wallet</option>
              </select>

              <input
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card Number"
                className="h-14 rounded-2xl border border-slate-200 px-5 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
              />

              <input
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="Card Holder Name"
                className="h-14 rounded-2xl border border-slate-200 px-5 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
              />

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <input
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="h-14 rounded-2xl border border-slate-200 px-5 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
                />

                <input
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="CVV"
                  className="h-14 rounded-2xl border border-slate-200 px-5 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-5 sm:mt-12 sm:p-6">
            <h4 className="font-bold text-green-800">✓ Secure encrypted payment</h4>
            <p className="mt-2 text-sm leading-6 text-green-700">
              Your payment is protected using enterprise-grade encryption.
            </p>
          </div>

          <button
            onClick={confirmRide}
            disabled={!isFormValid}
            className="
              mt-10
              h-14
              w-full
              rounded-[22px]
              bg-gradient-to-r
              from-[#2563EB]
              to-[#14B8A6]
              text-base
              font-black
              text-white
              shadow-2xl
              transition-all
              duration-300
              hover:scale-[1.01]
              disabled:cursor-not-allowed
              disabled:opacity-50
              disabled:hover:scale-100
              sm:mt-16
              sm:h-20
              sm:text-2xl
            "
          >
            Confirm Ride
          </button>
        </div>

        <aside className="xl:sticky xl:top-6">
          <div className="overflow-hidden rounded-[28px] bg-[#020B2D] p-6 text-white shadow-2xl sm:rounded-[40px] sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[5px] text-white/50">
              Ride Summary
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              {ride}
            </h2>

            <p className="mt-3 text-sm text-white/50">
              Reference: {bookingReference}
            </p>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              <Row label="From" value={from} />
              <Row label="To" value={to} />
              <Row label="Passengers" value={passengerLabel} />
              <Row
                label="Distance"
                value={distance > 0 ? `${distance} mi` : "Pending"}
              />
              <Row label="ETA" value={`${eta} mins`} />
              <Row label="Payment" value={paymentMethod} />

              <div className="h-px bg-white/10" />

              <Row label="Fare" value={formatPrice(fare)} />
              <Row label="Taxes" value={formatPrice(taxes)} />
              <Row label="Service Fee" value={formatPrice(serviceFee)} />

              <div className="h-px bg-white/10" />

              <div className="flex items-end justify-between gap-4">
                <span className="text-2xl font-bold">Total</span>
                <span className="text-4xl font-black sm:text-5xl">
                  {formatPrice(total)}
                </span>
              </div>

              <p className="pt-2 text-right text-xs text-white/50 sm:text-sm">
                Taxes and fees included
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-white/60 sm:text-base">{label}</span>
      <span className="max-w-[65%] text-right font-bold sm:max-w-none">{value}</span>
    </div>
  );
}

export default CabBookingPage;