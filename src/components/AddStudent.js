import React, { Component } from 'react';
import './AddStudent.css'

class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      photo: 'https://placekitten.com/200/300',
      name: "",
      quote: "",
      superlative: ""
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    const newStudent = {
      id: Date.now(),
      ...this.state
    }
    e.preventDefault();
    this.props.addStudent(newStudent)
    this.setState({
      name: "",
      quote: "",
      superlative: ""
    });
  }

  render() {
    return (
      <form>
        <input 
        type="text" 
        placeholder="name" 
        name="name" 
        value={this.state.name} 
        onChange={this.handleChange}
></input>
        <input 
        type="text" 
        placeholder="quote" 
        name="quote" 
        value={this.state.quote} 
        onChange={this.handleChange}
></input>
        <input 
        type="text" 
        placeholder="superlative" 
        name="superlative"
        value={this.state.superlative}
        onChange={this.handleChange}
></input>
        <button
        onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </form>
    )
  }
}

export default AddStudent;