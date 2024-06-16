import React from "react";
import Step from "./components/Step";
import PersonalInfo from "./components/PersonalInfo";

export default function App() {
  return (
    <div className="steps">
      <div className="myBackground">
        <div>
          <Step />
        </div>
      </div>
      <PersonalInfo />
    </div>
  );
}
