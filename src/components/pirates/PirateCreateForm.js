import React, { Component } from "react";

class PirateCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      ship: null
    };

    this.handleAge = this.handleAge.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleShip = this.handleShip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstName(event) {
    this.setState({ firstName: event.target.value });
  }
  handleLastName(event) {
    this.setState({ lastName: event.target.value });
  }
  handleAge(event) {
    this.setState({ age: parseInt(event.target.value) });
  }
  handleShip(event) {
    const selectedShip = this.props.ships[event.target.value];
    this.setState({ ship: selectedShip });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newPirate = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      ship: this.state.ship
    };
    this.props.onPost(newPirate);
  }

  render() {
    const shipOptions = this.props.ships.map((ship, index) => {
      return (
        <option key={ship.id} value={index}>
          {ship.name}
        </option>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={this.handleFirstName}
            value={this.state.firstname}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleLastName}
            value={this.state.lastName}
            required
          />
          <input
            type="number"
            placeholder="Age"
            name="age"
            onChange={this.handleAge}
            value={this.state.age}
            required
          />
          <select name="ship" onChange={this.handleShip} required>
            <option disabled selected>
              Select a ship
            </option>
            {shipOptions}
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default PirateCreateForm;
