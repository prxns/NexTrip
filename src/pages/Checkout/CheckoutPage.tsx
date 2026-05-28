import { useLocation, useNavigate } from "react-router-dom";

function CheckoutPage() {
  const navigate = useNavigate();

  const location = useLocation();

  const flight = location.state?.flight;
  const selectedSeat = location.state?.selectedSeat;

  if (!flight) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-900">
          No flight selected.
        </h1>
      </div>
    );
  }

  const totalPrice = flight.price + 49;

  const handlePayment = () => {
    navigate("/booking-success", {
      state: {
        flight,
        selectedSeat,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 xl:grid-cols-[1fr_420px]">
        {/* LEFT */}
        <div className="space-y-8">
          {/* PASSENGER DETAILS */}
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <h2 className="text-4xl font-black text-slate-900">
              Passenger Details
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <input
                placeholder="First Name"
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#2563EB]"
              />

              <input
                placeholder="Last Name"
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#2563EB]"
              />

              <input
                placeholder="Email Address"
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#2563EB]"
              />

              <input
                placeholder="Phone Number"
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#2563EB]"
              />

              <input
                placeholder="Passport Number"
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#2563EB]"
              />

              <input
                placeholder="Nationality"
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#2563EB]"
              />
            </div>
          </div>

          {/* PAYMENT */}
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <h2 className="text-4xl font-black text-slate-900">
              Payment Method
            </h2>

            <div className="mt-8 space-y-5">
              <input
                placeholder="Card Number"
                className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#2563EB]"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  placeholder="Expiry Date"
                  className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#2563EB]"
                />

                <input
                  placeholder="CVV"
                  className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#2563EB]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="sticky top-10 rounded-[32px] bg-white p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-slate-900">
              Booking Summary
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-slate-500">Airline</p>

                <p className="font-bold text-slate-900">
                  {flight.airline}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-slate-500">Route</p>

                <p className="font-bold text-slate-900">
                  {flight.from} → {flight.to}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-slate-500">Seat</p>

                <p className="font-bold text-slate-900">
                  {selectedSeat || "Not Selected"}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-slate-500">Flight Price</p>

                <p className="font-bold text-slate-900">
                  ${flight.price}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-slate-500">Taxes & Fees</p>

                <p className="font-bold text-slate-900">
                  $49
                </p>
              </div>

              <div className="my-6 h-px bg-slate-200" />

              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-slate-900">
                  Total
                </p>

                <p className="text-4xl font-black text-slate-900">
                  ${totalPrice}
                </p>
              </div>

              <button
                onClick={handlePayment}
                className="
                  mt-8
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

                  hover:scale-[1.02]
                "
              >
                Complete Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;