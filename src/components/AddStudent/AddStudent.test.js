import React from 'react';
import { shallow } from 'enzyme';
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

})