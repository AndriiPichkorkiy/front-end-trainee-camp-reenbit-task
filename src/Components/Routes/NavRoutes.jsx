import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import CharacterPage from "../../Pages/CharacterPage/CharacterPage";
import SignInPage from "../../Pages/AuthPage/SignInPage";
import SignUpPage from "../../Pages/AuthPage/SignUpPage";
import SharedLayout from "../SharedLayout/SharedLayout";

const NavRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<SharedLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="character/:id" element={<CharacterPage />} />
      </Route>

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/*" element={<Navigate to="/" />} />


    </Routes>
  );
}

export default NavRoutes;