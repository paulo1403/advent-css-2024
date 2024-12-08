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
      className: "col-span-3 row-span-2",
    },
    {
      src: image2,
      alt: "Image 2",
      className: "col-span-3 row-span-2",
    },
    {
      src: image3,
      alt: "Image 3",
      className: "col-span-2 row-span-1",
    },
    {
      src: image4,
      alt: "Image 4",
      className: "col-span-2 row-span-1",
    },
    {
      src: image5,
      alt: "Image 5",
      className: "col-span-2 row-span-1",
    },
  ];

  const [images, setImages] = useState(initialImages);

  const getImageClassName = (index: number, totalImages: number) => {
    if (totalImages === 4) {
      // All images will be large when there are 4
      return "col-span-3 row-span-2";
    }
    return index < 2 ? "col-span-3 row-span-2" : "col-span-2 row-span-1";
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

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="grid grid-cols-6 gap-2 bg-slate-900 p-4 rounded-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.className} relative overflow-hidden group ${
              images.length === 4 || index < 2 ? "h-48" : "h-24"
            }`}
          >
            <div className="aspect-[3/2] relative h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-teal-900/20 rounded-lg" />
            </div>
          </div>
        ))}

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
    </div>
  );
};

export default Challenge01;
