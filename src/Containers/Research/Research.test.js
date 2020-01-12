import React from 'react';
import { shallow } from 'enzyme';
import { addToEvidence } from '../../actions'
import { Research, mapDispatchToProps } from './Research';

describe('Research', () => {

  let wrapper
  let mockAddToEvidence
  let mockCaseStudy

  beforeEach(() => {
    mockAddToEvidence = jest.fn()
    mockCaseStudy = {
      img: 'url.com',
      id: 'ab1',
      dateCreated: '12-12-12'
    }
    wrapper = shallow(<Research 
      caseStudy={mockCaseStudy} 
      addToEvidence={mockAddToEvidence}
    />)
  })

  describe('Research unit tests', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call addToEvidence when the user clicks the button', () => {
      wrapper.find('button').simulate('click')

      expect(mockAddToEvidence).toHaveBeenCalledWith(mockCaseStudy)
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