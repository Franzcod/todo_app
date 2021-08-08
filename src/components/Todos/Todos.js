import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Todo from "../../components/Todo/Todo";
import styles from "../Todos/Todos.module.css";

export function Todos({ todos, status }) {
  return (
    <div className={styles.contRey}>
      <span className={styles.status}>{status}</span>

      {todos
        .filter(function (el) {
          return el.status === status;
        })
        .map(function (el) {
          return (
            <Link key={el.id} className={styles.linkTodo} to={`/edit/${el.id}`}>
              <Todo title={el.title} />
            </Link>
          );
        })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state,
  };
}

export default connect(mapStateToProps)(Todos);
