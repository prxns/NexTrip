import { useState } from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function HotelCheckoutPage() {
  const navigate = useNavigate();

  const [searchParams] =
    useSearchParams();

  const hotel =
    searchParams.get("hotel") ??
    "Luxury Hotel";

  const room =
    searchParams.get("room") ??
    "Executive Suite";

  const city =
    searchParams.get("city") ??
    "New York";

  const state =
    searchParams.get("state") ??
    "New York";

  const checkIn =
    searchParams.get("checkIn") ??
    "Select Date";

  const checkOut =
    searchParams.get("checkOut") ??
    "Select Date";

  const nights = Number(
    searchParams.get("nights") ?? 1
  );

  const price = Number(
    searchParams.get("price") ?? 0
  );

  const taxes =
    Math.round(price * nights * 0.12);

  const serviceFee = 85;

  const total =
    price * nights +
    taxes +
    serviceFee;

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [cardNumber, setCardNumber] =
    useState("");

  const [cardName, setCardName] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

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
      alert(
        "Please complete all payment details."
      );

      return;
    }

    navigate("/booking-success");
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-24">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-10
          px-6
          pt-20

          xl:grid-cols-[1fr_420px]
        "
      >
        {/* LEFT */}
        <div
          className="
            rounded-[40px]
            bg-white
            p-10
            shadow-2xl
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[4px]
              text-[#14B8A6]
            "
          >
            Hotel Checkout
          </p>

          <h1
            className="
              mt-5
              text-6xl
              font-black
              leading-tight
              text-slate-900
            "
          >
            Complete Your Reservation
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-xl
              leading-9
              text-slate-500
            "
          >
            Secure your luxury stay and
            receive instant confirmation.
          </p>

          {/* GUEST DETAILS */}
          <div className="mt-14">
            <h2
              className="
                text-3xl
                font-black
                text-slate-900
              "
            >
              Guest Details
            </h2>

            <div className="mt-8 grid gap-6">
              <input
                value={fullName}
                onChange={(e) =>
                  setFullName(
                    e.target.value
                  )
                }
                placeholder="Full Name"
                className="
                  h-16
                  rounded-2xl
                  border
                  border-slate-200
                  px-6
                  text-lg
                  outline-none
                  focus:border-[#2563EB]
                "
              />

              <input
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                placeholder="Email Address"
                className="
                  h-16
                  rounded-2xl
                  border
                  border-slate-200
                  px-6
                  text-lg
                  outline-none
                  focus:border-[#2563EB]
                "
              />

              <input
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value
                  )
                }
                placeholder="Phone Number"
                className="
                  h-16
                  rounded-2xl
                  border
                  border-slate-200
                  px-6
                  text-lg
                  outline-none
                  focus:border-[#2563EB]
                "
              />
            </div>
          </div>

          {/* PAYMENT */}
          <div className="mt-16">
            <h2
              className="
                text-3xl
                font-black
                text-slate-900
              "
            >
              Payment Method
            </h2>

            <div className="mt-8 grid gap-6">
              <input
                value={cardNumber}
                onChange={(e) =>
                  setCardNumber(
                    e.target.value
                  )
                }
                placeholder="Card Number"
                className="
                  h-16
                  rounded-2xl
                  border
                  border-slate-200
                  px-6
                  text-lg
                  outline-none
                  focus:border-[#2563EB]
                "
              />

              <input
                value={cardName}
                onChange={(e) =>
                  setCardName(
                    e.target.value
                  )
                }
                placeholder="Card Holder Name"
                className="
                  h-16
                  rounded-2xl
                  border
                  border-slate-200
                  px-6
                  text-lg
                  outline-none
                  focus:border-[#2563EB]
                "
              />

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  value={expiry}
                  onChange={(e) =>
                    setExpiry(
                      e.target.value
                    )
                  }
                  placeholder="MM/YY"
                  className="
                    h-16
                    rounded-2xl
                    border
                    border-slate-200
                    px-6
                    text-lg
                    outline-none
                    focus:border-[#2563EB]
                  "
                />

                <input
                  value={cvv}
                  onChange={(e) =>
                    setCvv(
                      e.target.value
                    )
                  }
                  placeholder="CVV"
                  className="
                    h-16
                    rounded-2xl
                    border
                    border-slate-200
                    px-6
                    text-lg
                    outline-none
                    focus:border-[#2563EB]
                  "
                />
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleBooking}
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
            "
          >
            Confirm Reservation
          </button>
        </div>

        {/* RIGHT */}
        <div>
          <div
            className="
              sticky
              top-6

              rounded-[40px]

              bg-[#020B2D]
              p-10

              text-white

              shadow-2xl
            "
          >
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[4px]
                text-white/50
              "
            >
              Booking Summary
            </p>

            <h2
              className="
                mt-6
                text-5xl
                font-black
                leading-tight
              "
            >
              {hotel}
            </h2>

            <p className="mt-3 text-xl text-white/60">
              {room}
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex justify-between">
                <span className="text-white/60">
                  Location
                </span>

                <span className="font-bold">
                  {city}, {state}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">
                  Check-in
                </span>

                <span className="font-bold">
                  {checkIn}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">
                  Check-out
                </span>

                <span className="font-bold">
                  {checkOut}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">
                  Nights
                </span>

                <span className="font-bold">
                  {nights}
                </span>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex justify-between">
                <span className="text-white/60">
                  Room Price
                </span>

                <span className="font-bold">
                  ${price * nights}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">
                  Taxes
                </span>

                <span className="font-bold">
                  ${taxes}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">
                  Service Fee
                </span>

                <span className="font-bold">
                  ${serviceFee}
                </span>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex justify-between">
                <span className="text-2xl font-bold">
                  Total
                </span>

                <span className="text-5xl font-black">
                  ${total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCheckoutPage;