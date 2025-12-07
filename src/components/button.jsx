import React from "react";

export default function Button({ id, value, className, onClick }) {
  return (
    <button id={id} className={className} onClick={() => onClick(value)}>
      {value}
    </button>
  );
}
