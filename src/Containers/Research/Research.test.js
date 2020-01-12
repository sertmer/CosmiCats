import React from 'react';
import { shallow } from 'enzyme';
import { addToEvidence } from '../../actions'
import { Research, mapDispatchToProps } from './Research';

describe('Research', () => {

  let wrapper
  let mockAddToEvidence
  let mockCaseStudy

  beforeEach(() => {
    mockCaseStudy = {
      img: 'url.com',
      id: 'ab1',
      dateCreated: '12-12-12'
    }
    wrapper = shallow(<Research caseStudy={mockCaseStudy}/>)
  })

  describe('Research unit tests', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addToEvidence action', () => {
      const mockEvidence = {
        img: 'url.com',
        id: 'ab1',
        dateCreated: '12-12-12'
      }
  
      const mockDispatch = jest.fn()
      const mockAddToEvidenceAction = addToEvidence(mockEvidence)
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      mappedProps.addToEvidence(mockEvidence)
  
      expect(mockDispatch).toHaveBeenCalledWith(mockAddToEvidenceAction)
    })
  })
})