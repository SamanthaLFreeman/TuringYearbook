import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

describe('App', () => {

  it('should update state with a new student', () => {
    const wrapper = shallow(<App />);
    const mockStudent = {
      id: 1,
      name: 'Sam',
      quote: 'hmmm',
      superlative: 'Most likely to'
    };
    const mockStudent2 = {
      id: 2,
      name: 'Jessie',
      quote: 'ummm',
      superlative: 'Most likely to'
    }
    const expected = [mockStudent, mockStudent2];

    wrapper.setState({students: [mockStudent]});
    wrapper.instance().addStudent(mockStudent2);

    expect(wrapper.state('students')).toEqual(expected)
  })

  

})