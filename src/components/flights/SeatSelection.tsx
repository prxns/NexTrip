type SeatSelectionProps = {
  selectedSeat: string;

  setSelectedSeat: (
    seat: string
  ) => void;
};

const seats = [
  "1A",
  "1B",
  "1C",
  "1D",
  "1E",
  "1F",

  "2A",
  "2B",
  "2C",
  "2D",
  "2E",
  "2F",

  "3A",
  "3B",
  "3C",
  "3D",
  "3E",
  "3F",

  "4A",
  "4B",
  "4C",
  "4D",
  "4E",
  "4F",

  "5A",
  "5B",
  "5C",
  "5D",
  "5E",
  "5F",

  "6A",
  "6B",
  "6C",
  "6D",
  "6E",
  "6F",

  "7A",
  "7B",
  "7C",
  "7D",
  "7E",
  "7F",
];

function SeatSelection({
  selectedSeat,
  setSelectedSeat,
}: SeatSelectionProps) {
  return (
    <div>
      {/* HEADER */}
      <div>
        <h2 className="text-5xl font-black text-slate-900">
          Choose Your Seat
        </h2>

        <p className="mt-4 text-xl text-slate-500">
          Select your preferred seat for the journey.
        </p>
      </div>

      {/* AIRCRAFT FRONT */}
      <div
        className="
          mx-auto
          mt-14
          h-12
          max-w-xl

          rounded-b-[40px]

          bg-gradient-to-b
          from-slate-200
          to-slate-300
        "
      />

      {/* SEATS */}
      <div className="mt-12 flex justify-center">
        <div className="grid grid-cols-6 gap-5">
          {seats.map((seat, index) => {
            const isSelected =
              selectedSeat === seat;

            return (
              <button
                key={seat}
                onClick={() =>
                  setSelectedSeat(seat)
                }
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  text-sm
                  font-bold

                  transition-all
                  duration-300

                  ${
                    isSelected
                      ? `
                        scale-110
                        bg-gradient-to-r
                        from-[#2563EB]
                        to-[#14B8A6]
                        text-white
                        shadow-xl
                      `
                      : `
                        bg-slate-100
                        text-slate-700

                        hover:scale-105
                        hover:bg-slate-200
                      `
                  }

                  ${
                    index % 6 === 2
                      ? "mr-8"
                      : ""
                  }
                `}
              >
                {seat}
              </button>
            );
          })}
        </div>
      </div>

      {/* LEGEND */}
      <div className="mt-12 flex items-center justify-center gap-8">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded bg-slate-200" />

          <p className="font-semibold text-slate-500">
            Available
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="
              h-5
              w-5
              rounded

              bg-gradient-to-r
              from-[#2563EB]
              to-[#14B8A6]
            "
          />

          <p className="font-semibold text-slate-500">
            Selected
          </p>
        </div>
      </div>
    </div>
  );
}

export default SeatSelection;