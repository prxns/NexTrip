import { useMemo, useState } from "react";

function DateSelector() {
  const today = new Date();

  const [open, setOpen] = useState(false);

  const [currentMonth, setCurrentMonth] =
    useState(new Date());

  const [departureDate, setDepartureDate] =
    useState<Date | null>(
      new Date(2026, 5, 24)
    );

  const [returnDate, setReturnDate] =
    useState<Date | null>(
      new Date(2026, 5, 30)
    );

  const [selectingReturn, setSelectingReturn] =
    useState(false);

  const year = currentMonth.getFullYear();

  const monthName =
    currentMonth.toLocaleString("default", {
      month: "long",
    });

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

  const formattedDeparture =
    departureDate?.toLocaleDateString(
      "en-US",
      {
        day: "2-digit",
        month: "short",
      }
    );

  const formattedReturn =
    returnDate?.toLocaleDateString(
      "en-US",
      {
        day: "2-digit",
        month: "short",
      }
    );

  const handleSelectDate = (date: Date) => {
    if (
      !departureDate ||
      (departureDate && returnDate)
    ) {
      setDepartureDate(date);
      setReturnDate(null);
      setSelectingReturn(true);
      return;
    }

    if (selectingReturn) {
      if (date < departureDate) {
        setDepartureDate(date);
      } else {
        setReturnDate(date);
        setSelectingReturn(false);
      }
    }
  };

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

      const isPast = date < today;

      const isDeparture =
        departureDate &&
        departureDate.toDateString() ===
          date.toDateString();

      const isReturn =
        returnDate &&
        returnDate.toDateString() ===
          date.toDateString();

      const isInRange =
        departureDate &&
        returnDate &&
        date > departureDate &&
        date < returnDate;

      return (
        <button
          key={day}
          disabled={isPast}
          onClick={() =>
            handleSelectDate(date)
          }
          className={`
            h-14
            rounded-2xl

            text-sm
            font-semibold

            transition-all
            duration-200

            ${
              isDeparture || isReturn
                ? "bg-[#2563EB] text-white shadow-lg"
                : isInRange
                ? "bg-blue-100 text-[#2563EB]"
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
    departureDate,
    returnDate,
    firstDayOfMonth,
    daysInMonth,
    selectingReturn,
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
          Trip Dates
        </p>

        <h3
          className="
            mt-3
            text-2xl
            font-black
            text-slate-900
          "
        >
          {formattedDeparture} →{" "}
          {formattedReturn || "Select"}
        </h3>

        <p className="mt-2 text-sm text-[#64748B]">
          {selectingReturn
            ? "Select return date"
            : "Round Trip"}
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

            w-[760px]

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

            <div className="text-center">
              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                {monthName} {year}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {selectingReturn
                  ? "Select your return date"
                  : "Select your departure date"}
              </p>
            </div>

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

          {/* FOOTER */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Departure
              </p>

              <h4 className="font-bold text-slate-900">
                {formattedDeparture}
              </h4>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Return
              </p>

              <h4 className="font-bold text-slate-900">
                {formattedReturn || "--"}
              </h4>
            </div>
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
            Confirm Dates
          </button>
        </div>
      )}
    </div>
  );
}

export default DateSelector;