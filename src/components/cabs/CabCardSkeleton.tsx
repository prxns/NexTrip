function CabCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[34px] bg-white shadow-xl animate-pulse">
      <div className="h-[250px] bg-slate-200" />

      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="h-4 w-24 rounded-full bg-slate-200" />
            <div className="h-8 w-52 rounded-full bg-slate-200" />
            <div className="h-4 w-40 rounded-full bg-slate-200" />
          </div>

          <div className="h-8 w-20 rounded-full bg-slate-200" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="h-10 rounded-2xl bg-slate-200" />
          <div className="h-10 rounded-2xl bg-slate-200" />
          <div className="h-10 rounded-2xl bg-slate-200" />
          <div className="h-10 rounded-2xl bg-slate-200" />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <div className="h-8 w-20 rounded-full bg-slate-200" />
          <div className="h-8 w-24 rounded-full bg-slate-200" />
          <div className="h-8 w-18 rounded-full bg-slate-200" />
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="h-3 w-32 rounded-full bg-slate-200" />
            <div className="h-10 w-40 rounded-full bg-slate-200" />
            <div className="h-3 w-36 rounded-full bg-slate-200" />
          </div>

          <div className="h-12 w-full rounded-2xl bg-slate-200 md:w-36" />
        </div>
      </div>
    </div>
  );
}

export default CabCardSkeleton;