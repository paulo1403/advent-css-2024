import { ImageCard } from "./ImageCard";
import { ExtraImagesOverlay } from "./ExtraImagesOverlay";

interface Image {
  src: string;
  alt: string;
  className: string;
}

interface ImageGridProps {
  images: Image[];
}

export const ImageGrid = ({ images }: ImageGridProps) => {
  if (images.length === 1) {
    return (
      <div className="h-[320px]">
        <ImageCard src={images[0].src} alt={images[0].alt} className="h-full" />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-2 h-[320px]">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-full"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-rows-2 gap-2 h-auto">
      <div className="grid grid-cols-2 gap-2">
        {images.slice(0, 2).map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-40"
          />
        ))}
      </div>

      {images.length > 2 && (
        <div
          className={`grid gap-2 ${
            images.length === 4
              ? "grid-cols-2"
              : images.length === 3
              ? "grid-cols-1"
              : "grid-cols-3"
          }`}
        >
          {images.slice(2, 5).map((image, index) => (
            <div key={index + 2} className="relative">
              <ImageCard
                src={image.src}
                alt={image.alt}
                className={`h-40 ${images.length === 3 ? "col-span-full" : ""}`}
              />
              {index === 2 && images.length > 5 && (
                <ExtraImagesOverlay count={images.length - 5} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
