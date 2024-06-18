import React from "react";
import styled from "styled-components";

export default function PlanList({ item }) {
  return (
    <ItemHolder>
      <img src={item.image} alt={item.image} />
      <Title>{item.name}</Title>
      <p>{item.price}</p>
    </ItemHolder>
  );
}

const ItemHolder = styled.li`
  list-style: none;
  border: 1px solid hsl(213, 96%, 18%);
  margin: 8px 15px;
  padding: 10px 0;
  padding-left: 10px;
  padding-right: 50px;
  border-radius: 8px;
  gap: 20px;
`;

const Title = styled.h4`
  margin-top: 50px;
`;
