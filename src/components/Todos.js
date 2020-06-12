import React, {Component} from 'react';
import TodoItem from "./TodoItem"
import PropTypes from "prop-types";


class Todos extends Component {
    render(){
      return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>  
        // todo is passed in a prop. 
        //When it mapping through like this, its creating a list. And list should have a key.
      ));
    }
  }
    
// PropTypes  
Todos.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
} 

export default Todos;

// prop types are property a component should have. We can set the type and if they 
// should be required.
