import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  describe('Header unit tests', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})