import React from "react";
import ReactDOM from "react-dom";
import App from "./_app";
import "styles/global.css";

import { BrowserRouter } from "react-router-dom";
import StyledComponentTheme from "theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledComponentTheme>
        <App />
      </StyledComponentTheme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
