import React from 'react';
import { shallow, mount } from 'enzyme';
import AddStudent from './AddStudent';

describe('AddStudent', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<AddStudent addStudent={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when the input is changed', () => {
    const wrapper = shallow(<AddStudent addStudent={jest.fn()} />);
    const input = wrapper.find('.name-input');
    const expected = {
      photo: 'https://placekitten.com/200/300',
      name: 'Sam',
      quote: '',
      superlative: ''
    };

    input.simulate('change', { target: { name: 'name', value: 'Sam' } });

    expect(wrapper.state()).toEqual(expected);
  })

  it('should call addStudent method on click of the button with the saved state data for a new student', () => {
    const addStudent = jest.fn();
    const wrapper = mount(<AddStudent addStudent={addStudent} />);
    const newStudent = {
      id: 1,
      photo: 'https://placekitten.com/200/300',
      name: 'Sam',
      quote: 'blah',
      superlative: 'Most Likely to'
    }
    
    wrapper.setState({
      id: 1,
      photo: 'https://placekitten.com/200/300',
      name: 'Sam',
      quote: 'blah',
      superlative: 'Most Likely to'
    })
    wrapper.find('button').simulate('click');

    expect(addStudent).toHaveBeenCalledWith(newStudent);
  })
})