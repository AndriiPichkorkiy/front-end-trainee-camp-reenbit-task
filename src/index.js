import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Auth0
const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const PROJECT_NAME = process.env.PROJECT_NAME || "";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin + PROJECT_NAME,
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
