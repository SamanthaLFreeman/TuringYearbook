import React from 'react';
import './Person.css';
import ContentEditable from 'react-contenteditable';

const Person = ({individual, removeStudent, studentCheck}) => {
  const button = studentCheck === 'student' ? <button onClick={() => removeStudent(individual.id)}>Remove</button> : '';
  const editableCheck = studentCheck === 'student' ? true : false;
  
  return (
    <section className="personContainer" key={individual.id}>
      <img className="image" src={individual.photo} alt={individual.name} />
      <h2 className="name" contentEditable={editableCheck}>{individual.name}</h2>
      <p className="quote" contentEditable={editableCheck}>{individual.quote}</p>
      <p className="superlative" contentEditable={editableCheck}>{individual.superlative}</p>
      {button}
    </section>
  )
}

export default Person;
