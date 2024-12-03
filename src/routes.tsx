import { Routes, Route } from "react-router-dom";
import App from "./App";
import Challenge01 from "./challenges/challenge01";
import Challenge02 from "./challenges/challenge02";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/challenge-1" element={<Challenge01 />} />
    <Route path="/challenge-2" element={<Challenge02 />} />
  </Routes>
);

export default AppRoutes;
