import React from "react";
import { Plans } from "../constant/data";
import PlanList from "./PlanList";
import styled from "styled-components";

export default function Plan() {
  return (
    <div>
      <div>
        <Container>Select your plan</Container>
        <p>You have the option of monthly or yearly billing.</p>
        <Wrapper>
          {Plans.map((plan) => {
            return <PlanList item={plan} key={plan.id} />;
          })}
        </Wrapper>

        <Subscription>
          <p>Monthly</p>
          <p>Yearly</p>
        </Subscription>

        {/* <Btn>
          <button
            style={{
              background: "hsl(213, 96%, 18%)",
              color: "white",
              border: "none",
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "13px",
            }}
          >
            Go Back
          </button>

          <button
            style={{
              background: "hsl(213, 96%, 18%)",
              color: "white",
              border: "none",
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "13px",
            }}
          >
            Next Step
          </button>
        </Btn> */}
      </div>
    </div>
  );
}

const Container = styled.h3`
  margin-top: 20px;
  font-weight: 800;
`;

const Wrapper = styled.ul`
  display: flex;
  margin: 20px 0;
  padding: 0;
`;

const Subscription = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: space-evenly;
  padding: 8px 0;
  background-color: hsl(217, 100%, 97%);
  border-bottom: 100px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const Btn = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-family: "Ubuntu" sans-serif;
`;
