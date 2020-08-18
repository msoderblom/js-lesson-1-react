import React from "react";

export default function List({ arr }) {
  return (
    <ul className="list-group">
      {arr.map((item) => (
        <li className="list-group-item">{item}</li>
      ))}
    </ul>
  );
}
