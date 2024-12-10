import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Challenge02 = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="mx-auto p-4">
      <div className="col-span-6 flex flex-col items-center gap-2 mb-4">
        <button
          onClick={() => navigate("/")}
          className="absolute left-4 top-4 px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 flex gap-2"
        >
          <ArrowLeft /> Back
        </button>
        <h1 className="text-2xl font-bold text-center">Challenge 02</h1>
        <p className="text-center text-gray-500">
          Create a toggle button that animates when clicked
        </p>
      </div>
      <div className="h-100 flex items-center justify-center">
        <button
          onClick={() => setIsChecked(!isChecked)}
          className={`w-[200px] h-[100px] rounded-full relative transition-colors duration-300 ${
            isChecked ? "bg-[#02ff94]" : "bg-[#7d7d7d]"
          }`}
        >
          <div
            className={`absolute top-[10px] w-[80px] h-[80px] bg-[#000000] rounded-full bg-white flex items-center justify-center transition-all duration-300
            ${isChecked ? "left-[110px]" : "left-[10px]"}`}
          >
            {isChecked && (
              <svg
                className="animate-[fade-in_0.3s_ease-in-out]"
                width="50"
                height="40"
                viewBox="0 0 61 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.7498 2.28142C51.3913 -0.359957 55.6739 -0.359921 58.3153 2.28153C60.7556 4.72181 60.9404 8.55699 58.8749 11.2134L58.8041 11.3044L58.3963 11.7663L27.5701 42.5925C25.1298 45.0327 21.2946 45.2175 18.6382 43.152L18.5472 43.0812L18.0853 42.6734L2.63175 27.2198C-0.00973761 24.5784 -0.00973773 20.2957 2.63175 17.6542C5.07203 15.2139 8.9072 15.0291 11.5636 17.0946L11.6546 17.1654L12.1164 17.5731L22.7871 28.2419L48.7498 2.28142C48.7498 2.28138 48.7497 2.28146 48.7498 2.28142Z"
                  fill="#02ff94"
                />
              </svg>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Challenge02;
