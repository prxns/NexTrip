function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#14B8A6]">
            About NexTrip
          </p>

          <h1 className="mt-6 max-w-4xl text-6xl font-black leading-tight text-slate-900 md:text-7xl">
            Modern travel experiences built for everyone.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-500">
            NexTrip helps travelers discover flights, hotels,
            stays, and experiences through a fast, modern,
            and intuitive platform.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {[
            ["2M+", "Bookings Completed"],
            ["120+", "Cities Covered"],
            ["24/7", "Customer Support"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[32px] bg-white p-10 shadow-xl"
            >
              <h2 className="text-5xl font-black text-slate-900">
                {value}
              </h2>

              <p className="mt-4 text-lg text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;