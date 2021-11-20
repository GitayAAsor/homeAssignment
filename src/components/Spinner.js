import React from "react";
import spinner from "./graphics/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: "auto",
        height: "100%",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Spinner;
