import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  const staff = props.staff.map(person => <Person individual={person} key={person.id} studentCheck='staff'/>)
  const students = props.students.map(person => <Person individual={person} key={person.id} removeStudent={props.removeStudent} studentCheck='student'/>)

  return (
    <main className="cohortContainer">
      <h2>Staff</h2>
      <div className="staff">{staff}</div>
      <h2>Students</h2>
      <div className="students">{students}</div>
    </main>
  )
}

export default Cohort;
