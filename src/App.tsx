import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import challenges from "./utils/challenges.json";
import Snow from "./components/Snow";

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-christmas-gradient">
      <Snow />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">
            🎄 Advent Challenges 2024 🎄
          </h1>
          <p className="text-green-400 text-xl">by Paulo Llanos</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.challenges.map((challenge, index) => (
            <motion.button
              key={challenge.id}
              onClick={() => navigate(`/${challenge.route}`)}
              className="group p-6 bg-white/10 backdrop-blur-sm rounded-lg 
                        shadow-lg hover:bg-green-900/30 text-white text-left 
                        border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 } 
              }}
            >
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <motion.span 
                  className="text-red-400"
                  whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                >
                  🎁
                </motion.span>
                {challenge.title}
              </h2>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
