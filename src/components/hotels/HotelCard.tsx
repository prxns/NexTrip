import { useNavigate } from "react-router-dom";

import type { Hotel } from "../../data/hotels/hotels";

type HotelCardProps = {
  hotel: Hotel;
};

function HotelCard({
  hotel,
}: HotelCardProps) {
  const navigate = useNavigate();

  const lowestRoomPrice =
    Math.round(
      hotel.pricePerNight *
        hotel.rooms[0].priceMultiplier
    );

  return (
    <div
      className="
        group

        overflow-hidden
        rounded-[36px]

        bg-white

        shadow-xl

        transition-all
        duration-500

        hover:-translate-y-2
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="
            h-[320px]
            w-full

            object-cover

            transition-all
            duration-700

            group-hover:scale-110
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* CATEGORY */}
        <div
          className="
            absolute
            left-6
            top-6

            rounded-full

            bg-white/15
            px-4
            py-2

            backdrop-blur-md
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[2px]
              text-white
            "
          >
            {hotel.category}
          </p>
        </div>

        {/* RATING */}
        <div
          className="
            absolute
            right-6
            top-6

            flex
            items-center
            gap-2

            rounded-full

            bg-emerald-500
            px-4
            py-2

            shadow-lg
          "
        >
          <span className="text-lg">
            ⭐
          </span>

          <p
            className="
              text-sm
              font-black
              text-white
            "
          >
            {hotel.rating}
          </p>
        </div>

        {/* LOCATION */}
        <div
          className="
            absolute
            bottom-6
            left-6
          "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[2px]
              text-white/70
            "
          >
            Location
          </p>

          <h3
            className="
              mt-2
              text-3xl
              font-black
              text-white
            "
          >
            {hotel.city},{" "}
            {hotel.state}
          </h3>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        {/* HOTEL NAME */}
        <div>
          <h2
            className="
              text-3xl
              font-black
              leading-tight
              text-slate-900
            "
          >
            {hotel.name}
          </h2>

          <p
            className="
              mt-5
              line-clamp-3

              text-lg
              leading-8
              text-slate-500
            "
          >
            {hotel.description}
          </p>
        </div>

        {/* AMENITIES */}
        <div className="mt-8 flex flex-wrap gap-3">
          {hotel.amenities
            .slice(0, 4)
            .map((amenity) => (
              <div
                key={amenity}
                className="
                  rounded-full

                  bg-slate-100
                  px-4
                  py-2

                  text-sm
                  font-bold
                  text-slate-700
                "
              >
                {amenity}
              </div>
            ))}
        </div>

        {/* FOOTER */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-6

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* PRICE */}
          <div>
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[2px]
                text-slate-400
              "
            >
              Starting From
            </p>

            <div className="mt-3 flex items-end gap-2">
              <h3
                className="
                  text-5xl
                  font-black
                  leading-none
                  text-slate-900
                "
              >
                ${lowestRoomPrice}
              </h3>

              <span
                className="
                  mb-1
                  text-slate-400
                "
              >
                / night
              </span>
            </div>

            <p className="mt-3 text-slate-500">
              {hotel.reviews.toLocaleString()}{" "}
              verified reviews
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={() =>
              navigate(
                `/hotels/${hotel.slug}`
              )
            }
            className="
              h-14

              rounded-2xl

              bg-gradient-to-r
              from-[#2563EB]
              to-[#14B8A6]

              px-8

              text-lg
              font-bold
              text-white

              shadow-xl

              transition-all
              duration-300

              hover:scale-[1.03]
              hover:shadow-2xl

              active:scale-[0.98]
            "
          >
            Explore Hotel
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;