import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('Login', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Login />)
  })

  describe('Login unit tests', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})