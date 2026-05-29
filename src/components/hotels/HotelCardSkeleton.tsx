function HotelCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[36px] bg-white shadow-xl animate-pulse">
      <div className="h-[320px] bg-slate-200" />

      <div className="p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="h-4 w-24 rounded-full bg-slate-200" />
            <div className="h-8 w-56 rounded-full bg-slate-200" />
            <div className="h-4 w-40 rounded-full bg-slate-200" />
          </div>

          <div className="h-10 w-16 rounded-full bg-slate-200" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="h-10 rounded-2xl bg-slate-200" />
          <div className="h-10 rounded-2xl bg-slate-200" />
          <div className="h-10 rounded-2xl bg-slate-200" />
          <div className="h-10 rounded-2xl bg-slate-200" />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <div className="h-8 w-20 rounded-full bg-slate-200" />
          <div className="h-8 w-24 rounded-full bg-slate-200" />
          <div className="h-8 w-20 rounded-full bg-slate-200" />
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="h-3 w-28 rounded-full bg-slate-200" />
            <div className="h-10 w-36 rounded-full bg-slate-200" />
            <div className="h-3 w-32 rounded-full bg-slate-200" />
          </div>

          <div className="h-12 w-32 rounded-2xl bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default HotelCardSkeleton;