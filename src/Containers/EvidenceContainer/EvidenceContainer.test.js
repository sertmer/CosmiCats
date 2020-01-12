import React from 'react';
import { shallow } from 'enzyme';
import { EvidenceContainer, mapStateToProps } from './EvidenceContainer'

describe('EvidenceContainer', () => {
  let wrapper
  let mockEvidence

  beforeEach(() => {
    mockEvidence = [{
      img: 'someURL.com',
      id: 'ab1',
      dateCreated: '12-12-12'
    }]

    wrapper = shallow(<EvidenceContainer evidence={mockEvidence}/>)
  })

  describe('EvidenceContainer unit tests', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with evidence', () => {
      const mockState = {
        evidence: mockEvidence,
        extra: 'extra'
      }

      const expected = {
        evidence: mockEvidence
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})