import React from "react";
import Thanks from "../assets/icon-thank-you.svg";

export default function Thankyou() {
  return (
    <div>
      <div
        style={{
          padding: "8px 180px",
          marginTop: "50px",
        }}
      >
        <img
          src={Thanks}
          alt="thank-you"
          style={{
            width: "70%",
            justifyContent: "center",
          }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "20px 70px",
        }}
      >
        <h3>Thank you!</h3>
        <h6>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to mail us at
          @loremgaming.com
        </h6>
      </div>
    </div>
  );
}
