import "./App.css";
import { useStore } from "./store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    </>
  );
}

export default App;
