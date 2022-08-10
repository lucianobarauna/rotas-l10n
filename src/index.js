import { StrictMode } from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import Store from "./store";

import App from "./App";

import "./main.css";

// i18n
import "./locales/i18n";

const rootElement = document.getElementById("root");

render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>, rootElement
);
