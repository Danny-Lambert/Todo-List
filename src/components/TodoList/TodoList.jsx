import React, { Component } from "react";
import styles from "./TodoList.module.scss";
import Todo from "../Todo";

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((todo, index) => {
          return <Todo content={todo} key={index} id={index} onDelete={this.props.onDelete} />
        })}
      </div>
    );
  }
}

export default TodoList;
