import React from "react";
import MarketingApp from "./components/MarketingApp";

export default () => {
  return (
    <>
      <h1>
        Hi there from container
        <hr />
        <div>
          <MarketingApp />
        </div>
      </h1>
    </>
  );
};
