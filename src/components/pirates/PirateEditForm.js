import React, { Component } from "react";

class PirateEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      ship: null,
      raids: []
    };

    this.handleAge = this.handleAge.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleShip = this.handleShip.bind(this);
    this.handleRaids = this.handleRaids.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      firstName: this.props.pirate.firstName,
      lastName: this.props.pirate.lastName,
      age: this.props.pirate.age,
      ship: this.props.pirate.ship,
      raids: this.props.pirate.raids
    });
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

  handleRaids(event) {
    const selectedRaids = [...event.target.options]
      .filter(option => {
        return option.selected;
      })
      .map(option => {
        return this.props.raids[option.value];
      });
    this.setState({ raids: selectedRaids });
  }

  // handleRaids(event) {
  //   const selectedOptions = [...event.target.options].filter((option) => {
  //     return option.selected
  //   })
  //   const selectedIndexes = selectedOptions.map((option) => {
  //     return option.value
  //   });
  //   const selectedRaids = selectedIndexes.map((index) => {
  //     return this.props.raids[index]
  //   })
  //   this.setState({ raids: selectedRaids })
  // }

  handleSubmit(event) {
    event.preventDefault();

    const pirate = {
      id: this.props.pirate.id,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      age: event.target.age.value,
      ship: this.state.ship,
      raids: this.state.raids
    };

    this.props.onUpdate(pirate, this.props.pirate.id);
  }

  findShipIndex() {
    return this.props.ships.findIndex(
      ship => ship.id === this.props.pirate.ship.id
    );
  }

  pirateHasRaid(raid) {
    return this.props.pirate.raids.some(
      pirateRaid => pirateRaid.id === raid.id
    );
  }

  findRaidIndexs() {
    return this.props.pirate.raids.map(pirateRaid => {
      return this.props.raids.findIndex(raid => pirateRaid.id === raid.id);
    });
  }

  render() {
    if (!this.props.pirate) {
      window.location = "/pirates";
    }

    if (this.props.ships.length === 0 || this.props.raids.length === 0) {
      return null;
    }

    const shipOptions = this.props.ships.map((ship, index) => {
      return (
        <option key={index} value={index}>
          {ship.name}
        </option>
      );
    });

    const raidOptions = this.props.raids.map((raid, index) => {
      return (
        <option key={index} value={index}>
          {raid.location}
        </option>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            defaultValue={this.props.pirate.firstName}
            onChange={this.handleFirstName}
          />

          <input
            type="text"
            name="lastName"
            defaultValue={this.props.pirate.lastName}
            onChange={this.handleLastName}
          />

          <input
            type="number"
            name="age"
            defaultValue={this.props.pirate.age}
            onChange={this.handleAge}
          />

          <select
            name="ship"
            onChange={this.handleShip}
            defaultValue={this.findShipIndex()}
          >
            {shipOptions}
          </select>

          <select
            multiple={true}
            name="raids"
            onChange={this.handleRaids}
            defaultValue={this.findRaidIndexs()}
          >
            {raidOptions}
          </select>

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default PirateEditForm;
