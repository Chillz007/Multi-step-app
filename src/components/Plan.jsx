import React from "react";
import { Plans } from "../constant/data";
import PlanList from "./PlanList";
import styled from "styled-components";

export default function Plan() {
  return (
    <div>
      <div>
        <h3 style={{}}>Select your plan</h3>
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
`;

const Btn = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-family: "Ubuntu" sans-serif;
`;
