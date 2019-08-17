import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const person = { 
      id: 1, 
      name: 'Sam', 
      quote: 'Huh?', superlative: 'Most likely to', 
      studentCheck: 'student'
    }
    const wrapper = shallow(<Person individual={person}  removeStudent={jest.fn()} />)

    expect(wrapper).toMatchSnapshot()
  })

})