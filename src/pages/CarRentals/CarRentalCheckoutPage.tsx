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
    if (
      !fullName ||
      !email ||
      !phone ||
      !cardNumber ||
      !cardName ||
      !expiry ||
      !cvv
    ) {
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
          total: total || price * days + taxes + serviceFee,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-16 sm:pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 pt-8 sm:px-6 sm:pt-12 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_420px] xl:pt-20">
        <div className="rounded-[28px] bg-white p-5 shadow-2xl sm:rounded-[40px] sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[5px] text-[#14B8A6] sm:text-sm">
            Car Rental Checkout
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Complete Your Reservation
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            Secure your car rental with verified payment and instant confirmation.
          </p>

          <div className="mt-10 sm:mt-14">
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Driver Details
            </h2>

            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="h-14 rounded-2xl border border-slate-200 px-4 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="h-14 rounded-2xl border border-slate-200 px-4 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="h-14 rounded-2xl border border-slate-200 px-4 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg md:col-span-2"
              />
            </div>
          </div>

          <div className="mt-10 sm:mt-16">
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Payment Details
            </h2>

            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6">
              <input
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card Number"
                className="h-14 rounded-2xl border border-slate-200 px-4 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
              />

              <input
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="Card Holder Name"
                className="h-14 rounded-2xl border border-slate-200 px-4 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
              />

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <input
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="h-14 rounded-2xl border border-slate-200 px-4 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
                />

                <input
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="CVV"
                  className="h-14 rounded-2xl border border-slate-200 px-4 text-base outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 sm:h-16 sm:px-6 sm:text-lg"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleBooking}
            className="
              mt-10 h-16 w-full rounded-[24px] bg-gradient-to-r from-[#2563EB] to-[#14B8A6]
              text-lg font-black text-white shadow-2xl transition-all duration-300
              hover:scale-[1.01]
              sm:mt-16 sm:h-20 sm:text-2xl
            "
          >
            Confirm Reservation
          </button>
        </div>

        <div className="xl:sticky xl:top-6 xl:self-start">
          <div className="overflow-hidden rounded-[28px] bg-[#020B2D] p-5 text-white shadow-2xl sm:rounded-[40px] sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[5px] text-white/50 sm:text-sm">
              Booking Summary
            </p>

            {image ? (
              <img
                src={image}
                alt={car}
                className="mt-5 h-40 w-full rounded-[24px] object-cover sm:mt-6 sm:h-52 sm:rounded-[28px]"
              />
            ) : null}

            <h2 className="mt-5 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              {car}
            </h2>

            <p className="mt-2 text-base text-white/60 sm:mt-3 sm:text-lg">
              {brand}
            </p>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/60 sm:text-base">Pickup</span>
                <span className="text-right text-sm font-bold sm:text-base">
                  {pickupLocation}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/60 sm:text-base">
                  Pickup Date
                </span>
                <span className="text-right text-sm font-bold sm:text-base">
                  {pickupDate || "Select Date"}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/60 sm:text-base">
                  Return Date
                </span>
                <span className="text-right text-sm font-bold sm:text-base">
                  {returnDate || "Select Date"}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/60 sm:text-base">Days</span>
                <span className="text-right text-sm font-bold sm:text-base">
                  {days}
                </span>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/60 sm:text-base">
                  Rental Price
                </span>
                <span className="text-right text-sm font-bold sm:text-base">
                  {formatPrice(price * days)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/60 sm:text-base">Taxes</span>
                <span className="text-right text-sm font-bold sm:text-base">
                  {formatPrice(taxes)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/60 sm:text-base">
                  Service Fee
                </span>
                <span className="text-right text-sm font-bold sm:text-base">
                  {formatPrice(serviceFee)}
                </span>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex items-end justify-between gap-4">
                <span className="text-2xl font-bold sm:text-2xl">Total</span>
                <span className="text-4xl font-black sm:text-5xl">
                  {formatPrice(total || price * days + taxes + serviceFee)}
                </span>
              </div>

              <p className="mt-2 text-right text-xs text-white/50 sm:text-sm">
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