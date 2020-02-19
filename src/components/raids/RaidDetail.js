import React from "react";
import Raid from "./Raid";

const RaidDeatil = props => {
  if (!props.raid) {
    return "Loading....";
  }

  const pirates = props.raid.pirates.map((pirate, index) => {
    return (
      <li key={index}>
        {pirate.firstName} {pirate.lastName}
      </li>
    );
  });

  return (
    <div className="component">
      <Raid modifier="component--wb" raid={props.raid} />
      <p className="sub-heading">Pirates:</p>
      <ul>{pirates}</ul>
    </div>
  );
};

export default RaidDeatil;
