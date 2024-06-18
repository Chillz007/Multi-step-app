import React, { useState } from "react";
import Step from "./Step";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";

const userInfo = [<PersonalInfo />, <Plan />, <AddOns />, <Summary />];

export default function Card() {
  const [step, setStep] = useState(2);

  const handleNext = () => {
    setStep((step) => step + 1);
  };

  return (
    <Left>
      <Step />
      {userInfo[step]}
      {/* <PersonalInfo /> */}
      {/* <Plan /> */}
      {/* <AddOns /> */}
      {/* <BtnWrapper>
        <Button onClick={handleNext}>Next</Button>
      </BtnWrapper> */}
    </Left>
  );
}

const Left = styled.div`
  width: 60%;
  background-color: hsl(0, 0%, 100%);
  margin: 0 auto;
  height: 100%;
  padding: 8px;
  display: flex;
  gap: 50px;
  border-radius: 8px;
`;

const BtnWrapper = styled.div`
  width: 30%;
  margin: 0 auto;
  border: 1px solid red;
  margin-top: 300px;
`;

const Button = styled.button`
  margin: 0 auto;
  width: 100%;
`;
