import React from 'react';
import { shallow } from 'enzyme';
import { removeFromEvidence } from '../../actions'
import { Evidence, mapDispatchToProps } from './Evidence';

describe('Evidence', () => {
  let wrapper
  let mockEvidence
  let mockRemoveFromEvidence

  beforeEach(() =>{
    mockRemoveFromEvidence = jest.fn()
    mockEvidence = {
      img: 'someURL.com',
      id: 'ab1',
      dateCreated: '12-12-12'
    }

    wrapper = shallow(<Evidence 
      evidence={mockEvidence} 
      removeFromEvidence={mockRemoveFromEvidence}
    />)
  })

  describe('Evidence unit tests', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call removeFromEvidence when user clicks delete', () => {
      wrapper.find('button').simulate('click')

      expect(mockRemoveFromEvidence).toHaveBeenCalledWith(mockEvidence)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the removeEvidence action', () => {
      const mockDispatch = jest.fn()
      const mockRemoveFromEvidenceAction = removeFromEvidence(mockEvidence)
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.removeFromEvidence(mockEvidence)

      expect(mockDispatch).toHaveBeenCalledWith(mockRemoveFromEvidenceAction)
    })
  })
})