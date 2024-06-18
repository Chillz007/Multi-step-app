import React from "react";

export default function PersonalInfo() {
  return (
    <div>
      <div style={{ width: "100%", paddingTop: "8px", margin: "" }}>
        <h3>Personal Info</h3>
        <p>Please provide your name, email address and phone number.</p>

        <form style={{ display: "block", margin: "15px 0" }}>
          <label>Name</label>
          <div>
            <input type="text" />
          </div>
          <label>Email</label>
          <div>
            <input type="email" />
          </div>
          <label>Phone Number</label>
          <div>
            <input type="phone number" />
          </div>
          <div style={{ marginTop: "50px", marginLeft: "280px" }}>
            <button
              style={{
                background: "#483EFF",
                color: "white",
                border: "none",
                padding: "8px 18px",
                borderRadius: "8px",
                fontSize: "13px",
              }}
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
