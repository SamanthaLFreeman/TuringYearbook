import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  const staff = props.staff.map(person => <Person individual={person} key={person.id} studentCheck='staff'/>)
  const students = props.students.map(person => <Person individual={person} key={person.id} removeStudent={props.removeStudent} studentCheck='student'/>)

  return (
    <main className="cohortContainer">
      {staff}
      {students}
    </main>
  )
}

export default Cohort;
