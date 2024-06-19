import React from "react";

export default function PersonalInfo() {
  return (
    <div>
      <div style={{ width: "100%", paddingTop: "10px", margin: "15px" }}>
        <h3>Personal Info</h3>
        <p>Please provide your name, email address and phone number.</p>

        <form style={{ display: "block", margin: "25px 0", gap: "20px" }}>
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
        </form>
      </div>
    </div>
  );
}
