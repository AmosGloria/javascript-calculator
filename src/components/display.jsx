import React from "react";

export default function Display({ formula, display }) {
  return (
    <div className="screen">
      <div className="formula">{formula}</div>
      <div id="display">{display}</div>
    </div>
  );
}
