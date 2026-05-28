import { useMemo, useState } from "react";

function DateSelector() {
  const today = new Date();

  const [open, setOpen] = useState(false);

  const [currentMonth, setCurrentMonth] =
    useState(new Date());

  const [selectedDate, setSelectedDate] =
    useState(new Date(2026, 5, 24));

  const monthName =
    currentMonth.toLocaleString("default", {
      month: "long",
    });

  const year = currentMonth.getFullYear();

  const daysInMonth = new Date(
    year,
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    year,
    currentMonth.getMonth(),
    1
  ).getDay();

  const formattedDate =
    selectedDate.toLocaleDateString(
      "en-US",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );

  const weekday =
    selectedDate.toLocaleDateString(
      "en-US",
      {
        weekday: "long",
      }
    );

  const calendarDays = useMemo(() => {
    const blanks = Array.from({
      length: firstDayOfMonth,
    }).map((_, index) => (
      <div key={`blank-${index}`} />
    ));

    const days = Array.from({
      length: daysInMonth,
    }).map((_, index) => {
      const day = index + 1;

      const date = new Date(
        year,
        currentMonth.getMonth(),
        day
      );

      const isSelected =
        selectedDate.toDateString() ===
        date.toDateString();

      const isPast = date < today;

      return (
        <button
          key={day}
          disabled={isPast}
          onClick={() => setSelectedDate(date)}
          className={`
            h-14
            rounded-2xl

            text-sm
            font-semibold

            transition-all
            duration-200

            ${
              isSelected
                ? "bg-[#2563EB] text-white shadow-lg"
                : isPast
                ? "cursor-not-allowed text-slate-300"
                : "hover:bg-slate-100"
            }
          `}
        >
          {day}
        </button>
      );
    });

    return [...blanks, ...days];
  }, [
    currentMonth,
    daysInMonth,
    firstDayOfMonth,
    selectedDate,
    today,
    year,
  ]);

  const previousMonth = () => {
    setCurrentMonth(
      new Date(
        year,
        currentMonth.getMonth() - 1,
        1
      )
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(
        year,
        currentMonth.getMonth() + 1,
        1
      )
    );
  };

  return (
    <div className="relative w-full overflow-visible">
      {/* CARD */}
      <button
        type="button"
        onClick={() =>
          setOpen((prev) => !prev)
        }
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
          {formattedDate}
        </h3>

        <p className="mt-2 text-sm text-[#64748B]">
          {weekday}
        </p>
      </button>

      {/* CALENDAR */}
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
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={previousMonth}
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
              {monthName} {year}
            </h3>

            <button
              type="button"
              onClick={nextMonth}
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

          {/* WEEKDAYS */}
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

            {calendarDays}
          </div>

          {/* DONE BUTTON */}
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