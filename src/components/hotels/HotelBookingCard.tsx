import type {
  HotelRoom,
} from "../../data/hotels/hotels";

type HotelBookingCardProps = {
  room: HotelRoom;

  basePrice: number;

  nights: number;
};

function HotelBookingCard({
  room,
  basePrice,
  nights,
}: HotelBookingCardProps) {
  const total =
    Math.round(
      basePrice * room.priceMultiplier
    ) * nights;

  return (
    <div
      className="
        sticky
        top-6

        rounded-[36px]

        bg-slate-900
        p-8

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

      <h3
        className="
          mt-6
          text-4xl
          font-black
        "
      >
        {room.name}
      </h3>

      <div className="mt-10 space-y-5">
        <div className="flex items-center justify-between">
          <p className="text-white/70">
            Price Per Night
          </p>

          <p className="text-xl font-bold">
            $
            {Math.round(
              basePrice *
                room.priceMultiplier
            )}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white/70">
            Nights
          </p>

          <p className="text-xl font-bold">
            {nights}
          </p>
        </div>

        <div className="h-px bg-white/10" />

        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">
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

      <button
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
        "
      >
        Reserve Stay
      </button>

      <p
        className="
          mt-4
          text-center
          text-sm
          text-white/50
        "
      >
        Free cancellation available
      </p>
    </div>
  );
}

export default HotelBookingCard;