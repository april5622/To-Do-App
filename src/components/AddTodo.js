import React, { Component } from 'react';
import PropTypes from "prop-types";

// With an input value you would usually want a state in that component


export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        // e.target.value sets whatever we type in as the value in the input
        // e.target.name is the name whatever is in the input field some you dont
        //have to create mutilple onChange for each one.
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        //this will clear the field and set it back to nothing
        this.setState({title: ''})
    }

    render() {
        return (
            <form 
                style={{display: 'flex'}}
                onSubmit={this.onSubmit}>
               <input 
                    type="text" 
                    name= "title" 
                    style= {{flex: '10', padding: '5px'}}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style= {{flex: '1'}}
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addtodo: PropTypes.func.isRequired,
};

export default AddTodo;
