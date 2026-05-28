import { useState } from "react";

function PassengerSelector() {
  const [open, setOpen] = useState(false);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const [cabinClass, setCabinClass] = useState("Economy");

  const totalPassengers =
    adults + children + infants;

  const increase = (
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setter((prev) => prev + 1);
  };

  const decrease = (
    value: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    min = 0
  ) => {
    if (value > min) {
      setter((prev) => prev - 1);
    }
  };

  return (
    <div className="relative">
      {/* CARD */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full
          rounded-[24px]
          border
          border-[#E2E8F0]
          bg-white
          p-5
          text-left
          transition-all
          duration-200
          hover:border-[#2563EB]
        "
      >
        <p className="text-sm font-medium text-[#64748B]">
          Travelers
        </p>

        <h3 className="mt-2 text-3xl font-bold text-slate-900">
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
            left-0
            right-0
            top-[calc(100%+12px)]
            z-[100]
            rounded-[24px]
            border
            border-slate-200
            bg-white
            p-5
            shadow-2xl
          "
        >
          {/* ADULTS */}
          <CounterRow
            title="Adults"
            subtitle="12+ years"
            value={adults}
            onIncrease={() => increase(setAdults)}
            onDecrease={() =>
              decrease(adults, setAdults, 1)
            }
          />

          {/* CHILDREN */}
          <CounterRow
            title="Children"
            subtitle="2-11 years"
            value={children}
            onIncrease={() => increase(setChildren)}
            onDecrease={() =>
              decrease(children, setChildren)
            }
          />

          {/* INFANTS */}
          <CounterRow
            title="Infants"
            subtitle="Under 2 years"
            value={infants}
            onIncrease={() => increase(setInfants)}
            onDecrease={() =>
              decrease(infants, setInfants)
            }
          />

          {/* CABIN CLASS */}
          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold text-slate-700">
              Cabin Class
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Economy",
                "Premium Economy",
                "Business",
                "First Class",
              ].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setCabinClass(type)}
                  className={`
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    transition-all

                    ${
                      cabinClass === type
                        ? "border-[#2563EB] bg-[#2563EB] text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-[#2563EB]"
                    }
                  `}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* DONE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="
              mt-6
              w-full
              rounded-2xl
              bg-[#2563EB]
              py-4
              text-sm
              font-bold
              text-white
              transition-all
              hover:bg-blue-700
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
    <div className="flex items-center justify-between border-b border-slate-100 py-4">
      <div>
        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>

        <p className="text-sm text-slate-500">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrease}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            text-xl
            font-bold
            text-slate-700
            transition-all
            hover:border-[#2563EB]
          "
        >
          -
        </button>

        <span className="w-5 text-center font-bold text-slate-900">
          {value}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            text-xl
            font-bold
            text-slate-700
            transition-all
            hover:border-[#2563EB]
          "
        >
          +
        </button>
      </div>
    </div>
  );
}

export default PassengerSelector;