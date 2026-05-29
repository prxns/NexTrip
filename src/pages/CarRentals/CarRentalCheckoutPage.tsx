import { useState } from "react";

import { useCurrency } from "../../context/CurrencyContext";

import { useNavigate, useSearchParams } from "react-router-dom";

function CarRentalCheckoutPage() {
  const navigate = useNavigate();

  const { formatPrice } = useCurrency();

  const [searchParams] = useSearchParams();

  const car = searchParams.get("car") || "Rental Car";
  const brand = searchParams.get("brand") || "";
  const pickupLocation = searchParams.get("pickupLocation") || "New York";
  const pickupDate = searchParams.get("pickupDate") || "";
  const returnDate = searchParams.get("returnDate") || "";
  const days = Number(searchParams.get("days") || 1);
  const price = Number(searchParams.get("price") || 0);
  const total = Number(searchParams.get("total") || 0);
  const image = searchParams.get("image") || "";

  const taxes = Math.round(price * days * 0.12);
  const serviceFee = 49;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleBooking = () => {
    if (!fullName || !email || !phone || !cardNumber || !cardName || !expiry || !cvv) {
      alert("Please complete all payment details.");
      return;
    }

    navigate("/booking-success", {
  state: {
    type: "car",

    car: {
      name: car,
      brand,
      pickupLocation,
      pickupDate,
      returnDate,
      days,
      total:
        total ||
        price * days +
          taxes +
          serviceFee,
    },
  },
});
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-20 xl:grid-cols-[1fr_420px]">
        <div className="rounded-[40px] bg-white p-10 shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[5px] text-[#14B8A6]">
            Car Rental Checkout
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight text-slate-900 md:text-7xl">
            Complete Your Reservation
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-500">
            Secure your car rental with verified payment and instant confirmation.
          </p>

          <div className="mt-14">
            <h2 className="text-3xl font-black text-slate-900">Driver Details</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="h-16 rounded-2xl border border-slate-200 px-6 text-lg outline-none focus:border-[#2563EB]"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
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
            <h2 className="text-3xl font-black text-slate-900">Payment Details</h2>

            <div className="mt-8 grid gap-6">
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

          <button
            onClick={handleBooking}
            className="mt-16 h-20 w-full rounded-[24px] bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-2xl font-black text-white shadow-2xl transition-all duration-300 hover:scale-[1.01]"
          >
            Confirm Reservation
          </button>
        </div>

        <div>
          <div className="sticky top-6 overflow-hidden rounded-[40px] bg-[#020B2D] p-10 text-white shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[5px] text-white/50">
              Booking Summary
            </p>

            {image ? (
              <img src={image} alt={car} className="mt-6 h-52 w-full rounded-[28px] object-cover" />
            ) : null}

            <h2 className="mt-6 text-5xl font-black leading-tight">{car}</h2>
            <p className="mt-3 text-xl text-white/60">{brand}</p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-white/60">Pickup</span>
                <span className="font-bold">{pickupLocation}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Pickup Date</span>
                <span className="font-bold">{pickupDate || "—"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Return Date</span>
                <span className="font-bold">{returnDate || "—"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Days</span>
                <span className="font-bold">{days}</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-white/60">Rental Price</span>
                <span className="font-bold">{formatPrice(price * days)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Taxes</span>
                <span className="font-bold">{formatPrice(taxes)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Service Fee</span>
                <span className="font-bold">{formatPrice(serviceFee)}</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">Total</span>
                <span className="text-5xl font-black">{formatPrice(total || price * days + taxes + serviceFee)}</span>
              </div>
              <p className="mt-2 text-right text-sm text-white/50">
                Taxes and fees are included in the total price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarRentalCheckoutPage;