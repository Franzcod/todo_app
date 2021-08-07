import React from "react";

export function Todo({ title }) {
  const style_4 = {
    textDecoration: "none",
    color: "white",
    backgroundColor: "#FF4848",
    borderRadius: "5px",
    // paddingBottom: "1px",
    // fontSize: "1.5rem",
    // fontWeight: "600",
    margin: "20px 0px",
  };

  return <div style={style_4}>{title}</div>;
}

export default Todo;
