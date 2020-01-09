import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from './LandingPage';

describe('LandingPage', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LandingPage />)
  })

  describe('Unit Tests', () => {
    it.skip('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})