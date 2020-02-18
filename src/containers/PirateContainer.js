import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PirateList from "../components/pirates/PirateList";
import PirateDetail from "../components/pirates/PirateDetail";
import Request from "../helpers/request";
import PirateCreateForm from "../components/pirates/PirateCreateForm";

class PirateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pirates: [],
      ships: [],
      raids: []
    };

    this.findPirateById = this.findPirateById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    const piratePrmoise = request.get("/api/pirates");
    const shipPromise = request.get("/api/ships");
    const raidPromise = request.get("/api/raids");

    Promise.all([piratePrmoise, shipPromise, raidPromise]).then(data => {
      this.setState({ pirates: data[0], ships: data[1], raids: data[2] });
    });
  }

  findPirateById(id) {
    return this.state.pirates.find(pirate => {
      return pirate.id === parseInt(id);
    });
  }

  handleDelete(id) {
    const request = new Request();
    const url = "/api/pirates/" + id;
    request.delete(url).then(() => (window.location = "/pirates"));
  }

  handlePost(pirate) {
    const request = new Request();
    request
      .post("/api/pirates", pirate)
      .then(() => (window.location = "/pirates"));
  }

  render() {
    if (!this.state.pirates) {
      return null;
    }

    return (
      <Router>
        <Fragment>
          <Switch>
            <Route
              exact
              path="/pirates/new"
              render={props => {
                return (
                  <PirateCreateForm
                    ships={this.state.ships}
                    onPost={this.handlePost}
                  />
                );
              }}
            ></Route>
            <Route
              exact
              path="/pirates/:id"
              render={props => {
                const id = props.match.params.id;
                const pirate = this.findPirateById(id);
                return (
                  <PirateDetail pirate={pirate} onDelete={this.handleDelete} />
                );
              }}
            />

            <Route
              render={props => {
                return <PirateList pirates={this.state.pirates} />;
              }}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default PirateContainer;
