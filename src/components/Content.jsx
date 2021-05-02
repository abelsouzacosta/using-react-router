import React from "react";

import './Content.css';

import Home from "../views/Home";
import About from "../views/About";
import Param from "../views/Param";
import NotFound from "../views/NotFound";

import { Switch, Route } from "react-router-dom";

const Content = (props) => {
  return (
    <main className="Content">
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/param/:id">
          <Param></Param>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </main>
  )
};

export default Content;