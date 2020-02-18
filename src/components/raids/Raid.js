import React from "react";
import { Link } from "react-router-dom";

const Raid = props => {
  if (!props.raid) {
    return "Loading...";
  }

  const url = "/raids/" + props.raid.id;

  return (
    <div className={`${props.modifier} component`}>
      <Link to={url} className="name">
        {props.raid.location}
      </Link>
      <p>Loot: {props.raid.loot}</p>
    </div>
  );
};

export default Raid;
