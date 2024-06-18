import React from "react";
import PickList from "./PickList";
import { Picks } from "../constant/data";

export default function AddOns() {
  return (
    <div>
      <div>
        <h3>Pick adds-ons</h3>
        <p>Adds-ons help enhance your gaming experience.</p>

        <ul>
          {Picks.map((pick) => {
            return <PickList item={pick} key={pick.id} />;
          })}
        </ul>
      </div>
    </div>
  );
}
