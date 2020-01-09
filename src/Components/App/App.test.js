import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  describe('App unit tests', () => {
    it.skip('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})