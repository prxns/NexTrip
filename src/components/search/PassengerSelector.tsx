import { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

function PassengerSelector() {
  const [open, setOpen] = useState(false);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const [cabinClass, setCabinClass] =
    useState("Economy");

  const wrapperRef =
    useRef<HTMLDivElement | null>(null);

  const totalPassengers =
    adults + children + infants;

  useEffect(() => {
    function handleOutsideClick(
      event: MouseEvent
    ) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  const increase = (
    setter: Dispatch<
      SetStateAction<number>
    >
  ) => {
    setter((prev) => prev + 1);
  };

  const decrease = (
    value: number,
    setter: Dispatch<
      SetStateAction<number>
    >,
    min = 0
  ) => {
    if (value > min) {
      setter((prev) => prev - 1);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="
        relative
        w-full
        overflow-visible
      "
    >
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
          Travelers
        </p>

        <h3
          className="
            mt-3
            text-3xl
            font-black
            text-slate-900
          "
        >
          {totalPassengers}{" "}
          {totalPassengers === 1
            ? "Traveler"
            : "Travelers"}
        </h3>

        <p className="mt-2 text-sm text-[#64748B]">
          {cabinClass}
        </p>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute
            right-0
            top-[calc(100%+14px)]
            z-[250]

            w-[360px]
            max-h-[380px]

            overflow-y-auto
            overflow-x-hidden

            rounded-[28px]
            border
            border-slate-200
            bg-white

            p-5
            pr-2

            shadow-2xl
          "
        >
          {/* ADULTS */}
          <CounterRow
            title="Adults"
            subtitle="12+ years"
            value={adults}
            onIncrease={() =>
              increase(setAdults)
            }
            onDecrease={() =>
              decrease(
                adults,
                setAdults,
                1
              )
            }
          />

          {/* CHILDREN */}
          <CounterRow
            title="Children"
            subtitle="2–11 years"
            value={children}
            onIncrease={() =>
              increase(setChildren)
            }
            onDecrease={() =>
              decrease(
                children,
                setChildren
              )
            }
          />

          {/* INFANTS */}
          <CounterRow
            title="Infants"
            subtitle="Under 2 years"
            value={infants}
            onIncrease={() =>
              increase(setInfants)
            }
            onDecrease={() =>
              decrease(
                infants,
                setInfants
              )
            }
          />

          {/* CABIN CLASS */}
          <div className="mt-6">
            <p
              className="
                mb-3
                text-sm
                font-semibold
                text-slate-700
              "
            >
              Cabin Class
            </p>

            <div
              className="
                grid
                grid-cols-2
                gap-3
              "
            >
              {[
                "Economy",
                "Premium Economy",
                "Business",
                "First Class",
              ].map((type) => {
                const active =
                  cabinClass === type;

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setCabinClass(type)
                    }
                    className={`
                      flex
                      min-h-[52px]
                      items-center
                      justify-center

                      rounded-2xl
                      border

                      px-4
                      py-3

                      text-center
                      text-[13px]
                      font-semibold

                      whitespace-nowrap

                      transition-all
                      duration-300

                      ${
                        active
                          ? "border-[#2563EB] bg-[#2563EB] text-white shadow-lg"
                          : "border-slate-200 bg-white text-slate-700 hover:border-[#2563EB]"
                      }
                    `}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* DONE BUTTON */}
          <button
            type="button"
            onClick={() =>
              setOpen(false)
            }
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

type CounterRowProps = {
  title: string;
  subtitle: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

function CounterRow({
  title,
  subtitle,
  value,
  onIncrease,
  onDecrease,
}: CounterRowProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between

        border-b
        border-slate-100

        py-4

        last:border-b-0
      "
    >
      <div className="pr-3">
        <h4
          className="
            font-semibold
            text-slate-900
          "
        >
          {title}
        </h4>

        <p
          className="
            text-sm
            text-slate-500
          "
        >
          {subtitle}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrease}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full
            border
            border-slate-200

            text-xl
            font-bold
            text-slate-700

            transition-all
            duration-200

            hover:border-[#2563EB]
            hover:text-[#2563EB]
          "
        >
          −
        </button>

        <span
          className="
            w-6
            text-center
            text-lg
            font-bold
            text-slate-900
          "
        >
          {value}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full
            border
            border-slate-200

            text-xl
            font-bold
            text-slate-700

            transition-all
            duration-200

            hover:border-[#2563EB]
            hover:text-[#2563EB]
          "
        >
          +
        </button>
      </div>
    </div>
  );
}

export default PassengerSelector;