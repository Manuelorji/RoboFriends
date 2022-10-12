import React from "react";

function Scroll(props) {
  return (
    <div
      style={{
        overflow: "scroll",
        overflowX: "hidden",
        border: "none solid red",
        background: "",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
