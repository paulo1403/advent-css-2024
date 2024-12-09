import { useState } from "react";
import image1 from "./images/image01.jpg";
import image2 from "./images/image02.jpg";
import image3 from "./images/image03.jpg";
import image4 from "./images/image04.jpg";
import image5 from "./images/image05.jpg";
import image6 from "./images/image06.jpg";

const Challenge01 = () => {
  const availableImages = [image1, image2, image3, image4, image5, image6];

  const initialImages = [
    {
      src: image1,
      alt: "Image 1",
      className: "col-span-6",
    },
    {
      src: image2,
      alt: "Image 2",
      className: "col-span-6",
    },
    {
      src: image3,
      alt: "Image 3",
      className: "col-span-4",
    },
    {
      src: image4,
      alt: "Image 4",
      className: "col-span-4",
    },
    {
      src: image5,
      alt: "Image 5",
      className: "col-span-4",
    },
  ];

  const [images, setImages] = useState(initialImages);

  const getImageClassName = (index: number, totalImages: number) => {
    if (totalImages === 4) {
      return index < 2 ? "col-span-6" : "col-span-6";
    }
    if (totalImages === 3 && index === 2) {
      return "col-span-12";
    }
    return index < 2 ? "col-span-6" : "col-span-4";
  };

  const handleAddImage = () => {
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const currentLength = images.length;

    const newImage = {
      src: availableImages[randomIndex],
      alt: `Image ${currentLength + 1}`,
      className: getImageClassName(currentLength, currentLength + 1),
    };

    if (currentLength === 3) {
      const updatedImages = images.map((img, idx) => ({
        ...img,
        className: getImageClassName(idx, 4),
      }));
      setImages([...updatedImages, newImage]);
    } else {
      setImages([...images, newImage]);
    }
  };

  const handleRemoveImage = () => {
    if (images.length > 0) {
      setImages(images.slice(0, -1));
    }
  };

  const ExtraImagesOverlay = ({ count }: { count: number }) => (
    <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-lg">
      <span className="text-white text-2xl font-bold">+{count}</span>
    </div>
  );

  return (
    <div className="mx-auto p-4">
      <div className="w-[568px] bg-slate-900 p-4 rounded-xl">
        {images.length === 1 ? (
          <div className="h-[320px]">
            <div className="relative overflow-hidden group h-full">
              <div className="relative h-full">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-teal-900/20 rounded-lg" />
              </div>
            </div>
          </div>
        ) : images.length === 2 ? (
          <div className="grid grid-cols-2 gap-2 h-[320px]">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden group h-full"
              >
                <div className="relative h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-teal-900/20 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-rows-2 gap-2 h-auto">
            <div className="grid grid-cols-2 gap-2">
              {images.slice(0, 2).map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden group ${
                    images.length <= 2 ? "h-[320px]" : "h-40"
                  }`}
                >
                  <div className="relative h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-teal-900/20 rounded-lg" />
                  </div>
                </div>
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
                  <div
                    key={index + 2}
                    className={`relative overflow-hidden group h-40 ${
                      images.length === 3 ? "col-span-full" : ""
                    }`}
                  >
                    <div className="relative h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-teal-900/20 rounded-lg" />
                      {index === 2 && images.length > 5 && (
                        <ExtraImagesOverlay count={images.length - 5} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="col-span-6 flex justify-center gap-4 mt-4">
        <button
          onClick={handleAddImage}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          Add Image
        </button>
        <button
          onClick={handleRemoveImage}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Remove Image
        </button>
      </div>
    </div>
  );
};

export default Challenge01;
