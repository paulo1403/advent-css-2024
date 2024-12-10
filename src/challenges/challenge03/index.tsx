import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Challenge03 = () => {
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
        <h1 className="text-2xl font-bold text-center">Challenge 03</h1>
        <p className="text-center text-gray-500">
          Hover over the text below to see the tooltip
        </p>
      </div>
      <div className="flex items-center justify-center w-full h-[200px]">
        <div className="relative inline-block">
          <span className="cursor-pointer group">
            My text
            <div className="invisible group-hover:visible absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[100%] after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-900">
              This is a tooltip
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Challenge03;
