import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home.js";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoDetail from "./components/TodoDetail/TodoDetail";

function App({ todos }) {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Home} />
      {/*<Route exact path="/add" component={AddTodo}   />*/}
      <Route
        exact
        path="/add"
        render={({ history }) => {
          return <AddTodo push={history.push} />;
        }}
      />
      {/*<Route exact path="/edit/:id" component={TodoDetail} />*/}
      <Route
        path="/edit/:id"
        exact
        render={({ match, history }) => {
          const todo = todos.find((el) => el.id === parseInt(match.params.id));
          return <TodoDetail todo={todo} push={history.push} />;
        }}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state,
  };
}

export default connect(mapStateToProps)(App);
