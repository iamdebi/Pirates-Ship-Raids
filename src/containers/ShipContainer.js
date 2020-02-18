import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShipList from "../components/ships/ShipList";
import ShipDetail from "../components/ships/ShipDetail";

class ShipContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ships: []
    };
  }

  componentDidMount() {
    const url = "/api/ships";

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ ships: data }))
      .catch(error => console.error(error));
  }

  findShipById(id) {
    return this.state.ships.find(ship => {
      return ship.id === parseInt(id);
    });
  }

  handleDelete(id) {
    const request = new Request();
    const url = "/api/ships" + id;
    request.delete(url).then(() => (window.location = "/ships"));
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route
              exact
              path="/ships/:id"
              render={props => {
                const id = props.match.params.id;
                const ship = this.findShipById(id);
                return <ShipDetail ship={ship} onDelete={this.handleDelete} />;
              }}
            />
            <Route
              render={props => {
                return <ShipList ships={this.state.ships} />;
              }}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default ShipContainer;
