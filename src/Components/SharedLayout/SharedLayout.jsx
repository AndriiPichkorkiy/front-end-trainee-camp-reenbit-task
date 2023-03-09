import { Outlet } from "react-router-dom";
import AuthPanel from "../AuthPanel/AuthPanel";

const SharedLayout = () => {
  return (
    <>
      <AuthPanel />
      <Outlet />
    </>
  );
}

export default SharedLayout;