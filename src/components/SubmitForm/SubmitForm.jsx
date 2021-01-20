import React, { Component } from "react";
import styles from "./SubmitForm.module.scss";

class SubmitForm extends Component {
state = {
  entry: ""
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.onFormSubmit(this.state.entry);
  this.setState({entry : ""});
}

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} >
          <input 
            type="text"  
            placeholder="Add todo"
            value = {this.state.entry}
            onChange={(e) => this.setState({entry: e.target.value})} 
          />
          <div className = {styles.SubmitForm}>
            <button className="Add">Click to Add</button>
            </div>
          </form>
      </>
    );
  }
}

export default SubmitForm;
