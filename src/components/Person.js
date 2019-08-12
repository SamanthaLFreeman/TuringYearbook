import React from 'react';
import './Person.css';

const Person = ({individual}) => {
  return (
    <section className="personContainer" key={individual.id}>
      <img className="image" src={individual.photo} alt={individual.name} />
      <p className="name">{individual.name}</p>
      <p className="quote">"{individual.quote}"</p>
      <p className="superlative">{individual.superlative}</p>
    </section>
  )
}

export default Person;
