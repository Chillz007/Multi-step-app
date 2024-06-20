import React, { useState } from "react";
import styled from "styled-components";
import bgImage from "../assets/bg-sidebar-desktop.svg";
import { StepInfo } from "../constant/data";

export default function Step() {
  const [selectedId, setSelectedId] = useState(0);

  const handleClick = (stepId) => {
    setSelectedId(stepId === selectedId ? null : stepId);
    console.log(stepId);
  };
  return (
    <div>
      {StepInfo.map((step) => {
        return (
          <Container key={step.id}>
            <Num onClick={() => handleClick(stepId)}>{step.num}</Num>
            <div>
              <Title>{step.name}</Title>
              <Subtitle>{step.info}</Subtitle>
            </div>
          </Container>
        );
      })}
    </div>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  margin-left: 20px;
`;

const Subtitle = styled.h6`
  color: white;
  text-transform: uppercase;
`;

const Title = styled.h6`
  color: #aaa8a8;
  text-transform: uppercase;
  font-family: "Ubuntu";
  font-weight: 400;
  font-style: normal;
`;

const Num = styled.div`
  border: 1px solid white;
  border-radius: 70%;
  padding: 5px 13px;
`;
