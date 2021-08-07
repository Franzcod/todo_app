import React from "react";
import { connect } from "react-redux";

import { removeTodo, toInProgress, toDone } from "../../actions/index";

function TodoDetail({ todo, removeTodo, toInProgress, toDone, push }) {
  console.log(todo);
  // console.log(todo.title);
  // console.log(todo.description);
  // console.log(todo.place);
  // console.log(todo.date);

  const style = {
    backgroundColor: "#F5FDB0",
    // backgroundColor: "#FF4848",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
    textDecoration: "none",
    color: "black",
    width: "60vw",
    maxWidth: "500px",
    margin: "30px auto",
    borderRadius: "0 0 42px 0",
  };

  const style_2 = { margin: "5px" };

  const style_3 = {
    margin: "15px",
    color: "white",
    backgroundColor: "#FF4848",
    fontWeight: "600",
    fontSize: "1.5rem",
    border: "none",
    padding: "5px",
    borderRadius: "5px",
  };

  const style_contImg = {
    display: "flex",

    margin: "10px auto",
    width: "95%",
    justifyContent: "space-between",
    height: "fit-content",
  };

  const style_img = {
    width: "10%",
  };

  return (
    <div style={style}>
      <div style={style_contImg}>
        <img
          style={style_img}
          src="http://pngimg.com/uploads/pin/pin_PNG64.png"
          alt=""
        />
        <p>State: {todo.status}</p>
      </div>

      <h2>{todo.title}</h2>
      <hr />
      <h4 style={style_2}>{todo.description}</h4>
      <h4 style={style_2}>{todo.place}</h4>
      <h4 style={style_2}>{todo.date}</h4>
      <div>
        <button
          style={style_3}
          onClick={() => {
            toDone(todo.id);
            push("/");
          }}
        >
          Done
        </button>
        <button
          style={style_3}
          onClick={() => {
            toInProgress(todo.id);
            push("/");
          }}
        >
          In Progress
        </button>
        <button
          style={style_3}
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

// function mapStateToProps(state) {
//   return {
//     todos: state,
//   };
// }

export default connect(null, { removeTodo, toInProgress, toDone })(TodoDetail);
