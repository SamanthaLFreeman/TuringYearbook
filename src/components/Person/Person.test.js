import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should match the snapshot with all data passed in correctly if they are a student', () => {
    const person = { 
      id: 1, 
      name: 'Sam', 
      quote: 'Huh?', superlative: 'Most likely to', 
      studentCheck: 'student'
    }
    const wrapper = shallow(<Person individual={person} removeStudent={jest.fn()} studentCheck={'student'}/>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with all data passed in correctly if they are staff', () => {
    const person = {
      id: 1,
      name: 'Robbie',
      quote: 'pants...', superlative: 'Most likely to',
      studentCheck: 'staff'
    }
    const wrapper = shallow(<Person individual={person} removeStudent={jest.fn()} studentCheck={'staff'} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should call removeStudent prop with the person\'s id when clicked', () => {
    const removeStudent = jest.fn()
    const person = {
      id: 1,
      name: 'Sam',
      quote: 'Huh?', superlative: 'Most likely to',
      studentCheck: 'student'
    }
    const wrapper = shallow(<Person individual={person} removeStudent={removeStudent} studentCheck={'student'} />)
    
    wrapper.find('button').simulate('click')

    expect(removeStudent).toHaveBeenCalledWith(1)
  })

})