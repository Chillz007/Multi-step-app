import React from "react";
import PickList from "./PickList";
import { Picks } from "../constant/data";
import styled from "styled-components";

export default function AddOns() {
  return (
    <>
      <Wrapper>
        <h3>Pick adds-ons</h3>
        <p>Adds-ons help enhance your gaming experience.</p>

        <ListContainer>
          {Picks.map((pick) => {
            return <PickList list={pick} key={pick.id} />;
          })}
        </ListContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 80px;
  margin-left: 0;
  margin-top: 20px;
`;

const ListContainer = styled.ul`
  list-style: none;

  margin: 20px auto;
  padding: 5px 0;
  width: 100%;
`;
