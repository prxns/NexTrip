import { ChevronDown } from "lucide-react";
import { useState } from "react";

import {
  useCurrency,
} from "../../context/CurrencyContext";

function CurrencySelector() {
  const {
    currency,
    currencies,
    setCurrency,
  } = useCurrency();

  const [open, setOpen] =
    useState(false);

  return (
    <div className="relative">
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          flex
          items-center
          gap-2

          rounded-2xl
          border
          border-slate-200

          bg-white
          px-4
          py-3

          font-semibold
          text-slate-700

          shadow-sm
          transition-all
          duration-200

          hover:border-slate-300
        "
      >
        <span className="text-lg">
          {currency.flag}
        </span>

        <span>
          {currency.code}
        </span>

        <ChevronDown size={18} />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            top-[110%]
            z-[999]

            w-64

            overflow-hidden
            rounded-3xl

            border
            border-slate-200

            bg-white

            shadow-2xl
          "
        >
          {currencies.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                setCurrency(item);
                setOpen(false);
              }}
              className="
                flex
                w-full
                items-center
                gap-4

                px-5
                py-4

                text-left

                transition-all
                duration-200

                hover:bg-slate-100
              "
            >
              <span className="text-2xl">
                {item.flag}
              </span>

              <div>
                <p className="font-bold text-slate-900">
                  {item.code}
                </p>

                <p className="text-sm text-slate-500">
                  {item.label}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CurrencySelector;