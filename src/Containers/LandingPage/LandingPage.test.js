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

    it('should return an array of cleaned data when cleanData is invoked', () => {
      const mockDataToClean = {
        collection: {
          items: [
            {
              links: [{rel: 'preview', href: 'somelink.com'}],
              data: [{keywords: [], date_created: 'dec 12', nasa_id: '12'}]
            },
            {
              links: [{rel: 'preview', href: 'somelink2.com'}],
              data: [{keywords: [], date_created: 'dec 13', nasa_id: '13'}]
            }
          ]
        }
      }

      const expected = [
        {
          img: 'somelink.com',
          id: '12',
          dateCreated: 'dec 12'
        },
        {
          img: 'somelink2.com',
          id: '13',
          dateCreated: 'dec 13'
        }
     ]

     expect(wrapper.instance().cleanData(mockDataToClean)).toEqual(expected)
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