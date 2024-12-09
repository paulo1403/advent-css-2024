interface ActionButtonsProps {
  onAdd: () => void;
  onRemove: () => void;
}

export const ActionButtons = ({ onAdd, onRemove }: ActionButtonsProps) => (
  <div className="col-span-6 flex justify-center gap-4 mt-4">
    <button
      onClick={onAdd}
      className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
    >
      Add Image
    </button>
    <button
      onClick={onRemove}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    >
      Remove Image
    </button>
  </div>
);
