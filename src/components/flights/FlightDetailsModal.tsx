import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SeatSelection from "./SeatSelection";

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
  const navigate = useNavigate();

  const [selectedSeat, setSelectedSeat] =
    useState<string>("");

  if (!open) return null;

  const handleContinueBooking = () => {
    if (!selectedSeat) return;

    navigate("/checkout", {
      state: {
          airline,
          airlineLogo,

          from,
          to,

          departureTime,
          arrivalTime,

          duration,
          stops,

          price,

          selectedSeat,
        },
    });
  };

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[999]

        flex
        items-center
        justify-center

        bg-black/70
        backdrop-blur-md

        p-4
        md:p-6
      "
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative

          flex
          max-h-[94vh]
          w-full
          max-w-6xl
          flex-col

          overflow-hidden

          rounded-[40px]
          bg-white

          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            z-50

            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            bg-white/90
            backdrop-blur-md

            text-xl
            font-bold
            text-slate-700

            shadow-lg

            transition-all
            duration-300

            hover:scale-105
            hover:bg-white
          "
        >
          ✕
        </button>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto">
          {/* HERO HEADER */}
          <div
            className="
              relative
              overflow-hidden

              bg-gradient-to-r
              from-[#2563EB]
              via-[#1D4ED8]
              to-[#14B8A6]

              px-8
              py-10

              md:px-12
            "
          >
            {/* GLOW */}
            <div
              className="
                absolute
                right-[-120px]
                top-[-120px]

                h-[260px]
                w-[260px]

                rounded-full
                bg-white/10

                blur-3xl
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  flex-col
                  gap-8

                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >
                {/* AIRLINE */}
                <div className="flex items-center gap-5">
                  <div
                    className="
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center

                      rounded-[28px]

                      bg-white

                      shadow-xl
                    "
                  >
                    <img
                      src={airlineLogo}
                      alt={airline}
                      className="
                        h-14
                        w-14
                        object-contain
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                        text-white/70
                      "
                    >
                      Premium Flight
                    </p>

                    <h2
                      className="
                        mt-2
                        text-4xl
                        font-black
                        text-white
                      "
                    >
                      {airline}
                    </h2>

                    <p className="mt-2 text-lg text-white/80">
                      Luxury Economy Experience
                    </p>
                  </div>
                </div>

                {/* PRICE */}
                <div className="lg:text-right">
                  <p
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[3px]
                      text-white/70
                    "
                  >
                    Total Fare
                  </p>

                  <h2
                    className="
                      mt-3
                      text-6xl
                      font-black
                      text-white
                    "
                  >
                    ${price}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="p-8 md:p-12">
            {/* ROUTE CARD */}
            <div
              className="
                rounded-[36px]
                border
                border-slate-200

                bg-slate-50

                p-8
                md:p-10
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-10

                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >
                {/* DEPARTURE */}
                <div>
                  <p
                    className="
                      text-sm
                      font-bold
                      uppercase
                      tracking-[3px]
                      text-slate-400
                    "
                  >
                    Departure
                  </p>

                  <h3
                    className="
                      mt-4
                      text-5xl
                      font-black
                      text-slate-900
                    "
                  >
                    {departureTime}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-xl
                      font-semibold
                      text-slate-500
                    "
                  >
                    {from}
                  </p>
                </div>

                {/* FLIGHT CENTER */}
                <div className="flex flex-1 flex-col items-center px-4">
                  <p
                    className="
                      text-sm
                      font-bold
                      uppercase
                      tracking-[3px]
                      text-slate-400
                    "
                  >
                    Flight Duration
                  </p>

                  <p className="mt-2 text-lg font-bold text-slate-700">
                    {Math.floor(duration / 60)}h{" "}
                    {duration % 60}m
                  </p>

                  <div className="relative mt-5 w-full max-w-md">
                    <div className="h-[4px] rounded-full bg-slate-300" />

                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2

                        flex
                        h-12
                        w-12

                        -translate-x-1/2
                        -translate-y-1/2

                        items-center
                        justify-center

                        rounded-full

                        bg-gradient-to-r
                        from-[#2563EB]
                        to-[#14B8A6]

                        text-lg
                        text-white

                        shadow-xl
                      "
                    >
                      ✈
                    </div>
                  </div>

                  <p
                    className="
                      mt-5
                      text-sm
                      font-bold
                      uppercase
                      tracking-[3px]
                      text-slate-400
                    "
                  >
                    {stops === 0
                      ? "Non-stop"
                      : `${stops} Stop`}
                  </p>
                </div>

                {/* ARRIVAL */}
                <div className="lg:text-right">
                  <p
                    className="
                      text-sm
                      font-bold
                      uppercase
                      tracking-[3px]
                      text-slate-400
                    "
                  >
                    Arrival
                  </p>

                  <h3
                    className="
                      mt-4
                      text-5xl
                      font-black
                      text-slate-900
                    "
                  >
                    {arrivalTime}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-xl
                      font-semibold
                      text-slate-500
                    "
                  >
                    {to}
                  </p>
                </div>
              </div>
            </div>

            {/* EXTRA INFO */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-[28px] bg-slate-100 p-7">
                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-slate-400
                  "
                >
                  Aircraft
                </p>

                <h4
                  className="
                    mt-4
                    text-2xl
                    font-black
                    leading-tight
                    text-slate-900
                  "
                >
                  Boeing 787 Dreamliner
                </h4>
              </div>

              <div className="rounded-[28px] bg-slate-100 p-7">
                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-slate-400
                  "
                >
                  Baggage
                </p>

                <h4
                  className="
                    mt-4
                    text-2xl
                    font-black
                    leading-tight
                    text-slate-900
                  "
                >
                  2 Checked Bags
                </h4>
              </div>

              <div className="rounded-[28px] bg-slate-100 p-7">
                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-slate-400
                  "
                >
                  Cancellation
                </p>

                <h4
                  className="
                    mt-4
                    text-2xl
                    font-black
                    leading-tight
                    text-slate-900
                  "
                >
                  Free Cancellation
                </h4>
              </div>
            </div>

            {/* SEAT SELECTION */}
            <div className="mt-14">
              <SeatSelection
                selectedSeat={selectedSeat}
                setSelectedSeat={setSelectedSeat}
              />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="
            border-t
            border-slate-200

            bg-white

            px-8
            py-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6

              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* SEAT */}
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-slate-400
                "
              >
                Selected Seat
              </p>

              <h3
                className="
                  mt-2
                  text-3xl
                  font-black
                  text-slate-900
                "
              >
                {selectedSeat || "No Seat Selected"}
              </h3>
            </div>

            {/* BUTTON */}
            <button
              onClick={handleContinueBooking}
              disabled={!selectedSeat}
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

                hover:scale-[1.02]
                hover:shadow-2xl

                active:scale-[0.98]

                disabled:cursor-not-allowed
                disabled:opacity-40
                disabled:hover:scale-100
              "
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDetailsModal;