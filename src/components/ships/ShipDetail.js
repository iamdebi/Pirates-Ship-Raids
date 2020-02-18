import React from "react";
import Ship from "./Ship";

const ShipDetail = props => {
  if (!props.ship) {
    return "Loading...";
  }

  const pirates = props.ship.pirates.map((pirate, index) => {
    return (
      <li key={index}>
        {pirate.firstName} {pirate.lastName}
      </li>
    );
  });

  return (
    <div className="component">
      <Ship modifier="component--wb" ship={props.ship} />
      <p className="sub-heading">Pirates:</p>
      <ul>{pirates}</ul>
    </div>
  );
};

export default ShipDetail;
