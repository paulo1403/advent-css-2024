import image1 from "./images/image01.jpg";
import image2 from "./images/image02.jpg";
import image3 from "./images/image03.jpg";
import image4 from "./images/image04.jpg";
import image5 from "./images/image05.jpg";

const Challenge01 = () => {
  const images = [
    {
      src: image1,
      alt: "Image 1",
      className: "col-span-2 row-span-1",
    },
    {
      src: image2,
      alt: "Image 2",
      className: "col-span-2 row-span-1",
    },
    {
      src: image3,
      alt: "Image 3",
      className: "col-span-1 row-span-1",
    },
    {
      src: image4,
      alt: "Image 4",
      className: "col-span-1 row-span-1",
    },
    {
      src: image5,
      alt: "Image 5",
      className: "col-span-1 row-span-1",
    },
  ];

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="grid grid-cols-3 gap-2 bg-slate-900 p-4 rounded-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.className} relative overflow-hidden group h-24`}
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
      </div>
    </div>
  );
};

export default Challenge01;
