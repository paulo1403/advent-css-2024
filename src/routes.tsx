import { Routes, Route } from "react-router-dom";
import App from "./App";
import challenges from "./utils/challenges.json";

import Challenge01 from "./challenges/challenge01";
import Challenge02 from "./challenges/challenge02";
import Challenge03 from "./challenges/challenge03";
import Challenge04 from "./challenges/challenge04";
import Challenge05 from "./challenges/challenge05";

const components: { [key: string]: React.ComponentType } = {
  Challenge01,
  Challenge02,
  Challenge03,
  Challenge04,
  Challenge05,
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    {challenges.challenges.map((challenge) => {
      const Component = components[challenge.component];
      return (
        <Route
          key={challenge.id}
          path={`/${challenge.route}`}
          element={<Component />}
        />
      );
    })}
  </Routes>
);

export default AppRoutes;
