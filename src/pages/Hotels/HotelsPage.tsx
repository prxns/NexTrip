function HotelsPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div
        className="
          relative
          overflow-hidden
          bg-black
          py-32
        "
      >
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[5px]
              text-[#14B8A6]
            "
          >
            Luxury Hotels
          </p>

          <h1
            className="
              mt-6
              max-w-4xl
              text-6xl
              font-black
              leading-tight
              text-white
              md:text-8xl
            "
          >
            Find Your Perfect Stay
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              text-xl
              leading-9
              text-slate-300
            "
          >
            Discover luxury resorts,
            boutique hotels, penthouses,
            and unforgettable stays across
            the United States.
          </p>

          {/* SEARCH BAR */}
          <div
            className="
              mt-14
              grid
              gap-4

              rounded-[32px]
              bg-white/95
              p-6

              shadow-2xl

              md:grid-cols-4
            "
          >
            <input
              type="text"
              placeholder="Where are you going?"
              className="
                h-14
                rounded-2xl
                border
                border-slate-200
                px-5
                outline-none
              "
            />

            <input
              type="text"
              placeholder="Check-in"
              className="
                h-14
                rounded-2xl
                border
                border-slate-200
                px-5
                outline-none
              "
            />

            <input
              type="text"
              placeholder="Check-out"
              className="
                h-14
                rounded-2xl
                border
                border-slate-200
                px-5
                outline-none
              "
            />

            <button
              className="
                h-14

                rounded-2xl

                bg-gradient-to-r
                from-[#2563EB]
                to-[#14B8A6]

                text-lg
                font-bold
                text-white

                transition-all
                duration-300

                hover:scale-[1.02]
              "
            >
              Search Hotels
            </button>
          </div>
        </div>
      </div>

      {/* FEATURED SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[4px]
                  text-[#14B8A6]
                "
              >
                Featured Hotels
              </p>

              <h2
                className="
                  mt-4
                  text-5xl
                  font-black
                  text-slate-900
                "
              >
                Luxury Escapes
              </h2>
            </div>
          </div>

          <div
            className="
              mt-14
              grid
              gap-8

              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {[1, 2, 3].map((hotel) => (
              <div
                key={hotel}
                className="
                  overflow-hidden
                  rounded-[32px]
                  bg-white
                  shadow-xl

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    h-[280px]
                    bg-cover
                    bg-center
                  "
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop')",
                  }}
                />

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3
                      className="
                        text-2xl
                        font-black
                        text-slate-900
                      "
                    >
                      Grand Horizon Resort
                    </h3>

                    <span
                      className="
                        rounded-full
                        bg-emerald-100
                        px-3
                        py-1

                        text-sm
                        font-bold
                        text-emerald-700
                      "
                    >
                      5★
                    </span>
                  </div>

                  <p className="mt-4 text-slate-500">
                    Miami Beach, Florida
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        Starting from
                      </p>

                      <h4
                        className="
                          text-3xl
                          font-black
                          text-slate-900
                        "
                      >
                        $420
                      </h4>

                      <p className="text-sm text-slate-400">
                        per night
                      </p>
                    </div>

                    <button
                      className="
                        h-12

                        rounded-2xl

                        bg-slate-900

                        px-6

                        font-bold
                        text-white

                        transition-all
                        duration-300

                        hover:bg-slate-800
                      "
                    >
                      View Hotel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelsPage;