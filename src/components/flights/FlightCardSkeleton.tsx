function FlightCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-xl animate-pulse">
      <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 rounded-2xl bg-slate-200" />

          <div className="space-y-3">
            <div className="h-3 w-24 rounded-full bg-slate-200" />
            <div className="h-6 w-48 rounded-full bg-slate-200" />
            <div className="h-3 w-36 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="h-4 w-24 rounded-full bg-slate-200" />
          <div className="h-10 w-36 rounded-full bg-slate-200" />
          <div className="h-4 w-28 rounded-full bg-slate-200" />
        </div>
      </div>

      <div className="border-t border-slate-100 px-6 py-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="h-14 rounded-2xl bg-slate-200" />
          <div className="h-14 rounded-2xl bg-slate-200" />
          <div className="h-14 rounded-2xl bg-slate-200" />
          <div className="h-14 rounded-2xl bg-slate-200" />
        </div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="h-3 w-32 rounded-full bg-slate-200" />
            <div className="h-8 w-40 rounded-full bg-slate-200" />
          </div>

          <div className="h-12 w-full rounded-2xl bg-slate-200 md:w-40" />
        </div>
      </div>
    </div>
  );
}

export default FlightCardSkeleton;