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
          <SubmitForm 
          onFormSubmit = {this.handleSubmit}
          />
        <div className ="list_background">
        <TodoList 
          tasks={this.state.tasks}
          onDelete={this.handleDelete} 
        />
        </div>
      </div>
    );
  }
}

export default App;

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.2.3/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>