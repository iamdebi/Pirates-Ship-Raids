import React from "react";
import Raid from "./Raid.js";

const RaidList = props => {
  if (props.raids.length === 0) {
    return <p>Loading...</p>;
  }

  const raids = props.raids.map(raid => {
    return (
      <li key={raid.id} className="component-item">
        <Raid raid={raid} />
      </li>
    );
  });

  return <ul className="component-list">{raids}</ul>;
};
export default RaidList;
