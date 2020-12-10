import React, { Component } from 'react';
import "./App.css";
import Header from './components/Header';
import SubmitForm from './components/SubmitForm';
import TodoList from './components/TodoList';
import styles from './App.modules.scss';

class App extends Component {
  state = {
    tasks: ['task 1', 'task 2', 'task 3'],
    user: {}
  }

  async componentDidMount() {
    const url = await fetch ('https://api.randomuser.me/')
    .then(response =>  response.json())
    console.log(url);
    this.setState({user: url.results[0].name}) 
  };

  handleDelete = (index) => {
    const newArray = [...this.state.tasks];
    newArray.splice(index, 1);
    this.setState({tasks: newArray});
  }

  handleSubmit = (task) => {
    this.setState({tasks: [...this.state.tasks, task]})
  }


  render() { 
    return (
      <div class="container">
        <Header 
        tasks={this.state.tasks.length} 
        user={this.state.user}
        />
        <div className ="list_background">
        <TodoList 
          tasks={this.state.tasks}
          onDelete={this.handleDelete} 
        />
        <SubmitForm 
        onFormSubmit = {this.handleSubmit}
        />
        </div>
      </div>
    );
  }
}

export default App;