import React from 'react';
import { shallow } from 'enzyme';
import { ResearchContainer, mapStateToProps } from './ResearchContainer';

describe('ResearchContainer', () => {

  let wrapper
  let mockNasaImages
  let mockCatImages

  beforeEach(() => {
    mockNasaImages = [
      {
        id: 'ab1',
        img: 'url.com',
        dateCreated: '12-12-12'
      }
    ]

    mockCatImages = [
      {
        id: 'ab2',
        img: 'url2.com',
        dateCreated: '12-13-12'
      }
    ]
    wrapper = shallow(<ResearchContainer 
      nasaImages={mockNasaImages} 
      catImages={mockCatImages}
    />)
  })

  describe('ResearchContainer unit tests', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should return an objext with the images', () => {
      const mockState = {
        nasaImages: mockNasaImages,
        catImages: mockCatImages,
        user: 'Davey Havok'
      }

      const expected = {
        nasaImages: mockNasaImages,
        catImages: mockCatImages
      }
      
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})