import React from 'react';
import { shallow } from 'enzyme';
import AddStudent from './AddStudent';

describe('AddStudent', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<AddStudent addStudent={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  })
})