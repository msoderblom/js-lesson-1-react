import React from "react";

export default function ImgCard({ img, text }) {
  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img className="card-img-top" src={img} alt="Card image cap"></img>
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
