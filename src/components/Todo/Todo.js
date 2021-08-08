import React from "react";
import styles from "./../Todo/Todo.module.css";

export function Todo({ title }) {
  return (
    <div className={styles.divRey}>
      <h3>{title}</h3>
    </div>
  );
}

export default Todo;
