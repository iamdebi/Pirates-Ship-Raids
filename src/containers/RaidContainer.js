import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RaidList from "../components/raids/RaidList";
import RaidDetail from "../components/raids/RaidDetail";

class RaidContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raids: []
    };
  }

  componentDidMount() {
    const url = "/api/raids";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ raids: data }))
      .catch(error => console.error(error));
    console.log(this.state);
  }

  findRaidById(id) {
    return this.state.raids.find(raid => {
      return raid.id === parseInt(id);
    });
  }

  handleDelete(id) {
    const request = new Request();
    const url = "/api/raids" + id;
    request.delete(url).then(() => (window.location = "/raids"));
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route
              exact
              path="/raids/:id"
              render={props => {
                const id = props.match.params.id;
                const raid = this.findRaidById(id);
                return <RaidDetail raid={raid} onDelete={this.handleDelete} />;
              }}
            />
            <Route
              render={props => {
                return <RaidList raids={this.state.raids} />;
              }}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default RaidContainer;
