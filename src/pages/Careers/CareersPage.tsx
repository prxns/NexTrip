function CareersPage() {
  const jobs = [
    "Frontend Developer",
    "UI/UX Designer",
    "Travel Operations Manager",
    "Customer Support Specialist",
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#14B8A6]">
            Careers
          </p>

          <h1 className="mt-6 text-6xl font-black text-slate-900 md:text-7xl">
            Join the team building the future of travel.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-500">
            We’re building modern travel experiences for
            millions of users worldwide.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl space-y-6 px-6">
          {jobs.map((job) => (
            <div
              key={job}
              className="flex items-center justify-between rounded-[28px] bg-white p-8 shadow-lg"
            >
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  {job}
                </h3>

                <p className="mt-2 text-slate-500">
                  Remote • Full Time
                </p>
              </div>

              <button
                className="
                  h-12
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#2563EB]
                  to-[#14B8A6]
                  px-6
                  font-bold
                  text-white
                "
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CareersPage;