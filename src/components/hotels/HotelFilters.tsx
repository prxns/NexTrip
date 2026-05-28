type HotelFiltersProps = {
  maxPrice: number;
  setMaxPrice: (value: number) => void;
  minRating: number;
  setMinRating: (value: number) => void;
  category: string;
  setCategory: (value: string) => void;
};

function HotelFilters({
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  category,
  setCategory,
}: HotelFiltersProps) {
  const categories = ["All", "Hotel", "Resort", "Boutique", "Luxury", "Business"];

  return (
    <div className="rounded-[32px] bg-white p-8 shadow-xl">
      <h2 className="text-3xl font-black text-slate-900">Filters</h2>

      <div className="mt-10">
        <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
          Category
        </p>

        <div className="mt-4 space-y-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`
                flex
                h-12
                w-full
                items-center
                justify-center
                rounded-2xl
                text-sm
                font-bold
                transition-all
                duration-300
                ${
                  category === item
                    ? "bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
            Max Price
          </p>
          <p className="text-lg font-black text-slate-900">${maxPrice}</p>
        </div>

        <input
          type="range"
          min={100}
          max={1000}
          step={10}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="mt-5 w-full"
        />
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold uppercase tracking-[3px] text-slate-400">
            Min Rating
          </p>
          <p className="text-lg font-black text-slate-900">{minRating}★</p>
        </div>

        <input
          type="range"
          min={1}
          max={5}
          step={0.1}
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="mt-5 w-full"
        />
      </div>
    </div>
  );
}

export default HotelFilters;