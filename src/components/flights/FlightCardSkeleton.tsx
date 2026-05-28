function FlightCardSkeleton() {
  return (
    <div
      className="
        animate-pulse

        rounded-[32px]
        bg-white
        p-6
        shadow-lg
      "
    >
      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-slate-200" />

          <div>
            <div className="h-5 w-40 rounded bg-slate-200" />

            <div className="mt-3 h-4 w-24 rounded bg-slate-200" />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between gap-6">
          <div>
            <div className="h-8 w-24 rounded bg-slate-200" />

            <div className="mt-3 h-4 w-12 rounded bg-slate-200" />
          </div>

          <div className="flex-1 px-10">
            <div className="h-[2px] w-full bg-slate-200" />
          </div>

          <div>
            <div className="h-8 w-24 rounded bg-slate-200" />

            <div className="mt-3 h-4 w-12 rounded bg-slate-200" />
          </div>
        </div>

        <div>
          <div className="h-4 w-28 rounded bg-slate-200" />

          <div className="mt-4 h-10 w-24 rounded bg-slate-200" />

          <div className="mt-5 h-12 w-36 rounded-2xl bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default FlightCardSkeleton;