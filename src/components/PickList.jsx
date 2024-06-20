import React from "react";
import styled from "styled-components";

export default function PickList({ list }) {
  return (
    <div>
      <ListWrapper>
        <div style={{ padding: "5px 0" }}>
          <input
            type="checkbox"
            style={{ width: "100%", margin: "0", padding: "0" }}
          />
        </div>
        <li>
          <h4>{list.title}</h4>
          <Subtext>{list.subtext}</Subtext>
        </li>
        <p>{list.price}</p>
      </ListWrapper>
    </div>
  );
}

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid gray;
  padding: 10px 15px;
  margin: 10px 0;
  background-color: hsl(217, 100%, 97%);
`;

const Subtext = styled.h5`
  font-weight: 300;
  font-style: normal;
  color: gray;
`;
