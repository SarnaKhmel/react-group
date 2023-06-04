import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import AddUsersPage from "./Pages/AddUsersPage";
import AboutPage from "./Pages/AboutPage";

import ReduxPage from "./Pages/ReduxPage";

import { Route, Routes } from "react-router";
const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/users" element={<AddUsersPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/redux" element={<ReduxPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
