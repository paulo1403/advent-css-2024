
import { motion } from "framer-motion";

const Snow = () => {
  const snowflakes = Array.from({ length: 50 });

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map((_, i) => {
        const startX = Math.random() * 100;
        const duration = 5 + Math.random() * 10;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            initial={{ x: `${startX}vw`, y: -20 }}
            animate={{
              y: "100vh",
              x: [
                `${startX}vw`,
                `${startX + (Math.random() * 10 - 5)}vw`,
                `${startX + (Math.random() * 10 - 5)}vw`,
                `${startX}vw`,
              ]
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ left: `${startX}%` }}
          />
        );
      })}
    </div>
  );
};

export default Snow;