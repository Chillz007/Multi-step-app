import React from "react";
import styled from "styled-components";
import bgImage from "../assets/bg-sidebar-desktop.svg";
import { StepInfo } from "../constant/data";

export default function Step() {
  const step = 1;

  return (
    <div>
      {StepInfo.map((step) => {
        return (
          <Container key={step.id}>
            <h6>{step.num}</h6>
            <div>
              <h6>{step.name}</h6>
              <h6>{step.info}</h6>
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
  margin: 10px 0;
  margin-left: 20px;
`;

const Number = styled.div``;

const Subtitle = styled.h6`
  color: #aaa8a8;
`;
