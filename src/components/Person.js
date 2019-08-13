import React from 'react';
import './Person.css';
import ContentEditable from 'react-contenteditable';

const Person = ({individual, removeStudent, studentCheck}) => {
  const button = studentCheck === 'student' ? <button onClick={() => removeStudent(individual.id)}>Remove</button> : '';
  
  return (
    <section className="personContainer" key={individual.id}>
      <img className="image" src={individual.photo} alt={individual.name} />
      <ContentEditable className="name" html={individual.name}/>
      <ContentEditable className="quote" html={individual.quote} />
      <ContentEditable className="superlative" html={individual.superlative} />
      {button}
    </section>
  )
}

export default Person;
