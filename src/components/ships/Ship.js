import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Ship = props => {
  if (!props.ship) {
    return "Loading...";
  }

  const url = "/ships/" + props.ship.id;

  return (
    <Fragment>
      <div className={`${props.modifier} component`}>
        <Link to={url} className="name">
          {props.ship.name}
        </Link>
      </div>
    </Fragment>
  );
};

export default Ship;
