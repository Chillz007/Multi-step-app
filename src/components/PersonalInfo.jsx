import React from "react";
import styled from "styled-components";

export default function PersonalInfo() {
  return (
    <div>
      <div style={{ width: "100%", paddingTop: "10px", margin: "15px" }}>
        <h3>Personal Info</h3>
        <Subtext>
          Please provide your name, email address and phone number.
        </Subtext>

        <form style={{ display: "block", margin: "25px 0", gap: "50px" }}>
          <Itemholder>
            <label>Name</label>
            <input type="text" />
          </Itemholder>
          <Itemholder>
            <label>Email</label>
            <input type="email" />
          </Itemholder>
          <Itemholder>
            <label>Phone Number</label>
            <input type="phone number" />
          </Itemholder>
        </form>
      </div>
    </div>
  );
}

const Itemholder = styled.div`
  margin: 10px 0;
  font-family: "Ubuntu" sans-serif;
  .ubuntu-regular {
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

const Subtext = styled.p`
  font-weight: 400;
  font-size: small;
  color: gray;
  margin: 8px 0;
`;
