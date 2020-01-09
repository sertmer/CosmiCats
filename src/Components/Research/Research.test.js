import React from 'react';
import { shallow } from 'enzyme';
import { Research } from './Research';

describe('Research', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Research />)
  })

  describe('Research unit tests', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})