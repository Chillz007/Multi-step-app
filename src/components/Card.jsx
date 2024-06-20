import React, { useState } from "react";
import Step from "./Step";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Summary2 from "./Summary2";
import Thankyou from "./Thankyou";
import Background from "./Background";

const userInfo = [
  // <Background />,
  <PersonalInfo />,
  <Plan />,
  <AddOns />,
  <Summary />,
  <Summary2 />,
  <Thankyou />,
];

export default function Card() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const handleBack = () => {
    setStep((step) => step - 1);
  };

  return (
    <div>
      <Left>
        <Background />
        <div>
          {userInfo[step]}
          {/* <PersonalInfo /> */}
          {/* <Plan /> */}
          {/* <AddOns /> */}
          <Btn>
            <div>
              <Button onClick={() => handleBack(0)}>Go Back</Button>
            </div>
            <div>
              <Button onClick={() => handleNext(1)}>Next Step</Button>
            </div>
          </Btn>
        </div>
      </Left>
    </div>
  );
}

const Left = styled.div`
  width: 70%;
  background-color: hsl(0, 0%, 100%);
  margin: 0 auto;
  height: 100%;
  padding: 8px;
  display: flex;
  gap: 50px;
  border-radius: 8px;
`;

const Btn = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Ubuntu";
  margin: 0 auto;
`;

const Button = styled.button`
  width: 100%;
  padding: 5px 15px;
  margin-left: 7px;
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: small;
  font-family: "Ubuntu";
  font-weight: 500;
  border: 1px solid #1c11f7;
  background-color: #1c11f7;
  color: white;
  border-radius: 8px;
`;
