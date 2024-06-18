import React from "react";
import styled from "styled-components";
import bgImage from "../assets/bg-sidebar-desktop.svg";

export default function Step() {
  const step = 1;

  return (
    <LeftContainer>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "10px 0",
            gap: "8px",
          }}
        >
          <Number>1</Number>
          <div>
            <Subtitle>STEP 1</Subtitle>
            <Text>YOUR INFO</Text>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            margin: "10px 0",
          }}
        >
          <div>
            <Number>2</Number>
          </div>
          <div>
            <Subtitle>STEP 2</Subtitle>
            <Text>SELECT PLAN</Text>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div>
            <Number>3</Number>
          </div>
          <div>
            <Subtitle>STEP 3</Subtitle>
            <Text>ADD-ONS</Text>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginTop: "30px",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <Number>4</Number>
          </div>
          <div>
            <Subtitle>STEP 4</Subtitle>
            <Text>SUMMARY</Text>
          </div>
        </div>
      </div>
    </LeftContainer>
  );
}

const LeftContainer = styled.div`
  background: url(${bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 30%;
  justify-content: center;
  padding: 30px;
`;

const Number = styled.div`
  height: 20px;
  aspect-ratio: 1;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  /* padding: 10px; */
`;

const Subtitle = styled.h6`
  color: #aaa8a8;
`;

const Text = styled.h6`
  color: white;
`;
