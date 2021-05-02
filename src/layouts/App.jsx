import React from "react";

import Menu from "../components/Menu";
import Content from "../components/Content";

import './App.css'

const App = (props) => {
  return (
    <div className="App">
      <Menu></Menu>
      <Content></Content>
    </div>
  )
};

export default App;