import "./App.css";
import { useStore } from "./store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import challenges from "./utils/challenges.json";

function App() {
  const navigate = useNavigate();
  const redirect = useStore((state) => state.redirect);

  useEffect(() => {
    if (redirect) {
      navigate("/new-page");
    }
  }, [redirect, navigate]);

  return (
    <>
      <h1 className="main-title">Advent Challenges 2024 - Paulo Llanos</h1>
      {challenges.challenges.map((challenge) => (
        <button
          key={challenge.id}
          className="redirect-button"
          onClick={() => navigate(`/${challenge.route}`)}
        >
          {challenge.title}
        </button>
      ))}
    </>
  );
}

export default App;
