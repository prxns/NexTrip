import { useState } from "react";

import {
  useCurrency,
} from "../../context/CurrencyContext";

import FlightDetailsModal from "./FlightDetailsModal";

type FlightCardProps = {
  airline: string;
  airlineCode: string;

  airlineLogo: string;

  from: string;
  to: string;

  departureTime: string;
  arrivalTime: string;

  duration: number;

  stops: number;

  price: number;
};

function FlightCard({
  airline,
  airlineCode,

  airlineLogo,

  from,
  to,

  departureTime,
  arrivalTime,

  duration,

  stops,

  price,
}: FlightCardProps) {
  const [openModal, setOpenModal] =
    useState(false);

    const { formatPrice } =
  useCurrency();

  return (
    <>
      {/* CARD */}
      <div
        className="
          rounded-[32px]
          border
          border-slate-200
          bg-white
          p-6

          shadow-lg

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center

                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
              "
            >
              <img
                src={airlineLogo}
                alt={airline}
                className="
                  h-10
                  w-10
                  object-contain
                "
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {airline}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {airlineCode} • Premium Economy
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="flex flex-1 items-center justify-between gap-6">
            {/* DEPARTURE */}
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                {departureTime}
              </h2>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {from}
              </p>
            </div>

            {/* FLIGHT LINE */}
            <div className="flex flex-1 flex-col items-center">
              <p className="text-sm font-semibold text-slate-500">
                {Math.floor(duration / 60)}h{" "}
                {duration % 60}m
              </p>

              <div className="relative mt-2 w-full">
                <div className="h-[2px] w-full bg-slate-300" />

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2

                    flex
                    h-8
                    w-8

                    -translate-x-1/2
                    -translate-y-1/2

                    items-center
                    justify-center

                    rounded-full
                    bg-[#2563EB]

                    text-sm
                    text-white
                  "
                >
                  ✈
                </div>
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {stops === 0
                  ? "Non-stop"
                  : `${stops} Stop`}
              </p>
            </div>

            {/* ARRIVAL */}
            <div className="text-right">
              <h2 className="text-3xl font-black text-slate-900">
                {arrivalTime}
              </h2>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {to}
              </p>
            </div>
          </div>

          {/* PRICE */}
          <div className="xl:text-right">
            <p className="text-sm font-semibold text-slate-500">
              Starting Price
            </p>

            <h2 className="mt-2 text-4xl font-black text-slate-900">
              {formatPrice(price)}
            </h2>

            <button
              onClick={() =>
                setOpenModal(true)
              }
              className="
                mt-4
                h-12

                rounded-2xl

                bg-gradient-to-r
                from-[#2563EB]
                to-[#14B8A6]

                px-8

                text-sm
                font-bold
                text-white

                shadow-lg

                transition-all
                duration-300

                hover:scale-[1.03]
              "
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <FlightDetailsModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
        airline={airline}
        airlineLogo={airlineLogo}
        from={from}
        to={to}
        departureTime={departureTime}
        arrivalTime={arrivalTime}
        duration={duration}
        stops={stops}
        price={price}
      />
    </>
  );
}

export default FlightCard;