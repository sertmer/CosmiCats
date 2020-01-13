import React from 'react';
import { NoURLMatch } from './NoURLMatch';
import { shallow } from 'enzyme';

describe('NoURLMatch', () => {
  let wrapper

  describe('NoURLMatch unit tests', () => {
    it('should match the snapshot', () => {
      wrapper = shallow(<NoURLMatch />)
      expect(wrapper).toMatchSnapshot()
    })
  })
  
})