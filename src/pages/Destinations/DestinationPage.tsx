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
          min-h-[520px] lg:min-h-[650px]
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
              min-h-[520px]
              flex-col
              justify-center
              gap-8
              py-16

              lg:min-h-[650px]
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-12
            "
          >
            {/* LEFT */}
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl font-black">
                {destination.city}
              </h1>

              <p className="mt-5
                text-base
                leading-7
                sm:text-lg
                sm:leading-8
                lg:text-xl
                lg:leading-9
              text-slate-200">
                {destination.description}
              </p>
            </div>

            {/* RIGHT */}
            <div
              className="
                hidden
                xl:block
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
                  h-[260px]
                  w-[420px]

                  xl:h-[350px]
                  xl:w-[550px]
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
          <div className="flex gap-6 overflow-x-auto whitespace-nowrap py-4 scrollbar-hide">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Things To Do
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {destination.thingsToDo.map(
              (activity) => (
                <div
                  key={activity}
                  className="
                    rounded-[24px]
                    bg-white
                    p-6
                    shadow-lg
                    lg:p-8
                  "
                >
                  <h3 className="text-base leading-7 sm:text-lg sm:leading-8 lg:text-xl font-bold">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Best Time To Visit
          </h2>

          <p className="
              mt-8 
              max-w-4xl 
              text-base
              leading-7
            text-slate-600
              sm:text-lg  
              sm:leading-8
              lg:text-xl
            "
            >
            {destination.bestTime}
          </p>
        </Container>
      </section>

      {/* HOTELS */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Recommended Hotels
          </h2>

          <div className="
            mt-10 
            grid 
            grid-cols-1 
            gap-5
            sm:grid-cols-2
            xl:grid-cols-4">
            {destination.hotels.map((hotel) => (
              <div
                key={hotel}
                className="
                  rounded-[24px]
                  bg-white
                  p-6
                  shadow-lg
                  lg:p-8
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