import React from 'react';
import { shallow } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Cohort staff={[{
      id: 1,
      name: 'Robbie',
      quote: 'pants...', superlative: 'Most likely to',
      studentCheck: 'staff'
    }]} students={[{
      id: 1,
      name: 'Sam',
      quote: 'Huh?', superlative: 'Most likely to',
      studentCheck: 'student'
    }]} removeStudent={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  })
})