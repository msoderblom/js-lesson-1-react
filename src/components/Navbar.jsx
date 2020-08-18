import React from "react";
import NavLink from "./NavLink";

export default function Navbar({ title }) {
  return (
    <ul className="nav justify-content-center">
      <NavLink title="Home" link="#"></NavLink>
      <NavLink title="About" link="#"></NavLink>
    </ul>
  );
}
//<NavLink title="About" link="#"></NavLink>
