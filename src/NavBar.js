import React from "react";

const NavBar = props => {
  return (
    <header>
      <img src="/images/pirtate-flag.jpg" alt="Logo" />

      <ul>
        <li className="navLink">
          <a href="/pirates">Pirates</a>
        </li>
        <li className="navLink">
          <a href="/pirates/new">Create Pirate</a>
        </li>
        <li className="navLink">
          <a href="/ships">Ships</a>
        </li>
        <li className="navLink">
          <a href="/raids">Raids</a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
