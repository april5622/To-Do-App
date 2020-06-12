import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../src/components/layout/Header";
import About from "../src/components/pages/About";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
//import uuid from 'react-uuid';

import './App.css';

// State is in here.

class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: "Takeout the trash",
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: "Dinner with friends",
      //   completed: false
      // },
      // {
      //   id: 3,
      //   title: "Meeting with boss",
      //   completed: false
      // }
    ]
  }

  // Using another lifecyle method
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10') //?_limit=10 limits it to 10
      .then(res => this.setState({todos: res.data}))
  }


  // Toggle Complete
  markComplete = (id) => {
    // state as whole and change something in todos
    //need to match the id in markComplete
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  };

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>  this.setState({ todos: [...this.state.todos.filter(todo => 
        todo.id !== id
      )]}))
    // ... is a spread operator that takes whatever is already there
    // filter out the id we are deleting 
    // this.setState({ todos: [...this.state.todos.filter(todo => 
    //   todo.id !== id
    // )]})
  };

  // Add Todo
  addTodo = (title) => {
    // NOT NEED SINCE USING AXIOS
    // const newTodo = {
    //   id: uuid(), // package will create a new id 
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
      .then(res => this.setState({todos: [...this.state.todos, res.data]}));
    //this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render(){
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className= "container">
            <Header />
            <Route exact path= '/' render={props => (
                <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/> 
                    {/* props add to pass this state to Todos component */}
                </React.Fragment>
            )} />
            <Route path= "/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
  
export default App;
