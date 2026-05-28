type FlightDetailsModalProps = {
  open: boolean;

  onClose: () => void;

  airline: string;
  airlineLogo: string;

  from: string;
  to: string;

  departureTime: string;
  arrivalTime: string;

  duration: number;

  stops: number;

  price: number;
};

function FlightDetailsModal({
  open,
  onClose,

  airline,
  airlineLogo,

  from,
  to,

  departureTime,
  arrivalTime,

  duration,

  stops,

  price,
}: FlightDetailsModalProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]

        flex
        items-center
        justify-center

        bg-black/60
        backdrop-blur-sm

        p-6
      "
    >
      {/* MODAL */}
      <div
        className="
          relative
          w-full
          max-w-4xl

          overflow-hidden
          rounded-[40px]
          bg-white

          shadow-2xl
        "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute
            right-6
            top-6

            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full
            bg-slate-100

            text-xl
            font-bold
            text-slate-700

            transition-all
            hover:bg-slate-200
          "
        >
          ✕
        </button>

        {/* HEADER */}
        <div
          className="
            bg-gradient-to-r
            from-[#2563EB]
            to-[#14B8A6]

            p-10

            text-white
          "
        >
          <div className="flex items-center gap-5">
            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center

                rounded-3xl
                bg-white
              "
            >
              <img
                src={airlineLogo}
                alt={airline}
                className="h-12 w-12 object-contain"
              />
            </div>

            <div>
              <h2 className="text-4xl font-black">
                {airline}
              </h2>

              <p className="mt-2 text-white/80">
                Premium Economy Flight
              </p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="p-10">
          {/* ROUTE */}
          <div className="flex items-center justify-between gap-6">
            {/* FROM */}
            <div>
              <h3 className="text-5xl font-black text-slate-900">
                {departureTime}
              </h3>

              <p className="mt-3 text-lg font-semibold text-slate-500">
                {from}
              </p>
            </div>

            {/* CENTER */}
            <div className="flex flex-1 flex-col items-center px-8">
              <p className="text-sm font-semibold text-slate-500">
                {Math.floor(duration / 60)}h{" "}
                {duration % 60}m
              </p>

              <div className="relative mt-3 w-full">
                <div className="h-[3px] w-full bg-slate-300" />

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2

                    flex
                    h-10
                    w-10

                    -translate-x-1/2
                    -translate-y-1/2

                    items-center
                    justify-center

                    rounded-full
                    bg-[#2563EB]

                    text-white
                  "
                >
                  ✈
                </div>
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-500">
                {stops === 0
                  ? "Non-stop"
                  : `${stops} Stop`}
              </p>
            </div>

            {/* TO */}
            <div className="text-right">
              <h3 className="text-5xl font-black text-slate-900">
                {arrivalTime}
              </h3>

              <p className="mt-3 text-lg font-semibold text-slate-500">
                {to}
              </p>
            </div>
          </div>

          {/* EXTRA INFO */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-100 p-6">
              <p className="text-sm font-semibold text-slate-500">
                Aircraft
              </p>

              <h4 className="mt-3 text-xl font-black text-slate-900">
                Boeing 787 Dreamliner
              </h4>
            </div>

            <div className="rounded-3xl bg-slate-100 p-6">
              <p className="text-sm font-semibold text-slate-500">
                Baggage
              </p>

              <h4 className="mt-3 text-xl font-black text-slate-900">
                2 Checked Bags
              </h4>
            </div>

            <div className="rounded-3xl bg-slate-100 p-6">
              <p className="text-sm font-semibold text-slate-500">
                Cancellation
              </p>

              <h4 className="mt-3 text-xl font-black text-slate-900">
                Free Cancellation
              </h4>
            </div>
          </div>

          {/* PRICE */}
          <div
            className="
              mt-12
              flex
              flex-col
              gap-6

              rounded-[32px]
              bg-slate-900

              p-8

              text-white

              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <p className="text-sm font-semibold text-white/60">
                Total Fare
              </p>

              <h2 className="mt-2 text-5xl font-black">
                ${price}
              </h2>
            </div>

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
              Continue Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDetailsModal;