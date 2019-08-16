import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import AddStudent from '../AddStudent/AddStudent';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addStudent = (newStudent) => {
    this.setState({ students: [...this.state.students, newStudent] });
  }

  removeStudent = (id) => {
    const filterStudents = this.state.students.filter(student => student.id !== id);
    this.setState({ students: filterStudents })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <AddStudent addStudent={this.addStudent}/>
      <Cohort staff={this.state.staff} students={this.state.students} removeStudent={this.removeStudent}/>
      </div>
    );
  }
}

export default App;
