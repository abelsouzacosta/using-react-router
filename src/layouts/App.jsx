import React from "react";

import Menu from "../components/Menu";
import Content from "../components/Content";

// importando o react router dom
import { BrowserRouter as Router } from "react-router-dom";

import './App.css'

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>
        <Content></Content>
      </Router>
    </div>
  )
};

export default App;