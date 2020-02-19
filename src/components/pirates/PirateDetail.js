import React from "react";
import Pirate from "./Pirate";
import { Link } from "react-router-dom";

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

  const editUrl = "/pirates/" + props.pirate.id + "/edit";

  return (
    <div className="component">
      <Pirate pirate={props.pirate} />
      <p>Raids:</p>
      <ul>{raids}</ul>
      <button onClick={deletePirate}>Delete {props.pirate.firstName}</button>
      <Link to={editUrl}>
        <button type="button">Edit {props.pirate.firstName}</button>
      </Link>
    </div>
  );
};

export default PirateDetail;
