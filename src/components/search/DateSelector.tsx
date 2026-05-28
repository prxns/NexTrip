import { useState } from "react";

function DateSelector() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full overflow-visible">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`
          w-full
          rounded-[28px]
          border
          bg-white
          p-5
          text-left
          transition-all
          duration-300

          ${
            open
              ? "border-[#2563EB] shadow-xl"
              : "border-[#E2E8F0] hover:border-[#2563EB]"
          }
        `}
      >
        <p className="text-sm font-medium text-[#64748B]">
          Departure
        </p>

        <h3
          className="
            mt-3
            text-4xl
            font-black
            text-slate-900
          "
        >
          24 Jun 2026
        </h3>

        <p className="mt-2 text-sm text-[#64748B]">
          Tuesday
        </p>
      </button>

      {open && (
        <div
          className="
            absolute
            left-0
            top-[calc(100%+14px)]
            z-[250]

            w-[700px]

            rounded-[32px]
            border
            border-slate-200
            bg-white

            p-6

            shadow-2xl
          "
        >
          <div className="flex items-center justify-between">
            <button
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-full
                border
                border-slate-200

                text-xl
                font-bold

                transition-all
                hover:border-[#2563EB]
              "
            >
              ←
            </button>

            <h3
              className="
                text-xl
                font-bold
                text-slate-900
              "
            >
              June 2026
            </h3>

            <button
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-full
                border
                border-slate-200

                text-xl
                font-bold

                transition-all
                hover:border-[#2563EB]
              "
            >
              →
            </button>
          </div>

          <div className="mt-6 grid grid-cols-7 gap-3">
            {[
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
            ].map((day) => (
              <div
                key={day}
                className="
                  text-center
                  text-sm
                  font-semibold
                  text-slate-500
                "
              >
                {day}
              </div>
            ))}

            {Array.from({ length: 30 }).map(
              (_, index) => {
                const day = index + 1;

                return (
                  <button
                    key={day}
                    className={`
                      h-14
                      rounded-2xl

                      text-sm
                      font-semibold

                      transition-all
                      duration-200

                      ${
                        day === 24
                          ? "bg-[#2563EB] text-white shadow-lg"
                          : "hover:bg-slate-100"
                      }
                    `}
                  >
                    {day}
                  </button>
                );
              }
            )}
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="
              mt-6
              h-14
              w-full

              rounded-2xl

              bg-gradient-to-r
              from-[#2563EB]
              to-[#14B8A6]

              text-sm
              font-bold
              text-white

              shadow-lg

              transition-all
              duration-300
              hover:scale-[1.01]
            "
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}

export default DateSelector;