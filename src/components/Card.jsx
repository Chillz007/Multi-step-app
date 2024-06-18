import React, { useState } from "react";
import Step from "./Step";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Summary2 from "./Summary2";
import Thankyou from "./Thankyou";

const userInfo = [
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

  return (
    <div>
      <Left>
        <Step />
        {userInfo[step]}
        {/* <PersonalInfo /> */}
        {/* <Plan /> */}
        {/* <AddOns /> */}
      </Left>
      <BtnWrapper>
        <Button onClick={handleNext}>Next</Button>
        <Button onClick={handleNext}>Go Back</Button>
      </BtnWrapper>
    </div>
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
  display: block;
  justify-content: space-between;
  width: 50%;
  margin: 10px;
  border: 1px solid red;
  /* margin-top: 500px; */
  /* margin-left: 0; */
`;

const Button = styled.button`
  margin: 0 auto;
  width: 100%;
`;
