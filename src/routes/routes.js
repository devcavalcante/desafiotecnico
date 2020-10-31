import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "../components/TopBar/index";
import Home from "../components/Home/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:username" component={TopBar} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
