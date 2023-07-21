import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import userReducer, { initialState } from "./reducer/userReducer";
import { UserContextProvider } from "./contexts/UserContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider reducer={userReducer} initialState={initialState}>
        <App />
      </UserContextProvider>
    </Router>
  </React.StrictMode>
);
