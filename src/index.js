import React from "react";
import { hydrate, render } from "react-dom";
import "normalize.css/normalize.css";
import App from "./App";
// import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
// registerServiceWorker();
