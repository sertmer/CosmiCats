import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage, mapDispatchToProps } from './LandingPage';
import { setNasaImages } from '../../actions';

describe('LandingPage', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LandingPage />)
  })

  describe('Unit Tests', () => {
    it.skip('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with images when setImages is invoked', () => {
      const mockDispatch = jest.fn();
      const mockActionToDispatch = setNasaImages([
        {
          img: "nasaimage.com",
          id: "ARC-1983-AC83-0565-1",
          dateCreated: "1983-08-01T00:00:00Z"
        }, 
        {
          img: "nasaimage.com",
          id: "ADC-1934-AC83-0565-3",
          dateCreated: "1977-09-02T00:00:00Z"
        }
      ])
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setNasaImages([
        {
          img: "nasaimage.com",
          id: "ARC-1983-AC83-0565-1",
          dateCreated: "1983-08-01T00:00:00Z"
        }, 
        {
          img: "nasaimage.com",
          id: "ADC-1934-AC83-0565-3",
          dateCreated: "1977-09-02T00:00:00Z"
        }
      ])

      expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch)
    })
  })
})