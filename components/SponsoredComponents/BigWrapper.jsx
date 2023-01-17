import React from "react";
import FeatureList from "./FeatureList";
import QuickMenu from "../QuickMenuComponents/QuickMenu";

function BigWrapper() {
  return (
    <div className="big-wrapper">
      <FeatureList />
      <QuickMenu />
    </div>
  );
}

export default BigWrapper;
