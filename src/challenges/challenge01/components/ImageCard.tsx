interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageCard = ({ src, alt, className = "" }: ImageCardProps) => {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <div className="relative h-full">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-teal-900/20 rounded-lg" />
      </div>
    </div>
  );
};
