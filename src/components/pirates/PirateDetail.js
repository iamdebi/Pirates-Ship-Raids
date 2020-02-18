import React from "react";
import Pirate from "./Pirate";

const PirateDetail = props => {
  if (!props.pirate) {
    return "Loading...";
  }

  const raids = props.pirate.raids.map((raid, index) => {
    return <li key={index}>{raid.location}</li>;
  });

  const deletePirate = () => {
    props.onDelete(props.pirate.id);
  };

  return (
    <div className="component">
      <Pirate pirate={props.pirate} />
      <p>Raids:</p>
      <ul>{raids}</ul>
      <button onClick={deletePirate}>Delete {props.pirate.firstName}</button>
    </div>
  );
};

export default PirateDetail;
