import React from "react";
import Todos from "../Todos/Todos";
import styles from "../Home/Home.module.css";

export function Home() {
  return (
    <div className={styles.contHome}>
      <Todos status="Todo" />
      <Todos status="InProgress" />
      <Todos status="Done" />
    </div>
  );
}

export default Home;
