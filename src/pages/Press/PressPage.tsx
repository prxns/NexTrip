function PressPage() {
  const articles = [
    "NexTrip expands hotel partnerships across the US",
    "Top travel startups to watch in 2026",
    "How NexTrip is simplifying online bookings",
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#14B8A6]">
            Press
          </p>

          <h1 className="mt-6 text-6xl font-black text-slate-900 md:text-7xl">
            Latest news and media coverage.
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl space-y-6 px-6">
          {articles.map((article) => (
            <div
              key={article}
              className="rounded-[28px] bg-white p-8 shadow-lg"
            >
              <h3 className="text-3xl font-black text-slate-900">
                {article}
              </h3>

              <p className="mt-4 text-slate-500">
                Published by NexTrip Media Team
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PressPage;