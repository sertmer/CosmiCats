import React from 'react';
import { shallow } from 'enzyme';
import { ResearchContainer } from './ResearchContainer';

describe('ResearchContainer', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ResearchContainer />)
  })

  describe('ResearchContainer unit tests', () => {
    it.skip('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})