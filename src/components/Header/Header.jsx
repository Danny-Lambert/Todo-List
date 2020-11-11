import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <>
        <h2>We have {this.props.tasks} todos left to todo</h2>
      </>
    );
  }
}

export default Header;
