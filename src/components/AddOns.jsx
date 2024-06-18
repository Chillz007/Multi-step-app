import React from "react";
import PickList from "./PickList";
import { Picks } from "../constant/data";
import styled from "styled-components";

export default function AddOns() {
  return (
    <div>
      <div>
        <h3 style={{ paddingTop: "30px" }}>Pick adds-ons</h3>
        <p>Adds-ons help enhance your gaming experience.</p>

        <ListContainer>
          {Picks.map((pick) => {
            return <PickList list={pick} key={pick.id} />;
          })}
        </ListContainer>
      </div>
    </div>
  );
}

const ListContainer = styled.ul`
  list-style: none;
  border: 1px solid pink;
  padding: 0;
`;
