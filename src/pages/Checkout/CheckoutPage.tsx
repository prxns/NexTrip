import { useMemo, useState } from "react";

import {
  useCurrency,
} from "../../context/CurrencyContext";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state;

  const { formatPrice } =
  useCurrency();

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [cardNumber, setCardNumber] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  const [processing, setProcessing] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  if (!bookingData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
        <div
          className="
            w-full
            max-w-xl

            rounded-[32px]
            bg-white
            p-12

            text-center

            shadow-2xl
          "
        >
          <div className="text-7xl">
            ✈️
          </div>

          <h1
            className="
              mt-8
              text-4xl
              font-black
              text-slate-900
            "
          >
            No Booking Selected
          </h1>

          <p className="mt-4 text-lg text-slate-500">
            Please select a flight before
            proceeding to checkout.
          </p>

          <button
            onClick={() => navigate("/flights")}
            className="
              mt-10
              h-14

              rounded-2xl

              bg-gradient-to-r
              from-[#2563EB]
              to-[#14B8A6]

              px-8

              text-lg
              font-bold
              text-white

              shadow-xl

              transition-all
              duration-300

              hover:scale-[1.03]
            "
          >
            Browse Flights
          </button>
        </div>
      </div>
    );
  }

  const formattedCardNumber = useMemo(() => {
    return cardNumber
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }, [cardNumber]);

  const handlePayment = async () => {
    if (
      !fullName ||
      !email ||
      !phone ||
      !cardNumber ||
      !expiry ||
      !cvv
    ) {
      alert(
        "Please complete all payment details."
      );

      return;
    }

    if (
      formattedCardNumber.replace(/\s/g, "")
        .length < 16
    ) {
      alert("Invalid card number.");

      return;
    }

    if (cvv.length < 3) {
      alert("Invalid CVV.");

      return;
    }

    setProcessing(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 2500)
    );

    setProcessing(false);

    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-8
          px-6

          xl:grid-cols-[1fr_420px]
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            rounded-[32px]
            bg-white
            p-8

            shadow-2xl
          "
        >
          {!success ? (
            <>
              {/* HEADER */}
              <div>
                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[4px]
                    text-[#14B8A6]
                  "
                >
                  Secure Checkout
                </p>

                <h1
                  className="
                    mt-4
                    text-5xl
                    font-black
                    leading-tight
                    text-slate-900
                  "
                >
                  Complete Your Booking
                </h1>

                <p className="mt-5 text-lg text-slate-500">
                  Enter traveler and payment
                  details to complete your booking.
                </p>
              </div>

              {/* FORM */}
              <div className="mt-12 space-y-6">
                {/* NAME */}
                <div>
                  <label className="text-sm font-bold text-slate-500">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) =>
                      setFullName(e.target.value)
                    }
                    placeholder="John Doe"
                    className="
                      mt-2
                      h-14
                      w-full

                      rounded-2xl
                      border
                      border-slate-200

                      px-5

                      outline-none

                      transition-all
                      duration-300

                      focus:border-[#2563EB]
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-bold text-slate-500">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="john@example.com"
                    className="
                      mt-2
                      h-14
                      w-full

                      rounded-2xl
                      border
                      border-slate-200

                      px-5

                      outline-none

                      transition-all
                      duration-300

                      focus:border-[#2563EB]
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm font-bold text-slate-500">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    placeholder="+1 234 567 890"
                    className="
                      mt-2
                      h-14
                      w-full

                      rounded-2xl
                      border
                      border-slate-200

                      px-5

                      outline-none

                      transition-all
                      duration-300

                      focus:border-[#2563EB]
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>
              </div>

              {/* PAYMENT */}
              <div className="mt-14">
                <h2
                  className="
                    text-3xl
                    font-black
                    text-slate-900
                  "
                >
                  Payment Method
                </h2>

                <div
                  className="
                    mt-6

                    rounded-[28px]
                    border
                    border-slate-200

                    bg-slate-50

                    p-6
                  "
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-500">
                      Credit / Debit Card
                    </p>

                    <div className="flex items-center gap-2 text-2xl">
                      <span>💳</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-5">
                    {/* CARD NUMBER */}
                    <div>
                      <label className="text-sm font-bold text-slate-500">
                        Card Number
                      </label>

                      <input
                        type="text"
                        maxLength={19}
                        value={formattedCardNumber}
                        onChange={(e) =>
                          setCardNumber(
                            e.target.value
                          )
                        }
                        placeholder="1234 5678 9012 3456"
                        className="
                          mt-2
                          h-14
                          w-full

                          rounded-2xl
                          border
                          border-slate-200

                          px-5

                          outline-none

                          transition-all
                          duration-300

                          focus:border-[#2563EB]
                          focus:ring-4
                          focus:ring-blue-100
                        "
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* EXPIRY */}
                      <div>
                        <label className="text-sm font-bold text-slate-500">
                          Expiry Date
                        </label>

                        <input
                          type="text"
                          maxLength={5}
                          value={expiry}
                          onChange={(e) =>
                            setExpiry(
                              e.target.value
                            )
                          }
                          placeholder="MM/YY"
                          className="
                            mt-2
                            h-14
                            w-full

                            rounded-2xl
                            border
                            border-slate-200

                            px-5

                            outline-none

                            transition-all
                            duration-300

                            focus:border-[#2563EB]
                            focus:ring-4
                            focus:ring-blue-100
                          "
                        />
                      </div>

                      {/* CVV */}
                      <div>
                        <label className="text-sm font-bold text-slate-500">
                          CVV
                        </label>

                        <input
                          type="password"
                          maxLength={4}
                          value={cvv}
                          onChange={(e) =>
                            setCvv(
                              e.target.value
                            )
                          }
                          placeholder="123"
                          className="
                            mt-2
                            h-14
                            w-full

                            rounded-2xl
                            border
                            border-slate-200

                            px-5

                            outline-none

                            transition-all
                            duration-300

                            focus:border-[#2563EB]
                            focus:ring-4
                            focus:ring-blue-100
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PAYMENT BUTTON */}
              <button
                onClick={handlePayment}
                disabled={processing}
                className="
                  mt-10
                  h-16
                  w-full

                  rounded-2xl

                  bg-gradient-to-r
                  from-[#2563EB]
                  to-[#14B8A6]

                  text-lg
                  font-bold
                  text-white

                  shadow-xl

                  transition-all
                  duration-300

                  hover:scale-[1.01]
                  hover:shadow-2xl

                  active:scale-[0.99]

                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {processing
                  ? "Processing Payment..."
                  : `Pay ${formatPrice(
                       bookingData.price
                     )}`}
              </button>
            </>
          ) : (
            <div className="py-20 text-center">
              <div className="text-8xl">
                ✈️
              </div>

              <h1
                className="
                  mt-8
                  text-5xl
                  font-black
                  text-slate-900
                "
              >
                Booking Confirmed
              </h1>

              <p className="mt-6 text-xl text-slate-500">
                Your trip has been
                successfully booked.
              </p>

              <div
                className="
                  mt-10
                  inline-flex

                  rounded-2xl
                  bg-slate-100

                  px-8
                  py-5
                "
              >
                <span className="font-bold">
                  Seat:{" "}
                  {bookingData.selectedSeat}
                </span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate("/")}
                  className="
                    h-14

                    rounded-2xl

                    bg-gradient-to-r
                    from-[#2563EB]
                    to-[#14B8A6]

                    px-8

                    text-lg
                    font-bold
                    text-white

                    shadow-xl

                    transition-all
                    duration-300

                    hover:scale-[1.03]
                    hover:shadow-2xl

                    active:scale-[0.98]
                  "
                >
                  Back to Home
                </button>

                <button
                  onClick={() =>
                    navigate("/flights")
                  }
                  className="
                    h-14

                    rounded-2xl
                    border
                    border-slate-200

                    bg-white

                    px-8

                    text-lg
                    font-bold
                    text-slate-900

                    transition-all
                    duration-300

                    hover:bg-slate-50
                  "
                >
                  Browse More Flights
                </button>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div
          className="
            sticky
            top-6

            h-fit

            rounded-[32px]
            bg-white

            p-8

            shadow-2xl
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[4px]
              text-slate-400
            "
          >
            Booking Summary
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              text-slate-900
            "
          >
            {bookingData.from} →{" "}
            {bookingData.to}
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex justify-between">
              <span className="text-slate-500">
                Airline
              </span>

              <span className="font-bold">
                {bookingData.airline}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Seat
              </span>

              <span className="font-bold">
                {bookingData.selectedSeat}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Cabin
              </span>

              <span className="font-bold">
                Premium Economy
              </span>
            </div>
          </div>

          <div
            className="
              mt-8

              rounded-2xl
              bg-slate-100

              p-6
            "
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">
                Total
              </span>

              <span
                className="
                  text-4xl
                  font-black
                  text-slate-900
                "
              >
                {formatPrice(bookingData.price)}
              </span>
            </div>
            <p className="mt-2 text-right text-sm text-slate-500">
              Taxes and fees included
            </p>
          </div>

          <div
            className="
              mt-6

              rounded-2xl
              border
              border-emerald-200

              bg-emerald-50

              p-5
            "
          >
            <p className="font-semibold text-emerald-700">
              ✓ Secure encrypted payment
            </p>

            <p className="mt-2 text-sm text-emerald-600">
              Your transaction is protected
              with enterprise-grade security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;