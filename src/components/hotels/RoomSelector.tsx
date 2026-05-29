import {
  useCurrency,
} from "../../context/CurrencyContext";

import type {
  HotelRoom,
} from "../../data/hotels/hotels";

type RoomSelectorProps = {
  rooms: HotelRoom[];

  selectedRoom: HotelRoom;

  setSelectedRoom: (
    room: HotelRoom
  ) => void;

  basePrice: number;

  nights: number;
};

function RoomSelector({
  rooms,
  selectedRoom,
  setSelectedRoom,
  basePrice,
  nights,
}: RoomSelectorProps) {
  const { formatPrice } =
    useCurrency();

  return (
    <div className="mt-14">
      <h3
        className="
          text-4xl
          font-black
          text-slate-900
        "
      >
        Select Your Room
      </h3>

      <div className="mt-8 space-y-6">
        {rooms.map((room) => {
          const totalPrice =
            Math.round(
              basePrice *
                room.priceMultiplier
            ) * nights;

          return (
            <button
              key={room.id}
              onClick={() =>
                setSelectedRoom(room)
              }
              className={`
                w-full
                rounded-[32px]
                border
                p-8
                text-left
                transition-all
                duration-300
                ${
                  selectedRoom.id ===
                  room.id
                    ? "border-[#2563EB] bg-blue-50"
                    : "border-slate-200 bg-white hover:border-[#2563EB]"
                }
              `}
            >
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
                <div>
                  <h4
                    className="
                      text-3xl
                      font-black
                      text-slate-900
                    "
                  >
                    {room.name}
                  </h4>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span
                      className="
                        rounded-full
                        bg-slate-100
                        px-4
                        py-2
                        text-sm
                        font-semibold
                      "
                    >
                      👥 {room.guests} Guests
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-slate-100
                        px-4
                        py-2
                        text-sm
                        font-semibold
                      "
                    >
                      🛏 {room.bed}
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-slate-100
                        px-4
                        py-2
                        text-sm
                        font-semibold
                      "
                    >
                      📐 {room.size}
                    </span>
                  </div>
                </div>

                <div className="lg:text-right">
                  <p className="text-slate-500">
                    Total Stay
                  </p>

                  <h4
                    className="
                      mt-2
                      text-5xl
                      font-black
                      text-slate-900
                    "
                  >
                    {formatPrice(
                      totalPrice
                    )}
                  </h4>

                  <p className="mt-2 text-slate-500">
                    {nights}{" "}
                    {nights === 1
                      ? "night"
                      : "nights"}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default RoomSelector;