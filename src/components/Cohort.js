import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  return (
    <main className="cohortContainer">
      {props.staff.map(person => <Person individual={person} key={person.id}/>
      )}
      {props.students.map(person => <Person individual={person} key={person.id} />
      )}
    </main>
  )
}

export default Cohort;
