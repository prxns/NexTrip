import { useParams } from "react-router-dom";
import { destinationDetails } from "../../data/destinations/destinationdetails";
import Container from "../../components/common/Container";

function DestinationPage() {
  const { slug } = useParams();

  const destination =
    destinationDetails[
      slug as keyof typeof destinationDetails
    ];

  if (!destination) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-5xl font-black">
          Destination Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <section
        className="
          relative
          min-h-[650px]
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: `url(${destination.heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <Container>
          <div
            className="
              relative
              z-10
              flex
              min-h-[650px]
              items-center
              justify-between
              gap-12
            "
          >
            {/* LEFT */}
            <div className="max-w-2xl text-white">
              <h1 className="text-7xl font-black">
                {destination.city}
              </h1>

              <p className="mt-6 text-xl leading-9 text-slate-200">
                {destination.description}
              </p>
            </div>

            {/* RIGHT */}
            <div
              className="
                hidden
                lg:block
                rounded-[32px]
                bg-white
                p-4
                shadow-2xl
              "
            >
              <img
                src={destination.gallery[0]}
                alt={destination.city}
                className="
                  h-[350px]
                  w-[550px]
                  rounded-2xl
                  object-cover
                "
              />

              <div className="mt-4 flex gap-3">
                {destination.gallery.map(
                  (image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      className="
                        h-20
                        w-28
                        rounded-xl
                        object-cover
                      "
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TABS */}
      <section className="sticky top-20 z-20 bg-white shadow-sm">
        <Container>
          <div className="flex gap-8 py-5">
            <button className="font-bold">
              Things To Do
            </button>

            <button className="font-bold">
              Best Time To Visit
            </button>

            <button className="font-bold">
              Hotels
            </button>
          </div>
        </Container>
      </section>

      {/* THINGS TO DO */}
      <section className="py-20">
        <Container>
          <h2 className="text-5xl font-black">
            Things To Do
          </h2>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.thingsToDo.map(
              (activity) => (
                <div
                  key={activity}
                  className="
                    rounded-[28px]
                    bg-white
                    p-8
                    shadow-lg
                  "
                >
                  <h3 className="text-xl font-bold">
                    {activity}
                  </h3>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      {/* BEST TIME */}
      <section className="py-20 bg-slate-50">
        <Container>
          <h2 className="text-5xl font-black">
            Best Time To Visit
          </h2>

          <p className="mt-8 max-w-4xl text-xl text-slate-600">
            {destination.bestTime}
          </p>
        </Container>
      </section>

      {/* HOTELS */}
      <section className="py-20">
        <Container>
          <h2 className="text-5xl font-black">
            Recommended Hotels
          </h2>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destination.hotels.map((hotel) => (
              <div
                key={hotel}
                className="
                  rounded-[28px]
                  bg-white
                  p-8
                  shadow-lg
                "
              >
                <h3 className="text-xl font-bold">
                  {hotel}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default DestinationPage;