import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Challenge05 = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[100dvh] snap-y snap-mandatory overflow-y-auto">
      <main className="h-[100dvh] snap-start">
        <div className="mx-auto p-4">
          <div className="col-span-6 flex flex-col items-center gap-2 mb-4">
            <button
              onClick={() => navigate("/")}
              className="absolute left-4 top-4 px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 flex gap-2"
            >
              <ArrowLeft /> Back
            </button>
            <h1 className="text-2xl font-bold text-center">Challenge 05</h1>
            <p className="text-center text-gray-500">
              Today’s challenge is to code a footer that is revealed when the
              user scrolls down.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="w-full max-w-2xl mb-8 p-6 bg-white rounded-lg shadow"
              >
                <h2 className="text-xl font-bold mb-4">Section {i + 1}</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="h-[50dvh] snap-start bg-slate-800 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Scroll Section</h3>
          <p className="text-slate-300">
            This section appears after scrolling past the first view.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Challenge05;
