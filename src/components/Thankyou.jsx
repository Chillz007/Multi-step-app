import React from "react";
import Thanks from "../assets/icon-thank-you.svg";
import styled from "styled-components";

export default function Thankyou() {
  return (
    <Container>
      <img style={{ margin: "0 auto" }} src={Thanks} alt="thanks-svg" />

      <Text>
        Thanks for confirming your subscription! we hope you have fun using our
        platform. If you ever need suport , please feel free to email us at
        support@loremgaming.com
      </Text>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  margin: 70px auto;
`;

const Img = styled.div`
  width: 20%;
  margin: 0 50px;
`;

const Text = styled.div`
  text-align: center;
  font: x-small;
  font-weight: 100;
  margin: 0 auto;
  width: 70%;
`;
