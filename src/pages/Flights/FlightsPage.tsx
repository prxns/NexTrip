import { useSearchParams } from "react-router-dom";

function FlightsPage() {
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const departure = searchParams.get("departure");
  const passengers = searchParams.get("passengers");
  const cabin = searchParams.get("cabin");

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-5xl font-black text-slate-900">
          Flight Search Results
        </h1>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                From
              </p>

              <h2 className="mt-2 text-3xl font-black">
                {from}
              </h2>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                To
              </p>

              <h2 className="mt-2 text-3xl font-black">
                {to}
              </h2>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Departure
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {departure
                  ? new Date(departure).toDateString()
                  : "N/A"}
              </h2>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Travelers
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {passengers} Passenger(s)
              </h2>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Cabin
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {cabin}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightsPage;