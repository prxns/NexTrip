type HotelGalleryProps = {
  images: string[];
};

function HotelGallery({
  images,
}: HotelGalleryProps) {
  return (
    <div
      className="
        grid
        gap-4

        md:grid-cols-4
      "
    >
      <div className="md:col-span-2 md:row-span-2">
        <img
          src={images[0]}
          alt="Hotel"
          className="
            h-full
            min-h-[420px]
            w-full

            rounded-[32px]

            object-cover
          "
        />
      </div>

      {images
        .slice(1, 5)
        .map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Hotel"
            className="
              h-[200px]
              w-full

              rounded-[28px]

              object-cover
            "
          />
        ))}
    </div>
  );
}

export default HotelGallery;