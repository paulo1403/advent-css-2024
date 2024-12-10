import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Challenge04 = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto p-4">
      <div className="col-span-6 flex flex-col items-center gap-2 mb-4">
        <button
          onClick={() => navigate("/")}
          className="absolute left-4 top-4 px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 flex gap-2"
        >
          <ArrowLeft /> Back
        </button>
        <h1 className="text-2xl font-bold text-center">Challenge 04</h1>
        <p className="text-center text-gray-500">
          Today’s challenge is to style a heading with rulers on either side of
          the heading.
        </p>
      </div>
      <div className="flex items-center justify-center w-full h-[200px]">
        <div className="flex items-center w-full px-8">
          <div className="w-full h-[1px] bg-black"></div>
          <h1 className="text-4xl font-bold mx-8 whitespace-nowrap">Heading</h1>
          <div className="w-full h-[1px] bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Challenge04;
