interface ExtraImagesOverlayProps {
  count: number;
}

export const ExtraImagesOverlay = ({ count }: ExtraImagesOverlayProps) => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-lg">
    <span className="text-white text-2xl font-bold">+{count}</span>
  </div>
);
