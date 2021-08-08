import React from "react";
import { connect } from "react-redux";
import styles from "./../TodoDetail/TodoDetail.module.css";

import { removeTodo, toInProgress, toDone } from "../../actions/index";

function TodoDetail({ todo, removeTodo, toInProgress, toDone, push }) {
  console.log(todo);

  return (
    <div className={styles.divRey}>
      <div className={styles.contImg}>
        <img src="http://pngimg.com/uploads/pin/pin_PNG64.png" alt="" />
        <p>State: {todo.status}</p>
      </div>

      <h2>{todo.title}</h2>

      <p>{todo.description}</p>
      <p>{todo.place}</p>
      <p>{todo.date}</p>
      <div className={styles.contButtons}>
        <button
          onClick={() => {
            toDone(todo.id);
            push("/");
          }}
        >
          Done
        </button>
        <button
          onClick={() => {
            toInProgress(todo.id);
            push("/");
          }}
        >
          In Progress
        </button>
        <button
          onClick={() => {
            removeTodo(todo.id);
            push("/");
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default connect(null, { removeTodo, toInProgress, toDone })(TodoDetail);
