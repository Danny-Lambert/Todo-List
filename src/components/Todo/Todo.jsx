import React, { Component } from "react";
import styles from "./Todo.module.scss";

class Todo extends Component {
  render() {
    return (
      <div className={styles.todo}>
        <p input type="text">{this.props.content}</p>
        <button className="removeButton" onClick={() => this.props.onDelete(this.props.id)}>Delete item</button>
      </div>
    );
  }
}

export default Todo;
