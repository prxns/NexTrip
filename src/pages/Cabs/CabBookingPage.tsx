import { useEffect, useState } from "react";
import { useCurrency } from "../../context/CurrencyContext";
import { useNavigate, useSearchParams } from "react-router-dom";

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
    () =>
      `CAB-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
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
    <div className="min-h-screen bg-slate-100 pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-20 xl:grid-cols-[1fr_420px]">
        <div className="rounded-[40px] bg-white p-10 shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[5px] text-[#14B8A6]">
            Cab Booking
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight text-slate-900 md:text-7xl">
            Confirm your ride
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-500">
            Complete your ride details and payment to book instantly.
          </p>

          <div className="mt-14">
            <h2 className="text-3xl font-black text-slate-900">
              Passenger Details
            </h2>

            <div className="mt-8 grid gap-6">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="h-16 rounded-2xl border border-slate-200 px-6 text-lg outline-none focus:border-[#2563EB]"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="h-16 rounded-2xl border border-slate-200 px-6 text-lg outline-none focus:border-[#2563EB]"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-black text-slate-900">
              Payment
            </h2>

            <div className="mt-8 grid gap-6">
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-16 rounded-2xl border border-slate-200 px-6 text-lg outline-none focus:border-[#2563EB]"
              >
                <option>Card</option>
                <option>UPI</option>
                <option>Wallet</option>
              </select>

              <input
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card Number"
                className="h-16 rounded-2xl border border-slate-200 px-6 text-lg outline-none focus:border-[#2563EB]"
              />

              <input
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="Card Holder Name"
                className="h-16 rounded-2xl border border-slate-200 px-6 text-lg outline-none focus:border-[#2563EB]"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="h-16 rounded-2xl border border-slate-200 px-6 text-lg outline-none focus:border-[#2563EB]"
                />

                <input
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="CVV"
                  className="h-16 rounded-2xl border border-slate-200 px-6 text-lg outline-none focus:border-[#2563EB]"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-green-200 bg-green-50 p-6">
            <h3 className="font-bold text-green-800">
              ✓ Secure encrypted payment
            </h3>

            <p className="mt-2 text-sm text-green-700">
              Your payment is protected using enterprise-grade encryption.
            </p>
          </div>

          <button
            onClick={confirmRide}
            disabled={!isFormValid}
            className="
              mt-16
              h-20
              w-full
              rounded-[24px]
              bg-gradient-to-r
              from-[#2563EB]
              to-[#14B8A6]
              text-2xl
              font-black
              text-white
              shadow-2xl
              transition-all
              duration-300
              hover:scale-[1.01]
              disabled:cursor-not-allowed
              disabled:opacity-50
              disabled:hover:scale-100
            "
          >
            Confirm Ride
          </button>
        </div>

        <div>
          <div className="sticky top-6 rounded-[40px] bg-[#020B2D] p-10 text-white shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[5px] text-white/50">
              Ride Summary
            </p>

            <h2 className="mt-6 text-5xl font-black leading-tight">
              {ride}
            </h2>

            <p className="mt-3 text-sm text-white/50">
              Reference: {bookingReference}
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex justify-between">
                <span className="text-white/60">From</span>
                <span className="font-bold">{from}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">To</span>
                <span className="font-bold">{to}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">Passengers</span>
                <span className="font-bold">{passengerLabel}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">Distance</span>
                <span className="font-bold">{distance > 0 ? `${distance} mi` : "Pending"}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">ETA</span>
                <span className="font-bold">{eta} mins</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">Payment</span>
                <span className="font-bold">{paymentMethod}</span>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex justify-between">
                <span className="text-white/60">Fare</span>
                <span className="font-bold">{formatPrice(fare)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">Taxes</span>
                <span className="font-bold">{formatPrice(taxes)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">Service Fee</span>
                <span className="font-bold">{formatPrice(serviceFee)}</span>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex justify-between">
                <span className="text-2xl font-bold">Total</span>
                <span className="text-5xl font-black">{formatPrice(total)}</span>
              </div>

              <p className="mt-2 text-right text-sm text-white/50">
                Taxes and fees included
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CabBookingPage;