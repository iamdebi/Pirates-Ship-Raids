import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../NavBar.js";
import PirateContainer from "./PirateContainer";
import ShipContainer from "./ShipContainer";
import RaidContainer from "./RaidContainer.js";

const MainContainer = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/pirates" component={PirateContainer} />
          <Route path="/ships" component={ShipContainer} />
          <Route path="/raids" component={RaidContainer} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default MainContainer;
