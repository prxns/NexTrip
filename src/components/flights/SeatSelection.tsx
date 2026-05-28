import { useState } from "react";

function SeatSelection() {
  const [selectedSeat, setSelectedSeat] =
    useState<string | null>(null);

  const rows = 8;

  const seatLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  return (
    <div>
      {/* TITLE */}
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900">
          Choose Your Seat
        </h2>

        <p className="mt-2 text-slate-500">
          Select your preferred seat for the journey.
        </p>
      </div>

      {/* SCREEN */}
      <div
  className="
    mx-auto
    h-10
    max-w-xl

    rounded-b-[40px]
    bg-gradient-to-b
    from-slate-200
    to-slate-300
  "
/>

      {/* SEATS */}
      <div className="space-y-4">
        {Array.from({ length: rows }).map(
          (_, rowIndex) => (
            <div
              key={rowIndex}
              className="
                flex
                items-center
                justify-center
                gap-3
              "
            >
              {/* LEFT SIDE */}
              {seatLetters
                .slice(0, 3)
                .map((seatLetter) => {
                  const seatId = `${
                    rowIndex + 1
                  }${seatLetter}`;

                  const isSelected =
                    selectedSeat === seatId;

                  return (
                    <button
                      key={seatId}
                      onClick={() =>
                        setSelectedSeat(seatId)
                      }
                      className={`
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-xl

                        text-sm
                        font-bold

                        transition-all
                        duration-200

                        ${
                          isSelected
                            ? "bg-[#2563EB] text-white shadow-lg"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }
                      `}
                    >
                      {seatId}
                    </button>
                  );
                })}

              {/* AISLE */}
              <div className="w-8" />

              {/* RIGHT SIDE */}
              {seatLetters
                .slice(3)
                .map((seatLetter) => {
                  const seatId = `${
                    rowIndex + 1
                  }${seatLetter}`;

                  const isSelected =
                    selectedSeat === seatId;

                  return (
                    <button
                      key={seatId}
                      onClick={() =>
                        setSelectedSeat(seatId)
                      }
                      className={`
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-xl

                        text-sm
                        font-bold

                        transition-all
                        duration-200

                        ${
                          isSelected
                            ? "bg-[#2563EB] text-white shadow-lg"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }
                      `}
                    >
                      {seatId}
                    </button>
                  );
                })}
            </div>
          )
        )}
      </div>

      {/* FOOTER */}
      <div
        className="
          mt-10
          flex
          flex-col
          gap-4

          rounded-[32px]
          bg-slate-100

          p-6

          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div>
          <p className="text-sm font-semibold text-slate-500">
            Selected Seat
          </p>

          <h3 className="mt-2 text-3xl font-black text-slate-900">
            {selectedSeat || "--"}
          </h3>
        </div>

        <button
          disabled={!selectedSeat}
          className={`
            h-14
            rounded-2xl

            px-8

            text-sm
            font-bold
            text-white

            transition-all
            duration-300

            ${
              selectedSeat
                ? "bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:scale-[1.02]"
                : "cursor-not-allowed bg-slate-300"
            }
          `}
        >
          Continue Booking
        </button>
      </div>
    </div>
  );
}

export default SeatSelection;