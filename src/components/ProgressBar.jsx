import React from "react";

export default function ProgressBar({ percent }) {
  return (
    <div className="progress mb-1">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: percent + "%" }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {percent}%
      </div>
    </div>
  );
}
