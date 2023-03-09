import { Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthLink, PanelContainer } from "./AuthPanel.styled";
import { H2Title } from "../Common/Common.styled";
import { useEffect, useState } from "react";

const AuthPanel = () => {
  const auth = getAuth();
  const { user: userAuth0, isAuthenticated, logout } = useAuth0();
  const userFirebase = auth.currentUser;
  const [, setIsLoggedIn] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) setIsLoggedIn(true)
      else setIsLoggedIn(false)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (userFirebase || isAuthenticated) {
    let name;
    let logOutFunction;

    if (userFirebase) {
      name = userFirebase.displayName;
      logOutFunction = () => {
        signOut(auth)
      };
    } else {
      name = userAuth0.name
      logOutFunction = () => logout({ logoutParams: { returnTo: window.location.origin } })
    }

    return (
      <PanelContainer>
        <H2Title>{name}</H2Title>
        <AuthLink onClick={logOutFunction}>Log Out</AuthLink>
      </PanelContainer>
    )
  }


  return (
    <PanelContainer>
      <Link to="/sign-in">
        <AuthLink>Log In</AuthLink>
      </Link>
    </PanelContainer>
  );
}

export default AuthPanel;