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

  const [searchParams, setSearchParams] =
    useSearchParams();

  const checkIn =
    searchParams.get("checkIn") || "";

  const checkOut =
    searchParams.get("checkOut") || "";

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) {
      return 0;
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diff =
      end.getTime() -
      start.getTime();

    const calculated = Math.ceil(
      diff /
        (1000 * 60 * 60 * 24)
    );

    return calculated > 0
      ? calculated
      : 0;
  }, [checkIn, checkOut]);

  const hotel = useMemo(() => {
    return hotels.find(
      (item) =>
        item.slug === slug
    );
  }, [slug]);

  const [
    selectedRoom,
    setSelectedRoom,
  ] = useState(
    hotel?.rooms?.[0]
  );

  const handleCheckInChange = (
    value: string
  ) => {
    const updated =
      new URLSearchParams(
        searchParams
      );

    updated.set(
      "checkIn",
      value
    );

    setSearchParams(updated);
  };

  const handleCheckOutChange = (
    value: string
  ) => {
    const updated =
      new URLSearchParams(
        searchParams
      );

    updated.set(
      "checkOut",
      value
    );

    setSearchParams(updated);
  };

  if (!hotel || !selectedRoom) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-100
          px-4
        "
      >
        <h1
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-black
            text-slate-900
            text-center
          "
        >
          Hotel Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 pb-16 lg:pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden py-10 md:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p
            className="
              text-xs
              sm:text-sm
              font-bold
              uppercase
              tracking-[4px]
              text-[#14B8A6]
            "
          >
            Luxury Hotel
          </p>

          <h1
            className="
              mt-4
              max-w-5xl

              text-4xl
              font-black
              leading-tight
              text-slate-900

              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            {hotel.name}
          </h1>

          <p
            className="
              mt-4
              text-base
              text-slate-500

              sm:text-lg
              lg:text-xl
            "
          >
            {hotel.city}, {hotel.state}
          </p>

          {/* DATE CONTROLS */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-4

              md:grid-cols-3
            "
          >
            <div
              className="
                rounded-[28px]
                bg-white
                p-5
                shadow-xl
                w-full
              "
            >
              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-slate-400
                "
              >
                Check-in
              </p>

              <input
                type="date"
                value={checkIn}
                onChange={(e) =>
                  handleCheckInChange(
                    e.target.value
                  )
                }
                className="
                  mt-3
                  w-full
                  border-none
                  bg-transparent
                  text-lg
                  sm:text-xl
                  lg:text-2xl
                  font-black
                  text-slate-900
                  outline-none
                "
              />
            </div>

            <div
              className="
                rounded-[28px]
                bg-white
                p-5
                shadow-xl
                w-full
              "
            >
              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-slate-400
                "
              >
                Check-out
              </p>

              <input
                type="date"
                min={checkIn}
                value={checkOut}
                onChange={(e) =>
                  handleCheckOutChange(
                    e.target.value
                  )
                }
                className="
                  mt-3
                  w-full
                  border-none
                  bg-transparent
                  text-lg
                  sm:text-xl
                  lg:text-2xl
                  font-black
                  text-slate-900
                  outline-none
                "
              />
            </div>

            <div
              className="
                rounded-[28px]
                bg-gradient-to-r
                from-[#2563EB]
                to-[#14B8A6]
                p-5
                shadow-2xl
                w-full
                text-white
              "
            >
              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-white/70
                "
              >
                Total Nights
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-black
                "
              >
                {nights}
              </h3>
            </div>
          </div>

          <div className="mt-10 lg:mt-14">
            <HotelGallery
              images={hotel.gallery}
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
            gap-6
            px-4
            sm:px-6
            lg:gap-10

            xl:grid-cols-[minmax(0,1fr)_420px]
          "
        >
          {/* LEFT */}
          <div>
            <div
              className="
                rounded-[24px]
                bg-white
                p-5
                shadow-xl

                sm:p-8
                lg:p-10
              "
            >
              <p
                className="
                  text-base
                  leading-7
                  text-slate-600

                  sm:text-lg
                  sm:leading-8

                  lg:leading-9
                "
              >
                {hotel.description}
              </p>
            </div>

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
              nights={
                nights || 1
              }
            />

            <HotelAmenities
              amenities={
                hotel.amenities
              }
            />

            <NearbyAttractions
              attractions={
                hotel.attractions
              }
            />

            <HotelReviews
              reviews={
                hotel.userReviews
              }
            />
          </div>

          {/* RIGHT */}
          <div className="xl:sticky xl:top-24 xl:self-start">
            <HotelBookingCard
              room={selectedRoom}
              basePrice={
                hotel.pricePerNight
              }
              nights={nights}
              hotelName={hotel.name}
              city={hotel.city}
              state={hotel.state}
              checkIn={checkIn}
              checkOut={checkOut}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelDetailsPage;