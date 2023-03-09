import NavRoutes from "./Components/Routes/NavRoutes";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavRoutes />
      <NotificationContainer />
    </>
  );
}

export default App;
