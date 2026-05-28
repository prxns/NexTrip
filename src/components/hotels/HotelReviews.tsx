import type {
  HotelReview,
} from "../../data/hotels/hotels";

type HotelReviewsProps = {
  reviews: HotelReview[];
};

function HotelReviews({
  reviews,
}: HotelReviewsProps) {
  return (
    <section className="mt-24">
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
          Guest Experiences
        </p>

        <h2
          className="
            mt-4
            text-5xl
            font-black
            text-slate-900
          "
        >
          Verified Reviews
        </h2>
      </div>

      <div
        className="
          mt-10
          grid
          gap-6

          xl:grid-cols-3
        "
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="
              rounded-[32px]
              bg-white
              p-8

              shadow-xl
            "
          >
            <div className="flex items-center gap-1 text-2xl">
              ⭐⭐⭐⭐⭐
            </div>

            <p
              className="
                mt-6
                text-lg
                leading-9
                text-slate-600
              "
            >
              “{review.comment}”
            </p>

            <div className="mt-8">
              <h4
                className="
                  text-xl
                  font-black
                  text-slate-900
                "
              >
                {review.user}
              </h4>

              <p className="mt-1 text-slate-500">
                Verified Guest
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HotelReviews;