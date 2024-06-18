import React from "react";
import styled from "styled-components";

export default function PickList({ list }) {
  return (
    <div>
      <ListWrapper>
        <div style={{ padding: "5px 0" }}>
          <input
            type="checkbox"
            style={{ height: "5em", width: "100%", margin: "0", padding: "0" }}
          />
        </div>
        <li>
          <h3>{list.title}</h3>
          <p>{list.subtext}</p>
        </li>
        <p>{list.price}</p>
      </ListWrapper>
    </div>
  );
}

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid gray;
  margin: 15px 0;
  background-color: hsl(217, 100%, 97%);
`;
