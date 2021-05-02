import React from "react";
import ReactDom from "react-dom";

import App from "./layouts/App";

// aplicando estilo
import './index.css';

ReactDom.render(
  <App></App>,
  document.getElementById("root")
);