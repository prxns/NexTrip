import { useLocation, Link } from "react-router-dom";

function BookingSuccessPage() {
  const location = useLocation();

  const flight = location.state?.flight;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="w-full max-w-3xl rounded-[40px] bg-white p-14 text-center shadow-2xl">
        <div
          className="
            mx-auto
            flex
            h-28
            w-28
            items-center
            justify-center

            rounded-full

            bg-green-100

            text-5xl
          "
        >
          ✅
        </div>

        <h1 className="mt-10 text-6xl font-black text-slate-900">
          Booking Confirmed
        </h1>

        <p className="mt-6 text-xl leading-9 text-slate-500">
          Your journey has been successfully booked.
        </p>

        {flight && (
          <div className="mt-10 rounded-3xl bg-slate-100 p-8">
            <p className="text-lg text-slate-500">
              Flight Route
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              {flight.from} → {flight.to}
            </h2>

            <p className="mt-4 text-lg font-semibold text-slate-600">
              {flight.airline}
            </p>
          </div>
        )}

        <Link to="/">
          <button
            className="
              mt-10
              h-16
              rounded-2xl

              bg-gradient-to-r
              from-[#2563EB]
              to-[#14B8A6]

              px-10

              text-lg
              font-bold
              text-white

              shadow-xl

              transition-all
              duration-300

              hover:scale-[1.03]
            "
          >
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookingSuccessPage;