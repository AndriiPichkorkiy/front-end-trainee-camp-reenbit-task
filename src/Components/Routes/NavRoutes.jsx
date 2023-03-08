import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import CharacterPage from "../../Pages/CharacterPage";

const NavRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </>
  );
}

export default NavRoutes;