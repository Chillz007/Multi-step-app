import React from "react";

export default function Step() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "0 auto" }}>
          <h6>1</h6>
        </div>

        <div>
          <h6 style={{ margin: "0" }}>STEP 1</h6>
          <h6 style={{ margin: "0" }}>YOUR INFO</h6>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "0 auto" }}>
          <h6>2</h6>
        </div>

        <div>
          <h6 style={{ margin: "0" }}>STEP 2</h6>
          <h6 style={{ margin: "0" }}>SELECT PLAN</h6>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "0 auto" }}>
          <h6>3</h6>
        </div>

        <div>
          <h6 style={{ margin: "0" }}>STEP 3</h6>
          <h6 style={{ margin: "0" }}>ADD-ONS</h6>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "0 auto" }}>
          <h6>4</h6>
        </div>

        <div>
          <h6 style={{ margin: "0" }}>STEP 4</h6>
          <h6 style={{ margin: "0" }}>SUMMARY</h6>
        </div>
      </div>
    </div>
  );
}
