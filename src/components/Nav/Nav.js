import React from "react";
import { Link } from "react-router-dom";

// import styles from "./Nav.module.css";

export function Nav() {
  const style = {
    width: "90vw",
    backgroundColor: "#FF4848",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "2px 20px",
    // paddingRight: "50px",
    textDecoration: "none",
    color: "white",
  };

  const style_2 = {
    textDecoration: "none",
    color: "white",
  };

  const style_cont = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FF4848",
  };

  return (
    <div style={style_cont}>
      <div style={style}>
        <Link to="/" style={style_2}>
          <h2>TODOS</h2>
        </Link>

        <Link to="/add" style={style_2}>
          <h2>+ Add</h2>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
