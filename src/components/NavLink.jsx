import React from "react";

export default function NavLink({ title, link }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link}>
        {title}
      </a>
    </li>
  );
}
