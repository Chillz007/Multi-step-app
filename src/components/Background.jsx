import React from "react";
import bgImage from "../assets/bg-sidebar-desktop.svg";
import styled from "styled-components";
import Step from "./Step";

export default function Background() {
  return (
    <LeftContainer>
      <Step />
    </LeftContainer>
  );
}

const LeftContainer = styled.div`
  background: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25%;
  justify-content: center;
  border-radius: 8px;
`;
