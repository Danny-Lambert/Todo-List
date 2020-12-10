import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
      <h1>Welcome {this.props.user.title} {this.props.user.first} {this.props.user.last}</h1>
        <h2>We have {this.props.tasks} things left to to do</h2>
      </div>
    );
  }
}

export default Header;
