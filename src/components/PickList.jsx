import React from "react";

export default function PickList({ input, list }) {
  return (
    <li>
      {/* <input type="checkbox" /> */}
      <h3>{list.title}</h3>
      <p>{list.subtitle}</p>
      <p>{list.price}</p>
    </li>
  );
}
