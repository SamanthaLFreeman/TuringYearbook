import React from 'react';
import './Person.css';

const Person = ({individual, removeStudent, studentCheck}) => {
  const button = studentCheck === 'student' ? <button onClick={() => removeStudent(individual.id)}>Remove</button> : '';
  const editableCheck = studentCheck === 'student' ? true : false;
  
  return (
    <section className="personContainer" key={individual.id}>
      <img className="image" src={individual.photo} alt={individual.name} />
      <h3 className="name" contentEditable={editableCheck} suppressContentEditableWarning={true}>{individual.name}</h3>
      <p className="quote" contentEditable={editableCheck} suppressContentEditableWarning={true}>{individual.quote}</p>
      <p className="superlative" contentEditable={editableCheck} suppressContentEditableWarning={true}>{individual.superlative}</p>
      {button}
    </section>
  )
}

export default Person;
