import React from "react";
import Instruction from "./Instruction";
import UsageRules from "./UsageRules";

function RulesComponent() {
  return (
    <div className="rules-component-wrapper container">
      <Instruction />
      <UsageRules />
    </div>
  );
}

export default RulesComponent;
