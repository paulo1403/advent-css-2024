import { useNavigate } from "react-router-dom";
import challenges from "./utils/challenges.json";

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-christmas-gradient snowfall">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">
            🎄 Advent Challenges 2024 🎄
          </h1>
          <p className="text-green-400 text-xl">by Paulo Llanos</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.challenges.map((challenge, index) => (
            <button
              key={challenge.id}
              onClick={() => navigate(`/${challenge.route}`)}
              className="group p-6 bg-white/10 backdrop-blur-sm rounded-lg 
                        shadow-lg hover:bg-green-900/30 transition-all duration-300 
                        ease-in-out transform hover:-translate-y-1 hover:scale-105
                        text-white text-left border border-white/20
                        animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <span className="text-red-400 group-hover:animate-bounce">
                  🎁
                </span>
                {challenge.title}
              </h2>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
