import React, { Component } from "react";
import styles from "./SubmitForm.module.scss";

class SubmitForm extends Component {
state = {
  entry: ""
}

handleSubmit = (e) => {
  e.preventDefault();
}

  render() {
    return (
      <>
        <form>
        <input 
        type="text"  
        placeholder="Add todo"
        value = {this.state.entry}
        onChange={(e) => this.setState({entry: e.target.value})} 
        />
        <button>Add</button>

        </form>
      </>
    );
  }
}

export default SubmitForm;
