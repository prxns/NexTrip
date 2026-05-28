import { useState } from "react";

const tripTypes = [
  "Round Trip",
  "One Way",
  "Multi City",
];

function TripTypeToggle() {
  const [activeTripType, setActiveTripType] =
    useState("Round Trip");

  return (
    <div className="flex flex-wrap gap-3">
      {tripTypes.map((type) => {
        const isActive = activeTripType === type;

        return (
          <button
            key={type}
            onClick={() => setActiveTripType(type)}
            className={`
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              transition-all
              duration-300
              ${
                isActive
                  ? "bg-[#2563EB] text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }
            `}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}

export default TripTypeToggle;