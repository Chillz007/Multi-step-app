import React from "react";

export default function Summary2() {
  return (
    <div>
      <div>
        <h4>Finishing up</h4>
        <p>Double-check everything looks OK before confirming</p>
        <div
          style={{
            marginTop: "30px",
            padding: "18px 17px",
            backgroundColor: "hsl(217, 100%, 97%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "8px auto",
            }}
          >
            <div>
              <h4>Arcade (Yearly)</h4>
              <p>Change</p>
            </div>
            <h4>$90/mo</h4>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "8px auto",
            }}
          >
            <p>Online service</p>
            <p>+$10/mo</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "8px auto",
            }}
          >
            <p>Larger storage</p>
            <p>+$20/mo</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "30px auto",
          }}
        >
          <p>Total(per month)</p>
          <h3>+$120/mo</h3>
        </div>
      </div>
    </div>
  );
}
