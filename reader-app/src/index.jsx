import React from "react";
import { render } from "react-dom";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

render(<h1>Working~</h1>, document.getElementById("app"));
