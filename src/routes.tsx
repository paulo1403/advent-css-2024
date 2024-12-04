import { Routes, Route } from "react-router-dom";
import App from "./App";
import challenges from "./utils/challenges.json";

import Challenge01 from "./challenges/challenge01";
import Challenge02 from "./challenges/challenge02";

const components: { [key: string]: React.ComponentType } = {
  Challenge01,
  Challenge02,
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
