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

    it('should increment state.counter when user clicks view next', () => {
      wrapper.setState({counter: 0})
      wrapper.find('.research-btn').simulate('click')

      expect(wrapper.state('counter')).toEqual(1)
    })

    it('should decrement state.counter when user clicks view previous', () => {
      wrapper.setState({counter: 139})
      wrapper.find('.research-btn').simulate('click')

      expect(wrapper.state('counter')).toEqual(138)
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with the images', () => {
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