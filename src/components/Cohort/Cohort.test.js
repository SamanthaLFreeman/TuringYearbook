import React from 'react';
import { shallow } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Cohort staff={[]} students={[]} removeStudent={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  })
})