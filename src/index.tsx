import React from "react";
import ReactDOM from "react-dom";
import PathBuilder from "./features/pathBuilder/PathBuilder";

console.log("Hello Worlds!");

ReactDOM.render(
  <React.StrictMode>
    <PathBuilder />
  </React.StrictMode>,
  document.getElementById("root")
);
