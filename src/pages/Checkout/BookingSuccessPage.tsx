import { useLocation, Link } from "react-router-dom";
import { useCurrency } from "../../context/CurrencyContext";

function BookingSuccessPage() {
  const location = useLocation();

  const { formatPrice } = useCurrency();

  const bookingType =
  location.state?.type || "flight";

  const flight =
  location.state?.flight;

  const bookingReference =
    Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

  const bookingDate =
    new Date().toLocaleDateString();

  const browseConfig = {
  flight: {
    label: "Browse Flights",
    path: "/flights",
  },

  hotel: {
    label: "Browse Hotels",
    path: "/hotels",
  },

  car: {
    label: "Browse Cars",
    path: "/car-rentals",
  },

  cab: {
    label: "Book Another Ride",
    path: "/cabs",
  },

  villa: {
    label: "Browse Villas",
    path: "/villas",
  },

  tour: {
    label: "Browse Tours",
    path: "/tours",
  },
};

const secondaryButton =
  browseConfig[
    bookingType as keyof typeof browseConfig
  ] || browseConfig.flight;

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-16">
      <div
        className="
          mx-auto
          max-w-4xl

          rounded-[40px]
          bg-white

          p-14

          text-center

          shadow-2xl
        "
      >
        {/* SUCCESS ICON */}
        <div
          className="
            mx-auto
            flex
            h-32
            w-32
            items-center
            justify-center

            rounded-full

            bg-green-100

            text-6xl
          "
        >
          ✅
        </div>

        {/* HEADER */}
        <h1
          className="
            mt-10
            text-6xl
            font-black
            text-slate-900
          "
        >
          Booking Confirmed
        </h1>

        <p
          className="
            mt-6
            text-xl
            leading-9
            text-slate-500
          "
        >
          Your booking has been successfully
          completed.
        </p>

        {/* BOOKING INFO */}
        <div
          className="
            mt-10

            grid
            gap-6

            md:grid-cols-2
          "
        >
          <div
            className="
              rounded-3xl
              bg-slate-100
              p-6
            "
          >
            <p className="text-sm text-slate-500">
              Booking Reference
            </p>

            <h3 className="mt-2 text-2xl font-black text-slate-900">
              {bookingReference}
            </h3>
          </div>

          <div
            className="
              rounded-3xl
              bg-slate-100
              p-6
            "
          >
            <p className="text-sm text-slate-500">
              Booking Date
            </p>

            <h3 className="mt-2 text-2xl font-black text-slate-900">
              {bookingDate}
            </h3>
          </div>
        </div>

        {/* FLIGHT DETAILS */}
        {flight && (
          <div
            className="
              mt-10

              rounded-3xl
              bg-slate-100

              p-8
            "
          >
            <p className="text-lg text-slate-500">
              Flight Route
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-black
                text-slate-900
              "
            >
              {flight.from} → {flight.to}
            </h2>

            <p
              className="
                mt-4
                text-lg
                font-semibold
                text-slate-600
              "
            >
              {flight.airline}
            </p>

            {flight.price && (
              <div className="mt-6">
                <p className="text-slate-500">
                  Total Paid
                </p>

                <h3
                  className="
                    mt-2
                    text-3xl
                    font-black
                    text-[#2563EB]
                  "
                >
                  {formatPrice(
                    flight.price
                  )}
                </h3>
              </div>
            )}
          </div>
        )}

        {/* SUCCESS MESSAGE */}
        <div
          className="
            mt-10

            rounded-3xl
            border
            border-green-200

            bg-green-50

            p-6
          "
        >
          <p className="font-semibold text-green-700">
            ✓ Confirmation sent successfully
          </p>

          <p className="mt-2 text-green-600">
            Your booking details have been
            recorded and are ready for travel.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div
          className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          <Link to="/">
            <button
              className="
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

          <Link to={secondaryButton.path}>
            <button
              className="
                h-16
                rounded-2xl

                border
              border-slate-200

              bg-white

                px-10

                text-lg
                font-bold
              text-slate-900

                transition-all
                duration-300

              hover:bg-slate-50
              "
            >
              {secondaryButton.label}
            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
}

export default BookingSuccessPage;