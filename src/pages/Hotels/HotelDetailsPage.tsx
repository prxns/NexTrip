import { useMemo, useState } from "react";

import {
  useParams,
  useSearchParams,
} from "react-router-dom";

import HotelGallery from "../../components/hotels/HotelGallery";
import RoomSelector from "../../components/hotels/RoomSelector";
import HotelAmenities from "../../components/hotels/HotelAmenities";
import HotelReviews from "../../components/hotels/HotelReviews";
import NearbyAttractions from "../../components/hotels/NearbyAttractions";
import HotelBookingCard from "../../components/hotels/HotelBookingCard";

import {
  hotels,
} from "../../data/hotels/hotels";

function HotelDetailsPage() {
  const { slug } = useParams();

  const [searchParams] =
    useSearchParams();

  /* -------------------------------- */
  /* SEARCH PARAMS                    */
  /* -------------------------------- */

  const checkIn =
    searchParams.get("checkIn");

  const checkOut =
    searchParams.get("checkOut");

  /* -------------------------------- */
  /* CALCULATE NIGHTS                 */
  /* -------------------------------- */

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) {
      return 1;
    }

    const start =
      new Date(checkIn);

    const end =
      new Date(checkOut);

    const diff =
      end.getTime() -
      start.getTime();

    const calculated =
      Math.ceil(
        diff /
          (1000 *
            60 *
            60 *
            24)
      );

    return calculated > 0
      ? calculated
      : 1;
  }, [checkIn, checkOut]);

  /* -------------------------------- */
  /* FIND HOTEL                       */
  /* -------------------------------- */

  const hotel = useMemo(() => {
    return hotels.find(
      (item) =>
        item.slug === slug
    );
  }, [slug]);

  /* -------------------------------- */
  /* SELECTED ROOM                    */
  /* -------------------------------- */

  const [
    selectedRoom,
    setSelectedRoom,
  ] = useState(
    hotel?.rooms?.[0]
  );

  /* -------------------------------- */
  /* NOT FOUND                        */
  /* -------------------------------- */

  if (!hotel || !selectedRoom) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-100
        "
      >
        <h1
          className="
            text-5xl
            font-black
            text-slate-900
          "
        >
          Hotel Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* LABEL */}
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[4px]
              text-[#14B8A6]
            "
          >
            Luxury Hotel
          </p>

          {/* TITLE */}
          <h1
            className="
              mt-5
              max-w-5xl

              text-6xl
              font-black
              leading-tight
              text-slate-900

              md:text-8xl
            "
          >
            {hotel.name}
          </h1>

          {/* LOCATION */}
          <p
            className="
              mt-6
              text-xl
              text-slate-500
            "
          >
            {hotel.city},{" "}
            {hotel.state}
          </p>

          {/* DATE INFO */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* CHECK IN */}
            <div
              className="
                rounded-2xl
                bg-white
                px-6
                py-4
                shadow-lg
              "
            >
              <p
                className="
                  text-sm
                  font-semibold
                  text-slate-400
                "
              >
                Check-in
              </p>

              <h3
                className="
                  mt-1
                  text-lg
                  font-black
                  text-slate-900
                "
              >
                {checkIn
                  ? new Date(
                      checkIn
                    ).toLocaleDateString()
                  : "Select Date"}
              </h3>
            </div>

            {/* CHECK OUT */}
            <div
              className="
                rounded-2xl
                bg-white
                px-6
                py-4
                shadow-lg
              "
            >
              <p
                className="
                  text-sm
                  font-semibold
                  text-slate-400
                "
              >
                Check-out
              </p>

              <h3
                className="
                  mt-1
                  text-lg
                  font-black
                  text-slate-900
                "
              >
                {checkOut
                  ? new Date(
                      checkOut
                    ).toLocaleDateString()
                  : "Select Date"}
              </h3>
            </div>

            {/* NIGHTS */}
            <div
              className="
                rounded-2xl

                bg-gradient-to-r
                from-[#2563EB]
                to-[#14B8A6]

                px-6
                py-4

                text-white
                shadow-xl
              "
            >
              <p
                className="
                  text-sm
                  font-semibold
                  text-white/70
                "
              >
                Total Nights
              </p>

              <h3
                className="
                  mt-1
                  text-2xl
                  font-black
                "
              >
                {nights}
              </h3>
            </div>
          </div>

          {/* GALLERY */}
          <div className="mt-14">
            <HotelGallery
              images={
                hotel.gallery
              }
            />
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section>
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-10
            px-6

            xl:grid-cols-[1fr_420px]
          "
        >
          {/* LEFT */}
          <div>
            {/* DESCRIPTION */}
            <div
              className="
                rounded-[36px]
                bg-white
                p-10

                shadow-xl
              "
            >
              <p
                className="
                  text-lg
                  leading-9
                  text-slate-600
                "
              >
                {hotel.description}
              </p>
            </div>

            {/* ROOM SELECTOR */}
            <RoomSelector
              rooms={hotel.rooms}
              selectedRoom={
                selectedRoom
              }
              setSelectedRoom={
                setSelectedRoom
              }
              basePrice={
                hotel.pricePerNight
              }
              nights={nights}
            />

            {/* AMENITIES */}
            <HotelAmenities
              amenities={
                hotel.amenities
              }
            />

            {/* ATTRACTIONS */}
            <NearbyAttractions
              attractions={
                hotel.attractions
              }
            />

            {/* REVIEWS */}
            <HotelReviews
              reviews={
                hotel.userReviews
              }
            />
          </div>

          {/* RIGHT */}
          <div>
            <HotelBookingCard
              room={selectedRoom}
              basePrice={
                hotel.pricePerNight
              }
              nights={nights}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelDetailsPage;