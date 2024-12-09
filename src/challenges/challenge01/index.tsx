import { useState } from "react";
import { ImageGrid } from "./components/ImageGrid";
import { ActionButtons } from "./components/ActionButtons";
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

  return (
    <div className="mx-auto p-4">
      <div className="col-span-6 flex flex-col items-center gap-2 mb-4">
        <h1 className="text-2xl font-bold text-center">Challenge 01</h1>
        <p className="text-center text-gray-500">
          Click on the buttons to add or remove images
        </p>
      </div>
      <div className="w-[568px] bg-slate-900 p-4 rounded-xl mx-auto">
        <ImageGrid images={images} />
      </div>
      <ActionButtons onAdd={handleAddImage} onRemove={handleRemoveImage} />
    </div>
  );
};

export default Challenge01;
