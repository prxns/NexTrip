import { useNavigate } from "react-router-dom";

import type {
  HotelRoom,
} from "../../data/hotels/hotels";

type HotelBookingCardProps = {
  room: HotelRoom;

  basePrice: number;

  nights: number;

  hotelName: string;

  city: string;

  state: string;

  checkIn?: string;

  checkOut?: string;
};

function HotelBookingCard({
  room,
  basePrice,
  nights,
  hotelName,
  city,
  state,
  checkIn,
  checkOut,
}: HotelBookingCardProps) {
  const navigate = useNavigate();

  const pricePerNight =
    Math.round(
      basePrice *
        room.priceMultiplier
    );

  const subtotal =
    pricePerNight * nights;

  const taxes =
    Math.round(subtotal * 0.12);

  const serviceFee = 85;

  const total =
    subtotal +
    taxes +
    serviceFee;

  const handleReserve = () => {
    const params =
      new URLSearchParams({
        hotel: hotelName,

        room: room.name,

        city,

        state,

        price:
          pricePerNight.toString(),

        nights:
          nights.toString(),

        total:
          total.toString(),

        checkIn:
          checkIn || "",

        checkOut:
          checkOut || "",
      });

    navigate(
      `/hotel-checkout?${params.toString()}`
    );
  };

  return (
    <div
      className="
        sticky
        top-6

        overflow-hidden

        rounded-[36px]

        bg-[#020B2D]

        p-8

        text-white

        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
      "
    >
      {/* HEADER */}
      <p
        className="
          text-sm
          font-bold
          uppercase
          tracking-[5px]
          text-white/50
        "
      >
        Booking Summary
      </p>

      <h3
        className="
          mt-6

          text-4xl
          font-black
          leading-tight
        "
      >
        {room.name}
      </h3>

      <p className="mt-3 text-lg text-white/60">
        {hotelName}
      </p>

      {/* DATES */}
      <div
        className="
          mt-8

          grid
          grid-cols-2
          gap-4
        "
      >
        <div
          className="
            rounded-2xl
            bg-white/5
            p-4
          "
        >
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[2px]
              text-white/40
            "
          >
            Check-in
          </p>

          <h4 className="mt-2 text-lg font-bold">
            {checkIn ||
              "Select Date"}
          </h4>
        </div>

        <div
          className="
            rounded-2xl
            bg-white/5
            p-4
          "
        >
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[2px]
              text-white/40
            "
          >
            Check-out
          </p>

          <h4 className="mt-2 text-lg font-bold">
            {checkOut ||
              "Select Date"}
          </h4>
        </div>
      </div>

      {/* PRICE */}
      <div className="mt-10 space-y-5">
        <div className="flex items-center justify-between">
          <p className="text-white/60">
            Price Per Night
          </p>

          <p className="text-xl font-bold">
            ${pricePerNight}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white/60">
            Nights
          </p>

          <p className="text-xl font-bold">
            {nights}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white/60">
            Taxes & Fees
          </p>

          <p className="text-xl font-bold">
            ${taxes}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white/60">
            Service Fee
          </p>

          <p className="text-xl font-bold">
            ${serviceFee}
          </p>
        </div>

        <div className="h-px bg-white/10" />

        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">
            Total
          </p>

          <h4
            className="
              text-5xl
              font-black
            "
          >
            ${total}
          </h4>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={handleReserve}
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

          hover:scale-[1.02]
          hover:shadow-2xl

          active:scale-[0.98]
        "
      >
        Reserve Stay
      </button>

      {/* FOOTER */}
      <div
        className="
          mt-6

          rounded-2xl
          bg-white/5
          p-4
        "
      >
        <p className="font-semibold">
          ✓ Free cancellation available
        </p>

        <p className="mt-2 text-sm text-white/50">
          Cancel before check-in for a full refund.
        </p>
      </div>
    </div>
  );
}

export default HotelBookingCard;